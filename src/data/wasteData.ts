import { WasteCategory, RecyclingTipItem } from '../types';

export const WASTE_CATEGORIES: WasteCategory[] = [
  {
    id: 'plastic',
    name: 'Plastic Waste',
    emoji: '🧴',
    tag: 'Non-biodegradable',
    decompositionTime: 'Up to 450+ Years',
    shortDescription: 'Single-use bottles, packaging polythene bags, containers, and synthetic polymers.',
    whatIsIt: 'Plastic waste consists of synthetic or semi-synthetic polymers that do not decompose naturally. It is lightweight, durable, and one of the largest sources of pollution in landfills and oceans.',
    commonExamples: [
      'PET drinking water and soda bottles',
      'Single-use carry bags and grocery wrappers',
      'Disposable plastic spoons, straws, and cups',
      'Takeaway plastic food containers and shampoo bottles'
    ],
    howToReduce: [
      'Carry your own reusable cloth bag or jute tote when shopping.',
      'Use a stainless steel or copper refillable water bottle instead of buying single-use bottles.',
      'Say no to plastic straws and disposable cutlery when eating outside.',
      'Purchase groceries in bulk or with minimal plastic wrapping.'
    ],
    howToReuse: [
      'Use plastic jars and tubs to store desk stationery, nails, or craft supplies.',
      'Cut plastic bottles to make DIY hanging plant pots or seedling planters.',
      'Repurpose sturdy takeout containers for organizing drawer items.'
    ],
    howToRecycle: [
      'Rinse plastic bottles and containers thoroughly to remove food grease.',
      'Check the recycling triangle code (PETE 1, HDPE 2, PP 5 are most widely recyclable).',
      'Flatten bottles and drop them in the dry-waste / plastic recycling bin.'
    ],
    environmentalTip: 'One recycled plastic bottle saves enough energy to power a 60-watt light bulb for up to 6 hours.'
  },
  {
    id: 'paper',
    name: 'Paper Waste',
    emoji: '📄',
    tag: 'Biodegradable & Recyclable',
    decompositionTime: '2 to 6 Weeks',
    shortDescription: 'Old newspapers, magazines, cardboard boxes, office documents, and notebook pages.',
    whatIsIt: 'Paper waste is organic fiber material derived from wood pulp. While it is biodegradable, improper disposal wastes massive amounts of tree resources, water, and energy.',
    commonExamples: [
      'Old newspapers, books, and study magazines',
      'Cardboard shipping boxes and cereal cartons',
      'Used college notebook pages and printer copy sheets',
      'Paper shopping bags and paper envelopes'
    ],
    howToReduce: [
      'Opt for digital college notes, e-books, and online assignments whenever possible.',
      'Print double-sided documents if paper printing is required.',
      'Decline printed ATM slips and paper receipts in favor of SMS or email alerts.',
      'Reuse one-side printed paper for rough calculations and practice drafts.'
    ],
    howToReuse: [
      'Use old newspapers for packaging delicate glassware or cleaning window mirrors.',
      'Fold cardboard boxes into bookshelf organizers or storage bins.',
      'Shred scrap paper to use as eco-friendly protective packing material.'
    ],
    howToRecycle: [
      'Keep paper dry and clean; wet or oil-stained paper cannot be processed.',
      'Remove plastic tape, metallic binders, and paper clips before recycling.',
      'Hand over accumulated paper to your local scrap dealer (kabadiwala) or recycling facility.'
    ],
    environmentalTip: 'Recycling 1 ton of paper saves 17 mature trees, 7,000 gallons of water, and 4,000 kilowatts of electricity.'
  },
  {
    id: 'glass',
    name: 'Glass Waste',
    emoji: '🍾',
    tag: '100% Infinitely Recyclable',
    decompositionTime: '1,000,000+ Years',
    shortDescription: 'Glass bottles, condiment jars, laboratory test tubes, and broken beverage containers.',
    whatIsIt: 'Glass is made by melting silica sand at extremely high temperatures. It is completely inert, meaning it never leaches harmful chemicals, and can be melted down and recycled indefinitely without losing purity.',
    commonExamples: [
      'Sauce, jam, and pickle glass jars',
      'Soft drink and beverage glass bottles',
      'Broken window panes and mirror pieces (treated glass)',
      'Cosmetic serum and perfume glass vials'
    ],
    howToReduce: [
      'Choose returnable glass bottles where local beverage vendors offer deposits.',
      'Handle glassware with care to prevent accidental drops and breakage.',
      'Buy glass container products in larger sizes to minimize total packaging containers.'
    ],
    howToReuse: [
      'Clean empty jam and honey jars to store kitchen spices, pulses, and dry fruits.',
      'Transform glass bottles into fairy-light bedside lamps or painted floral vases.',
      'Use wide-mouth jars for overnight oats, meal prep salads, or candle holders.'
    ],
    howToRecycle: [
      'Empty and rinse the glass jar thoroughly with warm water.',
      'Remove metal caps or plastic corks (sort them separately).',
      'Wrap broken glass safely in thick paper and label it clearly to protect sanitation workers.'
    ],
    environmentalTip: 'Glass can be recycled endless times without any loss of quality, strength, or clarity.'
  },
  {
    id: 'metal',
    name: 'Metal Waste',
    emoji: '🥫',
    tag: 'High Economic Value',
    decompositionTime: '50 to 500 Years',
    shortDescription: 'Aluminum drink cans, food tin cans, copper wires, iron scraps, and bottle caps.',
    whatIsIt: 'Metal waste encompasses ferrous (iron, steel) and non-ferrous (aluminum, copper, brass) scraps. Extracting virgin metal from ore requires enormous energy, making metal recycling extremely valuable.',
    commonExamples: [
      'Aluminum soft drink and energy drink cans',
      'Canned soup, milk, and vegetable tin cans',
      'Discarded iron nails, screws, and broken tools',
      'Damaged utensils, pots, bottle caps, and aluminum foil'
    ],
    howToReduce: [
      'Invest in high-quality durable metal tools and kitchenware that last for decades.',
      'Repair broken metal appliances and furniture instead of discarding them.',
      'Avoid disposable single-use aluminum foil wrappers when cloth covers suffice.'
    ],
    howToReuse: [
      'Turn clean tin cans into desk pen stands, paintbrush holders, or kitchen utensil holders.',
      'Punch holes in tin cans to create decorative candle lanterns for festive seasons.',
      'Collect nuts, bolts, and scrap pieces in metal tins for hardware maintenance.'
    ],
    howToRecycle: [
      'Wash out food residue from metal cans and let them dry.',
      'Crush aluminum drink cans to save space in the recycling bin.',
      'Sell sorted metal to local metal scrap centers; metals have high buy-back cash value.'
    ],
    environmentalTip: 'Recycling aluminum cans saves 95% of the energy needed to make new ones from raw bauxite ore.'
  },
  {
    id: 'food',
    name: 'Food Waste',
    emoji: '🍌',
    tag: '100% Organic & Biodegradable',
    decompositionTime: '1 to 6 Months',
    shortDescription: 'Fruit peels, vegetable scraps, leftover food, coffee grounds, and tea leaves.',
    whatIsIt: 'Food waste is organic biological waste generated in kitchens, colleges, and cafeterias. When dumped into anaerobic landfills, it decays and releases methane, a potent greenhouse gas.',
    commonExamples: [
      'Banana peels, apple cores, and citrus rinds',
      'Vegetable cuttings, onion skins, and potato peels',
      'Cooked leftover rice, curries, and bread crusts',
      'Used tea leaves, coffee grounds, and eggshells'
    ],
    howToReduce: [
      'Plan meals ahead and prepare only the portion you can finish eating.',
      'Practice FIFO (First In, First Out) in your home refrigerator so older food gets eaten first.',
      'Take smaller servings on your plate in the college canteen; you can always refill.',
      'Store fresh fruits and vegetables properly to extend their shelf life.'
    ],
    howToReuse: [
      'Use vegetable trimmings (carrot tops, celery ends) to boil homemade vegetable broth.',
      'Spread used coffee grounds and tea residue directly around flowering plants as natural fertilizer.',
      'Dry citrus peels to make natural room fresheners or citrus-infused kitchen cleaning vinegar.'
    ],
    howToRecycle: [
      'Segregate kitchen waste into a separate green wet-waste dustbin.',
      'Start a home or college campus compost bin or earthen vermicomposting pot.',
      'Feed safe, clean edible leftovers to domestic animals or local animal shelters immediately.'
    ],
    environmentalTip: 'Composting food scraps turns waste into rich organic compost (black gold) for soil and eliminates toxic landfill methane.'
  },
  {
    id: 'textile',
    name: 'Textile / Cloth Waste',
    emoji: '👕',
    tag: 'Slow Biodegradable / Synthetic',
    decompositionTime: '20 to 200+ Years (Synthetic)',
    shortDescription: 'Old clothes, worn-out denim, bedsheets, curtain offcuts, and fabric scraps.',
    whatIsIt: 'Textile waste refers to clothing and domestic fabrics made from natural fibers (cotton, wool, silk) or synthetics (polyester, nylon). Fast fashion has caused a surge in discarded apparel worldwide.',
    commonExamples: [
      'Faded or torn t-shirts and jeans',
      'Worn-out bedsheets, towels, and pillowcases',
      'Old school or college uniforms no longer fitting',
      'Tailoring fabric offcuts, synthetic fleece, and curtains'
    ],
    howToReduce: [
      'Avoid fast fashion purchases; invest in timeless, quality garments.',
      'Follow clothing care instructions to prevent shrinking and fabric breakdown.',
      'Host clothes-swap events among college classmates and friends.',
      'Mend small tears or sew loose buttons instead of throwing the garment away.'
    ],
    howToReuse: [
      'Cut old t-shirts into absorbent cleaning rags and floor dusters.',
      'Stitch old jeans into stylish durable tote bags, laptop sleeves, or cushion covers.',
      'Use soft cloth scraps for stuffing homemade pet beds or decorative craft projects.'
    ],
    howToRecycle: [
      'Donate gently-used clean clothes to local NGOs, orphanages, or disaster relief charities.',
      'Drop unwearable textiles at brand drop-off boxes that partner with fabric shredders.',
      'Textile shredders can spin fibers into industrial insulation and automotive carpets.'
    ],
    environmentalTip: 'Producing just one new cotton t-shirt consumes about 2,700 liters of water—enough for one person to drink for 900 days!'
  }
];

export const RECYCLING_TIPS: RecyclingTipItem[] = [
  {
    id: 'tip-1',
    title: 'Separate Wet and Dry Waste',
    iconName: 'SplitSquareVertical',
    category: 'Daily Sorting',
    shortSummary: 'Use a green bin for organic food waste and a blue bin for dry recyclables like paper, plastic, and glass.',
    steps: [
      'Keep two clearly labeled bins at home and college canteen.',
      'Never mix liquids or food curry into clean dry paper or plastics.',
      'Educate family and roommates about 2-bin segregation.'
    ],
    ecoBenefit: 'Prevents recyclable materials from getting soiled and rotting in open landfills.'
  },
  {
    id: 'tip-2',
    title: 'Avoid Unnecessary Plastic',
    iconName: 'Ban',
    category: 'Source Reduction',
    shortSummary: 'Refuse single-use polythene bags, disposable plastic cutlery, and unnecessary plastic cling wraps.',
    steps: [
      'Always carry a foldable cloth bag in your college backpack.',
      'Choose fresh fruits without Styrofoam and plastic stretch film.',
      'Politely request restaurant delivery without disposable plastic cutlery.'
    ],
    ecoBenefit: 'Cuts petroleum resource extraction and prevents microplastic pollution in rivers.'
  },
  {
    id: 'tip-3',
    title: 'Reuse Sturdy Containers',
    iconName: 'RefreshCw',
    category: 'Smart Reuse',
    shortSummary: 'Wash and repurpose food jars, cookie tins, and plastic tubs for daily storage and creative DIYs.',
    steps: [
      'Soak jars in warm soapy water to peel off labels cleanly.',
      'Use glass jars for spices, pulses, and dry snacks on kitchen shelves.',
      'Use plastic ice cream tubs for organizing craft tools and stationery.'
    ],
    ecoBenefit: 'Saves money on new storage containers and delays manufacturing demand.'
  },
  {
    id: 'tip-4',
    title: 'Recycle Paper Responsibly',
    iconName: 'FileText',
    category: 'Paper Care',
    shortSummary: 'Collect old newspapers, cartons, and one-sided sheets in a dry spot for scrap collection.',
    steps: [
      'Keep paper dry and free from oil, food spills, or water stains.',
      'Flatten delivery cardboard boxes to save space in storage bins.',
      'Hand over to your neighborhood scrap merchant (kabadiwala).'
    ],
    ecoBenefit: 'Recycled paper uses 60% less energy and saves millions of trees annually.'
  },
  {
    id: 'tip-5',
    title: 'Donate Usable Clothes',
    iconName: 'HeartHandshake',
    category: 'Community Giving',
    shortSummary: 'Give wearable clothes a second life by donating them to orphanages, shelters, or relief drives.',
    steps: [
      'Wash and fold clothes neatly before donating.',
      'Ensure buttons and zippers are intact.',
      'Connect with local college social clubs or registered charity NGOs.'
    ],
    ecoBenefit: 'Supports families in need while preventing textile burial in dump sites.'
  },
  {
    id: 'tip-6',
    title: 'Compost Suitable Food Waste',
    iconName: 'Sprout',
    category: 'Organic Cycling',
    shortSummary: 'Convert kitchen peels, vegetable cuttings, and tea leaves into nutrient-rich garden manure.',
    steps: [
      'Layer dry leaves or cardboard scraps (browns) with food peels (greens).',
      'Keep the compost pot aerated and lightly moist, not waterlogged.',
      'Harvest rich black compost after 4 to 8 weeks for potted plants.'
    ],
    ecoBenefit: 'Replaces chemical fertilizers and stops dangerous methane emissions.'
  },
  {
    id: 'tip-7',
    title: 'Use Reusable Bags and Bottles',
    iconName: 'ShoppingBag',
    category: 'Everyday Swap',
    shortSummary: 'Replace disposable water bottles and plastic polythene bags with durable steel flasks and tote bags.',
    steps: [
      'Keep a filled reusable stainless steel water flask every day.',
      'Keep a canvas shopping bag ready by the door or inside your vehicle.',
      'Encourage friends and classmates to make the sustainable switch.'
    ],
    ecoBenefit: 'A single reusable bottle can replace up to 167 disposable plastic bottles every year.'
  }
];
