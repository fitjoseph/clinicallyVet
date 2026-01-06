import { Product } from '../types/Product';

export const products: Product[] = [
  // Dogs
  {
    id: 'dog-1',
    name: 'Premium Dog Food - Adult Formula',
    category: 'dogs',
    price: 89.99,
    description: 'High-quality nutrition for adult dogs with real chicken as the first ingredient.',
    image: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Real chicken first ingredient', 'No artificial preservatives', 'Supports healthy digestion', 'Omega fatty acids for coat health'],
    inStock: true
  },
  {
    id: 'dog-2',
    name: 'Dog Dental Care Kit',
    category: 'dogs',
    price: 34.99,
    description: 'Complete dental care solution for maintaining your dog\'s oral health.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Enzymatic toothpaste', 'Dual-headed toothbrush', 'Dental chews included', 'Veterinarian recommended'],
    inStock: true
  },
  {
    id: 'dog-3',
    name: 'Joint Support Supplements',
    category: 'dogs',
    price: 45.99,
    description: 'Advanced joint support formula with glucosamine and chondroitin for active dogs.',
    image: 'https://images.pexels.com/photos/6816848/pexels-photo-6816848.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Glucosamine & Chondroitin', 'MSM for inflammation', 'Easy-to-give chewable tablets', '90-day supply'],
    inStock: true
  },

  // Cats
  {
    id: 'cat-1',
    name: 'Premium Cat Food - Indoor Formula',
    category: 'cats',
    price: 79.99,
    description: 'Specially formulated nutrition for indoor cats with hairball control.',
    image: 'https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Hairball control formula', 'High protein content', 'Natural fiber blend', 'Supports healthy weight'],
    inStock: true
  },
  {
    id: 'cat-2',
    name: 'Cat Litter - Odor Control',
    category: 'cats',
    price: 24.99,
    description: 'Advanced clumping litter with superior odor control technology.',
    image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['99% dust-free', 'Instant clumping', '10-day odor control', 'Natural clay formula'],
    inStock: true
  },
  {
    id: 'cat-3',
    name: 'Feline Calming Supplements',
    category: 'cats',
    price: 38.99,
    description: 'Natural calming aid for stressed or anxious cats during travel or changes.',
    image: 'https://images.pexels.com/photos/6816861/pexels-photo-6816861.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['L-Theanine and Taurine', 'No drowsiness', 'Chicken flavor', 'Veterinarian formulated'],
    inStock: true
  },

  // Birds
  {
    id: 'bird-1',
    name: 'Premium Bird Seed Mix',
    category: 'birds',
    price: 29.99,
    description: 'Nutritionally balanced seed mix for cockatiels, parakeets, and small birds.',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Vitamin enriched', 'No artificial colors', 'Supports vibrant plumage', 'Resealable packaging'],
    inStock: true
  },
  {
    id: 'bird-2',
    name: 'Bird Cage Cleaning Kit',
    category: 'birds',
    price: 19.99,
    description: 'Complete cleaning solution for maintaining a hygienic bird environment.',
    image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Bird-safe disinfectant', 'Specialized brushes', 'Cage liner papers', 'Non-toxic formula'],
    inStock: true
  },
  {
    id: 'bird-3',
    name: 'Avian Vitamin Supplements',
    category: 'birds',
    price: 32.99,
    description: 'Essential vitamins and minerals for optimal bird health and immunity.',
    image: 'https://images.pexels.com/photos/6235657/pexels-photo-6235657.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Vitamin A, D3, E complex', 'Immune system support', 'Easy water-soluble', 'Veterinary grade'],
    inStock: true
  },

  // Fish
  {
    id: 'fish-1',
    name: 'Aquarium Water Conditioner',
    category: 'fish',
    price: 16.99,
    description: 'Instantly makes tap water safe for fish by neutralizing harmful chemicals.',
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Neutralizes chlorine', 'Detoxifies heavy metals', 'Protects fish gills', 'Treats 600 gallons'],
    inStock: true
  },
  {
    id: 'fish-2',
    name: 'Premium Fish Food Flakes',
    category: 'fish',
    price: 22.99,
    description: 'High-quality nutrition for tropical fish with color-enhancing ingredients.',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Color enhancement', 'High protein content', 'Easy digestion', 'Vitamin C enriched'],
    inStock: true
  },
  {
    id: 'fish-3',
    name: 'Aquarium Test Kit',
    category: 'fish',
    price: 28.99,
    description: 'Complete water testing kit for monitoring aquarium water quality.',
    image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Tests pH, ammonia, nitrite', 'Easy-to-read results', '100+ tests included', 'Professional accuracy'],
    inStock: true
  },

  // Small Animals
  {
    id: 'small-1',
    name: 'Small Animal Bedding',
    category: 'small-animals',
    price: 18.99,
    description: 'Soft, absorbent bedding for rabbits, guinea pigs, and other small pets.',
    image: 'https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Super absorbent', 'Odor control', 'Dust-free', 'Biodegradable'],
    inStock: true
  },
  {
    id: 'small-2',
    name: 'Guinea Pig Vitamin C Tablets',
    category: 'small-animals',
    price: 14.99,
    description: 'Essential Vitamin C supplement for guinea pigs and other small animals.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Prevents scurvy', 'Chewable tablets', 'Natural orange flavor', '90-day supply'],
    inStock: true
  },
  {
    id: 'small-3',
    name: 'Rabbit Hay - Timothy Blend',
    category: 'small-animals',
    price: 26.99,
    description: 'Premium timothy hay blend for optimal digestive health in rabbits.',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['High fiber content', 'Supports dental health', 'Hand-selected quality', 'Dust-free packaging'],
    inStock: true
  },

  // Reptiles
  {
    id: 'reptile-1',
    name: 'Snake Heating Pad',
    category: 'reptiles',
    price: 45.99,
    description: 'Under-tank heating pad for maintaining optimal temperatures for snakes and reptiles.',
    image: 'https://images.pexels.com/photos/3938026/pexels-photo-3938026.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Adjustable temperature', 'Energy efficient', 'Safe for glass terrariums', 'Thermostat compatible'],
    inStock: true
  },
  {
    id: 'reptile-2',
    name: 'Reptile Feeding Tongs',
    category: 'reptiles',
    price: 18.99,
    description: 'Stainless steel feeding tongs for safe feeding of snakes and other reptiles.',
    image: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['12-inch length', 'Stainless steel construction', 'Non-slip grip', 'Easy to clean'],
    inStock: true
  },
  {
    id: 'reptile-3',
    name: 'UV Light for Reptiles',
    category: 'reptiles',
    price: 89.99,
    description: 'Full-spectrum UV lighting essential for reptile health and calcium absorption.',
    image: 'https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['UVA and UVB spectrum', 'Promotes vitamin D3', 'Long-lasting bulb', 'Easy installation'],
    inStock: true
  },
  {
    id: 'reptile-4',
    name: 'Reptile Substrate Mix',
    category: 'reptiles',
    price: 24.99,
    description: 'Natural substrate blend suitable for various reptile species including snakes.',
    image: 'https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Natural materials', 'Maintains humidity', 'Easy to clean', 'Dust-free formula'],
    inStock: true
  },
  {
    id: 'reptile-5',
    name: 'Snake Hide Box',
    category: 'reptiles',
    price: 32.99,
    description: 'Secure hiding place for snakes to reduce stress and promote natural behavior.',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Natural appearance', 'Easy to clean', 'Multiple sizes available', 'Durable construction'],
    inStock: true
  },

  // Livestock
  {
    id: 'livestock-1',
    name: 'Horse Grooming Kit',
    category: 'livestock',
    price: 129.99,
    description: 'Professional grooming kit with all essential tools for horse care.',
    image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Complete brush set', 'Hoof pick included', 'Carrying case', 'Professional quality'],
    inStock: true
  },
  {
    id: 'livestock-2',
    name: 'Pig Nutritional Feed',
    category: 'livestock',
    price: 78.99,
    description: 'Balanced nutrition feed for pigs with essential vitamins and minerals.',
    image: 'https://images.pexels.com/photos/162240/pig-agriculture-animals-pink-162240.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['High protein content', 'Vitamin fortified', 'Promotes healthy growth', '50lb bag'],
    inStock: true
  },
  {
    id: 'livestock-3',
    name: 'Donkey Halter Set',
    category: 'livestock',
    price: 45.99,
    description: 'Durable halter and lead rope set designed specifically for donkeys.',
    image: 'https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Adjustable fit', 'Weather resistant', 'Comfortable padding', 'Lead rope included'],
    inStock: true
  },
  {
    id: 'livestock-4',
    name: 'Camel Mineral Supplement',
    category: 'livestock',
    price: 156.99,
    description: 'Specialized mineral supplement formulated for camel nutritional needs.',
    image: 'https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Desert-adapted formula', 'Essential minerals', 'Supports hydration', 'Veterinary approved'],
    inStock: true
  },
  {
    id: 'livestock-5',
    name: 'Horse Hoof Care Kit',
    category: 'livestock',
    price: 89.99,
    description: 'Complete hoof care solution for maintaining healthy horse hooves.',
    image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Hoof conditioner', 'Thrush treatment', 'Application brush', 'Professional grade'],
    inStock: true
  },

  // Exotic Animals
  {
    id: 'exotic-1',
    name: 'Bear Enrichment Feeder',
    category: 'exotic-animals',
    price: 299.99,
    description: 'Heavy-duty enrichment feeding device designed for bears in captivity.',
    image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Stainless steel construction', 'Puzzle feeding design', 'Easy to clean', 'Enrichment focused'],
    inStock: true
  },
  {
    id: 'exotic-2',
    name: 'Panda Bamboo Nutrition',
    category: 'exotic-animals',
    price: 189.99,
    description: 'Specialized nutritional supplement for pandas with bamboo extract.',
    image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Bamboo fiber concentrate', 'Digestive enzymes', 'Vitamin enriched', 'Zoo-grade quality'],
    inStock: true
  },
  {
    id: 'exotic-3',
    name: 'Liger Exercise Equipment',
    category: 'exotic-animals',
    price: 1299.99,
    description: 'Large-scale exercise and enrichment equipment designed for ligers.',
    image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Heavy-duty construction', 'Weather resistant', 'Multiple activity zones', 'Professional installation'],
    inStock: true
  },
  {
    id: 'exotic-4',
    name: 'Crocodile Dental Care Tools',
    category: 'exotic-animals',
    price: 459.99,
    description: 'Specialized dental care instruments for crocodile and alligator maintenance.',
    image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Titanium instruments', 'Extended reach design', 'Autoclave safe', 'Veterinary grade'],
    inStock: true
  },
  {
    id: 'exotic-5',
    name: 'Bear Habitat Enhancement Kit',
    category: 'exotic-animals',
    price: 899.99,
    description: 'Complete habitat enhancement package for bear enclosures.',
    image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multiple enrichment items', 'Durable materials', 'Easy installation', 'Behavioral stimulation'],
    inStock: true
  },

  // Vaccines
  {
    id: 'vaccine-1',
    name: 'Canine DHPP Vaccine',
    category: 'vaccines',
    price: 89.99,
    description: 'Core vaccine protecting against Distemper, Hepatitis, Parvovirus, and Parainfluenza.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Modified live virus', 'Annual protection', 'Veterinary use only', 'Cold chain maintained'],
    inStock: true
  },
  {
    id: 'vaccine-2',
    name: 'Feline FVRCP Vaccine',
    category: 'vaccines',
    price: 79.99,
    description: 'Essential vaccine for cats against Rhinotracheitis, Calicivirus, and Panleukopenia.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Core feline protection', 'Modified live virus', 'Annual booster', 'Proven efficacy'],
    inStock: true
  },
  {
    id: 'vaccine-3',
    name: 'Rabies Vaccine - Multi-Species',
    category: 'vaccines',
    price: 65.99,
    description: 'Rabies vaccine approved for dogs, cats, and other mammals.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['3-year protection', 'Killed virus vaccine', 'Multi-species approved', 'Legal requirement'],
    inStock: true
  },
  {
    id: 'vaccine-4',
    name: 'Equine Influenza Vaccine',
    category: 'vaccines',
    price: 125.99,
    description: 'Respiratory protection vaccine for horses against equine influenza.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Respiratory protection', 'Competition approved', 'Bi-annual dosing', 'Veterinary exclusive'],
    inStock: true
  },
  {
    id: 'vaccine-5',
    name: 'Avian Polyomavirus Vaccine',
    category: 'vaccines',
    price: 95.99,
    description: 'Specialized vaccine for birds against polyomavirus infection.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Avian specific', 'Prevents PBFD', 'Breeder recommended', 'Cold storage required'],
    inStock: true
  },

  // Lab Products
  {
    id: 'lab-1',
    name: 'Advanced Probiotic Formula',
    category: 'lab-products',
    price: 149.99,
    description: 'Laboratory-developed multi-strain probiotic for optimal gut health.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['15 billion CFU', 'Multi-strain formula', 'Shelf-stable', 'Research-backed'],
    inStock: true
  },
  {
    id: 'lab-2',
    name: 'Stem Cell Therapy Kit',
    category: 'lab-products',
    price: 1899.99,
    description: 'Cutting-edge stem cell therapy system for regenerative veterinary medicine.',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Adipose-derived cells', 'Complete processing kit', 'Same-day treatment', 'Training included'],
    inStock: true
  },
  {
    id: 'lab-3',
    name: 'Gene Therapy Vector',
    category: 'lab-products',
    price: 2499.99,
    description: 'Advanced gene therapy delivery system for veterinary applications.',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Viral vector system', 'Targeted delivery', 'Research grade', 'Specialized storage'],
    inStock: true
  },
  {
    id: 'lab-4',
    name: 'Immunomodulator Complex',
    category: 'lab-products',
    price: 299.99,
    description: 'Laboratory-formulated immune system modulator for various species.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Immune system support', 'Multi-species formula', 'Injectable solution', 'Veterinary exclusive'],
    inStock: true
  },
  {
    id: 'lab-5',
    name: 'Biomarker Detection Kit',
    category: 'lab-products',
    price: 599.99,
    description: 'Advanced diagnostic kit for detecting disease biomarkers in animals.',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Rapid results', 'High sensitivity', 'Multiple biomarkers', 'Laboratory grade'],
    inStock: true
  },
  {
    id: 'lab-6',
    name: 'PCR Amplification Kit',
    category: 'lab-products',
    price: 349.99,
    description: 'High-fidelity PCR kit for veterinary diagnostic applications.',
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['High-fidelity polymerase', 'Veterinary validated', 'Fast cycling protocol', 'Research grade'],
    inStock: true
  },
  {
    id: 'lab-7',
    name: 'Enzyme-Linked Immunosorbent Assay (ELISA) Kit',
    category: 'lab-products',
    price: 289.99,
    description: 'Quantitative ELISA kit for measuring specific proteins in animal samples.',
    image: 'https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Quantitative results', 'High specificity', 'Veterinary validated', '96-well format'],
    inStock: true
  },
  {
    id: 'lab-8',
    name: 'Cell Culture Media - Veterinary Grade',
    category: 'lab-products',
    price: 189.99,
    description: 'Specialized cell culture medium optimized for veterinary cell lines.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Serum-free formula', 'Animal cell optimized', 'Sterile filtered', 'Long shelf life'],
    inStock: true
  },
  {
    id: 'lab-9',
    name: 'Protein Purification System',
    category: 'lab-products',
    price: 1299.99,
    description: 'Automated protein purification system for veterinary research applications.',
    image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Automated operation', 'High purity output', 'Multiple purification methods', 'User-friendly interface'],
    inStock: true
  },
  {
    id: 'lab-10',
    name: 'Microscopy Staining Kit',
    category: 'lab-products',
    price: 129.99,
    description: 'Comprehensive staining kit for veterinary histopathology and cytology.',
    image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multiple stain types', 'Veterinary optimized', 'Ready-to-use solutions', 'Professional quality'],
    inStock: true
  },
  {
    id: 'lab-11',
    name: 'DNA Extraction Kit - Animal Tissue',
    category: 'lab-products',
    price: 249.99,
    description: 'High-yield DNA extraction kit specifically designed for animal tissue samples.',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['High DNA yield', 'Animal tissue optimized', 'Fast protocol', 'Pure DNA output'],
    inStock: true
  },
  {
    id: 'lab-12',
    name: 'Veterinary Blood Chemistry Analyzer',
    category: 'lab-products',
    price: 4999.99,
    description: 'Automated blood chemistry analyzer for comprehensive veterinary diagnostics.',
    image: 'https://images.pexels.com/photos/3938026/pexels-photo-3938026.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multi-parameter analysis', 'Rapid results', 'Quality control built-in', 'Veterinary specific'],
    inStock: true
  },
  {
    id: 'lab-13',
    name: 'Antimicrobial Susceptibility Testing Kit',
    category: 'lab-products',
    price: 199.99,
    description: 'Complete kit for testing antimicrobial resistance in veterinary pathogens.',
    image: 'https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multiple antibiotics', 'Veterinary pathogens', 'Standardized protocol', 'Quality assured'],
    inStock: true
  },
  {
    id: 'lab-14',
    name: 'Cytokine Analysis Panel',
    category: 'lab-products',
    price: 799.99,
    description: 'Multiplex cytokine analysis panel for veterinary immunology research.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multiple cytokines', 'Species-specific', 'High sensitivity', 'Research validated'],
    inStock: true
  },
  {
    id: 'lab-15',
    name: 'Veterinary Pathogen Detection Array',
    category: 'lab-products',
    price: 899.99,
    description: 'Comprehensive pathogen detection array for veterinary infectious diseases.',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multi-pathogen detection', 'Rapid identification', 'High specificity', 'Veterinary validated'],
    inStock: true
  },
  {
    id: 'lab-16',
    name: 'Tissue Processing Reagents',
    category: 'lab-products',
    price: 159.99,
    description: 'Complete set of reagents for veterinary tissue processing and embedding.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Complete reagent set', 'Veterinary optimized', 'High quality results', 'Ready-to-use'],
    inStock: true
  },
  {
    id: 'lab-17',
    name: 'Veterinary Hormone Assay Kit',
    category: 'lab-products',
    price: 449.99,
    description: 'Sensitive hormone assay kit for veterinary endocrinology studies.',
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['High sensitivity', 'Multiple hormones', 'Species validated', 'Research grade'],
    inStock: true
  },
  {
    id: 'lab-18',
    name: 'Bacterial Culture Media Set',
    category: 'lab-products',
    price: 219.99,
    description: 'Comprehensive bacterial culture media set for veterinary microbiology.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multiple media types', 'Veterinary pathogens', 'Quality controlled', 'Ready-to-use'],
    inStock: true
  },
  {
    id: 'lab-19',
    name: 'Flow Cytometry Antibody Panel',
    category: 'lab-products',
    price: 699.99,
    description: 'Veterinary-specific antibody panel for flow cytometry applications.',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Species-specific antibodies', 'Flow cytometry optimized', 'Research validated', 'High quality'],
    inStock: true
  },
  {
    id: 'lab-20',
    name: 'Veterinary Toxicology Screening Kit',
    category: 'lab-products',
    price: 549.99,
    description: 'Comprehensive toxicology screening kit for veterinary forensic applications.',
    image: 'https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multi-toxin detection', 'Rapid screening', 'Veterinary validated', 'Forensic grade'],
    inStock: true
  },
  {
    id: 'lab-21',
    name: 'Parasitology Diagnostic Kit',
    category: 'lab-products',
    price: 179.99,
    description: 'Complete diagnostic kit for veterinary parasitology examinations.',
    image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multiple parasite detection', 'Easy-to-use protocol', 'Veterinary specific', 'Accurate results'],
    inStock: true
  },
  {
    id: 'lab-22',
    name: 'Veterinary Genetic Testing Panel',
    category: 'lab-products',
    price: 999.99,
    description: 'Comprehensive genetic testing panel for hereditary diseases in animals.',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multiple genetic markers', 'Species-specific', 'High accuracy', 'Comprehensive report'],
    inStock: true
  },
  {
    id: 'lab-23',
    name: 'Veterinary Serology Test Kit',
    category: 'lab-products',
    price: 329.99,
    description: 'Serological testing kit for veterinary infectious disease diagnosis.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multiple pathogens', 'Rapid results', 'High specificity', 'Veterinary validated'],
    inStock: true
  },
  {
    id: 'lab-24',
    name: 'Veterinary Molecular Diagnostics Platform',
    category: 'lab-products',
    price: 7999.99,
    description: 'Advanced molecular diagnostics platform for veterinary laboratories.',
    image: 'https://images.pexels.com/photos/3938026/pexels-photo-3938026.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Automated processing', 'Multiple assay types', 'High throughput', 'Professional grade'],
    inStock: true
  },
  {
    id: 'lab-25',
    name: 'Veterinary Immunohistochemistry Kit',
    category: 'lab-products',
    price: 389.99,
    description: 'Complete immunohistochemistry kit for veterinary pathology applications.',
    image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Complete reagent set', 'Veterinary optimized', 'High quality staining', 'Research grade'],
    inStock: true
  },
  {
    id: 'lab-26',
    name: 'Veterinary Drug Residue Testing Kit',
    category: 'lab-products',
    price: 459.99,
    description: 'Sensitive testing kit for drug residues in animal products and tissues.',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multi-drug detection', 'High sensitivity', 'Regulatory compliant', 'Rapid results'],
    inStock: true
  },
  {
    id: 'lab-27',
    name: 'Veterinary Microbiome Analysis Kit',
    category: 'lab-products',
    price: 649.99,
    description: 'Advanced microbiome analysis kit for veterinary gut health research.',
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['16S rRNA sequencing', 'Comprehensive analysis', 'Species-specific', 'Research validated'],
    inStock: true
  },
  {
    id: 'lab-28',
    name: 'Veterinary Allergy Testing Panel',
    category: 'lab-products',
    price: 379.99,
    description: 'Comprehensive allergy testing panel for veterinary dermatology applications.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multiple allergens', 'Species-specific', 'High accuracy', 'Detailed reporting'],
    inStock: true
  },
  {
    id: 'lab-29',
    name: 'Veterinary Cancer Biomarker Kit',
    category: 'lab-products',
    price: 899.99,
    description: 'Specialized biomarker detection kit for veterinary oncology applications.',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Cancer-specific markers', 'Early detection', 'High sensitivity', 'Veterinary validated'],
    inStock: true
  },
  {
    id: 'lab-30',
    name: 'Veterinary Nutritional Analysis Kit',
    category: 'lab-products',
    price: 269.99,
    description: 'Complete nutritional analysis kit for veterinary feed and supplement testing.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Multiple nutrients', 'Feed analysis', 'Quality control', 'Regulatory compliant'],
    inStock: true
  }
];