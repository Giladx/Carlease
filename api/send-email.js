const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = 'UnitedAutolease@gmail.com';
const CC_EMAIL = 'Ben@unitedautolease.com';
// Set FROM_EMAIL in Vercel env vars once your domain is verified in Resend.
// Until then, use: "United Auto Lease <onboarding@resend.dev>"
const FROM_EMAIL = process.env.FROM_EMAIL || 'United Auto Lease <onboarding@resend.dev>';

const ALLOWED_ORIGINS = [
    'https://unitedautolease.com',
    'https://www.unitedautolease.com',
    'http://localhost:3000'
];

// Simple in-memory rate limiter (resets on cold start, which is fine for serverless)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5; // max 5 requests per IP per window

function isRateLimited(ip) {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { windowStart: now, count: 1 });
        return false;
    }
    entry.count++;
    return entry.count > RATE_LIMIT_MAX;
}

module.exports = async function handler(req, res) {
    const origin = req.headers.origin || '';
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    // Rate limiting
    const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
    if (isRateLimited(clientIp)) {
        return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const {
        subject,
        formType,
        customerEmail,
        customerName,
        customerMessage,
        fields,
        attachments = [],
        _honeypot,
        _formLoadedAt
    } = req.body;

    // Honeypot check: if the hidden field has a value, it's a bot
    if (_honeypot) {
        // Silently accept so bots think it worked
        return res.status(200).json({ success: true });
    }

    // Time-based check: reject if form was submitted in less than 3 seconds
    if (_formLoadedAt) {
        const elapsed = Date.now() - Number(_formLoadedAt);
        if (elapsed < 3000) {
            return res.status(200).json({ success: true });
        }
    }

    if (!subject || !formType) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Build base64 attachments for Resend
    const resendAttachments = attachments
        .filter(a => a && a.content && a.filename)
        .map(a => ({ filename: a.filename, content: a.content }));

    const ownerHtml = buildOwnerEmail(formType, customerName, customerEmail, customerMessage, fields);
    const confirmHtml = buildConfirmEmail(customerName, formType);

    try {
        // Email to owner
        await resend.emails.send({
            from: FROM_EMAIL,
            to: [OWNER_EMAIL],
            cc: [CC_EMAIL],
            replyTo: customerEmail || undefined,
            subject: subject,
            html: ownerHtml,
            attachments: resendAttachments
        });

        // Confirmation email to customer
        if (customerEmail) {
            await resend.emails.send({
                from: FROM_EMAIL,
                to: [customerEmail],
                subject: `We received your ${formType} – United Auto Lease`,
                html: confirmHtml
            });
        }

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Resend error:', err);
        return res.status(500).json({ error: 'Failed to send email', detail: err.message });
    }
};

function buildOwnerEmail(formType, customerName, customerEmail, customerMessage, fields) {
    const rows = Object.entries(fields || {})
        .filter(([, v]) => v !== undefined && v !== null && v !== '')
        .map(([k, v]) => `
            <tr>
                <td style="padding:8px 12px;border:1px solid #dde3ea;background:#f7f9fc;font-weight:600;white-space:nowrap;color:#374151;">${escapeHtml(camelToLabel(k))}</td>
                <td style="padding:8px 12px;border:1px solid #dde3ea;color:#111827;">${escapeHtml(String(v))}</td>
            </tr>`)
        .join('');

    return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
  <tr><td align="center" style="padding:30px 20px;">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

      <!-- Header -->
      <tr><td style="background:#0a2540;padding:28px 32px;text-align:center;">
        <h1 style="margin:0;color:#fff;font-size:22px;">United Auto Lease</h1>
        <p style="margin:6px 0 0;color:#90caf9;font-size:15px;">New ${escapeHtml(formType)}</p>
      </td></tr>

      <!-- Summary -->
      <tr><td style="padding:24px 32px 16px;">
        <table cellpadding="0" cellspacing="0" style="width:100%;background:#f0f7ff;border-radius:8px;padding:16px;">
          <tr>
            <td style="font-size:14px;color:#374151;padding:4px 0;"><strong>Name:</strong> ${escapeHtml(customerName || 'N/A')}</td>
          </tr>
          <tr>
            <td style="font-size:14px;color:#374151;padding:4px 0;"><strong>Email:</strong> ${escapeHtml(customerEmail || 'N/A')}</td>
          </tr>
          ${customerMessage ? `<tr><td style="font-size:14px;color:#374151;padding:4px 0;"><strong>Message:</strong> ${escapeHtml(customerMessage)}</td></tr>` : ''}
        </table>
      </td></tr>

      <!-- Fields table -->
      <tr><td style="padding:8px 32px 32px;">
        <h3 style="margin:0 0 12px;color:#0a2540;font-size:16px;">Form Details</h3>
        <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rows}
        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td style="background:#f7f9fc;padding:16px 32px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#9ca3af;">United Auto Lease &bull; (305) 724-5534 &bull; unitedautolease.com</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function buildConfirmEmail(customerName, formType) {
    return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
  <tr><td align="center" style="padding:30px 20px;">
    <table width="580" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

      <!-- Header -->
      <tr><td style="background:#0a2540;padding:28px 32px;text-align:center;">
        <h1 style="margin:0;color:#fff;font-size:22px;">United Auto Lease</h1>
      </td></tr>

      <!-- Body -->
      <tr><td style="padding:32px;">
        <h2 style="margin:0 0 16px;color:#0a2540;font-size:20px;">We received your application!</h2>
        <p style="margin:0 0 12px;color:#374151;font-size:15px;line-height:1.6;">Hi ${escapeHtml(customerName || 'there')},</p>
        <p style="margin:0 0 12px;color:#374151;font-size:15px;line-height:1.6;">
            Thank you for submitting your <strong>${escapeHtml(formType)}</strong> with United Auto Lease.
            Our team will review your information and contact you within <strong>24 hours</strong>.
        </p>
        <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.6;">
            Need immediate assistance? Call us at <a href="tel:3057245534" style="color:#0077cc;font-weight:600;">(305) 724-5534</a>.
        </p>
        <p style="margin:0;color:#374151;font-size:15px;">Best regards,<br><strong>United Auto Lease Team</strong></p>
      </td></tr>

      <!-- Footer -->
      <tr><td style="background:#f7f9fc;padding:16px 32px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#9ca3af;">United Auto Lease &bull; (305) 724-5534 &bull; unitedautolease.com</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function camelToLabel(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, s => s.toUpperCase())
        .trim();
}
