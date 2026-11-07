export const SERVICE_CATEGORIES = [
  {
    id: 'all',
    label: 'All Services',
    description: 'Complete range of hydroponic rescue, water calibration, and small-space apartment builds.',
  },
  {
    id: 'rescue',
    label: 'System Rescue & Water Care',
    description: 'Fix yellowing leaves, brown slimy roots, warm summer reservoirs, algae, and hard tap-water TDS.',
  },
  {
    id: 'builds',
    label: 'Small-Space Custom Builds',
    description: 'Budget-friendly indoor farms for kitchen counters, 2x2 ft corners, single shelves, and window grills.',
  },
];

export const WARNING_SIGNS = [
  {
    id: 'focus-1',
    focusLabel: 'Focus 1',
    title: 'Warm Water & Root Rot Notice',
    description:
      'Sitting water in an Indian summer hits 32–34°C inside a passive jar. Dissolved oxygen drops sharply, roots turn brown and slimy, and outer leaves yellow unless active aeration is added.',
    solutionText: 'Active ₹120 Air-Pump DWC Upgrade',
    linkedServiceId: 'kratky-rescue',
  },
  {
    id: 'focus-2',
    focusLabel: 'Focus 2',
    title: 'Water Gap & Hard-Water Discoloration',
    description:
      'If the air gap below your net pot is off by half a centimetre, roots either drown or dry out. Combined with high-TDS Indian borewell or tap water, plants develop tip burn and pale leaves.',
    solutionText: 'RO & Tap Water TDS Calibration',
    linkedServiceId: 'water-tds-calibration',
  },
  {
    id: 'focus-3',
    focusLabel: 'Focus 3',
    title: 'Algae Growth in Clear Containers',
    description:
      'Clear glass jars on a sunny window sill breed green algae within ten days. Algae steals nitrogen, swings reservoir pH, and creates musty odors until the container is properly lightproofed.',
    solutionText: 'Opaque Blackout & Root Flush',
    linkedServiceId: 'root-rot-algae',
  },
  {
    id: 'focus-4',
    focusLabel: 'Focus 4',
    title: 'Tight Space Light & Airflow Checks',
    description:
      '1BHK corners, kitchen counters, and shaded balconies produce leggy stems when LED height and airflow are mismatched. Staggered shelf layouts fit 25 healthy plants on a single shelf.',
    solutionText: 'Space-Optimized Shelf & Corner Plans',
    linkedServiceId: 'single-shelf-25',
  },
];

export const SERVICES_DATA = [
  {
    id: 'kratky-rescue',
    category: 'rescue',
    badge: 'System Rescue',
    title: 'Kratky-to-Active DWC Rescue Upgrade',
    subtitle: 'Passive Jar to Active Aeration Conversion',
    priceTag: 'Under ₹600 Parts',
    imageAlt:
      'White oxygenated plant roots thriving inside an active Deep Water Culture tray with an aquarium air stone',
    summary:
      'Rescue yellowing, oxygen-starved Kratky jars in warm Indian rooms by converting them into forgiving, active Deep Water Culture (DWC) trays with continuous aeration.',
    options: [
      'Net-pot air gap and root submersion depth check',
      '₹120 aquarium air pump and silicone airline retrofit',
      'Micro-pore air stone setup for dissolved oxygen boost',
      '32–34°C summer reservoir heat insulation wrap',
      'Multi-jar to 6-pot active DWC tub consolidation',
      'Wilted lettuce and herb stem recovery protocol',
      'Non-circulating nutrient stratification fix',
      'Emergency salt flush and fresh nutrient reset',
      'Opaque container blackout conversion',
      'Quiet bedroom and kitchen anti-vibration pump mount',
      'Backflow check-valve setup to prevent water siphoning',
      '14-day post-conversion root recovery checklist',
    ],
  },
  {
    id: 'root-rot-algae',
    category: 'rescue',
    badge: 'Root & Reservoir Care',
    title: 'Root Rot, Yellow Leaf & Algae Treatment',
    subtitle: 'Reservoir Sanitization & Root Recovery',
    priceTag: '1-on-1 Rescue Audit',
    imageAlt:
      'Grower inspecting clean white hydroponic roots after removing brown slimy root rot and lightproofing the container',
    summary:
      'Eliminate slimy brown root rot and green algae blooms in clear jars or channels, restoring crisp white feeder roots and stable pH without harsh chemicals.',
    options: [
      'Brown slimy root pruning and clean-water rinse',
      'Food-safe 3% hydrogen peroxide root bath dilution guide',
      'Clear glass jar algae scrub and blackout wrap',
      'Reservoir biofilm and salt crust sanitization',
      'Iron and magnesium deficiency (yellow leaf veins) fix',
      'pH drop and stale reservoir odor neutralization',
      'Clay pebble (LECA) and coco-peat collar boiling sterilization',
      'Fungus gnat and stem-collar mold prevention',
      'Root-zone dissolved oxygen tuning',
      'Dead root debris filtration and reservoir flush',
      'Leaf tip-burn and nutrient lockout recovery',
      'Post-treatment water clarity and root regrowth check',
    ],
  },
  {
    id: 'water-tds-calibration',
    category: 'rescue',
    badge: 'Water & Nutrient Calibration',
    title: 'Indian Tap Water TDS, pH & Nutrient Reset',
    subtitle: 'Custom Dosing for RO, Municipal & Borewell Water',
    priceTag: 'Custom Water Formula',
    imageAlt:
      'Digital TDS and pH meter testing nutrient water inside an indoor hydroponic reservoir surrounded by fresh green basil',
    summary:
      'Indian municipal and borewell water ranges from 150 to 800+ ppm TDS. We create a custom RO-blend and A+B nutrient dosing chart matched to your home water supply.',
    options: [
      'Baseline tap, borewell, and kitchen RO water TDS audit',
      'RO-to-tap blending ratio for natural calcium and pH stability',
      'Part A (Calcium Nitrate) and Part B mixing order protocol',
      'Nutrient precipitation and cloudy water prevention',
      'Target pH (5.8–6.2) buffering for leafy greens and herbs',
      'Seedling stage (300–450 ppm) gentle starter formula',
      'Leafy greens and Indian herbs (600–850 ppm) growth recipe',
      'Fruiting cherry tomato and chilli (1100–1400 ppm) formula',
      'Peak summer high-transpiration lower-EC adjustment',
      'Digital TDS and pH meter calibration and storage guide',
      'Hard-water scale removal for pumps and air stones',
      'Printable dosing card for your exact reservoir volume',
    ],
  },
  {
    id: 'kitchen-counter-herbs',
    category: 'builds',
    badge: 'Kitchen Counter Build',
    title: 'Kitchen Counter Herb & Microgreen Setup',
    subtitle: '90-Day Continuous Countertop Herb Garden',
    priceTag: 'Under ₹1,200 Build',
    imageAlt:
      'Compact opaque hydroponic herb tub on an Indian kitchen countertop growing fresh mint, coriander, and sweet basil under a warm LED bar',
    summary:
      'Grow fresh pudina (mint), dhaniya (coriander), and basil right on your kitchen slab beside your chai dabba using a clean, soil-free setup under ₹1,200.',
    options: [
      'Under-cabinet kitchen slab footprint and height sizing',
      'Under-₹1,200 food-grade opaque tub selection',
      'Coriander (dhaniya) split-seed hydro germination guide',
      'Pudina (mint) stem cuttings rapid water-rooting setup',
      'Sweet basil pinching technique for bushy regrowth',
      'Warm-white kitchen-friendly under-cabinet LED mounting',
      'Tadka oil-fume and stove heat safe placement guide',
      'Clean matte countertop finish and wire hiding',
      '10-minute Sunday water and nutrient top-up routine',
      'Cut-and-come-again perpetual harvest schedule',
      'Zero-soil, zero-gnat kitchen growing media setup',
      '90-day herb harvest and electricity cost breakdown',
    ],
  },
  {
    id: 'corner-mini-farm',
    category: 'builds',
    badge: 'Room Corner Build',
    title: '2×2 ft Bedroom & Room Corner Mini-Farm',
    subtitle: 'Whisper-Quiet 4-Sq-Ft Apartment Setup',
    priceTag: 'Under ₹2,000 Build',
    imageAlt:
      'Two-tier 2x2 ft indoor hydroponic rack in a clean apartment bedroom corner with warm white grow lights and a floor spill tray',
    summary:
      'Turn an unused 2×2 ft bedroom or living room corner into a sleep-friendly, leak-proof indoor hydroponic garden with zero floor mess.',
    options: [
      '2×2 ft corner floor footprint and wall clearance layout',
      'Silicone-loop hanging air pump mount for silent bedrooms',
      '4000K natural-white high-CRI LED selection (no harsh purple glare)',
      'Automated timer schedule (7 AM – 9 PM) for pitch-dark sleep',
      'Secondary boot-tray floor containment for zero tile spills',
      '2-tier corner utility rack sizing and assembly',
      'Indoor room airflow and humidity balance check',
      '12-to-16 plant mixed salad and Indian herb crop plan',
      'Foolproof Part A and Part B stock solution mixing guide',
      'Renter-safe setup with zero wall drilling',
      'Drip-loop electrical cord safety and child/pet cover',
      'Complete under-₹2,000 local Indian hardware parts list',
    ],
  },
  {
    id: 'single-shelf-25',
    category: 'builds',
    badge: 'High-Density Shelf',
    title: 'High-Density Single-Shelf System (25 Plants)',
    subtitle: 'Staggered 25-Plant Apartment Shelf Layout',
    priceTag: '25-Plant Blueprint',
    imageAlt:
      'Single apartment shelf holding 25 healthy green lettuce and herb plants arranged in staggered diamond hydroponic channels',
    summary:
      'Fit 25 thriving leafy greens and herbs onto a single shelf without crowding or shading by using staggered diamond net-pot spacing.',
    options: [
      'Single-shelf weight capacity and waterproof liner check',
      '25-hole staggered diamond net-pot drilling template',
      '2-inch net pot crop pairing for compact root zones',
      'Tall-back / short-front plant canopy light zoning',
      'Dual-airstone uniform dissolved oxygen distribution',
      'Compact lettuce, palak, and bok choy variety selection',
      'Dual T8 LED strip wiring and simple reflector hood',
      'Root-trimming schedule to prevent channel clogging',
      '7-day high-uptake water refill and TDS check routine',
      'Quiet USB canopy fan placement to prevent leaf edema',
      '15-day staggered succession planting calendar',
      'Full shelf structural balance and safety checklist',
    ],
  },
  {
    id: 'window-vertical-tower',
    category: 'builds',
    badge: 'Window & Vertical Build',
    title: 'Window Sill & Tiny Room Vertical Tower',
    subtitle: 'Zero-Soil Window Grill & Vertical UPVC Systems',
    priceTag: 'Custom DIY Tower',
    imageAlt:
      'Vertical white food-grade UPVC hydroponic tower standing next to an apartment window growing 18 leafy green plants',
    summary:
      'Turn a dusty boxed window grill or a 1.5×1.5 ft room corner into a vertical zero-soil farm using food-grade UPVC channels and natural sunlight.',
    options: [
      'East, west, and south window direct sunlight hours audit',
      '4-inch food-grade UPVC vertical tower fabrication guide',
      '45-degree heat-formed net-pot slot spacing template',
      'Submersible cooler pump head-height sizing',
      'Internal sponge baffle setup for silent water return',
      'Renter-safe heavy-duty zip-tie window grill mounting',
      'Reflective white container wrap to block window heat',
      'Supplemental side-bar LED lighting for shaded rooms',
      '18-to-24 plant vertical light zoning (top vs bottom slots)',
      'Cyclic timer programming (15 min on / 45 min off)',
      'Wind-safe snug net-pot collars for breezy windows',
      'Monsoon cloudy-week nutrient strength adjustment',
    ],
  },
  {
    id: 'diy-budget-coaching',
    category: 'builds',
    badge: '1-on-1 Build Coaching',
    title: 'Under-₹2,000 Custom Part Sourcing & Coaching',
    subtitle: 'Complete Beginner Parts List & Live Setup Help',
    priceTag: 'Pan-India Video Support',
    imageAlt:
      'Flat-lay of affordable Indian DIY hydroponic components including net pots, clay pebbles, digital TDS meter, air pump, and nutrient packets',
    summary:
      'Skip overpriced ₹18,000 commercial kits. Get a verified local Indian shopping list under ₹2,000 and step-by-step guidance from seed to harvest.',
    options: [
      '1-on-1 space measurement and crop goal planning call',
      'Verified Indian hardware and online vendor part links',
      'Hole-saw and heated-cutter lid drilling walkthrough',
      'Seed starting in coco-peat and rockwool cubes',
      'Day-10 seedling nursery-to-net-pot transfer guide',
      'Live video check of your assembled tub, pump, and lights',
      'Side-by-side comparison of Kratky, Active DWC, and NFT',
      'Monthly electricity cost calculation (under ₹60–₹80/month)',
      'Vacation gravity float-valve auto-top-up add-on plan',
      'First-30-days beginner troubleshooting cheat sheet',
      'WhatsApp photo check-ins for leaf and root health',
      'Outer-leaf harvest technique to double plant lifespan',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Space & Plant Audit',
    description:
      'Share your corner or counter measurements—or photos of your yellowing plants and roots—along with your city and water source.',
  },
  {
    step: 2,
    title: 'Leak & Algae Containment',
    description:
      'We lightproof clear containers to stop algae growth and place secondary trays so apartment floors stay completely dry.',
  },
  {
    step: 3,
    title: 'Local Food-Grade Sourcing',
    description:
      'You get an exact, rupee-by-rupee bill of materials (under ₹1,200–₹2,000) using reliable parts available across India.',
  },
  {
    step: 4,
    title: 'Active Aeration & Setup',
    description:
      'Convert stagnant jars to active DWC oxygenation or assemble your compact shelf, counter, or corner system cleanly.',
  },
  {
    step: 5,
    title: 'Tap Water TDS Calibration',
    description:
      'We dial in your Part A + B nutrient ratio and pH specifically for your home RO, municipal tap, or borewell water.',
  },
  {
    step: 6,
    title: '14-Day Recovery & Growth Check',
    description:
      'We verify new white feeder roots, healthy leaf color, and proper LED height during your first two weeks of growth.',
  },
  {
    step: 7,
    title: 'Harvest & Seasonal Prevention',
    description:
      'Follow a simple Sunday top-up routine with summer and monsoon adjustments for 90+ days of continuous harvests.',
  },
];