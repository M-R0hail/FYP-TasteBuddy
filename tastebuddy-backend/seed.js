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
  instructions: `To make chana masala, first you need to prepare the chickpeas. If you’re using dried chickpeas, soak them overnight in water so they become soft. The next day, drain the water and boil them until they’re fully cooked and tender. This can take around 40 to 60 minutes, or faster if you use a pressure cooker. If you’re using canned chickpeas, just rinse them well and keep them aside. Now, in a deep pan or pot, heat a few tablespoons of oil on medium flame. When the oil is hot, add some cumin seeds and let them sizzle for a few seconds. Next, add finely chopped onions and cook them well until they turn golden brown. This step is important because the flavor of the dish comes from nicely browned onions. Once the onions are ready, add some ginger-garlic paste and cook it for a minute until the raw smell goes away. Now it’s time to add the tomatoes. You can use either finely chopped or blended tomatoes. Stir them into the onion mixture and cook them until they turn soft and start to break down. This will take about 5 to 7 minutes. At this point, the oil will begin to separate from the sides, which is a sign that your masala is getting ready.

Now add your dry spices like turmeric, red chili powder, coriander powder, and salt. You can also add a little chana masala powder if you have it. Mix everything well so the spices are combined evenly with the onion and tomato mixture. Keep stirring and cooking the masala for another 4 to 5 minutes so the spices lose their raw taste. Then add your boiled chickpeas to this mixture and stir so they’re fully coated in the thick masala. Add some water depending on how thick or thin you want your curry to be, and mix it gently. Now lower the heat, cover the pot, and let everything simmer for about 15 to 20 minutes. During this time, the chickpeas will soak in all the flavors and become even softer and tastier. You can mash a few chickpeas with the spoon to make the gravy thicker if you want. Finally, add a little garam masala and chopped green chilies if you like spicy food, and mix it one last time. Turn off the flame, sprinkle some fresh coriander leaves on top, and your chana masala is ready to serve hot with roti, naan, or rice.`
},
{
  title: "Gajar Ka Halwa – Carrot Pudding",
  description: "Gajar ka Halwa is a beloved Pakistani dessert made by slow-cooking grated carrots with milk, sugar, and ghee. Garnished with cardamom and nuts, this winter delicacy is rich, warm, and comforting. It’s often served at weddings, Eid, or after a hearty meal. The caramelized flavor and creamy texture make it a timeless favorite.",
  category: "Dessert",
  image: "http://localhost:3000/images/gajjar ka halwa.png",
  ingredients: [
    "1 kg grated carrots",
    "1 liter full cream milk",
    "½ cup ghee",
    "½ cup sugar (adjust to taste)",
    "½ tsp cardamom powder",
    "10 almonds, chopped",
    "10 cashews, chopped"
  ],
  instructions: `To make Gajar ka Halwa, first you need to wash and peel fresh red carrots. Choose sweet, juicy carrots if possible. Then grate all the carrots using a hand grater or food processor. You’ll need about 4 to 5 cups of grated carrots. Once the carrots are ready, take a large pan or a non-stick pot and place it on medium heat. Add 1 to 2 tablespoons of ghee (clarified butter) and let it melt. When the ghee is hot, add the grated carrots and start cooking them. Keep stirring gently so they don’t stick to the bottom. Cook the carrots in ghee for about 10 to 12 minutes until they become a little soft and their raw smell goes away.

Now it's time to add the milk. Pour about 3 to 4 cups of full cream milk into the pan with the carrots. Stir everything together and keep the heat on medium. Let the carrots cook in the milk. This is an important step because the carrots will soak the milk and become rich and creamy. Keep stirring every few minutes so the mixture doesn’t burn or stick. This step can take around 20 to 30 minutes. Slowly, you will see the milk reducing and thickening. Once most of the milk has dried up, and the mixture has become thick, add sugar according to your taste — usually 3/4 to 1 cup is enough, depending on how sweet you want it. Stir well so the sugar mixes and melts into the halwa. When you add sugar, the mixture will become a little watery again, so keep cooking it on low flame and stir often.

Now add some more ghee — around 1 to 2 tablespoons — and continue cooking. This will give the halwa a nice shine and rich taste. After a few more minutes, add cardamom powder for a beautiful aroma. You can also add chopped dry fruits like almonds, pistachios, and cashews. Fry the dry fruits in a little ghee before adding them if you want extra flavor. Let everything cook together until the mixture thickens and starts leaving the sides of the pan. You’ll know it’s ready when you can move the halwa easily with a spoon and it doesn’t stick too much. At this point, turn off the heat. Your Gajar Ka Halwa is ready. Serve it hot for the best taste, but you can also store it in the fridge and warm it up before serving. It tastes great both ways — rich, sweet, and full of flavor.`
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
  instructions: `To make Seekh Kebabs, start by preparing the minced meat mixture. You can use either beef, chicken, or mutton — just make sure it’s finely minced (keema) and has a little fat in it, because the fat helps the kebabs stay juicy and soft. Take the keema in a large mixing bowl. Now finely chop onions, green chilies, coriander leaves, and mint leaves, and add them to the meat. You can also add a spoon of ginger-garlic paste for strong flavor. After that, add your spices — like red chili powder, coriander powder, cumin powder, garam masala, salt, and a pinch of black pepper. Some people also add roasted gram flour (besan) or breadcrumbs to help bind the mixture together and prevent the kebabs from breaking while cooking. Mix everything really well using your hands so all the flavors blend into the meat. Then cover the bowl and let the mixture rest in the fridge for at least 30 minutes. This helps the meat soak up all the flavors.

After the resting time, take the mixture out. If it feels too soft or wet, you can add a bit more besan or breadcrumbs to firm it up. Now it’s time to shape the kebabs. Wet your hands slightly with water or oil so the meat doesn’t stick. Take a small portion of the mixture and press it onto a skewer or a metal rod, shaping it into a long cylinder, like a sausage. If you don’t have skewers, you can simply roll them into sausage shapes with your hands. Repeat this step for all the mixture.

Now, cook the kebabs. You can cook them on a grill, in an oven, or even on a simple pan or tawa. If using a grill or oven, preheat it first. Brush a little oil or melted butter on the kebabs to keep them moist. Cook the kebabs for about 10–15 minutes, turning them gently until all sides are evenly cooked and they have a nice brown color with a little char. If cooking on a pan or tawa, heat some oil, place the kebabs, and cook them on medium heat while turning occasionally until they’re fully cooked from inside and crispy outside. Once done, take them off the heat.

Finally, serve your seekh kebabs hot with green chutney, lemon wedges, sliced onions, and naan or paratha. They taste amazing as a snack, in rolls, or even with rice. These juicy, smoky kebabs are full of desi flavor and very satisfying to eat — a true street food favorite that you can now enjoy at home.

`
},
{
  title: "Doodh Patti – Pakistani Milk Tea",
  description: "Doodh Patti is a traditional Pakistani milk tea made without water. It is rich, creamy, and full of flavor, brewed with loose tea leaves, milk, sugar, and a hint of cardamom. Popular across homes and dhabas, it’s a must-have during cold weather or relaxing evenings.",
  category: "Drinks",
  image: "http://localhost:3000/images/milk tea.jpg",
  ingredients: [
    "1 cup full cream milk",
    "1 tsp black tea leaves",
    "1–2 tsp sugar (to taste)",
    "1 cardamom pod (optional)"
  ],
  instructions: `To make perfect doodh patti, start by pouring about one cup of full-cream milk into a small saucepan or tea pan. You can use more milk if you're making it for more than one person. Place the pan on medium heat and let the milk start to warm up slowly. Once it’s slightly hot, add about one teaspoon of loose black tea leaves (commonly called chai patti). If you like your tea strong, you can add a little more. Now add sugar to taste — usually, one to two teaspoons per cup is enough, but it depends on how sweet you want it. Stir the mixture gently and let it come to a boil. As the milk begins to rise and bubble, lower the heat so it doesn't spill over. Let the tea simmer on low flame for about 5 to 8 minutes. This is an important step because the longer you let it simmer, the more flavorful and rich your doodh patti becomes. You can also add a small piece of crushed green cardamom (elaichi) if you like a light aroma in your tea. Keep stirring occasionally to prevent the milk from sticking to the bottom of the pan. Once the color turns light brown and the aroma feels just right, turn off the heat. Use a tea strainer to pour the hot tea into cups, catching the tea leaves as you pour. Serve it fresh and hot, preferably with biscuits, rusk, or paratha for a complete desi chai experience. Doodh patti is not just tea — it’s comfort in a cup, perfect for relaxing evenings, rainy days, or friendly chats.

`
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
  instructions: `To make shami kebabs, you first need to prepare the main mixture. Take boneless beef pieces and chana daal (split Bengal gram) and wash them well. Then add both into a large cooking pot along with water. Now add chopped onions, a few garlic cloves, some ginger slices, green chilies, salt, red chili powder, whole black pepper, a cinnamon stick, and a couple of cloves. These spices will give the kebabs a rich and traditional flavor. Cook everything together on medium flame until the meat becomes tender, the lentils are soft, and all the water dries up completely. This may take 40 to 60 minutes depending on the quantity. Stir occasionally to make sure nothing sticks to the bottom of the pot. Once everything is cooked and there is no water left, let the mixture cool down. After cooling, grind it all together in a chopper or food processor until it becomes a smooth paste. Make sure there are no chunks of meat or lentils left — the texture should be thick and fine.

Next, break a few eggs and beat them separately. Then take the ground kebab mixture and add some chopped fresh coriander, mint leaves, green chilies, and onions into it. Mix well so you get a good balance of flavor in every bite. Now shape the mixture into flat round patties, like small burger-sized discs. Once all the kebabs are shaped, dip each one in the beaten egg before frying. Heat oil in a frying pan on medium heat and gently place the kebabs in the oil. Shallow fry them until they turn golden brown and crispy from both sides. This usually takes 3–4 minutes per side. Flip them carefully so they don’t break. Once done, place the kebabs on paper towels to remove extra oil. Your shami kebabs are ready. You can serve them hot with green chutney, ketchup, naan, or paratha. They also go really well in burgers and sandwiches, or you can freeze them for later. These kebabs are soft from the inside, crispy from the outside, and packed with delicious flavor — a perfect snack or side dish for any time of the day.`
},
{
  title: "Kashmiri Pink Tea – Noon Chai",
  description: "Kashmiri Chai or Noon Chai is a traditional pink tea made with green tea leaves, baking soda, milk, and salt or sugar. Known for its beautiful rosy color and creamy flavor, it's especially enjoyed in winter or on weddings and special occasions. Garnished with crushed pistachios or almonds.",
  category: "Drinks",
  image: "http://localhost:3000/images/kashmiri-chai.jpg",
  ingredients: [
    "2 cups water",
    "1 tsp Kashmiri green tea leaves",
    "1/4 tsp baking soda",
    "1 cup milk",
    "Sugar or salt (to taste)",
    "Crushed almonds/pistachios (for garnish)"
  ],
  instructions: `To make Kashmiri Pink Tea, also called Noon Chai, start by taking about four cups of cold water in a deep, heavy-bottomed pan or pot. Put it on medium heat and add a generous spoon of good-quality green tea leaves specially meant for pink tea. If you don’t have Kashmiri tea leaves, you can use regular green tea, but the special tea gives the best color and taste. Add a pinch of baking soda because this is the secret ingredient that helps the tea turn pink later. Stir it well and bring the water to a boil. Keep boiling it for at least 15 to 20 minutes, or until the water reduces to almost half. While it boils, keep stirring from time to time. You will notice the color of the water slowly changing into a deep reddish-brown. Once you see this color and the water is reduced, add one to two cups of cold water or ice-cold water into the pot. This sudden temperature change helps develop the pink color. Stir the tea strongly, using a ladle or a large spoon, and keep doing this for about 5 more minutes. You will see a frothy layer forming, and the color becomes deeper.

Now strain this strong tea concentrate and set it aside. In a separate pot, boil full-fat milk, depending on how much tea you want to make. For four cups, you can use about two cups of milk or more if you like it creamier. Pour the strained tea concentrate into the boiling milk slowly while stirring. Add salt to taste because traditional Noon Chai is salty, not sweet. Usually, about half a teaspoon of salt is enough, but you can adjust it to your liking. Some people also add a little sugar if they prefer a slightly sweet version, but authentic Kashmiri tea is enjoyed salty. Let the tea simmer on low heat for about 5 to 10 more minutes so the flavors mix properly and the pink color develops fully. You can see the milk turning a beautiful soft pink shade.

Finally, turn off the heat and pour the tea into cups. Sprinkle some crushed pistachios or almonds on top if you like a nutty taste and extra richness. Kashmiri Pink Tea tastes best when served hot with crispy naan, Kashmiri breads, or biscuits. It is warming, creamy, and soothing—perfect for cold evenings or special occasions. This tea takes patience and practice to get the color right, so don’t worry if it doesn’t turn bright pink the first time. With a little practice, you will master the art of making this lovely traditional drink.`
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
  instructions: `To make Aloo Baingan, first wash and peel the potatoes, then cut them into medium-sized cubes. Also wash the eggplants (baingan), cut off the stems, and chop them into similar-sized pieces. To stop the eggplant from turning black, you can soak the pieces in water for a while. Now, heat some oil in a pan on medium flame. Once the oil is hot, add cumin seeds and let them crackle. Then add finely chopped onions and cook them until they turn light golden brown. Now add ginger-garlic paste and cook it for a minute until the raw smell goes away. After that, add chopped tomatoes and stir everything well. Cook the tomatoes until they become soft and the oil starts separating from the mixture. Now add your spices — turmeric, red chili powder, coriander powder, and salt. Mix well and let the masala cook for a few more minutes so the flavors develop nicely.

Once the masala is ready, add the chopped potatoes and stir them well so they get coated with the spices. Cover the pan and let the potatoes cook for about 5 to 7 minutes, stirring occasionally. When the potatoes are halfway cooked, add the eggplant pieces. Mix them gently with the potatoes and masala. Cover the pan again and let everything cook on low to medium flame for another 10 to 15 minutes. Eggplants cook faster than potatoes, so keep checking and stirring gently to avoid breaking the soft pieces. If the mixture becomes too dry, you can sprinkle a little water to help with cooking. Once the vegetables are soft and fully cooked, taste the salt and adjust if needed. At the end, sprinkle a bit of garam masala and fresh coriander leaves on top. Turn off the heat and let it rest for a couple of minutes. Your Aloo Baingan curry is ready to serve. It tastes delicious with roti, chapati, or rice and makes a perfect comfort food for everyday meals — simple, light, and full of homely flavor.`
},
{
  title: "Zarda – Sweet Yellow Rice",
  description: "Zarda is a traditional Pakistani dessert made with fragrant basmati rice, sugar, milk, and a mix of dry fruits. Colored with saffron or yellow food color, it’s festive, aromatic, and commonly served at weddings and Eid. Sweet, nutty, and comforting.",
  category: "Dessert",
  image: "http://localhost:3000/images/zarda.png",
  ingredients: [
    "1 cup basmati rice",
    "½ cup sugar",
    "¼ cup milk",
    "¼ cup ghee",
    "4 green cardamoms",
    "Few drops yellow food color or saffron",
    "Chopped almonds, pistachios, coconut"
  ],
  instructions: `To make Zarda, start by washing good quality basmati rice two to three times until the water runs clear. Then soak the rice in water for about 30 minutes. While the rice is soaking, take a pot and boil some water with a few green cardamoms and a couple of cloves added in for flavor. When the water starts boiling, add a few drops of yellow food color or a small pinch of saffron, which gives Zarda its beautiful color and aroma. Now drain the soaked rice and add it to the boiling water. Let the rice cook until it is about 90% done — not fully soft, but almost there. Once it reaches that stage, drain the water completely and keep the rice aside.

Now in a separate large pan, heat some ghee or clarified butter. Add a few more cardamoms and some raisins, almonds, pistachios, and cashews. Lightly fry the dry fruits until they turn golden and aromatic. Now add sugar to the ghee — usually around ¾ to 1 cup of sugar for every cup of uncooked rice, depending on how sweet you like it. Stir well until the sugar melts and forms a syrup. Now add the boiled rice to this sugar mixture and gently mix everything so the rice gets evenly coated with the melted sugar and ghee. Sprinkle some kewra or rose water for extra fragrance if you have it. Cover the pot with a tight lid and let the rice steam on very low heat (this step is called “dum”) for about 10 to 15 minutes. This will help the rice absorb all the flavors and become soft and fluffy.

Once done, open the lid and gently fluff the rice with a spoon, being careful not to break the grains. The rice should look shiny, yellow, and sweet, with bits of dry fruits scattered throughout. You can also decorate it with some silver paper (warq) or extra nuts on top if you’re serving it for guests or a special event. Zarda is traditionally served at weddings and celebrations, but it’s also perfect as a special dessert after lunch or dinner. It’s rich, warm, and full of desi flavor — a sweet dish that always brings joy with every bite.`
},
{
  title: "Karahi Chicken – Wok-Cooked Chicken Curry",
  description: "Chicken Karahi is a spicy, rich tomato-based curry made in a wok-style pan (karahi). It’s one of the most iconic dishes in Pakistani cuisine, perfect for naan or roti. Cooked with minimal ingredients yet full of flavor, it’s a restaurant and home favorite.",
  category: "Desi",
  image: "http://localhost:3000/images/chicken karahi.png",
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
  instructions: `To make Chicken Karahi, start by heating some oil or ghee in a large, deep pan or wok (called “karahi” in Urdu). Once the oil is hot, add fresh, bone-in chicken pieces and fry them on medium heat. Cook the chicken until it changes color from pink to white and starts turning slightly golden. At this point, add crushed ginger and garlic and cook for a minute until the raw smell goes away. Now add chopped or blended tomatoes, and stir everything well. You don’t need onions in traditional karahi, so tomatoes are the base for the gravy. Let the tomatoes cook down and become soft, which takes around 10 to 15 minutes. Keep stirring occasionally. As the tomatoes break down, they’ll start mixing with the oil and chicken to form a thick gravy.

Now it’s time to add the spices — red chili powder, salt, crushed black pepper, and a little turmeric. Mix the spices into the chicken and cook everything together, letting the oil separate from the sides of the masala. You’ll see the gravy become thick and shiny as the chicken absorbs the flavors. Cover the pan and let it cook on low to medium heat for 10–15 more minutes so the chicken becomes fully tender and juicy. Stir occasionally and check the gravy thickness — if it gets too dry, you can add a small splash of water, but Karahi is usually a thick, dry-style curry. Once the chicken is soft and the oil has floated to the top, finish the dish by adding some freshly chopped green chilies, julienned ginger (thin slices), and a sprinkle of garam masala or crushed coriander seeds for a burst of aroma. You can also add a handful of fresh coriander leaves for garnish.

Turn off the heat and let the karahi rest for a minute so the flavors settle. Serve it hot straight from the pan with naan, chapati, or paratha. Chicken Karahi is known for its bold, spicy flavor, simple ingredients, and the thick masala that sticks perfectly to the chicken. It’s a classic in Pakistani cuisine and a favorite at dhabas and family dinners alike — rich, warming, and packed with flavor in every bite.`
},
{
  title: "Daal Chana – Yellow Lentil Curry",
  description: "Daal Chana is a nutritious and simple lentil curry made with split Bengal gram and tempered with garlic, cumin, and green chilies. It’s a vegetarian staple across Pakistani households and is often enjoyed with boiled rice or roti, along with pickle or salad.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/daal chana.png",
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
  instructions: `To make Daal Chana, first wash the yellow lentils (chana daal) thoroughly in water two to three times until the water runs clear. Then soak the lentils in water for about 30 minutes so they soften a bit and cook faster. After soaking, drain the water and place the lentils in a cooking pot with fresh water — enough to cover the daal by about an inch. Now place the pot on medium heat and let it come to a boil. Add a little salt and turmeric powder at this stage. As the daal cooks, foam may rise to the top — you can gently skim it off with a spoon. Let the daal cook uncovered for about 25 to 30 minutes until it becomes soft but not completely mushy. It should still hold its shape slightly but be soft enough to mash with a spoon. If needed, add a little more water during cooking to prevent it from drying out.

While the daal is boiling, you can prepare the tarka (flavored oil) in a separate pan. Heat some oil or ghee and add cumin seeds. Let them sizzle, then add finely chopped onions and fry them until they become golden brown. Next, add chopped tomatoes, ginger-garlic paste, and green chilies. Cook everything together until the tomatoes break down and blend with the onions to form a thick, flavorful paste. Add red chili powder, coriander powder, and a bit of garam masala. Let the tarka cook until the oil separates from the sides and the masala is well cooked. Once your daal is soft and the tarka is ready, pour the tarka into the pot of daal and mix it gently. Let everything simmer together on low heat for another 5 to 10 minutes so the flavors blend nicely.

At the end, taste and adjust the salt and spices if needed. Sprinkle fresh chopped coriander leaves on top and squeeze a bit of lemon juice for extra flavor if you like. Serve the daal hot with plain boiled rice, roti, or naan. It’s a simple, comforting, and wholesome dish that’s perfect for everyday meals — easy to digest, filling, and full of home-cooked warmth.

`
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
  instructions: `To make Beef Kofta Curry, first prepare the meatballs. Take minced beef (keema) and add finely chopped onions, green chilies, fresh coriander, ginger-garlic paste, salt, red chili powder, a bit of garam masala, and a spoon of roasted gram flour (besan) or breadcrumbs to help bind the mixture. Mix everything very well with your hands until all the ingredients blend evenly. You can also grind the mixture in a chopper to make it smooth and easy to shape. Once the mixture is ready, cover and let it rest in the fridge for about 20 to 30 minutes so the flavors settle and the keema becomes firmer. After that, take small portions of the mixture and roll them between your palms into round balls — not too big, not too small. Make sure they are tight and smooth so they don’t break while cooking. Set them aside on a plate.

Now let’s make the curry. In a pot, heat some oil and add cumin seeds. Then add finely chopped onions and fry them until golden brown. Add ginger-garlic paste and cook it for a minute to remove the raw smell. Now add chopped tomatoes and cook them down until they become soft and oily. Add spices like turmeric, red chili powder, coriander powder, salt, and a little garam masala. Cook this masala until it becomes thick and the oil starts separating from the sides. Now add water to create the curry base — not too thick, not too watery. Bring it to a gentle boil. Once the curry is bubbling, gently place the koftas into the pot one by one. Be very careful not to stir too much in the beginning so the koftas don’t break. Cover the pot and let the meatballs cook on medium to low heat for about 20 to 25 minutes. The koftas will slowly cook inside the curry and soak up all the flavor. After about 10 minutes, you can very gently stir the curry by shaking the pot or using a spoon from the side.

Once the oil floats to the top and the curry has thickened a bit, your kofta curry is almost ready. You can sprinkle some fresh coriander and a little garam masala on top for extra flavor. Serve it hot with plain rice, naan, or chapati. The meatballs will be juicy and soft, and the masala will be rich and spicy. Beef Kofta Curry is a traditional, heartwarming dish that tastes like home — perfect for lunch, dinner, or even a special family gathering.

`
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
  instructions: `To make Murgh Cholay, start by heating oil in a large pan or pot on medium heat. Once the oil is hot, add whole spices like a bay leaf, a cinnamon stick, and a few cloves if you like extra aroma. Then add finely chopped onions and cook them until they turn golden brown, which gives the base a rich flavor. Now add ginger-garlic paste and fry it for a minute until the smell fades. Add chicken pieces, preferably bone-in for more taste, and fry them with the onions until the chicken changes color and becomes slightly golden. This step helps lock in the flavor of the meat. Then add chopped tomatoes and stir everything well. Let the tomatoes cook until they soften and start mixing into the gravy. Now add your basic spices like red chili powder, turmeric, coriander powder, cumin powder, and salt. Mix everything and cook until the oil starts to separate from the masala — this shows that the base is properly cooked.

Once the masala is ready, add boiled chickpeas (chana) to the pan. You can use canned chickpeas or soak and boil them yourself beforehand. Stir the chickpeas and chicken together so they’re fully coated in the thick masala. Add enough water to make a curry, depending on how thick or thin you want it. Cover the pan and let the curry simmer on low heat for 20 to 25 minutes. This allows the chickpeas to absorb the spices and the chicken to become soft and juicy. Check the curry occasionally and gently stir to make sure nothing sticks. When the chicken is fully cooked and the curry looks rich and flavorful, turn off the heat. Finally, sprinkle fresh coriander, a little garam masala, and sliced green chilies on top for extra aroma and spice.

Serve Murgh Cholay hot with naan, roti, or boiled rice. It’s a hearty, spicy, and satisfying dish, full of desi flavor. It’s perfect for family lunches, special dinners, or even as a weekend treat. Every bite brings together the softness of chickpeas, the richness of the chicken, and the bold taste of traditional Pakistani masala.`
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
  instructions: `To make Vegetable Pulao, start by washing basmati rice two to three times until the water runs clear. Then soak the rice in water for about 20 to 30 minutes and set it aside. Meanwhile, chop your vegetables — you can use whatever you have like carrots, potatoes, peas, green beans, and capsicum. Keep the pieces medium-sized so they don’t become too soft while cooking. Now in a large pan or pot, heat some oil or ghee on medium heat. Add whole spices like cumin seeds, a few cloves, a cinnamon stick, a bay leaf, and a couple of green cardamoms for aroma. Let them sizzle for a few seconds until fragrant. Then add thinly sliced onions and cook them until golden brown. This adds deep flavor to the pulao. Once the onions are ready, add ginger-garlic paste and fry it for a minute until the raw smell goes away. Now add chopped tomatoes and cook until soft and mushy.

Next, add all your chopped vegetables and mix well. Sprinkle in some basic spices like salt, red chili powder, and a little garam masala or biryani masala if you want extra flavor. Cook the vegetables with the masala for 5 to 7 minutes, stirring often so they don’t burn. Now drain the soaked rice and add it to the pot with the vegetables. Gently stir the rice into the masala so every grain is coated. Be careful not to break the rice. Add water — usually the ratio is 1 cup of rice to 2 cups of water — and let the mixture come to a boil on high heat. Once it starts boiling, reduce the flame to low, cover the pot tightly with a lid, and let it cook for about 15 to 18 minutes. Do not open the lid in between. After the time is up, turn off the heat and let the pot sit for another 5 minutes so the steam can finish cooking the rice.

Finally, open the lid and fluff the rice gently with a fork or spoon. You’ll see each grain separate, and the vegetables soft but not broken. The pulao will be light, aromatic, and full of flavor from the spices and veggies. Serve hot with yogurt, raita, salad, or even a simple achar (pickle). It’s a perfect meal for lunchboxes, family dinners, or even small gatherings — easy to make, healthy, and comforting with every bite.`
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
  instructions: `To make Haleem, you need to prepare both the grains and the meat together. First, soak a mixture of grains such as cracked wheat (daliya), chana daal, masoor daal, moong daal, and rice for a few hours or overnight. This helps them become soft and easy to cook later. At the same time, boil your meat — usually beef or chicken — in a pressure cooker or pot with ginger-garlic paste, salt, turmeric, and some water until it becomes completely tender and easy to shred. Once the meat is soft, take it out and shred it into small fibers using a fork or your hands. Set it aside. Now cook the soaked lentils and wheat in plenty of water until everything is soft and mushy. This can take a while, but you can use a pressure cooker to speed up the process. Once cooked, blend or mash the lentil-wheat mixture with a hand blender or spoon until it turns into a smooth, thick paste.

In another large pot, heat some oil or ghee and fry sliced onions until golden brown. This will be your base for flavor. Take out a few onions for garnish and leave the rest in the pot. Add the shredded meat back into the pot along with the mashed wheat and daal mixture. Now add traditional Haleem spices like red chili powder, coriander powder, cumin powder, all-spice (garam masala), and salt. Mix everything together and keep stirring as you cook on low heat. You’ll need to stir often so the Haleem doesn’t stick to the bottom, and you’ll see it start to thicken and become creamy. Add water or meat stock little by little if it gets too thick. Let it cook slowly for about 30 to 40 minutes so that all the flavors mix beautifully and the texture becomes smooth and rich.

When the Haleem is ready, garnish it with the fried onions you saved earlier, fresh coriander, green chilies, lemon wedges, and a spoon of ghee or butter on top. Serve it hot with naan, paratha, or on its own in a bowl. Haleem is a special dish full of nutrition and warmth — thick, creamy, meaty, and full of deep flavor. It’s often made during Ramadan or at family gatherings, but it’s perfect for any cold day or when you want a hearty, filling meal.`
},
{
  title: "Anda Curry – Egg Masala",
  description: "Anda Curry is a simple yet delicious curry featuring hard-boiled eggs simmered in a rich tomato and onion-based gravy. It's a great alternative to meat dishes and is full of protein. Enjoy it with warm chapati or boiled rice.",
  category: "Desi",
  image: "http://localhost:3000/images/andha curry.png",
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
  instructions: `To make Anda Curry, first boil the eggs. Take about 4 to 6 eggs and place them in a pot of water. Boil them for around 10 to 12 minutes until they are hard-boiled. After boiling, remove the shells and set the eggs aside. You can gently poke them with a fork or make small cuts on the surface so they absorb the curry flavors better. Now heat some oil in a pan over medium heat. Add a few cumin seeds and let them crackle. Then add finely chopped onions and sauté them until they turn golden brown. This gives a rich base to the curry. Once the onions are nicely browned, add ginger-garlic paste and cook it for about a minute until the raw smell disappears. Then add finely chopped tomatoes and cook them down until they turn soft and blend well with the onions, forming a thick masala.

Now it's time to add the spices — red chili powder, turmeric, coriander powder, salt, and a little garam masala. Mix everything well and cook the masala for a few minutes until oil starts to separate from the mixture. This step is important for bringing out the true flavor of the curry. Once your masala is well cooked, gently place the boiled eggs into the pan and stir to coat them evenly with the spices. Be careful not to break the eggs. Let them cook with the masala for 5 to 7 minutes so they absorb all the flavors. Then add water depending on how much curry or gravy you want. Mix gently and cover the pan. Let it simmer on low heat for 10 to 15 minutes so the gravy thickens and the eggs become flavorful inside and out.

Finally, sprinkle fresh coriander leaves on top and serve hot with roti, naan, or rice. Anda Curry is a comforting, spicy, and satisfying dish that’s quick to make, especially when you want something desi but don’t have meat at home. The eggs turn soft and delicious inside a rich, spicy gravy — a perfect meal for lunch or dinner.

`
},
{
  title: "Besan Chilla – Spiced Gram Flour Pancake",
  description: "Besan Chilla is a savory pancake made with gram flour, vegetables, and spices. It's quick, healthy, and ideal for breakfast or lunchboxes. Crispy on the outside and soft inside, it's packed with flavor and protein.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/bhesan chilla.png",
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
  instructions: `To make Besan Chilla, start by taking some gram flour (called "besan" in Urdu/Hindi) in a mixing bowl. Then add finely chopped vegetables like onions, tomatoes, green chilies, and coriander leaves. You can also add grated carrots or capsicum if you like. Now add spices — a pinch of turmeric, red chili powder, salt, and a little cumin powder. Mix all the dry ingredients together. Slowly add water, a little at a time, while stirring with a spoon or whisk to make a smooth, lump-free batter. The batter should be pourable, like pancake or dosa batter — not too thick, not too watery. Let the batter rest for 5 to 10 minutes so the besan soaks up the flavors.

Now heat a non-stick pan or tawa on medium heat. Lightly grease it with oil. Once hot, pour a ladleful of batter onto the pan and gently spread it out in a round, thin circle like a pancake. Don’t make it too thick. Drizzle a few drops of oil around the edges and on top. Let the chilla cook for 2–3 minutes on one side until you see the edges turning golden and crisp. Flip it gently using a spatula and cook the other side for another 2 minutes until both sides are cooked properly and golden brown. Once done, remove it from the pan and serve hot.

Besan Chilla tastes best when eaten fresh, straight from the pan. You can enjoy it with green chutney, ketchup, yogurt, or pickle. It’s a quick, healthy, and tasty option for breakfast, lunch, or a light dinner — full of protein, fiber, and desi flavor in every bite.

`
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
  instructions: `To make Pakistani Kheer, first rinse and soak a small amount of rice (usually basmati) in water for about 30 minutes. Soaking helps the rice cook faster and become soft. In the meantime, take a deep, heavy-bottomed pot and pour in full-fat milk — about 1 liter if you’re making enough for 4 to 5 people. Place the pot on medium heat and let the milk come to a boil, stirring it occasionally so it doesn’t stick to the bottom. Once it starts to boil, reduce the heat and add the soaked and drained rice to the milk. Keep the flame low and let the rice cook slowly in the milk. Stir often to make sure nothing sticks or burns, especially at the bottom of the pot. This step can take some time — 30 to 40 minutes — but patience is key. As the rice cooks, it will start to soften and the milk will become thick and creamy.

When the rice is fully cooked and the milk has reduced to about half, add sugar according to your taste — usually around half a cup or a bit more if you like it sweeter. Stir the sugar in and let it dissolve completely. At this point, you can also add crushed cardamom (elaichi) for a lovely aroma and traditional flavor. Cook the kheer for another 10 to 15 minutes, stirring gently so the sugar doesn’t settle or burn. Once it reaches a rich, creamy consistency, turn off the heat. Now add chopped almonds, pistachios, or coconut flakes if you like, and stir them in. You can also add a few drops of rose water or kewra water for extra fragrance, though that’s optional.

Let the kheer cool slightly, then pour it into bowls. You can serve it warm, but many people prefer it chilled, so you can refrigerate it for a few hours before serving. Garnish with some extra nuts or silver leaf (chandi warq) if you want to make it look fancy. Pakistani Kheer is a comforting, creamy dessert that’s loved on special occasions like Eid, weddings, and family dinners. It’s sweet, milky, and full of tradition — a perfect ending to any meal.

`
},
{
  title: "Chapli Kebab – Peshawari Beef Patties",
  description: "Chapli Kebabs are spicy beef patties from Peshawar, made with crushed spices, herbs, and pomegranate seeds. These flat, crispy kebabs are shallow fried and served with naan and chutney. Bold, juicy, and delicious.",
  category: "Non-Vegetarian",
  image: "http://localhost:3000/images/chapli kebab.png",
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
  instructions: `To make Chapli Kebabs, start with good-quality minced beef (keema), preferably with a little fat, as it keeps the kebabs juicy and flavorful. Place the keema in a large mixing bowl. Now add finely chopped onions, tomatoes (with seeds removed so the mixture doesn’t get too watery), green chilies, fresh coriander leaves, and mint leaves. Then mix in crushed cumin seeds, coriander seeds, pomegranate seeds (anardana), and red chili flakes for that classic Peshawari flavor. Add salt, a bit of garam masala, and crushed black pepper for extra depth. For binding, add corn flour (makai ka atta) or gram flour (besan) — just a few tablespoons. Some people also like to add a bit of egg, but it’s optional. Mix everything very well using your hands until it becomes a firm and even mixture. Let it rest in the fridge for 20 to 30 minutes so the flavors blend and the keema becomes easier to handle.

Once the mixture is ready, wet your hands slightly with water or oil to prevent sticking. Take a handful of the mixture and shape it into a flat round patty — Chapli Kebabs are typically wider and flatter than regular kebabs. You can press a thin tomato slice into the center of each kebab if you want a traditional look. Now heat a generous amount of oil in a wide frying pan on medium heat. When the oil is hot, gently place the kebabs in the pan and cook them without moving too much. Fry each side for about 4 to 5 minutes until they are golden brown and cooked through. Flip carefully because Chapli Kebabs are soft and can break if handled roughly.

Once cooked, place them on paper towels to absorb extra oil. Serve them hot with naan, chutney, yogurt raita, or even wrapped in a paratha for a delicious roll. Chapli Kebabs are rich, spicy, and full of bold flavor with crispy edges and a juicy center — a famous street food from Peshawar that’s now loved all across Pakistan.`
},
{
  title: "Chicken Malai Boti – Creamy BBQ Chicken",
  description: "Chicken Malai Boti is a creamy and mildly spiced BBQ dish, made with boneless chicken marinated in cream, yogurt, and mild spices. Perfect for grilling or pan frying, it melts in the mouth and is ideal for Eid or BBQ nights.",
  category: "Non-Vegetarian",
  image: "http://localhost:3000/images/chicken malai boti.png",
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
  instructions: `To make Chicken Malai Boti, first cut boneless chicken (preferably from the breast or thighs) into medium-sized cubes and place them in a large bowl. Now it’s time to marinate the chicken to make it soft, juicy, and full of flavor. Add thick yogurt, fresh cream, ginger-garlic paste, salt, black pepper, white pepper, a small amount of green chili paste, lemon juice, and a little oil or melted butter to the chicken. You can also add a bit of grated cheese and a pinch of garam masala for extra richness and aroma. Mix everything very well so that each piece of chicken is fully coated with the creamy marinade. Then cover the bowl and let it rest in the fridge for at least 3 to 4 hours — overnight is even better. This helps the chicken become super soft and flavorful from the inside.

When you're ready to cook, take the marinated chicken out of the fridge and let it sit at room temperature for a few minutes. Now thread the chicken pieces onto skewers if you're using a grill or barbecue. If you don’t have a grill, you can also cook them in a non-stick pan or bake them in the oven. For grilling, place the skewers on a hot grill or over hot coals and cook the chicken until it's golden, slightly charred, and cooked through — usually 10–15 minutes, turning occasionally. Brush with melted butter or oil while grilling to keep the chicken juicy and give it a shiny finish. If using a pan, heat a little oil, add the chicken pieces, and cook them on medium heat until they turn tender and light golden on all sides. For baking, place the pieces on a tray lined with foil and bake at 180°C (350°F) for 20–25 minutes, flipping halfway.

Once done, sprinkle a bit of chaat masala or lemon juice on top and serve hot with naan, paratha, or even over rice. Chicken Malai Boti is creamy, soft, mildly spicy, and full of smoky BBQ flavor — perfect for family dinners, parties, or as a special treat for guests. It melts in the mouth and is loved by both kids and adults alike.`
},
{
  title: "Moong Daal – Yellow Lentil Soup",
  description: "Moong Daal is a light, protein-rich lentil dish that's quick to cook and easy to digest. It's perfect for everyday meals and often paired with boiled rice or chapati. Tempered with garlic and cumin, it's comforting and nourishing.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/Moong Daal – Yellow Lentil Soup.png",
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
  instructions: `To make Moong Daal, start by washing the yellow lentils (moong daal) two to three times in cold water until the water becomes clear. Then soak the daal in water for about 20 to 30 minutes to help it cook faster and become soft. After soaking, drain the water and place the daal in a cooking pot with fresh water — usually about 3 cups of water for 1 cup of daal. Put the pot on medium heat and let the daal start boiling. Add a pinch of turmeric powder and some salt to taste. As it boils, some foam might rise to the top — just skim it off gently with a spoon. Let the daal cook for about 20 to 25 minutes or until it becomes soft and creamy. You can mash it gently with a spoon or use a hand blender if you want it smoother. If it becomes too thick, you can always add a little more water to adjust the consistency like a light soup.

While the daal is cooking, make the tarka (tempering), which adds all the flavor. In a small frying pan, heat some oil or ghee. Add cumin seeds and let them sizzle for a few seconds. Then add sliced garlic and let it turn golden and fragrant. You can also add some dried red chilies or green chilies for heat, and a pinch of red chili powder if you like it spicy. Once everything is fried nicely and smells amazing, carefully pour the hot tarka over the cooked daal and stir it in. The sizzle when the tarka hits the daal is one of the best parts of making this dish!

Finally, garnish the daal with fresh chopped coriander leaves and squeeze a little lemon juice on top if you like a slight tang. Serve it hot with boiled rice, roti, or enjoy it as a light soup. Moong Daal is not only delicious, but also very light, healthy, and soothing — perfect for days when you want comfort food that’s easy on the stomach and quick to make. It’s a simple dish, but full of homely warmth in every bite.`
},

{
  title: "Lassi – Traditional Yogurt Drink",
  description: "Lassi is a refreshing yogurt-based drink that's a staple in Pakistani households, especially during summer. Sweet, creamy, and cooling, it's made with yogurt, milk, sugar, and cardamom. It's not only hydrating but also aids digestion, making it perfect after a hearty meal.",
  category: "Drinks",
  image: "http://localhost:3000/images/Lassi.jpg",
  ingredients: [
    "1 cup plain yogurt",
    "½ cup cold water or milk",
    "2 tbsp sugar (adjust to taste)",
    "¼ tsp cardamom powder",
    "Ice cubes",
    "Chopped nuts for garnish (optional)"
  ],
  instructions: `To make Lassi, start by taking thick, fresh plain yogurt in a bowl — it should be slightly chilled for the best taste. Use around one cup of yogurt for every one to one-and-a-half cups of cold water. Whisk the yogurt first with a spoon or a hand whisk to make it smooth and creamy. Then slowly add cold water and keep whisking until it turns into a light, foamy drink. The texture should be silky and slightly frothy. Now add sugar if you want to make sweet lassi — usually 2 to 3 teaspoons for one cup of yogurt, but you can add more or less depending on how sweet you like it. Also, add a pinch of cardamom powder for a gentle fragrance, and a few drops of rose water if you want a more traditional, refreshing flavor. Keep stirring or blending until the sugar dissolves and everything mixes well. If you like, you can also add a few ice cubes while blending or pour the lassi over ice in a glass to keep it chilled.

Once ready, pour the lassi into a tall glass and garnish it with a sprinkle of cardamom powder, crushed pistachios, or a spoonful of malai (fresh cream) on top. Sweet lassi is best enjoyed fresh — cold, creamy, and soothing. It’s a perfect drink for hot summer days, after spicy food, or even as a light afternoon treat. If you prefer salty lassi, simply skip the sugar and instead add a pinch of salt, roasted cumin powder, and black pepper while blending — this version is tangy, cooling, and great for digestion.

Lassi is more than just a drink — it’s part of traditional desi culture, offering cool relief and comfort in every sip.`
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
  instructions: `To make Shahi Tukray, start by preparing the bread. Take regular white bread slices and cut off the edges. Then cut each slice into two triangles or squares, depending on the shape you like. In a frying pan, heat ghee or oil on medium heat and shallow-fry the bread slices until they turn golden brown and crispy on both sides. Once fried, place them on paper towels to remove extra oil. Now in a separate pot, start preparing the thickened sweet milk, which is the heart of this dish. Pour full-fat milk into a heavy-bottomed pan and bring it to a gentle boil. Keep stirring the milk often so it doesn’t burn at the bottom. Once it starts boiling, reduce the flame and let it simmer. Add sugar to taste, crushed cardamom pods for flavor, and let the milk reduce to about half its original amount. Stir continuously so it becomes thick and creamy. You can also add a bit of condensed milk for extra richness, or a few drops of rose water or kewra for fragrance.

Once the milk becomes thick and sweet, it’s time to assemble. Take a large dish or tray and place the fried bread slices in a single layer. Pour the hot sweet milk over the bread slowly, making sure each piece soaks it up well. The bread will begin to soften but still hold its shape. Let it sit for a while so the flavors absorb completely. Now sprinkle the top with chopped almonds, pistachios, and crushed dry coconut if you like. For a royal touch, you can even add edible silver foil (chandi warq) on top. You can serve Shahi Tukray warm or chilled — both taste amazing. Chilling it for a couple of hours helps the bread soak up all the flavors and gives it a creamy texture like pudding.

Shahi Tukray is a traditional Mughal dessert, rich and luxurious, perfect for Eid, weddings, or any special occasion. With its creamy milk, soft bread, and aromatic flavors, it feels like royalty in every bite — simple ingredients turned into something truly special.`
},
{
  title: "Sattu Drink – Roasted Barley Cooler",
  description: "Sattu is a nutritious summer drink made from roasted barley flour mixed with water, lemon, and spices. Popular in Punjab, it's refreshing, energizing, and helps beat the heat. Both savory and sweet versions exist.",
  category: "Drinks",
  image: "http://localhost:3000/images/sattu Drink.jpg",
  ingredients: [
    "2 tbsp sattu (roasted barley or chickpea flour)",
    "1 glass cold water",
    "1 tsp lemon juice",
    "¼ tsp black salt",
    "1 tsp sugar (optional)",
    "Mint leaves"
  ],
  instructions: `To make Sattu Drink, start by getting sattu powder — this is roasted barley (or sometimes roasted gram) that has been finely ground into a flour-like powder. You can buy it ready-made or prepare it at home by roasting barley and grinding it. Now take a glass and add about 2 tablespoons of sattu powder to it. If you’re making a sweet version, add 1 to 2 teaspoons of sugar (or more if you like it sweeter), a pinch of cardamom powder for flavor, and pour in 1 glass of cold water. Stir it really well with a spoon or whisk until everything is fully mixed and smooth. You can also add a few drops of rose water or a splash of milk if you want a richer taste. Add ice cubes if you want it extra cold, and your sweet sattu drink is ready — thick, slightly nutty, and very refreshing.

If you prefer the salty/spiced version, then instead of sugar, add a pinch of salt, roasted cumin powder, black salt, and a squeeze of fresh lemon juice. Mix it with cold water just like the sweet version, and stir until smooth. You can also add finely chopped mint leaves or coriander for a fresh, earthy taste. Some people even add grated cucumber or crushed green chilies for a bold, cooling, savory flavor. Once mixed, pour it into a glass with some ice cubes, and enjoy it fresh.

Sattu Drink is not just refreshing — it’s also full of energy, fiber, and cooling properties, which makes it perfect for hot summer days, fasting, or even as a quick and filling breakfast. It keeps your stomach full, your body cool, and your energy high — a simple desi superdrink that’s both healthy and satisfying.

`
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
  instructions: `To make Fruit Chaat, start by gathering a variety of fresh, ripe fruits. Common choices include bananas, apples, oranges, mangoes, papaya, pomegranate seeds, grapes, and sometimes even guava or watermelon. Wash all the fruits well, peel them if needed, and cut them into small bite-sized pieces. Try to keep the fruit chunks even in size so they mix well and look beautiful. Now place all the chopped fruits into a large mixing bowl. Once the fruits are ready, it’s time to prepare the special chaat flavor. Sprinkle some chaat masala over the fruits — this is a tangy, slightly spicy masala that brings all the flavors together. Then add a pinch of roasted cumin powder, a little red chili powder (optional, if you like a slight kick), and black salt for that classic desi taste. To balance the tanginess, squeeze in fresh lemon juice and, if you like a bit of sweetness, add a spoon or two of orange juice or a little honey or sugar.

Now gently toss everything together with a spoon, mixing all the fruits and spices evenly without mashing them. Let the chaat rest for 5–10 minutes so the flavors can blend well. You can also chill it in the fridge before serving for an extra refreshing taste. Once ready, serve it in small bowls or cups. You can also garnish it with mint leaves or pomegranate seeds on top for a pretty, colorful look.

Fruit Chaat is a perfect mix of sweet, sour, tangy, and spicy — a true explosion of flavors in every bite. It’s light, refreshing, and super healthy, making it great as a snack, appetizer, or even part of your iftar in Ramadan. It’s quick to make, doesn’t need any cooking, and brings a desi twist to simple fruits — loved by kids and adults alike.`
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
  instructions: `To make Falooda, begin by preparing all the parts that go into this layered dessert. First, boil some thin vermicelli (also called seviyan or falooda sev) in water until it becomes soft — this usually takes just a few minutes. Once cooked, drain it and rinse it with cold water to stop the cooking, then set it aside. Next, soak some basil seeds (tukhmalanga or sabja) in a bowl of water — they’ll take about 10 to 15 minutes to swell up and become jelly-like. While the seeds are soaking, prepare the rose milk. In a jug or bowl, mix cold full-fat milk with a few tablespoons of rose syrup (like Rooh Afza). Stir well until the milk turns a beautiful pink and the rose flavor spreads evenly. You can also add a little sugar if you like it sweeter.

Now it’s time to layer the Falooda. Take a tall glass and first add a spoonful of the soaked basil seeds at the bottom. Then add a few tablespoons of the cooked vermicelli. Next, pour in the chilled rose milk carefully so the layers stay neat. After that, add a scoop of vanilla or kulfi ice cream on top. You can also add small cubes of jelly (optional) if you want extra texture and color. Finally, garnish the Falooda with crushed nuts like pistachios or almonds, a few drops of rose syrup on top, and maybe even a cherry if you want it to look extra fancy.

Serve it immediately with a long spoon and a straw. When you take a sip or a spoonful, you’ll get the cool, creamy rose milk, the chewy vermicelli, the tiny crunchy basil seeds, and the sweet ice cream all at once. Falooda is not just a dessert — it’s an experience of textures and flavors. It’s cool, colorful, and perfect for summer days, festive occasions, or whenever you want to treat yourself to something truly delightful.

`
},
{
  title: "Bhindi Masala – Spiced Okra Stir Fry",
  description: "Bhindi Masala is a popular Pakistani and Indian dish made from tender okra sautéed with onions, tomatoes, and aromatic spices. It's a dry, flavorful curry that pairs perfectly with roti or paratha. A vegetarian delight for any meal.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Bhindi Masala – Spiced Okra Stir Fry.jpg",
  ingredients: [
    "500g okra (bhindi), washed and sliced",
    "2 onions, thinly sliced",
    "2 tomatoes, chopped",
    "1 tsp ginger garlic paste",
    "½ tsp cumin seeds",
    "½ tsp turmeric",
    "½ tsp red chili powder",
    "½ tsp coriander powder",
    "Salt to taste",
    "2 tbsp oil"
  ],
  instructions: `Wash the bhindi thoroughly and dry completely with a cloth before slicing to avoid sliminess. Heat oil in a pan, add cumin seeds and let them splutter. Add sliced onions and sauté until golden brown. Stir in ginger garlic paste and cook for a minute.

Add chopped tomatoes, turmeric, red chili powder, coriander powder, and salt. Cook until tomatoes soften and the oil begins to separate. Now add the sliced okra and stir well. Cook uncovered on medium flame for 10–15 minutes, stirring occasionally until okra is tender and cooked through.

Do not cover the pan, as it causes the okra to become sticky. Once done, serve hot with roti or paratha.`
},
{
  title: "Karahi Paneer – Spicy Cottage Cheese Curry",
  description: "Karahi Paneer is a rich and spicy dish made with cubes of soft paneer cooked in a tomato-based gravy with bell peppers and signature karahi spices. This vegetarian version of the famous chicken karahi is perfect with naan or rice.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Karahi Paneer – Spicy Cottage Cheese Curry.jpg",
  ingredients: [
    "250g paneer, cubed",
    "2 tomatoes, pureed",
    "1 onion, chopped",
    "1 green bell pepper, chopped",
    "1 tsp ginger garlic paste",
    "1 tsp red chili flakes",
    "½ tsp turmeric",
    "½ tsp garam masala",
    "Salt to taste",
    "2 tbsp oil",
    "Fresh coriander for garnish"
  ],
  instructions: `Heat oil in a karahi or deep pan. Add chopped onions and sauté until golden. Stir in ginger garlic paste and sauté for a minute. Add pureed tomatoes, turmeric, red chili flakes, and salt. Cook on medium heat until the oil separates.

Add chopped bell pepper and cook for a few minutes until slightly soft. Add paneer cubes and gently mix. Cover and simmer for 5–7 minutes to let the paneer absorb the flavors.

Sprinkle garam masala and garnish with fresh coriander. Serve hot with naan or roti.`
},
{
  title: "Aloo Paratha – Stuffed Potato Flatbread",
  description: "Aloo Paratha is a beloved Pakistani breakfast made by stuffing spicy mashed potatoes inside whole wheat dough and cooking it on a tawa with ghee or oil. Crispy on the outside and soft inside, it's perfect with yogurt or pickles.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Aloo Paratha – Stuffed Potato Flatbread.jpg",
  ingredients: [
    "2 cups whole wheat flour",
    "3 boiled potatoes, mashed",
    "1 green chili, finely chopped",
    "1 tsp cumin seeds",
    "¼ tsp red chili powder",
    "Salt to taste",
    "Fresh coriander, chopped",
    "Water (for kneading)",
    "Ghee or oil (for frying)"
  ],
  instructions: `Prepare the dough by mixing wheat flour with water and kneading into a smooth dough. Let it rest for 15 minutes.

In a bowl, mix mashed potatoes with green chilies, cumin, red chili powder, salt, and coriander. Divide the dough and stuffing into equal portions. Roll out a dough ball slightly, place stuffing in the center, seal the edges, and roll again into a flat circle.

Heat a tawa and cook the paratha on both sides, applying ghee until golden and crisp. Serve hot with yogurt or pickle.`
},
{
  title: "Achari Chicken – Tangy Pickled Chicken Curry",
  description: "Achari Chicken is a spicy and tangy curry inspired by South Asian pickles. It features chicken cooked with pickling spices, yogurt, and tomatoes for a zesty, mouthwatering flavor that pairs well with naan or basmati rice.",
  category: "Non-Vegetarian",
image: "http://localhost:3000/images/Achari Chicken – Tangy Pickled Chicken Curry.jpg",
  ingredients: [
    "500g chicken, bone-in",
    "1 onion, sliced",
    "2 tomatoes, chopped",
    "½ cup yogurt",
    "1 tsp mustard seeds",
    "1 tsp fennel seeds",
    "1 tsp nigella seeds (kalonji)",
    "1 tsp fenugreek seeds",
    "1 tsp red chili powder",
    "½ tsp turmeric",
    "Salt to taste",
    "3 tbsp oil"
  ],
  instructions: `Heat oil in a pan and add mustard, fennel, nigella, and fenugreek seeds. Let them crackle. Add sliced onions and sauté until golden. Stir in chopped tomatoes and cook until soft.

Add yogurt, red chili powder, turmeric, and salt. Cook for 2–3 minutes. Add chicken pieces and coat well with the achari masala. Cover and cook on medium heat until chicken is tender and oil separates.

Serve hot with naan or rice.`
},
{
  title: "Nihari – Slow-Cooked Beef Stew",
  description: "Nihari is a rich, spicy beef stew traditionally slow-cooked overnight with bone marrow and warming spices. Often eaten as a breakfast dish in Pakistan, it is served with naan, lemon, and fresh ginger slices.",
  category: "Non-Vegetarian",
image: "http://localhost:3000/images/Nihari – Slow-Cooked Beef Stew.jpg",
  ingredients: [
    "1 kg beef shank with bone marrow",
    "2 onions, sliced",
    "2 tbsp wheat flour",
    "1 tbsp nihari masala",
    "1 tbsp ginger garlic paste",
    "Salt to taste",
    "Oil or ghee",
    "Water (for cooking)",
    "Julienned ginger and lemon wedges (for garnish)"
  ],
  instructions: `Heat oil in a large pot. Add onions and fry until golden brown. Add ginger garlic paste and cook for 1 minute. Add nihari masala and salt. Stir and add beef shank pieces.

Pour in enough water to cover the meat. Cover and cook on low heat for 4–6 hours until meat is tender. Mix wheat flour with water to make a slurry, and add to the stew to thicken it.

Simmer for another 30 minutes. Garnish with ginger and lemon. Serve with naan.`
},
{
  title: "Baingan Bharta – Roasted Eggplant Mash",
  description: "Baingan Bharta is a traditional Punjabi dish made by roasting eggplant and mixing it with sautéed onions, tomatoes, and spices. Smoky, creamy, and flavorful, it's served best with hot chapatis.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Baingan Bharta – Roasted Eggplant Mash.jpg",
  ingredients: [
    "2 large eggplants",
    "1 onion, chopped",
    "2 tomatoes, chopped",
    "2 green chilies, chopped",
    "1 tsp ginger garlic paste",
    "½ tsp turmeric",
    "½ tsp red chili powder",
    "Salt to taste",
    "2 tbsp oil",
    "Fresh coriander for garnish"
  ],
  instructions: `Roast the eggplants directly over the flame or in the oven until skin is charred and inside is soft. Let them cool, peel the skin, and mash the pulp.

Heat oil in a pan, add onions, and sauté until golden. Add ginger garlic paste and green chilies. Stir in tomatoes, turmeric, chili powder, and salt. Cook until tomatoes are soft.

Add the mashed eggplant and cook for 5–7 minutes. Garnish with coriander and serve hot.`
},
{
  title: "Aloo Gosht – Mutton and Potato Curry",
  description: "Aloo Gosht is a traditional meat and potato curry loved across Pakistan. Tender mutton pieces and potatoes are cooked together in a flavorful onion-tomato gravy. It's comforting and perfect with rice or roti.",
  category: "Non-Vegetarian",
image: "http://localhost:3000/images/Aloo Gosht – Mutton and Potato Curry.jpg",
  ingredients: [
    "500g mutton",
    "2 potatoes, peeled and cubed",
    "2 onions, sliced",
    "2 tomatoes, chopped",
    "1 tbsp ginger garlic paste",
    "1 tsp turmeric",
    "1 tsp red chili powder",
    "Salt to taste",
    "Oil or ghee",
    "Water (for gravy)",
    "Fresh coriander for garnish"
  ],
  instructions: `Heat oil in a pressure cooker or pot. Add onions and sauté until golden. Add ginger garlic paste and stir well. Add chopped tomatoes, turmeric, red chili powder, and salt. Cook until tomatoes are soft.

Add mutton and fry on high heat for 5–7 minutes. Add water, cover, and cook until meat is tender. Add potatoes and cook until soft.

Simmer until desired gravy thickness. Garnish with fresh coriander and serve.`
},
{
  title: "Suji ka Halwa – Semolina Sweet Pudding",
  description: "Suji ka Halwa is a classic South Asian dessert made from roasted semolina, sugar, and ghee, flavored with cardamom. It's served on festive occasions, breakfast, or alongside puris for a traditional meal.",
  category: "Dessert",
image: "http://localhost:3000/images/Suji ka Halwa – Semolina Sweet Pudding.jpg",
  ingredients: [
    "1 cup semolina (suji)",
    "¾ cup sugar",
    "¼ cup ghee",
    "2 cups water",
    "¼ tsp cardamom powder",
    "Chopped nuts for garnish"
  ],
  instructions: `Heat ghee in a pan. Add semolina and roast on low flame, stirring continuously until it turns golden and aromatic.

In a separate pot, boil water with sugar and cardamom powder. Slowly add the hot syrup to the roasted semolina while stirring to avoid lumps.

Cook until the mixture thickens and leaves the sides of the pan. Garnish with chopped nuts and serve warm.`
},
{
  title: "Dahi Bhalla – Lentil Fritters in Yogurt",
  description: "Dahi Bhalla is a refreshing Pakistani chaat made of soft lentil fritters soaked in spiced yogurt and topped with tamarind chutney. It's a cool and tangy street-style snack perfect for summer.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Dahi Bhalla – Lentil Fritters in Yogurt.jpg",
  ingredients: [
    "1 cup urad dal (split black lentils)",
    "2 cups yogurt",
    "½ tsp roasted cumin powder",
    "½ tsp red chili powder",
    "Salt to taste",
    "Tamarind chutney",
    "Chaat masala for garnish"
  ],
  instructions: `Soak lentils for 4 hours, then grind into a thick paste. Beat well to make it fluffy. Heat oil and fry small spoonfuls until golden.

Soak the fried bhallas in warm water for 10 minutes, then gently squeeze out excess water.

Whisk yogurt with salt, cumin, and chili powder. Place bhallas in yogurt, drizzle tamarind chutney, and sprinkle chaat masala. Serve chilled.`
},
{
  title: "Pakora – Crispy Vegetable Fritters",
  description: "Pakoras are deep-fried fritters made with gram flour and vegetables like onions, potatoes, or spinach. Crispy, spicy, and perfect for tea time, they’re a rainy-day favorite across Pakistan.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Pakora – Crispy Vegetable Fritters.jpg",
  ingredients: [
    "1 cup gram flour (besan)",
    "1 onion, sliced",
    "1 potato, sliced",
    "1 green chili, chopped",
    "½ tsp carom seeds (ajwain)",
    "½ tsp red chili powder",
    "Salt to taste",
    "Water as needed",
    "Oil for frying"
  ],
  instructions: `In a bowl, mix gram flour, spices, and salt. Add water gradually to make a thick batter. Add sliced vegetables and mix well.

Heat oil in a deep pan. Drop spoonfuls of the batter into hot oil and fry until golden and crispy.

Serve hot with chutney or ketchup.`
},
{
  title: "Tandoori Chicken – Spiced Grilled Chicken",
  description: "Tandoori Chicken is a famous Pakistani and Indian BBQ dish where chicken is marinated in a mix of yogurt, lemon juice, and bold spices, then grilled to perfection. Juicy inside and charred outside, it’s a flavor-packed favorite.",
  category: "Non-Vegetarian",
image: "http://localhost:3000/images/tandoori-Chicken.jpg",
  ingredients: [
    "1 kg chicken, cut into pieces",
    "1 cup yogurt",
    "1 tbsp lemon juice",
    "1 tbsp ginger garlic paste",
    "1 tsp red chili powder",
    "1 tsp turmeric",
    "1 tsp garam masala",
    "Salt to taste",
    "Red food color (optional)",
    "Oil or butter for brushing"
  ],
  instructions: `Make deep cuts in the chicken pieces. Mix yogurt, lemon juice, ginger garlic paste, spices, and food color to form a marinade. Coat the chicken thoroughly and let it marinate for at least 4 hours or overnight.

Preheat grill or oven to 200°C. Place chicken on a tray or grill rack. Cook for 25–30 minutes, turning halfway and brushing with oil or butter, until fully cooked and charred. Serve with mint chutney.`
},
{
  title: "Mutanjan – Sweet Colored Rice",
  description: "Mutanjan is a traditional Pakistani dessert made from basmati rice, sugar, dry fruits, and food coloring. It’s often served at weddings and festive occasions and features both color and flavor in every bite.",
  category: "Dessert",
image: "http://localhost:3000/images/Mutanjan – Sweet Colored Rice.png",
  ingredients: [
    "2 cups basmati rice",
    "1.5 cups sugar",
    "¼ cup ghee",
    "¼ cup mixed dry fruits",
    "¼ cup candied fruits (tutti frutti)",
    "2–3 cardamom pods",
    "Food coloring (red, green, yellow)",
    "Few drops of kewra water"
  ],
  instructions: `Soak rice for 30 minutes and boil until 90% done. Drain and set aside. In a pan, heat ghee and add cardamom. Add sugar and ½ cup water to make syrup.

Add rice to the syrup. Sprinkle a few drops of different food colors on separate sections. Add dry fruits, kewra, and tutti frutti.

Cover and cook on very low heat (dum) for 10–15 minutes until the sugar is absorbed and rice is fully cooked. Fluff gently and serve warm.`
},
{
  title: "Tarka Daal – Lentils with Tempered Spices",
  description: "Tarka Daal is a comforting Pakistani dish made by boiling lentils until soft, then pouring over a hot, spiced oil tempering for extra flavor. It’s a simple, hearty meal best enjoyed with rice or roti.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Tarka Daal – Lentils with Tempered Spices.jpg",
  ingredients: [
    "1 cup mixed lentils (masoor + moong)",
    "1 onion, chopped",
    "2 tomatoes, chopped",
    "1 tsp garlic paste",
    "1 tsp cumin seeds",
    "¼ tsp turmeric",
    "½ tsp red chili powder",
    "Salt to taste",
    "2 tbsp ghee or oil",
    "Fresh coriander and green chilies for garnish"
  ],
  instructions: `Wash and boil lentils with turmeric, red chili, salt, and enough water until soft. Mash slightly and simmer.

In a separate pan, heat ghee. Add cumin seeds and let them splutter. Add garlic and onions; cook until golden. Add tomatoes and sauté until soft.

Pour this tarka over the cooked daal. Garnish with chopped coriander and green chilies. Serve hot.`
},
{
  title: "Aloo Tikki – Spiced Potato Patties",
  description: "Aloo Tikki are shallow-fried potato patties flavored with herbs and spices. Crispy outside and soft inside, they’re perfect as a snack, in burgers, or served with chutney.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Aloo Tikki – Spiced Potato Patties.jpg",
  ingredients: [
    "4 potatoes, boiled and mashed",
    "1 green chili, chopped",
    "1 tsp chaat masala",
    "½ tsp red chili powder",
    "½ tsp cumin powder",
    "Salt to taste",
    "2 tbsp cornflour",
    "Oil for frying"
  ],
  instructions: `In a bowl, mix mashed potatoes with green chili, chaat masala, red chili, cumin, salt, and cornflour. Divide into small balls and flatten into tikkis.

Heat oil in a pan and shallow fry the tikkis on medium heat until both sides are golden and crispy. Serve with mint or tamarind chutney.`
},
{
  title: "Moong Daal Halwa – Rich Lentil Dessert",
  description: "Moong Daal Halwa is a rich and festive Pakistani dessert made by slow-cooking ground yellow lentils in ghee, flavored with cardamom and garnished with nuts. It’s aromatic, indulgent, and perfect for celebrations.",
  category: "Dessert",
image: "http://localhost:3000/images/Moong Daal Halwa – Rich Lentil Dessert.jpg",
  ingredients: [
    "1 cup yellow moong daal (soaked)",
    "1 cup sugar",
    "1 cup ghee",
    "2 cups milk",
    "½ tsp cardamom powder",
    "Chopped almonds and pistachios"
  ],
  instructions: `Grind soaked daal into a coarse paste. Heat ghee in a pan and add the daal paste. Cook on medium heat, stirring constantly, until golden and aromatic.

In another pot, warm milk and dissolve sugar in it. Add this slowly to the cooked daal while stirring to avoid splashing.

Cook until mixture thickens and ghee separates. Add cardamom and garnish with nuts. Serve warm.`
},
{
  title: "Gobi Aloo – Cauliflower and Potato Curry",
  description: "Gobi Aloo is a dry-style curry featuring potatoes and cauliflower stir-fried with traditional spices. It’s a quick, everyday vegetarian meal that goes great with roti or rice.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Gobi Aloo – Cauliflower and Potato Curry.jpg",
  ingredients: [
    "1 cauliflower, cut into florets",
    "2 potatoes, cubed",
    "1 onion, sliced",
    "1 tomato, chopped",
    "1 tsp cumin seeds",
    "½ tsp turmeric",
    "½ tsp red chili powder",
    "Salt to taste",
    "2 tbsp oil",
    "Fresh coriander"
  ],
  instructions: `Heat oil and add cumin seeds. Once they splutter, add onions and sauté until light golden. Add potatoes and cook for 5 minutes.

Add cauliflower, turmeric, red chili, and salt. Mix well, cover, and cook until vegetables are tender. Add chopped tomato and cook for another 5 minutes uncovered.

Garnish with coriander and serve hot.`
},
{
  title: "Matar Pulao – Pea Rice",
  description: "Matar Pulao is a fragrant rice dish made by cooking basmati rice with green peas, spices, and caramelized onions. It’s light yet flavorful and pairs well with raita or curry.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Matar Pulao – Pea Rice.jpg",
  ingredients: [
    "2 cups basmati rice",
    "1 cup green peas",
    "1 onion, sliced",
    "2–3 cloves",
    "1 bay leaf",
    "1 small cinnamon stick",
    "Salt to taste",
    "2 tbsp oil or ghee",
    "4 cups water"
  ],
  instructions: `Rinse and soak rice for 30 minutes. Heat oil in a pot, add whole spices and sliced onion. Sauté until golden.

Add peas and drained rice. Stir for a minute, then add salt and water. Bring to a boil, then cover and simmer on low heat for 12–15 minutes until rice is cooked.

Fluff with a fork and serve warm.`
},
{
  title: "Chicken Shashlik – Pakistani Skewered BBQ",
  description: "Chicken Shashlik is a fusion BBQ dish made with marinated chicken, bell peppers, and onions, skewered and grilled or pan-fried. It’s tangy, smoky, and served with rice or chutney.",
  category: "Non-Vegetarian",
image: "http://localhost:3000/images/Chicken Shashlik – Pakistani Skewered BBQ.jpg",
  ingredients: [
    "500g boneless chicken cubes",
    "1 onion, cubed",
    "1 green bell pepper, cubed",
    "1 tbsp soy sauce",
    "1 tbsp chili garlic sauce",
    "1 tbsp ketchup",
    "½ tsp black pepper",
    "Salt to taste",
    "1 tbsp oil"
  ],
  instructions: `Marinate chicken with sauces, salt, pepper, and oil for 1–2 hours. Thread chicken, onion, and bell pepper alternately onto skewers.

Grill or pan-fry until chicken is fully cooked and slightly charred. Serve with fried rice or chutney.`
},
{
  title: "Sheer Khurma – Festive Vermicelli Dessert",
  description: "Sheer Khurma is a creamy, luxurious dessert made with vermicelli, milk, dates, and dry fruits. It’s traditionally served during Eid and other festive occasions in Pakistan.",
  category: "Dessert",
image: "http://localhost:3000/images/Sheer Khurma – Festive Vermicelli Dessert.jpg",
  ingredients: [
    "1 liter milk",
    "½ cup vermicelli",
    "¼ cup sugar",
    "5–6 dates, chopped",
    "2 tbsp ghee",
    "Chopped nuts (almonds, pistachios)",
    "¼ tsp cardamom powder"
  ],
  instructions: `Heat ghee in a pan, roast vermicelli until golden. In another pot, bring milk to a boil. Add roasted vermicelli and cook until soft.

Add chopped dates, sugar, cardamom, and nuts. Simmer for 10–15 minutes until thick and creamy. Serve warm or chilled.`
},
{
  title: "Vegetable Cutlets – Crispy Veg Patties",
  description: "Vegetable Cutlets are shallow-fried patties made with mashed vegetables, breadcrumbs, and spices. Crunchy outside and soft inside, they’re a perfect snack or starter with chutney or ketchup.",
  category: "Vegetarian",
image: "http://localhost:3000/images/Vegetable Cutlets – Crispy Veg Patties.jpg",
  ingredients: [
    "2 potatoes, boiled and mashed",
    "1 carrot, grated",
    "¼ cup green peas",
    "1 green chili, chopped",
    "½ tsp garam masala",
    "Salt to taste",
    "Breadcrumbs for coating",
    "Oil for frying"
  ],
  instructions: `Boil or steam all vegetables until soft. Mix together with spices and salt. Shape into small patties. Coat each patty in breadcrumbs.

Shallow fry in oil until golden brown and crispy. Serve hot with ketchup or chutney.`
},
{
  title: "Tamarind Chutney – Imli Ki Meethi Chutney",
  description: "Tamarind Chutney is a tangy-sweet condiment made with tamarind pulp, jaggery or sugar, and a blend of spices. It’s commonly served with samosas, chaat, pakoras, and other street snacks in Pakistan and India.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/Tamarind Chutney – Imli Ki Meethi Chutney.jpg",
  ingredients: [
    "1 cup tamarind pulp",
    "1 cup jaggery or brown sugar",
    "1 tsp roasted cumin powder",
    "½ tsp black salt",
    "¼ tsp red chili powder",
    "2 cups water",
    "Salt to taste"
  ],
  instructions: `Start by preparing the tamarind pulp. If using dried tamarind, soak it in warm water for 30 minutes, then mash and strain to extract the pulp. If you're using ready-made pulp, measure out 1 cup directly.

Pour the tamarind pulp into a saucepan and add 2 cups of water. Place it on medium heat and bring it to a gentle boil. Add jaggery or brown sugar and stir until fully dissolved. This creates the base of the chutney.

Now, add the spices — roasted cumin powder, black salt, regular salt, and red chili powder. Let the mixture simmer uncovered for 15–20 minutes, stirring occasionally, until it thickens to your desired consistency. The chutney should coat the back of a spoon lightly.

Once done, let it cool completely. It can be stored in an airtight jar in the refrigerator for up to two weeks. Use it as a dip, drizzle it over dahi bhalla, samosas, or any chaat item.`
},
{
  title: "Chana Chaat – Spicy Chickpea Snack",
  description: "Chana Chaat is a popular Pakistani street food made with boiled chickpeas, onions, tomatoes, spices, and chutneys. It’s tangy, spicy, and refreshing — perfect for an appetizer or light snack.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/Chana Chaat – Spicy Chickpea Snack.jpg",
  ingredients: [
    "2 cups boiled chickpeas",
    "1 onion, finely chopped",
    "1 tomato, chopped",
    "1 boiled potato, diced",
    "1 green chili, chopped",
    "2 tbsp tamarind chutney",
    "1 tsp chaat masala",
    "½ tsp red chili powder",
    "Salt to taste",
    "Fresh coriander for garnish",
    "Lemon juice"
  ],
  instructions: `Boil the chickpeas until soft, drain any excess water, and allow them to cool to room temperature. Peel and dice the boiled potato and set aside.

In a large mixing bowl, combine the chickpeas, chopped onions, tomatoes, and potatoes. Add green chili for some heat, or adjust as per taste.

Add tamarind chutney, chaat masala, red chili powder, and salt. Mix everything gently to avoid mashing the chickpeas or potatoes. Squeeze fresh lemon juice over the mixture for a refreshing tang.

Garnish with finely chopped coriander. Let the chaat sit for 5–10 minutes before serving to let the flavors soak in. Serve chilled or at room temperature.`
},
{
  title: "Chicken Pulao – Spiced Chicken Rice",
  description: "Chicken Pulao is a mildly spiced rice dish cooked with chicken, whole spices, and aromatic basmati rice. It’s lighter than biryani and perfect for everyday meals or small gatherings.",
  category: "Non-Vegetarian",
  image: "http://localhost:3000/images/Chicken Pulao – Spiced Chicken Rice.jpg",
  ingredients: [
    "500g chicken pieces",
    "2 cups basmati rice",
    "2 onions, sliced",
    "2 tomatoes, chopped",
    "1 tbsp ginger garlic paste",
    "Whole spices (2 bay leaves, 4 cloves, 4 black peppercorns, 1 cinnamon stick)",
    "½ tsp turmeric",
    "1 tsp cumin seeds",
    "Salt to taste",
    "4 cups water",
    "3 tbsp oil"
  ],
  instructions: `Wash and soak the basmati rice in water for at least 30 minutes. In a large pot, heat oil and add whole spices and cumin seeds. Let them sizzle for a few seconds to release their aroma.

Add sliced onions and sauté on medium heat until golden brown. Add ginger garlic paste and stir until the raw smell disappears. Add chopped tomatoes, turmeric, and salt. Cook until tomatoes become soft and oil separates.

Add chicken pieces and cook on medium-high heat until the chicken is no longer pink and lightly browned. Pour in 4 cups of water and bring it to a boil.

Drain the soaked rice and add it to the pot. Stir gently, then cover with a lid and simmer on low heat for 15–20 minutes or until the rice is fully cooked and water is absorbed.

Turn off the heat and let the pulao sit covered for another 5 minutes. Fluff gently with a fork and serve with raita or chutney.`
},
{
  title: "Kachumber Salad – Pakistani Fresh Salad",
  description: "Kachumber Salad is a fresh, crunchy side dish made from finely chopped onions, cucumbers, tomatoes, and lemon juice. It adds a refreshing touch to any spicy curry or rice dish.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/Kachumber Salad – Pakistani Fresh Salad.png",
  ingredients: [
    "1 cucumber, chopped",
    "1 onion, chopped",
    "1 tomato, chopped",
    "1 green chili, chopped",
    "Juice of 1 lemon",
    "Salt to taste",
    "Fresh coriander"
  ],
  instructions: `Peel and finely chop the cucumber, onion, and tomato. If preferred, you can remove the tomato seeds to reduce moisture. Chop green chili finely and adjust quantity based on spice preference.

In a mixing bowl, combine all the vegetables. Add salt and lemon juice, and mix well.

Let it sit for 5–10 minutes to allow the flavors to blend. Garnish with chopped coriander and serve alongside rice, curry, or grilled meat. This salad should be eaten fresh and not stored for long.`
},
{
  title: "Chukandar Gosht – Beetroot Mutton Curry",
  description: "Chukandar Gosht is a unique Pakistani curry made with mutton and grated beetroot, resulting in a beautiful red hue and naturally sweet, earthy flavor. It's both nutritious and delicious.",
  category: "Non-Vegetarian",
  image: "http://localhost:3000/images/Chukandar Gosht – Beetroot Mutton Curry.jpg",
  ingredients: [
    "500g mutton",
    "1 cup beetroot, grated",
    "2 onions, sliced",
    "2 tomatoes, chopped",
    "1 tbsp ginger garlic paste",
    "½ tsp turmeric",
    "1 tsp red chili powder",
    "Salt to taste",
    "2 tbsp oil",
    "Fresh coriander"
  ],
  instructions: `Heat oil in a pressure cooker or deep pot. Add sliced onions and sauté until golden brown. Add ginger garlic paste and cook for a minute.

Stir in chopped tomatoes, turmeric, chili powder, and salt. Cook until tomatoes break down and oil begins to separate.

Add mutton and cook on high heat for 5–7 minutes, stirring frequently until sealed and slightly browned. Add 2 cups of water and pressure cook for 15–20 minutes until meat is tender.

Once the meat is cooked, add grated beetroot and cook uncovered on low heat for another 10–15 minutes until beetroot is fully incorporated and the gravy thickens.

Garnish with fresh coriander and serve with roti or rice.`
},
{
  title: "Masoor Daal – Red Lentil Curry",
  description: "Masoor Daal is a simple yet satisfying red lentil curry that's easy to prepare and full of nutrients. It’s ideal for quick meals and goes well with both roti and plain rice.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/Masoor Daal – Red Lentil Curry.jpg",
  ingredients: [
    "1 cup red lentils (masoor daal)",
    "1 onion, chopped",
    "1 tomato, chopped",
    "1 tsp garlic paste",
    "½ tsp turmeric",
    "½ tsp cumin seeds",
    "1 green chili, chopped",
    "Salt to taste",
    "2 tbsp oil",
    "Fresh coriander"
  ],
  instructions: `Rinse the lentils thoroughly and boil with 2.5 cups of water, turmeric, and salt until soft and fully cooked. Stir occasionally to prevent sticking.

In a separate frying pan, heat oil and add cumin seeds. Once they sizzle, add chopped onions and sauté until golden. Add garlic paste, green chili, and tomato. Cook until tomatoes soften.

Pour this tempering over the boiled daal. Simmer for 5 minutes to combine flavors. Garnish with chopped coriander. Serve with rice or roti for a wholesome meal.`
},
{
  title: "Keema Aloo – Minced Meat and Potato Curry",
  description: "Keema Aloo is a classic comfort dish where minced meat is cooked with potatoes and spices. It’s easy to prepare, filling, and perfect with paratha, roti, or rice.",
  category: "Non-Vegetarian",
  image: "http://localhost:3000/images/Keema Aloo – Minced Meat and Potato Curry.jpg",
  ingredients: [
    "500g ground beef or mutton",
    "2 potatoes, cubed",
    "1 onion, finely chopped",
    "2 tomatoes, chopped",
    "1 tbsp ginger garlic paste",
    "½ tsp turmeric",
    "1 tsp red chili powder",
    "1 tsp coriander powder",
    "Salt to taste",
    "3 tbsp oil",
    "Fresh coriander for garnish"
  ],
  instructions: `Heat oil in a pot. Add chopped onions and sauté until light brown. Add ginger garlic paste and cook for 1 minute.

Add chopped tomatoes, turmeric, chili powder, coriander powder, and salt. Cook until tomatoes break down and the oil separates.

Add ground meat and cook on high heat until the color changes and it starts to brown. Stir frequently to avoid lumps. Add 1 cup water, cover, and simmer for 10 minutes.

Add cubed potatoes, stir, and cover again. Cook for another 10–15 minutes or until potatoes are tender and keema is cooked through.

Garnish with coriander and serve hot.`
},
{
  title: "Kaddu ki Sabzi – Spiced Pumpkin Curry",
  description: "Kaddu ki Sabzi is a lightly spiced pumpkin curry made with sweet and soft pumpkin chunks, cooked in oil with garlic, chili, and cumin. It's a great vegetarian side dish with paratha or chapati.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/Kaddu ki Sabzi – Spiced Pumpkin Curry.jpg",
  ingredients: [
    "500g pumpkin, peeled and cubed",
    "1 onion, chopped",
    "1 tomato, chopped",
    "2 garlic cloves, sliced",
    "½ tsp turmeric",
    "½ tsp red chili flakes",
    "½ tsp cumin seeds",
    "Salt to taste",
    "2 tbsp oil",
    "Fresh coriander"
  ],
  instructions: `Heat oil in a pan. Add cumin seeds and sliced garlic. Once fragrant, add chopped onions and sauté until translucent.

Add tomatoes, turmeric, red chili flakes, and salt. Cook until the tomatoes break down into a paste.

Add cubed pumpkin and stir to coat with masala. Cover the pan and cook on low heat for 15–20 minutes, stirring occasionally, until the pumpkin is soft and tender.

Mash slightly for a creamy texture, if desired. Garnish with coriander and serve with roti.`
},
{
  title: "Dahi Wale Aloo – Potatoes in Yogurt Gravy",
  description: "Dahi Wale Aloo is a tangy and mildly spiced curry where boiled potatoes are cooked in a yogurt-based gravy. It’s quick to make and perfect for light vegetarian meals.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/Dahi Wale Aloo – Potatoes in Yogurt Gravy.jpg",
  ingredients: [
    "3 boiled potatoes, cubed",
    "1 cup yogurt",
    "1 tsp cumin seeds",
    "1 green chili, chopped",
    "½ tsp turmeric",
    "½ tsp red chili powder",
    "Salt to taste",
    "2 tbsp oil",
    "Coriander leaves for garnish"
  ],
  instructions: `Whisk the yogurt in a bowl until smooth. Heat oil in a pan, add cumin seeds and green chili. Sauté for a few seconds.

Add turmeric, red chili powder, and salt. Stir quickly to avoid burning the spices. Add the whisked yogurt slowly, stirring continuously to avoid curdling.

Once the yogurt is slightly thickened and cooked, add the boiled, cubed potatoes. Mix well and let it simmer for 5–7 minutes on low heat.

Garnish with coriander and serve with roti or steamed rice.`
},
{
  title: "Sooji Toast – Semolina Bread Toast",
  description: "Sooji Toast is a savory snack made with a creamy topping of semolina, veggies, and spices spread over bread slices and pan-toasted until crisp. Perfect for tea-time or breakfast.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/Sooji Toast – Semolina Bread Toast.jpg",
  ingredients: [
    "4 bread slices",
    "½ cup semolina (sooji)",
    "¼ cup curd",
    "1 onion, finely chopped",
    "1 green chili, chopped",
    "½ carrot, grated",
    "Salt to taste",
    "Water as needed",
    "Butter or oil for toasting"
  ],
  instructions: `In a bowl, mix semolina, curd, chopped onion, green chili, and grated carrot. Add salt and a little water to make a thick, spreadable paste. Let it rest for 5 minutes.

Spread the mixture evenly on one side of each bread slice. Heat a pan with some butter or oil.

Place the bread slices face down (semolina side) on the pan and toast on low flame until the bottom is golden and crisp. Flip and lightly toast the other side. Serve hot with ketchup or chutney.`
},
{
  title: "15-Minute Garlic Noodles",
  description: "These 15-Minute Garlic Noodles are a quick and flavorful fix for busy days. Featuring a bold garlic flavor with savory soy sauce, a hint of sesame oil, and a touch of chili, this dish is a favorite for noodle lovers. Inspired by Asian street food, it's simple, satisfying, and ready in no time. You can enjoy it as-is or customize with chicken, tofu, or stir-fried veggies. Perfect for a weeknight dinner or a late-night snack.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/15-Minute Garlic Noodles.png",
  ingredients: [
    "200g spaghetti or egg noodles",
    "6 garlic cloves, finely chopped",
    "2 tbsp soy sauce",
    "1 tbsp oyster sauce (or mushroom sauce for vegetarian)",
    "1 tbsp dark soy sauce (optional for color)",
    "1 tsp sesame oil",
    "1 tbsp vegetable oil",
    "1 tsp red chili flakes (optional)",
    "2 green onions, sliced",
    "1 tsp sugar",
    "Salt to taste"
  ],
  instructions: `Start by boiling your noodles according to the package instructions. Drain them and set aside, reserving a little pasta water. In a large pan or wok, heat the vegetable oil over medium heat. Add the finely chopped garlic and stir continuously for 30 seconds to 1 minute until it turns golden and fragrant — but not burnt. Add the soy sauce, oyster sauce, dark soy sauce (if using), sesame oil, sugar, and chili flakes to the pan. Stir everything together to make a sauce.

Once the sauce is bubbling slightly, add the cooked noodles to the pan. Toss well using tongs or chopsticks so the noodles are evenly coated with the sauce. If the noodles seem dry, add a tablespoon or two of reserved pasta water. Continue stirring and tossing for 2–3 minutes on low heat to allow flavors to absorb. Turn off the heat, garnish with sliced green onions, and serve hot. These noodles pair well with grilled tofu, stir-fried veggies, or fried eggs.`
},
{
  title: "20-Minute Caprese Chicken",
  description: "This 20-Minute Caprese Chicken is a juicy, flavorful dish that brings together classic Italian ingredients—ripe tomatoes, fresh basil, and melty mozzarella—over golden pan-seared chicken breasts. It's perfect for weeknight dinners when you want something quick, healthy, and satisfying. The balsamic glaze adds a tangy sweetness that elevates the whole dish, making it taste gourmet with minimal effort. Serve it with a side of pasta, garlic bread, or a fresh green salad for a complete meal.",
  category: "Non-Vegetarian",
  image: "http://localhost:3000/images/20-Minute Caprese Chicken.png",
  ingredients: [
    "2 boneless, skinless chicken breasts",
    "1 tbsp olive oil",
    "Salt and black pepper to taste",
    "1 tsp garlic powder",
    "1 tsp Italian seasoning",
    "2 large tomatoes, sliced",
    "4 slices fresh mozzarella cheese",
    "Fresh basil leaves",
    "2 tbsp balsamic glaze (store-bought or homemade)"
  ],
  instructions: `Start by patting the chicken breasts dry with a paper towel. Season both sides with salt, pepper, garlic powder, and Italian seasoning. Heat olive oil in a large skillet over medium-high heat. Once hot, add the chicken breasts and sear them for about 5–6 minutes on each side until golden and cooked through. While the chicken is still in the pan, place two slices of tomato and two slices of mozzarella on top of each chicken breast.

Cover the skillet with a lid and let it cook for 2–3 more minutes until the cheese is melted. Turn off the heat and carefully transfer the chicken to a serving plate. Garnish generously with fresh basil leaves. Finally, drizzle balsamic glaze over each chicken breast just before serving. This dish is best enjoyed hot and pairs wonderfully with a light salad or buttery pasta.`
},
{
  title: "Instant Pot Mac & Cheese",
  description: "This Instant Pot Mac & Cheese is creamy, cheesy, and unbelievably easy to make in under 20 minutes. Perfect for busy weeknights, this comfort food classic requires no draining or complicated steps. Made with elbow macaroni, cheddar cheese, and a hint of butter and cream, it delivers rich flavor and ultra-smooth texture every time. Customize it with extra cheese, garlic, or even bacon for a heartier version. It’s a guaranteed hit with kids and adults alike.",
  category: "Vegetarian",
  image: "http://localhost:3000/images/Instant Pot Mac & Cheese.png",
  ingredients: [
    "2 cups elbow macaroni",
    "2 cups water",
    "1 cup milk (whole or 2%)",
    "2 cups shredded cheddar cheese",
    "2 tbsp unsalted butter",
    "½ tsp garlic powder (optional)",
    "Salt and pepper to taste"
  ],
  instructions: `Add macaroni, water, butter, and a pinch of salt to the Instant Pot. Stir to combine and close the lid, setting the valve to sealing. Cook on high pressure for 4 minutes. When the time is up, carefully do a quick release of pressure by turning the valve to venting.

Once all the steam has released, open the lid and stir the pasta. It may look watery at first, but that’s normal. Switch the Instant Pot to sauté mode and add the milk, shredded cheese, and garlic powder (if using). Stir continuously until the cheese is fully melted and the sauce becomes creamy. If it seems too thick, add a splash more milk. Season with additional salt and black pepper to taste. Turn off the sauté mode and serve immediately for the creamiest texture. Enjoy hot as a side dish or comforting main course.`
}





  // Add all other recipes similarly here...
];

db.serialize(() => {
  // 🔁 Step 1: Drop the old table (removes structure + data)
  db.run("DROP TABLE IF EXISTS recipes");

  // 🛠️ Step 2: Re-create the table
  db.run(`
    CREATE TABLE IF NOT EXISTS recipes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      category TEXT,
      image TEXT,
      ingredients TEXT,
      instructions TEXT
    )
  `);

  // 📥 Step 3: Insert updated recipes
  const insert = db.prepare(`
    INSERT INTO recipes (title, description, category, image, ingredients, instructions)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  recipes.forEach(r => {
    insert.run(
      r.title,
      r.description,
      r.category,
      r.image,
      JSON.stringify(r.ingredients),
      r.instructions
    );
  });

  insert.finalize(() => {
    console.log("✅ All recipes seeded successfully!");
  });
});

db.close();