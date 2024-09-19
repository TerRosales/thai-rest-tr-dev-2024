export const addOns = [
  {
    name: "Burmese Tea Leaf Salad",
    price: "$3.99",
    description:
      "A unique Burmese salad with fermented tea leaves, nuts, and tomatoes.",
  },
  {
    name: "Lumpia",
    price: "$2.99",
    description:
      "Filipino crispy spring rolls filled with savory meat or vegetables.",
  },
  {
    name: "Thai Papaya Salad (Som Tum)",
    price: "$3.49",
    description:
      "A refreshing Thai salad with shredded green papaya, peanuts, and spicy lime dressing.",
  },
  {
    name: "Chinese BBQ Pork Skewers",
    price: "$3.99",
    description:
      "Grilled pork skewers marinated in a savory-sweet Chinese BBQ sauce.",
  },
  {
    name: "Thai Chicken Satay",
    price: "$4.49",
    description:
      "Grilled marinated chicken skewers served with a rich peanut dipping sauce.",
  },
  {
    name: "Pork Siomai",
    price: "$2.99",
    description:
      "Steamed Filipino-Chinese pork dumplings served with soy sauce and calamansi.",
  },
  {
    name: "Chinese Spring Rolls",
    price: "$3.99",
    description:
      "Crispy fried rolls filled with a mix of vegetables and sometimes meat, served with dipping sauce.",
  },
  {
    name: "Burmese Samusas",
    price: "$3.99",
    description:
      "Deep-fried savory pastry pockets stuffed with spiced potatoes, lentils, and peas.",
  },
  {
    name: "Thai Fish Cakes",
    price: "$4.29",
    description:
      "Spicy Thai fish cakes made from fish, herbs, and spices, served with a cucumber relish.",
  },
  {
    name: "Chinese Fried Dumplings",
    price: "$3.99",
    description:
      "Pan-fried dumplings filled with pork and vegetables, crispy on the outside and soft inside.",
  },
];

export const seedingData = [
  {
    name: "Sisig",
    type: "Main Dish",
    country_origin: "Philippines",
    ingredients: ["Pork", "Onions", "Chili Peppers", "Egg", "Soy Sauce"],
    allergens: ["Egg", "Soy"],
    heat_level: "High",
    meat_selection: ["Pork", "Chicken", "Beef"],
    veggie_selection: [],
    description:
      "A sizzling dish made of pork parts seasoned with vinegar and chili.",
  },
  {
    name: "Siopao",
    type: "Appetizer",
    country_origin: "Philippines",
    ingredients: ["Pork", "Flour", "Sugar", "Soy Sauce"],
    allergens: ["Soy", "Gluten"],
    heat_level: "None",
    meat_selection: ["Pork", "Chicken"],
    veggie_selection: [],
    description: "A steamed bun filled with sweet pork or chicken.",
  },
  {
    name: "Pancit",
    type: "Main Dish",
    country_origin: "Philippines",
    ingredients: ["Rice Noodles", "Soy Sauce", "Vegetables", "Chicken"],
    allergens: ["Soy", "Gluten"],
    heat_level: "Low",
    meat_selection: ["Chicken", "Pork", "Beef", "Seafood"],
    veggie_selection: ["Carrots", "Cabbage"],
    description:
      "A stir-fried noodle dish with mixed vegetables and meat options.",
  },
  {
    name: "Sinigang",
    type: "Main Dish",
    country_origin: "Philippines",
    ingredients: ["Pork", "Tamarind", "Tomatoes", "Radish"],
    allergens: [],
    heat_level: "Medium",
    meat_selection: ["Pork", "Chicken", "Beef"],
    veggie_selection: ["Radish", "Okra", "Kangkong"],
    description:
      "A sour soup made from tamarind and vegetables, served with your choice of meat.",
  },
  {
    name: "Red Curry",
    type: "Main Dish",
    country_origin: "Thailand",
    ingredients: ["Coconut Milk", "Red Curry Paste", "Chicken", "Basil"],
    allergens: ["Coconut"],
    heat_level: "High",
    meat_selection: ["Chicken", "Pork", "Beef", "Seafood"],
    veggie_selection: [],
    description:
      "A spicy curry dish made with coconut milk and a choice of protein.",
  },
  {
    name: "Adobo",
    type: "Main Dish",
    country_origin: "Philippines",
    ingredients: ["Chicken", "Soy Sauce", "Vinegar", "Garlic", "Bay Leaves"],
    allergens: ["Soy"],
    heat_level: "Low",
    meat_selection: ["Chicken", "Pork", "Beef"],
    veggie_selection: [],
    description:
      "A popular dish made by marinating meat in vinegar and soy sauce.",
  },
  {
    name: "Pork Chop",
    type: "Main Dish",
    country_origin: "Western",
    ingredients: ["Pork", "Garlic", "Soy Sauce", "Pepper"],
    allergens: ["Soy"],
    heat_level: "Low",
    meat_selection: ["Pork", "Chicken", "Beef"],
    veggie_selection: [],
    description:
      "A savory, tender pork chop or other meat marinated in soy and garlic.",
  },
  {
    name: "Chicken Leg BBQ",
    type: "Main Dish",
    country_origin: "Philippines",
    ingredients: ["Chicken", "Barbecue Sauce", "Soy Sauce", "Sugar"],
    allergens: ["Soy"],
    heat_level: "Medium",
    meat_selection: ["Chicken", "Pork"],
    veggie_selection: [],
    description:
      "Grilled chicken legs or pork, marinated in Filipino barbecue sauce.",
  },
  {
    name: "Tom Yum",
    type: "Soup",
    country_origin: "Thailand",
    ingredients: ["Shrimp", "Lemongrass", "Lime Leaves", "Chili Peppers"],
    allergens: ["Shellfish"],
    heat_level: "High",
    meat_selection: ["Shrimp", "Seafood", "Chicken"],
    veggie_selection: [],
    description: "A hot and sour Thai soup with shrimp or other meat options.",
  },
  {
    name: "Som Tum (Papaya Salad)",
    type: "Appetizer",
    country_origin: "Thailand",
    ingredients: ["Green Papaya", "Chili", "Fish Sauce", "Peanuts"],
    allergens: ["Peanuts", "Fish Sauce"],
    heat_level: "High",
    meat_selection: [],
    veggie_selection: ["Papaya"],
    description: "A spicy, tangy salad made with shredded green papaya.",
  },
  {
    name: "Sopas",
    type: "Soup",
    country_origin: "Philippines",
    ingredients: ["Macaroni", "Chicken", "Carrots", "Milk"],
    allergens: ["Dairy", "Gluten"],
    heat_level: "Low",
    meat_selection: ["Chicken", "Pork", "Beef"],
    veggie_selection: ["Carrots", "Cabbage"],
    description:
      "A creamy soup made with macaroni, vegetables, and your choice of meat.",
  },
  {
    name: "Shrimp Tempura",
    type: "Appetizer",
    country_origin: "Japan",
    ingredients: ["Shrimp", "Flour", "Egg", "Panko"],
    allergens: ["Shellfish", "Gluten", "Egg"],
    heat_level: "None",
    meat_selection: ["Shrimp", "Seafood"],
    veggie_selection: [],
    description: "Crispy fried shrimp or seafood, coated in light batter.",
  },
  {
    name: "Quail Egg Fried",
    type: "Appetizer",
    country_origin: "Philippines",
    ingredients: ["Quail Eggs", "Flour", "Salt", "Pepper"],
    allergens: ["Egg", "Gluten"],
    heat_level: "Low",
    meat_selection: [],
    veggie_selection: [],
    description: "Battered and fried quail eggs served with dipping sauce.",
  },
  {
    name: "Pinakbet",
    type: "Main Dish",
    country_origin: "Philippines",
    ingredients: ["Eggplant", "Bitter Melon", "Squash", "Shrimp Paste"],
    allergens: ["Shellfish"],
    heat_level: "Medium",
    meat_selection: ["Shrimp", "Seafood"],
    veggie_selection: ["Eggplant", "Bitter Melon"],
    description:
      "A vegetable stew seasoned with shrimp paste, served with or without seafood.",
  },
  {
    name: "Pad Thai",
    type: "Main Dish",
    country_origin: "Thailand",
    ingredients: ["Rice Noodles", "Shrimp", "Peanuts", "Egg", "Tamarind"],
    allergens: ["Peanuts", "Shellfish", "Egg"],
    heat_level: "Low",
    meat_selection: ["Shrimp", "Chicken", "Beef", "Seafood"],
    veggie_selection: ["Bean Sprouts"],
    description:
      "Stir-fried noodles with your choice of protein and a tangy sauce.",
  },
  {
    name: "Pad See Ew",
    type: "Main Dish",
    country_origin: "Thailand",
    ingredients: ["Wide Rice Noodles", "Soy Sauce", "Chicken", "Broccoli"],
    allergens: ["Soy", "Gluten"],
    heat_level: "Low",
    meat_selection: ["Chicken", "Pork", "Beef", "Seafood"],
    veggie_selection: ["Broccoli"],
    description:
      "Stir-fried wide noodles with soy sauce, vegetables, and meat options.",
  },
  {
    name: "Nam Tok",
    type: "Appetizer",
    country_origin: "Thailand",
    ingredients: ["Beef", "Mint", "Lime Juice", "Chili Flakes"],
    allergens: [],
    heat_level: "High",
    meat_selection: ["Beef", "Pork"],
    veggie_selection: ["Mint"],
    description:
      "A spicy beef salad with fresh herbs and lime juice, with the option for pork.",
  },
  {
    name: "Miki",
    type: "Soup",
    country_origin: "Philippines",
    ingredients: ["Egg Noodles", "Chicken", "Garlic", "Ginger"],
    allergens: ["Egg", "Gluten"],
    heat_level: "Low",
    meat_selection: ["Chicken", "Pork", "Beef"],
    veggie_selection: ["Carrots", "Onions"],
    description:
      "A comforting noodle soup made with egg noodles and meat options.",
  },
  {
    name: "Menudo",
    type: "Main Dish",
    country_origin: "Philippines",
    ingredients: ["Pork", "Tomatoes", "Carrots", "Potatoes"],
    allergens: [],
    heat_level: "Low",
    meat_selection: ["Pork", "Chicken", "Beef"],
    veggie_selection: ["Carrots", "Potatoes"],
    description: "A tomato-based stew with pork or other meat and vegetables.",
  },
  {
    name: "Macaroni Salad",
    type: "Appetizer",
    country_origin: "Philippines",
    ingredients: ["Macaroni", "Mayonnaise", "Chicken", "Carrots"],
    allergens: ["Dairy", "Gluten"],
    heat_level: "None",
    meat_selection: ["Chicken"],
    veggie_selection: ["Carrots", "Raisins"],
    description: "A cold pasta salad with mayonnaise, chicken, and vegetables.",
  },
  {
    name: "Spring Rolls",
    type: "Appetizer",
    country_origin: "China",
    ingredients: ["Rice Paper", "Vegetables", "Shrimp"],
    allergens: ["Shellfish"],
    heat_level: "None",
    meat_selection: ["Shrimp", "Chicken"],
    veggie_selection: ["Lettuce", "Carrots"],
    description:
      "A fresh appetizer with shrimp and vegetables wrapped in rice paper.",
  },
  {
    name: "Egg Rolls",
    type: "Appetizer",
    country_origin: "China",
    ingredients: ["Egg Roll Wrappers", "Pork", "Cabbage", "Carrots"],
    allergens: ["Egg", "Gluten"],
    heat_level: "None",
    meat_selection: ["Pork", "Chicken", "Beef"],
    veggie_selection: ["Cabbage", "Carrots"],
    description:
      "Crispy fried rolls filled with vegetables and a choice of meat.",
  },
  {
    name: "Som Tum Thai",
    type: "Salad",
    country_origin: "Thailand",
    ingredients: ["Green Papaya", "Tomato", "Peanuts", "Fish Sauce"],
    allergens: ["Peanuts", "Fish Sauce"],
    heat_level: "High",
    meat_selection: [],
    veggie_selection: ["Papaya", "Tomato"],
    description:
      "A spicy, tangy salad made from green papaya and fresh vegetables.",
  },
  {
    name: "Pork Satay",
    type: "Appetizer",
    country_origin: "Thailand",
    ingredients: ["Pork", "Peanut Sauce", "Coconut Milk"],
    allergens: ["Peanuts", "Coconut"],
    heat_level: "Low",
    meat_selection: ["Pork", "Chicken", "Beef"],
    veggie_selection: [],
    description:
      "Grilled skewers of marinated pork served with a rich peanut sauce.",
  },
  {
    name: "Lumpiang Shanghai",
    type: "Appetizer",
    country_origin: "Philippines",
    ingredients: ["Ground Pork", "Spring Roll Wrapper", "Carrots", "Onions"],
    allergens: ["Egg", "Gluten"],
    heat_level: "None",
    meat_selection: ["Pork", "Chicken", "Beef"],
    veggie_selection: ["Carrots", "Onions"],
    description:
      "Crispy fried spring rolls filled with ground meat and vegetables.",
  },
  {
    name: "Khao Soi",
    type: "Soup",
    country_origin: "Thailand",
    ingredients: ["Coconut Milk", "Curry Paste", "Chicken", "Noodles"],
    allergens: ["Coconut", "Gluten"],
    heat_level: "High",
    meat_selection: ["Chicken", "Beef", "Seafood"],
    veggie_selection: ["Cabbage", "Onions"],
    description: "A rich coconut curry soup with crispy and soft noodles.",
  },
  {
    name: "Beef Rendang",
    type: "Main Dish",
    country_origin: "Indonesia",
    ingredients: ["Beef", "Coconut Milk", "Chili", "Garlic"],
    allergens: ["Coconut"],
    heat_level: "High",
    meat_selection: ["Beef", "Pork"],
    veggie_selection: [],
    description: "A slow-cooked beef dish in a rich, spiced coconut sauce.",
  },
  {
    name: "Mapo Tofu",
    type: "Main Dish",
    country_origin: "China",
    ingredients: ["Tofu", "Ground Pork", "Chili Paste", "Sichuan Pepper"],
    allergens: ["Soy"],
    heat_level: "High",
    meat_selection: ["Pork", "Chicken", "Beef"],
    veggie_selection: ["Tofu"],
    description:
      "Spicy tofu with minced meat, flavored with Sichuan pepper and chili paste.",
  },
  {
    name: "Burmese Tea Leaf Salad",
    type: "Salad",
    country_origin: "Myanmar",
    ingredients: ["Tea Leaves", "Peanuts", "Tomatoes", "Cabbage"],
    allergens: ["Peanuts"],
    heat_level: "Low",
    meat_selection: [],
    veggie_selection: ["Cabbage", "Tomatoes"],
    description:
      "A tangy salad made with fermented tea leaves, peanuts, and vegetables.",
  },
  {
    name: "Chinese Sweet and Sour Pork",
    type: "Main Dish",
    country_origin: "China",
    ingredients: ["Pork", "Pineapple", "Bell Peppers", "Vinegar", "Sugar"],
    allergens: ["Soy"],
    heat_level: "Low",
    meat_selection: ["Pork", "Chicken"],
    veggie_selection: ["Bell Peppers", "Pineapple"],
    description:
      "Crispy fried pork with a sweet and tangy sauce, served with vegetables.",
  },
];