// Vehicle Leasing Data - Clean 3/4 Angle Studio Images
const vehiclesData = [
    // HONDA (13 models)
    {
        id: 1,
        manufacturer: "Honda",
        name: "Accord",
        category: "Sedan",
        leasePrice: "$349/mo",
        dealerLocation: "Los Angeles, CA",
        description: "The Honda Accord delivers sophistication with a turbocharged 1.5L or 2.0L engine, Honda Sensing® safety suite, wireless Apple CarPlay®/Android Auto™, and spacious interior. Fuel economy up to 38 MPG highway.",
        image: "https://www.genspark.ai/api/files/s/J1VVLmXs"
    },
    {
        id: 2,
        manufacturer: "Honda",
        name: "Civic",
        category: "Sedan",
        leasePrice: "$299/mo",
        dealerLocation: "Miami, FL",
        description: "The Honda Civic features a sport-tuned suspension, 158-180 HP turbocharged engine, Honda Sensing® standard, 14.8 cu ft trunk, and advanced tech. Fuel economy up to 42 MPG highway. Perfect blend of fun and efficiency.",
        image: "https://sspark.genspark.ai/cfimages?u1=%2FdW57UmyS10Hgkl1prFU5J2BJ6ibzB50wp1d7ejKYkdwS6gYM0ck%2B2kWMYF7uBPyeFpVgu982%2BhZqH6xQp6sMWSgWBSe2ZYUec03bGSBy6u3PwO%2BndRKp2RXki5xbEo3MRom1TtFuA%3D%3D&u2=BIlGJ2xJQ4G2xPap&width=2560"
    },
    {
        id: 3,
        manufacturer: "Honda",
        name: "CR-V",
        category: "SUV",
        leasePrice: "$329/mo",
        dealerLocation: "Houston, TX",
        description: "Honda's best-selling CR-V offers seating for 5, up to 76.5 cu ft cargo, Real Time AWD™, turbo 1.5L 190 HP, hands-free power tailgate, panoramic sunroof, and 8.2 in ground clearance. Up to 34 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=jC48DE1OiYWzOU1gA%2BlfBJoxbzIyALXcY8Axz7jVxftFYwfd4J5m6WED16eB3dNv%2BwLSVBjfBXj1Kw3offhSd95Yb4SlNxFFtZIOswbhgAfmqxKkv6eHxJQwqpfxJ%2FVb3kZUNnl%2F4c9UJD2b9jWdvfixUw%3D%3D&u2=jvLa%2Fg3b7wcONDUd&width=2560"
    },
    {
        id: 4,
        manufacturer: "Honda",
        name: "Pilot",
        category: "SUV",
        leasePrice: "$449/mo",
        dealerLocation: "Chicago, IL",
        description: "3-row SUV seating up to 8, up to 83.9 cu ft cargo, 280 HP V6 engine, i-VTM4® AWD, 5,000 lb towing. Features one-touch 2nd row, wireless charging, premium audio, CabinWatch™, and CabinTalk™.",
        image: "https://sspark.genspark.ai/cfimages?u1=XbEfZQELbnZ46IBoMLKA8BT5Kx5hNM96pcS2Weqfvo8JMfyUzUJHPfJ8C2sXLXytBqaw0VjsST7jPsUOIY3J0kdfugz%2BCYSeejmgXIU3Y5tZByIuq%2Fmy1tDfZjZgoag4ZNoJSKfOnDpAE3QsLQ0ef2CBdd4mvDG15XwI%2B1NjRM6kQiWP0w%3D%3D&u2=N1A%2FyA0%2FumzWPlxu&width=2560"
    },
    {
        id: 5,
        manufacturer: "Honda",
        name: "HR-V",
        category: "SUV",
        leasePrice: "$279/mo",
        dealerLocation: "Atlanta, GA",
        description: "Subcompact SUV with Honda's Magic Seat® system, AWD capability, 55.9 cu ft cargo space, and impressive fuel economy around 29 MPG city / 35 MPG highway. Perfect urban adventurer.",
        image: "https://sspark.genspark.ai/cfimages?u1=zG6mW4AWKZrtilMer6nJSnDYfZxmHZUXZLqMhTVn7%2BGUsp0dOuSwBVTRAIA14sshQI3nFLbuVd2XnXseFs%2BpFIpFC%2FKUD9oj4Rp8GR1mZoJO0PA8Wp8N54lVrMY%2FUrFptVf23wM9AMWrWXOlk0seRl2EBZ4K%2BrMwgibP8YQ%3D&u2=DZV7VRVwB4gSWgFd&width=2560"
    },
    {
        id: 6,
        manufacturer: "Honda",
        name: "Passport",
        category: "SUV",
        leasePrice: "$429/mo",
        dealerLocation: "Phoenix, AZ",
        description: "Rugged 2-row SUV with 280 HP V6, 8.1 in ground clearance, 5,000 lb towing, roof rails with crossbars, underfloor storage, all-terrain tires, off-road tuned suspension, and roomy 2nd row.",
        image: "https://sspark.genspark.ai/cfimages?u1=d%2BKasVFUeZY5JdqN6%2BXzBkgP4hLJvU7y8R3H6PSwlxQe7LSQM%2B9tJcKzvabnueNAgPxF396EMxNiXAqnvWWTCRPlDnvPjeUkofae7RRzIp%2FUr4rXX9%2F%2FZQVk%2F5jl7SSbAtRHh55YkDtjMZR3lfBlPq6h&u2=f9%2Br4Agn6FDJKy3N&width=2560"
    },
    {
        id: 7,
        manufacturer: "Honda",
        name: "Accord Hybrid",
        category: "Hybrid",
        leasePrice: "$319/mo",
        dealerLocation: "San Diego, CA",
        description: "Hybrid efficiency meets Accord luxury: up to 48 MPG city / 47 MPG highway, 204 combined HP, 2.0L Atkinson-cycle with electric motors, smooth hybrid system, premium features, and spacious cabin.",
        image: "https://sspark.genspark.ai/cfimages?u1=tHGAFovvdx1Z5fryaw4umzIIVDk48Xl%2F%2BgKQ1CH1no1lMoKGloslnV819WI6i9e%2BnzCQ7DxaaGFYjI8JD3Zlc4oI9St2AgmsKWxAaeIDE3zACCWVLT%2BTSMZxzw8eLKWuwslC2%2B6XqQ%3D%3D&u2=2lxh40Ru9ZcVsKOT&width=2560"
    },
    {
        id: 8,
        manufacturer: "Honda",
        name: "CR-V Hybrid",
        category: "Hybrid",
        leasePrice: "$369/mo",
        dealerLocation: "Seattle, WA",
        description: "Practicality meets efficiency: ~40 MPG city / 35 MPG highway, standard AWD, 204 combined HP, instant electric torque, Real Time AWD™, and all the space and versatility of the CR-V.",
        image: "https://sspark.genspark.ai/cfimages?u1=d%2BKasVFUeZY5JdqN6%2BXzBkgP4hLJvU7y8R3H6PSwlxQe7LSQM%2B9tJcKzvabnueNAgPxF396EMxNiXAqnvWWTCRPlDnvPjeUkofae7RRzIp%2FUr4rXX9%2F%2FZQVk%2F5jl7SSbAtRHh55YkDtjMZR3lfBlPq6h&u2=f9%2Br4Agn6FDJKy3N&width=2560"
    },
    {
        id: 9,
        manufacturer: "Honda",
        name: "Civic Type R",
        category: "Sports Car",
        leasePrice: "$549/mo",
        dealerLocation: "Dallas, TX",
        description: "Performance icon: 315 HP / 310 lb-ft, 0-60 in 4.9 sec, 6-speed manual, Brembo brakes, aggressive aero with functional vents/spoiler, limited-slip diff, +R track mode. Nürburgring proven.",
        image: "https://sspark.genspark.ai/cfimages?u1=ujiNYKq%2F%2FP5ZTmCL6q8EEZJ6wkK72mww31cTST7YeoxdqDV5OqndC8tfDOUsHsrF4XUkmsuKbqZ%2BGu7GodjgevIiRt6cmqi%2FNjhqu7mz6i6yYsQkk1dqKXPd2nEYO%2FMJ6tLGV2s20FTc78A%3D&u2=nBoFmDn%2Fe8hV8vfF&width=2560"
    },
    {
        id: 10,
        manufacturer: "Honda",
        name: "Civic Si",
        category: "Sports Car",
        leasePrice: "$349/mo",
        dealerLocation: "Denver, CO",
        description: "Performance value: 200 HP turbo, 6-speed manual, sport-tuned suspension, rev-matching downshifts, adaptive dampers, performance tires, sport seats, 0-60 ~6.3 sec. More affordable than Type R.",
        image: "https://sspark.genspark.ai/cfimages?u1=ujiNYKq%2F%2FP5ZTmCL6q8EEZJ6wkK72mww31cTST7YeoxdqDV5OqndC8tfDOUsHsrF4XUkmsuKbqZ%2BGu7GodjgevIiRt6cmqi%2FNjhqu7mz6i6yYsQkk1dqKXPd2nEYO%2FMJ6tLGV2s20FTc78A%3D&u2=nBoFmDn%2Fe8hV8vfF&width=2560"
    },
    {
        id: 11,
        manufacturer: "Honda",
        name: "Ridgeline",
        category: "Truck",
        leasePrice: "$589/mo",
        dealerLocation: "Miami, FL",
        description: "Innovative unibody pickup with SUV-like comfort. In-Bed Trunk® (7.3 cu ft) lockable storage, dual-action tailgate, 280 HP V6, AWD available, tows 5,000 lbs, bed audio, bed power outlet, smooth ride.",
        image: "https://sspark.genspark.ai/cfimages?u1=d%2BKasVFUeZY5JdqN6%2BXzBkgP4hLJvU7y8R3H6PSwlxQe7LSQM%2B9tJcKzvabnueNAgPxF396EMxNiXAqnvWWTCRPlDnvPjeUkofae7RRzIp%2FUr4rXX9%2F%2FZQVk%2F5jl7SSbAtRHh55YkDtjMZR3lfBlPq6h&u2=f9%2Br4Agn6FDJKy3N&width=2560"
    },
    {
        id: 12,
        manufacturer: "Honda",
        name: "Odyssey",
        category: "Van",
        leasePrice: "$529/mo",
        dealerLocation: "Miami, FL",
        description: "America's favorite family minivan. Magic Slide® 2nd-row seats, seats 7-8, 280 HP V6, CabinWatch®, CabinTalk™, built-in vacuum (HondaVac®), rear entertainment, tri-zone climate, one-touch power sliding doors, 32.8 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=d%2BKasVFUeZY5JdqN6%2BXzBkgP4hLJvU7y8R3H6PSwlxQe7LSQM%2B9tJcKzvabnueNAgPxF396EMxNiXAqnvWWTCRPlDnvPjeUkofae7RRzIp%2FUr4rXX9%2F%2FZQVk%2F5jl7SSbAtRHh55YkDtjMZR3lfBlPq6h&u2=f9%2Br4Agn6FDJKy3N&width=2560"
    },
    {
        id: 13,
        manufacturer: "Honda",
        name: "Insight",
        category: "Hybrid",
        leasePrice: "$379/mo",
        dealerLocation: "Miami, FL",
        description: "Refined hybrid sedan: up to 55 MPG city / 49 MPG highway, 151 combined HP, advanced tech, spacious cabin, 15.1 cu ft trunk, smooth CVT, Honda Sensing®. Efficient daily driver.",
        image: "https://sspark.genspark.ai/cfimages?u1=ZWhxJUQeXmaVPXzk4PXO8HQoLwuu7mlWTycTLLrrN9Spfht8hUB76D419f8Mo0Tqngcl3qjSNbB8AxEfrtU6J8k5bCuDl52eZdOovJGhxgzV4GCHxhIHNVkNdjyy%2BYM5D43YDY6%2BTZyTLw3cEJPRsyBRAAhI3%2B8D4rv8JLSzLA%3D%3D&u2=TkWvRWob4p%2FnX8XL&width=2560"
    },

    // NISSAN (15 models - Altima re-added)
    {
        id: 14,
        manufacturer: "Nissan",
        name: "Altima",
        category: "Sedan",
        leasePrice: "$319/mo",
        dealerLocation: "Dallas, TX",
        description: "Midsize sedan with 2.5L 188 HP or available VC-Turbo 248 HP engine, ProPILOT Assist, Zero Gravity seats, available AWD, 15.4 cu ft trunk. Fuel economy up to 39 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=wpK993lg8PaH7%2BFIz0E3P0CpbBO5nKpjFisBLUAmIVW2UbopqI6yDMLm%2Fa1BZqxqb9qaM7GWOV88d3s0p7sGcsHnPY6bJSzVXVX1FyT%2FY1x1hogOy70yrnuJyagM1Y6h%2BFPR7NX%2BmiBdel4M86naK3ljLkb6XCh8u01ALeiTXOCWWUlogvvj5U5PTnCU4PTLeg%3D%3D&u2=hedJcr7z1iOegme0&width=2560"
    },
    {
        id: 15,
        manufacturer: "Nissan",
        name: "Sentra",
        category: "Sedan",
        leasePrice: "$307/mo",
        dealerLocation: "San Antonio, TX",
        description: "Compact sedan with 149 HP 2.0L, Nissan Safety Shield® 360, 8-inch touchscreen, 14.3 cu ft trunk, sport-tuned suspension. Up to 39 MPG highway. Stylish and efficient.",
        image: "https://sspark.genspark.ai/cfimages?u1=hnp4LpvD0GPI4FZlA8OczIvq5luJeOmfQJiD5N2X5ZgV%2FecvOu4wclLE96H2d0PZMr%2BDCATpEHbokwy4Znl2k7cBzl7neLjENd3jt%2BrQKy5C0gL00NDYm4753d0%2F6eR5CV4kLC5dMCA9OFuw6w%3D%3D&u2=zLLWacNMiSRTACfZ&width=2560"
    },
    {
        id: 16,
        manufacturer: "Nissan",
        name: "Rogue",
        category: "SUV",
        leasePrice: "$399/mo",
        dealerLocation: "Phoenix, AZ",
        description: "Nissan's best-selling SUV: seats 5, 201 HP 1.5L VC-Turbo, up to 74.1 cu ft cargo, ProPILOT Assist, Intelligent AWD, hands-free liftgate, panoramic moonroof, 33 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=bMQ9uGckGKimBzsyUmmZSAjGR%2F%2BnvzpPaNm%2FrQ7Luy6Y3PVJHnSmg%2FdY0FwsqsQtKMIwf2eXOa0SDzT4DTuyjnKFbZocM9Fy4rv17%2BOOftGuk6CQ%2BNw3PnvIOhKPXIsbD7A4Cy0HADOiM5tlNl0lTDi5B0A%3D&u2=2fkipvBbwsxRmnaZ&width=2560"
    },
    {
        id: 17,
        manufacturer: "Nissan",
        name: "Murano",
        category: "SUV",
        leasePrice: "$469/mo",
        dealerLocation: "Atlanta, GA",
        description: "Midsize SUV with bold styling, 260 HP V6, Xtronic CVT®, Zero Gravity seats, up to 67 cu ft cargo, Intelligent AWD, premium Bose® audio, panoramic moonroof, 28 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=LGbXriF0%2BnHmWVjUURyDN5%2Bu5KDoyCLzrnIAKaw6quESUrem0%2B1ewrVhUqO3ag7tMYcCkA%2FJtVP1OW1nQ9Yp9zU%2BJ%2FV4SFnpjyAea0qAdBLRBQOIKfd0H2xfFq0CmhfWn1rkw9L8WdIUk6KlldZcIytBN3x6bEJQmCxfXvEZL8sDQQaSjdcAO%2FybKOtzcwdX&u2=jN0VBClOrTTbeFAp&width=2560"
    },
    {
        id: 18,
        manufacturer: "Nissan",
        name: "Pathfinder",
        category: "SUV",
        leasePrice: "$465/mo",
        dealerLocation: "Charlotte, NC",
        description: "3-row family SUV seats up to 8, 284 HP V6, 9-speed auto, Intelligent 4x4, 6,000 lb towing, up to 80.5 cu ft cargo, tri-zone climate, captain's chairs, terrain modes, 24 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=%2FA8%2BOtS3TWcJIyVhUpe94GfZGxor4ArFKNYY%2BgWarFG32Brnf30%2FIFcLpwbz1%2BAA2ayilPvn6kDefTbgfLONG222IPcMXIpMxGb8bOW8LpkzfdNCvbeAXBTo3WFodMxPd9K2lJI%2FKQKP7M0RT%2FqZ0BwF0jm5Cu%2B8DWg%3D&u2=rTfCBbW%2FFlwoizmk&width=2560"
    },
    {
        id: 19,
        manufacturer: "Nissan",
        name: "Armada",
        category: "SUV",
        leasePrice: "$895/mo",
        dealerLocation: "Houston, TX",
        description: "Full-size 3-row SUV seats 8, 400 HP 5.6L V8, Intelligent 4WD, 8,500 lb towing, hydraulic body motion control, rear entertainment, Bose® 13-speaker, around-view monitor, luxurious cabin.",
        image: "https://sspark.genspark.ai/cfimages?u1=xNJqFuOwNp2MDEgl%2B8BO%2B3HNwMB96eeknlaqgPL39xFjk0NFjiwHPAYRCQiIJrkq2ahzh5ra3mahfWXiN7JI19ssc%2Bl52Z69K%2BC%2FTYO%2B4jZ3oNB5rCWyA4OMASoK2FPmBxKIrYmmx0qkr4UF79if%2FrufT2o0I2nu&u2=RO2aaeRtxst65P6x&width=2560"
    },
    {
        id: 20,
        manufacturer: "Nissan",
        name: "Kicks",
        category: "SUV",
        leasePrice: "$339/mo",
        dealerLocation: "Miami, FL",
        description: "Subcompact urban SUV: 122 HP 1.6L, 53.1 cu ft cargo, Nissan Safety Shield® 360, 8-inch touchscreen, Apple CarPlay®/Android Auto™, 33 MPG city / 36 MPG highway, affordable adventure.",
        image: "https://sspark.genspark.ai/cfimages?u1=RR3aD0lCOr1%2Bzeu9eXkxiKoQ%2BKMNJnYZj4WuQdLu8rIwkKwtb0f0Kva7K5d7o7OY7Y1CSsUK2XE9X8hCtBWVGR9pk3SGBTrRy2oFjT4VuDHvETKpEG46NaTRD%2BBvO0Ww2a%2BzvkfyPoXHrZnQ&u2=dzmHtEkb6bpArsfl&width=2560"
    },
    {
        id: 21,
        manufacturer: "Nissan",
        name: "Frontier",
        category: "Truck",
        leasePrice: "$499/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize pickup: 310 HP 3.8L V6, 9-speed auto, 6,720 lb towing, 4WD available, off-road PRO-4X® package, spray-in bedliner, bed utility track, hill descent, 20 MPG city / 23 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=Av7DNUiEr62J8vT8zRnM%2Fp%2FIO8VCGoBGpKKS0ng%2Bb6fnFuGO6unEmmDtKqau0aPJcuAFhhw%2BbYM1q8FMTxsLwV9oUclPpOqwkVaWbNLT1y4P1GQ7gPgDPi1spd9%2BRToMUhRR66xdj9%2BOp17%2BbEL5uXDiaoyFRmpc846FG0lhWf6gGQ%3D%3D&u2=vgsiendTs9ecWVP5&width=2560"
    },
    {
        id: 22,
        manufacturer: "Nissan",
        name: "Titan",
        category: "Truck",
        leasePrice: "$649/mo",
        dealerLocation: "Miami, FL",
        description: "Full-size truck: 400 HP 5.6L V8, 9-speed auto, 9,300+ lb towing, spray-on bedliner, Utili-track® tie-down system, available PRO-4X®, crew cab, 4WD, RearView Monitor, 17 MPG city / 21 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=IHDea3Ro7BKFzQX7ydJS4%2FzpKaduBWdLRMCHl%2BgKKhT6pZE4HvgzPp4bjIuF4h7thTCFgmxby6GRJYfZIIIyVvRK8tJBSf4E2AmmY%2BIVh1gZzRsrfVy4hHZP5aL5VEkp2JGEhzp9Ow%2BAmxSAveyYUbDXQfFBvc7vj7BH0bxDBAsKe6VCu8YO4ANsxtOp&u2=rIlYGZXsHPl8RKed&width=2560"
    },
    {
        id: 23,
        manufacturer: "Nissan",
        name: "LEAF",
        category: "Electric",
        leasePrice: "$389/mo",
        dealerLocation: "Miami, FL",
        description: "Affordable EV: 149 HP electric motor, up to 212 miles range (LEAF PLUS: 215 HP, 226 miles), e-Pedal one-pedal driving, ProPILOT Assist, 8-inch touchscreen, zero emissions, instant torque.",
        image: "https://sspark.genspark.ai/cfimages?u1=5CEUXFkZDkBroaXfjBfidJO93E3UgONPzb4aeQUCkK%2BMnAqqYzgIgn1h5xmAsXavdJZRFrMW9gkK2bSNOARiRSHMDL%2ByO2tdJ0fEwzQTqCLODH%2BqDAg89U%2BKYeRiqUcJ708rhB5E1%2Fk1kEDYh3wlNnxsL%2BVVTsbt&u2=2TCGKAASvOly365A&width=2560"
    },
    {
        id: 24,
        manufacturer: "Nissan",
        name: "ARIYA",
        category: "Electric",
        leasePrice: "$579/mo",
        dealerLocation: "Miami, FL",
        description: "Electric crossover: 238-389 HP, up to 304 miles range, e-4ORCE AWD, ProPILOT Assist 2.0, 12.3-inch dual displays, flat floor, zero-gravity seats, 0-60 in 4.8 sec (Performance), premium EV.",
        image: "https://sspark.genspark.ai/cfimages?u1=PficAEqsE7o4wxsPF9f9RgUb1uxQLxU9vIm0vpXOqAN5FchyuQnWvr0s6qYIDOlgUTRTN%2F1u4GTOYc%2BHTvrI8aoGW9zGmWyeGqvQWpRjcXKFgto%2BQitBhilKLXtnMZUEjWJBo4mcP639Cqt4tV0KskA180T8zt69BXc7r7Es&u2=9DggpjrzEcuKIzP7&width=2560"
    },
    {
        id: 26,
        manufacturer: "Nissan",
        name: "Versa",
        category: "Sedan",
        leasePrice: "$439/mo",
        dealerLocation: "Miami, FL",
        description: "Affordable compact: 122 HP 1.6L, Nissan Safety Shield® 360, 7-inch touchscreen, 15 cu ft trunk, Apple CarPlay®/Android Auto™, fuel economy up to 40 MPG highway, budget-friendly value.",
        image: "https://sspark.genspark.ai/cfimages?u1=S4AmCE%2BEHY3meoJnkAMPbPc4HBwGrh5U%2BsM3eRKrK4g2xUxqmhzXlkTkHaTQyWDpIQaXaPLH0yxPAFNKMWRTPTBeE8ITHauXc8d2aBxB%2BykgvDd4EpbqHi7h15N1mCm5Q24vuH64pc0%3D&u2=Nk8AQKot5j6oPuoR&width=2560"
    },
    {
        id: 27,
        manufacturer: "Nissan",
        name: "Z",
        category: "Sports Car",
        leasePrice: "$849/mo",
        dealerLocation: "Miami, FL",
        description: "Modern sports car icon: 400 HP twin-turbo V6, 6-speed manual or 9-speed auto, 0-60 in 4.5 sec, limited-slip diff, launch control, sport-tuned suspension, Brembo brakes, heritage-inspired design.",
        image: "https://sspark.genspark.ai/cfimages?u1=9vLJPUtbPYjvU86%2FBA3Jc0NiFfvNWjYZjwGczQybpWy8uGkV%2FTsa5QrCt7da%2Fk%2BEqPJTlCYboIgMY8SzRt8vPoPzaIJZY%2FHN%2BXzNbht2LSMiGdipVPRJNW%2FjLaWHd19jDSaRVvnEv6NJ6yLnNx8nrywbM7TwzWsH%2B8BSVmxZAJL2kgxpwAvxoX6lPi9YJ37X%2F5%2FAv4uMjouc7pqa5f83IoEfaw%3D%3D&u2=z3RvPbGkKA26Sfmm&width=2560"
    },
    {
        id: 28,
        manufacturer: "Nissan",
        name: "GT-R",
        category: "Sports Car",
        leasePrice: "$1899/mo",
        dealerLocation: "Miami, FL",
        description: "Supercar killer: 565 HP twin-turbo V6, 0-60 in 2.9 sec, ATTESA E-TS® AWD, 6-speed dual-clutch, launch control, adaptive suspension, Brembo carbon-ceramic brakes, iconic 'Godzilla' performance.",
        image: "https://sspark.genspark.ai/cfimages?u1=dCR%2FeUl%2FJN7zhApByNTLZkxYLLM%2F%2FlxYl8OtC4OmGE25qM070ZQHm17hWWV0nv3yKSfRB6zJTQXoCtJZp8R1Y6daqlZmEYrOqnM1ooE%2F6hlao0Zc0y97vFLK3tNWS1EncNTzDwBaoWLHozpV9SK%2FbdPpQNDOnlzgPeejc%2BmpTg%3D%3D&u2=e%2BGU6w4euO2WqrMg&width=2560"
    },

    // BMW (25 models - added X6, 7 Series, updated X5, M3, M4, i7)
    {
        id: 29,
        manufacturer: "BMW",
        name: "330i",
        category: "Luxury",
        leasePrice: "$699/mo",
        dealerLocation: "Miami, FL",
        description: "Sport sedan benchmark: 255 HP turbo engine, RWD/xDrive AWD, 8-speed auto, Live Cockpit Pro, Driving Assistant, M Sport package, 50/50 weight balance, iconic driving dynamics.",
        image: "https://sspark.genspark.ai/cfimages?u1=YnD8WHVXlRn7oANaU65P21WamJVwSX1iyFUm3eHGaiP0jlT5ic%2FnUMf028wIEQ3%2FL6RdIJE%2FYq0aXh9Ounz4Na%2FELSHc1dapyPZBMBYsH159OroHjvyjU1FTgfPwgsj8W6z1w%2BJz3M9LdSgElMvi4sF9rhDlBTeHP8ND3EN6s%2FyNDsxuWDt4D%2FKxX95tDFshSD8%3D&u2=TEsW2P530ITCOfMb&width=2560"
    },
    {
        id: 30,
        manufacturer: "BMW",
        name: "5 Series",
        category: "Luxury",
        leasePrice: "$899/mo",
        dealerLocation: "Miami, FL",
        description: "Executive sedan: 335-523 HP turbos, xDrive AWD, 8-speed auto, Curved Display, Driving Assistant Pro, Executive Drive Pro, premium materials, business-class comfort, advanced tech.",
        image: "https://sspark.genspark.ai/cfimages?u1=YnD8WHVXlRn7oANaU65P21WamJVwSX1iyFUm3eHGaiP0jlT5ic%2FnUMf028wIEQ3%2FL6RdIJE%2FYq0aXh9Ounz4Na%2FELSHc1dapyPZBMBYsH159OroHjvyjU1FTgfPwgsj8W6z1w%2BJz3M9LdSgElMvi4sF9rhDlBTeHP8ND3EN6s%2FyNDsxuWDt4D%2FKxX95tDFshSD8%3D&u2=TEsW2P530ITCOfMb&width=2560"
    },
    {
        id: 31,
        manufacturer: "BMW",
        name: "740i",
        category: "Luxury",
        leasePrice: "$1299/mo",
        dealerLocation: "Miami, FL",
        description: "Flagship sedan: 335 HP turbo engine, xDrive AWD, 8-speed auto, 31.3-inch 8K Theatre Screen, Executive Lounge Seating, air suspension, Bowers & Wilkins Diamond Surround Sound, unmatched luxury.",
        image: "https://sspark.genspark.ai/cfimages?u1=YnD8WHVXlRn7oANaU65P21WamJVwSX1iyFUm3eHGaiP0jlT5ic%2FnUMf028wIEQ3%2FL6RdIJE%2FYq0aXh9Ounz4Na%2FELSHc1dapyPZBMBYsH159OroHjvyjU1FTgfPwgsj8W6z1w%2BJz3M9LdSgElMvi4sF9rhDlBTeHP8ND3EN6s%2FyNDsxuWDt4D%2FKxX95tDFshSD8%3D&u2=TEsW2P530ITCOfMb&width=2560"
    },
    {
        id: 237,
        manufacturer: "BMW",
        name: "7 Series",
        category: "Luxury",
        leasePrice: "$1189/mo",
        dealerLocation: "Miami, FL",
        description: "Flagship luxury sedan: 375-536 HP turbo 6-cyl/V8, xDrive AWD, 8-speed auto, 31.3-inch 8K Theatre Screen, Executive Lounge Seating, air suspension, Bowers & Wilkins Diamond, ultimate luxury.",
        image: "https://sspark.genspark.ai/cfimages?u1=YnD8WHVXlRn7oANaU65P21WamJVwSX1iyFUm3eHGaiP0jlT5ic%2FnUMf028wIEQ3%2FL6RdIJE%2FYq0aXh9Ounz4Na%2FELSHc1dapyPZBMBYsH159OroHjvyjU1FTgfPwgsj8W6z1w%2BJz3M9LdSgElMvi4sF9rhDlBTeHP8ND3EN6s%2FyNDsxuWDt4D%2FKxX95tDFshSD8%3D&u2=TEsW2P530ITCOfMb&width=2560"
    },
    {
        id: 32,
        manufacturer: "BMW",
        name: "X1",
        category: "Luxury",
        leasePrice: "$559/mo",
        dealerLocation: "Miami, FL",
        description: "Compact SAV: 241 HP turbo, xDrive AWD, 8-speed auto, 57.6 cu ft cargo, panoramic moonroof, Live Cockpit Pro, Driving Assistant, premium interior, agile handling, 28 MPG combined.",
        image: "https://sspark.genspark.ai/cfimages?u1=nypT29myUYhgoRSWK6WbD6I0OqOEpcX%2Bj7anD%2FdBGuz0%2BgarTtJMSSh%2BYoofNxuHsxC9ox8z5XjCFM5oogujxKFjbVMEJwFFW0VI%2BGPR50UVsGQUXr%2BGRoK9Gx%2B1orPDATGKwSmiAB14qa4iFyC0cLivPcG%2B5xyG%2BoVgImb%2FU97gr%2FvMDBOQjRU3K8SuHVA%3D&u2=Lvq0XiEPtcP7azpp&width=2560"
    },
    {
        id: 234,
        manufacturer: "BMW",
        name: "X2",
        category: "Luxury",
        leasePrice: "$609/mo",
        dealerLocation: "Miami, FL",
        description: "Compact Sport Activity Coupe: 228-301 HP turbo, xDrive AWD, 8-speed auto, coupe styling, 50.1 cu ft cargo, M Sport X package, sporty handling, 30 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=nypT29myUYhgoRSWK6WbD6I0OqOEpcX%2Bj7anD%2FdBGuz0%2BgarTtJMSSh%2BYoofNxuHsxC9ox8z5XjCFM5oogujxKFjbVMEJwFFW0VI%2BGPR50UVsGQUXr%2BGRoK9Gx%2B1orPDATGKwSmiAB14qa4iFyC0cLivPcG%2B5xyG%2BoVgImb%2FU97gr%2FvMDBOQjRU3K8SuHVA%3D&u2=Lvq0XiEPtcP7azpp&width=2560"
    },
    {
        id: 33,
        manufacturer: "BMW",
        name: "X3",
        category: "Luxury",
        leasePrice: "$729/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize SAV: 248-382 HP, xDrive AWD, 8-speed auto, up to 62.7 cu ft cargo, hands-free tailgate, panoramic moonroof, Vernasca leather, Driving Dynamics Control, 27 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=nypT29myUYhgoRSWK6WbD6I0OqOEpcX%2Bj7anD%2FdBGuz0%2BgarTtJMSSh%2BYoofNxuHsxC9ox8z5XjCFM5oogujxKFjbVMEJwFFW0VI%2BGPR50UVsGQUXr%2BGRoK9Gx%2B1orPDATGKwSmiAB14qa4iFyC0cLivPcG%2B5xyG%2BoVgImb%2FU97gr%2FvMDBOQjRU3K8SuHVA%3D&u2=Lvq0XiEPtcP7azpp&width=2560"
    },
    {
        id: 230,
        manufacturer: "BMW",
        name: "X4",
        category: "Luxury",
        leasePrice: "$835/mo",
        dealerLocation: "Boston, MA",
        description: "Sport Activity Coupe: 248-382 HP turbo, xDrive AWD, 8-speed auto, coupe styling with SUV utility, M Sport package, 49.4 cu ft cargo, dynamic handling, premium interior, 27 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=nypT29myUYhgoRSWK6WbD6I0OqOEpcX%2Bj7anD%2FdBGuz0%2BgarTtJMSSh%2BYoofNxuHsxC9ox8z5XjCFM5oogujxKFjbVMEJwFFW0VI%2BGPR50UVsGQUXr%2BGRoK9Gx%2B1orPDATGKwSmiAB14qa4iFyC0cLivPcG%2B5xyG%2BoVgImb%2FU97gr%2FvMDBOQjRU3K8SuHVA%3D&u2=Lvq0XiEPtcP7azpp&width=2560"
    },
    {
        id: 34,
        manufacturer: "BMW",
        name: "X5",
        category: "Luxury",
        leasePrice: "$909/mo",
        dealerLocation: "San Diego, CA",
        description: "Luxury SAV: 335-523 HP, xDrive AWD, 8-speed auto, seats 5-7, up to 72.3 cu ft cargo, air suspension, Curved Display, Driving Assistant Pro, executive rear seating, 7,200 lb towing.",
        image: "https://sspark.genspark.ai/cfimages?u1=nypT29myUYhgoRSWK6WbD6I0OqOEpcX%2Bj7anD%2FdBGuz0%2BgarTtJMSSh%2BYoofNxuHsxC9ox8z5XjCFM5oogujxKFjbVMEJwFFW0VI%2BGPR50UVsGQUXr%2BGRoK9Gx%2B1orPDATGKwSmiAB14qa4iFyC0cLivPcG%2B5xyG%2BoVgImb%2FU97gr%2FvMDBOQjRU3K8SuHVA%3D&u2=Lvq0XiEPtcP7azpp&width=2560"
    },
    {
        id: 236,
        manufacturer: "BMW",
        name: "X6",
        category: "Luxury",
        leasePrice: "$1039/mo",
        dealerLocation: "Las Vegas, NV",
        description: "Sport Activity Coupe: 335-523 HP, xDrive AWD, 8-speed auto, coupe styling, up to 59.7 cu ft cargo, air suspension, Curved Display, M Sport package, bold design, 7,200 lb towing.",
        image: "https://sspark.genspark.ai/cfimages?u1=nypT29myUYhgoRSWK6WbD6I0OqOEpcX%2Bj7anD%2FdBGuz0%2BgarTtJMSSh%2BYoofNxuHsxC9ox8z5XjCFM5oogujxKFjbVMEJwFFW0VI%2BGPR50UVsGQUXr%2BGRoK9Gx%2B1orPDATGKwSmiAB14qa4iFyC0cLivPcG%2B5xyG%2BoVgImb%2FU97gr%2FvMDBOQjRU3K8SuHVA%3D&u2=Lvq0XiEPtcP7azpp&width=2560"
    },
    {
        id: 35,
        manufacturer: "BMW",
        name: "X7",
        category: "Luxury",
        leasePrice: "$1039/mo",
        dealerLocation: "Dallas, TX",
        description: "Full-size luxury SAV: 375-523 HP, xDrive AWD, 8-speed auto, seats 6-7, up to 90.4 cu ft cargo, air suspension, Curved Display, Sky Lounge Panoramic, Bowers & Wilkins, 7,500 lb towing.",
        image: "https://sspark.genspark.ai/cfimages?u1=nypT29myUYhgoRSWK6WbD6I0OqOEpcX%2Bj7anD%2FdBGuz0%2BgarTtJMSSh%2BYoofNxuHsxC9ox8z5XjCFM5oogujxKFjbVMEJwFFW0VI%2BGPR50UVsGQUXr%2BGRoK9Gx%2B1orPDATGKwSmiAB14qa4iFyC0cLivPcG%2B5xyG%2BoVgImb%2FU97gr%2FvMDBOQjRU3K8SuHVA%3D&u2=Lvq0XiEPtcP7azpp&width=2560"
    },
    {
        id: 36,
        manufacturer: "BMW",
        name: "M3",
        category: "Sports Car",
        leasePrice: "$1169/mo",
        dealerLocation: "Miami, FL",
        description: "High-performance sedan: 473-503 HP twin-turbo inline-6, RWD/M xDrive, 6-speed manual or 8-speed auto, 0-60 in 3.8 sec, M Compound brakes, carbon fiber roof, track-focused dynamics.",
        image: "https://sspark.genspark.ai/cfimages?u1=YnD8WHVXlRn7oANaU65P21WamJVwSX1iyFUm3eHGaiP0jlT5ic%2FnUMf028wIEQ3%2FL6RdIJE%2FYq0aXh9Ounz4Na%2FELSHc1dapyPZBMBYsH159OroHjvyjU1FTgfPwgsj8W6z1w%2BJz3M9LdSgElMvi4sF9rhDlBTeHP8ND3EN6s%2FyNDsxuWDt4D%2FKxX95tDFshSD8%3D&u2=TEsW2P530ITCOfMb&width=2560"
    },
    {
        id: 37,
        manufacturer: "BMW",
        name: "M4",
        category: "Sports Car",
        leasePrice: "$1229/mo",
        dealerLocation: "Scottsdale, AZ",
        description: "Performance coupe: 473-503 HP twin-turbo I6, RWD/M xDrive, 6-speed manual or 8-speed auto, 0-60 in 3.8 sec, M Compound brakes, aggressive styling, track-ready performance.",
        image: "https://sspark.genspark.ai/cfimages?u1=aZIou4322vYTxRDF9RgWQI45Qa6ItBb0N0ZtiBCK2diiZhUIKQiueGw6ezEQ3eZ2IVFORK6cmAHtiKkJGgtR1cVsPCtovIM7jJ%2BliBJuynsZupU%2BDLDfY4RPvRwZoAXgYlz%2Fl9V4XfZyhbjlKuIxFWJS2jt%2BKrFaKw%3D%3D&u2=GGRTDpmuqpNgK8bY&width=2560"
    },
    {
        id: 38,
        manufacturer: "BMW",
        name: "M5",
        category: "Sports Car",
        leasePrice: "$1499/mo",
        dealerLocation: "Miami, FL",
        description: "Super sedan: 600 HP twin-turbo V8, M xDrive AWD, 8-speed M Steptronic, 0-60 in 3.3 sec, M Compound brakes, adaptive M suspension, 189 mph top speed, executive performance.",
        image: "https://sspark.genspark.ai/cfimages?u1=aZIou4322vYTxRDF9RgWQI45Qa6ItBb0N0ZtiBCK2diiZhUIKQiueGw6ezEQ3eZ2IVFORK6cmAHtiKkJGgtR1cVsPCtovIM7jJ%2BliBJuynsZupU%2BDLDfY4RPvRwZoAXgYlz%2Fl9V4XfZyhbjlKuIxFWJS2jt%2BKrFaKw%3D%3D&u2=GGRTDpmuqpNgK8bY&width=2560"
    },
    {
        id: 235,
        manufacturer: "BMW",
        name: "M8 Gran Coupe",
        category: "Sports Car",
        leasePrice: "$1358/mo",
        dealerLocation: "Newport Beach, CA",
        description: "Ultra-performance 4-door coupe: 617-625 HP twin-turbo V8, M xDrive AWD, 8-speed M Steptronic, 0-60 in 2.9 sec, M Compound brakes, carbon fiber roof, executive supercar, 190 mph top speed.",
        image: "https://sspark.genspark.ai/cfimages?u1=aZIou4322vYTxRDF9RgWQI45Qa6ItBb0N0ZtiBCK2diiZhUIKQiueGw6ezEQ3eZ2IVFORK6cmAHtiKkJGgtR1cVsPCtovIM7jJ%2BliBJuynsZupU%2BDLDfY4RPvRwZoAXgYlz%2Fl9V4XfZyhbjlKuIxFWJS2jt%2BKrFaKw%3D%3D&u2=GGRTDpmuqpNgK8bY&width=2560"
    },
    {
        id: 39,
        manufacturer: "BMW",
        name: "X3 M",
        category: "Sports Car",
        leasePrice: "$1199/mo",
        dealerLocation: "Miami, FL",
        description: "Performance SAV: 473-503 HP twin-turbo I6, M xDrive AWD, 8-speed M Steptronic, 0-60 in 3.9 sec, M Sport brakes, adaptive M suspension, track performance in SUV form.",
        image: "https://sspark.genspark.ai/cfimages?u1=uZzhjagCtRrBEVQ7kZ%2BQ9lLUt2nZiiWBZC2dMFR7CUmtSUXCa4YV4uV5zvp8C1rlq4K9vkvxqSyHMfpV09Sm0Wsmikc%3D&u2=q7RY900UAr%2F7alll&width=2560"
    },
    {
        id: 40,
        manufacturer: "BMW",
        name: "X5 M",
        category: "Sports Car",
        leasePrice: "$1599/mo",
        dealerLocation: "Miami, FL",
        description: "High-performance SAV: 600-617 HP twin-turbo V8, M xDrive AWD, 8-speed M Steptronic, 0-60 in 3.7 sec, M Sport brakes, adaptive M suspension, supercar performance, luxury space.",
        image: "https://sspark.genspark.ai/cfimages?u1=uZzhjagCtRrBEVQ7kZ%2BQ9lLUt2nZiiWBZC2dMFR7CUmtSUXCa4YV4uV5zvp8C1rlq4K9vkvxqSyHMfpV09Sm0Wsmikc%3D&u2=q7RY900UAr%2F7alll&width=2560"
    },
    {
        id: 41,
        manufacturer: "BMW",
        name: "4 Series Gran Coupe",
        category: "Luxury",
        leasePrice: "$780/mo",
        dealerLocation: "San Jose, CA",
        description: "Sporty 4-door coupe: 255-382 HP turbo, RWD/xDrive AWD, 8-speed auto, Live Cockpit Pro, M Sport package, aggressive kidney grille, driver-focused cockpit, coupe styling with sedan practicality.",
        image: "https://sspark.genspark.ai/cfimages?u1=aZIou4322vYTxRDF9RgWQI45Qa6ItBb0N0ZtiBCK2diiZhUIKQiueGw6ezEQ3eZ2IVFORK6cmAHtiKkJGgtR1cVsPCtovIM7jJ%2BliBJuynsZupU%2BDLDfY4RPvRwZoAXgYlz%2Fl9V4XfZyhbjlKuIxFWJS2jt%2BKrFaKw%3D%3D&u2=GGRTDpmuqpNgK8bY&width=2560"
    },
    {
        id: 42,
        manufacturer: "BMW",
        name: "8 Series",
        category: "Luxury",
        leasePrice: "$1399/mo",
        dealerLocation: "Miami, FL",
        description: "Grand tourer: 335-617 HP, xDrive AWD, 8-speed auto, Curved Display, Merino leather, carbon fiber trim, Integral Active Steering, M Sport brakes, ultimate luxury coupe/convertible.",
        image: "https://sspark.genspark.ai/cfimages?u1=aZIou4322vYTxRDF9RgWQI45Qa6ItBb0N0ZtiBCK2diiZhUIKQiueGw6ezEQ3eZ2IVFORK6cmAHtiKkJGgtR1cVsPCtovIM7jJ%2BliBJuynsZupU%2BDLDfY4RPvRwZoAXgYlz%2Fl9V4XfZyhbjlKuIxFWJS2jt%2BKrFaKw%3D%3D&u2=GGRTDpmuqpNgK8bY&width=2560"
    },
    {
        id: 43,
        manufacturer: "BMW",
        name: "2 Series Gran Coupe",
        category: "Luxury",
        leasePrice: "$429/mo",
        dealerLocation: "Tampa, FL",
        description: "Compact 4-door coupe: 228-301 HP turbo, FWD/xDrive AWD, 8-speed auto, M Sport package, driver-focused dynamics, agile handling, coupe styling with sedan practicality, 32 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=aZIou4322vYTxRDF9RgWQI45Qa6ItBb0N0ZtiBCK2diiZhUIKQiueGw6ezEQ3eZ2IVFORK6cmAHtiKkJGgtR1cVsPCtovIM7jJ%2BliBJuynsZupU%2BDLDfY4RPvRwZoAXgYlz%2Fl9V4XfZyhbjlKuIxFWJS2jt%2BKrFaKw%3D%3D&u2=GGRTDpmuqpNgK8bY&width=2560"
    },
    {
        id: 44,
        manufacturer: "BMW",
        name: "iX45",
        category: "Electric",
        leasePrice: "$799/mo",
        dealerLocation: "Portland, OR",
        description: "Electric SAV: 516 HP dual motors, xDrive AWD, up to 324 miles range, Curved Display, hexagonal steering wheel, Bowers & Wilkins, air suspension, sustainable materials, 0-60 in 4.6 sec.",
        image: "https://sspark.genspark.ai/cfimages?u1=uZzhjagCtRrBEVQ7kZ%2BQ9lLUt2nZiiWBZC2dMFR7CUmtSUXCa4YV4uV5zvp8C1rlq4K9vkvxqSyHMfpV09Sm0Wsmikc%3D&u2=q7RY900UAr%2F7alll&width=2560"
    },
    {
        id: 45,
        manufacturer: "BMW",
        name: "i4",
        category: "Electric",
        leasePrice: "$499/mo",
        dealerLocation: "Austin, TX",
        description: "Electric gran coupe: 335-536 HP, eDrive40/M50, up to 301 miles range, Curved Display, Sport Boost, instant torque, 0-60 in 3.9 sec (M50), premium EV performance sedan.",
        image: "https://sspark.genspark.ai/cfimages?u1=aZIou4322vYTxRDF9RgWQI45Qa6ItBb0N0ZtiBCK2diiZhUIKQiueGw6ezEQ3eZ2IVFORK6cmAHtiKkJGgtR1cVsPCtovIM7jJ%2BliBJuynsZupU%2BDLDfY4RPvRwZoAXgYlz%2Fl9V4XfZyhbjlKuIxFWJS2jt%2BKrFaKw%3D%3D&u2=GGRTDpmuqpNgK8bY&width=2560"
    },
    {
        id: 46,
        manufacturer: "BMW",
        name: "i7",
        category: "Electric",
        leasePrice: "$1169/mo",
        dealerLocation: "Bellevue, WA",
        description: "Electric flagship: 536-650 HP dual motors, up to 318 miles range, 31.3-inch 8K Theatre Screen, Executive Lounge, Bowers & Wilkins Diamond, air suspension, 0-60 in 3.7 sec (M70).",
        image: "https://sspark.genspark.ai/cfimages?u1=aZIou4322vYTxRDF9RgWQI45Qa6ItBb0N0ZtiBCK2diiZhUIKQiueGw6ezEQ3eZ2IVFORK6cmAHtiKkJGgtR1cVsPCtovIM7jJ%2BliBJuynsZupU%2BDLDfY4RPvRwZoAXgYlz%2Fl9V4XfZyhbjlKuIxFWJS2jt%2BKrFaKw%3D%3D&u2=GGRTDpmuqpNgK8bY&width=2560"
    },
    {
        id: 47,
        manufacturer: "BMW",
        name: "Z4",
        category: "Sports Car",
        leasePrice: "$849/mo",
        dealerLocation: "Miami, FL",
        description: "Roadster: 255-382 HP turbo, RWD, 8-speed auto, retractable hardtop, 50/50 weight balance, M Sport package, adaptive M suspension, driver-focused cockpit, open-air driving pleasure.",
        image: "https://sspark.genspark.ai/cfimages?u1=aZIou4322vYTxRDF9RgWQI45Qa6ItBb0N0ZtiBCK2diiZhUIKQiueGw6ezEQ3eZ2IVFORK6cmAHtiKkJGgtR1cVsPCtovIM7jJ%2BliBJuynsZupU%2BDLDfY4RPvRwZoAXgYlz%2Fl9V4XfZyhbjlKuIxFWJS2jt%2BKrFaKw%3D%3D&u2=GGRTDpmuqpNgK8bY&width=2560"
    },
    {
        id: 231,
        manufacturer: "BMW",
        name: "XM Label",
        category: "Luxury",
        leasePrice: "$2299/mo",
        dealerLocation: "Newport Beach, CA",
        description: "Ultra-luxury performance SAV: 738 HP plug-in hybrid V8, M xDrive AWD, 8-speed M Steptronic, 0-60 in 3.6 sec, exclusive Label Red edition, carbon fiber accents, Merino leather, Bowers & Wilkins Diamond, ultimate M performance SUV.",
        image: "https://sspark.genspark.ai/cfimages?u1=uZzhjagCtRrBEVQ7kZ%2BQ9lLUt2nZiiWBZC2dMFR7CUmtSUXCa4YV4uV5zvp8C1rlq4K9vkvxqSyHMfpV09Sm0Wsmikc%3D&u2=q7RY900UAr%2F7alll&width=2560"
    },

    // AUDI (21 models)
    {
        id: 243,
        manufacturer: "Audi",
        name: "A3 Sedan Premium Quattro",
        category: "Luxury",
        leasePrice: "$532/mo",
        dealerLocation: "San Francisco, CA",
        description: "2026 Audi A3 Sedan Premium Quattro: 201 HP turbo, quattro® AWD, 7-speed S tronic®, Virtual Cockpit Plus, MMI® Touch, LED headlights, premium interior, 36 MPG highway, compact luxury.",
        image: "https://sspark.genspark.ai/cfimages?u1=fYREhyAoCKXvlotoamVXZb9zfRyvk0cesWZjRjf5%2FuMyHB6O8LaYyZOFJl74XdvkBSe5rCZgfIQxImbFhO4vyqd5tKugEvSkTfswvtUxMhz7rpsuDa4C76mb19mXOyXRzWWDyR%2FUZ%2FTo6Mh700gZmN87meD9M3i9FGxGkA%3D%3D&u2=475x4G7MtPa9%2FsZq&width=2560"
    },
    {
        id: 48,
        manufacturer: "Audi",
        name: "A4",
        category: "Luxury",
        leasePrice: "$559/mo",
        dealerLocation: "Miami, FL",
        description: "Premium sedan: 201-349 HP turbo, quattro® AWD, 7-speed S tronic®, Virtual Cockpit Plus, MMI® Touch, LED headlights, Bang & Olufsen® sound, 34 MPG highway, refined luxury.",
        image: "https://sspark.genspark.ai/cfimages?u1=fYREhyAoCKXvlotoamVXZb9zfRyvk0cesWZjRjf5%2FuMyHB6O8LaYyZOFJl74XdvkBSe5rCZgfIQxImbFhO4vyqd5tKugEvSkTfswvtUxMhz7rpsuDa4C76mb19mXOyXRzWWDyR%2FUZ%2FTo6Mh700gZmN87meD9M3i9FGxGkA%3D%3D&u2=475x4G7MtPa9%2FsZq&width=2560"
    },
    {
        id: 49,
        manufacturer: "Audi",
        name: "A6 55 Premium Plus",
        category: "Luxury",
        leasePrice: "$938/mo",
        dealerLocation: "Chicago, IL",
        description: "Executive sedan: 335 HP turbo V6, quattro® AWD, 7-speed S tronic®, dual touchscreens, Virtual Cockpit, air suspension, Matrix LED, executive rear seats, 31 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=fYREhyAoCKXvlotoamVXZb9zfRyvk0cesWZjRjf5%2FuMyHB6O8LaYyZOFJl74XdvkBSe5rCZgfIQxImbFhO4vyqd5tKugEvSkTfswvtUxMhz7rpsuDa4C76mb19mXOyXRzWWDyR%2FUZ%2FTo6Mh700gZmN87meD9M3i9FGxGkA%3D%3D&u2=475x4G7MtPa9%2FsZq&width=2560"
    },
    {
        id: 50,
        manufacturer: "Audi",
        name: "A8",
        category: "Luxury",
        leasePrice: "$1299/mo",
        dealerLocation: "Miami, FL",
        description: "Flagship sedan: 335-453 HP turbo V6/V8, quattro® AWD, 8-speed Tiptronic®, predictive suspension, rear-seat relaxation, Bang & Olufsen® 3D, Matrix LED, executive luxury, 27 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=fYREhyAoCKXvlotoamVXZb9zfRyvk0cesWZjRjf5%2FuMyHB6O8LaYyZOFJl74XdvkBSe5rCZgfIQxImbFhO4vyqd5tKugEvSkTfswvtUxMhz7rpsuDa4C76mb19mXOyXRzWWDyR%2FUZ%2FTo6Mh700gZmN87meD9M3i9FGxGkA%3D%3D&u2=475x4G7MtPa9%2FsZq&width=2560"
    },
    {
        id: 51,
        manufacturer: "Audi",
        name: "Q3 45 S Line Premium",
        category: "Luxury",
        leasePrice: "$588/mo",
        dealerLocation: "Miami, FL",
        description: "Compact SUV: 228 HP turbo, quattro® AWD, 8-speed auto, Virtual Cockpit Plus, MMI® Touch, S Line styling, panoramic sunroof, 48.0 cu ft cargo, 28 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=mNxSoSrJkPPIsias5m3H0KwCCEpbN0vhgGl7BWuptEvSpqGtz1oiVg9ClcJ30%2F7UwhwWXaPQUwC0T9p2mvLB8i9lI5dGWLKinQHF%2BblLyQtt3M7oqmFAAF7Wni%2B8CkZO36L78JoTIc7d30VhbECCGi8kSbiC7FA%2BhOnznyieoO2TL61yAQo7Lym6%2Bm%2B%2F&u2=unYkfketQz8idrjg&width=2560"
    },
    {
        id: 52,
        manufacturer: "Audi",
        name: "Q5 Premium",
        category: "Luxury",
        leasePrice: "$727/mo",
        dealerLocation: "Boston, MA",
        description: "Midsize SUV: 201 HP turbo, quattro® AWD, 7-speed S tronic®, Virtual Cockpit Plus, up to 54.0 cu ft cargo, panoramic sunroof, Bang & Olufsen®, 28 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=mNxSoSrJkPPIsias5m3H0KwCCEpbN0vhgGl7BWuptEvSpqGtz1oiVg9ClcJ30%2F7UwhwWXaPQUwC0T9p2mvLB8i9lI5dGWLKinQHF%2BblLyQtt3M7oqmFAAF7Wni%2B8CkZO36L78JoTIc7d30VhbECCGi8kSbiC7FA%2BhOnznyieoO2TL61yAQo7Lym6%2Bm%2B%2F&u2=unYkfketQz8idrjg&width=2560"
    },
    {
        id: 53,
        manufacturer: "Audi",
        name: "Q7 45 Premium",
        category: "Luxury",
        leasePrice: "$989/mo",
        dealerLocation: "Dallas, TX",
        description: "3-row luxury SUV: 248 HP turbo, quattro® AWD, 8-speed Tiptronic®, seats 7, up to 69.6 cu ft cargo, air suspension, Virtual Cockpit Plus, 4,400 lb towing, 25 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=mNxSoSrJkPPIsias5m3H0KwCCEpbN0vhgGl7BWuptEvSpqGtz1oiVg9ClcJ30%2F7UwhwWXaPQUwC0T9p2mvLB8i9lI5dGWLKinQHF%2BblLyQtt3M7oqmFAAF7Wni%2B8CkZO36L78JoTIc7d30VhbECCGi8kSbiC7FA%2BhOnznyieoO2TL61yAQo7Lym6%2Bm%2B%2F&u2=unYkfketQz8idrjg&width=2560"
    },
    {
        id: 244,
        manufacturer: "Audi",
        name: "Q7 55 S Line Premium Plus",
        category: "Luxury",
        leasePrice: "$1052/mo",
        dealerLocation: "Atlanta, GA",
        description: "3-row luxury SUV: 335 HP turbo V6, quattro® AWD, 8-speed Tiptronic®, S Line styling, seats 7, up to 69.6 cu ft cargo, air suspension, Virtual Cockpit Plus, 4,400 lb towing.",
        image: "https://sspark.genspark.ai/cfimages?u1=mNxSoSrJkPPIsias5m3H0KwCCEpbN0vhgGl7BWuptEvSpqGtz1oiVg9ClcJ30%2F7UwhwWXaPQUwC0T9p2mvLB8i9lI5dGWLKinQHF%2BblLyQtt3M7oqmFAAF7Wni%2B8CkZO36L78JoTIc7d30VhbECCGi8kSbiC7FA%2BhOnznyieoO2TL61yAQo7Lym6%2Bm%2B%2F&u2=unYkfketQz8idrjg&width=2560"
    },
    {
        id: 54,
        manufacturer: "Audi",
        name: "Q8 55 Premium Plus",
        category: "Luxury",
        leasePrice: "$1182/mo",
        dealerLocation: "Beverly Hills, CA",
        description: "Flagship SUV: 335 HP turbo V6, quattro® AWD, 8-speed Tiptronic®, dual touchscreens, HD Matrix LED, air suspension, Bang & Olufsen® 3D, 7,700 lb towing, coupe-like styling.",
        image: "https://sspark.genspark.ai/cfimages?u1=P%2Bqw3c2%2BXb9aj6rGxrnkP8H3dvrrM4BqYE8T5fnCBxYi%2BRYmPKAuGreYTUyVFykP7Lj%2F1aRJkkpeN4pcMDHR2fyspuSOPOBWZWyatXNX9EVVNOcz%2F%2FSXoMDFC663z1OUpHsTYYWOC9zmniaFtdjNdVFWnwVzi%2FsY38rEbQeLxvN23DGJIM0U&u2=41rDiFKnFpEtzhd%2B&width=2560"
    },
    {
        id: 55,
        manufacturer: "Audi",
        name: "RS 5",
        category: "Sports Car",
        leasePrice: "$1099/mo",
        dealerLocation: "Miami, FL",
        description: "Performance coupe: 444 HP twin-turbo V6, quattro® AWD, 8-speed Tiptronic®, sport differential, 0-60 in 3.7 sec, sport exhaust, carbon fiber accents, track-ready performance.",
        image: "https://sspark.genspark.ai/cfimages?u1=Buzd%2FtCGv1aM5WS%2B8QG5FB%2B6zU6VCoG1s9s9csrUgK%2BFnfNmaFDdVZX58Wdco5F3a8JAJFGvSZgOdwYCUXneCRtK8d2mpj98xl2gJqZhxvR7%2FmB3Von12VExQeA1ilwyTs0bXZxt5iq3JIoAsElT1AH%2F0vJnSWNN8ZpdKDyu&u2=RLTJPK2SybPFtiWC&width=2560"
    },
    {
        id: 56,
        manufacturer: "Audi",
        name: "RS 7",
        category: "Sports Car",
        leasePrice: "$1599/mo",
        dealerLocation: "Miami, FL",
        description: "Performance sportback: 591 HP twin-turbo V8, quattro® AWD, 8-speed Tiptronic®, sport differential, 0-60 in 3.5 sec, ceramic brakes, air suspension, 190 mph top speed, supercar performance.",
        image: "https://sspark.genspark.ai/cfimages?u1=Buzd%2FtCGv1aM5WS%2B8QG5FB%2B6zU6VCoG1s9s9csrUgK%2BFnfNmaFDdVZX58Wdco5F3a8JAJFGvSZgOdwYCUXneCRtK8d2mpj98xl2gJqZhxvR7%2FmB3Von12VExQeA1ilwyTs0bXZxt5iq3JIoAsElT1AH%2F0vJnSWNN8ZpdKDyu&u2=RLTJPK2SybPFtiWC&width=2560"
    },
    {
        id: 57,
        manufacturer: "Audi",
        name: "RS Q8",
        category: "Sports Car",
        leasePrice: "$1699/mo",
        dealerLocation: "Miami, FL",
        description: "Performance SUV: 591 HP twin-turbo V8, quattro® AWD, 8-speed Tiptronic®, sport differential, 0-60 in 3.7 sec, ceramic brakes, air suspension, 7,700 lb towing, SUV supercar.",
        image: "https://sspark.genspark.ai/cfimages?u1=P%2Bqw3c2%2BXb9aj6rGxrnkP8H3dvrrM4BqYE8T5fnCBxYi%2BRYmPKAuGreYTUyVFykP7Lj%2F1aRJkkpeN4pcMDHR2fyspuSOPOBWZWyatXNX9EVVNOcz%2F%2FSXoMDFC663z1OUpHsTYYWOC9zmniaFtdjNdVFWnwVzi%2FsY38rEbQeLxvN23DGJIM0U&u2=41rDiFKnFpEtzhd%2B&width=2560"
    },
    {
        id: 58,
        manufacturer: "Audi",
        name: "S4",
        category: "Sports Car",
        leasePrice: "$749/mo",
        dealerLocation: "Miami, FL",
        description: "Sport sedan: 349 HP turbo V6, quattro® AWD, 8-speed Tiptronic®, sport differential, adaptive dampers, 0-60 in 4.4 sec, sport exhaust, premium performance sedan, 29 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=Buzd%2FtCGv1aM5WS%2B8QG5FB%2B6zU6VCoG1s9s9csrUgK%2BFnfNmaFDdVZX58Wdco5F3a8JAJFGvSZgOdwYCUXneCRtK8d2mpj98xl2gJqZhxvR7%2FmB3Von12VExQeA1ilwyTs0bXZxt5iq3JIoAsElT1AH%2F0vJnSWNN8ZpdKDyu&u2=RLTJPK2SybPFtiWC&width=2560"
    },
    {
        id: 59,
        manufacturer: "Audi",
        name: "S6",
        category: "Sports Car",
        leasePrice: "$999/mo",
        dealerLocation: "Miami, FL",
        description: "Sport sedan: 444 HP twin-turbo V6, quattro® AWD, 8-speed Tiptronic®, sport differential, air suspension, 0-60 in 4.4 sec, sport exhaust, executive performance, 27 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=Buzd%2FtCGv1aM5WS%2B8QG5FB%2B6zU6VCoG1s9s9csrUgK%2BFnfNmaFDdVZX58Wdco5F3a8JAJFGvSZgOdwYCUXneCRtK8d2mpj98xl2gJqZhxvR7%2FmB3Von12VExQeA1ilwyTs0bXZxt5iq3JIoAsElT1AH%2F0vJnSWNN8ZpdKDyu&u2=RLTJPK2SybPFtiWC&width=2560"
    },
    {
        id: 60,
        manufacturer: "Audi",
        name: "SQ5",
        category: "Sports Car",
        leasePrice: "$849/mo",
        dealerLocation: "Miami, FL",
        description: "Sport SUV: 349 HP turbo V6, quattro® AWD, 8-speed Tiptronic®, sport differential, adaptive dampers, 0-60 in 5.1 sec, sport exhaust, performance SUV versatility, 25 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=P%2Bqw3c2%2BXb9aj6rGxrnkP8H3dvrrM4BqYE8T5fnCBxYi%2BRYmPKAuGreYTUyVFykP7Lj%2F1aRJkkpeN4pcMDHR2fyspuSOPOBWZWyatXNX9EVVNOcz%2F%2FSXoMDFC663z1OUpHsTYYWOC9zmniaFtdjNdVFWnwVzi%2FsY38rEbQeLxvN23DGJIM0U&u2=41rDiFKnFpEtzhd%2B&width=2560"
    },
    {
        id: 61,
        manufacturer: "Audi",
        name: "SQ7",
        category: "Sports Car",
        leasePrice: "$1199/mo",
        dealerLocation: "Miami, FL",
        description: "Sport SUV: 500 HP turbo V8, quattro® AWD, 8-speed Tiptronic®, sport differential, air suspension, seats 7, 0-60 in 4.3 sec, sport exhaust, 4,400 lb towing, performance family hauler.",
        image: "https://sspark.genspark.ai/cfimages?u1=P%2Bqw3c2%2BXb9aj6rGxrnkP8H3dvrrM4BqYE8T5fnCBxYi%2BRYmPKAuGreYTUyVFykP7Lj%2F1aRJkkpeN4pcMDHR2fyspuSOPOBWZWyatXNX9EVVNOcz%2F%2FSXoMDFC663z1OUpHsTYYWOC9zmniaFtdjNdVFWnwVzi%2FsY38rEbQeLxvN23DGJIM0U&u2=41rDiFKnFpEtzhd%2B&width=2560"
    },
    {
        id: 62,
        manufacturer: "Audi",
        name: "e-tron GT",
        category: "Electric",
        leasePrice: "$1288/mo",
        dealerLocation: "Los Angeles, CA",
        description: "Electric gran turismo: 469-637 HP dual motors, quattro® AWD, 2-speed transmission, up to 238 miles range, 0-60 in 3.1 sec (RS), air suspension, premium EV performance, 14 cu ft trunk.",
        image: "https://sspark.genspark.ai/cfimages?u1=Buzd%2FtCGv1aM5WS%2B8QG5FB%2B6zU6VCoG1s9s9csrUgK%2BFnfNmaFDdVZX58Wdco5F3a8JAJFGvSZgOdwYCUXneCRtK8d2mpj98xl2gJqZhxvR7%2FmB3Von12VExQeA1ilwyTs0bXZxt5iq3JIoAsElT1AH%2F0vJnSWNN8ZpdKDyu&u2=RLTJPK2SybPFtiWC&width=2560"
    },
    {
        id: 63,
        manufacturer: "Audi",
        name: "Q4 e-tron",
        category: "Electric",
        leasePrice: "$629/mo",
        dealerLocation: "Miami, FL",
        description: "Electric SUV: 282 HP rear motor, quattro® AWD available, up to 265 miles range, Virtual Cockpit Plus, MMI® Touch, 62.7 cu ft cargo, panoramic sunroof, premium compact EV.",
        image: "https://sspark.genspark.ai/cfimages?u1=P%2Bqw3c2%2BXb9aj6rGxrnkP8H3dvrrM4BqYE8T5fnCBxYi%2BRYmPKAuGreYTUyVFykP7Lj%2F1aRJkkpeN4pcMDHR2fyspuSOPOBWZWyatXNX9EVVNOcz%2F%2FSXoMDFC663z1OUpHsTYYWOC9zmniaFtdjNdVFWnwVzi%2FsY38rEbQeLxvN23DGJIM0U&u2=41rDiFKnFpEtzhd%2B&width=2560"
    },
    {
        id: 64,
        manufacturer: "Audi",
        name: "e-tron",
        category: "Electric",
        leasePrice: "$849/mo",
        dealerLocation: "Miami, FL",
        description: "Electric SUV: 402 HP dual motors, quattro® AWD, up to 222 miles range, air suspension, Virtual Cockpit Plus, panoramic sunroof, 57.0 cu ft cargo, 4,000 lb towing, premium EV utility.",
        image: "https://sspark.genspark.ai/cfimages?u1=P%2Bqw3c2%2BXb9aj6rGxrnkP8H3dvrrM4BqYE8T5fnCBxYi%2BRYmPKAuGreYTUyVFykP7Lj%2F1aRJkkpeN4pcMDHR2fyspuSOPOBWZWyatXNX9EVVNOcz%2F%2FSXoMDFC663z1OUpHsTYYWOC9zmniaFtdjNdVFWnwVzi%2FsY38rEbQeLxvN23DGJIM0U&u2=41rDiFKnFpEtzhd%2B&width=2560"
    },
    {
        id: 65,
        manufacturer: "Audi",
        name: "A5 Sedan Premium Plus",
        category: "Luxury",
        leasePrice: "$599/mo",
        dealerLocation: "Denver, CO",
        description: "Premium sedan/sportback: 261 HP turbo, quattro® AWD, 7-speed S tronic®, Virtual Cockpit Plus, sport suspension, LED headlights, premium interior, 34 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=Buzd%2FtCGv1aM5WS%2B8QG5FB%2B6zU6VCoG1s9s9csrUgK%2BFnfNmaFDdVZX58Wdco5F3a8JAJFGvSZgOdwYCUXneCRtK8d2mpj98xl2gJqZhxvR7%2FmB3Von12VExQeA1ilwyTs0bXZxt5iq3JIoAsElT1AH%2F0vJnSWNN8ZpdKDyu&u2=RLTJPK2SybPFtiWC&width=2560"
    },
    {
        id: 66,
        manufacturer: "Audi",
        name: "A7",
        category: "Luxury",
        leasePrice: "$899/mo",
        dealerLocation: "Miami, FL",
        description: "Premium sportback: 335-444 HP turbo, quattro® AWD, 8-speed Tiptronic®, dual touchscreens, Matrix LED, air suspension, Bang & Olufsen® 3D, 27 MPG highway, elegant performance.",
        image: "https://sspark.genspark.ai/cfimages?u1=Buzd%2FtCGv1aM5WS%2B8QG5FB%2B6zU6VCoG1s9s9csrUgK%2BFnfNmaFDdVZX58Wdco5F3a8JAJFGvSZgOdwYCUXneCRtK8d2mpj98xl2gJqZhxvR7%2FmB3Von12VExQeA1ilwyTs0bXZxt5iq3JIoAsElT1AH%2F0vJnSWNN8ZpdKDyu&u2=RLTJPK2SybPFtiWC&width=2560"
    },

    // HYUNDAI & GENESIS (26 models)
    {
        id: 67,
        manufacturer: "Hyundai",
        name: "Elantra",
        category: "Sedan",
        leasePrice: "$327/mo",
        dealerLocation: "Phoenix, AZ",
        description: "Compact sedan: 147-201 HP, CVT or 6-speed manual, Hyundai SmartSense®, 10.25-inch display, wireless Apple CarPlay®/Android Auto™, 14.2 cu ft trunk, up to 54 MPG (Hybrid), stylish design.",
        image: "https://sspark.genspark.ai/cfimages?u1=JmraNe3iNGppSEZLbJgDbU%2FJ288oC726M84%2FEsvz2OHykLAZ9BYMx%2BY7x8lJ8mr5KDhUWTiKkPDJ7QcMYUW%2FQDEyedrCF37S74bmo1S6NLjoVb7IieM%2B8g91hWnwu8h2P2O2SEbZyyy%2BnFO%2BLvIpWdmj0jUdPloLYTyflzo%2F&u2=O%2BZJRyvbxR8fIm1R&width=2560"
    },
    {
        id: 68,
        manufacturer: "Hyundai",
        name: "Sonata",
        category: "Sedan",
        leasePrice: "$375/mo",
        dealerLocation: "Orlando, FL",
        description: "Midsize sedan: 191 HP 2.5L, 8-speed auto, Hyundai SmartSense®, 12.3-inch digital cluster, wireless charging, 16 cu ft trunk, Remote Smart Parking Assist, 36 MPG highway, premium midsize.",
        image: "https://sspark.genspark.ai/cfimages?u1=MxvF15OAhyXMyKiAZoMczfipU1haaMg4G4PQJIdy%2BHKXONVoJKrJLUkMwrDh0Onr9WnvwwJ9bFUOnimugOMfMx%2FxflJR7A1jcvzET5%2B0YYCibKhmYTJcdXFC%2BCdXULLQ8PQ0htQOxNvySz4NabMrtjxg6xzLQEsiD%2F9EQpg%3D&u2=6rpOo4ptABdMtw16&width=2560"
    },
    {
        id: 69,
        manufacturer: "Hyundai",
        name: "Tucson",
        category: "SUV",
        leasePrice: "$399/mo",
        dealerLocation: "San Antonio, TX",
        description: "Compact SUV: 187-226 HP, AWD available, 8-speed auto, Hyundai SmartSense®, up to 74.8 cu ft cargo, panoramic sunroof, 10.25-inch touchscreen, 31 MPG highway (Hybrid), bold design.",
        image: "https://sspark.genspark.ai/cfimages?u1=vydWwBnwiq4hwzjgyu6LGxEwK2hdPe2LjsZU83rX11%2F4Km%2BrlfotMzgdWEGV2S7qdD9qDb0YWxrNklnlnOouUqYSYDInC8CJN8DluxE4e1Q2PPSTd%2Fn6UT0fBh9rjFd%2BGPxRMb%2F1xQ%3D%3D&u2=d16HEvTnR5zbSBFt&width=2560"
    },
    {
        id: 70,
        manufacturer: "Hyundai",
        name: "Santa Fe",
        category: "SUV",
        leasePrice: "$479/mo",
        dealerLocation: "Portland, OR",
        description: "Midsize SUV: 277 HP turbo, AWD, 8-speed DCT, seats 5-7, up to 72.1 cu ft cargo, Hyundai SmartSense®, 12.3-inch displays, HTRAC® AWD, 5,000 lb towing, family adventure SUV.",
        image: "https://sspark.genspark.ai/cfimages?u1=vydWwBnwiq4hwzjgyu6LGxEwK2hdPe2LjsZU83rX11%2F4Km%2BrlfotMzgdWEGV2S7qdD9qDb0YWxrNklnlnOouUqYSYDInC8CJN8DluxE4e1Q2PPSTd%2Fn6UT0fBh9rjFd%2BGPxRMb%2F1xQ%3D%3D&u2=d16HEvTnR5zbSBFt&width=2560"
    },
    {
        id: 71,
        manufacturer: "Hyundai",
        name: "Palisade",
        category: "SUV",
        leasePrice: "$499/mo",
        dealerLocation: "Charlotte, NC",
        description: "3-row flagship SUV: 291 HP V6, AWD, 8-speed auto, seats 7-8, up to 86.4 cu ft cargo, Hyundai SmartSense®, 12.3-inch displays, captain's chairs, Bose®, 5,000 lb towing, luxury family hauler.",
        image: "https://sspark.genspark.ai/cfimages?u1=vydWwBnwiq4hwzjgyu6LGxEwK2hdPe2LjsZU83rX11%2F4Km%2BrlfotMzgdWEGV2S7qdD9qDb0YWxrNklnlnOouUqYSYDInC8CJN8DluxE4e1Q2PPSTd%2Fn6UT0fBh9rjFd%2BGPxRMb%2F1xQ%3D%3D&u2=d16HEvTnR5zbSBFt&width=2560"
    },
    {
        id: 72,
        manufacturer: "Hyundai",
        name: "Kona",
        category: "SUV",
        leasePrice: "$413/mo",
        dealerLocation: "Tampa, FL",
        description: "Subcompact SUV: 147-195 HP, AWD available, CVT or 7-speed DCT, Hyundai SmartSense®, up to 45.8 cu ft cargo, 10.25-inch touchscreen, 35 MPG highway, urban-friendly adventure.",
        image: "https://sspark.genspark.ai/cfimages?u1=vydWwBnwiq4hwzjgyu6LGxEwK2hdPe2LjsZU83rX11%2F4Km%2BrlfotMzgdWEGV2S7qdD9qDb0YWxrNklnlnOouUqYSYDInC8CJN8DluxE4e1Q2PPSTd%2Fn6UT0fBh9rjFd%2BGPxRMb%2F1xQ%3D%3D&u2=d16HEvTnR5zbSBFt&width=2560"
    },
    {
        id: 73,
        manufacturer: "Hyundai",
        name: "Venue",
        category: "SUV",
        leasePrice: "$378/mo",
        dealerLocation: "San Diego, CA",
        description: "Entry subcompact SUV: 121 HP 1.6L, CVT or 6-speed manual, Hyundai SmartSense®, 8-inch touchscreen, 31.9 cu ft cargo, Apple CarPlay®/Android Auto™, affordable city SUV.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },
    {
        id: 74,
        manufacturer: "Hyundai",
        name: "IONIQ 5",
        category: "Electric",
        leasePrice: "$579/mo",
        dealerLocation: "Miami, FL",
        description: "Electric crossover: 225-320 HP, RWD/AWD, up to 303 miles range, 800V ultra-fast charging (10-80% in 18 min), Vehicle-to-Load, 12.3-inch dual displays, lounge-style interior, innovative EV.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },
    {
        id: 75,
        manufacturer: "Hyundai",
        name: "IONIQ 6",
        category: "Electric",
        leasePrice: "$599/mo",
        dealerLocation: "Miami, FL",
        description: "Electric streamliner: 225-320 HP, RWD/AWD, up to 361 miles range (longest EV range), 800V ultra-fast charging, 0.21 drag coefficient, 12.3-inch dual displays, eco-friendly luxury sedan.",
        image: "https://www.genspark.ai/api/files/s/pQosInE9"
    },
    {
        id: 76,
        manufacturer: "Hyundai",
        name: "KONA Electric",
        category: "Electric",
        leasePrice: "$469/mo",
        dealerLocation: "Miami, FL",
        description: "Electric SUV: 201 HP, FWD, up to 258 miles range, one-pedal driving, 10.25-inch touchscreen, Hyundai SmartSense®, 45.8 cu ft cargo, affordable electric SUV, instant torque.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },
    {
        id: 77,
        manufacturer: "Hyundai",
        name: "Elantra N",
        category: "Sports Car",
        leasePrice: "$529/mo",
        dealerLocation: "Miami, FL",
        description: "Performance sedan: 276 HP turbo, 6-speed manual or 8-speed DCT, 0-60 in 5.0 sec, N Grin Shift, electronic LSD, sport exhaust, adaptive suspension, track-ready hot sedan.",
        image: "https://www.genspark.ai/api/files/s/pQosInE9"
    },
    {
        id: 78,
        manufacturer: "Hyundai",
        name: "Kona N",
        category: "Sports Car",
        leasePrice: "$549/mo",
        dealerLocation: "Miami, FL",
        description: "Performance SUV: 276 HP turbo, 8-speed DCT, 0-60 in 5.1 sec, N Grin Shift, electronic LSD, sport exhaust, adaptive suspension, track mode, hot hatch SUV.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },
    {
        id: 79,
        manufacturer: "Hyundai",
        name: "Veloster N",
        category: "Sports Car",
        leasePrice: "$559/mo",
        dealerLocation: "Miami, FL",
        description: "Hot hatch: 275 HP turbo, 6-speed manual or 8-speed DCT, 0-60 in 4.9 sec, N Grin Shift, electronic LSD, sport exhaust, adaptive suspension, unique 3-door design.",
        image: "https://www.genspark.ai/api/files/s/pQosInE9"
    },
    {
        id: 80,
        manufacturer: "Hyundai",
        name: "Santa Cruz",
        category: "Truck",
        leasePrice: "$489/mo",
        dealerLocation: "Miami, FL",
        description: "Sport Adventure Vehicle: 281 HP turbo, AWD, 8-speed DCT, 4.5 ft bed, bed outlets, lockable tonneau, 5,000 lb towing, Hyundai SmartSense®, lifestyle truck, 23 MPG combined.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },
    {
        id: 81,
        manufacturer: "Genesis",
        name: "G70",
        category: "Luxury",
        leasePrice: "$649/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury sport sedan: 252-365 HP turbo, RWD/AWD, 8-speed auto, Genesis Connected Services, 12.3-inch displays, Nappa leather, 0-60 in 4.5 sec (3.3T), 29 MPG highway, athletic luxury.",
        image: "https://www.genspark.ai/api/files/s/pQosInE9"
    },
    {
        id: 82,
        manufacturer: "Genesis",
        name: "G80",
        category: "Luxury",
        leasePrice: "$849/mo",
        dealerLocation: "Miami, FL",
        description: "Executive sedan: 300-375 HP turbo/V6, RWD/AWD, 8-speed auto, 14.5-inch touchscreen, Road Preview suspension, Ergo Motion seats, Lexicon® audio, premium craftsmanship, 27 MPG highway.",
        image: "https://www.genspark.ai/api/files/s/pQosInE9"
    },
    {
        id: 83,
        manufacturer: "Genesis",
        name: "G90",
        category: "Luxury",
        leasePrice: "$1099/mo",
        dealerLocation: "Miami, FL",
        description: "Flagship sedan: 375-409 HP twin-turbo V6/V8, RWD/AWD, 8-speed auto, 12.3-inch 3D cluster, Nappa leather, 7-seat massage, Lexicon® 23-speaker, air suspension, ultimate luxury.",
        image: "https://www.genspark.ai/api/files/s/pQosInE9"
    },
    {
        id: 84,
        manufacturer: "Genesis",
        name: "GV60",
        category: "Electric",
        leasePrice: "$749/mo",
        dealerLocation: "Miami, FL",
        description: "Electric crossover: 314-429 HP dual motors, AWD, up to 294 miles range, 800V ultra-fast charging, Boost Mode, 12.3-inch dual displays, crystal sphere shift-by-wire, luxury EV.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },
    {
        id: 85,
        manufacturer: "Genesis",
        name: "GV70",
        category: "Luxury",
        leasePrice: "$799/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury compact SUV: 300-375 HP turbo/V6, RWD/AWD, 8-speed auto, 14.5-inch touchscreen, 56.2 cu ft cargo, Nappa leather, Lexicon® audio, Road Preview suspension, 25 MPG highway.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },
    {
        id: 86,
        manufacturer: "Genesis",
        name: "GV80",
        category: "Luxury",
        leasePrice: "$949/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury midsize SUV: 300-375 HP turbo/V6, RWD/AWD, 8-speed auto, seats 6-7, up to 84.4 cu ft cargo, air suspension, 14.5-inch touchscreen, premium materials, 6,000 lb towing.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },
    {
        id: 87,
        manufacturer: "Genesis",
        name: "Electrified G80",
        category: "Electric",
        leasePrice: "$949/mo",
        dealerLocation: "Miami, FL",
        description: "Electric luxury sedan: 365 HP dual motors, AWD, up to 282 miles range, 14.5-inch touchscreen, Road Preview suspension, Nappa leather, Lexicon® audio, instant torque, silent luxury.",
        image: "https://www.genspark.ai/api/files/s/pQosInE9"
    },
    {
        id: 88,
        manufacturer: "Genesis",
        name: "Electrified GV70",
        category: "Electric",
        leasePrice: "$849/mo",
        dealerLocation: "Miami, FL",
        description: "Electric luxury SUV: 429 HP dual motors, AWD, up to 236 miles range, Boost Mode, 14.5-inch touchscreen, 56.2 cu ft cargo, premium materials, Lexicon® audio, performance EV SUV.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },
    {
        id: 89,
        manufacturer: "Hyundai",
        name: "Accent",
        category: "Sedan",
        leasePrice: "$339/mo",
        dealerLocation: "Miami, FL",
        description: "Affordable compact: 120 HP 1.6L, CVT or 6-speed manual, 8-inch touchscreen, Apple CarPlay®/Android Auto™, 13.7 cu ft trunk, 41 MPG highway, budget-friendly reliability.",
        image: "https://www.genspark.ai/api/files/s/pQosInE9"
    },
    {
        id: 90,
        manufacturer: "Hyundai",
        name: "IONIQ Hybrid",
        category: "Hybrid",
        leasePrice: "$389/mo",
        dealerLocation: "Miami, FL",
        description: "Hybrid hatchback: 139 combined HP, 6-speed DCT, up to 59 MPG combined, 26.5 cu ft cargo, 10.25-inch touchscreen, Blue Link®, efficient aerodynamic design, eco-friendly choice.",
        image: "https://www.genspark.ai/api/files/s/pQosInE9"
    },
    {
        id: 91,
        manufacturer: "Hyundai",
        name: "Tucson Hybrid",
        category: "Hybrid",
        leasePrice: "$449/mo",
        dealerLocation: "Miami, FL",
        description: "Hybrid SUV: 226 combined HP, 6-speed auto, AWD standard, up to 37 MPG combined, 74.8 cu ft cargo, Hyundai SmartSense®, 12.3-inch displays, efficient family SUV.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },
    {
        id: 92,
        manufacturer: "Hyundai",
        name: "Santa Fe Hybrid",
        category: "Hybrid",
        leasePrice: "$529/mo",
        dealerLocation: "Miami, FL",
        description: "Hybrid midsize SUV: 277 combined HP, 6-speed auto, AWD standard, seats 5-7, up to 36 MPG combined, 72.1 cu ft cargo, Hyundai SmartSense®, 12.3-inch displays, efficient versatility.",
        image: "https://sspark.genspark.ai/cfimages?u1=qk3hVrepS45aRb%2F9MY65NmmIalJE4tMfwoIkPnZGsS2fS63Es00aUa7fiyHuE9r%2BmwcS8hET55WxpquUoBwbEt%2BF27Pth0lKkDWtXXegbdVXQe9R3WNps8BtnSKupQQruNRkCCPZ%2FAkuoZyXecMYVy2QS%2Fqb1RsHJfKQ3Jye&u2=mlNoTPkGLZCodNb0&width=2560"
    },

    // TOYOTA (15 models)
    {
        id: 93,
        manufacturer: "Toyota",
        name: "Camry",
        category: "Sedan",
        leasePrice: "$449/mo",
        dealerLocation: "Seattle, WA",
        description: "Bestselling midsize sedan: 203 HP 2.5L or 301 HP 3.5L V6, 8-speed auto, Toyota Safety Sense 2.5+, 9-inch touchscreen, Apple CarPlay®/Android Auto™, 15.1 cu ft trunk, 39 MPG highway (4-cyl), legendary reliability.",
        image: ""
    },
    {
        id: 94,
        manufacturer: "Toyota",
        name: "Corolla",
        category: "Sedan",
        leasePrice: "$405/mo",
        dealerLocation: "Phoenix, AZ",
        description: "Compact efficiency: 139 HP 1.8L or 169 HP 2.0L, CVT or 6-speed manual, Toyota Safety Sense 2.0, 8-inch touchscreen, 13.1 cu ft trunk, 40 MPG highway, proven reliability, budget-friendly.",
        image: ""
    },
    {
        id: 95,
        manufacturer: "Toyota",
        name: "RAV4",
        category: "SUV",
        leasePrice: "$541/mo",
        dealerLocation: "San Diego, CA",
        description: "Top-selling compact SUV: 203 HP 2.5L, 8-speed auto, AWD available, 37.5 cu ft cargo (69.8 cu ft max), Toyota Safety Sense 2.5+, 8-inch touchscreen, Adventure trim with off-road capability, 35 MPG highway.",
        image: ""
    },
    {
        id: 96,
        manufacturer: "Toyota",
        name: "Highlander",
        category: "SUV",
        leasePrice: "$728/mo",
        dealerLocation: "Dallas, TX",
        description: "Midsize 3-row SUV: 295 HP 3.5L V6, 8-speed auto, AWD available, seats 8, 84.3 cu ft cargo, 5,000 lb towing, Toyota Safety Sense 2.5+, 12.3-inch touchscreen, captain's chairs option, 29 MPG highway.",
        image: ""
    },
    {
        id: 97,
        manufacturer: "Toyota",
        name: "4Runner",
        category: "SUV",
        leasePrice: "$639/mo",
        dealerLocation: "Miami, FL",
        description: "Rugged body-on-frame SUV: 270 HP 4.0L V6, 5-speed auto, part-time 4WD, 5,000 lb towing, 47.2 cu ft cargo (88.8 cu ft max), Crawl Control, Multi-Terrain Select, TRD Pro available, legendary off-road capability.",
        image: ""
    },
    {
        id: 98,
        manufacturer: "Toyota",
        name: "Tacoma",
        category: "Truck",
        leasePrice: "$467/mo",
        dealerLocation: "Denver, CO",
        description: "Midsize pickup truck: 159-278 HP (4-cyl/V6), 6-speed manual or auto, 4WD available, 6,800 lb towing, TRD Off-Road/Pro packages, Multi-Terrain Select, Crawl Control, bed lengths 5'/6', proven reliability.",
        image: ""
    },
    {
        id: 99,
        manufacturer: "Toyota",
        name: "Tundra",
        category: "Truck",
        leasePrice: "$582/mo",
        dealerLocation: "Houston, TX",
        description: "Full-size truck: 389 HP twin-turbo 3.5L V6, 10-speed auto, 4WD available, 12,000 lb towing, i-FORCE MAX hybrid option, 14-inch touchscreen, bed lengths 6.5'/8.1', TRD Pro capability.",
        image: ""
    },
    {
        id: 100,
        manufacturer: "Toyota",
        name: "Prius",
        category: "Hybrid",
        leasePrice: "$429/mo",
        dealerLocation: "Miami, FL",
        description: "Hybrid pioneer: 194 combined HP, CVT, 50+ MPG combined, 11.6 cu ft trunk, Toyota Safety Sense 2.5+, 8-inch touchscreen, Prius Prime plug-in with 44 miles EV range, legendary fuel efficiency.",
        image: ""
    },
    {
        id: 101,
        manufacturer: "Toyota",
        name: "Corolla Hybrid",
        category: "Hybrid",
        leasePrice: "$449/mo",
        dealerLocation: "Miami, FL",
        description: "Hybrid compact: 121 combined HP, CVT, 52 MPG combined, Toyota Safety Sense 2.0, 8-inch touchscreen, 13.1 cu ft trunk, affordable hybrid efficiency.",
        image: ""
    },
    {
        id: 102,
        manufacturer: "Toyota",
        name: "RAV4 Hybrid",
        category: "Hybrid",
        leasePrice: "$589/mo",
        dealerLocation: "Miami, FL",
        description: "Hybrid compact SUV: 219 combined HP, CVT, AWD standard, 40 MPG combined, 37.5 cu ft cargo, Toyota Safety Sense 2.5+, powerful and efficient.",
        image: ""
    },
    {
        id: 103,
        manufacturer: "Toyota",
        name: "Highlander Hybrid",
        category: "Hybrid",
        leasePrice: "$779/mo",
        dealerLocation: "Miami, FL",
        description: "Hybrid 3-row SUV: 243 combined HP, CVT, AWD standard, seats 8, 36 MPG combined, 84.3 cu ft cargo, Toyota Safety Sense 2.5+, family efficiency.",
        image: ""
    },
    {
        id: 104,
        manufacturer: "Toyota",
        name: "Sienna",
        category: "Van",
        leasePrice: "$579/mo",
        dealerLocation: "Miami, FL",
        description: "Hybrid minivan: 245 combined HP, CVT, AWD available, seats 8, 101 cu ft cargo, hybrid-only, 36 MPG, dual moonroofs, captain's chairs, Toyota Safety Sense 2.5+, versatile family hauler.",
        image: ""
    },
    {
        id: 105,
        manufacturer: "Toyota",
        name: "Crown",
        category: "Sedan",
        leasePrice: "$695/mo",
        dealerLocation: "San Francisco, CA",
        description: "Premium sedan: 236 HP hybrid, CVT, AWD standard, Toyota Safety Sense 3.0, 12.3-inch touchscreen, 10-speaker JBL audio, unique crossover-sedan design, elevated luxury.",
        image: ""
    },
    {
        id: 106,
        manufacturer: "Toyota",
        name: "GR86",
        category: "Sports Car",
        leasePrice: "$489/mo",
        dealerLocation: "Miami, FL",
        description: "Pure sports coupe: 228 HP 2.4L boxer, 6-speed manual or auto, RWD, 0-60 in 6.1 sec, 2+2 seating, lightweight 2,811 lbs, track-ready handling, affordable performance.",
        image: ""
    },
    {
        id: 107,
        manufacturer: "Toyota",
        name: "Supra",
        category: "Sports Car",
        leasePrice: "$849/mo",
        dealerLocation: "Miami, FL",
        description: "Legendary sports car: 255-382 HP turbo inline-6, 8-speed auto, RWD, 0-60 in 3.9 sec (3.0L), adaptive suspension, BMW-sourced engine, iconic styling, pure driving dynamics.",
        image: ""
    },

    // CHEVROLET (12 models)
    {
        id: 108,
        manufacturer: "Chevrolet",
        name: "Malibu",
        category: "Sedan",
        leasePrice: "$439/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize sedan: 160 HP 1.5L turbo, CVT, 15.7 cu ft trunk, 8-inch touchscreen, Apple CarPlay®/Android Auto™, Teen Driver technology, 36 MPG highway, spacious comfort.",
        image: ""
    },
    {
        id: 109,
        manufacturer: "Chevrolet",
        name: "Equinox",
        category: "SUV",
        leasePrice: "$399/mo",
        dealerLocation: "Miami, FL",
        description: "Compact SUV: 175 HP 1.5L turbo, 6-speed auto, AWD available, 29.9 cu ft cargo (63.9 cu ft max), Teen Driver, 8-inch touchscreen, 31 MPG highway, family-friendly versatility.",
        image: ""
    },
    {
        id: 110,
        manufacturer: "Chevrolet",
        name: "Traverse",
        category: "SUV",
        leasePrice: "$549/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize 3-row SUV: 310 HP 3.6L V6, 9-speed auto, AWD available, seats 8, 98.2 cu ft cargo, 5,000 lb towing, 10.2-inch touchscreen, captain's chairs, spacious family hauler.",
        image: ""
    },
    {
        id: 111,
        manufacturer: "Chevrolet",
        name: "Tahoe",
        category: "SUV",
        leasePrice: "$849/mo",
        dealerLocation: "Miami, FL",
        description: "Full-size SUV: 355 HP 5.3L V8, 10-speed auto, 4WD available, seats 9, 122.9 cu ft cargo, 8,400 lb towing, independent rear suspension, luxury and capability.",
        image: ""
    },
    {
        id: 112,
        manufacturer: "Chevrolet",
        name: "Suburban",
        category: "SUV",
        leasePrice: "$1199/mo",
        dealerLocation: "Brooklyn, NY",
        description: "Extended full-size SUV: 355 HP 5.3L V8, 10-speed auto, 4WD available, seats 9, 144.7 cu ft cargo, 8,300 lb towing, maximum space, family road trip champion.",
        image: ""
    },
    {
        id: 113,
        manufacturer: "Chevrolet",
        name: "Silverado 1500",
        category: "Truck",
        leasePrice: "$649/mo",
        dealerLocation: "Miami, FL",
        description: "Full-size truck: 277-420 HP (4-cyl turbo/V8), 8/10-speed auto, 4WD available, 13,300 lb towing, bed lengths 5.8'/6.6'/8', MultiPro tailgate, diverse powertrain options.",
        image: ""
    },
    {
        id: 114,
        manufacturer: "Chevrolet",
        name: "Colorado",
        category: "Truck",
        leasePrice: "$529/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize truck: 181-308 HP (4-cyl/V6), 8-speed auto, 4WD available, 7,700 lb towing, bed lengths 5.2'/6.2', ZR2 off-road, compact capability.",
        image: ""
    },
    {
        id: 115,
        manufacturer: "Chevrolet",
        name: "Corvette",
        category: "Sports Car",
        leasePrice: "$1499/mo",
        dealerLocation: "Miami, FL",
        description: "American supercar: 490-670 HP mid-engine V8, 8-speed dual-clutch, RWD, 0-60 in 2.9 sec, Z06 available, removable roof panel, world-class performance.",
        image: ""
    },
    {
        id: 116,
        manufacturer: "Chevrolet",
        name: "Camaro",
        category: "Sports Car",
        leasePrice: "$649/mo",
        dealerLocation: "Miami, FL",
        description: "Muscle car: 275-650 HP (4-cyl turbo/V6/V8), 6-speed manual or 8/10-speed auto, RWD, 0-60 in 3.5 sec (ZL1), magnetic ride, track-ready.",
        image: ""
    },
    {
        id: 117,
        manufacturer: "Chevrolet",
        name: "Blazer",
        category: "SUV",
        leasePrice: "$499/mo",
        dealerLocation: "Miami, FL",
        description: "Sporty midsize SUV: 228-308 HP (4-cyl/V6), 9-speed auto, AWD available, 30.5 cu ft cargo, 10.2-inch touchscreen, bold styling, dynamic handling.",
        image: ""
    },
    {
        id: 118,
        manufacturer: "Chevrolet",
        name: "Bolt EV",
        category: "Electric",
        leasePrice: "$429/mo",
        dealerLocation: "Miami, FL",
        description: "Electric hatchback: 200 HP electric motor, 259 miles range, DC fast charging, one-pedal driving, 10.2-inch touchscreen, affordable EV.",
        image: ""
    },
    {
        id: 119,
        manufacturer: "Chevrolet",
        name: "Bolt EUV",
        category: "Electric",
        leasePrice: "$449/mo",
        dealerLocation: "Miami, FL",
        description: "Electric crossover: 200 HP electric motor, 247 miles range, Super Cruise available, more spacious than Bolt EV, DC fast charging, family-friendly EV.",
        image: ""
    },

    // FORD (14 models)
    {
        id: 120,
        manufacturer: "Ford",
        name: "Mustang",
        category: "Sports Car",
        leasePrice: "$649/mo",
        dealerLocation: "Miami, FL",
        description: "American icon: 310-480 HP (EcoBoost/V8), 6-speed manual or 10-speed auto, RWD, 0-60 in 4.3 sec (GT), MagneRide, track apps, legendary muscle.",
        image: ""
    },
    {
        id: 121,
        manufacturer: "Ford",
        name: "F-150",
        category: "Truck",
        leasePrice: "$599/mo",
        dealerLocation: "Miami, FL",
        description: "America's bestselling truck: 290-450 HP (V6/V8), 10-speed auto, 4WD available, 14,000 lb towing, bed lengths 5.5'/6.5'/8', Pro Power Onboard, aluminum body, diverse configurations.",
        image: ""
    },
    {
        id: 122,
        manufacturer: "Ford",
        name: "Explorer",
        category: "SUV",
        leasePrice: "$579/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize 3-row SUV: 300-400 HP (4-cyl/V6), 10-speed auto, AWD available, seats 7, 87.8 cu ft cargo, 5,600 lb towing, SYNC 4, versatile family SUV.",
        image: ""
    },
    {
        id: 123,
        manufacturer: "Ford",
        name: "Expedition",
        category: "SUV",
        leasePrice: "$849/mo",
        dealerLocation: "Miami, FL",
        description: "Full-size SUV: 380 HP 3.5L twin-turbo V6, 10-speed auto, 4WD available, seats 8, 104.6 cu ft cargo, 9,300 lb towing, SYNC 4, luxury and capability.",
        image: ""
    },
    {
        id: 126,
        manufacturer: "Ford",
        name: "Bronco",
        category: "SUV",
        leasePrice: "$649/mo",
        dealerLocation: "Miami, FL",
        description: "Off-road icon reborn: 275-330 HP (4-cyl/V6), 7-speed manual or 10-speed auto, 4WD standard, removable doors/roof, G.O.A.T. modes, 3,500 lb towing, trail-rated capability.",
        image: ""
    },
    {
        id: 127,
        manufacturer: "Ford",
        name: "Bronco Sport",
        category: "SUV",
        leasePrice: "$489/mo",
        dealerLocation: "Miami, FL",
        description: "Compact off-road SUV: 181-250 HP (3-cyl turbo), 8-speed auto, AWD standard, G.O.A.T. modes, 32.5 cu ft cargo, Badlands trim for serious trails.",
        image: ""
    },
    {
        id: 128,
        manufacturer: "Ford",
        name: "Ranger",
        category: "Truck",
        leasePrice: "$529/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize truck: 270 HP 2.3L EcoBoost, 10-speed auto, 4WD available, 7,500 lb towing, bed lengths 5'/6', FX4 off-road, compact capability.",
        image: ""
    },
    {
        id: 129,
        manufacturer: "Ford",
        name: "Maverick",
        category: "Truck",
        leasePrice: "$429/mo",
        dealerLocation: "Miami, FL",
        description: "Compact hybrid truck: 191 HP hybrid or 250 HP EcoBoost, CVT or 8-speed auto, FWD standard/AWD available, 42 MPG city (hybrid), 4.5' bed, affordable utility.",
        image: ""
    },
    {
        id: 130,
        manufacturer: "Ford",
        name: "Mustang Mach-E",
        category: "Electric",
        leasePrice: "$649/mo",
        dealerLocation: "Miami, FL",
        description: "Electric SUV: 266-480 HP, RWD or AWD, 250-312 miles range, 0-60 in 3.5 sec (GT), 15.5-inch touchscreen, hands-free BlueCruise, sporty electric crossover.",
        image: ""
    },
    {
        id: 131,
        manufacturer: "Ford",
        name: "F-150 Lightning",
        category: "Electric",
        leasePrice: "$849/mo",
        dealerLocation: "Miami, FL",
        description: "Electric truck: 452-580 HP dual motors, AWD, 240-320 miles range, 10,000 lb towing, Pro Power Onboard 9.6 kW, Mega Power Frunk, 0-60 in 4.0 sec.",
        image: ""
    },
    {
        id: 132,
        manufacturer: "Ford",
        name: "Transit Connect",
        category: "Van",
        leasePrice: "$449/mo",
        dealerLocation: "Miami, FL",
        description: "Compact cargo van: 162 HP 2.0L, 8-speed auto, FWD, dual sliding doors, 104.3 cu ft cargo, crew van seats 5, versatile work vehicle.",
        image: ""
    },

    // MERCEDES-BENZ (14 models - added GLA, AMG GT, updated S-Class, GLC, GLS, G-Class)
    {
        id: 134,
        manufacturer: "Mercedes-Benz",
        name: "C-Class",
        category: "Luxury",
        leasePrice: "$679/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury sport sedan: 255-385 HP turbo 4-cyl/6-cyl, 9-speed auto, RWD/4MATIC AWD, MBUX infotainment, 12.3-inch displays, AMG Line, refined performance.",
        image: ""
    },
    {
        id: 135,
        manufacturer: "Mercedes-Benz",
        name: "E-Class",
        category: "Luxury",
        leasePrice: "$776/mo",
        dealerLocation: "Boston, MA",
        description: "Executive sedan: 255-429 HP (4-cyl/6-cyl/V8), 9-speed auto, 4MATIC AWD, MBUX, dual 12.3-inch screens, air suspension, AMG Line styling, business-class luxury.",
        image: ""
    },
    {
        id: 136,
        manufacturer: "Mercedes-Benz",
        name: "S-Class",
        category: "Luxury",
        leasePrice: "$1732/mo",
        dealerLocation: "Manhattan, NY",
        description: "Flagship luxury: 429-603 HP (6-cyl/V8), 9-speed auto, 4MATIC AWD, MBUX Hyperscreen, Executive Rear Seating, air suspension, Burmester audio, ultimate luxury.",
        image: ""
    },
    {
        id: 137,
        manufacturer: "Mercedes-Benz",
        name: "GLE",
        category: "Luxury",
        leasePrice: "$799/mo",
        dealerLocation: "Seattle, WA",
        description: "Midsize luxury SUV: 255-429 HP (4-cyl/6-cyl/V8), 9-speed auto, 4MATIC+ AWD, MBUX, air suspension, premium interior, 0-60 in 5.2 sec, 7,700 lb towing.",
        image: ""
    },
    {
        id: 138,
        manufacturer: "Mercedes-Benz",
        name: "GLC",
        category: "Luxury",
        leasePrice: "$549/mo",
        dealerLocation: "Orlando, FL",
        description: "Compact luxury SUV: 255 HP turbo, 9-speed auto, 4MATIC AWD, MBUX, 12.3-inch displays, agile handling, premium compact.",
        image: ""
    },
    {
        id: 232,
        manufacturer: "Mercedes-Benz",
        name: "GLA250",
        category: "Luxury",
        leasePrice: "$665/mo",
        dealerLocation: "Austin, TX",
        description: "Subcompact luxury SUV: 221 HP turbo 4-cyl, 8-speed dual-clutch, 4MATIC AWD, MBUX, 12.3-inch displays, panoramic sunroof, 50.5 cu ft cargo, entry luxury.",
        image: ""
    },
    {
        id: 233,
        manufacturer: "Mercedes-Benz",
        name: "GLA250 4MATIC",
        category: "Luxury",
        leasePrice: "$646/mo",
        dealerLocation: "Nashville, TN",
        description: "Subcompact luxury SUV: 221 HP turbo 4-cyl, 8-speed dual-clutch, 4MATIC AWD, MBUX, 12.3-inch displays, Sport package, premium entry SUV, agile city performance.",
        image: ""
    },
    {
        id: 238,
        manufacturer: "Mercedes-Benz",
        name: "GLA",
        category: "Luxury",
        leasePrice: "$625/mo",
        dealerLocation: "Phoenix, AZ",
        description: "Subcompact luxury SUV: 221 HP turbo 4-cyl, 8-speed dual-clutch, 4MATIC AWD, MBUX, 12.3-inch displays, panoramic sunroof, 50.5 cu ft cargo, entry luxury crossover.",
        image: ""
    },
    {
        id: 139,
        manufacturer: "Mercedes-Benz",
        name: "GLS",
        category: "Luxury",
        leasePrice: "$999/mo",
        dealerLocation: "Houston, TX",
        description: "Full-size luxury SUV: 362-603 HP (6-cyl/V8), 9-speed auto, 4MATIC AWD, seats 7, MBUX, Executive Rear Seating Plus, air suspension, S-Class of SUVs.",
        image: ""
    },
    {
        id: 140,
        manufacturer: "Mercedes-Benz",
        name: "AMG GT63",
        category: "Sports Car",
        leasePrice: "$1369/mo",
        dealerLocation: "Miami, FL",
        description: "Performance 4-door coupe: 630 HP twin-turbo V8, 9-speed dual-clutch, 4MATIC+, 0-60 in 3.1 sec, active aero, AMG Ride Control, supercar performance in sedan form.",
        image: ""
    },
    {
        id: 239,
        manufacturer: "Mercedes-Benz",
        name: "AMG GT",
        category: "Sports Car",
        leasePrice: "$1500/mo",
        dealerLocation: "Scottsdale, AZ",
        description: "Performance coupe: 523-720 HP twin-turbo V8, 7/9-speed dual-clutch, RWD/4MATIC+, 0-60 in 3.1 sec, active aero, AMG Ride Control, supercar performance, 2-door coupe styling.",
        image: ""
    },
    {
        id: 141,
        manufacturer: "Mercedes-Benz",
        name: "EQS",
        category: "Electric",
        leasePrice: "$1299/mo",
        dealerLocation: "Miami, FL",
        description: "Electric flagship: 329-649 HP, RWD/4MATIC AWD, 350-453 miles range, MBUX Hyperscreen, air suspension, 0-60 in 3.4 sec (AMG), luxury EV.",
        image: ""
    },
    {
        id: 142,
        manufacturer: "Mercedes-Benz",
        name: "EQE",
        category: "Electric",
        leasePrice: "$999/mo",
        dealerLocation: "Miami, FL",
        description: "Electric executive sedan: 288-677 HP, RWD/4MATIC, 260-394 miles range, MBUX, 12.3-inch displays, air suspension, refined electric performance.",
        image: ""
    },
    {
        id: 143,
        manufacturer: "Mercedes-Benz",
        name: "G-Class",
        category: "Luxury",
        leasePrice: "$1800/mo",
        dealerLocation: "Beverly Hills, CA",
        description: "Iconic luxury SUV: 416-577 HP twin-turbo V8, 9-speed auto, 4MATIC AWD, three locking diffs, 7,000 lb towing, off-road legend, boxy iconic design.",
        image: ""
    },

    // LEXUS (12 models)
    {
        id: 144,
        manufacturer: "Lexus",
        name: "ES",
        category: "Luxury",
        leasePrice: "$579/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury sedan: 203-302 HP (4-cyl/V6), 8-speed auto, FWD/AWD, 16.7 cu ft trunk, 12.3-inch touchscreen, Mark Levinson audio, quiet cabin, refined comfort.",
        image: ""
    },
    {
        id: 145,
        manufacturer: "Lexus",
        name: "IS 350",
        category: "Luxury",
        leasePrice: "$549/mo",
        dealerLocation: "Atlanta, GA",
        description: "Sport sedan: 311 HP V6, 8-speed auto, RWD/AWD, Lexus Safety System+ 2.5, F SPORT handling, 10.3 cu ft trunk, engaging dynamics, 0-60 in 5.6 sec.",
        image: ""
    },
    {
        id: 146,
        manufacturer: "Lexus",
        name: "LS 500",
        category: "Luxury",
        leasePrice: "$899/mo",
        dealerLocation: "Beverly Hills, CA",
        description: "Flagship sedan: 416 HP twin-turbo V6, 10-speed auto, AWD, air suspension, 28-way power seats, Mark Levinson 3D audio, Lexus Safety System+ 2.5, ultimate refinement.",
        image: ""
    },
    {
        id: 147,
        manufacturer: "Lexus",
        name: "RX 330",
        category: "Luxury",
        leasePrice: "$549/mo",
        dealerLocation: "Seattle, WA",
        description: "Midsize luxury SUV: 275-366 HP (4-cyl turbo/V6/hybrid), 8-speed auto, FWD/AWD, seats 5-7, Lexus Safety System+ 2.5, 14-inch touchscreen, best-selling luxury SUV.",
        image: ""
    },
    {
        id: 242,
        manufacturer: "Lexus",
        name: "TX 350",
        category: "Luxury",
        leasePrice: "$579/mo",
        dealerLocation: "Houston, TX",
        description: "2026 Lexus TX 350: 3-row luxury SUV, 275 HP turbo 4-cyl, 8-speed auto, FWD/AWD, seats up to 8, Lexus Safety System+ 3.0, 14-inch touchscreen, spacious family luxury.",
        image: ""
    },
    {
        id: 148,
        manufacturer: "Lexus",
        name: "NX 350",
        category: "Luxury",
        leasePrice: "$479/mo",
        dealerLocation: "Portland, OR",
        description: "Compact luxury SUV: 275 HP turbo 4-cyl, 8-speed auto, FWD/AWD, Lexus Safety System+ 2.5, 14-inch touchscreen, bold styling, premium comfort.",
        image: ""
    },
    {
        id: 149,
        manufacturer: "Lexus",
        name: "GX 550",
        category: "Luxury",
        leasePrice: "$759/mo",
        dealerLocation: "Denver, CO",
        description: "Body-on-frame luxury SUV: 349 HP twin-turbo V6, 10-speed auto, 4WD, seats 7, 6,500 lb towing, Crawl Control, Multi-Terrain Select, rugged luxury.",
        image: ""
    },
    {
        id: 150,
        manufacturer: "Lexus",
        name: "LX 600",
        category: "Luxury",
        leasePrice: "$1289/mo",
        dealerLocation: "Dallas, TX",
        description: "Full-size luxury SUV: 409 HP twin-turbo V6, 10-speed auto, 4WD, seats 7, 8,000 lb towing, Crawl Control, Multi-Terrain Select, flagship SUV luxury.",
        image: ""
    },
    {
        id: 151,
        manufacturer: "Lexus",
        name: "LC",
        category: "Sports Car",
        leasePrice: "$1099/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury sports coupe: 471 HP 5.0L V8, 10-speed auto, RWD, 0-60 in 4.4 sec, adaptive suspension, stunning design, grand touring performance.",
        image: ""
    },
    {
        id: 152,
        manufacturer: "Lexus",
        name: "RC",
        category: "Sports Car",
        leasePrice: "$649/mo",
        dealerLocation: "Miami, FL",
        description: "Sport coupe: 311-472 HP (V6/V8), 8-speed auto, RWD/AWD, F SPORT/RC F variants, adaptive suspension, aggressive styling.",
        image: ""
    },
    {
        id: 153,
        manufacturer: "Lexus",
        name: "UX 300h",
        category: "Hybrid",
        leasePrice: "$429/mo",
        dealerLocation: "San Diego, CA",
        description: "Subcompact luxury hybrid SUV: 181 HP (4-cyl hybrid), CVT, FWD/AWD, Lexus Safety System+ 2.0, 8-inch touchscreen, urban luxury, excellent fuel economy.",
        image: ""
    },
    {
        id: 241,
        manufacturer: "Lexus",
        name: "RZ 300e",
        category: "Electric",
        leasePrice: "$479/mo",
        dealerLocation: "San Francisco, CA",
        description: "2026 Lexus RZ 300e: All-electric luxury SUV, 308 HP dual motors, AWD, up to 266 mi range, 14-inch touchscreen, Lexus Safety System+ 3.0, premium interior, 0-60 in 5.0 sec.",
        image: ""
    },

    // MAZDA (8 models)
    {
        id: 154,
        manufacturer: "Mazda",
        name: "Mazda3",
        category: "Sedan",
        leasePrice: "$359/mo",
        dealerLocation: "Seattle, WA",
        description: "Compact sedan: 186-227 HP (4-cyl/turbo), 6-speed manual or auto, FWD/AWD, premium interior, 8.8-inch display, 13.2 cu ft trunk, engaging driving dynamics.",
        image: ""
    },
    {
        id: 155,
        manufacturer: "Mazda",
        name: "Mazda6",
        category: "Sedan",
        leasePrice: "$439/mo",
        dealerLocation: "Portland, OR",
        description: "Midsize sedan: 187-250 HP (4-cyl/turbo), 6-speed manual or auto, FWD, 14.7 cu ft trunk, 10.25-inch display, Bose audio, upscale cabin, sporty handling.",
        image: ""
    },
    {
        id: 156,
        manufacturer: "Mazda",
        name: "CX-5",
        category: "SUV",
        leasePrice: "$469/mo",
        dealerLocation: "Atlanta, GA",
        description: "Compact SUV: 187-256 HP (4-cyl/turbo), 6-speed auto, FWD/AWD, 30.9 cu ft cargo, 10.25-inch display, Bose audio, premium feel, engaging handling.",
        image: ""
    },
    {
        id: 158,
        manufacturer: "Mazda",
        name: "CX-30",
        category: "SUV",
        leasePrice: "$434/mo",
        dealerLocation: "Tampa, FL",
        description: "Subcompact SUV: 186-250 HP (4-cyl/turbo), 6-speed auto, FWD/AWD, 20.2 cu ft cargo, 8.8-inch display, premium interior, agile handling.",
        image: ""
    },
    {
        id: 159,
        manufacturer: "Mazda",
        name: "CX-50",
        category: "SUV",
        leasePrice: "$457/mo",
        dealerLocation: "Charlotte, NC",
        description: "Compact adventure SUV: 187-256 HP (4-cyl/turbo), 6-speed auto, AWD standard, 31.4 cu ft cargo, 10.25-inch display, off-road capable, rugged styling.",
        image: ""
    },
    {
        id: 160,
        manufacturer: "Mazda",
        name: "MX-5 Miata",
        category: "Sports Car",
        leasePrice: "$529/mo",
        dealerLocation: "Miami, FL",
        description: "Roadster icon: 181 HP 2.0L, 6-speed manual or auto, RWD, 2,340 lbs, 50/50 weight distribution, soft-top or RF hardtop, pure driving joy.",
        image: ""
    },
    {
        id: 161,
        manufacturer: "Mazda",
        name: "CX-90",
        category: "SUV",
        leasePrice: "$519/mo",
        dealerLocation: "San Antonio, TX",
        description: "Midsize 3-row SUV: 280-340 HP (turbo 4-cyl/inline-6), 8-speed auto, AWD, seats 7, 71.2 cu ft cargo, 12.3-inch display, premium features, spacious luxury.",
        image: ""
    },

    // SUBARU (9 models)
    {
        id: 162,
        manufacturer: "Subaru",
        name: "Outback",
        category: "Wagon",
        leasePrice: "$469/mo",
        dealerLocation: "Miami, FL",
        description: "Adventure wagon: 182-260 HP (4-cyl/turbo), CVT, AWD standard, 8.7-inch ground clearance, 32.5 cu ft cargo, X-MODE, 11.6-inch touchscreen, go-anywhere capability.",
        image: ""
    },
    {
        id: 163,
        manufacturer: "Subaru",
        name: "Forester",
        category: "SUV",
        leasePrice: "$449/mo",
        dealerLocation: "Miami, FL",
        description: "Compact SUV: 182 HP 2.5L, CVT, AWD standard, 8.7-inch ground clearance, 35.4 cu ft cargo, X-MODE, EyeSight safety, practical versatility.",
        image: ""
    },
    {
        id: 164,
        manufacturer: "Subaru",
        name: "Crosstrek",
        category: "SUV",
        leasePrice: "$429/mo",
        dealerLocation: "Miami, FL",
        description: "Subcompact crossover: 152-182 HP (4-cyl/hybrid), CVT, AWD standard, 8.7-inch ground clearance, 20.8 cu ft cargo, X-MODE, affordable adventure.",
        image: ""
    },
    {
        id: 165,
        manufacturer: "Subaru",
        name: "Ascent",
        category: "SUV",
        leasePrice: "$549/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize 3-row SUV: 260 HP turbo 4-cyl, CVT, AWD standard, seats 8, 86.5 cu ft cargo, 5,000 lb towing, X-MODE, captain's chairs, family-friendly.",
        image: ""
    },
    {
        id: 166,
        manufacturer: "Subaru",
        name: "Impreza",
        category: "Sedan",
        leasePrice: "$369/mo",
        dealerLocation: "Miami, FL",
        description: "Compact sedan/hatchback: 152 HP 2.0L, CVT, AWD standard, EyeSight safety, 12.3 cu ft trunk (sedan), affordable AWD, practical daily driver.",
        image: ""
    },
    {
        id: 167,
        manufacturer: "Subaru",
        name: "Legacy",
        category: "Sedan",
        leasePrice: "$409/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize sedan: 182-260 HP (4-cyl/turbo), CVT, AWD standard, 15 cu ft trunk, 11.6-inch touchscreen, EyeSight safety, refined AWD sedan.",
        image: ""
    },

    // KIA (12 models)
    {
        id: 171,
        manufacturer: "Kia",
        name: "Forte",
        category: "Sedan",
        leasePrice: "$359/mo",
        dealerLocation: "Miami, FL",
        description: "Compact sedan: 147-201 HP (4-cyl/turbo), CVT or 7-speed DCT, FWD, 15.3 cu ft trunk, 8-inch touchscreen, 10-year/100,000-mile warranty, affordable quality.",
        image: ""
    },
    {
        id: 172,
        manufacturer: "Kia",
        name: "K5",
        category: "Sedan",
        leasePrice: "$429/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize sedan: 180-290 HP (4-cyl turbo), 8-speed auto, FWD/AWD, 16 cu ft trunk, 12.3-inch displays, bold design, sporty handling.",
        image: ""
    },
    {
        id: 173,
        manufacturer: "Kia",
        name: "Stinger",
        category: "Sports Car",
        leasePrice: "$649/mo",
        dealerLocation: "Miami, FL",
        description: "Performance sedan: 300-368 HP (4-cyl/V6 turbo), 8-speed auto, RWD/AWD, 0-60 in 4.6 sec, Brembo brakes, sport-tuned suspension, GT performance.",
        image: ""
    },
    {
        id: 175,
        manufacturer: "Kia",
        name: "Sportage",
        category: "SUV",
        leasePrice: "$439/mo",
        dealerLocation: "Miami, FL",
        description: "Compact SUV: 187-281 HP (4-cyl/hybrid), 8-speed auto, FWD/AWD, 39.6 cu ft cargo, dual 12.3-inch displays, X-Line/X-Pro trims, modern design.",
        image: ""
    },
    {
        id: 176,
        manufacturer: "Kia",
        name: "Sorento",
        category: "SUV",
        leasePrice: "$519/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize 3-row SUV: 191-281 HP (4-cyl turbo/hybrid), 8-speed auto, FWD/AWD, seats 7, 75.5 cu ft cargo, 12.3-inch displays, 10-year warranty.",
        image: ""
    },
    {
        id: 177,
        manufacturer: "Kia",
        name: "Telluride",
        category: "SUV",
        leasePrice: "$599/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize 3-row SUV: 291 HP V6, 8-speed auto, FWD/AWD, seats 8, 87 cu ft cargo, 12.3-inch displays, Bose audio, award-winning design.",
        image: ""
    },
    {
        id: 178,
        manufacturer: "Kia",
        name: "Carnival",
        category: "Van",
        leasePrice: "$549/mo",
        dealerLocation: "Miami, FL",
        description: "Minivan: 290 HP V6, 8-speed auto, FWD, seats 8, 145.1 cu ft cargo, dual 12.3-inch displays, captain's chairs, premium family hauler.",
        image: ""
    },
    {
        id: 180,
        manufacturer: "Kia",
        name: "EV6",
        category: "Electric",
        leasePrice: "$829/mo",
        dealerLocation: "Miami, FL",
        description: "Electric crossover: 167-576 HP, RWD/AWD, 232-310 miles range, 800V fast charging 10-80% in 18 min, 0-60 in 3.4 sec (GT), futuristic design.",
        image: ""
    },
    {
        id: 181,
        manufacturer: "Kia",
        name: "EV9",
        category: "Electric",
        leasePrice: "$569/mo",
        dealerLocation: "Miami, FL",
        description: "Electric 3-row SUV: 379 HP dual motors, AWD, 230-304 miles range, seats 7, 81.7 cu ft cargo, 800V charging, 12.3-inch displays, spacious electric SUV.",
        image: ""
    },
    {
        id: 182,
        manufacturer: "Kia",
        name: "Soul",
        category: "Hatchback",
        leasePrice: "$329/mo",
        dealerLocation: "Miami, FL",
        description: "Boxy hatchback: 147-201 HP (4-cyl/turbo), CVT or 7-speed DCT, FWD, 24.2 cu ft cargo, unique styling, affordable personality.",
        image: ""
    },

    // VOLKSWAGEN (10 models)
    {
        id: 183,
        manufacturer: "Volkswagen",
        name: "Jetta",
        category: "Sedan",
        leasePrice: "$429/mo",
        dealerLocation: "Miami, FL",
        description: "Compact sedan: 147-228 HP (4-cyl/turbo), 8-speed auto, FWD, 14.1 cu ft trunk, 8-inch touchscreen, IQ.DRIVE safety, GLI sport variant, German engineering.",
        image: ""
    },
    {
        id: 184,
        manufacturer: "Volkswagen",
        name: "Passat",
        category: "Sedan",
        leasePrice: "$409/mo",
        dealerLocation: "Miami, FL",
        description: "Midsize sedan: 174 HP 2.0L turbo, 6-speed auto, FWD, 15.9 cu ft trunk, 6.3-inch touchscreen, spacious comfort, value proposition.",
        image: ""
    },
    {
        id: 185,
        manufacturer: "Volkswagen",
        name: "Tiguan",
        category: "SUV",
        leasePrice: "$449/mo",
        dealerLocation: "Atlanta, GA",
        description: "Compact SUV: 184 HP 2.0L turbo, 8-speed auto, FWD/4MOTION AWD, seats 5-7, 37.6 cu ft cargo, 8-inch touchscreen, European handling.",
        image: ""
    },
    {
        id: 186,
        manufacturer: "Volkswagen",
        name: "Atlas",
        category: "SUV",
        leasePrice: "$627/mo",
        dealerLocation: "Denver, CO",
        description: "Midsize 3-row SUV: 235-276 HP (4-cyl/V6 turbo), 8-speed auto, FWD/4MOTION AWD, seats 7, 96.8 cu ft cargo, 8-inch touchscreen, spacious interior.",
        image: ""
    },
    {
        id: 187,
        manufacturer: "Volkswagen",
        name: "Taos",
        category: "SUV",
        leasePrice: "$499/mo",
        dealerLocation: "Austin, TX",
        description: "Subcompact SUV: 158 HP 1.5L turbo, 8-speed auto, FWD/4MOTION, 27.9 cu ft cargo, 8-inch touchscreen, IQ.DRIVE, affordable German quality.",
        image: ""
    },
    {
        id: 188,
        manufacturer: "Volkswagen",
        name: "Golf GTI",
        category: "Hatchback",
        leasePrice: "$339/mo",
        dealerLocation: "Miami, FL",
        description: "Hot hatch icon: 241 HP 2.0L turbo, 6-speed manual or 7-speed DSG, FWD, 0-60 in 5.9 sec, adaptive dampers, 23.8 cu ft cargo, legendary performance.",
        image: ""
    },
    {
        id: 189,
        manufacturer: "Volkswagen",
        name: "Golf R",
        category: "Hatchback",
        leasePrice: "$649/mo",
        dealerLocation: "Miami, FL",
        description: "Performance hatch: 315 HP 2.0L turbo, 6-speed manual or 7-speed DSG, 4MOTION AWD, 0-60 in 4.7 sec, adaptive dampers, Drift Mode, ultimate Golf.",
        image: ""
    },
    {
        id: 190,
        manufacturer: "Volkswagen",
        name: "Arteon",
        category: "Sedan",
        leasePrice: "$679/mo",
        dealerLocation: "Miami, FL",
        description: "Fastback sedan: 268-300 HP 2.0L turbo, 8-speed auto, FWD/4MOTION, 27.2 cu ft cargo, 10.25-inch display, Digital Cockpit Pro, elegant design.",
        image: ""
    },
    {
        id: 191,
        manufacturer: "Volkswagen",
        name: "ID.4",
        category: "Electric",
        leasePrice: "$519/mo",
        dealerLocation: "Miami, FL",
        description: "Electric SUV: 201-295 HP, RWD/AWD, 209-275 miles range, 30.3 cu ft cargo, 12-inch touchscreen, ID.Light, 3-year charging included.",
        image: ""
    },
    {
        id: 192,
        manufacturer: "Volkswagen",
        name: "Atlas Cross Sport",
        category: "SUV",
        description: "Coupe SUV: 235-276 HP (4-cyl/V6 turbo), 8-speed auto, FWD/4MOTION, seats 5, 40.3 cu ft cargo, 8-inch touchscreen, sporty Atlas variant.",
        image: ""
    },

    // VOLVO (10 models)
    {
        id: 193,
        manufacturer: "Volvo",
        name: "S60",
        category: "Sedan",
        leasePrice: "$1009/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury sport sedan: 247-415 HP (4-cyl turbo/hybrid), 8-speed auto, FWD/AWD, Pilot Assist, 9-inch Sensus, Bowers & Wilkins audio, Scandinavian design, safety leader.",
        image: ""
    },
    {
        id: 194,
        manufacturer: "Volvo",
        name: "S90",
        category: "Sedan",
        leasePrice: "$1009/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury sedan: 247-455 HP (4-cyl turbo/hybrid), 8-speed auto, FWD/AWD, Pilot Assist, 9-inch Sensus, air suspension, Bowers & Wilkins, executive comfort.",
        image: ""
    },
    {
        id: 195,
        manufacturer: "Volvo",
        name: "XC40",
        category: "SUV",
        leasePrice: "$519/mo",
        dealerLocation: "Seattle, WA",
        description: "Compact luxury SUV: 187-415 HP (4-cyl turbo/electric), 8-speed auto, FWD/AWD, Pilot Assist, 9-inch Sensus, 47.2 cu ft cargo, Recharge PHEV/EV variants.",
        image: ""
    },
    {
        id: 196,
        manufacturer: "Volvo",
        name: "XC60",
        category: "SUV",
        leasePrice: "$579/mo",
        dealerLocation: "Portland, OR",
        description: "Midsize luxury SUV: 247-455 HP (4-cyl turbo/hybrid), 8-speed auto, AWD, Pilot Assist, 9-inch Sensus, air suspension, 63.3 cu ft cargo, safety awards.",
        image: ""
    },
    {
        id: 197,
        manufacturer: "Volvo",
        name: "XC90",
        category: "SUV",
        leasePrice: "$838/mo",
        dealerLocation: "San Francisco, CA",
        description: "3-row luxury SUV: 247-455 HP (4-cyl turbo/hybrid), 8-speed auto, AWD, seats 7, Pilot Assist, 9-inch Sensus, air suspension, 85.7 cu ft cargo, flagship SUV.",
        image: ""
    },
    {
        id: 198,
        manufacturer: "Volvo",
        name: "C40 Recharge",
        category: "Electric",
        leasePrice: "$1259/mo",
        dealerLocation: "Miami, FL",
        description: "Electric coupe SUV: 402 HP dual motors, AWD, 226 miles range, one-pedal driving, 9-inch Sensus, Google built-in, OTA updates, stylish EV.",
        image: ""
    },
    {
        id: 199,
        manufacturer: "Volvo",
        name: "XC40 Recharge",
        category: "Electric",
        leasePrice: "$1309/mo",
        dealerLocation: "Miami, FL",
        description: "Electric compact SUV: 402 HP dual motors, AWD, 223 miles range, one-pedal driving, 9-inch Sensus, Google built-in, 47.2 cu ft cargo, practical EV.",
        image: ""
    },
    {
        id: 200,
        manufacturer: "Volvo",
        name: "V60",
        category: "Wagon",
        leasePrice: "$709/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury wagon: 247-415 HP (4-cyl turbo/hybrid), 8-speed auto, FWD/AWD, Pilot Assist, 50.6 cu ft cargo, 9-inch Sensus, elegant practicality.",
        image: ""
    },
    {
        id: 201,
        manufacturer: "Volvo",
        name: "V90",
        category: "Wagon",
        leasePrice: "$809/mo",
        dealerLocation: "Miami, FL",
        description: "Executive wagon: 247-316 HP 4-cyl turbo, 8-speed auto, AWD, Pilot Assist, 53.9 cu ft cargo, 9-inch Sensus, Bowers & Wilkins, sophisticated hauler.",
        image: ""
    },
    {
        id: 202,
        manufacturer: "Volvo",
        name: "V90 Cross Country",
        category: "Wagon",
        leasePrice: "$839/mo",
        dealerLocation: "Miami, FL",
        description: "Adventure wagon: 316 HP 4-cyl turbo, 8-speed auto, AWD, 8.3-inch ground clearance, 53.9 cu ft cargo, Pilot Assist, rugged luxury, all-weather capability.",
        image: ""
    },

    // COUPES - Premium Sport Coupes
    {
        id: 203,
        manufacturer: "Mercedes-Benz",
        name: "CLA",
        category: "Coupe",
        leasePrice: "$532/mo",
        dealerLocation: "Miami, FL",
        description: "2026 Mercedes-Benz CLA: 221 HP turbocharged 2.0L, 7-speed DCT, MBUX infotainment, 64-color ambient lighting, 10.25-inch display, smartphone integration, premium audio, and iconic coupe styling.",
        image: ""
    },
    {
        id: 240,
        manufacturer: "Mercedes-Benz",
        name: "CLE Coupe",
        category: "Coupe",
        leasePrice: "$728/mo",
        dealerLocation: "San Francisco, CA",
        description: "2026 Mercedes-Benz CLE Coupe: Elegant midsize coupe, 255-375 HP (turbo 4-cyl/6-cyl), 9-speed auto, RWD/4MATIC AWD, MBUX system, 12.3-inch dual displays, premium materials, sporty styling, refined performance.",
        image: ""
    },
    {
        id: 204,
        manufacturer: "Mercedes-Benz",
        name: "C 300 Coupe",
        category: "Coupe",
        leasePrice: "$769/mo",
        dealerLocation: "Miami, FL",
        description: "Elegant sport coupe: 255 HP turbocharged 2.0L, 9-speed automatic, RWD/AWD, MBUX system, 12.3-inch digital display, Burmester® audio, LED lighting, premium materials, and athletic performance.",
        image: ""
    },
    {
        id: 205,
        manufacturer: "Mercedes-Benz",
        name: "E 450 Coupe",
        category: "Coupe",
        leasePrice: "$1269/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury performance coupe: 362 HP twin-turbo 3.0L inline-6 with EQ Boost, 9-speed automatic, 4MATIC® AWD, air suspension, MBUX, premium Nappa leather, panoramic roof, sophisticated styling.",
        image: ""
    },
    {
        id: 206,
        manufacturer: "BMW",
        name: "230i Coupe",
        category: "Coupe",
        description: "Compact sport coupe: 255 HP turbocharged 2.0L, 8-speed automatic, RWD/xDrive AWD, iDrive 7.0, sport suspension, premium interior, agile handling, iconic BMW performance.",
        image: ""
    },
    {
        id: 207,
        manufacturer: "BMW",
        name: "M240i Coupe",
        category: "Coupe",
        description: "Performance coupe: 382 HP turbocharged inline-6, 8-speed automatic, xDrive AWD, M Sport brakes, adaptive suspension, 0-60 in 4.1 sec, track-ready performance in a compact package.",
        image: ""
    },
    {
        id: 208,
        manufacturer: "BMW",
        name: "430i Coupe",
        category: "Coupe",
        leasePrice: "$799/mo",
        dealerLocation: "Miami, FL",
        description: "Elegant 4 Series: 255 HP turbocharged 2.0L, 8-speed automatic, RWD/xDrive, iDrive 7.0, sport seats, LED lighting, refined interior, perfect balance of luxury and sport.",
        image: ""
    },
    {
        id: 209,
        manufacturer: "BMW",
        name: "M440i Coupe",
        category: "Coupe",
        leasePrice: "$1209/mo",
        dealerLocation: "Miami, FL",
        description: "Sport coupe: 382 HP turbocharged inline-6 with mild hybrid, 8-speed automatic, xDrive AWD, M Sport differential, adaptive M suspension, 0-60 in 4.3 sec, aggressive styling.",
        image: ""
    },
    {
        id: 210,
        manufacturer: "Audi",
        name: "A5 Coupe",
        category: "Coupe",
        leasePrice: "$699/mo",
        dealerLocation: "Miami, FL",
        description: "Premium sport coupe: 261 HP turbocharged 2.0L, 7-speed S tronic, Quattro AWD, Virtual Cockpit Plus, MMI touch, premium interior, sleek design, advanced technology.",
        image: ""
    },
    {
        id: 211,
        manufacturer: "Audi",
        name: "S5 Coupe",
        category: "Coupe",
        leasePrice: "$899/mo",
        dealerLocation: "Miami, FL",
        description: "Performance coupe: 349 HP turbocharged V6, 8-speed Tiptronic, Quattro AWD, sport differential, adaptive air suspension, 0-60 in 4.4 sec, bold styling, track capability.",
        image: ""
    },
    {
        id: 212,
        manufacturer: "Lexus",
        name: "RC 300",
        category: "Coupe",
        leasePrice: "$769/mo",
        dealerLocation: "Miami, FL",
        description: "Luxury sport coupe: 260 HP 2.0L turbo, 8-speed automatic, RWD/AWD, Lexus Safety System+ 2.5, 10.3-inch display, Mark Levinson® audio, striking design, refined performance.",
        image: ""
    },
    {
        id: 213,
        manufacturer: "Infiniti",
        name: "Q60",
        category: "Coupe",
        leasePrice: "$719/mo",
        dealerLocation: "Miami, FL",
        description: "Sport coupe: 300-400 HP twin-turbo V6, 7-speed automatic, RWD/AWD, Direct Adaptive Steering, Bose® audio, premium materials, aggressive styling, engaging dynamics.",
        image: ""
    },
    {
        id: 214,
        manufacturer: "Cadillac",
        name: "CT4-V",
        category: "Coupe",
        leasePrice: "$869/mo",
        dealerLocation: "Miami, FL",
        description: "Performance sport sedan/coupe styling: 325 HP turbocharged 2.7L, 10-speed automatic, RWD, Magnetic Ride Control, Brembo® brakes, sport seats, American muscle meets luxury.",
        image: ""
    },

    // CONVERTIBLES - Open-Air Luxury
    {
        id: 215,
        manufacturer: "BMW",
        name: "430i Convertible",
        category: "Convertible",
        leasePrice: "$929/mo",
        dealerLocation: "Miami, FL",
        description: "Open-air luxury: 255 HP turbocharged 2.0L, 8-speed automatic, RWD/xDrive, power soft-top opens in 18 seconds, iDrive 7.0, wind deflector, heated seats, year-round convertible.",
        image: ""
    },
    {
        id: 216,
        manufacturer: "BMW",
        name: "M440i Convertible",
        category: "Convertible",
        leasePrice: "$1449/mo",
        dealerLocation: "Miami, FL",
        description: "Performance drop-top: 382 HP turbocharged inline-6, 8-speed automatic, xDrive AWD, power soft-top, M Sport differential, adaptive suspension, 0-60 in 4.4 sec, exhilarating open-air driving.",
        image: ""
    },
    {
        id: 217,
        manufacturer: "BMW",
        name: "Z4 M40i",
        category: "Convertible",
        leasePrice: "$1579/mo",
        dealerLocation: "Miami, FL",
        description: "Pure roadster: 382 HP turbocharged inline-6, 8-speed automatic, RWD, power soft-top, adaptive M suspension, sport exhaust, 0-60 in 3.9 sec, driver-focused two-seater, timeless design.",
        image: ""
    },
    {
        id: 218,
        manufacturer: "Mercedes-Benz",
        name: "C 300 Cabriolet",
        category: "Convertible",
        leasePrice: "$1079/mo",
        dealerLocation: "Miami, FL",
        description: "Elegant convertible: 255 HP turbocharged 2.0L, 9-speed automatic, RWD/4MATIC, power soft-top with AIRCAP®, AIRSCARF® neck-level heating, MBUX, premium audio, refined open-air luxury.",
        image: ""
    },
    {
        id: 219,
        manufacturer: "Mercedes-Benz",
        name: "E 450 Cabriolet",
        category: "Convertible",
        leasePrice: "$1079/mo",
        dealerLocation: "Miami, FL",
        description: "Grand touring convertible: 362 HP twin-turbo inline-6 with EQ Boost, 9-speed automatic, 4MATIC, power soft-top, air suspension, AIRCAP, AIRSCARF, Burmester® audio, ultimate luxury drop-top.",
        image: ""
    },
    {
        id: 220,
        manufacturer: "Mercedes-Benz",
        name: "SL 450",
        category: "Convertible",
        leasePrice: "$1149/mo",
        dealerLocation: "Miami, FL",
        description: "Iconic roadster: 362 HP twin-turbo inline-6, 9-speed automatic, RWD/4MATIC+, retractable hardtop, adaptive suspension, sport exhaust, 12.3-inch displays, legendary grand tourer.",
        image: ""
    },
    {
        id: 221,
        manufacturer: "Audi",
        name: "A5 Cabriolet",
        category: "Convertible",
        leasePrice: "$979/mo",
        dealerLocation: "Miami, FL",
        description: "Premium convertible: 261 HP turbocharged 2.0L, 7-speed S tronic, Quattro AWD, acoustic soft-top opens in 15 seconds, Virtual Cockpit, MMI touch, all-season convertible.",
        image: ""
    },
    {
        id: 222,
        manufacturer: "Audi",
        name: "S5 Cabriolet",
        category: "Convertible",
        leasePrice: "$1019/mo",
        dealerLocation: "Miami, FL",
        description: "Performance drop-top: 349 HP turbocharged V6, 8-speed Tiptronic, Quattro AWD, sport differential, acoustic soft-top, adaptive air suspension, 0-60 in 4.8 sec, thrilling open-air performance.",
        image: ""
    },
    {
        id: 223,
        manufacturer: "Lexus",
        name: "LC 500 Convertible",
        category: "Convertible",
        leasePrice: "$1199/mo",
        dealerLocation: "Beverly Hills, CA",
        description: "Luxury grand tourer: 471 HP 5.0L V8, 10-speed automatic, RWD, power soft-top, Mark Levinson® audio, premium interior, striking design, 0-60 in 4.6 sec, exotic performance.",
        image: ""
    },
    {
        id: 224,
        manufacturer: "Porsche",
        name: "911 Carrera Cabriolet",
        category: "Convertible",
        leasePrice: "$1489/mo",
        dealerLocation: "Miami, FL",
        description: "Legendary convertible: 379 HP twin-turbo flat-6, 8-speed PDK, RWD/AWD, power soft-top, sport exhaust, 0-60 in 3.8 sec, precision handling, timeless icon.",
        image: ""
    },
    {
        id: 225,
        manufacturer: "Chevrolet",
        name: "Corvette Stingray Convertible",
        category: "Convertible",
        leasePrice: "$919/mo",
        dealerLocation: "Miami, FL",
        description: "American supercar: 495 HP 6.2L V8, 8-speed DCT, mid-engine RWD, retractable hardtop, 0-60 in 2.9 sec, magnetic ride, HUD, exotic performance at accessible price.",
        image: ""
    },
    {
        id: 226,
        manufacturer: "Mazda",
        name: "MX-5 Miata",
        category: "Convertible",
        leasePrice: "$459/mo",
        dealerLocation: "Miami, FL",
        description: "Pure driving joy: 181 HP 2.0L, 6-speed manual/automatic, RWD, lightweight roadster (2,341 lbs), power soft-top, 50/50 weight distribution, Bose® audio, affordable fun.",
        image: ""
    },
    {
        id: 227,
        manufacturer: "Mini",
        name: "Cooper Convertible",
        category: "Convertible",
        leasePrice: "$489/mo",
        dealerLocation: "Miami, FL",
        description: "Fun-sized drop-top: 134-189 HP turbo 3-cyl, 7-speed DCT, FWD, power soft-top opens while driving, customizable LED lights, premium interior, iconic go-kart handling.",
        image: ""
    },

    // JEEP
    {
        id: 244,
        manufacturer: "Jeep",
        name: "Wagoneer",
        category: "SUV",
        leasePrice: "$999/mo",
        dealerLocation: "Brooklyn, NY",
        description: "Premium full-size SUV: 392 HP 5.7L V8, 8-speed auto, 4WD, seats 8, 116.7 cu ft cargo, 10,000 lb towing, McIntosh audio, advanced tech, luxury off-road capability.",
        image: ""
    },

    // GMC
    {
        id: 245,
        manufacturer: "GMC",
        name: "Yukon",
        category: "SUV",
        leasePrice: "$1199/mo",
        dealerLocation: "Brooklyn, NY",
        description: "Full-size luxury SUV: 355-420 HP (5.3L V8/6.2L V8), 10-speed auto, 4WD available, seats 8-9, 122.9 cu ft cargo, 8,400 lb towing, premium interior, family hauler.",
        image: ""
    }
];
