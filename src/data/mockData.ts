import { RentalProperty, Adventure, Product, QuickEscapePackage } from '../types';

export const PROPERTIES: RentalProperty[] = [
  {
    id: 'prop-1',
    slug: 'forest-glass-house',
    title: 'The Forest Glass House',
    tagline: '360° forest immersion with private heated cedar soak tub',
    description: 'Suspended seamlessly above a moss-covered pine forest floor, The Forest Glass House blends architectural clarity with untamed wilderness. Floor-to-ceiling ultra-clear glass panels bring the ancient trees directly to your bedside while in-floor radiant heating and a Scandinavian wood stove maintain sanctuary warmth.',
    category: 'Glass House',
    pricePerNight: 440,
    location: 'Pine Barrens Sanctuary, Highlands',
    coordinates: '39.8421° N, 74.5218° W',
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },
    acreage: 18,
    featuredImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1400',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['Cedar Hot Tub', 'Wood-Burning Stove', 'Starlink High-Speed WiFi', 'Off-Grid Solar Powered', 'Outdoor Rain Shower', 'Pour-Over Coffee Bar', 'EV Charging (Level 2)'],
    highlights: ['Zero light pollution for astronomy', 'Private hiking trail loop (2.4 miles)', 'Pre-stocked artisan fire logs', 'Bird-watcher binoculars provided'],
    featured: true,
    elevation: '1,420 ft',
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
    rating: 4.98,
    reviewsCount: 47,
    rules: ['No loud sound systems after 9 PM', 'Respect wildlife corridor', 'Footwear off inside the glass pavilion']
  },
  {
    id: 'prop-2',
    slug: 'black-ridge-lookout',
    title: 'Black Ridge Lookout Cabin',
    tagline: 'Perched on high granite cliffs with sunset panoramic vistas',
    description: 'Originally constructed as an eagle sanctuary observation post, this reclaimed timber and blackened steel cabin offers unmatched solitude. Gaze across 60 miles of unbroken canopy while brewing morning pour-overs on the cantilevered deck.',
    category: 'Nordic Cabin',
    pricePerNight: 385,
    location: 'Black Ridge Escarpment',
    coordinates: '41.2109° N, 75.8492° W',
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      baths: 1.5,
    },
    acreage: 32,
    featuredImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1400',
    gallery: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['Panoramic Cantilever Deck', 'Cast-Iron Fireplace', 'Full Chef Kitchen', 'Fiber WiFi', 'Finnish Sauna', 'Telescope', 'Washer/Dryer'],
    highlights: ['Southwest orientation for sunset viewing', 'Direct trailhead access to Ridge Traverse', 'Complimentary local sourdough & roast beans'],
    featured: true,
    elevation: '2,680 ft',
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
    rating: 4.95,
    reviewsCount: 62,
    rules: ['Moderate 4WD vehicle recommended in winter', 'Keep doors closed to deter raccoons']
  },
  {
    id: 'prop-3',
    slug: 'whispering-pines-glamping-sanctuary',
    title: 'Whispering Pines Safari Outpost',
    tagline: 'Heavy canvas luxury retreat beside a babbling mountain creek',
    description: 'For those who crave the soothing acoustic rhythm of running water and wind through old-growth hemlocks, this custom 600 sq ft insulated canvas tent features a hand-carved king bed, Turkish wool rugs, and an attached open-air copper soaking bath.',
    category: 'Wild Campsite',
    pricePerNight: 230,
    location: 'Hemlock Creek Valley',
    coordinates: '40.9412° N, 76.1044° W',
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },
    acreage: 12,
    featuredImage: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1400',
    gallery: [
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['Creek-Side Firepit', 'Copper Soaking Tub', 'Heated Down Comforters', 'Solar USB Power Stations', 'Organic Breakfast Basket', 'Camp Kitchenette'],
    highlights: ['Fall asleep to rushing glacial creek', 'Private riverside beach & stone skipping', 'Hammock grove under hemlocks'],
    featured: true,
    elevation: '980 ft',
    checkInTime: '2:00 PM',
    checkOutTime: '11:00 AM',
    rating: 4.92,
    reviewsCount: 38,
    rules: ['Fires strictly within stone fire pit ring', 'Pack out all foreign attractants']
  },
  {
    id: 'prop-4',
    slug: 'high-alpine-geodesic-dome',
    title: 'High Alpine Geodesic Dome',
    tagline: 'Geometrical architectural pod facing high mountain snow peaks',
    description: 'An engineered wonder designed to withstand high winds and heavy snow loads, the Alpine Geodesic Dome features a 24-foot clear stargazing skylight directly overhead. Sip local botanical spirits by the pellet stove while clouds float across alpine ridges.',
    category: 'Geodesic Dome',
    pricePerNight: 320,
    location: 'Sentinel Saddle, Peak District',
    coordinates: '42.1154° N, 73.9182° W',
    capacity: {
      guests: 3,
      bedrooms: 1,
      beds: 2,
      baths: 1,
    },
    acreage: 24,
    featuredImage: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=1400',
    gallery: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['Star-Observation Dome Skylight', 'Pellet Heating Stove', 'Induction Cooktop', 'Espresso Machine', 'High-Speed Starlink', 'Custom Memory Foam King Bed'],
    highlights: ['Highest elevation property in the collection', 'Snowshoe equipment provided on-site', 'Clear night sky rating: Bortle Class 2'],
    featured: false,
    elevation: '3,100 ft',
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
    rating: 4.97,
    reviewsCount: 51,
    rules: ['Stargazing telescope requires gentle handling', 'No outdoor fires during high wind advisories']
  },
  {
    id: 'prop-5',
    slug: 'cedar-riverfront-a-frame',
    title: 'Cedar Riverfront A-Frame',
    tagline: 'Timeless mid-century timber geometry along tranquil trout waters',
    description: 'Hand-milled local cedar beams form the soaring roofline of this iconic A-Frame. Featuring an oversized front glass wall with French doors opening onto a river dock, it is ideal for morning fly-fishing, quiet reading, or unwinding in the cedar barrel sauna.',
    category: 'A-Frame',
    pricePerNight: 360,
    location: 'Clearwater River Bend',
    coordinates: '41.4422° N, 74.8871° W',
    capacity: {
      guests: 5,
      bedrooms: 2,
      beds: 3,
      baths: 2,
    },
    acreage: 7.5,
    featuredImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1400',
    gallery: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['River Dock Access', 'Cedar Barrel Sauna', '2 Kayaks & Gear', 'Sonos Outdoor Sound', 'Full Kitchen', 'Outdoor Grill', 'Pet Friendly'],
    highlights: ['Blue-ribbon trout fishing directly off dock', 'Record player with curated vinyl collection', 'Wraparound river-view cedar deck'],
    featured: false,
    elevation: '1,150 ft',
    checkInTime: '4:00 PM',
    checkOutTime: '11:00 AM',
    rating: 4.96,
    reviewsCount: 79,
    rules: ['Life vests required when using kayaks', 'Dogs must be kept on leash near river rapids']
  },
  {
    id: 'prop-6',
    slug: 'sentinel-peak-homestead',
    title: 'Sentinel Peak Estate & Outpost',
    tagline: '160-acre private mountain territory for executive retreats & gatherings',
    description: 'The pinnacle of the Z7CO real estate portfolio. Sentinel Peak Estate encompasses an entire ridgeline with main timber lodge, guest bunkhouse, private helicopter landing meadow, spring-fed swimming pond, and a full off-grid backup microgrid.',
    category: 'Estate',
    pricePerNight: 980,
    location: 'Sentinel Range Ridge',
    coordinates: '42.3391° N, 74.2210° W',
    capacity: {
      guests: 10,
      bedrooms: 5,
      beds: 7,
      baths: 4.5,
    },
    acreage: 160,
    featuredImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1400',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['160 Private Acres', 'Swimming Pond & Dock', 'Commercial Grade Kitchen', 'Stone Fireplace Great Room', 'Private Trail Network (8 mi)', 'Heated Plunge Pool & Sauna', 'Helipad'],
    highlights: ['Complete mountain privacy with gated entry', 'Private on-call adventure guide included for stays > 3 nights', 'Wine cellar pre-stocked option'],
    featured: true,
    elevation: '2,950 ft',
    checkInTime: '3:00 PM',
    checkOutTime: '12:00 PM',
    rating: 5.0,
    reviewsCount: 19,
    rules: ['Exclusive use contract required', 'Catering staff available upon request']
  }
];

export const ADVENTURES: Adventure[] = [
  {
    id: 'adv-spring-1',
    slug: 'rapid-river-kayaking',
    title: 'Rapid River Kayaking & Wildflower Run',
    tagline: 'High-water mountain thaw paddling through budding gorge valleys',
    season: 'Spring',
    duration: '5 Hours',
    difficulty: 'Moderate',
    price: 135,
    featuredImage: 'https://images.unsplash.com/photo-1544551763-47a0159c9636?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-47a0159c9636?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'During the high-energy spring snowmelt, river levels peak creating an exhilarating Class II–III paddling corridor. Navigate through carved granite canyons lined with mountain laurel and blooming dogwood, pausing at hidden gravel bars for hot wilderness tea and campfire flatbread.',
    itinerary: [
      { time: '08:30 AM', activity: 'Meet at Outpost Base for safety briefing & dry suit fitting' },
      { time: '09:15 AM', activity: 'Launch at Upper Gorge; navigate technical rolling rapids' },
      { time: '11:45 AM', activity: 'Shoreline rest on pebble beach with hot botanical tea & fresh provisions' },
      { time: '01:30 PM', activity: 'Scenic drift through Wildflower Meadow Canyon & take-out shuttle' }
    ],
    gearProvided: ['High-Performance Touring Kayak & Paddle', 'GORE-TEX Dry Suit & Neoprene Boots', 'Type V Rescue PFD & Helmet', 'Dry Bags for electronics'],
    bringAlong: ['Thermal base layers', 'Wool socks', 'Water bottle', 'GoPro or action camera'],
    groupSizeLimit: 8,
    bestMonths: 'April — May',
    guide: {
      name: 'Elias Vance',
      role: 'Head River Guide & ACA Level 4 Instructor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 'adv-spring-2',
    slug: 'vernal-forest-foraging',
    title: 'Vernal Forest Foraging & Moss Walk',
    tagline: 'Discover wild morels, ramps, and medicinal canopy flora',
    season: 'Spring',
    duration: '3.5 Hours',
    difficulty: 'Easy',
    price: 65,
    featuredImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'The springtime forest floor awakens with delicacies prized by culinary purists: ramps (wild leeks), fiddlehead ferns, and secretive black morel mushrooms. Walk slowly through ancient beech groves with our resident ethnobotanist, learning sustainable harvesting techniques and wild identification.',
    itinerary: [
      { time: '10:00 AM', activity: 'Botanical overview and field basket distribution' },
      { time: '10:45 AM', activity: 'Slow-pace sensory trek through riparian forest pockets' },
      { time: '12:30 PM', activity: 'Campfire cooking demo: sautéed wild harvest with sourdough' }
    ],
    gearProvided: ['Woven Gathering Baskets', 'Horori Foraging Knives', 'Species Field Guide Booklets'],
    bringAlong: ['Sturdy hiking shoes', 'Light rain jacket', 'Notebook'],
    groupSizeLimit: 10,
    bestMonths: 'March — May',
    guide: {
      name: 'Maya Linden',
      role: 'Certified Ethnobotanist & Forager',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 'adv-summer-1',
    slug: 'granite-peak-ascent',
    title: 'Granite Peak Sunset Ascent & Ridge Climb',
    tagline: 'Golden hour scrambling with 360-degree high country horizons',
    season: 'Summer',
    duration: '6 Hours',
    difficulty: 'Challenging',
    price: 155,
    featuredImage: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Conquer the premier vertical terrain of the Sentinel massif. This guided climb combines Class 3 scrambling, exposed ridge traverses, and a summit arrival timed precisely for golden sunset over thirty mountain valleys. Descend under starry skies with headlamps.',
    itinerary: [
      { time: '03:00 PM', activity: 'Equipment check and technical approach hike through spruce forest' },
      { time: '05:00 PM', activity: 'Ascend the knife-edge granite spine with via-ferrata sections' },
      { time: '07:15 PM', activity: 'Summit plateau: alpine picnic and 360° sunset over the ranges' },
      { time: '08:30 PM', activity: 'Headlamp-guided nocturnal descent with star observation' }
    ],
    gearProvided: ['Climbing Helmets & Harnesses', 'Via-Ferrata Lanyards', 'High-Lumen Black Diamond Headlamps', 'Summit Gourmet Provision Box'],
    bringAlong: ['Stiff-soled approach/hiking boots', 'Warm packable fleece layer', '2 Liters water'],
    groupSizeLimit: 6,
    elevationGain: '2,200 ft',
    bestMonths: 'June — August',
    guide: {
      name: 'Torren Hayes',
      role: 'AMGA Certified Alpine Guide',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 'adv-summer-2',
    slug: 'alpine-lake-paddle',
    title: 'Alpine Lake Stand-Up Paddle & Campfire Tasting',
    tagline: 'Glass-calm glacial waters and wood-fired lake trout dinner',
    season: 'Summer',
    duration: '4 Hours',
    difficulty: 'Easy',
    price: 95,
    featuredImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Tucked into a high cirque basin accessible only by 4WD shuttle, Emerald Tarn boasts mirror-calm clarity. Glide across deep sapphire water flanked by sheer rock cliffs, then return to a private pine cove for an open-fire culinary experience featuring smoked provisions and chilled local cider.',
    itinerary: [
      { time: '02:00 PM', activity: '4x4 overland shuttle to hidden Emerald Tarn' },
      { time: '02:45 PM', activity: 'Paddle exploration of rock grottos and submerged timber' },
      { time: '04:30 PM', activity: 'Shoreline bonfire setup, cast-iron cooking, and craft tastings' }
    ],
    gearProvided: ['Inflatable Expedition SUP & Carbon Paddle', 'PFD & Dry Sack', 'Camp Chairs & Wool Blankets'],
    bringAlong: ['Swimwear or quick-dry apparel', 'Sun protection & polarized sunglasses'],
    groupSizeLimit: 10,
    bestMonths: 'June — September',
    guide: {
      name: 'Maya Linden',
      role: 'Outdoor Experience Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 'adv-fall-1',
    slug: 'ancient-hardwood-canopy-trek',
    title: 'Ancient Hardwood Canopy Trek & Cider Pressing',
    tagline: 'Spectacular crimson & amber autumn foliage through mountain ridges',
    season: 'Fall',
    duration: '5 Hours',
    difficulty: 'Moderate',
    price: 85,
    featuredImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'When October paints the highlands in fiery shades of scarlet, ochre, and burnished gold, this trek guides you along historical ridge trails overlooking endless autumn seas. Conclude at an 1800s timber barn to hand-press heirloom apples on an antique cast-iron press.',
    itinerary: [
      { time: '09:00 AM', activity: 'Departure from Base Outpost along scenic Escarpment Rim' },
      { time: '11:00 AM', activity: 'Lookout rock stop: warm spiced tea & fresh-baked pastries' },
      { time: '01:00 PM', activity: 'Heritage orchard barn: traditional apple pressing & fresh cider' }
    ],
    gearProvided: ['Trekking Poles', 'Custom Field Backpack', 'Thermos of Spiced Cedar Tea', 'Cider Growler to take home'],
    bringAlong: ['Layered autumn clothing', 'Camera with zoom lens', 'Hiking boots'],
    groupSizeLimit: 12,
    elevationGain: '850 ft',
    bestMonths: 'September — November',
    guide: {
      name: 'Elias Vance',
      role: 'Heritage Trail Master',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 'adv-fall-2',
    slug: 'golden-ridge-mountain-biking',
    title: 'Golden Ridge Mountain Bike Traverse',
    tagline: 'Flowing singletrack through carpeted golden larch forests',
    season: 'Fall',
    duration: '4 Hours',
    difficulty: 'Challenging',
    price: 120,
    featuredImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Sunset_View_from_Skyline_Drive_in_Shenandoah_National_Park.jpg/1280px-Sunset_View_from_Skyline_Drive_in_Shenandoah_National_Park.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Sunset_View_from_Skyline_Drive_in_Shenandoah_National_Park.jpg/1280px-Sunset_View_from_Skyline_Drive_in_Shenandoah_National_Park.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Skyline_Drive_in_the_Fall_%2821852619608%29.jpg/1280px-Skyline_Drive_in_the_Fall_%2821852619608%29.jpg'
    ],
    description: 'Glide over crisp fallen leaves on 14 miles of purpose-built backcountry singletrack. Featuring banked berms, natural granite rock drops, and panoramic overlook perches, this ride showcases the dynamic beauty of autumn at thrilling speeds.',
    itinerary: [
      { time: '01:00 PM', activity: 'Bike sizing, suspension tuning, and skill refresher' },
      { time: '01:45 PM', activity: 'Climb through golden birch grove to High Saddle' },
      { time: '03:15 PM', activity: 'Descent through Pine Gulch rock garden & riverside rhythm section' }
    ],
    gearProvided: ['Full-Suspension Carbon Mountain Bike', 'Full-Face or Trail Helmet & Pads', 'Hydration Pack with electrolytes'],
    bringAlong: ['Cycling gloves', 'Flat-pedal athletic shoes', 'Eye protection'],
    groupSizeLimit: 6,
    bestMonths: 'September — November',
    guide: {
      name: 'Torren Hayes',
      role: 'Pro Mountain Bike Guide',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 'adv-winter-1',
    slug: 'winter-stargazing',
    title: 'Midnight Winter Stargazing & Snowshoeing',
    tagline: 'Crisp crystal skies, deep constellations, and fire-warmed spirits',
    season: 'Winter',
    duration: '4 Hours',
    difficulty: 'Easy',
    price: 85,
    featuredImage: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Winter skies boast the lowest atmospheric humidity of the year, yielding breathtaking clarity into deep nebulae, Jupiter’s moons, and the Orion constellation. Strap on lightweight snowshoes for a gentle moonlit trek into an alpine clearing where professional computerized telescopes and a roaring fire await.',
    itinerary: [
      { time: '07:30 PM', activity: 'Gear fitting: snowshoes, gaiters, and handwarmers' },
      { time: '08:15 PM', activity: 'Snowshoe trek through snow-draped evergreens under moonlight' },
      { time: '09:00 PM', activity: 'Telescope observatory clearing: astronomer lecture, mulled cider & spirits' },
      { time: '11:00 PM', activity: 'Return to Outpost with glowing lanterns' }
    ],
    gearProvided: ['MSR Snowshoes & Trekking Poles', 'Thermal Boot Covers & Hot Hands', 'Computerized Celestron 11" Schmidt-Cassegrain Telescope', 'Insulated Mug with Mulled Cider'],
    bringAlong: ['Heavy winter parka', 'Thermal undergarments', 'Winter insulated boots'],
    groupSizeLimit: 12,
    bestMonths: 'December — February',
    guide: {
      name: 'Dr. Alistair Finch',
      role: 'Resident Astronomer & Wilderness First Responder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 'adv-winter-2',
    slug: 'frozen-falls-sauna',
    title: 'Frozen Falls Ice Trek & Wood-Fired Sauna',
    tagline: 'Hike into towering cathedral ice walls then warm in cedar steam',
    season: 'Winter',
    duration: '5 Hours',
    difficulty: 'Moderate',
    price: 140,
    featuredImage: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Witness 120-foot frozen cascades forming towering pillars of blue glacial ice. After traversing frozen canyon bottoms equipped with microspikes, arrive at our secluded wood-fired barrel sauna tucked at the forest edge for authentic thermotherapy and snow-dip rejuvenation.',
    itinerary: [
      { time: '10:00 AM', activity: 'Microspike training & canyon gorge entry' },
      { time: '11:30 AM', activity: 'Exploration of Frozen Cathedral Falls & blue ice caverns' },
      { time: '01:00 PM', activity: 'Secluded mobile wood-fired sauna sessions with wild birch whisks' }
    ],
    gearProvided: ['Kahtoola Microspikes', 'Trekking Poles', 'Linen Sauna Wraps & Towels', 'Campfire Kettle Tea'],
    bringAlong: ['Swimsuit for sauna', 'Wool base layers', 'Waterproof outer shell'],
    groupSizeLimit: 8,
    bestMonths: 'January — March',
    guide: {
      name: 'Torren Hayes',
      role: 'Winter Alpine Specialist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Iron & Glass Camp Lantern',
    category: 'Gear',
    price: 120,
    description: 'Inspired by early 20th-century railroad lamps. Houses a warm-temperature Edison filament LED with smooth dimming wheel, heavy cast brass hardware, and a rechargeable 8,000mAh battery offering up to 80 hours of gentle light.',
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e84529ec1?auto=format&fit=crop&q=80&w=800',
    inStock: true,
    specs: ['280 Lumens Warm Tint (2200K)', 'USB-C Fast Charging + Powerbank Output', 'Solid Steel & Hand-Blown Ribbed Glass', 'Weatherproof IPX4'],
    weight: '2.1 lbs',
    origin: 'Hand-assembled in Vermont',
    featured: true
  },
  {
    id: 'prod-2',
    name: 'Waxed Canvas Trail Bedroll',
    category: 'Gear',
    price: 260,
    description: 'Constructed from heavy 18oz Scottish Martexin waxed canvas, lined with virgin Pendleton wool. Roll it out beside the firepit, on your cabin porch, or directly under the open stars.',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800',
    inStock: true,
    specs: ['18oz Martexin Original Wax Cotton', '100% Virgin Wool Inner Lining', 'Bridle Leather Straps with Brass Buckles', 'Weather-resistant flap enclosure'],
    weight: '5.8 lbs',
    origin: 'Crafted in Maine',
    featured: true
  },
  {
    id: 'prod-3',
    name: 'Titanium Ultralight Cook Set',
    category: 'Gear',
    price: 95,
    description: 'Precision-molded Grade 1 Japanese titanium. Ultra-compact nestable design featuring 800ml pot with measuring stamped lines, insulated folding handles, and frying pan lid.',
    image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6?auto=format&fit=crop&q=80&w=800',
    inStock: true,
    specs: ['Grade 1 Pure Titanium', 'Nesting 800ml pot + 300ml lid', 'Ultralight: 4.8 oz total', 'Direct fire & stove compatible'],
    weight: '4.8 oz',
    origin: 'Niigata, Japan',
    featured: false
  },
  {
    id: 'prod-4',
    name: 'High-Altitude Merino Base Layer',
    category: 'Apparel',
    price: 85,
    description: 'Sustainably sourced 210gsm New Zealand superfine merino wool. Natural temperature regulation, silky itch-free comfort against skin, and natural odor resistance for multi-day retreats.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
    inStock: true,
    specs: ['100% Superfine 18.5 Micron Merino', 'Flatlock anti-chafing seams', 'Extended drop-tail hem', 'Natural UV 50+ protection'],
    weight: '7.2 oz',
    origin: 'Ethically spun in Christchurch',
    featured: true
  },
  {
    id: 'prod-5',
    name: 'Weatherproof Waxed Trail Smock',
    category: 'Apparel',
    price: 245,
    description: 'An oversized heritage pullover wind and rain breaker. Features a generous kangaroo front map pouch, gusseted storm hood, and cinchable hem for breezy ridge walking.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800',
    inStock: true,
    specs: ['10oz Halley Stevensons Waxed Cotton', 'Deep brass zippered neck gusset', 'Internal fleece lined handwarmers', 'Reinforced elbow patches'],
    weight: '1.8 lbs',
    origin: 'Scotland / Portugal',
    featured: true
  },
  {
    id: 'prod-6',
    name: 'Waffle Knit Heritage Beanie',
    category: 'Apparel',
    price: 42,
    description: 'Knit from thick 4-ply organic lambswool. Substantial fold-over cuff and breathable waffle knit structure that traps warmth without overheating.',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800',
    inStock: true,
    specs: ['100% Undyed Organic Lambswool', 'Deep fold double layer ear band', 'One size fits all unisex fit'],
    weight: '3.1 oz',
    origin: 'Donegal, Ireland',
    featured: false
  },
  {
    id: 'prod-7',
    name: 'Small Batch Campfire Roast Coffee',
    category: 'Local Provisions',
    price: 24,
    description: 'Whole bean specialty Arabica roasted in cast-iron cylinders over seasoned white oak wood embers. Notes of bitter dark cocoa, toasted hazelnuts, and subtle campfire smoke.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    inStock: true,
    specs: ['12 oz Whole Bean Valve Bag', 'Origin: Huehuetenango / Single Estate', 'Roasted weekly in 25-lb batches', 'Medium-Dark Roast profile'],
    weight: '12 oz',
    origin: 'Roasted at Z7CO Outpost Roastery',
    featured: true
  },
  {
    id: 'prod-8',
    name: 'High Sierra Raw Wildflower Honey',
    category: 'Local Provisions',
    price: 28,
    description: 'Unfiltered, cold-extracted honey collected from alpine wildflower meadows and pine forests at 6,500ft elevation. Rich amber hue with herbal undertones of sage and cedar blossom.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
    inStock: true,
    specs: ['16 oz Heavy Glass Jar', '100% Raw Unpasteurized', 'Collected from pesticide-free wilderness zones', 'Contains natural propolis & pollen'],
    weight: '1 lb',
    origin: 'High Sierra Apiaries',
    featured: false
  },
  {
    id: 'prod-9',
    name: 'Cedar & Juniper Botanical Tonic (4-Pack)',
    category: 'Local Provisions',
    price: 22,
    description: 'Steam-distilled wild cedar boughs, hand-picked juniper berries, and pure spring water. Refreshing non-alcoholic wilderness apéritif or pairing with your favorite spirit.',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=800',
    inStock: true,
    specs: ['4 x 250ml Glass Bottles', 'Zero artificial sweeteners or preservatives', 'Wild-foraged botanicals', 'Subtly effervescent'],
    weight: '2.5 lbs',
    origin: 'Outpost Botanical Stillhouse',
    featured: true
  }
];

export const QUICK_PACKAGES: QuickEscapePackage[] = [
  {
    id: 'quick-1',
    title: 'The Forest Reconnect Escape',
    tagline: 'Zero planning needed. 2 Nights in The Forest Glass House + Guided Kayaking + Fireside Provisions.',
    season: 'Spring',
    driveTime: '90 mins from metro hub',
    suitableFor: 'Couples / Solo Reset',
    property: PROPERTIES[0],
    adventure: ADVENTURES[0],
    provisionPack: [PRODUCTS[0], PRODUCTS[6]],
    packagePrice: 940,
    savings: 145
  },
  {
    id: 'quick-2',
    title: 'High Summit Solitude Weekend',
    tagline: '2 Nights at Black Ridge Lookout + Sunset Peak Climb + Waxed Bedroll & Roast.',
    season: 'Summer',
    driveTime: '2 hours from metro hub',
    suitableFor: 'Active Pair / Friends',
    property: PROPERTIES[1],
    adventure: ADVENTURES[2],
    provisionPack: [PRODUCTS[1], PRODUCTS[6]],
    packagePrice: 995,
    savings: 185
  },
  {
    id: 'quick-3',
    title: 'Autumn Creek Acoustic Detox',
    tagline: '2 Nights at Safari Outpost + Hardwood Canopy Trek + Wool Beanie & Honey.',
    season: 'Fall',
    driveTime: '1 hr 45 mins from metro hub',
    suitableFor: 'Stress Relief / Fast Recharge',
    property: PROPERTIES[2],
    adventure: ADVENTURES[4],
    provisionPack: [PRODUCTS[5], PRODUCTS[7]],
    packagePrice: 560,
    savings: 90
  }
];
