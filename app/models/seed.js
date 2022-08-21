// seed.js is going to be the file we run, whenever we want to seed our database, we'll create a bunch of plants at once.

// we want to be careful with this, because when we run it, it'll delete all of the plants in the db. 

// we can modify this later, to only delete plants that don't have an owner already, but we'll keep it simple for now.

const mongoose = require('mongoose')
const Plant = require('./plant')
const db = require('../../config/db')

const startPlants = [
    {
    name: "Parlor Palm", 
    description: "A Parlor Palm, which was originally discovered growing in the rainforests of Guatemala and Southern Mexico, is the most popular indoor palm sold. It is a type of “feather palm;” other familiar feather palms are the kentia palm, the pygmy date palm, the coconut palm, and the sentry palm. A Parlor Palm can be small enough to place in a terrarium, perfect to sit on a table or desk, or as a mature plant, tall enough to be an elegant floor plant. This is a compact, bushy plant with dark green, long, graceful fronds. The fronds have a middle rib with soft, drooping leaflets coming off each side. When planted in a 10” pot, a parlor palm can grow 3-4ft. tall in three or four years and sometimes produce very small, ball like yellow flowers. Since these palms require very little care, it is the perfect plant for offices, businesses, and any area that might have less than optimal growing conditions.  Indoor palms, whether it’s an Areca Palm, a Bamboo Palm, a Kentia Palm, or a Cat Palm, come in all sizes and shapes, but they all have one very important thing in common. The only growing point on a palm is at the very end of each stem. If you cut off this growing tip, you will kill the entire the stem.", 
    light: "How much light for a Parlor Palm: This particular palm can grow slowly in low light, but prefers medium, indirect light. Avoid putting any indoor palm plant in direct sun.", 
    water: "How to water a Parlor Palm: Water well, and then allow the top 50% of the soil to dry out before watering again. The roots of a parlor palm should never totally dry out. Water less during the winter when the plant is not actively growing. Brown leaf tips often indicate over watering, while yellow fronds tell you a Parlor Palm needs a bit more water.", 
    temperature: "Best temperature for a Parlor Palm: Try to provides temperatures between 62°-82° F (16.7°-27.8°C). A Parlor Palm can briefly handle temperatures as low as 50°F (10°C) but will die in temperatures lower than 40°F (4.4°C). Avoid cold drafts.", 
    poisonous: "A Parlor Palm in a non- poisonous houseplant and is not toxic to cats, dogs, or children.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Chamaedorea-elegans-14-256x232.jpg"
    },
    {
    name: "Peace Lily Plant", 
    description: "A Peace Lily is a beautiful, indoor houseplant that grows between 1- 4ft tall. It has large, glossy, oval, dark green leaves. The leaves do not develop on stems but come directly out of the soil. What we think of as the “white flowers” are really modified leaves called spathes that surround the real, inconsequential flowers. The “flowers” start out as light green and, as they mature, turn white. These tall, impressive white “spathes” (flowers) last for several weeks.", 
    light: "How much light for a Peace Lily: These plants grow slowly in low light and more quickly in medium, or indirect bright light. Too much light causes the leaves of a Peace Lily to fade and lose their vibrant, dark green color. Too little light and flowers do not develop. Direct sunlight burns the leaves.", 
    water: "How to water a Peace Lily: Allow the top 50% of the soil to dry out before watering. If the leaves severely droop, yellow leaves develop once a Peace Lily is watered. Leaves turn a blackish brown from over- watering. Too much water, resulting in root rot, is the main reason a Peace Lily dies.", 
    temperature: "Best temperature for a Peace Lily: 65°-85°F (18.3°-29.4°C).", 
    poisonous: "A Peace Lily is a poisonous plant and dangerous to have near cats, dogs, and small children. These plants have a #2 Toxicity level.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Spathiphyllum-Ceres-06-1-256x224.jpg"
    },
    {
    name: "Pencil Cactus Plant", 
    description: "A Pencil Cactus, Euphorbia tirucalli, is not a cactus plant at all but rather a member of the euphorbia family like a Poinsettia. This unique looking plant, native to Africa and India, is also referred to as Indian Tree Spurge, Naked Lady Plant, Aveloz, Milk Bush Plant, and Petroleum Plant. The green succulent stems of a Pencil Cactus, which are about the width of a pencil, branch upwards in an almost geometrical pattern.  A Pencil Cactus grows quickly and can reach a height of 10′-15′ outdoors and up to 6′ in an indoor container.  Although this is an easy care plant that just needs bright light and a little bit of water to do well, it does have a downside. All parts of these plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. This is a very different looking plant that I wouldn’t call beautiful and lush, but it is quite a conversation piece.", 
    light: "A Pencil Cactus plant requires very bright light and can even handle direct morning sun.", 
    water: "During the spring and summer allow the top 50% of the soil to dry out before watering. In the fall & winter water once a month. Pencil Cactus are very drought resistant, so when in doubt, do not water.", 
    temperature: "Likes warm temperatures between 65°-70°F (18.3°-21.1°C) during most of the year. In the winter, when resting, a Pencil Cactus prefers cooler temperatures around 50°F (10°C).", 
    poisonous: "Pencil Cactus are very poisonous plants with a #4 toxicity level. The stems contain an irritating sap-like substance that oozes out of any cut or break in the stem. Not only should you wear gloves when working with a Pencil cactus , but you should wash your hands thoroughly with soap after removing the gloves. You don’t want to risk getting sap in your eyes or mouth.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Pencil-Cactus.jpeg"
    },
    {
    name: "Peperomia Plant", 
    description: "Peperomia plant leaves can be thick, plump, rippled, quilted, corrugated, smooth, hairy, or shiny; and can be various shades of green, red, gray, and cream. The pattern on the leaves may be marbled, striped, or a solid color. When small, peperomia houseplants can be used in dish gardens and terrariums. Indoors, mature peperomia plants rarely grow taller than 10”-16″ and are perfect sitting on a table or desk. Though usually an upright plant, some varieties make excellent hanging plants. Peperomia plant flowers are tiny and inconsequential, growing in clusters on upright conical spikes. They get the unpleasant name “rat-tail” flowers because of their appearance.", 
    light: "Peperomia plants grow well in the bright, indirect light provided by a west or east-facing window. These plants even grow under fluorescent lights. Insufficient light causes the slow growing peperomia plant to stop growing all together. Direct sunlight burns the leaves.", 
    water: "Allow the top 50% of the soil to dry out before you water. Over-watering, resulting in root-rot, is the main cause of serious peperomia plant problems. It’s best to water these plants from the bottom. This technique keeps the leaves dry and helps prevent plant diseases. The thick leaves of peperomia plants hold water and allow the plant to withstand long periods without moisture.", 
    temperature: "Warm temperatures between 60°-80°F (15.6°-26.7°C) are best. Temperatures below 50°-55° F (10°-12.8°C) and cold drafts from windows and doors damage peperomia plant leaves.", 
    poisonous: "A Peperomia is an non- poisonous plant.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Peperomia-obtusifolia-06-3-251x266.jpg"
    },  
    {
    name: "Peperomia Plant – Caperata “Emerald Ripple”", 
    description: "Peperomia Emerald Ripple, also known as Peperomia Caperata has heart-shaped, puckered, deeply veined leaves.  The leaves come in various shades of green, dark red, and gray. The flowers of all peperomia plants are tiny & inconsequential, growing in clusters on upright, conical, red colored spikes. Peperomia Emerald Ripple is a compact plant that looks good on a desk or ta able. It even does well when planted outside as long as the temperature stays above 50°-55°F (10°-12.8°C). The Emerald Ripple variety is a close relative to the Peperomia Obtusifolia or Baby Rubber plant.", 
    light: "Peperomia plants grow best in bright indirect light provided by a west or east facing, window. They also do well under florescent lights. Insufficient light causes this slow growing plant to stop growing all together. Direct sunlight burns the leaves.", 
    water: "Allow the top 50% of the soil in a peperomia plant to dry out before watering. Over-watering, causing yellow leaves and soggy stems, is the main cause of serious peperomia problems. Root-rot, which causes the plant to die, is the direct result of over–watering. Peperomia plants do well when watered from the bottom. This technique keeps water off of the leaves and helps prevent plant diseases. The thick leaves of a peperomia hold water and allow it to withstand long periods without moisture.", 
    temperature: "Warm temperatures between 60°-80°F (15.5°-26.7°C) are best. Temperatures below 50°-55°F (10°-12.8°C) and cold drafts from windows and doors damage the leaves.", 
    poisonous: "Peperomia plants are non- poisonous plants", 
    image: "https://www.houseplant411.com/wp-content/uploads/1200px-Peperomia_caperata_1-OB9-256x192.jpg"
    },  
    {
    name: "Persian Shield Plant", 
    description: "A Persian Shield plant, sometimes called a Royal Purple plant, is a tropical, fast growing plant that loves high humidity and warm temperatures. It has dark green, iridescent leaves with metallic, light purple stripes. Originally from Myanmar (Burma) not Persia, it gets the name Persian Shield because the leaves resemble little, feudal battle shields. The pale purple flowers of a Persian Shield plant can’t compare to the beautiful leaves. This plant can be planted outdoors, but does even better as a potted, indoor plant.", 
    light: "A Persian Shield plant needs bright indirect light to maintain the vibrant colors in its leaves; but no direct afternoon sun or the leaves may be damaged. The plant becomes thin and leggy when there is not enough light.", 
    water: "Keep the soil barely moist, water when the top few inches of soil are dry. Spotting on the leaves occurs if cold water splashes on them. Water less in the fall and winter when the plant is not actively growing.", 
    temperature: "These plants like to be warm. Place them in an area where the temperature is always above 60°F (15.6°C).", 
    poisonous: "A Persian Shield plant is slightly poisonous with a #1 toxicity level", 
    image: "https://www.houseplant411.com/wp-content/uploads/la_strobilanthes_dyeriana_e_una_splendida_acantacea_delle_umide_foreste_del_myanmar-256x262.jpg"
    },
    {
    name: "Philodendron Congo Plant", 
    description: "A Philodendron Congo is one of several cultivars of Philodendron that has been developed by growers over the last few years. This is a plant that can adapt to all kinds of conditions as long as you keep it warm. Its care instructions can be used for the following other Philodendron hybrids: Imperial Red, Black Cardinal, Moonlight, Red Emerald, and Autumn. Many philodendrons are climbers, but not this one. A Philodendron Congo is a self-header that spreads outward as it grows upward. The glossy, dark green, thick leaves are spaced very close to each other on a single stem. The stiff, barely visible stem, keeps a Philodendron Congo upright and elegant looking as it matures. These plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. This is an easy to grow plant if you don’t over- fertilize or over- water.", 
    light: "A Philodendron Congo is one of several cultivars of Philodendron that has been developed by growers over the last few years. This is a plant that can adapt to all kinds of conditions as long as you keep it warm. Its care instructions can be used for the following other Philodendron hybrids: Imperial Red, Black Cardinal, Moonlight, Red Emerald, and Autumn. Many philodendrons are climbers, but not this one. A Philodendron Congo is a self-header that spreads outward as it grows upward. The glossy, dark green, thick leaves are spaced very close to each other on a single stem. The stiff, barely visible stem, keeps a Philodendron Congo upright and elegant looking as it matures. These plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. This is an easy to grow plant if you don’t over- fertilize or over- water.", 
    water: "Always allow the top 50% of the soil to dry out before watering a Philodendron. When watering, cover the entire surface to prevent leaf problems because of dry soil areas.", 
    temperature: "Philodendron Congos grow well in normal household temperatures between 70°-85°F (21.1° 29.4°C). Keep these plants away from cold drafts and air conditioners.", 
    poisonous: "A Philodendron Congo is a poisonous houseplant with a #2 Toxicity level.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-Tatei-Congo-08-4-256x160.jpg"
    },
    {
    name: "Philodendron Heartleaf", 
    description: "There is often confusion between a heartleaf philodendron and its close cousin the pothos plant. Both plants have heart shaped leaves, but the leaves on a pothos are thicker,  and waxy. The leaves on a heartleaf philodendron are thinner and softer.The leaves of a heartleaf philodendron come in several sizes, colors, and patterns; but the most common variety has dark green, shiny, heart-shaped leaves with pointy tips. The leaf size is about 2”-4” (5cm-10cm). When the leaves first emerge, they appear bronze in color but quickly turn green. A heartleaf philodendron produces long, vining stems that easily grow 4ft (1.2m) or more. Pinching back the growing tips at the ends of the stems helps the plant become bushy and full rather than long and leggy. A heartleaf philodendron looks beautiful as a table plant, hanging in a basket, or trained to grow on a trellis or pole. An added plus is that NASA lists a heartleaf philodendron as one of the best plants for removing formaldehyde, which is found in certain paints, wooden flooring, insulation, and carpet glue, from the air.", 
    light: "How much light for a Heartleaf Philodendron: This plant can survive in low light conditions, but grows faster and produces more leaves in medium or bright indirect light. Placing a philodendron plant in the direct sun may cause the leaves to become discolored and scorched.", 
    water: "How to water a Heartleaf Philodendron: Water well and then allow the top 50% of the soil to dry out before watering again. Yellow leaves on a heartleaf philodendron indicate over-watering and brown leaves mean the plant needs more water.", 
    temperature: "Best temperature for a Heartleaf Philodendron: Warm temperatures of 70°F - 80ºF (24°C-27ºC) during the day, and night time temperatures above 55º F (13ºC).", 
    poisonous: "Best temperature for a Heartleaf Philodendron: Warm temperatures of 70°F - 80ºF (24°C-27ºC) during the day, and night time temperatures above 55º F (13ºC).", 
    image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-scandens-oxycardium-08-1-300x260-2-256x222.jpg"
    },
    {
    name: "Philodendron Imperial Red", 
    description: "There are two main types of philodendron plants, climbers and self-headers. The heart-leaf philodendron is an example of a small climber. Without  some form of support, the stems of a climber philodendron hang down. Many climbers produce aerial roots to help them cling to poles, wall, or large trees. The other main philodendron group is the self-header. The plants in this category are much larger than climbers and have much bigger leaves. A philodendron imperial red is an example of a self-header. It has glossy, wide, bright green and red, oval-shaped leaves spaced very close together on a single stem. This barely visible stem, which is usually only seen when the older, bottom leaves of the plant fall off, keeps a Philodendron Imperial Red upright and elegant looking. This plant, when grown indoors, can easily reach a height of 2-3ft and a leaf spread of 2-3 ft.  It has stiff stems that are strong and firm enough to keep the plant growing straight up as it matures.", 
    light: "How much light does a Philodendron Imperial Red need: Although the plant survives in lower light, it grows faster and looks better when grown in medium light.", 
    water: "How to water a Philodendron Imperial Red: Allow the top 50% of the soil to dry out before watering. The soil needs to dry out more during the winter when the plant is resting.", 
    temperature: "Best temperature for a Philodendron Imperial Red: Provide warm temperatures between 70°-85°F ( 21.1°-29.4°C). Keep the temperature above 55°F (12.8°C) during the winter.", 
    poisonous: "Is a Philodendron Imperial Red poisonous: All philodendron plants, including the Imperial Red, contain calcium oxalate are very toxic plants with a #2 toxicity level. Learn more about poisonous Houseplant Toxicity levels in the Glossary of the website.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-Imperial-Red-06-256x226.jpg"
    },
    {
    name: "Philodendron Micans", 
    description: "Although the leaf shape and growing pattern closely resembles that of the heart leaf philodendron, a Philodendron Micans does not have glossy, green leaves. This unique looking plant has velvety, heart-shaped, greenish bronze leaves with reddish- brown undersides. The leaves grow on long, graceful, vining stems. When young, a Philodendron Micans closely resembles the Philodendron Melanochrysum, but there are some major differences. A Philodendron Micans is a vining plant with draping stems while the Philodendron Melanochrysum is a climbing plant that grows upwards and needs a pole for support.  Although both plants have velvety, heart shaped leaves, the Melanochrysum, a much rarer plant, has creamy white veins.", 
    light: "How much light for a philodendron micans: A philodendron micans prefers bright, indirect light, but no direct sun. Direct sun harms the beautiful, velvety leaves. This plant can survive in lower light but grows very slowly, the leaves tend to be much smallerl, and the plant becomes leggy as it stretches towards the light.", 
    water: "How to water a philodendron micans: Like many indoor houseplants, over watering a philodendron micans and not allowing the soil to dry out a bit, is the fastest way to kill the plant. Allow the top 1/3 of the soil to dry out before watering. When you do water, water well enough so that the water drains out the drip holes in the bottom of the pot. Never allow the plant sit in the excess water. During the winter, when the plant is resting, the soil needs to dry out even more. Always remember, the soil at the bottom of the plant container is wetter than the soil at the top.", 
    temperature: "Best temperature for a philodendron micans: A philodendron micans likes warm temperatures between 65°-75ºF (18.3°-23.9ºC) during the day and above 55º F (12.8ºC) at night.", 
    poisonous: "Is a philodendron micans a poisonous plant: All philodendron plants, including the philodendron micans, contain calcium oxalate crystals and are toxic to children, cats, dogs, and other pets.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-micans-06-copy.jpeg"
    },
    {
    name: "Philodendron Selloum", 
    description: "A philodendron selloum (philodendron bipinnatifidum), is native to South America but also grows on the east and gulf coasts of the United States. It has many common names such as Hope Selloum, Horsehead Philodendron, Lacy Tree Philodendron, Philodendron Hope Selloum, and Tree Philodendron, and is often confused with the philodendron xanadu. This is a non-climbing, tree philodendron that spreads outward rather than growing upward. When grown as an indoor plant, the easy-care, self-heading philodendron selloum takes up a lot of space, often spreading out 5ft. or more with dark green, shiny, deeply lobed leaves that can be 2ft-3ft (60-90cm) long. This plant does grow a trunk as it matures; however, the leaves do a very good job of hiding it.", 
    light: "How much light for a philodendron selloum: Place the plant in bright indirect light but avoid direct sun. In lower light the leaves turn a darker green. Too much light or direct sun burns the leaves and causes the deep green color to fade.", 
    water: "How to water a philodendron selloum: Unlike other philodendrons, the selloum likes moist but not soggy soil. During the winter, water less, keeping the soil barely moist.", 
    temperature: "Best temperature for a philodendron selloum: Warm temperatures above 55°F (12.8°C). Keep these plants away from cold drafts and open doors during the winter.", 
    poisonous: "Is a philodendron selloum poisonous to cats, dogs, and small children: This is is a poisonous houseplant with a level #3 toxicity. All philodendron varieties contain calcium oxalate crystals. Eating any part of the plant may cause the following symptoms: pain in the mouth, drooling (dogs & cats), and vomiting. If swelling of the lips, tongue, and airway occurs, it becomes difficult to breathe or swallow.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-selloum-10-3-256x172.jpg"
    },
    {
    name: "Philodendron Xanadu Plant", 
    description: "The Philodendron Xanadu, sometimes referred to as Philodendron “Winterbourn”, is a large compact easy to grow plant. Each shiny, green, leathery leaf has 15-20 distinct lobes. A Philodendron Xanadu is often wider than it is tall, reaching a height of 2-4ft. and a width of 3-5ft in ideal conditions. The leaves of this beautiful, exotic looking foliage plant can be as large as 16″-18″ long and 7″-14″  wide. These plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants.  Unlike many philodendrons, like the Monstera Deliciosa, the Xanadu is an upright plant not a climber or vine. The best part is the older a Xanadu gets the better it looks.", 
    light: "A Philodendron Xanadu needs more light than other philodendron plants to maintain its compact appearance. It grows best in medium, indirect light. Too much bright light causes the leaves to become pale and bleached looking; too little light and the stems become elongated as the plant stretches towards the light. Direct sun burns the leaves.", 
    water: "Water a Xanadu thoroughly until the water drains out the drip holes in the bottom of the pot, and then allow the top 50% of the soil to dry out before watering again. Leaves turn yellow if the soil stays too wet. A Xanadu grows more slowly in the winter and requires less water.", 
    temperature: "Daytime temperatures 75° to 80°F ( 23.9°-26.7°C); nighttime temperatures 65°- 70° F (18.3°-21.1°C)", 
    poisonous: "A Philodendron Xanadu is a poisonous plant with a level #1 toxicity. Philodendrons are especially poisonous to dogs and cats.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-Xanadu-10-256x188.jpg"
    },
    {
    name: "Pilea Plant", 
    description: "The pilea plant, a member of the nettle family, is an attractive hanging or table plant native to China and Viet Nam. There are many different types of pilea plants, and all are easy to grow, even for a new plant enthusiast. One of the easiest to care for is the Aluminum plant (Pilea Cadierei) also called the Watermelon Pilea. This variety is grown for its attractive leaves rather than its very small, white flowers. The dark green, oval, puffy foliage has distinct, shiny, silver markings on the upper side of the leaf that look like someone splashed aluminum colored paint on it. The leaves on an Aluminum plant are usually about 3” (7.6cm) long and the height of the plant 6″ to 12″ inches (15-31 cm.). All pilea plant varieties are small, soft- stemmed plants, the tallest usually no more than 12″-18″ (30-45 cm) tall. Pilea plants need to be pruned frequently if you want them to stay full and bushy and not become leggy and bare looking.", 
    light: "How much light does a pilea plant need: A pilea plant needs bright indirect light. Direct sun burns the very attractive leaves and insufficient light causes the plant to become leggy as it stretches for more light.", 
    water: "How to water a pilea plant: Keep the soil of a pilea plant slightly moist, but not soggy at all times. During the cooler months or when your pilea plant is not producing new leaves, allow the top 2-3 inches of soil to dry out before watering.", 
    temperature: "Best temperature for a pilea plant: This plant likes to be warm all of the time. The best temperature for a pilea plant is 60°-75°F ( 18.3°-23.9°C).", 
    poisonous: "Is a pilea plant poisonous: A pilea plant is a non- poisonous plant and safe to have around children, cats, dogs, and other pets.", 
    image: "https://www.houseplant411.com/wp-content/uploads/800px-Pilea_cadierei_flower-256x178.jpg"
    },
    {
    name: "Podocarpus Plant", 
    description: "A Podocarpus plant, also called a Buddhist Pine or Japanese Yew, is a very dense, upright, slow growing evergreen that originally came from China and Japan. It has long slender dark green leathery leaves. A Podocarpus plant grows straight up with very little side branching unless it is actively pruned. This plant is relatively simple to care for and adapts well to various conditions. It is easily trained to be a bonsai or a topiary. These plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. When planted outside in the ground a Podocarpus plant grows quite large, but when used indoors or on the porch as a potted plant, it remains a small tree or shrub.", 
    light: "A Podocarpus requires very bright indirect light. If it is not getting enough light the lower needles on the branches become large and elongated.", 
    water: "Keep the soil moist but not soggy; allow the top two inches to dry out before watering. Brown leaf tips or gray needles indicate over- watering.", 
    temperature: "Podocarpus prefer cool temperatures between 50°-75°F (10°-23.9°C).", 
    poisonous: "A Podocarpus has a level #1 toxicity if eaten. However, various parts of the plant, especially the seeds within the berries are very harmful to dogs, cats, and horses. This plant should be kept away from small children and animals.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Podocarpus-gracilior-14-PY-1.jpg"
    },
    {
    name: "Poinsettia Plant", 
    description: "The colorful parts of a Poinsettia plant are really modified leaves called bracts. Many people mistakenly think the bracts are the flower petals of the plant. These bracts are the beautiful part of the plant, but they are not the flowers. The real flowers are quite inconsequential and are located inside the small yellow part of the poinsettia called a cyathia. There is a cyathia in the center of each group of bracts. Selecting the right poinsettia is the key to having a plant that stays colorful and beautiful the entire holiday season. Ideally there should be green leaves all the way to the soil line. The plant should be well balanced and not top heavy. The “real” tiny, yellow flowers should be barely open, and there should be no pollen on the plant.", 
    light: "Light for a poinsettia plant: A poinsettia plant needs very bright, indirect light but no direct sun from January to late September. The light from a north- facing window is not enough. If you put your poinsettia plant close to a window, be sure none of the leaves touch the glass or the cold will damage them. At the end of September, move your poinsettia to a location where it will be in total darkness for 12-15 hours a day. Keep the plant in this location until the leaves begin to to turn color in December. The light from a north- facing window is not enough. If you put your poinsettia plant close to a window, be sure none of the leaves touch the glass or the cold will damage them.", 
    water: "How to water a poinsettia plant: A poinsettia plant is a member of the Euphorbia family and like been theory side. Allow the top 50% of the soil to dry out before you water to prevent root rot. Over-watering a poinsettia causes green leaves to fall off, leaving bare stems topped by a few colorful bracts. Severe under-watering, in which a poinsettia plant badly droops, results in both green and colored leaves dropping off. Avoid getting the leaves of a poinsettia plant wet when watering; water drops cause unsightly white marks on the flowers and leaves.", 
    temperature: "Best temperature for a poinsettia plant: Temperature is a very important factor in poinsettia plant care. A poinsettia plants lasts longer and look better when the temperature is between 65°-70°F (18.3°-21.1°C) during the day and around 60°F (15.6°C) at night. Temperatures that are too hot or too cold damage leaves and may cause leaf drop. Keep a poinsettia plant away from drafty doors and windows, fireplaces, heaters, and the tops of appliances that give off heat.", 
    poisonous: "A poinsettia plant is not toxic to small children, cats, or dogs. Despite all the rumors, the plant causes minor discomfort if a few leaves are eaten. If quite a bit of the plant is ingested, some vomiting, drooling in pets, or sometimes diarrhea may be occur. It's the white, milky sap of a poinsettia plant that can cause redness, swelling, and itchiness if it gets on the skin, especially if someone is allergic to latex.", 
    image: "https://www.houseplant411.com/wp-content/uploads/0cea2ee2-8f95-452a-98de-70b839eda458-244x266.jpg"
    },
    {
    name: "Polka Dot Plant", 
    description: `If you’re looking for a small, brightly colored, cheery plant, a polka dot plant is the right one for you. A polka dot plant (Hypoestes phyllostachya), also called a Pink Splash plant, is a beautiful plant native to Madagascar, Southeast Asia, and South Africa. When planted outdoors, a polka dot plant can grow as tall as 12” (30c) and become a short, bushy shrub. It is usually grown as an annual in warm, temperate regions.

    Indoors, as a houseplant, a polka dot plant usually comes in a 4″ or a 6″ pot and looks beautiful in dish gardens or in small, decorative containers. The oval, pointed, delicate, green leaves are covered in spots and splashes of red, rose, white, or light green which give the plant its nicknames – Pink Splash, Red Splash, or White Splash. Some new varieties of the polka dot plant have pink leaves with green patches. The brighter the light, the more vivid the colors in the leaves; but avoid putting the plant in direct afternoon sun. Other nicknames for a polka dot plant are Freckle Face plant, Measles plant, and Flamingo plant. A polka dot plant is a close relative of the Fittonia plant (Mosaic plant or Nerve plant), another houseplant with beautifully patterned leaves.
    
    Polka dot plants need to be aggressively pruned and the growing tips frequently pinched; otherwise, the plant becomes thin and leggy looking. You can use the stem cuttings to propagate a new plant. Polka dot plants sometimes flower during the summer months. The small pale purple or pink flowers are insignificant in comparison to the brightly colored plant leaves. The flowers tend to slow down plant growth, so I recommend removing the blooms and their stems as soon as they appear.`,
    light: "A polka dot plant, Hypoestes, grows best in bright, indirect light. Too much light or too little light causes the colors in the beautiful leaves to fade.", 
    water: "Water a polka dot plant well and then allow the top 25% of the soil to dry out before watering again. Over-watering causes root rot. If the soil gets too dry and the leaves droop, a polka dot plant quickly perks up once it's watered.", 
    temperature: "Warm temperatures around 75°F (23.9°C) are necessary for a polk dot plant to thrive indoors.", 
    poisonous: "A polka dot plant is a non- poisonous houseplant and safe to have around cats, dogs, and small children.", 
    image: "https://www.houseplant411.com/wp-content/uploads/640px-Starr_080117-1693_Hypoestes_phyllostachya.jpg"
    },
    {
    name: "Ponytail Palm Plant", 
    description: "A Ponytail Palm is not really a palm at all, but a relative of the yucca and lily plants and a member of the agave family. This is a unique succulent; there are no two ponytail palms that are exactly alike. A Ponytail Palm has a large, swollen base that some say resembles an elephant’s foot. The thin trunk is topped with flat, dark green, grass-like leaves. The leaves are about an inch wide and often five to six ft. long;  the edges can be quite sharp. A Ponytail Palm, sometimes referred to as a Bottle Palm or Elephant’s Foot Palm, is a slow growing, very different looking plant that thrives on neglect. Put this plant in bright light, water sparingly, and watch it grow.", 
    light: "A Ponytail Palm grows best in very bright indirect light or full sun. In proper growing conditions, it can reach a height of up to 8ft.", 
    water: "Over- watering is about the only way to kill a Ponytail Palm. Allow the top 50-70% of the soil to dry out before watering. During the warm months you may need to water every 7-14 days; in winter, only every three or four weeks. A Ponytail Palm stores water in its base and is very drought resistant. These plants can get brown leaf dips when they are over or under watered. However, when in doubt, do not water!", 
    temperature: "Ponytail Palms like warm temperatures above 60°F (15.6°C). They can survive lower temperatures, but don't grow as well. These plants, unlike other exotic tropical houseplants, like dry hot heat.", 
    poisonous: "A Ponytail Palm is a non- poisonous plant.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Pont-Tail-Palm.jpeg"
    },
    {
    name: "Pothos Plant", 
    description: "A pothos plant is a highly adaptable, glossy-leafed plant with leathery, pointed, heart-shaped leaves. When growing outdoors, the leaves of a pothos plant can be as large as 10”-12” (25cm-30cm). Indoors, the leaves are much smaller, usually ranging in size from 4”-6” (10cm-15cm). The solid green pothos is often confused with a heart-leaf philodendron. A pothos plant produces long, vines and looks wonderful in a hanging basket. You can also attach the stems to a moss or styrofoam pole and have a tall, upright plant.", 
    light: "How much light for a pothos plant: A Green Jade pothos with solid green leaves does well in low light. A Golden Pothos with yellow and green patterned leaves likes medium light. The Marble Queen pothos with green and white variegated leaves grows best in medium to bright indirect light. The lighter the colors in the leaves of a pothos plant, the more light the plant requires.", 
    water: "How to water a Pothos plant: Water well and then allow the top 50% of the soil to dry out before watering again. Over-watering is the main reason a pothos plant dies. Bright yellow leaves indicate that the soil has dried out a bit too much before you watered it. Leaves turn pale yellow and get black marks when a pothos plant is over- watered. Over watering a pothos plant also causes new growth to turn black.", 
    temperature: "Best temperature for a Pothos plant: grows well in temperatures between 55°F - 80°F (12.8°C - 26.7°C). If temperatures drop below 45°F (7.2°C), a pothos plant stops growing and the leaves turn black.", 
    poisonous: "Pothos plants are poisonous plants with a level #2 toxicity, and is toxic to dogs, cats, and small children.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Epipremnum-aureum-06-6-256x180.jpg"
    },
    {
    name: "Prayer Plant", 
    description: "The large leaves of a prayer plant have colorful veins and bright patterns in red, green, brown, and cream. The flowers, however, are small and insignificant. The patches of color in the leaves get darker and more vibrant as the plant matures. A prayer plant is a short, spreading plant that is usually about 8″ to 12″ (20-25cm) tall and 12″ to 20″ (30-50cm) wide. The broad, oval, paddle shaped leaves are 5″ to 7″ (13-18cm) long.", 
    light: "How much light does a prayer plant need: Provide medium to high light, but avoid putting a prayer plant in the direct sun. When there is not enough light, the leaves close at night and do not fully open during the day. When there is too much light or direct sun, the color in the leaves fade.", 
    water: "How much water for a prayer plant: Keep the soil barely moist but never soggy at all times. Unlike most houseplants, a prayer plant does not like to have the soil dry out before you water. Water less in the winter when the plant is resting.", 
    temperature: "Best temperature for a prayer plant: Provide warm temperatures between 60°-80°F (15.6°-26.7°C). Low temperatures and cold drafts damage the leaves.", 
    poisonous: "A prayer plant is a non- poisonous houseplant and is safe to have around cats, dogs, and small children.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Maranta-leuconeura-kerchoveana-06-2-256x184.jpg"
    },
    {
    name: "Purple Velvet Plant", 
    description: "Outdoors a Purple Velvet plant (Gynura, a very unique plant that originated in Indonesia, is a woody perennial that can often grow up to 4 ft. wide and 2-3ft in height. Indoors this plant, also called a Purple Passion plant or a Velvet  plant, makes a very attractive trailing plant that can sit on a table or be placed in a hanging basket. Although the appearance of the plant may start to deteriorate after a few years, it’s very easy to propagate plant.", 
    light: "A Purple Velvet plant needs bright indirect light. The intense purple color in the leaves starts to fade when the plant is not getting enough light.", 
    water: "Always allow the top 25% of the soil to dry out before watering. A Purple Velvet plant has fragile roots and is very susceptible to root rot, so be very careful not to over-water. Reduce your watering in the spring and fall when a Purple Velvet Plant is not actively growing. Try to keep the foliage dry and do not mist this plant.", 
    temperature: "Temperatures between 65°-85°F (18.3°-29.4°C) are best.", 
    poisonous: "There are different opinions as to whether or not this plant is a poisonous houseplant. While it is often listed as a non- poisonous plant, I would recommend that it still be kept away from pets and small children. It has also been noted that some people have an allergic reaction from just touching the plant.", 
    image: "https://www.houseplant411.com/wp-content/uploads/5adfc3-768x1024.jpg"
    },
    {
    name: "Purple Waffle Plant", 
    description: "A Purple Waffle plant, also called Metal Leaf plant, Waffle plant, Red Flame Ivy, and Red Ivy originated in the jungles of Java. The plant gets its name because of the”puckered” appearance of its leaves. A Purple Waffle plant, Hemigraphis alternata, only grows about 6”-8” tall but can produce stems 12” to 24” long and looks great in a hanging basket. This is a very pretty plant with shiny, dark green leaves that have a purple underside. Waffle plants are easy to care for and a perfect plant for beginners.", 
    light: "Provide medium to bright indirect light but no direct sun. The leaf edges turn brown and curl and the colors in the leaves bleach out if the light is too strong. When there is not enough light, the vibrant colors in the leaves of a Purple Waffle plant start to fade.", 
    water: "Keep the soil barely moist but not soggy, at all times. Water less during the winter when the plant is growing slowly.", 
    temperature: "Waffle plants likes warm temperatures between 55°F-75°F (12.8°C–23.9°C). Temperatures below 50°F (10°C) may damage the leaves.", 
    poisonous: "Non- poisonous to humans and pets", 
    image: "https://www.houseplant411.com/wp-content/uploads/Waffle-Plant.jpeg"
    },
    {
    name: "Pygmy Date Palm", 
    description: "The Dwarf Pygmy Date palm, Phoenix roebelenii, originated underneath the canopy of dense tropical forests in Africa and Asia. This helps explain why this plant does so well in the indirect light found in homes and offices. The Pygmy Date palm grows very slowly, reaching a maximum height indoors of 4-5 ft. (1-2 meters). This palm produces arching, graceful fronds about 3ft. or .9 meters in length with delicate leaflets on them. These fronds develop off of a stately central trunk. Like most palms, the Dwarf Date palm is an excellent clean air plant.", 
    light: "An indoor date palm does well in bright indirect light, but can survive in medium filtered light; be careful not to over-water in lower light. Place a Phoenix roebelenii near an east or south facing window.", 
    water: "Keep the soil of a Pygmy Date Palm moist but never soggy during most of the year. In winter, allow the soil to dry out before watering. The fronds of a Dwarf Date Palm turn brown from too much water or from hard water.", 
    temperature: "The ideal temperature for Pygmy Date Palms is 50-75°F (16-24°C). A Phoenix Roebelenii does not do well when temperature go below 50°F (10°C).", 
    poisonous: "Phoenix Roebelenii are non- poisonous houseplants.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Phoenix-roebelenii-17-249x235.jpg"
    },
    {
    name: "Rabbit’s Foot Fern", 
    description: "The lacy, leathery, medium green, arching fronds of a Rabbit’s Foot Fern have an almost bluish tinge. This upright, airy looking plant is about 16”-18” tall and 18”-20” wide. As the plant matures it develops furry, rhizomes (fleshy roots) that grow on the surface of the soil and cling to the edges of the pot. These rhizomes, which do not like to be buried in the soil, are covered with brown hairs that make them resemble the feet of a rabbit. The large, triangular shaped fronds grow  out of the rhizomes. If you like the look of a Rabbit’s Foot fern you might want to check out some of its close “footed fern” cousins such as the Hare’s Foot fern, the Squirrel’s Foot fern, the White Rabbit’s Foot fern, and the Bear’s Foot Fern.", 
    light: "How much light for a Rabbit's Foot Fern: Prefers the medium light provided by a north or east- facing window. Avoid south and west- facing windows because the intense sun will burn the fronds and the heat will cause the soil to dry out too quickly.", 
    water: "How to water a Rabbit's Foot fern: This fern likes to be a little drier than most other indoor ferns. Wait until the top 25% of the soil has dried out before watering.", 
    temperature: "What's the best temperature for a Rabbit's Foot fern: Temperatures between 65°-75°F (18.3°- 23.9°C) during the day and 10° cooler at night help a Rabbit's Foot fern grow better.", 
    poisonous: "A Rabbit’s Foot Fern is a non- poisonous houseplant.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Davallia-trichomannoides-06-copy-1-256x190.jpg"
    },
    {
    name: "Rhapis Palm", 
    description: "A Lady Palm or Rhapis Palm is an elegant durable plant that can adapt to almost all conditions. The best variety to use as a houseplant is the Rhapis Excelsa. This slow growing palm has large, shiny, dark green fronds with blunt tips. The fronds of a Lady Palm grow out of multiple sturdy stems that are covered in a hairy brown fiber. When potted in a 6” or 8” container, this compact upright palm makes a great table plant. In a 10” or larger pot, a Lady Palm can grow up to 14 ft. tall. A Rhapis Palm is quite pricey but well worth it when you consider that it is a slow grower, has a long life span, demands little in the way of care, is a beautiful addition to any decor, and it cleans the air of harmful chemicals.", 
    light: "A Rhapis Palm grows best in bright indirect light but can adapt to lower light.", 
    water: "Allow the top 50% of the soil of a Rhapis Palm to dry out before watering. A Rhapis, like many palms, is sensitive to chlorine, fluoride, and boron in the water. If these chemicals are present allow the water to sit for 24-48 hours before using it or use distilled water. Consistent over-watering causes root rot.", 
    temperature: "The Rhapis Palm can adapt to temperatures between 50°and 80° F. (10°-26.7°C) so it is well-suited to any home or office.", 
    poisonous: "Lady Palms are non-toxic plants.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Rhapis-excelsa-10-261x300.jpg"
    },
    {
    name: "Rose Bush Plant", 
    description: "Miniature Rose bush plants, beautiful little hybrid plants that trace their parents back to China, usually appear in stores around Valentine’s Day and Mother’s Day. These indoor houseplant rose bushes  look lovely when first purchased but are difficult to keep indoors on a permanent basis. Enjoy your rose bush plant in your home and then plant it outside as soon as the weather permits. A miniature rose bush plant grows much better outdoors in the fresh air and bright light. This plant produces small 1”-2” (2.5-5cm) flowers in red, yellow, pink, white, peach, and orange. Since a miniature rose is a hybrid of the regular rose, it requires the same type of care and attention as a regular Rose Bush plant.", 
    light: "A miniature rose bush plant needs very bright light. If you don’t have a place in your home where the plant can get several hours of direct sun, move the rose bush outdoors into the sun for a few hours each day once the danger of a frost is over. When there is not enough light, rose bushes don’t bloom, the stems start to stretch to the light, and leaves are far apart.", 
    water: "A miniature rose bush requires a great deal of water, especially when it is flowering. Since these plants are usually purchased in small pots, be sure to check the soil every few days. Allow the top 1” (2.5cm) of soil to dry out before watering. During the winter, when a miniature rose bush plant is resting, keep the soil barely moist. Be careful not to get water on the leaves; wet leaves often cause a fungus called Black Spot to develop.", 
    temperature: "Miniature rose bush plants do well in temperatures between 60°-75°F (16°-24°C). These plants are very susceptible to frost damage.", 
    poisonous: "Miniature rose bush plants are non- poisonous plants.", 
    image: "https://www.houseplant411.com/wp-content/uploads/82f981f441dff5e83462c48c41935aae-267x300.jpg"
    },
    {
    name: "Sago Palm", 
    description: "A Sago Palm has a very rugged trunk 1”- 12” (2.54cm – 30.50cm)  in width depending upon the age of the plant. The trunk is topped with stiff, somewhat narrow, long, arching fronds that grow in a circular or rosette pattern. Be careful to avoid being stuck by the sharp, needle-like tips of the fronds. This is a very elegant, slow growing plant and often produces only one new frond per year. Although outdoors a Sago palm can reach a height of 6ft. (1.8 m), indoors a mature Sago palm, after five or six years, is still only about 2ft – 3ft tall (.6m-.9m).", 
    light: "How much light for a Sago palm: A Sago palm needs bright light with a little direct sun in the morning. Direct afternoon sun burns the leaves. Give a Sago palm a ¼ turn each week to keep it from growing toward the light. In bright light a Sago palm produces short thick fronds, in lower light the fronds are long and narrow.", 
    water: "How to water a Sago palm: A Sago palm is fairly drought resistant plant. It is more harmful to the plant to over water and cause root rot than to under water. Allow the top 75% of the soil to dry out before thoroughly watering a Sago Palm. Be sure the water comes out the drip holes in the bottom of the pot, but do not allow the plant to sit in the excess water. Water sparingly in the winter when there is less light and cooler temperatures. Be careful to never get water in the crown of a Sago palm, this can cause crown rot disease and the eventual death of the plant. Sago palms should never be allowed to totally dry out.", 
    temperature: "Best temperature for a Sago palm: Sago palms prefer warm temperatures between 60°-75° F (16°-24° C). They still survive in temperatures as low 45° F (7.2°C) but do not grow at all. Avoid putting a Sago palm near heaters, air conditioners, or cold drafts. These plants do not like severe temperature fluctuations.", 
    poisonous: "Is a Sago palm a poisonous plant: A Sago palm is a very poisonous houseplant with a #4 level toxicity. All parts are poisonous, especially the seeds. Keep a Sago palm out of the reach of children, dogs, and especially cats who love to play with the fronds of the plant.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Cycas-revoluta-17-4-256x200.jpg"
    },
    {
    name: "Sansevieria Plant", 
    description: "A Sansevieria plant, also called a Snake plant, Mother in Law’s Tongue, Bowstring Hemp, and Devil’s Tongue, was originally found growing in Africa and southern Asia. This is a hardy, almost impossible to kill houseplant that thrives on neglect.  Sansevieria plants can grow in bright light or shade, are not harmed by low humidity or cold drafts, rarely need to be repotted, and are drought resistant. The only way to kill a sansevieria is by over watering or keeping it in temperatures 40°F ( 4.4°C) or less for aa extended period of time", 
    light: "How much light does a sansevieria need: This plant can be placed anywhere in a room, from the darkest corner to the brightest window. The better the light, the faster a sansevieria plant grows. The more coloration in the leaves, the more light the plant needs.", 
    water: "How to water a sansevieria plant: Over-watering is the main reason a sansevieria plant dies. Allow the soil to practically dry out before you water. During the winter, in a low light area, a sansevieria plant may need water only once every month or two.", 
    temperature: "Best temperature for a sansevieria plant: Sansevierias grow well in warm temperatures between 60°F (15.5°C) and 85° F (29°C)", 
    poisonous: "Is a sansevieria plant poisonous: A sansevieria is a mildly poisonous plant with a #1 level toxicity. It is toxic to dogs, cats, and small children.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Sansevieria-trifasciata-Laurentii-14-copy.jpg"
    },
    {
    name: "Schefflera Plant", 
    description: "A Schefflera plant, native to Australia, New Zealand, and the Pacific Islands, is often called an Umbrella Tree because of its large, shiny, dark green leaflets that drape down like the spokes of an umbrella. In nature, the plant can be a tall tree or a short bush with woody stems, growing as tall as 10-50 ft. In some outdoor areas, a Schefflera is called an Octopus Tree because it produces impressive, tentacle like flowers.", 
    light: "A Schefflera does well in medium light, but grows faster and develops more leaves in bright, indirect light. The Schefflera Amate variety needs less light than a regular Schefflera plant.", 
    water: "Allow the top 25-30% of the soil to dry out before watering. Green leaves drop off and new growth turns black when a Schefflera is over-watered. Yellow leaves indicate the plant needs more water.", 
    temperature: "A Schefflera prefers temperatures between 65°-80°F ( 18.3°-26.7°C). They do not do well in temperatures below 55°F (12.8°C). Keep the plant away from cold drafts and heaters.", 
    poisonous: "A Schefflera plant is a slightly poisonous houseplant with a level #1 toxicity. It is toxic to cats, dogs, and small children.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Schefflera-actinophylla-Amate-10-4-239x266.jpg"
    },
    {
    name: "Selaginella Plant", 
    description: "There are about 700 varieties of a  Selaginella plant which are often referred to as Spike Moss or Arborvitae Ferns. Selaginella plants are very diverse in their size and in the manner in which they grow. Many types of a Selaginella plant can be found growing wild in tropical America, Asia, China, Japan, North America, Mexico, South Africa and Australia. A Selaginella plant, depending upon the variety, may be a creeping, climbing, or trailing plant. Selaginella kraussiana, which is also called Spreading Club Moss or Trailing Moss, grows about ½ inch high and has a limitless spread. S. kraussiana has very small bright green leaves that overlap on trailing jointed stems. Selanginella martensii is a small bushy plant that grows about 7-9” tall and just as wide. S. martensii has thick, multi-branched stems filled with small green leaves. When S. lepidophylla, a native of desert and semi-desert regions, doesn’t get enough water, the leaves roll into tight brown balls (a phenomenon known as cespitose) and the plant becomes totally dormant. Once this Selaginella  gets some moisture, the leaves open up, turn green, and the plant starts to grow again. This is why the  Selaginella lepidophyllagets is called the “Resurrection Plant.”  Keep an eye out for mealybugs and spider mites that can hide in the leaves.", 
    light: "Light requirements depend upon the variety of Selaginella. bright indirect light indoors, partial shade outdoors is usually a good idea for most Selaginella varieties.", 
    water: "Keep the soil moist but never soggy and avoid using cold water. A Selaginella plant becomes totally dormant and the leaves roll into tight little brown balls when there is no moisture. Once the Selaginella is watered, it turns green and starts to grow again.", 
    temperature: "Best temperature 50°-75°F (10°-24°C ). Some types of Selaginella plants can handle temperatures as low as 40°F (4.4°C)", 
    poisonous: "A Selaginella is a non-poisonous houseplant.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Selaginella-sp2-256x215.jpg"
    },
    {
    name: "Shamrock Plant", 
    description: "A Shamrock plant is a small, bulb plant approximately 5”-7” tall. The thin leaves are usually divided into three leaflets, though some varieties may have four or more leaflets, and resemble clover. The leaflets exhibit “sleep movements” which means they spread open in the light and close up when it gets dark. When placed in bright, indirect light, Shamrock plants produce delicate, colorful flowers.", 
    light: "Shamrock plants need bright indirect light to grow well and produce flowers. They often bloom all winter if kept in a well-lit spot. The leaves of a Shamrock plant fold up at night and re-open when light returns.", 
    water: "Keep the soil barely moist but never soggy and allow the top 2” of soil to dry out before watering. It’s best to water a shamrock plant from the bottom so the thin fragile stems of the plant don’t get water logged and the soil stays loose.", 
    temperature: "Shamrock plants grow best in cool temperatures between 60°-70°F (15.6°-21.1°C) during the day and 55°-65°F (12.8°-18.3°C) at night.", 
    poisonous: "Shamrock plants are slightly poisonous if eaten in very large quantities with a #1 toxicity level.", 
    image: "https://www.houseplant411.com/wp-content/uploads/51eGtvCekML._AC_-256x256.jpg"
    },
    {
    name: "Spider Plant", 
    description: "The plant produces grassy-looking, narrow leaves about 8”-10” long and less than 1” wide directly from the center of the plant. When kept root-bound, a spider plant sends out numerous long runners (stems) that produce small, delicate, star- shaped, white flowers. Once the flowers die, baby plants (plantlets) develop and can be easily used for propagation. A spider plant can also be propagated by dividing the fleshy, tuberous, plant roots.", 
    light: "How much light for a spider plant: A spider plant likes medium to bright indirect light. Solid green plants need less light than green and white varieties. No spider plant should ever be put in the direct sun.", 
    water: "How to water spider plant: How you water is a very important part of how to care for a spider plant. Allow the top 50% of the soil to dry out before you water. A good way to tell when the plant needs water is to look at the leaves. The green color starts to fade when the soil is dry. Using water with a high salt or chemical content (fluorine or chlorine) causes brown leaf tips. Never use water that had passed through a water softener; it is much too salty.", 
    temperature: "Best temperature for a spider plant: These plants grows best when the temperature is between 65°- 75°F.  (18°-23° C. ). They will survive in temperatures as low as low as 45°F (7.4°C) without damage, but the plant will not grow very much.", 
    poisonous: "A spider plant is not toxic to dogs, cats, and other pets and is not poisonous to small children.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Chlorophytum-comosum-08-8-256x171.jpg"
    },
    {
    name: "Split Leaf Philodendron Plant", 
    description: `A Split Leaf philodendron, sometimes called a Lacy Tree philodendron or Horsehead philodendron, is a very large, popular, easy- care houseplant. These plants have big, glossy, leathery, heart- shaped leaves that, as the plant matures, split from the leaf edge to the center vein. The slits in the leaves of a Split Leaf philodendron are called cuts. When young, a Split Leaf philodendron plant has strong upright stems. As the plant grows larger and the leaves get bigger and heavier, the philodendron stems start to droop down until they are almost horizontal to the ground. A Split Leaf philodendron grows rapidly indoors, especially if the humidity is high, and often has leaves that are as large as 3ft. long and 2ft. wide.  When grown as a houseplant, it takes about 15–20 years for a Split Leaf philodendron plant to produce flowers. Eventually, an indoor Split leaf philodendron plant grows to be about twice as wide as it is tall and takes up quite a bit of space in your home or office.`, 
    light: "A Split leaf philodendron needs medium to bright light. It can survive in lower light, but the leaves won't split and the plant becomes leggy. Keep it out of the direct sun.", 
    water: "Water a Split leaf philodendron well, until the water drains out the drip holes in the bottom of the pot. Allow the top 25-30% of the soil to dry out before watering again. Keep the soil of a Split leaf philodendron damp but never soggy. Water droplets or perspiration on the leaves of a Split leaf philodendron indicate over-watering; brown leaf edges indicate under- watering.", 
    temperature: "A Split leaf philodendron plant prefers warm temperatures and doesn't do well in temperatures below 50°F (10°C) .", 
    poisonous: "A Split leaf philodendron is very poisonous houseplants with a #2 toxicity level.", 
    image: "https://www.houseplant411.com/wp-content/uploads/philodendron-768x1024.jpg"
    },
    {
    name: "Staghorn Fern", 
    description: `A staghorn fern, also called an elkhorn fern, is native to the rain forests of Queensland Australia where it’s found growing on rocks and on the sides of trees. Staghorn ferns are unique looking plants and do not resemble any other fern plants. The large, spectacular, thick, outer leaves (“antler fronds”) grow out of the center of the plant and are shaped like elk or moose antlers. These leaves are covered in fine hairs that make them feel a little furry and give a staghorn fern a gray or silver look. The other very different looking leaf at the bottom of a staghorn fern is a brown, cup-shaped leaf (shield frond) that in nature captures nutrients that the plant needs. Outdoors, this frond also helps a staghorn fern cling to rocks and trees. Indoors this cup shaped frond helps a staghorn fern cling to the sides of the container in which it’s planted. Although a staghorn fern can be grown in a pot like any other houseplant, it looks best when mounted on a hard surface like a decorative board and hung on the wall. The bottom frond helps a staghorn fern cling to the decorative board.

    Although there are many different species of staghorn ferns, the most popular one used as a houseplant is the Platycerium bifurcatum variety. A staghorn fern is not a good plant for someone who wants a forgiving, green friend that can put up with being ignored or not cared for properly. This plant must be in an area that gets bright, indirect light and you can substitute artificial light. How you water your staghorn fern is very important because over and under watering are the main reasons a staghorn fern dies. Since staghorn ferns are often mounted on boards, the usual ways of watering potted plants won’t work. You’ll need to soak the fern in a sink of water for 10-20 minutes or mist all parts of the plant (undersides of the fronds especially). Follow the care tips below and you will have a staghorn fern, when mounted, looks like a piece of art.`, 
    light: "A Staghorn fern grows best in bright, indirect light but no direct sun.", 
    water: "How you water a staghorn fern determines if the plant lives or dies! Check the center of a Staghorn Fern for moisture. When the top 50% of the soil at the center is dry, submerge the entire plant, pot, piece of bark, or basket in a sink of lukewarm water for 10-20 minutes. Green fronds fall off a staghorn fern from over-watering. Keep the soil dryer during the winter. You can also thoroughly mist ALL parts of the plant with a fine spray if you don't want to try the soaking method.`, 
    temperature: "Temperature for a staghorn fern should be 65°-80°F (18.3°-26.7°C)", 
    poisonous: "A Staghorn Fern is non- poisonous plant and is not toxic to cats, dogs, or humans.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Staghorn-Fern-copy-1-256x112.jpg"
    },
    {
    name: "Strawberry Begonia Plant", 
    description: "The Strawberry Begonia plant, or Strawberry Geranium as it is sometimes called, is neither a begonia nor a geranium, but rather a member of the Saxifrage family. It does have bluish-green, fuzzy leaves like those of a begonia and it does spread by sending out “stolen” or “runners” like a strawberry plant; but a Strawberry Begonia is really an evergreen native to Asia and a close relative of the Piggyback plant. A Strawberry Begonia produces a lovely, white flower with pointed petals and a bright, yellow center. Like a strawberry plant, new babies develop at the ends of each of the “stolen.” Indoors or on your porch a Strawberry Begonia makes a beautiful hanging plant. Outdoors it can also be an excellent ground cover in your garden.", 
    light: "Place a Strawberry Begonia in bright indirect light. Direct sun burns a Strawberry Begonia Plant and puts holes in the leaves.", 
    water: "If the top 2”- 3” of soil in the Strawberry Begonia Plant are still moist, do not water. When the top few inches dry out, water a Strawberry Begonia until water comes out the bottom drip holes. A Strawberry Begonia Plant needs less water in the fall and winter when it is resting. Always water a Strawberry Begonia from the bottom so no water collects on the hairs of the leaves.", 
    temperature: "Strawberry Begonias like cool temperatures and do not thrive when it is too hot. They prefer temperatures between 40-65 degrees(F).", 
    poisonous: "A Strawberry Begonia is a non- poisonous houseplant. It is not in the same family as 'real' begonias (which are ALL poisonous).", 
    image: "https://www.houseplant411.com/wp-content/uploads/oldimages/Plant_186/634643396560761551-256x180.png"
    },
    {
    name: "Stromanthe Plant", 
    description: "As a houseplant, the upright Stromanthe is usually about 2′-3′ (.6m -.9m) tall and produces long, elliptical-shaped, multi-colored, glossy leaves about 6″-12″ (15.2cm -30.5cm) long. The topside of the leaves are a combination of green, cream, white, and pink. No matter what the variety, the underside of the leaves is always a vibrant pinkish-red- color. The leaves of a Stromanthe lean in the direction of the light source as it moves across a room throughout the day. Once night arrives and it’s dark, the leaves fold up and open again as the light returns the next morning. When grown indoors, a Stromanthe may produce tiny white flowers surrounded by bright red bracts during late winter or early spring. The flowers are only about ½” (1.2cm) but the bracts surrounding them can be  2”-3” (5cm-7.5cm) wide. The flowers can’t compete with the plants’ beautiful leaves.", 
    light: "Place a Stromanthe plant in bright indirect light but no direct sun; a north or east facing window is best.", 
    water: "A Stromanthe likes to be kept barely moist at all times. Be careful not to over-water or the roots rot and the plant dies. In winter, allow the soil of a Stromanthe to dry out a little more, but never completely.", 
    temperature: "Stromanthe plants prefer warm temperatures between 65°F and 80°F (18.3°C-26.7°C) during the day and 5° cooler at night. Avoid cold or hot drafts.", 
    poisonous: "A Stromanthe is considered to be a non-toxic plant and safe to have around pets and small children.", 
    image: "https://www.houseplant411.com/wp-content/uploads/strstr_grande-256x256.jpg"
    },
    {
    name: "Swedish Ivy Plant", 
    description: "Swedish Ivies are lush, almost succulent – like plants with long, trailing, thick stems. The 1”-1.5” leaves are rounded with scalloped edges. The thick, bright green leaves are shaped more like a coleus leaf than an ivy leaf. When given enough bright light, a Swedish Ivy produces delicate, white, lavender, or purple tubular-shaped flowers throughout the year. Some varieties even have a special aroma when touched.", 
    light: "A Swedish Ivy requires bright indirect light, but no direct sun. Inadequate light causes a Swedish Ivy to 'reach' for the light and become leggy.", 
    water: "Allow the top 30% of the soil to dry out before watering a Swedish Ivy. The easiest way to kill a Swedish Ivy is by over-watering and causing root rot. Yellow leaves indicate the plant is over-watered. The leaves become soft and dull green when a Swedish Ivy needs water.", 
    temperature: "Provide temperatures between 70°-75°F (21.1°-23.9°C) most of the year for a Swedish Ivy. During the winter, when the plant is not actively growing, cooler temperatures of 60°-65°F (15.6°-23.9°C) are best.", 
    poisonous: "A Swedish Ivy is a non- poisonous plant.", 
    image: "https://www.houseplant411.com/wp-content/uploads/swedish-ivy-1.jpg"
    },
    {
    name: "Wandering Jew Plant", 
    description: "The wandering jew plant group is made up of several different varieties. Most have long vines of 2″-4″ oval or heart shaped leaves. Leaf color depends upon the exact type and can be solid green, green with a purple stripe, green with a white or yellow stripe, green with splashes of pink, purple, and cream, or solid purple. The back of the leaf may also be purple. Some wandering jew plants have hairy leaves and some with a silver shine to them. The wandering jew plant produces small flowers in white, pink, purple, or magenta.", 
    light: "How much light does a Wandering Jew plant need: bright indirect light helps the plant produce colorful leaves and flowers. Direct sun causes the color in the leaves to fade.", 
    water: 'How to water a Wandering Jew plant: Water well and then allow the top 2" to 3" of soil dry out before watering again. If the soil is very dry and the plant is sitting in bright light, the leaves become stunted and lose color. Lack of water can also cause brown and crispy leaves on a Wandering Jew plant. This usually problem affects to older growth first. Over watering is more serious, resulting in root rot.', 
    temperature: "Best temperature for a Wandering Jew plant: Try to maintain temperatures between 60°- 80°F (15.6°- 26.7°C).", 
    poisonous: "A Wandering Jew plant is slightly poisonous with a level #1 toxicity. It is toxic to dogs, cats, and small children. The sap of the plant is caustic and may cause skin irritations or a rash. It is, however, considered safe to put into bird or reptile enclosures.", 
    image: "https://www.houseplant411.com/wp-content/uploads/e452b4f7f94c670d77f0c8a1a9afbb32-256x256.jpg"
    },
    {
    name: "Yucca Plant", 
    description: "The spineless Yucca plant, a native of Guatemala and southeast Mexico, is an ideal, easy care houseplant. Yucca plants can be a bush or a stalk plant.  The long, leathery, sharply pointed leaves of a Yucca plant are a foot or more in length and about an inch wide.  Yucca plants are very top heavy and should always be set into a heavy clay or ceramic pot to prevent them from toppling over. A Yucca plant is poisonous and should be kept away from small children and pets. Read more about common houseplants that can be dangerous in my book Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. A Yucca is the type of plant that complements a Southwestern look in your home or office.", 
    light: "Yucca plants grow best in bright indirect light. A Yucca can survive indoors in lower light but will need very little water. The slow growing yucca will be even slower to produce new leaves in low to medium light. An ideal location is near a west, east, or south-facing window.", 
    water: "A Yucca plant originates in the deserts of Mexico and Guatemala so it likes to be kept dry. Allow at least the top 50% of the soil of a to dry out before watering. Over watering is the main and probably the only way to kill a yucca.", 
    temperature: "A yucca can adapt to temperatures as low as 35° and as high as 90°.", 
    poisonous: "Yucca plants are slightly poisonous with a #1 toxicity level. The poisonous part of the plant is difficult to reach, but a persistent child or pet might be able to get through the tough exterior and eat it.", 
    image: "https://www.houseplant411.com/wp-content/uploads/Yucca-elephantipes-14-5432.jpg"
    },
    {
    name: "Zamioculcas Zamiifolia-ZZ Plant", 
    description: `A ZZ plant, Zamioculcas zamiifolia, has many names around the world: Eternity Plant, Emerald Palm, Zanzibar Gem, ZuZu Plant, and Aroid Palm. It was originally found growing as an outdoor, flowering plant in eastern Africa but can now be found growing in tropical areas around the world. It was a Dutch nursery in Africa that realized a ZZ plant would be a perfect houseplant and started to propagate and sell it world wide. A ZZ plant is a member of the Araceae family and a close relative of the dieffenbachia, anthurium, philodendron monstera, and caladium.

    The unique looking, almost impossible to kill ZZ plant, is a slow growing, upright succulent plant that burst onto the houseplant market in the 1990’s. It became an immediate hit with indoor plant lovers because it grew almost anywhere and was tolerant of all types of care, except being over watered. What we call the the stems of a ZZ plant really the leaves of the plant. These long, thick “stems,” (15″-20″ tall) are covered in hundreds of small, plump, shiny green, leathery leaflets (not leaves) that are about 2″-3″ long. During the summer and early fall the plant may produce small flowers hidden inside a 2″-3″ dark yellow or bronze colored spadex; flowering usually occurs when a ZZ plant is grown outdoors. The roots of the plant are fat rhizomes, underground horizontal stems, that store water and enable a ZZ plant to be drought resistant. In a lowlight, cool area, a ZZ plant can sometimes go three or four months without being watered; it simply uses the water that has been stored in the rhizomes to survive.`, 
    light: "How much light does a ZZ plant need: These plants can survive in low light, but grow faster in bright, indirect light. Since a ZZ plant is a slow grower even in good light, in low light they rarely produces new leaves. Direct sun will fade and burn the leaves. Stems on a ZZ plant droop when there is not enough light and grow straight up when light is coming from above.", 
    water: "How to water a ZZ plant: Over-watering is the main (and practically the only) way to kill a ZZ plant. This is a plant that stores water in its rhizomes and does do not like wet feet, so allow the soil to dry out before watering. Unlike most plants, a ZZ plant is very forgiving, allowing you to over-water a few times before showing signs of serious damage. Yellow leaves are an indication that the plant has been over-watered or severely under-watered. In very warm weather, a ZZ plant may need water every 7-10 days. In cooler weather, the soil may take 2-3 weeks to dry out. When you water, water well enough so the water comes out the drip holes in the bottom of the pot. Do not allow the plant to sit in the excess water.", 
    temperature: "Best temperature for a ZZ plant: Temperatures between 60°-80°F (15.6°-26.7°C) are best. When the temperatures is below 60°F (16.6°C), the cold air slows down the plant growth.", 
    poisonous: "Is a ZZ plant poisonous: This is an extremely poisonous plant and very toxic to cats and dogs. Keep the plant out of the reach of small children who are tempted by the plump shiny leaves. A ZZ plant has a #4 toxicity level, the very highest level.", 
    image: "https://www.houseplant411.com/wp-content/uploads/e5db3e44c0e6686d330d2b7797c20adc.png"
    },
    {
    name: "Zebra Plant", 
    description: "A  Zebra plant (Aphelandra squarrosa) has spectacular foliage and exotic looking flowers. The nickname Zebra plant comes from its large, dark green, shiny leaves that have a bold white midrib and white veins. The stems of the leaves have a purple tinge. The bright yellow flowers on a Zebra plant, which require very bright light to bloom, emerge from bracts at the end of a long stem. A Zebra plant, native to the Brazilian forests, is primarily a table plant that stands about a foot tall.  These plants do require a little extra care; but this beautiful, out of the ordinary houseplant, is well worth it.", 
    light: "Zebra plants require very bright indirect light but no direct sun, especially if you want them to bloom.", 
    water: "Keep the soil moist but not soggy, and never allow the soil to totally dry out. Bottom leaves drop off a Zebra plant when it is over or under -watered.", 
    temperature: "Zebra plants prefer temperatures between 65°-75°F (18.3°-23.9°C). Prolonged exposure to temperatures below 60°F (15.6°C) causes leaves to fall off.", 
    poisonous: "Zebra plants are non- poisonous.", 
    image: "https://www.houseplant411.com/wp-content/uploads/800px-Zebra_Plant_Aphelandra_squarrosa-256x144.jpg"
    },
]

// first we need to connect to the database
mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        // first we remove all of the plants

        // owner: null prevents the deletion of items with an owner when we seed
        Plant.deleteMany({owner: null })
            .then(deletedPlants => {
                console.log('deletedPlants', deletedPlants)
                // the next step is to use our startPlants array to create our seeded plants
                Plant.create(startPlants)
                    .then(newPlants => {
                        console.log('the new plants', newPlants)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })