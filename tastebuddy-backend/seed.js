const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('tastebuddy.db');

const recipes = [
  // Part 1 recipes
  {
  title: "Chana Masala – Spicy Chickpea Curry",
  description: "Chana Masala is a spicy, tangy, and hearty vegetarian curry made with chickpeas simmered in a tomato-onion gravy. Packed with protein and fiber, it's a staple in Pakistani and Indian households, especially during vegetarian days or festivals. Its rich taste comes from a blend of spices including cumin, coriander, and garam masala. Often served with naan, puri, or rice, it’s both nutritious and deeply satisfying.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/chana-masala.jpg",
  ingredients: [
    "2 cups boiled chickpeas",
    "1 onion, chopped",
    "2 tomatoes, chopped",
    "1 tsp ginger garlic paste",
    "1 green chili, chopped",
    "1 tsp cumin seeds",
    "1 tsp coriander powder",
    "½ tsp turmeric",
    "1 tsp red chili powder",
    "Salt to taste",
    "2 tbsp oil",
    "Fresh coriander for garnish"
  ],
  instructions: `Heat oil, sauté cumin seeds, add onions and cook until golden. Add ginger garlic paste, green chili, tomatoes, and all spices. Cook until tomatoes soften. Add chickpeas and ½ cup water. Simmer for 10–15 minutes. Garnish with coriander. Serve with naan or rice.`
},
{
  title: "Gajar Ka Halwa – Carrot Pudding",
  description: "Gajar ka Halwa is a beloved Pakistani dessert made by slow-cooking grated carrots with milk, sugar, and ghee. Garnished with cardamom and nuts, this winter delicacy is rich, warm, and comforting. It’s often served at weddings, Eid, or after a hearty meal. The caramelized flavor and creamy texture make it a timeless favorite.",
  category: "Dessert",
  image: "http://localhost:3000/images/gajar-ka-halwa.jpg",
  ingredients: [
    "1 kg grated carrots",
    "1 liter full cream milk",
    "½ cup ghee",
    "½ cup sugar (adjust to taste)",
    "½ tsp cardamom powder",
    "10 almonds, chopped",
    "10 cashews, chopped"
  ],
  instructions: `Boil carrots in milk on medium flame until soft and milk evaporates. Add ghee and cook while stirring until mixture thickens. Add sugar and cardamom powder. Cook until it leaves sides of pan. Garnish with chopped nuts. Serve warm.`
},
{
  title: "Seekh Kebabs – Minced Meat Skewers",
  description: "Seekh Kebabs are juicy, spiced minced meat skewers that are grilled or pan-fried to perfection. Made with beef or chicken, these kebabs are marinated in aromatic spices and herbs, shaped onto skewers, and cooked until tender and smoky. Commonly served with chutney and naan, they are a BBQ favorite across Pakistan.",
  category: "Non-Vegetarian",
  image: "http://localhost:3000/images/seekh-kebab.jpg",
  ingredients: [
    "500g minced beef",
    "1 onion, grated",
    "2 tbsp chopped coriander",
    "1 tbsp ginger garlic paste",
    "1 tsp cumin powder",
    "1 tsp coriander powder",
    "1 tsp red chili flakes",
    "½ tsp garam masala",
    "Salt to taste",
    "1 egg",
    "1 tbsp oil"
  ],
  instructions: `Mix all ingredients. Let marinate for 30 mins. Shape onto skewers. Grill or pan fry with little oil until fully cooked. Serve hot with chutney.`
},
{
  title: "Doodh Patti – Pakistani Milk Tea",
  description: "Doodh Patti is a traditional Pakistani milk tea made without water. It is rich, creamy, and full of flavor, brewed with loose tea leaves, milk, sugar, and a hint of cardamom. Popular across homes and dhabas, it’s a must-have during cold weather or relaxing evenings.",
  category: "Drink",
  image: "http://localhost:3000/images/doodh-patti.jpg",
  ingredients: [
    "1 cup full cream milk",
    "1 tsp black tea leaves",
    "1–2 tsp sugar (to taste)",
    "1 cardamom pod (optional)"
  ],
  instructions: `Boil milk in a saucepan. Add tea leaves and cardamom. Simmer on low until tea darkens and flavors blend. Strain into cup. Serve hot.`
},
{
  title: "Shami Kebabs – Beef and Lentil Patties",
  description: "Shami Kebabs are tender patties made from ground beef and split chickpeas (chana dal), flavored with whole spices and herbs. These kebabs are first pressure-cooked, ground into paste, and shallow fried into delicious rounds. Perfect for tea-time snacks, sandwiches, or a side dish.",
  category: "Non-Vegetarian",
  image: "http://localhost:3000/images/shami-kebab.jpg",
  ingredients: [
    "500g beef mince",
    "1/2 cup chana dal",
    "1 onion, sliced",
    "1 tsp ginger garlic paste",
    "2 green chilies",
    "1 tsp garam masala",
    "Salt to taste",
    "Coriander & mint leaves",
    "1 egg",
    "Oil for frying"
  ],
  instructions: `Boil mince with chana dal, onion, spices, and 1 cup water until dry. Blend mixture to form dough. Shape into patties. Dip in egg and shallow fry. Serve with ketchup or chutney.`
},
{
  title: "Kashmiri Pink Tea – Noon Chai",
  description: "Kashmiri Chai or Noon Chai is a traditional pink tea made with green tea leaves, baking soda, milk, and salt or sugar. Known for its beautiful rosy color and creamy flavor, it's especially enjoyed in winter or on weddings and special occasions. Garnished with crushed pistachios or almonds.",
  category: "Drink",
  image: "http://localhost:3000/images/kashmiri-chai.jpg",
  ingredients: [
    "2 cups water",
    "1 tsp Kashmiri green tea leaves",
    "1/4 tsp baking soda",
    "1 cup milk",
    "Sugar or salt (to taste)",
    "Crushed almonds/pistachios (for garnish)"
  ],
  instructions: `Boil tea leaves and baking soda in water for 15–20 minutes until reduced and reddish. Add cold water to shock it. Then add milk and sugar. Simmer until pink. Garnish and serve hot.`
},
{
  title: "Aloo Baingan – Potato and Eggplant Curry",
  description: "Aloo Baingan is a comforting vegetarian curry made with tender eggplants and potatoes cooked in a spiced onion-tomato gravy. It’s a great weeknight option, rich in flavor, and pairs beautifully with roti or paratha. Simple, affordable, and nutritious.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/aloo-keema.jpg",
  ingredients: [
    "2 potatoes, diced",
    "1 large eggplant, diced",
    "1 onion, chopped",
    "2 tomatoes, chopped",
    "1 tsp ginger garlic paste",
    "½ tsp turmeric",
    "1 tsp red chili powder",
    "1 tsp coriander powder",
    "Salt to taste",
    "2 tbsp oil"
  ],
  instructions: `Fry potatoes until slightly golden. Remove. In same oil, sauté onion, ginger garlic, and tomatoes with spices. Add eggplant and potatoes. Cook covered until soft. Serve hot.`
},
{
  title: "Zarda – Sweet Yellow Rice",
  description: "Zarda is a traditional Pakistani dessert made with fragrant basmati rice, sugar, milk, and a mix of dry fruits. Colored with saffron or yellow food color, it’s festive, aromatic, and commonly served at weddings and Eid. Sweet, nutty, and comforting.",
  category: "Dessert",
  image: "http://localhost:3000/images/zarda.jpg",
  ingredients: [
    "1 cup basmati rice",
    "½ cup sugar",
    "¼ cup milk",
    "¼ cup ghee",
    "4 green cardamoms",
    "Few drops yellow food color or saffron",
    "Chopped almonds, pistachios, coconut"
  ],
  instructions: `Boil rice with cardamoms. In another pan, heat ghee, add sugar and milk, dissolve. Add cooked rice, food color, and dry fruits. Cover and steam 10 mins. Serve warm.`
},
{
  title: "Karahi Chicken – Wok-Cooked Chicken Curry",
  description: "Chicken Karahi is a spicy, rich tomato-based curry made in a wok-style pan (karahi). It’s one of the most iconic dishes in Pakistani cuisine, perfect for naan or roti. Cooked with minimal ingredients yet full of flavor, it’s a restaurant and home favorite.",
  category: "Desi",
  image: "http://localhost:3000/images/chicken-karahi.jpg",
  ingredients: [
    "1 kg chicken",
    "4 tomatoes, chopped",
    "1 onion, chopped",
    "1 tbsp ginger garlic paste",
    "1 tsp red chili powder",
    "½ tsp turmeric",
    "Salt to taste",
    "½ cup oil",
    "1 tsp crushed coriander",
    "Green chilies and ginger for garnish"
  ],
  instructions: `Heat oil. Add onion, ginger garlic paste, chicken. Cook till chicken browns. Add tomatoes and spices. Cook until tomatoes break down and oil separates. Garnish and serve.`
},
{
  title: "Daal Chana – Yellow Lentil Curry",
  description: "Daal Chana is a nutritious and simple lentil curry made with split Bengal gram and tempered with garlic, cumin, and green chilies. It’s a vegetarian staple across Pakistani households and is often enjoyed with boiled rice or roti, along with pickle or salad.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/chana-masala.jpg",
  ingredients: [
    "1 cup chana dal (split gram)",
    "1 onion, sliced",
    "2 tomatoes, chopped",
    "1 tsp ginger garlic paste",
    "1 tsp cumin seeds",
    "½ tsp turmeric",
    "Salt to taste",
    "2 tbsp oil",
    "2 green chilies",
    "Fresh coriander for garnish"
  ],
  instructions: `Boil chana dal with turmeric and salt until soft. In separate pan, heat oil, add cumin, onion, and ginger garlic. Add tomatoes and green chilies. Mix into boiled daal. Garnish with coriander. Serve with rice or roti.`
},

{
  title: "Beef Kofta Curry – Meatball Masala",
  description: "Beef Kofta Curry is a classic Pakistani dish featuring juicy spiced meatballs simmered in a rich tomato-based gravy. Perfect with naan or steamed rice, this dish is loved for its comforting texture and bold flavors. Ideal for both weeknight meals and special dinners.",
  category: "Desi",
  image: "http://localhost:3000/images/beef-korma.jpg",
  ingredients: [
    "500g ground beef",
    "1 egg",
    "2 tbsp breadcrumbs",
    "1 tbsp ginger garlic paste",
    "1 tsp garam masala",
    "1 onion, chopped",
    "2 tomatoes, blended",
    "½ cup yogurt",
    "1 tsp red chili powder",
    "½ tsp turmeric",
    "Salt to taste",
    "Fresh coriander",
    "½ cup oil"
  ],
  instructions: `Mix beef with egg, breadcrumbs, ½ ginger garlic paste, and salt. Form into small balls. In pan, sauté onion in oil, add ginger garlic paste, tomatoes, yogurt, and spices. Cook until oil separates. Add koftas, cover and simmer 30 mins. Garnish and serve.`
},
{
  title: "Murgh Cholay – Chicken with Chickpeas",
  description: "Murgh Cholay is a beloved Lahori-style chicken and chickpea curry that's hearty and deeply flavorful. Made with tender chicken pieces and boiled chickpeas in a thick, spiced tomato gravy, it’s perfect with naan or paratha. Ideal for brunches or festive meals.",
  category: "Desi",
  image: "http://localhost:3000/images/chana-masala.jpg",
  ingredients: [
    "500g chicken",
    "1.5 cups boiled chickpeas",
    "2 onions, chopped",
    "2 tomatoes, chopped",
    "1 tsp ginger garlic paste",
    "½ tsp turmeric",
    "1 tsp red chili powder",
    "1 tsp garam masala",
    "Salt to taste",
    "½ cup oil",
    "Green chilies and coriander"
  ],
  instructions: `Fry onions until golden, add ginger garlic paste, chicken, and sauté. Add tomatoes and spices. Cook until oil separates. Add chickpeas and ½ cup water. Simmer 10–15 mins. Garnish and serve with naan.`
},
{
  title: "Vegetable Pulao – Fragrant Rice with Veggies",
  description: "Vegetable Pulao is a quick and flavorful rice dish cooked with aromatic whole spices and a medley of seasonal vegetables. It’s a perfect vegetarian one-pot meal, often served with raita or chutney. Light yet filling, it’s ideal for lunches and potlucks.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/chicken-biryani.jpg",
  ingredients: [
    "2 cups basmati rice (soaked 30 min)",
    "1 carrot, diced",
    "1 potato, diced",
    "½ cup peas",
    "½ cup green beans, chopped",
    "1 onion, sliced",
    "4 cloves, 1 bay leaf, 2 cardamoms",
    "½ tsp cumin seeds",
    "Salt to taste",
    "3 tbsp oil",
    "4 cups water"
  ],
  instructions: `Heat oil, add whole spices and cumin. Add onions, sauté till golden. Add all veggies, salt, and cook for 2 mins. Add rice and water. Cook covered on low until rice is done. Fluff gently and serve.`
},
{
  title: "Haleem – Wheat and Meat Stew",
  description: "Haleem is a rich, slow-cooked stew made with a combination of wheat, lentils, and shredded meat. Deeply nourishing and packed with flavor, it’s especially popular during Ramadan and Muharram. Served with fried onions, lemon, and chopped coriander, it’s a complete meal on its own.",
  category: "Desi",
  image: "http://localhost:3000/images/Haleem.jpg",
  ingredients: [
    "500g beef or chicken",
    "½ cup wheat",
    "¼ cup chana dal",
    "¼ cup masoor dal",
    "1 onion, sliced",
    "1 tbsp ginger garlic paste",
    "1 tsp garam masala",
    "Salt to taste",
    "½ tsp turmeric",
    "½ cup oil or ghee",
    "Fried onions, lemon, coriander (for garnish)"
  ],
  instructions: `Boil all grains and lentils until soft. Cook meat separately with spices, shred it. Combine both and cook on low until blended. Use hand blender for smoothness. Garnish and serve with naan or spoon.`
},
{
  title: "Anda Curry – Egg Masala",
  description: "Anda Curry is a simple yet delicious curry featuring hard-boiled eggs simmered in a rich tomato and onion-based gravy. It's a great alternative to meat dishes and is full of protein. Enjoy it with warm chapati or boiled rice.",
  category: "Desi",
  image: "http://localhost:3000/images/tandoori-chicken.jpg",
  ingredients: [
    "4 boiled eggs",
    "1 onion, sliced",
    "2 tomatoes, chopped",
    "1 tsp ginger garlic paste",
    "1 tsp red chili powder",
    "½ tsp turmeric",
    "Salt to taste",
    "1 tsp garam masala",
    "2 tbsp oil",
    "Coriander for garnish"
  ],
  instructions: `Heat oil, sauté onions until golden. Add ginger garlic paste, tomatoes, and spices. Cook till oil separates. Add eggs, simmer for 10 mins. Garnish and serve.`
},
{
  title: "Besan Chilla – Spiced Gram Flour Pancake",
  description: "Besan Chilla is a savory pancake made with gram flour, vegetables, and spices. It's quick, healthy, and ideal for breakfast or lunchboxes. Crispy on the outside and soft inside, it's packed with flavor and protein.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/bhesan-chilla.jpg",
  ingredients: [
    "1 cup gram flour (besan)",
    "1 onion, chopped",
    "1 tomato, chopped",
    "2 green chilies, chopped",
    "¼ tsp turmeric",
    "¼ tsp red chili powder",
    "Salt to taste",
    "Water to make batter",
    "Oil for frying"
  ],
  instructions: `Mix all ingredients into a smooth batter. Heat non-stick pan, grease, pour batter and spread thin. Cook both sides until golden. Serve with chutney.`
},
{
  title: "Pakistani Kheer – Rice Pudding",
  description: "Kheer is a traditional Pakistani rice pudding made with milk, rice, and sugar, slow-cooked to a creamy consistency and flavored with cardamom. Often garnished with almonds and pistachios, it's served chilled on festive occasions and family dinners.",
  category: "Dessert",
  image: "http://localhost:3000/images/pakstani-kheer.jpg",
  ingredients: [
    "½ cup basmati rice",
    "1 liter full cream milk",
    "½ cup sugar",
    "¼ tsp cardamom powder",
    "Chopped almonds and pistachios",
    "1 tbsp condensed milk (optional)"
  ],
  instructions: `Soak and cook rice in milk on low until soft. Add sugar, cardamom, and condensed milk. Simmer until thick. Garnish with nuts. Chill before serving.`
},
{
  title: "Chapli Kebab – Peshawari Beef Patties",
  description: "Chapli Kebabs are spicy beef patties from Peshawar, made with crushed spices, herbs, and pomegranate seeds. These flat, crispy kebabs are shallow fried and served with naan and chutney. Bold, juicy, and delicious.",
  category: "Non-Vegetarian",
  image: "http://localhost:3000/images/chapli-kebab.jpg",
  ingredients: [
    "500g ground beef",
    "1 onion, chopped",
    "1 tomato, chopped",
    "1 tsp ginger garlic paste",
    "1 tsp crushed coriander seeds",
    "1 tsp red chili flakes",
    "½ tsp garam masala",
    "Salt to taste",
    "2 tbsp cornmeal (makai atta)",
    "1 egg",
    "Oil for frying"
  ],
  instructions: `Mix all ingredients. Flatten into patties. Fry on medium heat until crispy and brown. Serve hot.`
},
{
  title: "Chicken Malai Boti – Creamy BBQ Chicken",
  description: "Chicken Malai Boti is a creamy and mildly spiced BBQ dish, made with boneless chicken marinated in cream, yogurt, and mild spices. Perfect for grilling or pan frying, it melts in the mouth and is ideal for Eid or BBQ nights.",
  category: "Non-Vegetarian",
  image: "http://localhost:3000/images/chicken-malai-boti.jpg",
  ingredients: [
    "500g boneless chicken",
    "¼ cup cream",
    "¼ cup yogurt",
    "1 tbsp ginger garlic paste",
    "1 tsp white pepper",
    "½ tsp garam masala",
    "Salt to taste",
    "2 tbsp oil",
    "1 tbsp lemon juice"
  ],
  instructions: `Mix all ingredients. Marinate chicken for 3–4 hours. Grill or pan fry until tender. Serve with naan and chutney.`
},
{
  title: "Moong Daal – Yellow Lentil Soup",
  description: "Moong Daal is a light, protein-rich lentil dish that's quick to cook and easy to digest. It's perfect for everyday meals and often paired with boiled rice or chapati. Tempered with garlic and cumin, it's comforting and nourishing.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/Moong-daal.jpg",
  ingredients: [
    "1 cup moong daal (yellow lentils)",
    "2.5 cups water",
    "1 tsp ginger garlic paste",
    "½ tsp turmeric",
    "Salt to taste",
    "2 tbsp oil",
    "1 tsp cumin seeds",
    "2 dried red chilies",
    "Fresh coriander"
  ],
  instructions: `Boil daal with turmeric and salt until soft. In pan, heat oil, add cumin, garlic, red chilies for tarka. Pour over daal. Garnish and serve.`
},

{
  title: "Lassi – Traditional Yogurt Drink",
  description: "Lassi is a refreshing yogurt-based drink that's a staple in Pakistani households, especially during summer. Sweet, creamy, and cooling, it's made with yogurt, milk, sugar, and cardamom. It's not only hydrating but also aids digestion, making it perfect after a hearty meal.",
  category: "Drink",
  image: "http://localhost:3000/images/Lassi.jpg",
  ingredients: [
    "1 cup plain yogurt",
    "½ cup cold water or milk",
    "2 tbsp sugar (adjust to taste)",
    "¼ tsp cardamom powder",
    "Ice cubes",
    "Chopped nuts for garnish (optional)"
  ],
  instructions: `Blend yogurt, milk, sugar, and cardamom until frothy. Pour into a glass over ice. Garnish with nuts if desired. Serve chilled.`
},
{ 
  title: "Shahi Tukray – Royal Bread Pudding",
  description: "Shahi Tukray is a rich Mughlai dessert made with fried bread slices soaked in sugar syrup and creamy rabri. Garnished with nuts and flavored with cardamom and rose water, it's a royal treat served on Eid and festive occasions.",
  category: "Dessert",
  image: "http://localhost:3000/images/Shahi-Tukray.jpg",
  ingredients: [
    "6 bread slices",
    "2 cups milk",
    "½ cup sugar",
    "¼ cup condensed milk",
    "½ tsp cardamom powder",
    "Oil or ghee for frying",
    "Rose water (optional)",
    "Chopped pistachios and almonds"
  ],
  instructions: `Fry bread slices until golden. In a pan, boil milk, sugar, cardamom, and condensed milk until thick. Dip fried bread in syrup briefly, then arrange and pour thick milk mixture on top. Garnish and chill before serving.`
},
{
  title: "Sattu Drink – Roasted Barley Cooler",
  description: "Sattu is a nutritious summer drink made from roasted barley flour mixed with water, lemon, and spices. Popular in Punjab, it's refreshing, energizing, and helps beat the heat. Both savory and sweet versions exist.",
  category: "Drink",
  image: "http://localhost:3000/images/sattu Drink.jpg",
  ingredients: [
    "2 tbsp sattu (roasted barley or chickpea flour)",
    "1 glass cold water",
    "1 tsp lemon juice",
    "¼ tsp black salt",
    "1 tsp sugar (optional)",
    "Mint leaves"
  ],
  instructions: `Mix sattu with cold water, lemon juice, black salt, and sugar (if using). Stir well. Add mint leaves and ice. Serve chilled.`
},
{
  title: "Fruit Chaat – Spiced Fruit Mix",
  description: "Fruit Chaat is a zesty and colorful medley of seasonal fruits tossed in chaat masala, lemon juice, and sometimes orange juice. A favorite during Ramadan, it's a healthy and tangy snack or iftar starter packed with vitamins and flavor.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/fruit-chaat.jpg",
  ingredients: [
    "1 banana, sliced",
    "1 apple, diced",
    "½ cup grapes",
    "1 orange, segmented",
    "1 guava, chopped",
    "1 tbsp lemon juice",
    "1 tsp chaat masala",
    "Salt to taste",
    "Mint leaves"
  ],
  instructions: `Mix all chopped fruits in a bowl. Sprinkle chaat masala, lemon juice, and salt. Toss gently. Garnish with mint and serve fresh.`
},
{
  title: "Falooda – Rose Milk Dessert with Vermicelli",
  description: "Falooda is a layered Pakistani dessert made with rose-flavored milk, basil seeds, vermicelli, jelly, and ice cream. It’s sweet, chilled, and incredibly refreshing—perfect for summer nights or after-dinner treats.",
  category: "Dessert",
  image: "http://localhost:3000/images/falooda.jpg",
  ingredients: [
    "1 glass chilled milk",
    "2 tbsp rose syrup (Rooh Afza)",
    "2 tbsp soaked basil seeds (tukmaria)",
    "½ cup cooked falooda sev (thin vermicelli)",
    "1 scoop vanilla or kulfi ice cream",
    "Chopped jelly or fruits (optional)",
    "Chopped nuts"
  ],
  instructions: `Layer glass with rose syrup, basil seeds, sev, and milk. Top with ice cream, jelly, and nuts. Serve immediately with a spoon.`
}

  // Add all other recipes similarly here...
];

// Here add your seed logic to insert these recipes into your SQLite database

db.serialize(() => {
  // 1. Create table with image_url
  db.run(`
    CREATE TABLE IF NOT EXISTS recipes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      ingredients TEXT,
      instructions TEXT,
      image_url TEXT
    );
  `);

  // 2. Insert all recipes
  const insertRecipe = db.prepare(`
    INSERT INTO recipes (title, ingredients, instructions, image_url)
    VALUES (?, ?, ?, ?)
  `);

  recipes.forEach((r) => {
    insertRecipe.run(r.title, r.ingredients, r.instructions, r.image_url);
  });

  insertRecipe.finalize();
});

db.close();


// // Example insertion function:
// function seedDB() {
//   db.serialize(() => {
//     // Create table if not exists
//     db.run(`CREATE TABLE IF NOT EXISTS recipes (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       title TEXT,
//       description TEXT,
//       category TEXT,
//       image TEXT,
//       ingredients TEXT,
//       instructions TEXT
//     )`);

//     // Insert each recipe
//     const insertStmt = db.prepare(`INSERT INTO recipes 
//       (title, description, category, image, ingredients, instructions) 
//       VALUES (?, ?, ?, ?, ?, ?)`);

//     recipes.forEach(recipe => {
//       insertStmt.run(
//         recipe.title,
//         recipe.description,
//         recipe.category,
//         recipe.image,
//         JSON.stringify(recipe.ingredients), // store ingredients as JSON string
//         recipe.instructions
//       );
//     });

//     insertStmt.finalize();
//   });
// }

// seedDB();
