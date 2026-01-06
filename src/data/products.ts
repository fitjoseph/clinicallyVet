import { Product } from '../types/Product';

export const products: Product[] = [
  // Dog Products (30 items)
  {
    id: '1',
    name: 'Premium Dog Food - Chicken & Rice',
    category: 'dogs',
    price: 45.99,
    description: 'High-quality dry dog food made with real chicken and brown rice. Perfect for adult dogs of all sizes.',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Real chicken as first ingredient', 'No artificial preservatives', 'Supports healthy digestion', 'Rich in protein'],
    inStock: true
  },
  {
    id: '2',
    name: 'Orthopedic Dog Bed',
    category: 'dogs',
    price: 89.99,
    description: 'Memory foam dog bed designed to provide optimal support for aging joints and muscles.',
    image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Memory foam support', 'Washable cover', 'Non-slip bottom', 'Available in multiple sizes'],
    inStock: true
  },
  {
    id: '3',
    name: 'Interactive Puzzle Toy',
    category: 'dogs',
    price: 24.99,
    description: 'Mental stimulation toy that challenges your dog while dispensing treats as rewards.',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Mental stimulation', 'Treat dispensing', 'Durable construction', 'Easy to clean'],
    inStock: true
  },
  {
    id: '4',
    name: 'Leather Dog Collar - Adjustable',
    category: 'dogs',
    price: 19.99,
    description: 'Premium leather collar with brass buckle and ID tag attachment.',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Genuine leather', 'Brass hardware', 'Adjustable sizing', 'ID tag ring'],
    inStock: true
  },
  {
    id: '5',
    name: 'Dog Training Treats',
    category: 'dogs',
    price: 12.99,
    description: 'Small, soft training treats perfect for positive reinforcement during training sessions.',
    image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Bite-sized portions', 'High-value rewards', 'Natural ingredients', 'Resealable bag'],
    inStock: true
  },
  {
    id: '6',
    name: 'Retractable Dog Leash',
    category: 'dogs',
    price: 34.99,
    description: 'Heavy-duty retractable leash with comfortable grip and reliable locking mechanism.',
    image: 'https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['16-foot extension', 'One-button brake', 'Ergonomic handle', 'Tangle-free design'],
    inStock: true
  },
  {
    id: '7',
    name: 'Dog Grooming Kit',
    category: 'dogs',
    price: 67.99,
    description: 'Complete grooming set with brushes, nail clippers, and cleaning supplies.',
    image: 'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Professional tools', 'Multiple brush types', 'Nail clippers included', 'Storage case'],
    inStock: true
  },
  {
    id: '8',
    name: 'Elevated Dog Feeder',
    category: 'dogs',
    price: 54.99,
    description: 'Raised feeding station to promote better digestion and reduce neck strain.',
    image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Adjustable height', 'Stainless steel bowls', 'Non-slip base', 'Easy to clean'],
    inStock: true
  },
  {
    id: '9',
    name: 'Dog Car Harness',
    category: 'dogs',
    price: 29.99,
    description: 'Safety harness designed to keep your dog secure during car rides.',
    image: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Crash-tested safety', 'Padded chest plate', 'Universal fit', 'Easy installation'],
    inStock: true
  },
  {
    id: '10',
    name: 'Waterproof Dog Jacket',
    category: 'dogs',
    price: 39.99,
    description: 'Weather-resistant jacket to keep your dog warm and dry during outdoor activities.',
    image: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Waterproof material', 'Reflective strips', 'Adjustable straps', 'Machine washable'],
    inStock: true
  },
  {
    id: '11',
    name: 'Dog Dental Chews',
    category: 'dogs',
    price: 16.99,
    description: 'Dental health chews that help reduce tartar and freshen breath.',
    image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Promotes dental health', 'Natural ingredients', 'Digestible formula', 'Veterinarian recommended'],
    inStock: true
  },
  {
    id: '12',
    name: 'Dog Crate - Large',
    category: 'dogs',
    price: 129.99,
    description: 'Spacious wire crate with double-door design for easy access and ventilation.',
    image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Double-door access', 'Foldable design', 'Secure latches', 'Removable tray'],
    inStock: true
  },
  {
    id: '13',
    name: 'Dog Shampoo - Sensitive Skin',
    category: 'dogs',
    price: 18.99,
    description: 'Gentle, hypoallergenic shampoo formulated for dogs with sensitive skin.',
    image: 'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Hypoallergenic formula', 'Natural ingredients', 'pH balanced', 'Tear-free'],
    inStock: true
  },
  {
    id: '14',
    name: 'Dog Waste Bags - Biodegradable',
    category: 'dogs',
    price: 8.99,
    description: 'Eco-friendly waste bags that are strong, leak-proof, and biodegradable.',
    image: 'https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Biodegradable material', 'Leak-proof design', 'Easy-tie handles', '200 bags included'],
    inStock: true
  },
  {
    id: '15',
    name: 'Dog Anxiety Vest',
    category: 'dogs',
    price: 49.99,
    description: 'Calming vest that applies gentle pressure to help reduce anxiety and stress.',
    image: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Calming pressure', 'Breathable fabric', 'Machine washable', 'Veterinarian approved'],
    inStock: true
  },
  {
    id: '16',
    name: 'Dog Water Fountain',
    category: 'dogs',
    price: 74.99,
    description: 'Automatic water fountain with filtration system to encourage hydration.',
    image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Continuous circulation', 'Multi-stage filtration', 'Quiet operation', 'Large capacity'],
    inStock: true
  },
  {
    id: '17',
    name: 'Dog Rope Toy',
    category: 'dogs',
    price: 11.99,
    description: 'Durable rope toy perfect for tug-of-war and solo play sessions.',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural cotton rope', 'Dental benefits', 'Machine washable', 'Multiple sizes'],
    inStock: true
  },
  {
    id: '18',
    name: 'Dog GPS Tracker',
    category: 'dogs',
    price: 99.99,
    description: 'Advanced GPS tracking collar to keep tabs on your dog\'s location and activity.',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Real-time tracking', 'Activity monitoring', 'Waterproof design', 'Long battery life'],
    inStock: true
  },
  {
    id: '19',
    name: 'Dog Nail Grinder',
    category: 'dogs',
    price: 32.99,
    description: 'Electric nail grinder for safe and precise nail trimming at home.',
    image: 'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Quiet motor', 'Multiple speed settings', 'LED light', 'Rechargeable battery'],
    inStock: true
  },
  {
    id: '20',
    name: 'Dog Cooling Mat',
    category: 'dogs',
    price: 26.99,
    description: 'Self-cooling mat to help your dog stay comfortable during hot weather.',
    image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Self-cooling gel', 'No electricity needed', 'Durable material', 'Easy to clean'],
    inStock: true
  },
  {
    id: '21',
    name: 'Dog Treat Dispenser Ball',
    category: 'dogs',
    price: 15.99,
    description: 'Interactive ball that dispenses treats as your dog plays and rolls it around.',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Adjustable difficulty', 'Durable rubber', 'Mental stimulation', 'Easy to fill'],
    inStock: true
  },
  {
    id: '22',
    name: 'Dog Seat Cover',
    category: 'dogs',
    price: 44.99,
    description: 'Waterproof seat cover to protect your car interior during travel with pets.',
    image: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Waterproof material', 'Non-slip backing', 'Machine washable', 'Universal fit'],
    inStock: true
  },
  {
    id: '23',
    name: 'Dog Flea & Tick Collar',
    category: 'dogs',
    price: 22.99,
    description: 'Long-lasting flea and tick prevention collar with 8-month protection.',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['8-month protection', 'Waterproof', 'Odorless', 'Adjustable size'],
    inStock: true
  },
  {
    id: '24',
    name: 'Dog Paw Balm',
    category: 'dogs',
    price: 13.99,
    description: 'Healing balm to protect and moisturize your dog\'s paw pads.',
    image: 'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural ingredients', 'Healing properties', 'Weather protection', 'Easy application'],
    inStock: true
  },
  {
    id: '25',
    name: 'Dog Agility Set',
    category: 'dogs',
    price: 89.99,
    description: 'Complete agility training set with jumps, tunnels, and weave poles.',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Complete training set', 'Adjustable heights', 'Portable design', 'Training guide included'],
    inStock: true
  },
  {
    id: '26',
    name: 'Dog Ear Cleaner',
    category: 'dogs',
    price: 14.99,
    description: 'Gentle ear cleaning solution to prevent infections and maintain ear health.',
    image: 'https://images.pexels.com/photos/6568461/pexels-photo-6568461.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Veterinarian formulated', 'Gentle formula', 'Prevents infections', 'Easy application'],
    inStock: true
  },
  {
    id: '27',
    name: 'Dog Backpack Carrier',
    category: 'dogs',
    price: 79.99,
    description: 'Comfortable backpack carrier for small dogs during hiking and travel.',
    image: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Padded straps', 'Ventilation mesh', 'Safety tether', 'Storage pockets'],
    inStock: true
  },
  {
    id: '28',
    name: 'Dog Puzzle Feeder',
    category: 'dogs',
    price: 28.99,
    description: 'Slow-feeding puzzle bowl to promote healthy eating habits and mental stimulation.',
    image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Slow feeding design', 'Mental stimulation', 'Non-slip base', 'Easy to clean'],
    inStock: true
  },
  {
    id: '29',
    name: 'Dog Vitamin Supplements',
    category: 'dogs',
    price: 24.99,
    description: 'Daily vitamin supplements to support overall health and immune system.',
    image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Complete nutrition', 'Immune support', 'Natural ingredients', 'Tasty chewables'],
    inStock: true
  },
  {
    id: '30',
    name: 'Dog Thunder Shirt',
    category: 'dogs',
    price: 42.99,
    description: 'Anxiety-reducing shirt that provides calming pressure during storms and stress.',
    image: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Calming pressure', 'Drug-free solution', 'Machine washable', 'Proven effective'],
    inStock: true
  },

  // Cat Products (30 items)
  {
    id: '31',
    name: 'Natural Cat Litter - Clumping',
    category: 'cats',
    price: 32.99,
    description: 'Eco-friendly clumping cat litter made from natural clay with superior odor control.',
    image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['99% dust-free', 'Natural odor control', 'Easy scooping', 'Environmentally safe'],
    inStock: true
  },
  {
    id: '32',
    name: 'Multi-Level Cat Tree',
    category: 'cats',
    price: 129.99,
    description: 'Spacious cat tree with multiple levels, scratching posts, and cozy hideaways.',
    image: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Multiple perches', 'Sisal scratching posts', 'Cozy hideaway', 'Stable base'],
    inStock: true
  },
  {
    id: '33',
    name: 'Premium Wet Cat Food',
    category: 'cats',
    price: 18.99,
    description: 'Grain-free wet cat food with real salmon and vegetables for optimal feline nutrition.',
    image: 'https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Real salmon', 'Grain-free formula', 'High protein content', 'No artificial colors'],
    inStock: true
  },
  {
    id: '34',
    name: 'Interactive Cat Wand Toy',
    category: 'cats',
    price: 12.99,
    description: 'Feather wand toy to stimulate your cat\'s natural hunting instincts.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural feathers', 'Extendable wand', 'Interactive play', 'Exercise promotion'],
    inStock: true
  },
  {
    id: '35',
    name: 'Cat Scratching Post',
    category: 'cats',
    price: 34.99,
    description: 'Tall sisal scratching post to satisfy your cat\'s scratching needs.',
    image: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural sisal fiber', 'Stable base', 'Multiple heights', 'Furniture protection'],
    inStock: true
  },
  {
    id: '36',
    name: 'Cat Carrier - Airline Approved',
    category: 'cats',
    price: 67.99,
    description: 'Secure and comfortable carrier approved for airline travel.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Airline approved', 'Ventilation windows', 'Secure latches', 'Comfortable interior'],
    inStock: true
  },
  {
    id: '37',
    name: 'Cat Water Fountain',
    category: 'cats',
    price: 54.99,
    description: 'Automatic water fountain with filtration to encourage proper hydration.',
    image: 'https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Continuous flow', 'Carbon filtration', 'Quiet pump', 'Easy maintenance'],
    inStock: true
  },
  {
    id: '38',
    name: 'Cat Grooming Brush',
    category: 'cats',
    price: 16.99,
    description: 'Self-cleaning slicker brush for effective grooming and shedding control.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Self-cleaning design', 'Gentle bristles', 'Ergonomic handle', 'Reduces shedding'],
    inStock: true
  },
  {
    id: '39',
    name: 'Cat Litter Box - Self-Cleaning',
    category: 'cats',
    price: 199.99,
    description: 'Automatic self-cleaning litter box for ultimate convenience and hygiene.',
    image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Automatic cleaning', 'Odor control', 'Health monitoring', 'App connectivity'],
    inStock: true
  },
  {
    id: '40',
    name: 'Cat Treats - Dental Health',
    category: 'cats',
    price: 9.99,
    description: 'Crunchy treats designed to promote dental health and fresh breath.',
    image: 'https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Dental health benefits', 'Crunchy texture', 'Natural ingredients', 'Irresistible taste'],
    inStock: true
  },
  {
    id: '41',
    name: 'Cat Collar with Bell',
    category: 'cats',
    price: 8.99,
    description: 'Adjustable safety collar with breakaway buckle and bell.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Breakaway safety', 'Adjustable fit', 'Bell included', 'Reflective strip'],
    inStock: true
  },
  {
    id: '42',
    name: 'Cat Tunnel Toy',
    category: 'cats',
    price: 19.99,
    description: 'Collapsible tunnel toy for hide-and-seek and active play.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Collapsible design', 'Crinkle material', 'Multiple entrances', 'Easy storage'],
    inStock: true
  },
  {
    id: '43',
    name: 'Cat Nail Clippers',
    category: 'cats',
    price: 11.99,
    description: 'Professional-grade nail clippers designed specifically for cats.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Sharp stainless steel', 'Safety guard', 'Comfortable grip', 'Precise cutting'],
    inStock: true
  },
  {
    id: '44',
    name: 'Cat Heating Pad',
    category: 'cats',
    price: 29.99,
    description: 'Electric heating pad to provide warmth and comfort for your cat.',
    image: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Adjustable temperature', 'Chew-resistant cord', 'Machine washable cover', 'Safety certified'],
    inStock: true
  },
  {
    id: '45',
    name: 'Cat Catnip Spray',
    category: 'cats',
    price: 7.99,
    description: 'Pure catnip spray to attract cats to toys and scratching posts.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['100% natural catnip', 'Long-lasting effect', 'Training aid', 'Easy application'],
    inStock: true
  },
  {
    id: '46',
    name: 'Cat Window Perch',
    category: 'cats',
    price: 24.99,
    description: 'Suction cup window perch for cats to enjoy outdoor views.',
    image: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Strong suction cups', 'Washable cushion', 'Easy installation', 'Weight capacity 30lbs'],
    inStock: true
  },
  {
    id: '47',
    name: 'Cat Puzzle Feeder',
    category: 'cats',
    price: 22.99,
    description: 'Interactive puzzle feeder to slow down eating and provide mental stimulation.',
    image: 'https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Slow feeding design', 'Mental stimulation', 'Non-slip base', 'Dishwasher safe'],
    inStock: true
  },
  {
    id: '48',
    name: 'Cat Harness and Leash Set',
    category: 'cats',
    price: 18.99,
    description: 'Escape-proof harness and leash set for safe outdoor adventures.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Escape-proof design', 'Adjustable fit', 'Soft padding', 'Reflective strips'],
    inStock: true
  },
  {
    id: '49',
    name: 'Cat Litter Mat',
    category: 'cats',
    price: 15.99,
    description: 'Double-layer mat to trap litter and keep floors clean.',
    image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Double-layer design', 'Litter trapping', 'Waterproof bottom', 'Easy to clean'],
    inStock: true
  },
  {
    id: '50',
    name: 'Cat Calming Diffuser',
    category: 'cats',
    price: 26.99,
    description: 'Pheromone diffuser to reduce stress and anxiety in cats.',
    image: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural pheromones', 'Stress reduction', 'Plug-in design', '30-day refills'],
    inStock: true
  },
  {
    id: '51',
    name: 'Cat Automatic Feeder',
    category: 'cats',
    price: 89.99,
    description: 'Programmable automatic feeder for scheduled meal times.',
    image: 'https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Programmable timer', 'Portion control', 'Voice recording', 'Battery backup'],
    inStock: true
  },
  {
    id: '52',
    name: 'Cat Dental Treats',
    category: 'cats',
    price: 12.99,
    description: 'Dental health treats that help reduce tartar and plaque buildup.',
    image: 'https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Dental health benefits', 'Tartar control', 'Fresh breath', 'Veterinarian approved'],
    inStock: true
  },
  {
    id: '53',
    name: 'Cat Exercise Wheel',
    category: 'cats',
    price: 299.99,
    description: 'Large exercise wheel for indoor cats to maintain fitness and burn energy.',
    image: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Silent operation', 'Sturdy construction', 'Easy assembly', 'Space-saving design'],
    inStock: true
  },
  {
    id: '54',
    name: 'Cat Flea Shampoo',
    category: 'cats',
    price: 14.99,
    description: 'Gentle flea shampoo that effectively eliminates fleas while being kind to skin.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Flea elimination', 'Gentle formula', 'Natural ingredients', 'Pleasant scent'],
    inStock: true
  },
  {
    id: '55',
    name: 'Cat Laser Pointer Toy',
    category: 'cats',
    price: 9.99,
    description: 'Interactive laser pointer to provide exercise and mental stimulation.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Safe laser class', 'Multiple patterns', 'Auto shut-off', 'Compact design'],
    inStock: true
  },
  {
    id: '56',
    name: 'Cat Bed - Memory Foam',
    category: 'cats',
    price: 39.99,
    description: 'Orthopedic memory foam bed for ultimate comfort and joint support.',
    image: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Memory foam support', 'Removable cover', 'Machine washable', 'Non-slip bottom'],
    inStock: true
  },
  {
    id: '57',
    name: 'Cat Vitamin Supplements',
    category: 'cats',
    price: 19.99,
    description: 'Daily vitamin supplements to support overall feline health.',
    image: 'https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Complete nutrition', 'Immune support', 'Coat health', 'Tasty chewables'],
    inStock: true
  },
  {
    id: '58',
    name: 'Cat Litter Scoop',
    category: 'cats',
    price: 6.99,
    description: 'Durable metal scoop with comfortable grip for easy litter maintenance.',
    image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Stainless steel', 'Ergonomic handle', 'Easy cleaning', 'Rust resistant'],
    inStock: true
  },
  {
    id: '59',
    name: 'Cat Grass Growing Kit',
    category: 'cats',
    price: 13.99,
    description: 'Complete kit to grow fresh cat grass for digestive health.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Organic seeds', 'Growing medium', 'Planting instructions', 'Digestive benefits'],
    inStock: true
  },
  {
    id: '60',
    name: 'Cat Travel Litter Box',
    category: 'cats',
    price: 21.99,
    description: 'Portable, foldable litter box perfect for travel and temporary use.',
    image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Foldable design', 'Waterproof material', 'Easy setup', 'Compact storage'],
    inStock: true
  },

  // Bird Products (20 items)
  {
    id: '61',
    name: 'Deluxe Bird Cage',
    category: 'birds',
    price: 199.99,
    description: 'Spacious bird cage with multiple perches, feeding stations, and easy-clean design.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Spacious interior', 'Multiple perches', 'Easy-clean tray', 'Secure locking'],
    inStock: true
  },
  {
    id: '62',
    name: 'Seed Mix for Parrots',
    category: 'birds',
    price: 22.99,
    description: 'Nutritionally balanced seed mix specially formulated for parrots and large birds.',
    image: 'https://images.pexels.com/photos/1661536/pexels-photo-1661536.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Vitamin enriched', 'Natural ingredients', 'Promotes healthy plumage', 'No artificial preservatives'],
    inStock: true
  },
  {
    id: '63',
    name: 'Bird Perch - Natural Wood',
    category: 'birds',
    price: 14.99,
    description: 'Natural wood perch with varying diameters to promote foot health.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural wood', 'Varying diameters', 'Easy installation', 'Foot health benefits'],
    inStock: true
  },
  {
    id: '64',
    name: 'Bird Toy - Foraging',
    category: 'birds',
    price: 18.99,
    description: 'Interactive foraging toy to stimulate natural feeding behaviors.',
    image: 'https://images.pexels.com/photos/1661536/pexels-photo-1661536.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Mental stimulation', 'Natural behaviors', 'Durable materials', 'Easy to refill'],
    inStock: true
  },
  {
    id: '65',
    name: 'Bird Bath',
    category: 'birds',
    price: 12.99,
    description: 'Hanging bird bath for cage hygiene and entertainment.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Easy hanging design', 'Easy to clean', 'Promotes hygiene', 'Durable plastic'],
    inStock: true
  },
  {
    id: '66',
    name: 'Bird Carrier - Travel',
    category: 'birds',
    price: 45.99,
    description: 'Secure travel carrier with ventilation and comfortable interior.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Secure latches', 'Ventilation holes', 'Comfortable interior', 'Easy carrying'],
    inStock: true
  },
  {
    id: '67',
    name: 'Bird Seed - Canary Mix',
    category: 'birds',
    price: 16.99,
    description: 'Premium seed mix specifically formulated for canaries and finches.',
    image: 'https://images.pexels.com/photos/1661536/pexels-photo-1661536.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Canary specific', 'High quality seeds', 'Vitamin enriched', 'Fresh ingredients'],
    inStock: true
  },
  {
    id: '68',
    name: 'Bird Swing',
    category: 'birds',
    price: 9.99,
    description: 'Natural wood swing for exercise and entertainment.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural wood', 'Exercise promotion', 'Easy installation', 'Safe materials'],
    inStock: true
  },
  {
    id: '69',
    name: 'Bird Nesting Box',
    category: 'birds',
    price: 24.99,
    description: 'Wooden nesting box for breeding birds with removable front panel.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural wood construction', 'Removable panel', 'Proper ventilation', 'Easy mounting'],
    inStock: true
  },
  {
    id: '70',
    name: 'Bird Vitamin Drops',
    category: 'birds',
    price: 11.99,
    description: 'Liquid vitamin supplement to add to drinking water for optimal health.',
    image: 'https://images.pexels.com/photos/1661536/pexels-photo-1661536.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Essential vitamins', 'Easy administration', 'Water soluble', 'Immune support'],
    inStock: true
  },
  {
    id: '71',
    name: 'Bird Ladder',
    category: 'birds',
    price: 8.99,
    description: 'Wooden ladder for climbing exercise and cage enrichment.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural wood', 'Exercise equipment', 'Easy installation', 'Multiple sizes'],
    inStock: true
  },
  {
    id: '72',
    name: 'Bird Millet Spray',
    category: 'birds',
    price: 6.99,
    description: 'Natural millet spray treats for training and bonding.',
    image: 'https://images.pexels.com/photos/1661536/pexels-photo-1661536.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural millet', 'Training treats', 'High energy', 'Birds love it'],
    inStock: true
  },
  {
    id: '73',
    name: 'Bird Cage Cover',
    category: 'birds',
    price: 19.99,
    description: 'Breathable cage cover to provide darkness for proper sleep cycles.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Breathable fabric', 'Sleep promotion', 'Easy to use', 'Machine washable'],
    inStock: true
  },
  {
    id: '74',
    name: 'Bird Cuttlebone',
    category: 'birds',
    price: 4.99,
    description: 'Natural cuttlebone for calcium supplementation and beak maintenance.',
    image: 'https://images.pexels.com/photos/1661536/pexels-photo-1661536.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural calcium source', 'Beak maintenance', 'Easy to attach', 'Essential supplement'],
    inStock: true
  },
  {
    id: '75',
    name: 'Bird Mirror Toy',
    category: 'birds',
    price: 7.99,
    description: 'Safe mirror toy for social interaction and entertainment.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Safe mirror', 'Social interaction', 'Entertainment value', 'Easy attachment'],
    inStock: true
  },
  {
    id: '76',
    name: 'Bird Pellet Food',
    category: 'birds',
    price: 28.99,
    description: 'Complete nutrition pellet food for optimal bird health.',
    image: 'https://images.pexels.com/photos/1661536/pexels-photo-1661536.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Complete nutrition', 'Veterinarian formulated', 'No waste', 'Balanced diet'],
    inStock: true
  },
  {
    id: '77',
    name: 'Bird Rope Perch',
    category: 'birds',
    price: 13.99,
    description: 'Flexible rope perch that can be shaped to fit any cage configuration.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Flexible design', 'Natural cotton', 'Foot exercise', 'Easy installation'],
    inStock: true
  },
  {
    id: '78',
    name: 'Bird Feeder - Tube Style',
    category: 'birds',
    price: 15.99,
    description: 'Tube-style feeder for easy seed dispensing and minimal waste.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Minimal waste', 'Easy refilling', 'Durable construction', 'Multiple perches'],
    inStock: true
  },
  {
    id: '79',
    name: 'Bird Calcium Block',
    category: 'birds',
    price: 5.99,
    description: 'Mineral calcium block for essential nutrition and beak conditioning.',
    image: 'https://images.pexels.com/photos/1661536/pexels-photo-1661536.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Essential minerals', 'Beak conditioning', 'Easy to attach', 'Long lasting'],
    inStock: true
  },
  {
    id: '80',
    name: 'Bird Playground',
    category: 'birds',
    price: 89.99,
    description: 'Multi-level playground with perches, toys, and feeding stations.',
    image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Multi-level design', 'Interactive elements', 'Exercise promotion', 'Easy assembly'],
    inStock: true
  },

  // Fish Products (15 items)
  {
    id: '81',
    name: 'Aquarium Filter System',
    category: 'fish',
    price: 67.99,
    description: 'Advanced filtration system for freshwater aquariums up to 75 gallons.',
    image: 'https://images.pexels.com/photos/1334992/pexels-photo-1334992.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['3-stage filtration', 'Quiet operation', 'Easy maintenance', 'Adjustable flow rate'],
    inStock: true
  },
  {
    id: '82',
    name: 'Tropical Fish Food Flakes',
    category: 'fish',
    price: 14.99,
    description: 'High-quality flake food for tropical fish with enhanced color and nutrition.',
    image: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Color enhancing', 'Easy to digest', 'Vitamin enriched', 'Suitable for all tropical fish'],
    inStock: true
  },
  {
    id: '83',
    name: 'Aquarium Heater - 100W',
    category: 'fish',
    price: 24.99,
    description: 'Submersible aquarium heater with adjustable temperature control.',
    image: 'https://images.pexels.com/photos/1334992/pexels-photo-1334992.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Adjustable temperature', 'Submersible design', 'Safety shut-off', 'Easy installation'],
    inStock: true
  },
  {
    id: '84',
    name: 'LED Aquarium Light',
    category: 'fish',
    price: 45.99,
    description: 'Full-spectrum LED lighting system for planted aquariums.',
    image: 'https://images.pexels.com/photos/1334992/pexels-photo-1334992.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Full spectrum LED', 'Plant growth support', 'Energy efficient', 'Timer function'],
    inStock: true
  },
  {
    id: '85',
    name: 'Aquarium Gravel - Natural',
    category: 'fish',
    price: 18.99,
    description: 'Natural aquarium gravel for freshwater tanks, pre-washed and ready to use.',
    image: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Pre-washed', 'Natural colors', 'pH neutral', 'Safe for all fish'],
    inStock: true
  },
  {
    id: '86',
    name: 'Fish Tank Decorations',
    category: 'fish',
    price: 32.99,
    description: 'Set of realistic aquarium decorations including plants and ornaments.',
    image: 'https://images.pexels.com/photos/1334992/pexels-photo-1334992.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Realistic design', 'Safe materials', 'Easy to clean', 'Natural appearance'],
    inStock: true
  },
  {
    id: '87',
    name: 'Water Test Kit',
    category: 'fish',
    price: 19.99,
    description: 'Complete water testing kit for monitoring aquarium water quality.',
    image: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Multiple parameters', 'Easy to use', 'Accurate results', 'Essential for fish health'],
    inStock: true
  },
  {
    id: '88',
    name: 'Aquarium Air Pump',
    category: 'fish',
    price: 22.99,
    description: 'Quiet air pump with adjustable flow for proper oxygenation.',
    image: 'https://images.pexels.com/photos/1334992/pexels-photo-1334992.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Quiet operation', 'Adjustable flow', 'Reliable performance', 'Energy efficient'],
    inStock: true
  },
  {
    id: '89',
    name: 'Fish Net Set',
    category: 'fish',
    price: 12.99,
    description: 'Set of fine mesh nets in various sizes for safe fish handling.',
    image: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Multiple sizes', 'Fine mesh', 'Soft edges', 'Safe handling'],
    inStock: true
  },
  {
    id: '90',
    name: 'Aquarium Vacuum Cleaner',
    category: 'fish',
    price: 28.99,
    description: 'Gravel vacuum for easy aquarium maintenance and water changes.',
    image: 'https://images.pexels.com/photos/1334992/pexels-photo-1334992.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Easy maintenance', 'Gravel cleaning', 'Water changes', 'Simple operation'],
    inStock: true
  },
  {
    id: '91',
    name: 'Betta Fish Food',
    category: 'fish',
    price: 8.99,
    description: 'Specialized pellet food formulated specifically for betta fish.',
    image: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Betta specific', 'High protein', 'Color enhancing', 'Floating pellets'],
    inStock: true
  },
  {
    id: '92',
    name: 'Aquarium Background',
    category: 'fish',
    price: 15.99,
    description: 'Adhesive aquarium background with realistic underwater scene.',
    image: 'https://images.pexels.com/photos/1334992/pexels-photo-1334992.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Realistic design', 'Easy application', 'Waterproof', 'Various sizes'],
    inStock: true
  },
  {
    id: '93',
    name: 'Fish Tank Thermometer',
    category: 'fish',
    price: 6.99,
    description: 'Digital thermometer for accurate temperature monitoring.',
    image: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Digital display', 'Accurate readings', 'Easy to read', 'Suction cup mount'],
    inStock: true
  },
  {
    id: '94',
    name: 'Aquarium Plant Fertilizer',
    category: 'fish',
    price: 16.99,
    description: 'Liquid fertilizer for healthy aquatic plant growth.',
    image: 'https://images.pexels.com/photos/1334992/pexels-photo-1334992.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Plant nutrition', 'Easy dosing', 'Safe for fish', 'Promotes growth'],
    inStock: true
  },
  {
    id: '95',
    name: 'Automatic Fish Feeder',
    category: 'fish',
    price: 39.99,
    description: 'Programmable automatic feeder for consistent feeding schedules.',
    image: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Programmable timer', 'Portion control', 'Battery operated', 'Vacation feeding'],
    inStock: true
  },

  // Small Animals Products (15 items)
  {
    id: '96',
    name: 'Rabbit Hutch - Weather Resistant',
    category: 'small-animals',
    price: 159.99,
    description: 'Durable outdoor rabbit hutch with weather-resistant coating and easy access.',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Weather resistant', 'Easy assembly', 'Multiple compartments', 'Secure latches'],
    inStock: true
  },
  {
    id: '97',
    name: 'Guinea Pig Food Pellets',
    category: 'small-animals',
    price: 19.99,
    description: 'Vitamin C enriched pellets specifically formulated for guinea pigs.',
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Vitamin C enriched', 'High fiber content', 'Natural ingredients', 'Supports dental health'],
    inStock: true
  },
  {
    id: '98',
    name: 'Hamster Wheel - Silent',
    category: 'small-animals',
    price: 24.99,
    description: 'Silent running wheel designed for hamsters and small rodents.',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Silent operation', 'Safe running surface', 'Easy to clean', 'Stable base'],
    inStock: true
  },
  {
    id: '99',
    name: 'Small Animal Bedding',
    category: 'small-animals',
    price: 14.99,
    description: 'Absorbent paper-based bedding for small animals, dust-free and comfortable.',
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Dust-free', 'Super absorbent', 'Odor control', 'Biodegradable'],
    inStock: true
  },
  {
    id: '100',
    name: 'Rabbit Hay - Timothy',
    category: 'small-animals',
    price: 22.99,
    description: 'Premium timothy hay for rabbits and other herbivorous small animals.',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['High fiber', 'Fresh and green', 'Supports dental health', 'Natural nutrition'],
    inStock: true
  },
  {
    id: '101',
    name: 'Small Animal Water Bottle',
    category: 'small-animals',
    price: 8.99,
    description: 'Leak-proof water bottle with metal spout for clean, fresh water.',
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Leak-proof design', 'Metal spout', 'Easy refilling', 'Cage mounting'],
    inStock: true
  },
  {
    id: '102',
    name: 'Ferret Harness and Leash',
    category: 'small-animals',
    price: 16.99,
    description: 'Adjustable harness and leash set designed specifically for ferrets.',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Ferret specific design', 'Adjustable fit', 'Escape-proof', 'Comfortable padding'],
    inStock: true
  },
  {
    id: '103',
    name: 'Chinchilla Dust Bath',
    category: 'small-animals',
    price: 12.99,
    description: 'Special dust for chinchilla bathing to maintain healthy fur.',
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Ultra-fine dust', 'Fur health', 'Natural cleaning', 'Easy to use'],
    inStock: true
  },
  {
    id: '104',
    name: 'Small Animal Tunnel System',
    category: 'small-animals',
    price: 34.99,
    description: 'Modular tunnel system for enrichment and exercise.',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Modular design', 'Easy assembly', 'Enrichment value', 'Durable construction'],
    inStock: true
  },
  {
    id: '105',
    name: 'Rabbit Grooming Brush',
    category: 'small-animals',
    price: 11.99,
    description: 'Gentle grooming brush designed for rabbits and long-haired small animals.',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Gentle bristles', 'Ergonomic handle', 'Reduces shedding', 'Bonding activity'],
    inStock: true
  },
  {
    id: '106',
    name: 'Small Animal Treats - Mixed',
    category: 'small-animals',
    price: 9.99,
    description: 'Variety pack of healthy treats for rabbits, guinea pigs, and hamsters.',
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Variety pack', 'Natural ingredients', 'Training rewards', 'Healthy snacks'],
    inStock: true
  },
  {
    id: '107',
    name: 'Hedgehog Food',
    category: 'small-animals',
    price: 18.99,
    description: 'Specialized nutrition for hedgehogs with high protein content.',
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['High protein', 'Hedgehog specific', 'Balanced nutrition', 'Kibble size appropriate'],
    inStock: true
  },
  {
    id: '108',
    name: 'Small Animal Hideout',
    category: 'small-animals',
    price: 15.99,
    description: 'Wooden hideout house for small animals to feel secure and comfortable.',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Natural wood', 'Security and comfort', 'Easy to clean', 'Multiple entrances'],
    inStock: true
  },
  {
    id: '109',
    name: 'Small Animal Vitamin Drops',
    category: 'small-animals',
    price: 13.99,
    description: 'Liquid vitamin supplement for small animals to ensure proper nutrition.',
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Essential vitamins', 'Easy administration', 'Immune support', 'Water soluble'],
    inStock: true
  },
  {
    id: '110',
    name: 'Exercise Ball - Large',
    category: 'small-animals',
    price: 19.99,
    description: 'Large exercise ball for hamsters and gerbils to explore safely.',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Safe exploration', 'Ventilation holes', 'Easy assembly', 'Exercise promotion'],
    inStock: true
  }

  // Reptiles & Exotic Animals (25 items)
  {
    id: '111',
    name: 'Snake Terrarium Heating Pad',
    category: 'reptiles',
    price: 45.99,
    description: 'Under-tank heating pad specifically designed for snake terrariums with precise temperature control.',
    image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Precise temperature control', 'Under-tank design', 'Energy efficient', 'Safe for reptiles'],
    inStock: true
  },
  {
    id: '112',
    name: 'Python Feeding Tongs',
    category: 'reptiles',
    price: 18.99,
    description: 'Long stainless steel feeding tongs for safe feeding of large snakes and reptiles.',
    image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Stainless steel construction', 'Safe feeding distance', 'Easy grip handle', 'Dishwasher safe'],
    inStock: true
  },
  {
    id: '113',
    name: 'Reptile UV Light System',
    category: 'reptiles',
    price: 89.99,
    description: 'Full-spectrum UV lighting system essential for reptile health and vitamin D synthesis.',
    image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Full-spectrum UV', 'Vitamin D synthesis', 'Timer function', 'Long bulb life'],
    inStock: true
  },
  {
    id: '114',
    name: 'Snake Substrate - Aspen Shavings',
    category: 'reptiles',
    price: 24.99,
    description: 'Natural aspen wood shavings perfect for snake enclosures, dust-free and absorbent.',
    image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Dust-free', 'Natural wood', 'Highly absorbent', 'Easy to clean'],
    inStock: true
  },
  {
    id: '115',
    name: 'Crocodile Pool Filtration System',
    category: 'exotic-animals',
    price: 899.99,
    description: 'Industrial-grade pool filtration system designed for large aquatic reptile enclosures.',
    image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Industrial grade', 'High flow rate', 'Multi-stage filtration', 'Easy maintenance'],
    inStock: true
  },

  // Livestock (20 items)
  {
    id: '116',
    name: 'Horse Grooming Kit Professional',
    category: 'livestock',
    price: 129.99,
    description: 'Complete professional grooming kit for horses including brushes, combs, and hoof picks.',
    image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Professional quality', 'Complete set', 'Durable materials', 'Carrying case included'],
    inStock: true
  },
  {
    id: '117',
    name: 'Pig Feed - High Protein',
    category: 'livestock',
    price: 45.99,
    description: 'Nutritionally balanced high-protein feed for growing pigs and swine.',
    image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['High protein content', 'Balanced nutrition', 'Growth promotion', 'Digestible formula'],
    inStock: true
  },
  {
    id: '118',
    name: 'Donkey Halter - Adjustable',
    category: 'livestock',
    price: 34.99,
    description: 'Heavy-duty adjustable halter designed specifically for donkeys and mules.',
    image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Heavy-duty construction', 'Adjustable sizing', 'Comfortable padding', 'Weather resistant'],
    inStock: true
  },
  {
    id: '119',
    name: 'Camel Vitamin Supplement',
    category: 'livestock',
    price: 89.99,
    description: 'Specialized vitamin and mineral supplement formulated for camels in various climates.',
    image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Climate adapted', 'Essential vitamins', 'Mineral balance', 'Desert conditions'],
    inStock: true
  },
  {
    id: '120',
    name: 'Horse Hoof Care Kit',
    category: 'livestock',
    price: 67.99,
    description: 'Complete hoof care kit with picks, brushes, and therapeutic treatments.',
    image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Complete hoof care', 'Therapeutic treatments', 'Professional tools', 'Preventive care'],
    inStock: true
  },

  // Exotic Animals (15 items)
  {
    id: '121',
    name: 'Bear Enrichment Puzzle Feeder',
    category: 'exotic-animals',
    price: 299.99,
    description: 'Heavy-duty puzzle feeder designed for bears to promote natural foraging behaviors.',
    image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Heavy-duty construction', 'Mental stimulation', 'Natural behaviors', 'Safety designed'],
    inStock: true
  },
  {
    id: '122',
    name: 'Panda Bamboo Nutrition Supplement',
    category: 'exotic-animals',
    price: 199.99,
    description: 'Specialized nutritional supplement to enhance bamboo diet for pandas in captivity.',
    image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Bamboo enhancement', 'Captivity nutrition', 'Digestive support', 'Zoo approved'],
    inStock: true
  },
  {
    id: '123',
    name: 'Liger Exercise Equipment',
    category: 'exotic-animals',
    price: 1299.99,
    description: 'Specialized exercise equipment designed for large hybrid cats like ligers.',
    image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Large cat design', 'Exercise promotion', 'Safety features', 'Durable construction'],
    inStock: true
  },
  {
    id: '124',
    name: 'Crocodile Dental Care Tools',
    category: 'exotic-animals',
    price: 449.99,
    description: 'Professional dental care tools designed for crocodile and alligator oral health.',
    image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Professional grade', 'Safety designed', 'Oral health', 'Veterinary approved'],
    inStock: true
  },
  {
    id: '125',
    name: 'Bear Habitat Enrichment Kit',
    category: 'exotic-animals',
    price: 599.99,
    description: 'Complete habitat enrichment kit for bears including climbing structures and toys.',
    image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Complete enrichment', 'Climbing structures', 'Mental stimulation', 'Weather resistant'],
    inStock: true
  },

  // Vaccines (15 items)
  {
    id: '126',
    name: 'Canine DHPP Vaccine',
    category: 'vaccines',
    price: 45.99,
    description: 'Core vaccine protecting against Distemper, Hepatitis, Parvovirus, and Parainfluenza.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Core protection', 'Multi-disease coverage', 'Veterinary grade', 'Cold chain maintained'],
    inStock: true
  },
  {
    id: '127',
    name: 'Feline FVRCP Vaccine',
    category: 'vaccines',
    price: 42.99,
    description: 'Essential vaccine for cats against Feline Viral Rhinotracheitis, Calicivirus, and Panleukopenia.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Essential protection', 'Respiratory coverage', 'Proven efficacy', 'Safe formulation'],
    inStock: true
  },
  {
    id: '128',
    name: 'Rabies Vaccine - Multi-Species',
    category: 'vaccines',
    price: 38.99,
    description: 'Broad-spectrum rabies vaccine approved for dogs, cats, and other mammals.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Multi-species approved', 'Long-lasting immunity', 'WHO standards', 'Global protection'],
    inStock: true
  },
  {
    id: '129',
    name: 'Equine Influenza Vaccine',
    category: 'vaccines',
    price: 67.99,
    description: 'Specialized vaccine protecting horses against equine influenza strains.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Equine specific', 'Strain coverage', 'Performance protection', 'Competition approved'],
    inStock: true
  },
  {
    id: '130',
    name: 'Avian Polyomavirus Vaccine',
    category: 'vaccines',
    price: 89.99,
    description: 'Specialized vaccine for birds against polyomavirus, especially important for young birds.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Avian specific', 'Young bird protection', 'Breeding programs', 'Veterinary recommended'],
    inStock: true
  },

  // Lab Products (15 items)
  {
    id: '131',
    name: 'Advanced Probiotic Formula',
    category: 'lab-products',
    price: 79.99,
    description: 'Laboratory-developed multi-strain probiotic formula for optimal digestive health.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Multi-strain formula', 'Lab developed', 'Digestive health', 'Clinically tested'],
    inStock: true
  },
  {
    id: '132',
    name: 'Stem Cell Therapy Kit',
    category: 'lab-products',
    price: 1299.99,
    description: 'Cutting-edge stem cell therapy kit for regenerative veterinary medicine.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Regenerative medicine', 'Cutting-edge technology', 'Veterinary grade', 'Research backed'],
    inStock: true
  },
  {
    id: '133',
    name: 'Gene Therapy Vector',
    category: 'lab-products',
    price: 2499.99,
    description: 'Advanced gene therapy vector for treating genetic disorders in animals.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Gene therapy', 'Genetic disorders', 'Advanced research', 'Precision medicine'],
    inStock: true
  },
  {
    id: '134',
    name: 'Immunomodulator Compound',
    category: 'lab-products',
    price: 189.99,
    description: 'Laboratory-synthesized immunomodulator for enhancing immune system function.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Immune enhancement', 'Lab synthesized', 'Targeted therapy', 'Clinical grade'],
    inStock: true
  },
  {
    id: '135',
    name: 'Biomarker Detection Kit',
    category: 'lab-products',
    price: 299.99,
    description: 'Advanced diagnostic kit for detecting disease biomarkers in animal samples.',
    image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Disease detection', 'Biomarker analysis', 'Early diagnosis', 'High accuracy'],
    inStock: true
  }
];