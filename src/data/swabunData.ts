export interface AvenueData {
  id: string;
  name: string;
  subtitle: string;
  wasteType: string;
  categoryNumber: string;
  tagline: string;
  input: string;
  inputDescription: string;
  process: string;
  processDescription: string;
  output: string;
  outputDescription: string;
  coreMessage: string;
  pillars: {
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  color: {
    accent: string;
    badge: string;
    bg: string;
    border: string;
  };
}

export const AVENUES_DATA: AvenueData[] = [
  {
    id: 'unnati',
    name: 'UNNATI',
    subtitle: 'KITCHEN WASTE',
    wasteType: 'Organic Kitchen Scraps',
    categoryNumber: '01',
    tagline: 'Household organic waste naturally transformed into nutrient-rich compost.',
    input: 'Kitchen Waste',
    inputDescription: 'Daily household organic refuse: vegetable peelings, leftover scraps, and discarded raw botanicals.',
    process: 'Three-Tier Terracotta Composter',
    processDescription: 'A breathable stack of three hand-turned terracotta vessels allowing passive aeration, natural microbial breakdown, and self-contained decomposition.',
    output: 'Nutrient-Rich Compost',
    outputDescription: 'Dark, earthy organic humus rich in bio-nutrients ready to replenish garden soil and domestic agriculture.',
    coreMessage: 'Designed specifically for households, Unnati offers a simple, accessible way to manage organic waste while promoting eco-friendly living and giving discarded food scraps a valuable second life.',
    pillars: [
      {
        title: 'Three-Tier Terracotta System',
        description: 'Porous earthen clay enables natural temperature regulation and moisture balance for efficient decomposition without foul odors.'
      },
      {
        title: 'Household Scale',
        description: 'Engineered to fit standard domestic balconies and kitchen utilities, turning waste management into an everyday routine.'
      },
      {
        title: 'Soil Regeneration',
        description: 'Transforms potential landfill methane emissions into fertile, nutrient-dense compost for homegrown plants and urban flora.'
      }
    ],
    specifications: [
      { label: 'Primary Material', value: 'Natural Baked Terracotta Clay' },
      { label: 'Target Setting', value: 'Urban & Suburban Households' },
      { label: 'Operational Input', value: 'Domestic Vegetable & Kitchen Waste' },
      { label: 'Byproduct Value', value: 'Nutrient-Rich Natural Humus' }
    ],
    color: {
      accent: '#9A3412',
      badge: 'bg-orange-50 text-orange-900 border-orange-200',
      bg: 'bg-[#FAF4ED]',
      border: 'border-orange-200'
    }
  },
  {
    id: 'aaroha',
    name: 'AAROHA',
    subtitle: 'WASTE OIL + PLASTIC SACHETS',
    wasteType: 'Discarded Cooking Oil & Multi-layer Sachets',
    categoryNumber: '02',
    tagline: 'Connecting waste management with personal hygiene through low-energy upcycling.',
    input: 'Waste Cooking Oil & Sachets',
    inputDescription: 'Used kitchen frying oils and discarded plastic sachets that typically clog urban waterways and municipal drains.',
    process: 'Low-Energy, Plastic-Free Formulation',
    processDescription: 'Cold-process saponification and careful purification that neutralizes free fatty acids without high-emission industrial energy.',
    output: 'Eco-Friendly Shampoo Soap Bars',
    outputDescription: 'Zero-plastic, conditioning solid shampoo and hygiene cleansing bars that eliminate the need for single-use plastic bottles.',
    coreMessage: 'Aaroha bridges the critical gap between environmental pollution and everyday hygiene, turning hazardous drain-clogging waste oil into plastic-free personal care essentials.',
    pillars: [
      {
        title: 'Waterway Protection',
        description: 'Diverts rancid cooking oil from municipal sewers and rivers where a single drop contaminates vast quantities of fresh water.'
      },
      {
        title: 'Low-Energy Process',
        description: 'Operates on ambient-temperature, low-energy craft methods to minimize carbon footprint during transformation.'
      },
      {
        title: 'Zero Plastic Bottling',
        description: 'Replaces conventional liquid shampoo packaged in multilayer plastic bottles with solid, biodegradable bars.'
      }
    ],
    specifications: [
      { label: 'Feedstock Waste', value: 'Post-Consumer Cooking Oil & Sachets' },
      { label: 'Production Process', value: 'Low-Energy Ambient Saponification' },
      { label: 'Product Format', value: 'Solid Conditioning Shampoo Bar' },
      { label: 'Ecological Goal', value: 'Pollution Reduction & Plastic-Free Hygiene' }
    ],
    color: {
      accent: '#D97706',
      badge: 'bg-amber-50 text-amber-900 border-amber-200',
      bg: 'bg-[#FBF8EF]',
      border: 'border-amber-200'
    }
  },
  {
    id: 'sehar',
    name: 'SEHAR',
    subtitle: 'BANANA PEELS',
    wasteType: 'Post-Harvest Agricultural Banana Peels',
    categoryNumber: '03',
    tagline: 'Plant-based cruelty-free vegan leather born from discarded banana peels.',
    input: 'Discarded Banana Peels',
    inputDescription: 'Post-consumption and agricultural banana skins that decay in open dumps, generating potent greenhouse gases.',
    process: 'Natural Binding Agents & Fiber Crosslinking',
    processDescription: 'Cellulose extraction combined with bio-compatible natural binders, curing under controlled tension into a durable flexible substrate.',
    output: 'Plant-Based Vegan Leather',
    outputDescription: 'A supple, textured, durable biomaterial alternative to animal hide that is 100% cruelty-free and biodegradable.',
    coreMessage: 'By developing a plant-based alternative to animal-based leather, Sehar connects agricultural waste with sustainability, material innovation, and animal welfare.',
    pillars: [
      {
        title: 'Cruelty-Free Animal Welfare',
        description: 'Offers an ethical alternative to livestock slaughter and toxic chemical tanning processes associated with animal leather.'
      },
      {
        title: 'Agricultural Upcycling',
        description: 'Values the fibrous rind of bananas that is normally left to rot after fruit harvesting across Indian farms.'
      },
      {
        title: 'Natural Binders Only',
        description: 'Replaces polyurethane (PU) and polyvinyl chloride (PVC) synthetic leathers with bio-compatible natural binding agents.'
      }
    ],
    specifications: [
      { label: 'Primary Substrate', value: 'Discarded Banana Rind Cellulose' },
      { label: 'Binding Chemistry', value: 'All-Natural Non-Toxic Organic Binders' },
      { label: 'Target Industry', value: 'Sustainable Fashion & Lifestyle Goods' },
      { label: 'Core Philosophy', value: 'Animal Welfare & Circular Biomaterials' }
    ],
    color: {
      accent: '#15803D',
      badge: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      bg: 'bg-[#F4F9F2]',
      border: 'border-emerald-200'
    }
  }
];

export const RECOGNITION_DATA = {
  mediaOutlets: [
    { name: 'India Today', type: 'Leading National Media Network' },
    { name: 'Aaj Tak', type: 'National Broadcast Media' },
    { name: 'News18', type: 'National News Broadcaster' },
    { name: 'Hindustan Times', type: 'National Print & Digital Daily' },
    { name: 'PETA India', type: 'Global Animal Rights Organization' }
  ],
  recommendations: [
    {
      institution: 'Delhi School of Social Work',
      note: 'Formal Letter of Recommendation recognizing Project Swabun for community-rooted ecological innovation.',
      seal: 'DSSW / University of Delhi'
    },
    {
      institution: 'Bundelkhand University',
      note: 'Official Letter of Recommendation from the Department of Social Work endorsing Swabun’s sustainable waste methodology.',
      seal: 'Dept. of Social Work, BU'
    }
  ],
  competitions: {
    headline: 'Collegiate & National Circuit',
    summary: 'Multiple wins and podium finishes at prestigious collegiate business and social entrepreneurship competitions.',
    status: 'Podium Honors & Competitive Accolades'
  }
};

export const ENACTUS_RAMJAS_DATA = {
  organization: 'Enactus Ramjas',
  institution: 'Ramjas College, University of Delhi',
  founded: '2011',
  tenure: '14+ Years of Impact',
  nationalExpo: 'Runner-Up Team at Enactus National Exposition 2024',
  legacyAward: 'Recipient of the Enactus Legacy Award celebrating commitment and resilience',
  bestAlumnus: 'Senior Nimar Dang recognized as Best Alumnus (2024)',
  motto: 'Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.',
  leadership: [
    { role: 'President', name: 'Sejal Kumawat', contact: '+91 70149 69888' },
    { role: 'Vice President', name: 'Harchirag Singh Chhabra', contact: '+91 8949837862' },
    { role: 'Vice President', name: 'Parnika Tiwari', contact: '+91 90443 18026' }
  ],
  socialHandles: {
    instagram: '@Swabun',
    linkedin: '@ProjectSwabun',
    facebook: '@SwabunEnactus',
    enactusInstagram: '@en.ramjas'
  }
};
