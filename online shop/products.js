const categories = [
  {
    id: 1,
    name: 'Electronics',
    products: [
      { name: 'Smartphone X200', id: 1, price: '$699', description: 'A high-end smartphone with OLED display.' },
      { name: 'Bluetooth Headphones', id: 2, price: '$129', description: 'Wireless headphones with noise cancellation.' },
      { name: '4K Monitor', id: 3, price: '$349', description: 'Ultra HD 27-inch monitor for stunning visuals.' },
      { name: 'Gaming Mouse', id: 4, price: '$59', description: 'Ergonomic mouse with programmable buttons.' },
      { name: 'Laptop Pro 15"', id: 5, price: '$1199', description: 'Powerful laptop for work and gaming.' },
      { name: 'Wireless Charger', id: 6, price: '$39', description: 'Fast charging pad for mobile devices.' },
      { name: 'Smartwatch 5', id: 7, price: '$249', description: 'Fitness-focused smartwatch with GPS.' },
      { name: 'External SSD 1TB', id: 8, price: '$149', description: 'High-speed storage drive for backups.' },
      { name: 'Action Camera 4K', id: 9, price: '$299', description: 'Rugged 4K camera for outdoor adventures.' },
      { name: 'Portable Speaker', id: 10, price: '$89', description: 'Compact speaker with deep bass and Bluetooth.' }
    ]
  },
  {
    id: 2,
    name: 'Home',
    products: [
      { name: 'Air Purifier', id: 11, price: '$199', description: 'Cleans air from allergens and dust.' },
      { name: 'Robot Vacuum', id: 12, price: '$299', description: 'Autonomous cleaning with smart mapping.' },
      { name: 'Smart Thermostat', id: 13, price: '$179', description: 'Control your home climate remotely.' },
      { name: 'LED Floor Lamp', id: 14, price: '$89', description: 'Stylish lamp with adjustable brightness.' },
      { name: 'Blender Pro', id: 15, price: '$99', description: 'High-powered blender for smoothies and more.' },
      { name: 'Electric Kettle', id: 16, price: '$49', description: 'Fast-boiling stainless steel kettle.' },
      { name: 'Pressure Cooker', id: 17, price: '$119', description: 'Multi-function cooker for quick meals.' },
      { name: 'Coffee Grinder', id: 18, price: '$69', description: 'Precision grinder for fresh coffee beans.' },
      { name: 'Cordless Drill', id: 19, price: '$89', description: 'Powerful tool for home projects.' },
      { name: 'Wall Clock Modern', id: 20, price: '$39', description: 'Minimalist design wall clock.' }
    ]
  },
  {
    id: 3,
    name: 'Fashion',
    products: [
      { name: 'Leather Wallet', id: 21, price: '$59', description: 'Genuine leather wallet with RFID protection.' },
      { name: 'Sunglasses Classic', id: 22, price: '$79', description: 'UV-protected polarized sunglasses.' },
      { name: 'Denim Jacket', id: 23, price: '$99', description: 'Vintage style denim jacket.' },
      { name: 'Running Shoes', id: 24, price: '$129', description: 'Comfortable shoes for daily runs.' },
      { name: 'Wristwatch Quartz', id: 25, price: '$149', description: 'Elegant watch with stainless steel band.' },
      { name: 'Handbag Trendy', id: 26, price: '$89', description: 'Fashionable handbag for everyday use.' },
      { name: 'Leather Belt', id: 27, price: '$49', description: 'Durable belt with metal buckle.' },
      { name: 'T-Shirt Graphic', id: 28, price: '$29', description: 'Cotton t-shirt with cool graphics.' },
      { name: 'Sneakers Casual', id: 29, price: '$99', description: 'Versatile sneakers for all outfits.' },
      { name: 'Scarf Wool', id: 30, price: '$39', description: 'Warm wool scarf for winter.' }
    ]
  },
  {
    id: 4,
    name: 'Sports',
    products: [
      { name: 'Yoga Mat', id: 31, price: '$49', description: 'Non-slip mat for yoga and workouts.' },
      { name: 'Dumbbell Set', id: 32, price: '$79', description: 'Adjustable dumbbells for home workouts.' },
      { name: 'Tennis Racket', id: 33, price: '$129', description: 'Lightweight racket with grip comfort.' },
      { name: 'Cycling Helmet', id: 34, price: '$59', description: 'Safety helmet with ventilation.' },
      { name: 'Resistance Bands', id: 35, price: '$39', description: 'Set of resistance bands for strength training.' },
      { name: 'Running Shorts', id: 36, price: '$29', description: 'Breathable shorts with zipper pocket.' },
      { name: 'Hiking Backpack', id: 37, price: '$109', description: 'Durable backpack with hydration system.' },
      { name: 'Fitness Tracker', id: 38, price: '$149', description: 'Track your steps, heart rate, and more.' },
      { name: 'Foam Roller', id: 39, price: '$35', description: 'Great for muscle recovery and massage.' },
      { name: 'Boxing Gloves', id: 40, price: '$89', description: 'Training gloves with wrist support.' }
    ]
  },
  {
    id: 5,
    name: 'Books',
    products: [
      { name: 'The Great Novel', id: 41, price: '$19', description: 'Bestselling fiction with a gripping plot.' },
      { name: 'History of Time', id: 42, price: '$25', description: 'Explore the universe and time itself.' },
      { name: 'Productivity Hacks', id: 43, price: '$22', description: 'Tips to stay organized and efficient.' },
      { name: 'Cooking Made Easy', id: 44, price: '$29', description: 'Simple recipes for beginners.' },
      { name: 'Mindfulness Guide', id: 45, price: '$18', description: 'Techniques to reduce stress and live in the moment.' },
      { name: 'Travel Diaries', id: 46, price: '$24', description: 'Inspiring travel stories from around the world.' },
      { name: 'Photography Basics', id: 47, price: '$27', description: 'Learn how to take amazing photos.' },
      { name: 'Fantasy Epic Vol.1', id: 48, price: '$21', description: 'A world of magic and adventure awaits.' },
      { name: 'Science Facts', id: 49, price: '$23', description: 'Fun and educational science facts for all ages.' },
      { name: 'Motivation Daily', id: 50, price: '$17', description: 'Daily doses of inspiration and positivity.' }
    ]
  }
];