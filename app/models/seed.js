// seed.js is going to be the file we run, whenever we want to seed our database, we'll create a bunch of plants at once.

// we want to be careful with this, because when we run it, it'll delete all of the plants in the db. 

// we can modify this later, to only delete plants that don't have an owner already, but we'll keep it simple for now.

const mongoose = require('mongoose')
const Plant = require('./plant')
const db = require('../../config/db')

const startPlants = [
    {
        name: "African Violet Plant", 
        description: "An African Violet plant  is a small, compact, short plant with soft, furry, thick, round or oval shaped leaves. The leaves grow close together, in a tight group, on long stems, at the base of the plant. An African Violet plant produces beautiful, delicate flowers with five, velvety petals. The flowers can be white, yellow, blue, violet, pink, or fuchsia. Some of the newer varieties have large double, and bi-colored flowers.", 
        light: "An African Violet plant  is a small, compact, short plant with soft, furry, thick, round or oval shaped leaves. The leaves grow close together, in a tight group, on long stems, at the base of the plant. An African Violet plant produces beautiful, delicate flowers with five, velvety petals. The flowers can be white, yellow, blue, violet, pink, or fuchsia. Some of the newer varieties have large double, and bi-colored flowers.", 
        water: "How often should you water an African Violet plant: How you water is another important factor in helping an African Violet flower. Allow the top 1“- 2“ of soil dry out before watering. Avoid using water that has passed through a softener or water containing chlorine or fluorine. I like to water from the bottom since this helps prevent water getting on the leaves. Set your African Violet in a deep saucer of water for 10 minutes. Refill the water as it is absorbed through the drip holes in the bottom of the pot. Remove any water that is still in the saucer after 10 minutes.", 
        temperature: "Best temperature for an African Violet plant: Temperatures between 75°-80°F (23.9°-26.7C) during the day and about 10° cooler at night are ideal. Keep the plant away from cold drafts and heating vents.", 
        poisonous: "Is an African Violet plant poisonous: This is a non- poisonous plant and an African Violet plant is not toxic to cats, dogs, and is safe to have around small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/African-Violet-Plant-256x192.jpg",
        isSeeded: true
    },
    {
        name: "Agave Plant", 
        description: "An agave plant comes in all different sizes and shapes; some are extremely  large and belong growing outside while the smaller varieties make perfect indoor potted houseplants. Agave plants are succulents with multi-layered rosettes of thick, fleshy, leaves. The short, thick stem is often hidden by the large, leathery leaves. If there are children and pets in the house, avoid purchasing agave plants that have sharp, pointed leaves with spiny margins. The sap in the agave leaves is very irritating and the spines and sharp points are painful if they puncture your skin. It takes many, many years for an agave plant to flower, especially when grown indoors. Some varieties may eventually produce a very tall stalk with clusters of flowers at the top. You may not want your agave plant to bloom since, strangely, they often die after flowering.", 
        light: "How much light for an agave plant: An indoor agave plant needs all the bright light it can get to grow well indoors. Place the plant in front of a south or west facing window if possible.", 
        water: "How to water an agave plant: These are very drought resistant plants and the easiest way to kill an agave plant is by over watering, especially in the winter. During the spring and summer, water when the tops few inches of soil has dried out. In the fall, water every 2-3 weeks. During the winter, water about once a month.", 
        temperature: "Best temperature for an agave plant: Warm temperatures above 65° and as high as 80° are perfect for an agave plant. Avoid placing it near cold winter drafts or in front of an air conditioner.", 
        poisonous: "An agave plant is a toxic plant and can be quite dangerous to have around dogs, cats, and small children. The leaves of the plant contain oxalate crystals, and if ingested, can cause swelling and difficulty breathing. Another problem is skin irritations caused when someone is pricked by the sharp leaf tips or the spines along the edges of the leaves. Dermatitis problems also occur if the sap of an agave plant gets into an open cut on your hands or arms.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Agave-attenuata-08-1-256x178.jpg",
        isSeeded: true
    },
    {
        name: "Alocasia", 
        description: "An Alocasia plant, native to Asia and eastern Australia, is also called an Elephant Ear plant or African Mask plant because of its very large, glossy, heart-shaped leaves, some with very, wavy edges. The leaves may be as large as eight to thirty five inches (20cm-90cm) in length. This plant does produce flowers, but the flowers are small and insignificant and certainly pale in comparison to the beautiful plant leaves. In its native habitat, an alocasia plant grows on the floor of the forest which explains why it likes bright light, but direct sun burns the beautiful leaves.", 
        light: "How much light does an alocasia plant need: An alocasia plant requires very bright, indirect light but no direct sun. When placed in the sun, the beautiful leaves get ugly brown marks.", 
        water: 'How to water an alocasia plant: Allow the top 2"- 3" of soil to dry out before watering an alocasia plant. When watering, water evenly so all parts of the soil are moistened. As with all indoor plants, too much water, constantly wet leaves, and heavy, soggy soil encourage numerous fungal infections that can seriously harm an alocasia plant. Examine the soil frequently until you are sure how often the plant needs to be watered. During the winter, when an alocasia plant is resting, it requires less water.', 
        temperature: "Best temperature for an alocasia plant: An alocasia grows well in warm temperatures between 60°-80°F (15.6°-26.7°C). When it is exposed to temperatures below 60°F (15.6°C) for a long period, the plant becomes dormant and may drop all of its leaves. Keep an alocasia plant away from air conditioners and cold drafts or you may the leaves drooping and falling off.", 
        poisonous: "Is an alocasia a poisonous plant: An alocasia plant is an extremely poisonous plant and very toxic to children, cats, dogs, and other small pets. Eating parts of an alocasia can be be life threatening. I give this plant a #4 toxicity level which means it is very lethal.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Alocasia-X-amazonica-165x152.jpg",
        isSeeded: true
    },
    {
        name: "Alocasia – Jewel Alocasia", 
        description: "The Alocasia “Jewel” plant, native to Asia, and is also called an Alocasia Nebula. Alocasia plants have large, glossy, heart-shaped leaves with wavy edges.  If you are searching for a dramatic, very different looking plant that can be as small as 6″ or as tall as a tree, an alocasia plant is a great choice.", 
        light: "An alocasia plant requires very bright indirect light. Direct sun burns the leaves.", 
        water: 'Always allow the top 2"- 3" of the soil to dry out before watering. Keep the soil evenly moist. Over- watering, wet leaves, and soggy soil makes an alocasia plant susceptible to a variety of serious fungal infections. Check the soil frequently until you are sure of the plant\'s watering needs. Water less during the winter when it is dorman.', 
        temperature: "Alocasia plants prefer warm temperatures between 60°-80°F (15.6°-26.7°C). Alocasia plants becomes dormant with prolonged exposure to temperatures below 60°F (15.6°C), and may drop all of their leaves. Be sure to keep an alocasia away from air conditioners and cold drafts. During warm summer months an alocasia plant can produce a new leaf every week and each new leaf may be twice the size of the previous leaf.", 
        poisonous: "Alocasia plants are very poisonous houseplants with a #4 toxicity level. Alocasia plants are considered poisonous and should be kept away from pets and children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Alocasia-nebula-Imperialis-06-180x110.jpg",
        isSeeded: true
    },
    {
        name: "Aloe Vera Plant", 
        description: "An aloe vera plant has little or no stems to speak of. The stemless rosettes of long, fleshy, green-gray leaves have sharp, serrated edges, so be very careful when handling the plant. The leaves, which can be as tall as 2ft, have several layers. It is the inner layer that contains the medicinal gel. Because of the cactus like nature and the sharp teeth on the leaves, an aloe vera plant is sometimes erroneously referred to as a “Desert Cactus.” Although an indoor aloe vera plant rarely blooms; when grown outside, it produces long spikes with yellow, white, or red tubular flowers at the top. When small, an aloe vera plant can be used as a table plant and, as it matures, a floor plant", 
        light: "How much sun an aloe vera plant needs indoors is different than aloe vera light requirements outdoors. Indoors an aloe vera likes bright, indirect light and only morning sun. Avoid direct afternoon sun or the leaves may become discolored. An outdoor aloe vera plant can adapt to direct sun.", 
        water: "How to water an aloe vera plant: Water well and then allow the soil to thoroughly dry out before watering again. It may be 2-3 weeks before an aloe vera plants needs to be watered again. During the winter, an aloe vera plant needs even less water. An aloe vera plant can be saved from severe under-watering, but rarely survives being over-watered.", 
        temperature: "These plants likes dry, warm temperatures between 65°-85°F (18°-29° C). Aloe Vera plants do not do well in temperatures below 40°F (4.5°C)", 
        poisonous: "Although the sap of an Aloe Vera plant is highly recommended for treating burns, other parts of the plant are poisonous. This plant has a #1 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/cb76738f43d2d7cfae8f87b3a865ec31-153x231.jpg",
        isSeeded: true
    },
    {
        name: "Amaryllis", 
        description: "Amaryllis Plant Bulbs can be planted (or purchased pre-planted) from October through the end of April and will bloom anywhere from late November to January in the northern hemisphere. The spectacular amaryllis flowers range in size from 4”- 10.” When buying amaryllis bulbs, remember it is the large, healthy bulbs that produce the larger flowers. Amaryllis flowers can be singles or doubles and come in many colors such as red, white, rose, dark reddish/burgundy, orange, and apricot. New amaryllis plant varieties produce bicolored flowers and flowers with different edge colors. With proper after-bloom care,  the easy care Amaryllis plant will flower year after year for many years.", 
        light: "HOW MUCH LIGHT FOR AN AMARYLLIS PLANT: Bright indirect but not direct afternoon sun is ideal for an amaryllis plant. Turn the plant each time you water keep the stems growing straight up and not leaning toward the light.", 
        water: "HOW TO WATER AN AMARYLLIS PLANT: Water the bulbs sparingly until the stems appear. As the stem, flower buds, and leaves develop increase the water. Keeping the soil barely moist helps extend the life of the flowers.", 
        temperature: "BEST TEMPERATURE FOR AN AMARYLLIS PLANT: These plants like temperatures between 68°-70°F(20°-21.1°C). Once the plant flowers moe it to a slightly cooler area to help the flowers last longer.", 
        poisonous: "IS AN AMARYLLIS PLANT poisonous: This plant is extremely poisonous to small children, dogs, cats and other pets.. All parts of the plant contain alkaloids that can cause severe problems if the plant is ingested. The amaryllis bulbs contain calcium oxalates and are the most dangerous part of the plant. Pets that swallow pieces of an amaryllis plant suffer severe mouth pain, drooling, foaming at the mouth, vomiting, and breathing problems. Small children who eat any part of the plant develop digestive problems and swelling of the lips, tongue and airways making it difficult to breathe and swallow.", 
        image: "https://www.houseplant411.com/wp-content/uploads/images-11-117x152.jpeg",
        isSeeded: true
    },
    {
        name: "Angel Wing Begonia", 
        description: "Angel wing begonias are named for their large, “angel wing” shaped, dark green leaves that are often decorated with metallic or frosty silver specks. The underside of the leaf is usually a deep purple or red. These plants produce large, heavy, draping, clusters of delicate, dangling flowers in red, white, orange, or pink. The intensity of the flower and leaf colors depends upon how much light a begonia gets. When still a young, an indoor angel wing begonia is small enough to sit on a table or desk. As the plant matures, the stems can be pruned to create a large bushy floor plant or a beautiful hanging plant. If you have the room and the proper light, an angel wing begonia can grow into a 5ft tree.", 
        light: "Angel wing begonias like bright indirect light but no direct sun. Proper light helps the leaves and flowers develop a more intense color. Insufficient light causes the plant to become leggy and prevents flowering. When light is too intense, the edges of the leaves curl and turn brown.", 
        water: "Be careful not to over-water! If the plant is in a small pot, allow the top 1” of soil to dry out before watering. In a larger pot, allow the top 2”-3” of soil to dry out. Angel wing begonia containers must have drip holes in the bottom for proper drainage and the plant should never sit in water. When over-watered, the leaves turn yellow and fall off.", 
        temperature: "Angel wing begonias do well when the temperature is 65°-75°F (18.3°-23.9°C). Temperatures below 50°F (10.0°C) damage leaves and flowers.", 
        poisonous: "Angel Wing begonia plants have a #1 toxicity level due to the insoluble oxalates in the plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/angel-wing-begonia-114x152.jpeg",
        isSeeded: true
    },
    {
        name: "Anthurium", 
        description: "This easy-care houseplant produces beautiful, long-lasting, waxy, heart- shaped “flowers” which are really modified leaves called “spathes” throughout the year. The exotic looking anthurium flowers come in vibrant red, light pink, dark pink, white, purple, orange, green, and new varieties are bi-colored. There are even light blue and dark blue anthurium flowers. The plant usually blooms for a few months and then rests for a few months before blooming again. Some anthuriums have leaves that are as spectacular looking as flowers.", 
        light: "How much light for an anthurium: Provide as much bright, indirect light as possible, but no direct sun. If there is insufficient light, an anthurium produces fewer flowers and becomes thin and straggly as stems stretch toward the light.", 
        water: "How to water an anthurium: Water well and then allow the top few inches of soil to dry out before watering again. Over-watering causes yellow leaf tips and under- watering causes brown leaf tips.", 
        temperature: "What is the best temperature for an anthurium: 75°F-85°F (23.9°C-29.4°C) during the day and about 10° cooler at night are ideal. Temperatures below 60°F (15.6°C) slow leaf and flower growth.", 
        poisonous: "An anthurium is a very poisonous plant and toxic to cats, dogs, and children. It has a #3 toxicity level which means it should be kept far out of reach.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Anthurium-Red-06-180x143.jpg",
        isSeeded: true
    },
    {
        name: "Aralia Plant", 
        description: "Aralia plants have a distinctive, oriental look to them and often have twisted, woody stems or a short, thick, stump for a base. The leaves can be leathery and round like a dinner plate, lacy and fern-like, or even crinkled. Aralia plant leaves may be solid green or variegated with flecks and patterns in green, white, gold, and cream. When small, the plant can be used as a table plant and, as it matures, an impressive floor plant.", 
        light: "An aralia plant can survive in low light conditions, but grow faster and produce more leaves in medium to bright indirect light.", 
        water: "Too much water, resulting in root rot, is the main reason an aralia plant dies. Allow the top 50% of the soil to dry out before watering. In low light conditions, an aralia plant may need water as little as every 2-3 weeks.", 
        temperature: 'Temperatures between 60°-85° F (15.6°-29.4°C) are best for an Aralia plant.', 
        poisonous: "An aralia plant is a poisonous plant with a #2 toxicity level. All parts of an aralia plant contain saponins which may cause gastrointestinal irritation, nausea, vomiting and diarrhea.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Polyscias-fruticosa-10-S-2-153x220.jpg",
        isSeeded: true
    },
    {
        name: "Aralia Plant – Balfour", 
        description: "A Balfour Aralia plant is an evergreen plant native to Africa, Asia, Australia, parts of North and Central America, and South America. The distinct leaves of a Balfour Aralia resemble leathery, round, dinner plates about 1″- 2″ in diameter, which is how the plant got its nickname, the Dinner Plate Aralia.  The leaves can range in color from light green to dark green and some varieties have green and cream colored variegated leaves. Aralias are not  good houseplants for beginners since they are easy to over- water which results in root rot and leaves falling off.", 
        light: "Balfour Aralia plants do best in bright indirect light; but will survive in low light if you are careful not to over-water.", 
        water: "Aralias have very fine roots and are easily over-watered. Always allow the top 1/2 of the soil in the pot to dry out before watering. During the winter when plants are resting, they need even less water. In low light situations, Aralias may need water only once a month.", 
        temperature: "Balfour Aralias like basic household temperatures between 65-80 degrees.", 
        poisonous: "These plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that can be dangerous in my book Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Polyscias-scutellaria-10.jpg",
        isSeeded: true
    },
    {
        name: "Areca Palm", 
        description: "An Areca palm is a type of cane palm. When grown indoors, an immature Areca palm can be small enough to sit on a table or desk. However, as the plant matures, it quickly develops into a medium sized, exotic looking palm that can reach a height of 6-8 feet. An Areca palm gets its nickname, the “Butterfly Palm” because of the way its long, feathery fronds (leaves) arch upwards off multiple reed- like stems, resembling butterfly wings. Each frond has between 40-60 leaflets and may be as tall as 3ft.", 
        light: "How much light for an Areca Palm: bright indirect light; too much light or direct sun burns the fronds and causes them to turn yellow.", 
        water: "How to water an Areca Palm: Keep the soil barely moist but never soggy. Allow the top few inches of the soil to dry out before watering. Remember, the soil at the bottom of the container is wetter than the soil at the top. Never allow an Areca Palm to sit in the excess water that drains out the drip holes in the bottom of the pot. If your household water has a lot of chemicals in it or passes through a water softener, allow the water to sit out over-night before using it, or use distilled water or rain water. Water containing chemicals or salt may cause ugly spots on the leaves. A Areca palm develops yellow leaves if the soil gets too dry.", 
        temperature: "Best temperature for an Areca Palm: 65F°-75F° (18.3°C-23.9°) during the day and around 55°F (12.8°C) at night. Areca palms are very sensitive to low temperatures so if you place it outside during the summer be sure to bring it in before temperatures dip below 50°F (10°C).", 
        poisonous: "An Areca Palm is non- poisonous plant and safe to have around cats, dogs, or small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dypsis-lutescens-17-153x189.jpg",
        isSeeded: true
    },
    {
        name: "Arrowhead Plant", 
        description: "No matter what type you select, the leaves of an Arrowhead plant always have a spade-like shape that resembles an “arrowhead”. The young, immature plant is short and bushy. However, as the plant matures and is not aggressively pruned, it produces long draping stems just as it does in nature. You can put the plant in a hanging basket or tie it to a trellis. If you want your arrowhead plant to be a large, full floor plant, cut back the long vines and keep pinching off the growing tips at the ends the stems. You can use the Stem Cuttings to propagate new plants.", 
        light: "How much light does an arrowhead plant need: The leaf color of the plant determines how much light an arrowhead plant requires. Varieties with solid green leaves can grow in low to medium light. New arrowhead hybrids with white, pink, burgundy, and lime green in their leaves require medium to bright, indirect light.", 
        water: "How to water an arrowhead plant: Water well, and then allow the top 50% of the soil to dry out before watering again. Leaves may droop when the soil is dry, but the plant quickly perks up when watered. I like to water an arrowhead plant from the bottom to prevent over watering that can cause root rot.", 
        temperature: "Best temperature for an arrowhead plant: These plants grow well when the temperature is 60°-70°F (15.5°-21.1°C). Avoid placing an arrowhead plant near heating vents, air conditioners, cold drafts, and fireplaces.", 
        poisonous: "Is an arrowhead plant poisonous: This plant has a #2 toxicity level which means it is very toxic to dogs, cats, and small children. All parts of the plant contain calcium oxalates which, if ingested, cause swelling of the lips, mouth, tongue, and airways. This swelling makes breathing very difficult.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Syngonium-podophyllum-White-Lightning-08-180x139.jpg",
        isSeeded: true
    },
    {
        name: "Asparagus Fern", 
        description: "An asparagus fern has long stems of graceful, feathery, bright green foliage. The tiny “leaves” are not really leaves at all; they are flattened, short, needlelike, modified stems.   The plant looks best in a hanging basket so the arching, trailing stems can grow freely. An asparagus fern produces small white flowers and bright red berries. As the plant matures, stems become a little woody and develop sharp spines. Some asparagus fern varieties, like the springeri, grow over 2-3ft. wide with cascading trailing stems 2ft-4ft.in length.", 
        light: "How much light for an Asparagus Fern: These plants grow best in bright indirect light coming from an east, west, or north-facing window. In lower light an asparagus fern grows very slowly and may develop yellow fronds.", 
        water: "How to water an Asparagus Fern: Do not water until the top 50% of the soil has dried out. If in doubt, allow the fronds to turn pale green before watering. An asparagus fern requires more water in the hot summer months, and likes drier soil during the cold winter months. Asparagus ferns are very drought resistant; however, yellow stems indicate the plant needs more water while brown stems mean you may be over- watering your asparagus fern.", 
        temperature: "Best temperature for an Asparagus Fern: Temperature should be between 50°-75°F (10°-24°C). These plants can even survive briefly in temperatures as low as 36°F (2.2°C).", 
        poisonous: "An Asparagus Fern is considered a poisonous plant and should be kept away small children , cats, dogs, and birds. Although the leaves are not harmful, the sharp, small thorns can be painful if touched and the red berries are toxic and cause digestive problems if eaten.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Asparagus.fern_.2010.11.07-1024x848-3-256x212.jpg",
        isSeeded: true
    },
    {
        name: "Azalea", 
        description: "An Azalea plant is the national flower of Nepal, and is part of an ancient group of plants dating back million of years. They are related to rhododendrons and blueberries and are descendents of Asian shrubs. Azaleas can also be used as a centerpiece for weddings or to replace expensive cut flower arrangements in your home or office. Azaleas have delicate, funnel shaped,  lipped flowers that can be red, pink, white, yellow, purple and even bi-color.", 
        light: "Azalea plants require bright indirect light while blooming, but no direct sun. If there is not enough light, the flower buds on an azalea plant won't open.", 
        water: 'Allow the top 2"-3" of soil to dry out before watering. Azaleas are acid loving plants; if your water is alkaline add one tablespoon of vinegar to each gallon of water. You can also water azaleas with leftover tea. Large numbers of leaves drop off if the soil is too wet or too dry.', 
        temperature: "Azalea plants thrive and their flowers last longer when the temperature is 50°-60°F (10°-15.6°C) at night and 60°-70°F (15.6°-21.1°C)F during the day. Temperatures over 80°F (26.7°C) cause leaf drop and flowers to quickly fade.", 
        poisonous: "All parts of an Azalea contain a substance called grayanotoxin which makes the plant very poisonous with a #4 toxicity level. Keep azalea plants away from children and pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/800px-Azalea_japonica_Madame_Van_Hecke_J2-256x192.jpg",
        isSeeded: true
    },
    {
        name: "Baby’s Tears Plant", 
        description: 'A Baby’s Tears plant was used as a mossy ground cover long before it became a houseplant. Outdoors, it grows close to the ground in a creeping  fashion, producing mounds of  small, green leaves and tiny white flowers. This very little plant spreads quickly when planted in a warm, shady spot out of the direct sun. Although it only grows about 2″-5″ tall, a Baby’s Tears plant can spread out over six feet and is often considered an invasive plant', 
        light: "Baby’s Tears plants like bright, indirect light but no direct sun.", 
        water: "Keep the soil of a Baby Tear's plant moist but never soggy. If the soil stays too wet, the roots and stems die.", 
        temperature: "Normal household temperatures or even a little cooler are best, 60°-75°F (15.6°-23.9°C) is ideal.", 
        poisonous: "A Baby's Tears plant is non- poisonous and looks perfect in a child's room.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Babys-Tears-Plant-180x135.jpg",
        isSeeded: true
    },
    {
        name: "Bamboo Palm", 
        description: "It’s easy to see why a Bamboo Palm is used so often as an indoor plant. It is a beautiful, compact, easy care, tropical looking plant that grows well in medium light. It can even be happy in lower light if you are careful with your water. Even though it is called a Bamboo Palm, it is not a relative of the real bamboo, a type of grass that requires very bright light. Indoors the plant be as tall as 5 – 7ft. and as wide as  3 -5ft. with multiple, reed-like stems growing in clumps. It’s these reed like stems that gave the Bamboo Palm its nickname, the Reed Palm. There are about 10-15 fronds on each stem and each frond has 10-14 pinnate (feathery), dark green leaflets. The base of each stem is covered in a tan-colored fiber that resembles bamboo.", 
        light: "Although a bamboo palm grows faster in bright indirect light, it still does well in medium light, and grows very slowly in low light if you're careful not to over-water.", 
        water: "Allow the top 1/3 of the soil of a bamboo palm to dry out before watering. These plants like barely moist but never soggy soil. Never allow a bamboo palm to sit in the excess water that drains from the pot. Do not use water that has passed through a softener because the high salt content damages the leaves. Leaf tips look pale in color and green leaves fall off when a bamboo palm is over-watered. New growth and leaf tips turn brown when a bamboo palm is under-watered. The confusing thing is that yellow leaves can develop when the plant is over or under- watered, so you need to check the soil as far down as you can to know if the plant needs water.", 
        temperature: "A bamboo palm does well in temperatures between 65°-80°F (18.3°-26.7°C).", 
        poisonous: "Although the ASPCA lists a bamboo palm as a non- poisonous houseplant, other experts state that the entire plant, especially any berries that appear, is toxic. We've erred on the side of caution and have listed a Bamboo Palm as a poisonous houseplant with a #1 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Chamaedorea-erumpens-10-2-153x205.jpg",
        isSeeded: true
    },
    {
        name: "Begonia Plant", 
        description: "The leaves of some begonia plants, such as the Begonia Rex or the Iron Cross Begonia, have extraordinarily colorful foliage. Other varieties, such as the Rieger Begonia have broad green leaves and beautiful flowers. There are some such as the Angel Wing Begonia, that have both lovely flowers and outstanding leaves.", 
        light: "Although certain varieties of begonia can adapt to lower light, most begonias need medium to bright indirect light. The better the light, the more flowers a begonia plant produces. Leaves and flowers drop off when the light is too low.", 
        water: "Water a begonia well and then allow the top 50% of the soil to dry out before watering again. Too much water causes mildew, mold, and permanent root damage. Water dripped on the leaves may cause leaf-rot.", 
        temperature: "Begonias plants do well in cool temperatures between 65°-75°.", 
        poisonous: "Begonias are poisonous plants with a #1 toxicity level. They are especially toxic to dogs and cats.", 
        image: "https://www.houseplant411.com/wp-content/uploads/a-tuberous-begonia-orange-gr-153x153.jpg",
        isSeeded: true
    },
    {
        name: "Begonia Rex Plant", 
        description: "Most begonia plants are grown for their lovely flowers, though some have pretty leaves as well. A Begonia Rex, is grown for its large, colorful, patterned leaves rather than its small, pink and white “winter” flowers. The leaves come in a variety of shapes such as oval, spear-shaped, heart-shaped, and star-shaped. The leathery, ruffled, or puckered leaves can be as small as ½ inch or as large as 10”-12;” though the average leaf size is usually 4”- 6” wide and 5”-7” long. It’s the dramatic color combinations on the leaves that sets ta Begonia Rex apart from the usual green- leafed houseplant. Splashes, swirls, spots, and stripes of red, pink, silver, purple, bronze, green, yellow, orange decorate the leaves.", 
        light: "How much light does a Begonia rex need: A Begonia rex plant needs s great deal of bright, indirect light, but no direct sun during the spring, summer, and fall. During the winter, when the light is weaker, it likes a few hours of direct morning sun. If the stems of a Begonia rex become long and straggly, it means the plant is stretching for more light. The edges of the leaves turn brown when the plant is getting too much light. Since a Begonia rex does not bloom very often, it grows better in less light than some other begonia plants and can even grow under fluorescent lights.", 
        water: "How to water a Begonia rex: A begonia rex plant likes to be evenly watered, but hates to be over-watered. Wait to water until the top 30%-50% of the soil has dried out before you water. During the winter, when the plant is dormant, water even less. keep in mind the the soil at the bottom of the pot is always wetter than the soil at the top of the pot.", 
        temperature: "Best temperature for a Begonia rex: This is a plant that likes to be warm all of the time so be careful to avoid cold drafts in the winter. A Begonia rex can be damaged if the temperature goes below 60°F (15.6°C). The leaves can also be damaged by large temperature swings.", 
        poisonous: "Is a Begonia rex a poisonous plant: A Begonia rex is a mildly poisonous plant with a #1 toxicity level. These plants are especially toxic to cats and dogs.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Begonia-rex-10-256x175.jpg",
        isSeeded: true
    },
    {
        name: "Bird of Paradise Plant", 
        description: "The most popular Strelitzia species used as an indoor plant is the Strelitzia Reginae. It has very large, blue/green, oblong, leathery, paddle- shaped leaves that resemble those of a banana plant. Even indoors a Bird of Paradise plant with its upright, stiff leaves can easily reach a height of 4ft-6ft (1.2m-1.8m). After 4 or 5 years and the plant matures, it may, on rare occasions, produce spectacular, exotic- looking, orange, red and blue flowers called “crane flowers” (because they resemble the head of a crane). In warm climates, an outdoor Bird of Paradise plant often flowers throughout the year producing 25-30 flower spikes that can last for weeks.", 
        light: "A Bird of Paradise plant requires very bright light. This plant can even be placed in the direct sun if you do it gradually and allow the leaves to slowly adapt. You may have to move a Bird of Paradise plant to different areas of your home as the seasons change in order to give it adequate light; placing it close to a south- facing window is always best. The leaves on a Bird of Paradise plant start to curl when it does not get enough light.", 
        water: "In the spring and summer keep the soil moist but never soggy. A Bird of Paradise plant needs less water in the fall and winter. Water from the bottom so the soil stays loose and remains well aerated. Water that has a high salt content burns the leaves.", 
        temperature: "An indoor Bird of Paradise plant grows best in temperatures between 65°-75°F (18.3°-23.9°C) during the spring, summer, and fall. In the winter, when the plant is \"resting,\" keep the temperature 10° cooler. Temperatures below 50°F (10.0°C) cause the leaves to curl and turn black.", 
        poisonous: "A Bird of Paradise plant has a #1 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Strelitzia-nicolai-14-2-768x821-2-142x152.jpg",
        isSeeded: true
    },
    {
        name: "Bird’s Nest Fern", 
        description: "This unusual  looking fern has long, erect, leathery, apple-green fronds that never split like those of a Kimberly Queen Fern or a Maidenhair Fern. The wide, rippled leaves of a Bird’s Nest Fern emerge from a central rosette or crown that looks like a fuzzy, brown funnel. The tongue- shaped fronds are fragile so try not to handle the young immature fronds and place the plant in an area where it won’t be bumped. Although in nature a Bird’s Nest Fern may have fronds as long as 5ft (1.5m), as a houseplant, the mature plant forms a compact, vase like shape with leaves not much larger than 24” (60cm) wide and 16” (40cm) tall.", 
        light: "A Bird’s Nest fern requires medium, indirect light. The distinctive bright green leaves become pale when exposed to too much light. Direct sun causes unsightly burn marks on the fronds of a Bird's Nest fern.", 
        water: "The soil of a Bird's Nest fern should be kept barely moist but never soggy at all times.", 
        temperature: "A Bird's Nest fern grows well when the temperatures is between 70°-90°F (21.1°-32.2°C) during the day and about 10° cooler at night. These slow growing ferns grow even more slowly when the temperature is not warm and the fronds are quickly damaged by hot or cold drafts. The base of the fronds of a Bird's Nest fern turn yellow when the temperature is too warm.", 
        poisonous: "Bird's Nest ferns are non- poisonous houseplants and are not toxic cats, dogs, and other pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Birds-Nest-Asplenium-nidus-10-1-248x235.jpg",
        isSeeded: true
    },
    {
        name: "Bleeding Heart VIne", 
        description: "A Bleeding Heart plant, native to tropical west Africa, is grown for its masses of beautiful bi-colored flowers. Each flower on a Bleeding Heart plant is made up of a corolla or inner group of bright red petals that emerge from a white calyx or outer part of the flower. The Bleeding Heart plant’s nickname, the “Bag Plant” refers to the shape of the outer white petals. When planted in a container, a Bleeding Heart Plant can grow up to 3 feet in length, outside in tropical areas, it often reaches 15 feet. This lovely plant has twining stems with large attractive dark green leaves. You can place a trellis in your container to help a Bleeding Heart plant grow tall or place it in a hanging basket.", 
        light: "A Bleeding Heart plant loves very bright light but no direct sun. The brighter the light, the more blossoms a Bleeding Heart Vine produces.", 
        water: "Keep the soil of a Bleeding Heart plant moist in the spring and summer but not soggy. When a Bleeding Heart plant is resting in the fall and winter, place it in a cool location and water infrequently. Never use ice cold water.", 
        temperature: "A Bleeding Heart does well in regular household temperatures in the spring and summer, but likes cooler temperatures between 55°-60°F (12.8°C-15.6°C) when it is resting in the late fall and winter.", 
        poisonous: "Bleeding Heart Plants are poisonous houseplants with a level #3 toxicity. Quite a bit of the plant needs to be eaten before there is a serious problem. However, small children, small dogs, and other pets should be kept away from this plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/800px-Bleeding_Heart_Vine_Clerodendrum_thomsoniae-256x144.jpg",
        isSeeded: true
    },
    {
        name: "Boston Fern", 
        description: "The wide- spreading Boston fern, with its long, arching fronds looks beautiful in hanging baskets. The fronds or leaves can be 2-3 feet long and 4-6 inches wide. Each frond has small leaflets (pinnae) on either side of a midrib. The leaflets have slightly serrated edges and a deltoid shape.", 
        light: "How much light does a Boston fern need: Bright, indirect light helps the plant grow well. Placing a Boston fern in front of a window with a northern exposure allows it to get sufficient light, but not so much that the leaves lose their vibrant green color. Keep the plant out of direct sun.", 
        water: "How much water for a Boston fern: Allow the top 30% of the soil to dry-out before watering. The fronds or leaves may turn a pale green which indicates the fern needs water. Yellow, limp, rotting fronds, especially in the center of a Boston fern, mean the plant is being over-watered. Crispy leaves indicate the fern needs more water. Using \"hard water\" causes unsightly white marks on the fronds. A Boston fern is more drought-resistant than most ferns, so when in doubt, don't water.", 
        temperature: "Best temperature for a Boston fern: Temperature should be 60°-70°F (15.6-21.1°C). Keep all varieties of indoor ferns away from heat sources such as fireplaces and heaters. If the temperature drops below 50°F (10°C) or goes above 90°F (32.2°C), it may damage the leaves.", 
        poisonous: "Is a Boston fern poisonous: Ferns are non- poisonous and are safe to have around small children, cats, dogs, and other pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Nephrolepis-exaltata-08-256x253-1-238x235.jpg",
        isSeeded: true
    },
    {
        name: "Bougainvillea Plant", 
        description: "A bougainvillea plant is native to the rain forests of Brazil, Peru, and southern Argentina. Bougainvillea plants, with their thorny, woody, tropical vines, produce beautiful clusters of red, pink, orange, white, yellow, purple, and magenta paper-like bracts. The colorful bracts surround the actual flower, which is usually small and white. Bougainvillea flowers appear on branches 18″-20″ long.", 
        light: "A Bougainvillea Plant needs bright full sun for at least 5-6 hours every day in order to bloom. Lack of light is the main reason why a Bougainvillea Plant doesn’t flower indoors. Keep a Bougainvillea These plants need at least 5 hours of sun to grow and flower indoors. Place as close to a south or west facing window as possible.", 
        water: "Bougainvillea is a drought tolerant plant that should be kept on the dry side. Allow the top 50% of the soil to dry out before watering. A bougainvillea may even wilt a little to let you know it needs water. When you do water a bougainvillea plant, water deeply and cover the entire surface of the soil. Good drainage is essential and a bougainvillea should never sit in water. Frequent light waterings encourages weak roots and discourages good flower color. During the winter, a bougainvillea requires even less water. If over-watered bougainvillea plants develop root rot, do not flower, and drop leaves. If the soil totally dries out, bracts and leaves fall off.", 
        temperature: "A bougainvillea does well in temperatures between 70°-85°F during the day and 60°-70°F at night. When resting during the winter, Bougainvilleas prefer temperatures between 50°-60°F.", 
        poisonous: "A Bougainvillea Plant is a very poisonous houseplant and has a #3 Toxicity level. The sap from a Bougainvillea can cause a rash that resembles poison ivy so be sure to wear gloves when pruning this plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Bougainvillea-Pink-10-1-256x178.jpg",
        isSeeded: true
    },
    {
        name: "Bromeliad Plant – Silver Vase", 
        description: "A Bromeliad plant (Aechmea fasciata), sometimes called a Silver Vase plant or Urn plant, is an easy care flowering plant native to Brazil. In nature, it is an epiphytic plant, which means it grows on other plants or trees. This bromeliad variety has thick, arching, gray-green leaves.These unique leaves are arranged in a circular fashion so that they form an upturned waxy cup in the center. This central cup, or reservoir collects the water and nutrients that the plant needs. After three or four years, as a Bromeliad fasciata matures, the plant produces a tall flower stalk with numerous pink bracts.", 
        light: "A Bromelia fasciata (Silvr Vase Plant) requires very bright light in order to flower. Once the pink bracts appear, move the plant to lower light to prolong the colorful bracts.", 
        water: "Keep the “cup” of this type of bromeliad filled with fresh water. Clean the cup weekly and replace the water with clean water to prevent diseases, gnats, and mosquitos. Dampen the soil and do not water again until the top 1/2” of soil has dried out. Never allow the soil to totally dry out and never use hard water. The lime in hard water disfigures the leaves. These plants have a very small root system so be careful not to over-water.", 
        temperature: "The colorful bracts last longer if you keep the temperature between 6o°-75° F (17°- 24° C). Aechmea fasciatas can survive colder temperatures than other bromeliads.", 
        poisonous: "Although considered a non- poisonous houseplant, a bromeliad contains substances that may cause skin irritations and contact dermatitis in some people and pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Aechmea-fasciata-158x152.jpg",
        isSeeded: true
    },
    {
        name: "Bromeliad Plant- Guzmania", 
        description: "If you’re tired of buying expensive cut flower arrangements for your dining room table or the reception desk in your office, think about using an easy care Bromeliad plant. There are over 2500 species of bromeliads that are native to North, Central and South America. My favorites varieties of bromeliads are: neoregelia, aechmea, and guzmania. A Bromeliad guzmania plant has long, thin, green. leathery leaves. Brightly colored flowers, really bracts, that can be red, yellow, orange, or even deep purple grow from the center of the plant.", 
        light: "A bromeliad plant is very adaptable to all types of light, and there is a bromeliad plant variety for every light condition. If your bromeliad plant has thin green leaves it can survive in low light. If a bromeliad plant has thick gray leaves, it needs medium light. The flowers (colorful “bracts”) of a bromeliad plant fade quickly and the leaves turn pale green when it's placed in very bright light. The leaves of a bromeliad plant get further apart and turn dark green when the plant needs more light.", 
        water: "Bromeliad plants are drought resistant succulents that like dry soil. A bromeliad plant has very small roots and over-watering is the number one reason bromeliad plants die. Some bromeliad plant varieties have \"tanks\" that like being filled with water; others varieties have fine hairs on their leaves that enjoy being misted.", 
        temperature: "Bromeliad plants are tropical plants that can survive in temperatures between 40F°-100°F (4.4C°-37.8°C) but prefer 70F°-75°F (21.1C- 23.9°C) during the day and ten degrees cooler at night. The blooms on a Bromeliad plant last longer when the temperature is cool.", 
        poisonous: "Bromeliads are non- poisonous houseplants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/guzmania-bromeliad-126x152.jpg",
        isSeeded: true
    },
    {
        name: "Cactus Plant", 
        description: "There are about 2000 varieties of cacti, and they come in a wide variety of shapes and sizes. About 50% of indoor cactus plants will  bloom is properly cared for. Many produce large, beautiful flowers that can be yellow, white, orange, pink, red, and even blue. Some get flowers that bloom only at night and last just one day while others have flowers that last for weeks. Indoors, a potted cactus plant needs to be three or four years old before it blooms, and flowers only develop on new growth. Keeping a cactus plant slightly rootbound helps it to flower.", 
        light: "A cactus plant likes as much bright, indirect light as you can provide. Introduce a cactus plant to direct, morning sunlight gradually to prevent sunburn. The ideal location for a small cactus plant is near a south-facing window.", 
        water: "A cactus plant requires more water in the spring, summer, and early fall when it is growing than in the winter. Allow the soil of a cactus plant to almost dry out before watering during the winter months. Over-watering is the main reason a cactus plant dies.", 
        temperature: "An indoor cactus plant likes temperatures between 60°-80°F (15.6°-26.7°C)", 
        poisonous: "Although a cactus plant is not a poisonous plant, getting a puncture wound from one of the sharp spines is very unpleasant and could be dangerous if not properly being taken care of.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Cereus-peruvianus-monstrosus-10-1-137x235.jpg",
        isSeeded: true
    },
    {
        name: "Caladium Plant", 
        description: "Caladiums are bulb plants grown for their large, paper-thin, arrow-shaped, colorful leaves that are often more spectacular than many flowers. The most popular indoor varieties are the “fancy-leafed” and “lance-leafed” types. The leaves, some as long as 24 inches, have marbled, spotted, or veined patterns in red, pink, white, and green.", 
        light: "A caladium plant requires very bright indirect light. Keep a caladium plant out of the direct sun to prevent leaf burn.", 
        water: "The soil of a caladium plant should be moist but never soggy during the growing season. As the leaves start to die in the early fall and the caladium plant goes into its resting/dormant period, gradually reduce the water to about once every 4-6 weeks.", 
        temperature: "A caladium plant likes warm temperatures between 70°-85°F (21.1°-29.4°C) with as little fluctuation in temperature as possible. During the five or so months when a caladium plant is dormant, the temperature should be cooler but never below 55°F (12.8°C).", 
        poisonous: "A Caladium plant is a very poisonous plant with a #3 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Caladium_bicolor_Florida_Sweetheart_Plant_2220px-171x152.jpg",
        isSeeded: true
    },
    {
        name: "Calathea Plant", 
        description: "The many different calathea varieties have leaves with a purple underside and vibrant, colorful patterns on the top side. Indoors, it is a low growing table plant or short bush that rarely gets taller than 10.” It can, however, spread out 24”-26” wide. The leaves of a calathea plant are much more spectacular than the purple, yellow, or white flowers that may develop during the summer.", 
        light: "How much light does a calathea plant need: A calathea plant likes bright indirect light; so placing it in front of an east, west, or north window is ideal. Too much direct sun burns the leaves and causes the beautiful leaf colors to fade.", 
        water: "How to water a calathea plant: Calathea plants are very sensitive to the water you use. Hard water, soft water, fluoridated water, or water of poor quality causes ugly, brown leaf burn. The best way to water is to use distilled water, rain water, or allow your tap water to sit out over night before using it. Keep the soil of a Calathea plant barely moist but never soggy. Allow the top 2-3” to dry out before watering and never allow the plant to sit in the excess water.", 
        temperature: "Calatheaplants like temperatures between 65°-80°F (18.3°-26.7°C), and do not like cold drafts or temperatures below 55°-60°F (12.8°-15.6°C). Hot temperatures cause the leaves of a Calathea plant to curl.", 
        poisonous: "A Calathea plant is a non- poisonous plant and safe to have around young children and your pets..", 
        image: "https://www.houseplant411.com/wp-content/uploads/Calathea-pictura-Argentea-08-1-176x152.jpg",
        isSeeded: true
    },
    {
        name: "Calathea Ornata", 
        description: "Indoors, this plant rarely grows larger than about 2ft. wide and 2ft. tall. The leaves of the calathea ornata are smaller than those of other calathea plants and have bright pink stripes. The pink coloring of the “roseolineata” variety is even more vibrant.", 
        light: "A calathea plant requires bright indirect light but no direct sun. Direct sun burns the leaves and causes the vibrant colors to fade.", 
        water: "The leaves of calathea plants are easily damaged by the quality of the water you use. Hard water or soft water, water with a high chemical content (fluorine, chlorine, or salt), water that has passed through a softener, or water of poor quality causes leaf tip burn. Use distilled water, rain water, or allow your tap water to sit out over night before using it. Calathea plants like moist but not soggy, soil at all times; never let the plant sit in water. Allow the top 2-3” of the soil to dry out before watering.", 
        temperature: "Calathea plants prefer temperatures between 65°-80°F (18.3°-27.7°C) , and don't do well in cold drafts or temperatures below 55°-60°F (12.8°-15.6°C). The leaves of a calathea plant curl when the temperature is too warm.", 
        poisonous: "Calathea are non- poisonous plants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Calathea-ornata-Rosea-lineata-06-3-246x235.jpg",
        isSeeded: true
    },
    {
        name: "Calla Lily Plant", 
        description: "A Calla Lily plant is grown from small rhizomes. A rhizome is a long, thick, modified stem that grows horizontally underground. It produces shoots that grow upwards and out of the soil and roots that grow downwards. Rhizomes, like Plant Bulbs, not only support the plant but store food and other nutrients. The large, tubular or funnel shaped Calla Lily flowers (spathes), grow atop tall, thick stems and have a finger-like yellow spadix in the center. The flower can be as large as 10″ (25.4cm) long. ", 
        light: "Calla Lilies require at least six hours a day of very bright indirect light. Avoid direct sun, especially during the middle of the day, since it will burn the leaves and flowers.", 
        water: "These plants like moist soil at all times. Calla Lilies are not drought resistant and should never be allowed to totally dry out. Keep the soil moist but not soggy. Never allow a Calla Lily to sit in water for more than 15 minutes.", 
        temperature: "Room temperatures should be between 50°-75°F (10°-24°C) for optimal growth. Keep Calla Lilies away from heating and air conditioning vents. If planted outdoors, be sure to dig up the Calla Lily bulbs and bring them inside before temperatures dip below freezing.", 
        poisonous: "A Calla Lily is a very poisonous houseplant with a #3 toxicity level. Please keep it away from small children and pets. This plant contains high levels of calcium oxalate and ingestion may cause severe burning and swelling of the mouth, throat, lips, and tongue. Stomach distress and diarrhea can also occur.", 
        image: "https://www.houseplant411.com/wp-content/uploads/640px-Pink_Calla_Lily_Zantedeschia_rehmannii_2000px.jpg",
        isSeeded: true
    },
    {
        name: "Cast Iron Plant", 
        description: "This is a rather plain plant with long, lancet shaped, pointed, course textured, leathery leaves that emerge directly from the soil. The leaves are over a foot long and 5” wide. Every individual leaf on the plant is grown on it own stem. You can separate a stem and its roots from the plant and propagate a new plant. When a cast iron plant is grown outdoors, it sometimes produces inconsequential purple and white flowers around the base of the plant. When grown as an indoor houseplant, it very rarely blooms.", 
        light: "How much light for a cast iron plant: A cast iron plant grows in any low-light to bright, filtered light area. When the light is too bright, the color in the leaves starts to fade and older leaves may turn brown.", 
        water: "How to water a cast iron plant: Allow the top 50% of the soil to dry out before watering. The lower the light the less often a cast Iion plant needs to be watered. In very low light, this plant may need water only every 2-3 weeks. over watering is the main reason a cast iron plant dies.", 
        temperature: "What is the best temperature for a cast iron plant: A cast iron plant does well in temperatures between 50°F-75°F (10°C-23.9°C). This plant can even survive in temperatures as low as 45°F(7.2°C).", 
        poisonous: "Is a cast iron plant poisonous: This is a non- poisonous plant and is not toxic to cats, dogs, or children.", 
        image:"https://www.houseplant411.com/wp-content/uploads/Aspidistra-elatior-10-2-300x247.jpg",
        isSeeded: true
    },
    {
        name: "Cat Palm", 
        description: "Although in its native environment a Cat Palm can grow as tall as 6ft (1.8m) and have a width up to 8ft (2.4m), indoors a Cat Palm is a slow growing, smaller plant eventually reaching a height of about 4-6ft (1.22m-1.8m). This compact, bushy, airy plant doesn't have a trunk like some other indoor palms. The bright green, pinnate (feather like) fronds grow in a clump-like fashion off thin shoots. The fronds are made up of leaflets that can be 1ft (30cm) long and 1” (2.5cm) wide.", 
        light: "How much light for a Cat Palm: Provide bright, indirect light but no direct sun. Direct sun, especially in the afternoon, burns the fronds.", 
        water: "How to water a Cat Palm: Water often enough to keep the barely soil moist, but not soggy, at all times. Never allow the soil to totally dry out. The fronds of a Cat Palm turn yellow when the soil is too dry. Salty water or water containing chemicals such as fluoride, chlorine cause leaf tip burn. Entire fronds turn brown when a Cat Palm is over watered.", 
        temperature: "Best temperature for a Cat Palm: These plants do well in 70°- 80°F (21.1°-26.7°C) during the day and no lower than 45°F(7.2°C) at night. Palms like to be in a warm environment, but too much dry heat causes leaf damage. Keep Cat Palms away from air conditioners, heating vents, fire places, and cold winter drafts,", 
        poisonous: "Cat Palms are non- poisonous and safe to have around cats, dogs, and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/il_1588xN.2927488134_2zsg-225x300.jpg",
        isSeeded: true
    },
    {
        name: "China Doll Plant", 
        description: "A China Doll, Radermachera sinica, plant is a very fast growing plant with lacy-looking, glossy, green foliage that is native to the subtropical mountain regions of southern China and Taiwan. China Doll plants appear very compact and sturdy when you first buy them because of the growth regulators given to them by growers. These growth regulators make normal sized leaves grow on short stems. As this regulator in the soil is used up, a China Doll plant starts growing in all directions just like the outdoor plant it really is. Instead of a dense plant with lots of leaves, it soon becomes open and feathery. To keep the plant thick, full, and bushy, prune frequently.", 
        light: "A China Doll Plant requires very bright light.", 
        water: "China Doll plants want to be kept on the dry side. Allow the top 50% of the soil to dry out before watering. The foliage may even turn a pale green when a China Doll plant needs water. Water around the entire soil surface so water reaches all of the roots.", 
        temperature: "A China Doll Plant does well in temperatures between 65°-75°F (18°-24°C). Keep China Doll Plants away from drafts and cold windowsills or the leaves fall off.", 
        poisonous: "A China Doll plant is a non- poisonous houseplant.", 
        image:"https://www.houseplant411.com/wp-content/uploads/Radermachera-sinica-061-copy-256x184.jpg",
        isSeeded: true
    },
    {
        name: "Chinese Evergreen Plant", 
        description: "There are many types of Chinese evergreen plants, all with shiny, oval, leathery leaves that have short stems. The leaves are usually 3″-5″ wide and up to12″ long. The original varieties had green and gray patterned leaves. The new hybrids have yellow, red, and pink in their leaves and require more light. A Chinese evergreen plant produces small, inconsequential flowers in the spring and summer that turn into red berries as the flowers fade.", 
        light: "Chinese Evergreen plants are probably the only indoor plant with large, colorful, variegated leaves that can live in low-light conditions. If placed in medium light, these plants grow more quickly.", 
        water: "Allow the top 25-30% of the soil to dry out before watering. When the soil of a Chinese Evergreen plant is too wet, the stems become mushy and die. When the soil gets too dry or too wet, yellow leaves develop. The lower the light, the less water the plant needs.", 
        temperature: "Warm temperatures between 70°F (21.1°C) and Temperatures below 50°F (10° C) can damage the leaves. Keep a Chinese Evergreen plant away from cold winter drafts and air conditioners.", 
        poisonous: "Chinese Evergreen contain calcium oxalate crystals and are poisonous plants with a #2 toxicity level. Adverse reactions include: skin irritations after contact with the sap, irritation of mouth, lips, throat, and tongue if leaves are eaten. Please keep this plant away from small children, cats, dogs, and other pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Aglaonema-Emerald-Beauty-08-2-300x248.jpg",
        isSeeded: true
    },
    {
        name: "Chinese Evergreen Plant - Amelia", 
        description: "A Chinese Evergreen plant is one of the easiest and best-looking houseplants to have in your home or office. Aglaonemas, the scientific name for a Chinese Evergreen, are a hardy hybrid from the aroid family and originally came from the subtropics of southeast Asia. Chinese Evergreen plants can be used as upright table plants or, as they get larger, bushy floor plants. All of the many Chinese Evergreen plant varieties have long shiny leathery leaves with unique patterns of green, gray, and cream.", 
        light: "Chinese Evergreen plants are one of the few houseplants with light green and gray in the leaves that can grow in low light. The newer varieties that have bright red, pink, yellow, and orange in the leaves require medium to bright light. Never place a Chinese Evergreen in the direct sun.", 
        water: "Allow the top 25-30% of the soil to dry out before watering. When the soil stays too wet for a long period of time, the stalks rot and die. If the soil gets too dry or too wet, yellow leaves develop.", 
        temperature: "Temperatures below 50°F (10°C) can damage the leaves of Chinese Evergreen houseplants. Keep these plants out of cold winter drafts and away from air conditioners.", 
        poisonous: "Chinese Evergreen plants are poisonous with a #2 toxicity level due to the calcium oxalate crystals in the plant. Adverse reactions after contact with the sap include: skin irritations, irritation of mouth, lips, throat, and tongue if the leaves are eaten.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Aglaonema-Amelia-14-300x265.jpg",
        isSeeded: true
    },
    {
        name: "Christmas Cactus Plant", 
        description: "A Christmas Cactus plant, Schlumbergera bridgesii is one of the most popular flowering houseplants sold during the Thanksgiving and Christmas holiday seasons. This cactus plant is totally different from the cactus we see growing in a hot, dry desert environment. A Christmas Cactus plant is a type of epiphyte in its native environment. Epiphytes are plants that grow on other plants, trees, and even rocks, in shady areas with high humidity.", 
        light: "How much light does a Christmas Cactus need: Place a Christmas cactus in bright indirect light but no direct sun. This plant can live in medium or low light, but flower buds may drop off or never form at all.", 
        water: "How to water a Christmas Cactus: Allow the top 50% of the soil to dry out before watering. Buds fall off when the plant is over watered or severely under watered. Root rot is another problem caused by giving the plant too much water. Reduce the amount of water once a Christmas Cactus has finished flowering, and start watering again normally once it starts to produce new leaves.", 
        temperature: "Best temperature for a Christmas Cactus: The right temperature is important if you want a Christmas cactus to produce flowers. To set the flower buds, the plant needs cool temperatures between 60°-65°F (16°-18°C) during the day and even cooler temperatures between 45°-55°F (7°-13°C) at night. Once buds have developed, provide warm temperatures between 70°F-75°F (21°C-24°C) during the day and 10° cooler temperatures at night. Cool temperatures help the flowers on a Christmas cactus to last longer.", 
        poisonous: "Christmas cactus are not toxic to pets (dogs and cats) or children", 
        image: "https://www.houseplant411.com/wp-content/uploads/christmas-cactus-lrg-225x300.jpg",
        isSeeded: true
    },
    {
        name: "Chrysanthemum Plant", 
        description: "A Chrysanthemum plant is really an outdoor plant that has become a popular floral gift and flowering plant for home and office. It is second only to the rose as the most popular cut flower in the world. Mums are members of the Asteraceae Family which includes over 20,000 flowering species. Chrysanthemums were brought to Japan by Buddhist Monks in 400 AD and have remained a very important part of Japanese culture to this day. Mums last 3-4 weeks indoors with very little care and in almost any environment before needing to be replaced. The blooms which come in various shapes and colors can be daisy-like, pom-poms, or buttons, and may be yellow, burgundy, pink, or white.", 
        light: "Place in medium light and away from heating vents, air conditioners, and direct sun to keep blooms lasting longer.", 
        water: "Allow the top few inches of soil to dry out slightly before you water. Green leaves become soft and droopy when the soil is dry.", 
        temperature: "Cool temperatures help the blooms on a Chrysanthemum last longer and high temperatures cause the blooms to quickly fade. 70°F (21°C) during the day and not below 60° F (15.5°C) at night are the best temperatures for a Mum plant.", 
        poisonous: "Chrysanthemums are slightly poisonous with a #1 toxicity level. They are toxic to dogs, cats, and horses. Mums contain Sesquiterpene, lactones, pyrethrins and other potential irritants that can cause vomiting, diarrhea, hypersalivation, incoordination, and skin problems.", 
        image: "https://www.houseplant411.com/wp-content/uploads/yellow-daisy-chrysanthemum-plant-5d667ff70e259.425.jpg-300x300.png",
        isSeeded: true
    },
    {
        name: "Cineraria Plant", 
        description: "Cineraria plants are beautiful small flowering plants that are available for purchase during the late winter and early spring. The compact Cineraria plant has tight bunches of petite daisy like flowers surrounded by large dark green leaves. Cineraria flowers can be red, white, blue, or purple. Each Cineraria flower has an “eye” in the middle surrounded by a small white ring. Cineraria plants reach a maximum height of 15-20 inches. Cineraria plants are very fragile perennial plants so they are mostly used as outdoor annuals or indoor gift plants that bloom for only about a month. Once the flowers of a Cineraria plant die, it's time to throw it out or plant it outside", 
        light: "Cineraria Plants need very bright indirect light but cool temperatures. Place a Cineraria Plant near a north or east-facing window. Light from south & west-facing windows is too hot and causes the flowers on a Cineraria Plant to fade quickly.", 
        water: "Keep a Cineraria Plant moist but never soggy. Always allow the top inch or two of soil in a Cineraria Plantto dry out before watering. Cineraria Plants can sit in the excess water for 15 minutes then be sure to empty the saucer. The more blooms a Cineraria Plant has, the more water it needs.", 
        temperature: "Feed a Cineraria Plant in April with a water-soluble plant food high in phosphorous at 1/2 the recommended strength.", 
        poisonous: "A Cineraria is a poisonous house plant with a #2 toxicity level and should be kept away from small children and pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/oldimages/Plant_46/634643886094413645.jpg",
        isSeeded: true
    },
    {
        name: "Clivia Plant", 
        description: "Clivia plants, close relatives of Amaryllis plants, are easy- care almost indestructible flowering plants from South Africa. Named after a Duchess belonging to the Clive family, Clivias have long, thick, dark-green arching leaves growing out of a large plant bulb. The trumpet or lily- shaped flowers are 2″-3″ in size and can be orange, orange/red, yellow, or cream colored. Clivia flowers appear as a dense cluster of 15-20 small blooms at the end of a long stem. Clivia plants bloom for about 4 weeks during the late spring and early summer when the weather is warm and the days are long.", 
        light: "A Clivia plant requires bright, indirect light but no direct sun. Direct sun scorches the leaves and ruins the beautiful flowers. During the summer, a Clivia loves to go outside as long as you keep it in the shade.", 
        water: "During the spring and summer, water well and then allow the top 50% of the soil to dry out before watering again. Reduce your water in the fall; and allow the soil dry out before you water during the winter. Pale green or orange lesions on the leaves indicate you are over-watering.", 
        temperature: "A Clivia Plant prefers temperatures between 65°-70° F (18.3°-21.1° C) during the spring summer, and early fall. From November to February, when your Clivia plant is 'resting' the temperature should be 50°-55° F (10°-12.8°C). A Clivia plant does not do well in temperatures below 50° F (10°C).", 
        poisonous: "A Clivia plant is a very poisonous houseplant with a #3 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/634643392675473116-copy-300x225.jpg",
        isSeeded: true
    },
    {
        name: "Coffee Plant", 
        description: "A coffee plant has shiny, dark green, leaves with ruffled edges. Although coffee plants can grow as tall as 15ft. in nature, when grown indoors, with proper pruning, it is a very attractive, compact houseplant that rarely grows more than 4ft tall. An indoor coffee plant it produces small white flowers in the spring. After the flowers fade, the plant gets bright red berries that are about 1/2″ in size. These berries turn into blackish/green pods. The pods or “fruits” each contain two seeds which eventually become the beans we use to brew our coffee.", 
        light: "How much light for a coffee plant: A coffee plant needs bright, indirect light from an east or west facing window. Avoid putting the plant in the direct sun.", 
        water: "How to water a coffee plant: Water a coffee plant when the top 1“- 2“of soil has dried out. These plants are not drought resistant and can suffer permanent damage if the soil totally dries out. Leaves fall off if the plant is over or under watered.", 
        temperature: "Besttemperature for a coffee plant: These plants prefer constant temperatures between 60°-75° F (18.3°-23.9°C), and can suffer damage if the temperature goes below 42°F (5.6°C) or above 78°F (25.6°C).", 
        poisonous: "All parts of a coffee plant are toxic to dogs, cats, and small children. Ingesting any part of the plant can cause hyper-activity, diarrhea, and vomiting.", 
        image: "https://www.houseplant411.com/wp-content/uploads/1280px-Coffee_Flowers-300x225.jpg",
        isSeeded: true
    },
    {
        name: "Coleus Plant", 
        description: "The bold colors and patterns on the leaves can be a mixture of lavender, cream, pink, maroon, yellow, red, bronze, and various shades of green. The color patterns can be marbled, stripped, or dappled. The leaves range in size from 1 to 6 inches (2.5-15 cm) and are usually oval with serrated edges; though some like the Kiwi Fern Coleus have long, narrow frilly leaves.", 
        light: "A Coleus plant needs very bright, indirect light to grow well. These plants can even gradually acclimate to a few hours of direct sun. Fluorescent grow lights help make the leaf colors of a coleus plant even more spectacular.", 
        water: "A coleus plant is a fast- growing plant and the soil dries out more quickly than with many other indoor plants. Always allow the top few inches of soil to dry out before watering. Frequent wilting due to under-watering causes the leaves to develop crispy edges, dull colors, and brown spots. Over-watering is more serious and results in root rot.", 
        temperature: "A coleus plant likes warm temperatures between 70°-85°F (21.1°-29.4°C) though it can survive in temperatures as low as 55°F (12°C).", 
        poisonous: "Although a coleus plant is listed as a non- poisonous plant, it is not considered totally safe. I would err on the side of caution andkeep a coleus away from pets and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/7389de6b288e1a7ff5633b1b19e44d1e-152x152.jpg",
        isSeeded: true
    },
    {
        name: "Croton Plant", 
        description: "A croton plant (Codiaeum variegatum pictum) was originally an outdoor, decorative bush growing in tropical regions where temperatures never went below 50°F (1o°C).  Croton plants come in 100 different varieties and have become a very popular houseplant within the last 15-20 years. ", 
        light: "How much light for a croton plant: Very bright, indirect light is necessary for the leaves to stay colorful. When there is not enough light, new leaves are green and not predominantly yellow, red, or orange. Too much direct sun causes phototoridation, a condition that causes gray and dull looking leaves.", 
        water: "Allow the top 25%-30% of the soil to dry out before watering. The hard, leathery leaves become soft and flexible when a croton needs water. When the plant is over watered or severely under watered, leaves drop off.", 
        temperature: "Warm temperatures between 60°-80°F (15.6°-26.7°C) are best for a croton. If the temperature drops below 50°F (10°C) leaves may drop off.", 
        poisonous: "Crotons are very poisonous plants with a #3 toxicity level. They are toxic to small children, cats, dogs, and other pets so please keep them well out of reach.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Codiaeum-petra-08-1-256x179.jpg",
        isSeeded: true
    },
    {
        name: "Crown of Thorns Plant", 
        description: "As a houseplant, a Crown of Thorns plant can reach a height of 3ft (.9m) and a width of 2ft.(.6m). Like the outdoor variety, these plants have clusters of bright green, tear shaped leaves. The fleshy, dark brown stems are covered in sharp 1/2” thorns and a sticky substance that gets on your hands when you touch the plant.", 
        light: "A Crown of Thorns plant needs as much bright, indirect light as you can provide,. Avoid placing the plant in direct sun which can damage the leaves.", 
        water: "During the late spring and into early fall, water a Crown of Thorns plant when the top 50% of the soil has dried out. Reduce the amount of water during the winter when a Crown of Thorns plant is not producing new leaves and flowers. Never allow the soil to totally dry out, or a Crown of Thorns plant may develop severe root damage.", 
        temperature: "A Crown of Thorns plant likes to be warm and does well in temperatures between 55° F (12.8C) - 95°F (35°C). A Crown of Thorns plant may lose leaves if the temperature goes below 55°F (12.8°C).", 
        poisonous: "A Crown of Thorns is a poisonous houseplant with a level #2 toxicity. Broken or damaged leaves and stems ooze a milky latex substance that may cause blistering and pain if it gets on any open cuts. A Crown of Thorns plant is very toxic to small children, cats, dogs , and other pets. If consumed, it causes severe mouth irritation, gastro- intestinal problems, and even hemorrhages can occur.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Crown-Of-Thorns-Plant-180x100.jpg",
        isSeeded: true
    },
    {
        name: "Ctenanthe Plant", 
        description: "The Ctenanthe plant, native to tropical Brazil.  These evergreen perennials are grown primarily for the beauty of their large, oval, colorfully, patterned  leaves.", 
        light: "Ctenanthes like bright indirect light. If there is insufficient light, new leaves appear solid green rather than patterned with attractive colors. If there is too much light, the colors in the leaves fade..", 
        water: "Keep the soil evenly moist but never soggy. Ctenanthes do not like to dry out, and do not like cold or hard water.", 
        temperature: "Ctenanthes like warm consistent temperatures and will not tolerate temperatures below 60°F (15°C).", 
        poisonous: "A Ctenanthe plant is slightly poisonous, although it is often listed as non-toxic. It may cause individual allergic reactions. The ASPCA states that it is not poisonous to dogs and cats.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ctenanthe-lubbersiana-06-1-246x235.jpg",
        isSeeded: true
    },
    {
        name: "Cyclamen Plant", 
        description: "A cyclamen is a small, beautiful plant that flowers during the winter. This popular plant that grows well both indoors and outdoors, is native to North Africa, Europe, and the Mediterranean Basin.  To ensure that your new cyclamen blooms for several months, purchase the plant in September, October, or November, and select a plant that is full of buds. At home, place it in a cool, bright area away from the direct sun, and you’ll be able to enjoy the large, colorful flowers all winter.", 
        light: "During the fall and winter, indoor cyclamen plants need bright, indirect light. When your cyclamen become dormant sometime in the spring, put it in a darker, cooler area until it starts to produce new leaves in the fall.", 
        water: "People who have problems with cyclamen plants usually make the mistake of watering them from the top rather than the bottom. Also, never water the very center of the plant. Allow the top 50% of the soil to dry out before watering. When your Cyclamen starts to droop a little, place it in a deep saucer of water for about 10 minutes, filling the saucer as needed. Allow the excess water in the soil to drain before returning the plant to its decorative container. Cyclamen leaves do not like to be wet, so try to keep them dry at all times.", 
        temperature: "Indoors cylamen grow faster and bloom more often in cool temperatures between 55°-65°F (12.8°-18.3°C). When cyclamen plants are dormant, during the spring and summer, place them in an area where the temperature is never below 45°F (7.2°C) or above 60° F (15.5°C). Avoid placing them in drafts or in front of heaters.", 
        poisonous: "Cyclamen are very poisonous plants with a #3 toxicity level. These plants contain saponins and all parts of the plant, especially the tubers and roots, can cause severe reactions if ingested. Cyclamen are especially harmful to dogs and cats.", 
        image: "https://www.houseplant411.com/wp-content/uploads/cyclamen-copy-153x204.jpg",
        isSeeded: true
    },
    {
        name: "Desert Rose Plant", 
        description: "A Desert Rose plant, Adenium Obesum, is a lovely, unique – looking, slow growing succulent plant native to the semi-arid regions of Arabia, the eastern and western parts of Africa, and Madagascar. It’s quite the conversation piece, especially when in bloom, and is very easy to care for. A Desert Rose plant is in the Adenium genus and a member of the Dogbane family, other plants in this family include Vinca (periwinkle), Oleander, and Plumeria.", 
        light: "A Desert Rose plant requires very bright, indirect light, especially if you want it to flower.", 
        water: "The fat, bulbous base (caudex) of a Desert Rose stores water, so always allow the soil to practically dry out before watering. If the soil gets excessively dry, the plant becomes dormant; but once you water, leaves quickly start to grow again. The thick base, stems, and roots of a Desert Rose plant become soft and wrinkled when the soil is very dry or when the plant has been over watered and the roots have started to die.", 
        temperature: "A Desert Rose likes very warm temperatures. Keep the room above 60°F (15.6°C) and avoid placing the plant near air conditioners or cold drafts.", 
        poisonous: "A Desert Rose plant is a very poisonous houseplant with a #2 Toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Anna-Mirizio-153x204.jpg",
        isSeeded: true
    },
    {
        name: "Dieffenbachia Plant", 
        description: "A dieffenbachia is a tropical plant originally found growing in the West Indies, Mexico, all the way south to Argentina. A dieffenbachia plant, or “Dumb Cane” plant as it is sometimes called, is a member of the Araceae family and a relative of the Anthurium, Caladium, Calla Lily, and Monstera Deliciosa. All plants in the Araceae family contain calcium oxalate crystals and are very poisonous. The sap from these plants is a severe irritant. A dieffenbachia got its nickname “Dumb Cane plant” because the toxic effect of the oxalates can cause a temporary inability to speak.", 
        light: "How much light for a dieffenbachia plant: A dieffenbachia plant requires medium to bright, indirect light; but no direct sun. Direct sun burns the leaves and even too much bright light causes the vibrant leaf color to fade. When an indoor dieffenbachia does not get enough light, the new leaves are small and far apart on the stem.", 
        water: "How to water a dieffenbachia plant: Water well and then allow the top 2\"-3\" of the soil to dry out before watering again. A dieffenbachia plant does best when watered on a regular schedule. If the soil gets too dry, the bottom leaves may turn yellow. If a dieffenbachia plant is over- watered, the plant stems get soft and mushy and the plant starts to die.", 
        temperature: "Best temperature for a dieffenbachia plant: A dieffenbachia plant prefer temperatures above 60°F (15.6°C). The lower leaves on the plant turn yellow when exposed to cold drafts from doors, windows, or air conditioners.", 
        poisonous: "A dieffenbachia plant is extremely poisonous with a #4 toxicity level and very toxic to cats, dogs, and small children. If the sap from a dieffenbachia gets on your skin, wash it off immediately. Seek medical advice if a child or pet ingests any part of a dieffenbachia plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dieffenbachia-amoena-Tropic-Snow-10-3-153x181.jpg",
        isSeeded: true
    },
    {
        name: "Donkey’s Tail Plant", 
        description: "A Donkey’s Tail plant (Sedum Morganianum), sometimes called a Burro’s Tail Sedum, Donkey Tail Cactus , or Lamb’s Tail, is an easy-care succulent plant native to southern Mexico and Honduras. It is part of the Crassulaceae (Stonecrop) family and a relative of the jade plant and the kalanchoe. A Donkey’s Tail plant is very fragile and the small, swollen leaves easily fall off if the plant is disturbed. The good news is that these leaves root quickly and easily to produce new plants.", 
        light: "A Donkey’s Tail plant needs at least four hours of sun or very bright light every day. In low light, the new growth is small, pale, and weak.", 
        water: "Succulent Plants need to dry out before you water, and a Donkey’s Tail plant is no exception. Water well and then don't water again until the soil has almost completely dried out. Over-watering a Donkey's Tail plant or any succulent plant is the easiest way to kill it. The leaves of the plant become flat and even a little wrinkled when it needs water. Keep the soil even drier in the winter when the plant is dormant.", 
        temperature: "A Donkey's Tail plant grows best when the temperature is between 65°-75°F (18.3°-23.9°C). During the winter, when the plant is dormant, lower the temperature by 10°, keep the plant out of drafts, and away from cold doors & windows.", 
        poisonous: "Donkey's Tail plant is the common name for Sedum Morganianum and is a non- poisonous houseplant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Donkeys-Tail-Plant-04-180x152.jpg",
        isSeeded: true
    },
    {
        name: "Dracaena Compacta", 
        description: "The Dracaena compacta plant, a compact, slow growing member of the Dracaena family, is native to South East Africa. It is often referred to as Dracaena fragrans or Dracaena deremensis.  The Dracaena Compacta has a thick green stems with several clumps of short, dark green leaves 2″-4″ in length on each stem. This plant is beautiful addition to homes or offices, but it’s a bit more difficult and more expensive than other dracaenas.", 
        light: "A Dracaena compacta plant grows best in medium light. In low light area they grow very slowly or not at all, tend to lose bottom leaves more quickly, and are easily over-watered. Rotate dracaenas weekly so that they don’t grow toward the light, become one sided, and lose their beautiful shape..", 
        water: "Like other indoor houseplants, a dracaena compacta uses less water in low light than in brighter light. Keep the plant on the dry side to prevent root rot and Leaf Spot Disease. Allow the top ¾ of the soil to dry out before watering. In low light this could be two weeks or more. Compacta plants do better when watered on a regular schedule. Dark brown tips usually indicate the following: too much chlorine or fluoride in the water, water is too salty (never use water that has passed through a softener), or too much plant food. Muddy brown leaf tips on new growth means the plant needs more water.", 
        temperature: "Dracaena compacta plants like warm room temperatures 60-75°F (16-24°C). Cold winter drafts and heaters can damage the leaves.", 
        poisonous: "There is a lot of disagreement as to whether Dracaenas are poisonous houseplants. I give them a #1 toxicity level. Dracaenas may cause intestinal issues if eaten by a small child, dog, or cat.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-deremensis-Janet-Craig-Compacta-10-BU-1-133x152.jpg",
        isSeeded: true
    },
    {
        name: "Dracaena Corn Plant", 
        description: "The Dracaena fragrans ‘Massangeana’, or Dracaena Corn plant as it is usually called, is native to the tropical areas of Africa and a close relative of the Dracaena Warnekii (Striped Dracaena), Dracaena Janet Craig, Dracaena marginata, and Dracaena Compacta. It got its nickname “Corn Plant” dracaena, because the main, tall, unbranched stem of the plant resembles the main stalk of a corn plant.", 
        light: "A dracaena massangeana, also called a dracaena corn plant, can tolerate low light but grows faster and produces larger leaves in medium to bright indirect light. Unlike the low-light dracaena janet craig with its dark green leaves, the corn plant dracaena requires better light to maintain the pale yellow center stripe in the leaves.", 
        water: "Like all dracaenas, allow the top 50-75% of the soil to dry out before watering. A corn plant dracaena survives under-watering, but quickly dies from over-watering. If your water contains fluoride or chlorine, allow it to sit out over-night before using it so the chemicals can dissipate. High concentrations of fluoride damage the leaves and cause brown leaf tips. Never use water that has passed through a softener; it is too salty and causes leaf damage.", 
        temperature: "Corn plant dracaenas do well in temperatures between 65°-80°F (18°-26.5°C).", 
        poisonous: "Corn plant dracaenas are slightly poisonous with a #1 toxicity leval.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-fragrans-Massangeana-10-432-2-126x235.jpg",
        isSeeded: true
    },
    {
        name: "Dracaena Janet Craig", 
        description: "Dracaena janet craig plants have sword- shaped, leathery, shiny dark green leaves that can be as large as 3” wide and 10”- 20” long. When small, a Dracaena janet craig looks good sitting on a table, desk, or counter; later, as the plant matures, it can be used as a stately floor plant, either in bush or tree form. When purchasing a large Dracaena janet craig, look for one that has at least 3-5 stalks at different heights; this helps ensure that the plant will stay bushy and full as it matures. If growing conditions are ideal, a Dracaena janet craig may produce tall, 10″-12″ (25.4cm- 30.48cm) stalks with large, heavily scented, white flowers. Although this is fun to see, the flowers produce a messy, sticky sap that gets on the floor, carpets, and nearby furniture. The flowers also slow down new leaf development and can even distort the attractive shape of the plant. I like to cut them off as soon as they start to appear.", 
        light: "A Dracaena janet craig will grow slowly in low light, but grows much faster in medium to bright indirect light. When the light is extremely low, new leaves are smaller and narrower. Placing a Dracaena janet craig in the direct sun for even a few minutes, burns the leaves.", 
        water: "When in doubt, do not water a Dracaena janet craig! Allow the top 50% of the soil to dry out before watering. The lower the light, the less often a dracaena needs water. Fluoride, chlorine, or salt in the water causes brown leaf tips and yellow spots on the leaves.", 
        temperature: "A Dracaena janet craig prefers temperatures above 55°F (12.8°C). Cold winter drafts and blowing heaters damage the leaves.", 
        poisonous: "A Dracaena janet craig is sometimes listed as a non- poisonous houseplant; however, some pets, especially cats and dogs, have experienced problems after eating the leaves. My advice, keep all dracaenas away from your pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-deremensis-Janet-Craig-14-BU-1-230x300-2.jpg",
        isSeeded: true
    },
    {
        name: "Dracaena Lemon Lime", 
        description: "The dracaena lemon lime plant, native to Africa, is a very close relative of the dracaena warneki (green and white striped leaves) and the dracaena janet craig (solid green leaves). The dracaena lemon lime has 12”-24” long sword shaped leaves with bright green and yellow stripes. Like other dracaena plants, the leaves are arranged in a rosette and grow off a very thick stem. A dracaena lemon lime is very easy to care for and can easily reach a height of 5ft-7ft. indoors. It also makes a beautiful bush. Because of the bright colors in the leaves, the dracaena lemon lime needs a little more light than other dracaenas. Its a great plant to brighten up any room in your house.", 
        light: "Although a Dracaena lemon lime Plant can adapt to low light, it does better in medium to indirect bright light. Too much direct bright light causes the color in the leaves to fade. Too little light and the new leaves are narrower than the older leaves.", 
        water: "Allow the top 50% of the soil to dry out before watering. Dracaenas are very sensitive to chemicals in the water. If your household water contains a lot of fluorine or chlorine, allow it to sit out over night before using it. Never use water that has passed through a water softener, it is too salty.", 
        temperature: "Provide warm temperatures between 70°-75°F (21.1°-23.9°C).", 
        poisonous: "The ASPCA considers a dracaena lemon lime a poisonous plant to dogs and cats", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-deremensis-Gold-Star-10-BU-2.jpg",
        isSeeded: true
    },
    {
        name: "Dracaena Marginata", 
        description: "A Dracaena marginata is a  stately plant with multiple, snake-like canes, and hundreds of long, thin, leaves. The canes are often thick, twisted, and woody, making them desirable very three very unique appearance. The original variety has narrow, arching, dark green leaves trimmed in deep red. The newer varieties have much more colorful leaves.", 
        light: "Dracaena marginata plants prefer medium light, but survive in low light situations. Lower light slows down the growth rate and reduces the size of new leaves. Direct sun burns the leaves.", 
        water: "Over-watering causes root-rot and is the main reason a Dracaena marginata dies. Water well and don't water again until the top 50% of the soil is dry. In low light, this could take up to three weeks. Brown tips on the leaves indicate over-watering or too much fluoride or salt in the water. Never use water that has passed through a softener, it is too salty. If your household water has a lot of chemicals, allow it to sit out overnight before using it or use rain water or distilled water. This is a stalk plant, so it is common for the lower leaves to turn yellow and fall off if the plant is getting new leaves at the top. Numerous yellow leaves means the plant needs more water.", 
        temperature: "These plants prefer temperatures between 70°-80°F (21.1°- 26.7°C).", 
        poisonous: "A dracaena marginata is mildly poisonous to humans, but they are extremely toxic to dogs and cats with a #2 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-marginata-10-ML-3-215x300.jpg",
        isSeeded: true
    },
    {
        name: "Dracaena Reflexa", 
        description: "A dracaena reflexa, native to Madigascar, Mauritius, and other islands of the Indian Ocean, is another member of the huge dracaena family. The regular dracaena reflexa, or pleomele, has dark green leaves. The dracaena reflexa, Song of India, has yellow stripes on the leaves, while the dracaena reflexa, Song of Jamaica, has off white stripes on the leaves. All varieties have short, narrow, pointed leaves that are spirally arranged on the stem and tufted at the ends of branches. This is is a slow growing, easy-care plant that can be used as a table plant, bush, or short tree.", 
        light: "A dracaena reflexa with solid dark green leaves does well in medium light. The Song of India and Song of Jamaica, with yellow and white stripes in their leaves, need bright indirect light. Direct sun burns the leaves of all varieties of dracaena reflexa.", 
        water: "Like all dracaenas, the reflexa likes to be kept on the dry side. Allow the top 50% of the soil to dry out before watering. I always suggest keeping the plant a little root bound in a small pot so the soil can dry out quickly and the roots do not stay wet too long. When you do water, water well enough so that it comes out the drip holes in the bottom of the pot. Dracaenas are very sensitive to fluorine in the water. If you water has a lot of chemicals in it, allow the water to sit out for 24 hours before using it; alternatively you can use rain water or distilled water.", 
        temperature: "Basic household temperatures between 65°-85° are ideal.", 
        poisonous: "A dracaena reflexa is considered non-toxic to humans but cases have been reported of cats suffering tremors after nibbling on a reflexa.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-reflexa-14-ML-232x300.jpg",
        isSeeded: true
    },
    {
        name: "Dracaena Reflexa Song of India", 
        description: "This hardy, decorative houseplant, formerly called a Pleomele reflexa, is native to Madigascar, Mauritius, and other islands of the Indian Ocean.  The Dracaena reflexa, Song of India, has yellow stripes on short, narrow, pointed green leaves that are spirally arranged on the stem and tufted at the branch ends. The usual Dracaena reflexa has solid green leaves. This is a slow growing plant that can be used as a table plant, bush, or short tree.", 
        light: "A Dracaena reflexa likes bright indirect light but no direct sun", 
        water: "Like all dracaenas, the reflexa likes to be kept on the dry side. Allow the top 50% of the soil to dry out before watering. Over- watering, resulting in root rot, is the main reason this plant dies.", 
        temperature: "65°F (18.3°C) - 85°F (29.4°C). Temperatures below 55°F (12.8°C) can damage the leaves. Avoid cold drafts and heaters.", 
        poisonous: "A Dracaena reflexa is usually listed as a non-toxic plant, but cases have been reported of cats suffering tremors after eating some of the leaves.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-reflexa-Song-of-India-08-2-283x300.jpg",
        isSeeded: true
    },
    {
        name: "Dracaena warnekii", 
        description: "Dracaena warnekii, like all dracaenas, are hardy, slow-growing plants that thrive on neglect. Sometimes referred to as a “striped dracaena”, the warnekii has long, pointed, narrow green and white striped leaves and can be used as a table plant, bushy floor plant, or tall cane plant for home and office. The “jumbo” variety has wider leaves and is a more compact plant. The “lemon lime” cultivar has yellow and green stripes. A dracaena warnekii is one of the few colorful indoor plants that can survive in low light conditions. NASA recommends the dracaena warnekii as a clean air plant, one of the top ten plants for removing formaldehyde from the air.", 
        light: "A Dracaena warnekii survives in low light, but grows faster and fuller in medium light. In low light, the new leaves may be smaller and narrower. Direct sun burns the leaves.", 
        water: "All dracaena plants like to be kept on the dry side. Water well and then allow the top 50% of the soil to dry out before watering again. Never allow the plant to sit in water. The lower the light level the less water a dracaena warnekii needs. All types of dracaenas are very sensitive to fluorine and chlorine. If your household water is heavily chlorinated or contains a great deal of fluoride, allow it to sit out over night before using it; use water from an outside hose; use rain water or distilled water. Never use water that has passed through a water softener. It is too salty and can damage the leaves.", 
        temperature: "Usual household temperatures between 65°- 80°F (18.3°-26.7°C). are fine for a Dracaena Warnekii. Keep the leaves of striped dracaenas away from cold windows, air conditioners, and heaters.", 
        poisonous: "Dracaena warnekii plants have a level #1 toxicity and are considered slightly poisonous especially to dogs and cats.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-deremensis-Warneckei-14-BU-2-300x209.jpg",
        isSeeded: true
    },
    {
        name: "Easter Lily Plant", 
        description: "Easter Lily is an Asian species of flowering bulb that is found in grasslands and slopes in the rich soils and moist shade of woodlands.  It can be challenging to grow.  This is a stoloniferous lily with large large fragrant white flowers that appear in the late summer to early fall. ", 
        light: "Easter Lily Plants need bright indirect light but no direct sun.", 
        water: "Water an Easter Lily Plant when the first inch or two of soil is dry. Be careful not to over water or to allow the Easter Lily Plant to sit in water. Many Easter Lily Plants come in a decorative wrap. Remove this wrap when watering so excess water can drain freely from the Easter Lily plant and allow the plant to air out before replacing the wrap. When buying an Easter Lily Plant, avoid plants that have soggy soil, since may indicate root rot.", 
        temperature: "Easter Lilies prefer moderate to cool temperatures, 60-75 during the day and 55-65 at night. Like many other flowering plants, they do not do well in drafts or placed near fireplaces, heating vents, or appliances that give off heat.", 
        poisonous: "All Lily Plants are poisonous, especially for cats. Cats become ill if they ingest any part of an Easter Lily.", 
        image: "https://www.houseplant411.com/wp-content/uploads/oldimages/Plant_232/634680224411543876-300x300.png",
        isSeeded: true
    },
    {
        name: "Echeveria Plant", 
        description: "The plump, succulent leaves of an echeveria grow in a rosette and are usually pointed with smooth edges, though there are some varieties with a different leaf shape. A powdery wax called farina covers the leaves and protects them from getting burned when the plant is placed in direct sun. The most common echeveria plants have grayish-green or bluish-gray leaves. When placed in very bright light, the 1″-3″ long leaves can turn purple, dark purple, lavender, maroon, white with red edges, green with red edges, or pinkish lavender with pink edges. The flowers of an echeveria plant are usually red, yellow, peach, or orange and grow atop a tall stem. They usually last about two weeks. Intense light and proper temperature help an echeveria flower.", 
        light: "How much light for an echeveria: An echeveria plant likes very bright indirect light and some direct morning sun.", 
        water: "How to water an echeveria: In the spring and summer, keep the soil of an echeveria plant barely moist, always erring on the dry side. Starting in late fall and throughout the winter, allow the soil to totally dry out before watering. The leaves become soft and even wrinkle a bit when the plant needs water. Water the soil and avoid getting water on the plant itself. Over watering is the main reason an echeveria plant dies.", 
        temperature: "Best temperature for an echeveria: Provide warm temperatures between 65°-80°F (18-27°C). The temperature should be 10°-15° cooler at night. During the winter, when the plant is resting, the temperature should be 10° cooler. An echeveria is not a cold hardy plant. If you put the plant outside for the summer, be sure to bring it indoors before the temperatures drops below 50°F (10°C).", 
        poisonous: "Although an echeveria is a non- poisonous plant and safe to have around cats, dogs, and small children, the sharp tips of the plant leaves can cause a painful sore.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Black-Prince-300x225.jpg",
        isSeeded: true
    },
    {
        name: "Emerald Gem Plant", 
        description: "An Emerald Gem plant or Homalomena, native to tropical Asia and South America, is an upright plant with dark green, waxy, spade-shaped leaves. Since these plants are usually about 12″-30″ tall, it makes them ideal for areas with height restrictions. Although an Emerald Gem plant is a relative of the easy-care philodendron, it is a bit more finicky and requires more attention. However, if you are tired of the same old houseplants, an Emerald Gem plant makes a nice addition to your plant collection.", 
        light: "An Emerald Gem plant requires medium indirect light but grows even better in bright indirect light. Homalomenas, as they are also called, can survive in low light but become thin and spindly. The bottom leaves of an Emerald Gem plant turn yellow and fall off when there is not enough light.", 
        water: "Watering is the most difficult part of caring for an Emerald Gem plant. When the plant is either over or under watered the bottom leaves may fall off. Over-watering is also the main reason an Emerald Gem plant gets yellow leaves. Always allow the top 50% of the soil dry out before watering. When you do water, water well enough so that it drains out the drip holes in the bottom of the pot. An Emerald Gem plant doesn't like anything cold, so use warm water and never dump extra ice cubes into the soil.", 
        temperature: "Emerald Gem plants like warm household temperatures between 65°-80°F ( 18.3°-26.7°C). Keep these plants away from air conditioners and cold drafts.", 
        poisonous: "An Emerald Gem plant or Homalomena is a slightly poisonous houseplant with a level #1 toxicity.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Homalomena-Emerald-Gem-10-300x258.jpg",
        isSeeded: true
    },
    {
        name: "Emerald Gem Plant", 
        description: "An Emerald Gem plant or Homalomena, native to tropical Asia and South America, is an upright plant with dark green, waxy, spade-shaped leaves. Since these plants are usually about 12″-30″ tall, it makes them ideal for areas with height restrictions. Although an Emerald Gem plant is a relative of the easy-care philodendron, it is a bit more finicky and requires more attention. However, if you are tired of the same old houseplants, an Emerald Gem plant makes a nice addition to your plant collection.", 
        light: "An Emerald Gem plant requires medium indirect light but grows even better in bright indirect light. Homalomenas, as they are also called, can survive in low light but become thin and spindly. The bottom leaves of an Emerald Gem plant turn yellow and fall off when there is not enough light.", 
        water: "Watering is the most difficult part of caring for an Emerald Gem plant. When the plant is either over or under watered the bottom leaves may fall off. Over-watering is also the main reason an Emerald Gem plant gets yellow leaves. Always allow the top 50% of the soil dry out before watering. When you do water, water well enough so that it drains out the drip holes in the bottom of the pot. An Emerald Gem plant doesn't like anything cold, so use warm water and never dump extra ice cubes into the soil.", 
        temperature: "Emerald Gem plants like warm household temperatures between 65°-80°F ( 18.3°-26.7°C). Keep these plants away from air conditioners and cold drafts.", 
        poisonous: "An Emerald Gem plant or Homalomena is a slightly poisonous houseplant with a level #1 toxicity.", 
        image: "https://www.houseplant411.com/wp-content/uploads/hedera-ivy-278x300.jpg",
        isSeeded: true
    },
    {
        name: "Episcia Plant", 
        description: "Episcias are lovely trailing plants native to Central and South America, Brazil, and the West Indies. An Episcia plant is grown for its colorful textured leaves and small but pretty flowers. The most popular variety of the Episcia plant is the Flame Violet which has silver veined leaves and bears tubular bright pink or orange-red flowers about 3/4″ in size. The Episcia has never become as popular as its close relative the African Violet because they require more care. Episcias grow in a very unique manner. Each plant sends out runners called stolons which trail over the edge of the container or across the soil in the pot. New plants are propagated from these runners.This is a beautiful unique houseplant, but not a good plant for beginners.", 
        light: "Episcia Plants require bright light but no direct sun. If the light is too bright, the color in the leaves fades.", 
        water: "The soil of an Episcia plant should be moist but not soggy at all times. If the soil is too dry, the leaves develop brown edges. In the winter, when an Episcia is not growing, allow the soil to become a little drier.", 
        temperature: "Average household temperatures above 65°F (18.3°C). Lower temperatures may cause brown leaf edges. An Episcia plant usually dies when the temperature goes below 50°F ( 10°C).", 
        poisonous: "An Episcia is a non - poisonous houseplant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/3dbbbf563b06cbb56e4ee7a89eef8aba-196x300.jpg",
        isSeeded: true
    },
    {
        name: "False Aralia", 
        description: "A False Aralia, native to New Caledonia, has many different names depending who you ask: Dizygothica elegantissima, Schefflera Elegantissima, or Spider Aralia. Whatever you call it, this is a beautiful plant with long, narrow, serrated leaves in a palmate (finger-like) arrangement. The color of the leaves starts out as a reddish, coppery green and gradually turns into a lovely dark green. A False Aralia can be used as a table plant when small and, when it matures, as a tall, exotic looking indoor tree.  It's a great plant to propagate using stem tip cuttings.", 
        light: "A False Aralia likes bright indirect light, but no direct sun.", 
        water: "Keep the soil barely moist but never soggy. When you water, water well until the water comes out the drip holes in the bottom of the pot. Allow the top 1″-2″ of soil to dry out before watering again. Wilted leaves usually mean the plant is over-watered. The plant loses leaves if the soil is too wet or too dry. During the winter, when the plant is resting, allow the soil to dry out more before watering.", 
        temperature: "These plants like warm temperatures between 65°-85°F (18-29°C). If the temperature dips below 60°F (15.6°C) a false aralia may drop leaves.", 
        poisonous: "A False aralia is a non- poisonous houseplant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Schefflera-elegantissima-10-204x300.jpg",
        isSeeded: true
    },
    {
        name: "Fatsia Plant", 
        description: "A Fatsia plant, also called a Fatsia japonica, or Japanese aralia, originated in the sub-tropic forests of Japan, Korea, & Taiwan. Fatsia plants are a type of evergreen that can be grown both indoors and outdoors in frost-free areas. A Fatsia plant has shiny, leathery, medium green palmate (hand-shaped) leaves that grow at the ends of stiff stems. Fatsia japonica is a compact, upright plant that, even when grown as a houseplant, can reach 6ft in height. Prune a Fatsia japonica aggressively to keep the growth under control and the shape attractive. Watch out for powdery mildew when the humidity is high.", 
        light: "A fatsia does well in bright filtered light. If you move it outdoors in the spring and summer, be sure to keep it in the shade.", 
        water: "Allow the top 50% of the soil to dry out before watering, the leaves may even start to droop a little. Brown brittle leaves indicate under-watering. Soft leaves that turn yellow and fall off indicate over-watering.", 
        temperature: "A Fatsia likes cool temperatures, especially in the winter when it is resting. It does well in temperatures between 45°-55°F (7.2°C-12.8°C) in the winter and never above 70°F (21.1C) during the rest of the year.", 
        poisonous: "A Fatsia is non-toxic plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Fatsia-japonica-08-1-300x269.jpg",
        isSeeded: true
    },
    {
        name: "Ficus Alii Plant", 
        description: "The Ficus Alii, or Amstel King as it is sometimes called, is a large plant that originally came from Asia, Malaysia, and India. It was first grown commercially in Hawaii where it got the Hawaiian name “alii” which means “king.” Although a Ficus Alii is closely related to the Ficus Benjamina, the Alii variety is much more tolerant and forgiving; it rarely sheds leaves, tolerates lower light, and can be moved around without going into shock. A ficus Alii does grows about 25% slower than a ficus Benjamina. The leaves are quite different than those of the usual Ficus trees. They are medium green, 3″-10” long, narrow, willow-like, and thick. The newer hybrids such as the  King Alii ficus have wider leaves. New growth on the ficus plant is a pretty, reddish-bronze color; but as the leaves mature they change to a medium green.", 
        light: "Ficus Alii plants do well in bright, indirect light; however, they can survive in medium light. The lower the light, the longer a ficus Alii takes to produce new leaves. Rotate it weekly to maintain the plant's beautiful shape.", 
        water: "Water when the top 1″ of the soil has dried out. If the plant is in a container larger than 12″ wait until the top 2″ of soil has dried out. Water deeply so that the excess water drains out the drip holes in the bottom of the pot. Immediately empty excess water and do not allow a ficus Alii to sit in water. New growth turns black and green leaves fall off from over -watering. Leaves become brown and crunchy, drop off, and may turn yellow when the plant needs water.", 
        temperature: "Unlike the ficus Benjamina, these plants are much more tolerant of temperature changes. Although a ficus Alii prefers temperatures between 60°-85° F (19°-25° C), these plants can survive in temperatures as low as 45°F (7.2°C) for a short time.", 
        poisonous: "Ficus Alii are poisonous plants with a level #2 toxicity. The sap contains latex that can cause skin irritations. Always wear gloves when pruning.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ficus-maclellandii-Amstel-King-14-BR.jpg",
        isSeeded: true
    },
    {
        name: "Ficus Benjamina", 
        description: "For many years, a Ficus benjamina had the reputation of being a temperamental, high-light plant that easily dropped leaves if you just looked at it.  Today, however, there are new, hardy varieties that grow in almost any location. You can find ficus trees small enough to sit on a table or as large as 12ft. tall. The slender, pale brown, woody trunks can be straight, braided or twisted into a spiral. The thin, arching branches are covered in hundreds of 1”-3.5” glossy, leathery, pointed., oval to elliptical shaped leaves. All parts of the plant contain a milky, slightly toxic, white sap that can be quite irritating if eaten or if it gets into an open cut.", 
        light: "Ficus trees, especially the Benjamina and Wintergreen varieties, need very bright indirect light. New varieties, called ″Ficus of the Future″, can survive in medium and even low light. Examples of ″Ficus of the Future″ are the Monique with ruffled green leaves, the Midnight with dark green/black leaves, and the ficus Alli with elongated leaves. Direct sun burns the leaves of all ficus trees.", 
        water: "Allow the top 25% of the soil to dry out before watering. Under-watering causes leaves to turn yellow. Green leaves to fall off and new growth turns black when a ficus is over-watered. Ficus trees grow better if you follow a consistent watering schedule.", 
        temperature: "Indoor ficus trees like temperatures between 65°-85°F (18.3°-29.4°C). Keep a ficus tree away from cold drafts, air conditioners, and heaters or it will lose leaves.", 
        poisonous: "A ficus is considered a slightly poisonous houseplant with a level #1 toxicity. Many people find the sap extremely irritating if it comes in contact with their skin.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ficus-benjamina-Midnight-10-BR-197x300.jpg",
        isSeeded: true
    },
    {
        name: "Rubber Tree Plant", 
        description: "Rubber tree plants have thick, leathery, glossy, oval leaves that are about  4”-14” (10cm-35cm) long and 2″-6″ (5cm-15cm) wide. Once damaged, the leaves cannot be trimmed and should be cut off. Interestingly, the leaves of younger plants are larger than those of more mature plants. When small, this versatile plant can be used as table plant and eventually as a bushy floor plant or tall tree. The easy to care for rubber tree can grow up to 10ft tall in a bright room with tall ceilings.", 
        light: "Light requirements for a rubber tree plant: Bright, indirect light especially for the varieties that have cream, pink, or light red variations in the leaves. A rubber tree plant with solid, dark green leaves can grow in medium light but may become leggy when there is not enough light. Direct sun will burn the leaves.", 
        water: "Water requirements for a rubber tree plant: Allow the top few inches of soil (25%-30% depending upon the pot size) to dry out before watering. It is confusing, but yellow leaves can develop when the plant is either over or under- watered. Like its cousin, the ficus benjamina, green leaves fall off and new growth turns black when the plant is over- watered.", 
        temperature: "The best temperature for a rubber tree plant: 60°F - 75°F (15°C-24° C) Temperatures below 55°F (12.8°C) can damage the leaves", 
        poisonous: "Is a rubber tree plant poisonous: The sap of a rubber tree plant is toxic and can irritate the skin, eyes, and mouth. The plant should be kept away from small children, dogs and cats. Always wear gloves and a long sleeve shirt when pruning, or propagating a rubber tree plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ficus-elastica-Robusta-08-BU-2-300x249.jpg",
        isSeeded: true
    },
    {
        name: "Ficus Pumila", 
        description: "Ficus pumila or Creeping fig is a tiny- leafed plant native to Japan, Vietnam and China. Also called a Ficus Repens, it is an excellent table plant, hanging plant, or climbing plant. Since the fast- growing vines of a Creeping Fig easily cling to just about anything, it's also a great plant  if you want to create a topiary. The small (1”-2”), thin, delicate, heart- shaped leaves grow on wiry stems. As a ficus pumila matures, it develops a dense. dark green, mat-like appearance. ", 
        light: "A ficus pumila needs indirect light from an east or west-facing window. Plants with variegated leaves require even more light. Creeping fig plants do surprisingly well in strong artificial light.", 
        water: "Keep the soil moist but never soggy. The leaves of a ficus pumila deteriorate if the soil is allowed to repeatedly dry out. Reduce water during the winter.", 
        temperature: "A ficus pumila, also called a ficus repens, does well in temperatures between 55°F-75°F ( 12.8°C-23.9°C)", 
        poisonous: "A ficus pumila has a #1 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ficus-pumila-Curl-06-copy-300x227.jpg",
        isSeeded: true
    },
    {
        name: "Fiddle Leaf Fig Plant", 
        description: "A Fiddle Leaf Fig has large, green, shiny, leathery leaves with a wavy margin. The heavily veined leaves can be 12″- 18″ ( 30cm - 45cm) long and 8″-12″ (20cm-30cm) wide,  and grow on upright, woody stems. When immature, the plant can be small enough to sit on a table plant, but eventually, with proper care, it becomes a tall, impressive indoor tree. This is a bold looking plant that makes an impression wherever you place it.", 
        light: "A Fiddle Leaf Fig requires bright, indirect light. In low light, new leaves are small and mature leaves may fall off. Turn frequently to keep a Ficus Lyrata from growing toward the light and becoming lop-sided. Too much bright light causes the leaves to fade.", 
        water: "A Fiddle Leaf Fig requires less water than other ficus trees. Allow the top 50% of the soil to dry out and the leaves to become soft and flexible before watering. Keep the leaves dry and water off of the large fiddle shaped leaves to prevent mold. Too much water and water on the leaves can also cause ugly brown spots on the leaves.", 
        temperature: "Fiddle Leaf Fig trees do well in temperatures between 60°-80°F (15.6°- 26.7°C). Keep all types of ficus trees away from air conditioners, cold drafts, and heating vents. Intense cold or heat causes leaf drop.", 
        poisonous: "A Fiddle Leaf Fig is considered a poisonous houseplant with a level #1 toxicity. The sap of is especially irritating.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ficus-lyrata-10-BU-7-182x300.jpg",
        isSeeded: true
    },
    {
        name: "Fishtail Palm", 
        description: "A Fishtail Palm has large, arching, fan-shaped fronds (leaves) with bipinate, smaller leaflets about 6″ long and 4″ wide.  The plant gets its name, Fishtail Palm, because the leaflets are jagged at the distal end and resemble the tail of a fish.  As a houseplant, when properly cared for, a Fishtail Palm can reach a height 4ft-8ft (1.2m-2.4m). There are several types of Fishtail Palms such as the Caryota gigas (Giant Fishtail Palm), Clumping Fishtail palm, Toddy Fishtail Palm, that are too large to use indoors.Although most Fishtail Palms have single trunks, Caryota mitis,  the most popular variety used as a houseplant, is a suckering type. It produces several stems, growing near the base of the main stem and has numerous, ragged- edged leaflets. Caryota urens variety (Wine Fishtail Palm) has fewer, more triangular shaped leaflets.", 
        light: "Fishtail Palms need very bright indirect light from an east or west-facing window. Avoid direct exposure to the sun.", 
        water: "Water well and then allow the top 25% of the soil to dry out before watering again. Never allow the soil to totally dry out or permit a Fishtail Palm to sit in excess water. Leaf edges turn brown if there are too many chemicals in the water or the plant is under watered.", 
        temperature: "Fishtail Palms prefer temperatures between 75°-85°F (23.9°-29.4°C) during the day and 60°-70°F (15.6°-21.1°C) at night. Keep a Fishtail Palm out of cold drafts and away from air conditioners. Nighttime temperatures should never go below 45°F (7.2°C).", 
        poisonous: "The red berries on Fishtail Palm contain calcium oxalate and are poisonous to cats, dogs, and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Caryota-mitis-10-1-259x300.jpg",
        isSeeded: true
    },
    {
        name: "Fittonia", 
        description: "A Fittonia (Nerve Plant), is a small, compact, low-growing plant usually about 6”- 8” tall and 12”- 18” wide. This is a creeping plant with 2” thin, oval, leaves that have distinctive white, pink, red, or silver veins; the leaves are attached to fuzzy stems. Fittonia plants are usually divided into two groups based on the color of the veins in their leaves; white-veined fittonia belong to the Argyroneura Group while red or pink-veined fittonia belong to the Verschaffeltii Group. During the summer, if  growing conditions are excellent, a mature plant may send out 3” flower spikes topped with bracts of small, tubular, yellowish/white flowers during the summer. The brightly colored leaves of the plant are more spectacular than the insignificant flowers.", 
        light: "A Fittonia (Nerve Plant) grows well in bright and medium indirect light. It will survive and grow slowly in lower light but vibrant colors in the leave may fade.", 
        water: "Try to keep the soil of a Fittonia barely moist but never soggy. During the winter, water less and keep the soil drier.", 
        temperature: "A Fittonia plant prefers warm temperatures between 70°F-80°F (21°C-26° C) and does not do well in temperatures below 60°F (15°C).", 
        poisonous: "A Fittonia (Nerve plant, Mosaic plant) is a non- poisonous plant and safe to have around small children, dogs, cats, and other pets..", 
        image: "https://www.houseplant411.com/wp-content/uploads/fittonia-verschaffeltii-200x300-1.jpg",
        isSeeded: true
    },
    {
        name: "Gardenia Plant", 
        description: "A Gardenia plant has beautiful, scented, waxy, white flowers and glossy, green leaves, but are very temperamental plants and won't put up with neglect. A gardenia plant requires very specific growing conditions such as light, humidity, and temperature. Native to Japan and China,  these plants are usually seen as outdoor evergreen bushes on the southern and western coasts of the United States. The key to successfully growing a Gardenia plant indoors is to try to mimic the outdoor environment as closely as possible. Although it is quite a challenge and an accomplishment to grow a gardenia plant indoors, it is a flowering plant like none other. The jasmine fragrance of the flowers has inspired hundreds of perfumes. Before sending a gardenia plant as a gift, be sure the person you're sending it to has the time to care for it and the proper environment, otherwise they will just be frustrated as the plant gradually dies.", 
        light: "A gardenia plant requires very bright light for at least 6-8 hours a day. Be prepared to move your gardenia to different locations as the seasons change. grow lights may be necessary if there is not enough natural light to help your gardenia plant thrive.", 
        water: "Gardenia plants need to be watered very carefully. Allow the top 2-3 inches of the soil to dry out before watering. Over-watering causes root rot, brown spots on leaves, and buds not to open. Under-watering a gardenia plant results in green leaves falling off.", 
        temperature: "The correct temperature is extremely important. Ideal temperatures for gardenia plants are between 65°-70°F (18.3°-21.2°C) during the day and 55°-65°F (12.8°-18.3°C) at night. Cool night temperatures are essential for the buds to set. Gardenia buds drop off if temperatures go above 70°F (21.1°C).", 
        poisonous: "The correct temperature is extremely important. Ideal temperatures for gardenia plants are between 65°-70°F (18.3°-21.2°C) during the day and 55°-65°F (12.8°-18.3°C) at night. Cool night temperatures are essential for the buds to set. Gardenia buds drop off if temperatures go above 70°F (21.1°C).", 
        image: "https://www.houseplant411.com/wp-content/uploads/oldimages/Plant_62/634707072357604368-222x300.jpg",
        isSeeded: true
    },
    {
        name: "Geranium Plant", 
        description: "A geranium plant is a very popular outdoor plant, but also makes a great indoor flowering plant. Geraniums are part of the genus Pelargonium which means “stork” in Latin. Native wildflowers and herbaceous perennials are the real members of the Geranium genus. There are over 200 Pelargonium species, most of them originating in South Africa. A Geranium plant produces clusters of flowers that come in a variety of colors such as white, pink, salmon, red, fuchsia, and lavender. Leaves are green, green and white, or multicolored. Geranium plants can be a compact upright plant or a graceful hanging vine. The vibrantly colored geranium flowers do not have an appealing aroma, but there are several geranium varieties that produce leaves with lovely scents such as rose, lime, peppermint, lemon, orange, or lime.  These plants are considered slightly poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don't Feed Me To Your Cat! A Guide to Poisonous Houseplants. Geranium plants are a great addition to your houseplant plant collection, but very need very bright light or direct sun for at least 6-8 hours a day to bloom indoors.", 
        light: "Geranium plants grow indoors when placed in moderate light, but only bloom in very bright intense light. Fluorescent lights about 10 to 12 inches from a geranium plant can be used to supplement natural light", 
        water: "Geranium plants survive being under- watered but quickly develop root- rot when over- watered. Wait until the top 50% of the soil is dry, before watering.", 
        temperature: "Geranium plants prefer cool temperatures between 65°-70° F (18.3° 21.1°C) during the day, and around 55°F (12.8°C) at night. Avoid placing a geranium plant in cold, drafty areas or hot, dry places.", 
        poisonous: "Geranium plants are slightly poisonous with a level #1 toxicity.", 
        image: "https://www.houseplant411.com/wp-content/uploads/geranium.jpeg",
        isSeeded: true
    },
    {
        name: "Goldfish Plant", 
        description: "Goldfish plants have long stems, that grow up to 3ft in length, covered in hundreds of small, thick, shiny, dark green leaves and colorful tubular flowers that resemble tiny goldfish. The flowers can be red, orange, or yellow and usually appear in the spring; however, several of the new hybrid varieties produce flowers all year. If you have a high light area that calls for a hanging or table plant that flowers, a Goldfish Plant, Columnea nematanthus, is a perfect choice. A Goldfish plant, native to Southern Mexico, Brazil, and Costa Rica, comes in over 25 different varieties. In nature, it is an epiphytic plant, meaning it grows on other plants, rocks, or trees for support. It’s a member of the Gesneriaceae family and a relative of the Lipstick Plant, Episcia, and African Violet.", 
        light: "A goldfish plant requires bright indirect light especially if you want it to develop flowers.", 
        water: "Allow the top 25%-30% of the soil to dry out before watering. Green leaves fall off when the plant is too wet or too dry.", 
        temperature: "Goldfish plants do well in temperatures between 65°-85°F ( 18.3°-29.4°C). Intense heat burns the leaves. Try to keep goldfish plants out of drafts and away from heaters.", 
        poisonous: "A Goldfish Plant is a slightly poisonous houseplant with a level #1 toxicity.", 
        image: "https://www.houseplant411.com/wp-content/uploads/il_1588xN.1347893659_9giz-295x300.jpg",
        isSeeded: true
    },
    {
        name: "Grape Ivy Plant", 
        description: "A Grape Ivy plant, Cissus rhombifolia, (also called a Cissus alata) and its relative the Oak Leaf or Ellen Danica Ivy, has dark green, glossy leaves that grow off of long , thin stems. The plant is usually only about 18″ tall but can have trailing vines up to 10ft. in length.  Grape Ivy plants look beautiful sitting on a table or hanging in a basket. The tendrils of a Grape Ivy plant or Oak Leaf Ivy plant help them cling to poles or pieces of bark. These plants may be a little difficult to locate because many greenhouses don't want to spend the extra money and time it takes to grow them properly. They can be found at various online plant shops. The new Grape Ivy plant varieties are hardier and less prone to diseases and insects such as spider mites.", 
        light: "Grape Ivy plants require medium to high light though new varieties such as Ellen Danica and Mandianna can live in lower light. If the stems stretch toward the light and new leaves are further apart on the stem, move your plant to a brighter location.", 
        water: "Water well and then allow the top 50% of the soil to dry out before watering again. Crispy leaves mean the plant in over-watered.", 
        temperature: "Grape Ivy plants can handle temperatures from 40°-90°F (4.4°-32.2°C), although growth slows above 80°F ( 26.7°C). The ideal temperature for a Grape Ivy Plant is 60°-80°F ( 15.6°-26.7°C).", 
        poisonous: "A Grape Ivy is a non- poisonous houseplant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Cissus-rhombifolia-08-2-236x300.jpg",
        isSeeded: true
    },
    {
        name: "Hawaiian Schefflera “Gold Capella”", 
        description: "The Hawaiian Schefflera “Gold Capella” is a bushy, upright houseplant with masses of small, shiny, leathery, green and gold patterned leaves. The schefflera plant originally came from Taiwan and, when grown as an outdoor plant, even flowers. These plants can be tall impressive trees, bushy floor plants, small table plants, or even be small enough to be used in a dish garden. A Hawaiian Schefflera is a bushy, upright houseplant with masses of small, shiny, leathery leaves. The original Hawaiian Schefflera has solid green leaves; the Hawaiian Schefflera “Gold Capella” has gold and green leaves; and the Hawaiian Schefflera “Tribute” has white and green leaves.", 
        light: "The brighter the light the faster and fuller a Hawaiian Schefflera plant grows. Variegated Hawaiian Scheffleras like the ”Capella” require more light than solid green Hawaiian scheffleras. Direct sun burns the leaves of all types of schefflera plants.", 
        water: "Water well and then allow the top 1/3 of the soil to dry out before watering again. This might be an inch or two in a small pot and 5” or more in a large pot. Green leaves fall off and new growth turns black when a Hawaiian Schefflera is over- watered. Leaves turn bright yellow when it is under-watered.", 
        temperature: "Hawaiian Scheffleras are fine with basic household temperatures. Try to keep all Schefflera plants out of cold drafts and away from heaters and air conditioners.", 
        poisonous: "Hawaiian Schefflera plants are mildly poisonous with a #1 toxicity leveland should be kept away from pets and children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Schefflera-arboricola-Gold-Cappella-08-BU-2-295x300.jpg",
        isSeeded: true
    },
    {
        name: "Hawaiian Schefflera Plant", 
        description: "As an indoor houseplant, a Hawaiian Schefflera can be as small as 5″ and be used in dish gardens. Hawaiian Scheffleras are perfect table or floor plants for home or office. and are also an excellent choice if you want to try your hand at the art of bonsai. A Hawaiian schefflera, like its close cousin the Schefflera actinophylla or Umbrella tree plant, can also be a specimen tree reaching a height of six feet or more. This attractive plant is available with braided stems and also as bonsai plant. A Hawaiian Schefflera has masses of small, shiny, leathery leaves. The leaves are arranged palmately with 7-9 leaflets per leaf. The leaflets are small, ranging in size from about 3”- 7” (7.5-18 centimeters) in length and 2”- 4” (5- 10 centimeters) in width.", 
        light: "The brighter the light the faster and bushier a Hawaiian schefflera plant grows. Variegated Hawaiian scheffleras, like the ”capella” variety, require more light than solid green varieties. Direct sun burns the leaves on all varieties of schefflera.", 
        water: "Water well and then allow the top 1/3 of the soil to dry out before watering again. Seemingly healthy leaves fall off and new growth turns black when a Hawaiian schefflera is over- watered. Leaves turn bright yellow when the plant needs more water.", 
        temperature: "Hawaiian scheffleras grow well in normal household temperatures. Try to keep the plant out of cold drafts and away from heaters and air conditioners.", 
        poisonous: "Hawaiian scheffleras are considered to be slightly poisonous plants with a #1 toxicity level. Keep this plant out of reach of small children and pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Schefflera-arboricola-08-BU-7-300x273.jpg",
        isSeeded: true
    },
    {
        name: "Hawaiian Ti Plant", 
        description: "A Hawaiian Ti plant, Cordyline fruticosa, is in the family Asparagaceae. It is a relative of the Agave, Sansevieria, and Yucca.  Although many plant sources still refer to the plant as Cordyline terminalis, that name is now considered invalid by the International Cordyline Society. Other common names for a Hawaiian Ti plant are, Ti Plant, Good Luck Plant, and Hawaiian Good Luck plant. Many types of cordylines are native to Hawaii, but other varieties were also found in Australia, New Zealand, South America, and parts of Asia. The long leaves of a Hawaiian Ti plant are often used as roofing material and to make traditional “hula” skirts.", 
        light: "A Hawaiian Ti plant grows well in bright, indirect light; avoid direct sun or the leaves will burn. If the light is too low the beautiful purple, red, pink, magenta, orange, cream, and yellow leaves revert to green.", 
        water: "Proper watering is the most difficult part of taking care of a Ti plant. The soil should be moist but never soggy, and should never totally dry out. If your household water contains fluorine, chlorine, or passes through a water softener, use distilled water or allow your regular water to sit out over night before using it. Chemicals in the water damage the leaves of a Hawaiian Ti plant. Fluoride toxicity is especially harmful, causing ugly brown leaf tips.", 
        temperature: "", 
        poisonous: "", 
        image: "https://www.houseplant411.com/wp-content/uploads/17AUG08014-226x300.jpg",
        isSeeded: true
    },
    {
        name: "Hibiscus Plant", 
        description: "A Hibiscus plant is an outdoor plant in tropical and sub-tropical areas throughout the world. However, a hibiscus plant also does well as an indoor plant in warm, temperate climates. There are hundreds of varieties of hibiscus and all bloom indoors if cared for correctly. However, the flowers may be smaller than when the plant is grown outdoors. Many new hibiscus varieties are hybrids; this means they are grown from tissue cultures in greenhouses.Hibiscus plants, upright, woody bushes with dark glossy maple-leaf shaped foliage, produce large, beautiful flowers in orange, red, yellow, pink, and white. The size of the blooms may be as small as 2” or as large as 10”-12.” A Hibiscus plant can be 1'-15' in height depending on whether it's growing in a pot or planted outside. Hibiscus plants also make beautiful topiaries and bonsai plants.", 
        light: "Hibiscus require very bright light and several hours of direct sun in order to bloom as indoor plants.", 
        water: "During the spring and summer, when a Hibiscus is actively growing, keep the soil moist but never soggy. In the fall and winter, allow the top 2” to dry out before watering.", 
        temperature: "Hibiscus Plants do well in temperatures between 65°-85°F (18.3°-29.4°C). If the temperature goes below 40°F (4.4°C) for a prolonged period of time, the new growth is ruined.", 
        poisonous: "Hibiscus are non- poisonous plants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Hibiscus-263x300.jpg",
        isSeeded: true
    },
    {
        name: "Hoya Hindu Rope Plant", 
        description: "The unique Hoya Hindu Rope plant, Hoya carnosa compacta, is a draping succulent plant that produce clusters of star-shaped, waxy flowers. The thick, twisted, curly, cupped leaves of a Hindu Rope plant are why it's often called Krinkle Kurl. Hindu rope plants can be found in solid green or with variegated leaves. This type of hoya plant is very easy to care for as long as you have plenty of light and are careful with your water.", 
        light: "All Hindu Rope plants, both green and variegated, grow best in very bright light. Southern exposure is best, but it can adapt to east or west locations in front of a window. In lows light, a Hindu Rope plant may never bloom. Afternoon sun will burn and bleach the color from the leaves.", 
        water: "All hoya plants, including the Hindu Rope plant, are succulents that need very little water. Water when the soil is almost dry. During the winter, water all varieties of hoya plants even less.", 
        temperature: "Hindu Rope plants prefer daytime temperatures of 70 ° (F) or higher and nighttime temperatures between 60° and 65° (F). These temperatures encourage mature plants to flower during the late spring and summer.", 
        poisonous: "Although not considered poisonous, a Hindu Rope Plant can make dogs and cats ill if they eat a large number of leaves.", 
        image: "https://www.houseplant411.com/wp-content/uploads/450px-Hoya_compacta_12-225x300.jpg",
        isSeeded: true
    },
    {
        name: "Hoya Plant", 
        description: "A hoya plant is a trailing or climbing plant with thick, succulent leaves. The leaves come in many sizes, colors, shapes, and textures. All hoya plants  produce clusters of waxy, star shaped flowers from late spring to early autumn. Hoya carnosa is the basic species we use as an indoor plant. There are several different varieties of  this species available. There are over 50 other hoya plant varieties such as the Hoya Kerri (Sweetheart hoya) with heart-shaped leaves and the Hoya pubicalyx with elongated, oval leaves that make great houseplants. Most varieties grown indoors produce clusters, called umbels, of five-pointed, star shaped, fragrant flowers in red, white, pink, purple, yellow, orange, and even black.", 
        light: "How much light for a hoya plant: These plants grow faster and bloom more often in very bright, indirect light. They are one of the few indoor plants that can handle direct morning sun. Although a hoya plant can adapt to lower light, growth is slower and there are less flowers.", 
        water: "How to water a hoya plant: This is a succulent plant that stores water in its leaves. Allow the top several inches of soil to dry out before watering. Although somewhat drought resistant, they do need additional water when in bloom. Water less during fall and winter. If your water contains fluorine or chlorine, allow it to sit out 24 hours or more before using it so the chemicals can dissipate. Fluorine, chlorine, and salt are harmful to a hoya plant.", 
        temperature: "Best temperature for a hoya plant: Temperatures of 65°F - 80°F (18.3°- 26.7°C ) during the day and 60°F - 65°F (15.6°C - 18.3°C) at night are best. If the temperature is too cold or a hoya plant is sitting in a cold draft, it may drop leaves.", 
        poisonous: "Although not considered poisonous, hoya plants may make dogs and cats ill if they eat a large number of the leaves..", 
        image: "https://www.houseplant411.com/wp-content/uploads/bcada06010e07dfcf98a0c966dd93ec6-200x300.jpg",
        isSeeded: true
    },
    {
        name: "Hoya Shooting Star Plant", 
        description: "The Hoya Shooting Star plant is native to Thailand and Malaysia. White blooms on a Hoya Shooting Star plant appear in large clusters, with the waxy petals leaning back behind the center of the flower, like shooting stars. There are over 200 species of the easy to grow almost indestructible hoya plant. These plants are often referred to as Wax Plants because of the waxy nature of their leaves and flowers.  Hoya plants grow well and produce more flowers when hanging in front of a window that gets bright, indirect light. Even a houseplant novice will be successful growing a Hoya plant if they don't over water and cause stem and root rot.", 
        light: "Hoya Plants do best and bloom more in very bright light. They are one of the few indoor houseplants that can even thrive in morning, direct sun. Although a Hoya Shooting Star plant can adapt to lower light, they grow slower and do not produce the fragrant porcelain- like flowers that are so beautiful.", 
        water: "These are Succulent Plants and need to completely dry out before being watered. Hoya Shooting Star plants do thrive on neglect, but need additional water when in bloom.", 
        temperature: "Hoya Plants can adapt to any temperature but prefer 70°-80°F ( 21.1°-26,7°C) during the day and 60°-65°F (15.5°-18.3°C) at night.", 
        poisonous: "Although not considered poisonous, Hoya Plants can make dogs and cats ill if they eat a large number of leaves.", 
        image: "https://www.houseplant411.com/wp-content/uploads/800px-Shooting_Stars_Hoya_multiflora_5-300x168.jpg",
        isSeeded: true
    },
    {
        name: "Jade Plant", 
        description: "A jade plant is a green friend that just won't die! It got the name jade plant because of its resemblance to the jade gemstone. Today, there are many different varieties and cultivars available, with different leaf colors, patterns, and leaf shapes. The Crassula ovata remains the most the most popular. The scientific name is a perfect description of what the plant looks like. “Crassula” is latin for thick, and refers to the fat or thick, succulent, 2″ plant leaves. Ovata means egg-shaped, and refers to the shape of the leaves. All types of jade plants have thick roots, shiny, plump, leaves, and sturdy stems that store water and make the plant drought resistant. When placed in very bright light, some may develop red leaf edges. Certain jade plants produce tiny pink or white star-shaped flowers, not in the summer like most plants, but around Christmas.", 
        light: "How much light for a jade plant: This succulent plant grows best in bright, indirect light and morning sun. When there is not enough light, the stems of a jade plant become leggy and bare as they reach for the light.", 
        water: "How to water a jade plant: The main reason a jade plant loses leaves and eventually dies is from over watering due to rot rot. Allow the soil to practically dry out and the leaves to become a little soft and flat before watering.", 
        temperature: "Best temperature for a jade plant: These plants prefer warm temperatures between 60°-70°F (15°-25°C).", 
        poisonous: "A Jade plant, and all members of the Crassula family, are toxic to dogs, cats, and other pets. The sap of the plant is an irritant should be kept away from small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Crassula-argentea-12-1-300x230.jpg",
        isSeeded: true
    },
    {
        name: "Jasmine Plant", 
        description: "Jasmine plants are very fragrant, flowering plants that originated in China and the tropical areas of Asia. The buds of a jasmine plant are often more fragrant than the flowers.  Jasmine plants have shiny, oval leaves and white, pink, or pale yellow tubular flowers.  The Jasmine “polyanthum” variety is a twining, climbing plant with long, slender, trailing stems and is one of the easiest varieties to grow indoors. Another good indoor variety is Jasminum “sambac” or “Maid of New Orleans.” Under the right conditions, high humidity and very bright light,  jasmine plants will bloom several times a year, filling your home with a beautiful scent.", 
        light: "A jasmine plant likes bright indirect light throughout the year, and in the winter benefits from a few hours of direct sun. However, avoid putting a jasmine plant in the direct sun during the summer, the intensity of the sun will burn the leaves. Try moving your jasmine plant outside for the summer, the plant will love it.", 
        water: "Jasmine plants loses leaves and leaves dry up from both too much and too little water. In the spring and summer, keep the soil moist but never soggy. The top 30% of the soil should dry out before watering. Soil that stays too wet, too long, damages the roots of the plant and eventually prevents the roots from absorbing water at all. When you do water, water well enough so that the water comes out the drip holes in the bottom of the pot. Do not allow the plant to sit in this excess water. During the fall and winter, keep a jasmine plant on the drier side.", 
        temperature: "Jasmine plants do well in cool rooms where the temperature is 65°-70°F (18.3°-21.1°C) and the light is very bright. If the room is too warm, a jasmine plant grows but doesn't produce any flowers. These plants, like most houseplants, do poorly when placed near heaters, hot air vents, and fireplaces.", 
        poisonous: "Jasmine plants do well in cool rooms where the temperature is 65°-70°F (18.3°-21.1°C) and the light is very bright. If the room is too warm, a jasmine plant grows but doesn't produce any flowers. These plants, like most houseplants, do poorly when placed near heaters, hot air vents, and fireplaces.", 
        image: "https://www.houseplant411.com/wp-content/uploads/jasmine-copy-300x275.jpg",
        isSeeded: true
    },
    {
        name: "Kalanchoe Plant", 
        description: "The kalanchoe “blossfeldiana” is the most frequently sold variety. This is a short, bushy, upright plant, about 12” to 18” inches tall and  6” to 20” wide , with thick, oval-shaped, scalloped leaves. The long-lasting, star-like blooms on a kalanchoe blossfeldiana appear in clusters at the ends of sturdy stems throughout the year. The vibrant colored flowers come in red, orange, yellow, lavender, white, and pink. Some new varieties even have bi-colored flowers. The kalanchoe “mangginii” has fleshy, rounded leaves, and produces large, bell-shaped flowers in bright red and reddish/orange during the spring. The leaves of both varieties turn red when the plant is in very bright light. Best of all, the blooms on kalanchoe plants may last up to 8 weeks. If you are quick to deadhead the plant (pinch off dead flowers), you'll encourage the plant to bloom more often and produce a greater number of flowers.", 
        light: "How much light for a kalanchoe plant: A kalanchoe plant needs bright, indirect light and can even tolerate direct sun during the fall, winter, and spring. Direct sun in the summer is too intense and burns the leaves. The blooms on a kalanchoe plant are photo-periodically induced. As the days get shorter and a kalanchoe experiences longer periods of darkness, the plant produces more flowers.", 
        water: "How to water a kalanchoe plant: The succulent kalanchoe plant has plump leaves that store water for long periods of time. These plants are easily over-watered which results in root-rot. Always allow the top 50% of the soil to dry-out before watering a kalanchoe. If the soil is exceptionally dry, sit the plant in a deep saucer of water for about ten minutes; this not only prevents over-watering, but keeps the leaves dry. Wet leaves encourage plant diseases such as leaf spot or powdery mildew.", 
        temperature: "Best temperature for a kalanchoe plant: Indoor kalanchoe plants like warm temperatures between 60°-85°f (15.6°-18.3°c). Low temperatures below 40°f (4.4°c) can damage or kill a kalanchoe plant within a few hours. Keep these plants away from cold drafts and open windows during the winter.", 
        poisonous: "A Kalanchoe is a poisonous plant and is toxic to cats and dogs. They belong to a group of plants that contain naturally-occurring poisons that affect the heart. The toxins in kalanchoe plants are similar to digitalis or digoxin, a common heart medication used in both human and veterinary medicine. The severity of the injury depends upon the amount of plant eaten. All parts of the plant are considered toxic, even the water in the vase of cut kalanchoe flowers is dangerous.", 
        image: "https://www.houseplant411.com/wp-content/uploads/il_794xN.2350555218_dqqh-300x214.jpg",
        isSeeded: true
    },
    {
        name: "Kangaroo Paw Fern", 
        description: "A Kangaroo Paw fern (Microsorum diversifolium), native to Australia and some parts of New Zealand, is a type of epiphytic evergreen with firm, leathery, shiny green, oddly- shaped fronds that vary in size. This is a short fern that grows to be about a foot tall, but its fronds can spread outwards 2-3 feet or more. A Kangaroo Paw fern does not need much fertilizer and likes to be warm. This is a unique looking, easy care fern that is very attractive in a hanging basket or set on a table in a pretty pot.", 
        light: "Medium to bright indirect light. Keep in the shade outside.", 
        water: "Water a kangaroo paw fern when the top 50% of the soil has dried out. When watering, give the plant enough water so that it drains out the bottom drip holes. I don’t recommend misting this or any other houseplant because keeping the leaves wet encourages bacterial and fungus infections.", 
        temperature: "These ferns like warm temperatures 70°-75°F (21.1°-23.9°C) in the spring, summer, and fall, but prefer cooler temperatures 60°-65°F (15.6°-18.3°C) and brighter light in the winter.", 
        poisonous: "These are non- poisonous houseplants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/100802013614253246-300x224.jpg",
        isSeeded: true
    },
    {
        name: "Kentia Palm", 
        description: "Even when grown indoors, this palm is a very large, impressive plant that requires plenty of space; it can be as tall as 10-12 feet and as wide as 4-5ft. The wide feathery fronds (leaves) can easily be 10”-14” long. While in nature, a kentia palm has a single stem, when purchased as an indoor plant, there are multiple stems since several kentia palms are usually planted together to help the plant appear full and bushy. The fact that this is a slow growing plant and there are several plants in the pot, helps explain why a kentia palm is so expensive to purchase.", 
        light: "A Kentia palm can survive in low light conditions, but grows better and develops more fronds in medium indirect light.", 
        water: "Water a Kentia palm well and then allow the top 25% of soil to dry out before watering again. Over-watering, resulting in root-rot, is the major reason Kentia palms die. Kentias, like most indoor palms, are sensitive to salt, fluoride, and chlorine in the water. Allow your water to sit out over night before using it or use distilled water if your household water has a high chemical concentration. Never use water that has passed through a softener, it is too salty.", 
        temperature: "Keep the room temperature between 65 and 85 degrees for a Kentia Palm.", 
        poisonous: "A Kentia Palm is a non- poisonous plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Howea-forsteriana-kenta14-268x300.jpg",
        isSeeded: true
    },
    {
        name: "Kimberly Queen Fern", 
        description: "Kimberley queen fern (Nephrolepis obliterata) is a tropical fern with beautiful dark green, sword-shaped fronds. It can be grown in the ground in warm climates but cannot tolerate cold temperatures. Thrives in full shade or dappled sunlight. It cannot tolerate full sun. When grown indoors, it acts as a natural air purifier. Fertilize twice a year and keep soil consistently moist but not wet.", 
        light: "Amount of light a Kimberly Queen fern needs: This fern prefers bright, indirect light and grows well hanging in front of a window with a north or east exposure. If the light is too bright, the leaves of a Kimberly Queen fern may lose their vibrant green color.", 
        water: "How to water a Kimberly Queen fern: Allow the top 25%-35% of the soil to dry-out before watering your fern. The fronds may turn a pale green when the fern needs water. Crispy brown fronds, especially in the center of a Kimberly Queen fern, is a sign that the plant is being over-watered. Avoid using “hard“ water, water that has a lot of salt in it or has passed through a water softener, or water high in fluorine or chlorine.", 
        temperature: "The best temperature for a Kimberly Queen fern is 60°F-70F° (15.5°C-21.1°C). Keep all indoor plants away from fireplaces, heaters, and air conditioners.", 
        poisonous: "Kimberly Queen ferns are non poisonous plants and are not toxic to cats, dogs, or small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Nephrolepis-exaltata-08-1-300x297.jpg",
        isSeeded: true
    },
    {
        name: "Lipstick Plant", 
        description: "The leaves of a lipstick plant can be light green, dark green, mottled green, green, and maroon, or green with white streaks. Although the leaves are usually elliptically shaped, growing in pairs, and having smooth edges, certain varieties may have wavy, curly leaves. The distinctive looking flowers of a lipstick plant are how the plant got its name. The tubular flowers, which develop in clusters at the ends of the stems, look like tiny tubes of lipstick as they emerge from their dark maroon buds. Lipstick plant flowers can be bright red, orange, yellow, or pink. Although a lipstick plant can surprise us by flowering throughout the year, most blooms appear during the spring and summer. Flowers buds develop on the previous year's growth, so keep that in mind when pruning the plant.", 
        light: "Lipstick plants require very bright indirect light but no direct sun.", 
        water: "Allow the top 25% of the soil to dry out before watering. If the leaves appear soft and shriveled, provide more water. Lipstick plants lose healthy green leaves when over-watered.", 
        temperature: "A Lipstick Plant grows well in temperatures between 75°- 85°F (24°-29°C)", 
        poisonous: "Lipstick plants are not poisonous and are safe to have around cats, dogs, and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Lipstick.jpg",
        isSeeded: true
    },
    {
        name: "Lucky Bamboo Plant", 
        description: "A Lucky Bamboo plant is really made up of the cut stalks of a Dracaena Sanderiana and is native to West Africa and Eastern Asia. The Lucky Bamboo plant stalks are usually 4″- 24″in height. Followers of Feng Shui believe that the Lucky Bamboo plant brings prosperity and good fortune to a home or business. If the Lucky Bamboo plant arrangement has three stalks it supposedly brings happiness; five stalks bring wealth; and six stalks bring health. Four stalks are never allowed since the word four in Chinese sounds too close to the Chinese word for death.", 
        light: "A Lucky Bamboo plant can survive in medium and even lower light, but does much better in bright indirect light. Pale leaves indicate the plant is not getting enough light. Avoid placing a Lucky Bamboo plant in the direct sun.", 
        water: "Watering a Lucky Bamboo plant takes a little time and care. Keep the marbles and pebbles in your vase covered with water at all times. Add water to the container weekly to keep the proper level. Once a month remove the Lucky Bamboo plant from the water, rinse the roots, pebbles, and marbles with fresh water, and then put the arrangement back together. Avoid using water high in fluoride or chlorine.", 
        temperature: "Lucky Bamboo Plants do best in warm temperatures between 70°-85°( 21°-29°C)", 
        poisonous: "A Lucky Bamboo plant has a #1 toxicity level and is considered to be a mildly to moderately poisonous plant, especially to dogs and cats.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Lucky-Bamboo-200x300.jpeg",
        isSeeded: true
    },
    {
        name: "Maidenhair Fern", 
        description: "A Maiden Hair fern, which originated in the Brazilian tropics, can be found growing in temperate climates throughout the world. The graceful, delicate fronds sometimes reach 20″-24″ in length and are covered in tiny, triangular, bright green leaflets called pinnae. During the spring, a Maidenhair Fern produces fronds that seem to have tiny dark brown “spots” on the underside of the leaf edges. The “spots” are really fern spores; this is how the fern propagates in nature. These specialized fronds do not live as long as regular fronds and if you don't like the way they look just cut them off.  Although a Maidenhair fern does require more care and attention, with the proper care this plant can live for a long while, growing more beautiful with each passing year.", 
        light: "A maidenhair fern prefers bright indirect light but still grows slowly in medium light. It can handle early morning sun, but afternoon sun burns the fronds.", 
        water: "Keep the soil moist but not soggy and never allow it to totally dry out. If the soil is too wet, a maidenhair fern develops root rot and fungal diseases.", 
        temperature: "Maidenhair ferns need consistent temperatures. They can handle warmth or cold, but prefer warm areas. Never place a maidenhair fern where the temperature fluctuates constantly.", 
        poisonous: "A maidenhair fern is a non- poisonous plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Adiantum-raddianum-10-copy-2-300x278.jpg",
        isSeeded: true
    },
    {
        name: "Majesty Palm", 
        description: "For its size, a Majesty palm, Ravenea Rivularis, is a relatively inexpensive plant with large, feathery, arching green fronds on several stems. Although a slow growing plant, in the proper indoor location, it can grow as tall as 8ft. This palm is a species of tree in the Arecaceae family, not to be confused with the Araceae  family that contains poisonous plants such as the dieffenbachia, Calla Lily, Caladium, and Anthurium.They are a challenge to take care of and are not very forgiving. Majesty Palms, native to Madagascar, do extremely well outdoors in rain forests, swamps, or in tropical areas such as Florida. In nature they can grow as tall as eighty feet. Indoors, a Majesty Palm often struggles to survive and does not do as well as a bamboo palm, neanthebella palm, kentia palm, or parlor palm.", 
        light: "A Majesty Palm needs very bright indirect light at all times. Inadequate light causes yellow fronds (leaves).", 
        water: "The soil of a Majesty Palm should be consistently moist but not soggy. Never let the soil totally dry out or allow the plant to sit in the excess water that drains out. Brown tips and fronds are telling you that the plant needs more water. Yellow leaf tips mean the plant has been over-watered.", 
        temperature: "Best temperature for a Majesty Palm is between 45°F-85°F ( 7.2°C-29.4°C). Try to keep the plant away from cold drafts or heating vents.", 
        poisonous: "A Majesty Palm is a non- poisonous plant and is not toxic to cats, dogs, or children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ravenea-rivularis-10-3-295x300.jpg",
        isSeeded: true
    },
    {
        name: "Golden Pothos", 
        description: "Golden Pothos is a common cultivar of devil's ivy that has variegated leaves which display a sharp intermingling of green and yellow hues. Like other lighter-colored, variegated Pothos cultivars, golden Pothos will require a bit of extra sunlight to maintain its handsome pattern. Even so, these plants are very low-maintenance and quite popular.", 
        light: "A marble queen pothos survives in low light but looks better and grows faster in medium to bright indirect light. When the light is too low, the white swirls on the leaves revert to green on the new growth.", 
        water: "Marble queen pothos like their soil to be kept on the dry side. During the spring and summer, water well and then allow the top 50% of the soil to dry out before watering again. During the fall and winter, let the soil get almost totally dry before watering. If in doubt, wait for the leaves to become soft and droop a little before you water. Black leaves indicate over watering while bright yellow leaves mean the plant has gotten a bit too dry before you watered.", 
        temperature: "The best temperature is between 65°F-85°F (18.3°C-29.4°C) The leaves may be damaged if the temperature drops below 55°F ( 12.8°C).", 
        poisonous: "A marble queen pothos is very poisonous with a #2 toxicity level. Pets that eat stems or leaves of the plant may exhibit vomiting, pawing at the mouth, lack of appetite, and drooling.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Epipremnum-aureum-Marble-Queen-08-2.jpg",
        isSeeded: true
    },
    {
        name: "Mimosa Pudica Plant", 
        description: "Shame plant, Mimosa pudica, or sensitive plant, is named for its unique characteristic of curling up when touched. The fernlike leaves will curl inwards when disturbed. It's purple fuzzy flowers make it an attractive houseplant, however, the plant contains alkaloids which are toxic to people and animals.", 
        light: "Sensitive Plants, Mimosa pudica, require bright light and even direct sun in the early morning.", 
        water: "Keep the soil of a Sensitive Plant moist but never soggy. A Mimosa Pudica requires less water during the winter. Sensitive Plants thrive on rain water if it is not acidic. A Sensitive Plant needs less water in the winter months.", 
        temperature: "Sensitive Plants like temperatures between 60°-85°F (16°-29°C).", 
        poisonous: "Mimosa Pudica or Sensitive Plant has a level #4 toxicity and is a very poisonous houseplant. Always wash your hands with soapy water after touching the leaves of a Mimosa pudica.", 
        image: "https://www.houseplant411.com/wp-content/uploads/800px-Mimosapudica-300x225.png",
        isSeeded: true
    },
    {
        name: "Moses in the Cradle Plant", 
        description: "Boatlily 'Sitara' has eye-catching multi-colored foliage. The top sides of its leaves are green with pink variegation and margins, with darker pink undersides. this plant is popular as a houseplant due to its interesting foliage and low care needs.", 
        light: "A Moses in the Cradle plant needs very bright light. If the plant gets less than 6-8 hours a day of bright light, the stems become leggy.", 
        water: "Before watering a Moses in the Cradle plant, allow the top few inches of soil to dry out. Keep the soil drier during the winter months, when all houseplants, not just a Moses in the Cradle plant, are not actively growing.", 
        temperature: "The ideal temperature for a Moses in the Cradle plant is 60°-85° F (16°-19°C) during the day and about 10° cooler at night.", 
        poisonous: "A Moses in the Cradle plant is a poisonous plants with a #3 toxicity level. The sap can causes severe pain if it gets in the mouth or eyes and skin irritations. A Moses in the Cradle plant is toxic to cats, dogs, and small children so please keep this colorful plant out of reach.", 
        image: "https://www.houseplant411.com/wp-content/uploads/il_1588xN.2903478742_lzsp-300x200.jpg",
        isSeeded: true
    },
    {
        name: "Natal Mahogany Plant", 
        description: "The little known Natal Mahogany plant, Trichila dregeana, is an excellent upright exotic looking houseplant that loves to be watered. The Natal Mahogany, a hardy, woody, bushy plant with dark green shiny leaves, can reach over 7 feet in height and over 4 feet in width. Although a Natal Mahogany resembles a Schefflera Amate, it's more exotic looking and much more forgiving. Interiorscapers have learned that a Natal Mahogany can grow even in moderate, low light as long as it has enough water.", 
        light: "Natal Mahogany houseplants like medium light but will even grow in lower light. These plants become leggy and thin in very low light.", 
        water: "Natal Mahogany plants thrive on water and are very forgiving when you over-water. These plants prefer their soil to be consistently moist, but not soggy, at all times. Place a saucer under a Natal Mahogany plant to hold extra water. Yellow leaves usually indicate that the plant needs more water.", 
        temperature:"A Natal Mahogany can survive temperatures as low as 45°F (7.2°C). In temperatures above 80°F (26.7°C) check the soil frequently to be sure the plant does not dry out", 
        poisonous: "The outer coating of the seeds of a Natal Mahogany plant are poisonous", 
        image: "https://www.houseplant411.com/wp-content/uploads/Trichilia-dregei-10-3.jpg",
        isSeeded: true
    },
    {
        name: "Norfolk Pine", 
        description: "In nature the Norfolk Pine can grow as tall as 200 feet (60 meters), and the trunk can be as large as 10ft (3 meters) in diameter. As a houseplant, a Norfolk Pine can be small enough to sit on a table or big enough to fill the corner of a large room with tall ceilings. When grown indoors, it rarely gets taller than 9ft. When purchasing a Norfolk Pine, try to find a plant with multiple trunks so that it will stay bushy and full season after season. The branches are arranged in a perfectly symmetrical design and the trunks grow straight up.", 
        light: "How much light for a Norfolk Pine: A Norfolk Pine requires very bright light, even some direct, morning sun. Bottom branches die and fall off when the plant doesn't get enough light. Turn the plant weekly so all parts of a Norfolk Pine are exposed to bright light and the plant grows symmetrically.", 
        water: "How to water a Norfolk Pine: Keep the soil of a Norfolk Island Pine barely moist at all times. Yellow needles indicate that the soil is either too wet or too dry. If the soil of a Norfolk Pine completely dries out, entire fronds turn gray, brittle, and fall off.", 
        temperature: "Best temperature for a Norfolk Pine: A Norfolk Pine prefers cool temperatures between 60-70°F (15.6°-21.1°C) but will survive temperatures as low as 40°F (4.4°C) for brief time. Keep the plant away from cold drafts, air conditioning vents, and heating vents.", 
        poisonous: "Although not considered poisonous, if the needles of a Norfolk Pine are ingested by pets or children, they cause severe stomach irritation. I'd recommend keeping this plant far away from children and pets especially around Christmas when things are hectic and accidents happen.", 
        image: "https://www.houseplant411.com/wp-content/uploads/il_1588xN.2109340810_osrd-1-300x300.jpg",
        isSeeded: true
    },
    {
        name: "Orchid - Cymbidium Orchid Plant", 
        description: "A Cymbidium Orchid plant, or Boat orchid, is among the most attractive, popular, and long lasting orchid plants available throughout the world.  The name Cymbidium comes from the greek word Kumbos which means cavity and refers to the shape of the base of the lip of the flower.", 
        light: "Cymbidium orchids like as much bright, indirect light as you can provide; but avoid placing them in the direct sun. Light green upright leaves indicate that your orchid plant is getting the proper amount of light. Dark green leaves mean a Cymbidium orchid needs more light. Yellow leaves are an indication that they are getting too much light.", 
        water: "The easiest way to kill Cymbidium orchid plants is by over-watering. When watering, thoroughly drench the plant, then let the excess water drain out the bottom drip holes. Allow the top 50% of the soil to dry out before watering again. You can prevent over and under-watering by checking the roots, they should be whitish- green and plump. Follow these few watering tips to prevent watering problems. Never allow orchid plants sit in water. Do not get water on the leaves or flowers. Never use water that has passed through a softener. Soil type, temperature, time of year, humidity, and pot size all influence how much water orchid plants need. The soil dries out faster in winter because of the heat and low humidity in homes and offices. Too much or too little water is the main cause of Bud Blast, orchid buds dying before they open.", 
        temperature: "Temperature is another important factor if you want indoor Cymbidium orchids to bloom. Ideal temperatures for the flower buds to set is 65°F-70°F (18.3°C-21.1°C) during the day and 10°-15° cooler at night. Temperature is especially important during the fall when orchid flowers are just starting to develop. Cymbidium plants can handle temperatures as low as 45°F (7° C), but do not do well in temperatures above 80° F (26.7°C). The higher the temperature, the more important it is to have good air movement around the plant.", 
        poisonous: "Cymbidium orchid plants are non- poisonous.", 
        image: "https://www.houseplant411.com/wp-content/uploads/oldimages/Plant_191/634643370823529821-199x300.png",
        isSeeded: true
    },
    {
        name: "Orchid - Phalaenopsis Orchid Plant", 
        description: "n nature a phalaenopsis orchid plant sends out aerial roots so it can cling to trees, so as a houseplant most of its roots are above the pot and grow outside the container. This is perfectly normal so don't cut them off.  Tall flower stalks grow out of the leaf joints and produce 3″-6″ wide, flattened flowers. The exquisite flowers grow in a line on long arching stems and can be yellow, white, pink, lavender, purple, cream, spotted, or striped.", 
        light: "There is an orchid plant for almost any lighting condition, but none like being in the direct sun. If an area is too dark, the leaves turn dark green instead of the grassy yellow green they should be and the orchid plant doesn't bloom. If there is too much light, the leaves turn yellow and develop sunspots. A location near an east or west-facing window is usually the best location. Most orchid plants prefer about 10 hours of light a day.", 
        water: "The easiest way to kill any Orchid Plant is by over-watering. Always allow the top 50% of the potting compost to dry out before watering. Check the roots of an Orchid Plant monthly to be sure they are staying whitish green and plump. Set the plant in a deep saucer of water for about 30 minutes so it can absorb water through the drip holes in the bottom on the pot. Use tepid water that has not passed through a softener (too salty). If your household water has a lot of chemicals in it, allow the water to sit out over night before using it. Type of soil, temperature, time of year, humidity, and pot size all influence an orchid plant's watering needs. Orchids dry out a little faster in the winter because of the heat in your home and low humidity.", 
        temperature: "Orchid plants do well when the temperature is 65°-80°F (18°-26° C) during the day and 15° cooler at night. In the fall, cool night temperatures help the flower spikes develop. Once the orchid buds appear try to keep the temperature constant or the buds may fall off.", 
        poisonous: "Allvarietiesof orchid plants are non poisonous and safe to have around cat, dogs, and other pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Another_Phaleonopsis_2252750743-300x200.jpg",
        isSeeded: true
    },
    {
        name: "Ornamental Pepper Plant", 
        description: "An Ornamental Pepper plant (Capsicum Annuum) originally from South America, is an attractive plant that can be as small as 6” or, if planted outside, as large as 2-3 feet. They have upright, shiny, green leaves and when bearing fruit, these plants are covered in small, vibrantly orange, red, yellow, and purple peppers. An Ornamental Pepper plant grown indoors usually bears fruit only once and is then discarded or planted outside. This is an easy care plant that bears ornamental fruit in the fall and winter. If you are interested in learning about more easy care houseplants, check out our Plant Wizard.", 
        light: "Very bright light, even full sun. Ornamental pepper plants start to reach for the light and become quite leggy if they don't get at least 6-8 hours of very bright light every day; near a south-facing window is a great location.", 
        water: "Keep the soil barely moist and water the surface of the soil evenly. Water well, until it comes out the drip holes in the bottom of the pot; then allow the top 20% of the soil to dry out before watering again. Do not allow the plant to sit in the excess water.", 
        temperature: "These plants like warm temperatures, above 75°F (23.9C) if possible. The warmer the temperature, the faster the plant grows and the fruits develop.", 
        poisonous: "An Ornamental Pepper plant is a non- poisonous plant", 
        image: "https://www.houseplant411.com/wp-content/uploads/Unknown-25.jpeg",
        isSeeded: true
    },
    {
        name: "Money Tree Plant", 
        description: "Today, a Money Tree plant is available throughout the world especially in bonsai form. A Pachira aquatica usually has a central trunk made up of three, five, or seven stems that are often braided together. Each leaf has 5-7 bright green, shiny, leathery leaflets.  When small, a Money Tree can be trained as a bonsai or used as a table plant. As the plant matures, it makes an impressive indoor tree  sometimes growing as tall as six feet or more.", 
        light: "A Money Tree plant grows best in medium to bright indirect light. This plant even does well under fluorescent lights.", 
        water: "Water well and then allow the top 1- 2“ of soil to dry out before watering again. A Pachira aquatica requires less water during the winter months when resting. Be sure to use a container with bottom drip holes to prevent over- watering and root rot. It's important to water the soil evenly.", 
        temperature: "This plant prefers temperatures between 65°-75°F (16°-24° C.)", 
        poisonous: "Money Tree plants are non- poisonous houseplants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/d6762d36543f506491f1178dc5823fae.jpg",
        isSeeded: true
    },
    {
        name: "Parlor Palm", 
        description: "A Parlor Palm, which was originally discovered growing in the rainforests of Guatemala and Southern Mexico, is the most popular indoor palm sold. It is a type of “feather palm;” other familiar feather palms are the kentia palm, the pygmy date palm, the coconut palm, and the sentry palm. A Parlor Palm can be small enough to place in a terrarium, perfect to sit on a table or desk, or as a mature plant, tall enough to be an elegant floor plant. This is a compact, bushy plant with dark green, long, graceful fronds. The fronds have a middle rib with soft, drooping leaflets coming off each side. When planted in a 10” pot, a parlor palm can grow 3-4ft. tall in three or four years and sometimes produce very small, ball like yellow flowers. Since these palms require very little care, it is the perfect plant for offices, businesses, and any area that might have less than optimal growing conditions.  Indoor palms, whether it’s an Areca Palm, a Bamboo Palm, a Kentia Palm, or a Cat Palm, come in all sizes and shapes, but they all have one very important thing in common. The only growing point on a palm is at the very end of each stem. If you cut off this growing tip, you will kill the entire the stem.", 
        light: "How much light for a Parlor Palm: This particular palm can grow slowly in low light, but prefers medium, indirect light. Avoid putting any indoor palm plant in direct sun.", 
        water: "How to water a Parlor Palm: Water well, and then allow the top 50% of the soil to dry out before watering again. The roots of a parlor palm should never totally dry out. Water less during the winter when the plant is not actively growing. Brown leaf tips often indicate over watering, while yellow fronds tell you a Parlor Palm needs a bit more water.", 
        temperature: "Best temperature for a Parlor Palm: Try to provides temperatures between 62°-82° F (16.7°-27.8°C). A Parlor Palm can briefly handle temperatures as low as 50°F (10°C) but will die in temperatures lower than 40°F (4.4°C). Avoid cold drafts.", 
        poisonous: "A Parlor Palm in a non- poisonous houseplant and is not toxic to cats, dogs, or children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Chamaedorea-elegans-14-256x232.jpg",
        isSeeded: true
    },
    {
        name: "Peace Lily Plant", 
        description: "A Peace Lily is a beautiful, indoor houseplant that grows between 1- 4ft tall. It has large, glossy, oval, dark green leaves. The leaves do not develop on stems but come directly out of the soil. What we think of as the “white flowers” are really modified leaves called spathes that surround the real, inconsequential flowers. The “flowers” start out as light green and, as they mature, turn white. These tall, impressive white “spathes” (flowers) last for several weeks.", 
        light: "How much light for a Peace Lily: These plants grow slowly in low light and more quickly in medium, or indirect bright light. Too much light causes the leaves of a Peace Lily to fade and lose their vibrant, dark green color. Too little light and flowers do not develop. Direct sunlight burns the leaves.", 
        water: "How to water a Peace Lily: Allow the top 50% of the soil to dry out before watering. If the leaves severely droop, yellow leaves develop once a Peace Lily is watered. Leaves turn a blackish brown from over- watering. Too much water, resulting in root rot, is the main reason a Peace Lily dies.", 
        temperature: "Best temperature for a Peace Lily: 65°-85°F (18.3°-29.4°C).", 
        poisonous: "A Peace Lily is a poisonous plant and dangerous to have near cats, dogs, and small children. These plants have a #2 Toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Spathiphyllum-Ceres-06-1-256x224.jpg",
        isSeeded: true
        },
        {
        name: "Pencil Cactus Plant", 
        description: "A Pencil Cactus, Euphorbia tirucalli, is not a cactus plant at all but rather a member of the euphorbia family like a Poinsettia. This unique looking plant, native to Africa and India, is also referred to as Indian Tree Spurge, Naked Lady Plant, Aveloz, Milk Bush Plant, and Petroleum Plant. The green succulent stems of a Pencil Cactus, which are about the width of a pencil, branch upwards in an almost geometrical pattern.  A Pencil Cactus grows quickly and can reach a height of 10′-15′ outdoors and up to 6′ in an indoor container.  Although this is an easy care plant that just needs bright light and a little bit of water to do well, it does have a downside. All parts of these plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. This is a very different looking plant that I wouldn’t call beautiful and lush, but it is quite a conversation piece.", 
        light: "A Pencil Cactus plant requires very bright light and can even handle direct morning sun.", 
        water: "During the spring and summer allow the top 50% of the soil to dry out before watering. In the fall & winter water once a month. Pencil Cactus are very drought resistant, so when in doubt, do not water.", 
        temperature: "Likes warm temperatures between 65°-70°F (18.3°-21.1°C) during most of the year. In the winter, when resting, a Pencil Cactus prefers cooler temperatures around 50°F (10°C).", 
        poisonous: "Pencil Cactus are very poisonous plants with a #4 toxicity level. The stems contain an irritating sap-like substance that oozes out of any cut or break in the stem. Not only should you wear gloves when working with a Pencil cactus , but you should wash your hands thoroughly with soap after removing the gloves. You don’t want to risk getting sap in your eyes or mouth.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Pencil-Cactus.jpeg",
        isSeeded: true
    },
    {
        name: "Peperomia Plant", 
        description: "Peperomia plant leaves can be thick, plump, rippled, quilted, corrugated, smooth, hairy, or shiny; and can be various shades of green, red, gray, and cream. The pattern on the leaves may be marbled, striped, or a solid color. When small, peperomia houseplants can be used in dish gardens and terrariums. Indoors, mature peperomia plants rarely grow taller than 10”-16″ and are perfect sitting on a table or desk. Though usually an upright plant, some varieties make excellent hanging plants. Peperomia plant flowers are tiny and inconsequential, growing in clusters on upright conical spikes. They get the unpleasant name “rat-tail” flowers because of their appearance.", 
        light: "Peperomia plants grow well in the bright, indirect light provided by a west or east-facing window. These plants even grow under fluorescent lights. Insufficient light causes the slow growing peperomia plant to stop growing all together. Direct sunlight burns the leaves.", 
        water: "Allow the top 50% of the soil to dry out before you water. Over-watering, resulting in root-rot, is the main cause of serious peperomia plant problems. It’s best to water these plants from the bottom. This technique keeps the leaves dry and helps prevent plant diseases. The thick leaves of peperomia plants hold water and allow the plant to withstand long periods without moisture.", 
        temperature: "Warm temperatures between 60°-80°F (15.6°-26.7°C) are best. Temperatures below 50°-55° F (10°-12.8°C) and cold drafts from windows and doors damage peperomia plant leaves.", 
        poisonous: "A Peperomia is an non- poisonous plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Peperomia-obtusifolia-06-3-251x266.jpg",
        isSeeded: true
    },  
    {
        name: "Peperomia Plant – Caperata “Emerald Ripple”", 
        description: "Peperomia Emerald Ripple, also known as Peperomia Caperata has heart-shaped, puckered, deeply veined leaves.  The leaves come in various shades of green, dark red, and gray. The flowers of all peperomia plants are tiny & inconsequential, growing in clusters on upright, conical, red colored spikes. Peperomia Emerald Ripple is a compact plant that looks good on a desk or ta able. It even does well when planted outside as long as the temperature stays above 50°-55°F (10°-12.8°C). The Emerald Ripple variety is a close relative to the Peperomia Obtusifolia or Baby Rubber plant.", 
        light: "Peperomia plants grow best in bright indirect light provided by a west or east facing, window. They also do well under florescent lights. Insufficient light causes this slow growing plant to stop growing all together. Direct sunlight burns the leaves.", 
        water: "Allow the top 50% of the soil in a peperomia plant to dry out before watering. Over-watering, causing yellow leaves and soggy stems, is the main cause of serious peperomia problems. Root-rot, which causes the plant to die, is the direct result of over–watering. Peperomia plants do well when watered from the bottom. This technique keeps water off of the leaves and helps prevent plant diseases. The thick leaves of a peperomia hold water and allow it to withstand long periods without moisture.", 
        temperature: "Warm temperatures between 60°-80°F (15.5°-26.7°C) are best. Temperatures below 50°-55°F (10°-12.8°C) and cold drafts from windows and doors damage the leaves.", 
        poisonous: "Peperomia plants are non- poisonous plants", 
        image: "https://www.houseplant411.com/wp-content/uploads/1200px-Peperomia_caperata_1-OB9-256x192.jpg",
        isSeeded: true
    },  
    {
        name: "Persian Shield Plant", 
        description: "A Persian Shield plant, sometimes called a Royal Purple plant, is a tropical, fast growing plant that loves high humidity and warm temperatures. It has dark green, iridescent leaves with metallic, light purple stripes. Originally from Myanmar (Burma) not Persia, it gets the name Persian Shield because the leaves resemble little, feudal battle shields. The pale purple flowers of a Persian Shield plant can’t compare to the beautiful leaves. This plant can be planted outdoors, but does even better as a potted, indoor plant.", 
        light: "A Persian Shield plant needs bright indirect light to maintain the vibrant colors in its leaves; but no direct afternoon sun or the leaves may be damaged. The plant becomes thin and leggy when there is not enough light.", 
        water: "Keep the soil barely moist, water when the top few inches of soil are dry. Spotting on the leaves occurs if cold water splashes on them. Water less in the fall and winter when the plant is not actively growing.", 
        temperature: "These plants like to be warm. Place them in an area where the temperature is always above 60°F (15.6°C).", 
        poisonous: "A Persian Shield plant is slightly poisonous with a #1 toxicity level", 
        image: "https://www.houseplant411.com/wp-content/uploads/la_strobilanthes_dyeriana_e_una_splendida_acantacea_delle_umide_foreste_del_myanmar-256x262.jpg",
        isSeeded: true
    },
    {
        name: "Philodendron Congo Plant", 
        description: "A Philodendron Congo is one of several cultivars of Philodendron that has been developed by growers over the last few years. This is a plant that can adapt to all kinds of conditions as long as you keep it warm. Its care instructions can be used for the following other Philodendron hybrids: Imperial Red, Black Cardinal, Moonlight, Red Emerald, and Autumn. Many philodendrons are climbers, but not this one. A Philodendron Congo is a self-header that spreads outward as it grows upward. The glossy, dark green, thick leaves are spaced very close to each other on a single stem. The stiff, barely visible stem, keeps a Philodendron Congo upright and elegant looking as it matures. These plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. This is an easy to grow plant if you don’t over- fertilize or over- water.", 
        light: "A Philodendron Congo is one of several cultivars of Philodendron that has been developed by growers over the last few years. This is a plant that can adapt to all kinds of conditions as long as you keep it warm. Its care instructions can be used for the following other Philodendron hybrids: Imperial Red, Black Cardinal, Moonlight, Red Emerald, and Autumn. Many philodendrons are climbers, but not this one. A Philodendron Congo is a self-header that spreads outward as it grows upward. The glossy, dark green, thick leaves are spaced very close to each other on a single stem. The stiff, barely visible stem, keeps a Philodendron Congo upright and elegant looking as it matures. These plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. This is an easy to grow plant if you don’t over- fertilize or over- water.", 
        water: "Always allow the top 50% of the soil to dry out before watering a Philodendron. When watering, cover the entire surface to prevent leaf problems because of dry soil areas.", 
        temperature: "Philodendron Congos grow well in normal household temperatures between 70°-85°F (21.1° 29.4°C). Keep these plants away from cold drafts and air conditioners.", 
        poisonous: "A Philodendron Congo is a poisonous houseplant with a #2 Toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-Tatei-Congo-08-4-256x160.jpg",
        isSeeded: true
    },
    {
        name: "Philodendron Heartleaf", 
        description: "There is often confusion between a heartleaf philodendron and its close cousin the pothos plant. Both plants have heart shaped leaves, but the leaves on a pothos are thicker,  and waxy. The leaves on a heartleaf philodendron are thinner and softer.The leaves of a heartleaf philodendron come in several sizes, colors, and patterns; but the most common variety has dark green, shiny, heart-shaped leaves with pointy tips. The leaf size is about 2”-4” (5cm-10cm). When the leaves first emerge, they appear bronze in color but quickly turn green. A heartleaf philodendron produces long, vining stems that easily grow 4ft (1.2m) or more. Pinching back the growing tips at the ends of the stems helps the plant become bushy and full rather than long and leggy. A heartleaf philodendron looks beautiful as a table plant, hanging in a basket, or trained to grow on a trellis or pole. An added plus is that NASA lists a heartleaf philodendron as one of the best plants for removing formaldehyde, which is found in certain paints, wooden flooring, insulation, and carpet glue, from the air.", 
        light: "How much light for a Heartleaf Philodendron: This plant can survive in low light conditions, but grows faster and produces more leaves in medium or bright indirect light. Placing a philodendron plant in the direct sun may cause the leaves to become discolored and scorched.", 
        water: "How to water a Heartleaf Philodendron: Water well and then allow the top 50% of the soil to dry out before watering again. Yellow leaves on a heartleaf philodendron indicate over-watering and brown leaves mean the plant needs more water.", 
        temperature: "Best temperature for a Heartleaf Philodendron: Warm temperatures of 70°F - 80ºF (24°C-27ºC) during the day, and night time temperatures above 55º F (13ºC).", 
        poisonous: "Best temperature for a Heartleaf Philodendron: Warm temperatures of 70°F - 80ºF (24°C-27ºC) during the day, and night time temperatures above 55º F (13ºC).", 
        image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-scandens-oxycardium-08-1-300x260-2-256x222.jpg",
        isSeeded: true
        },
        {
        name: "Philodendron Imperial Red", 
        description: "There are two main types of philodendron plants, climbers and self-headers. The heart-leaf philodendron is an example of a small climber. Without  some form of support, the stems of a climber philodendron hang down. Many climbers produce aerial roots to help them cling to poles, wall, or large trees. The other main philodendron group is the self-header. The plants in this category are much larger than climbers and have much bigger leaves. A philodendron imperial red is an example of a self-header. It has glossy, wide, bright green and red, oval-shaped leaves spaced very close together on a single stem. This barely visible stem, which is usually only seen when the older, bottom leaves of the plant fall off, keeps a Philodendron Imperial Red upright and elegant looking. This plant, when grown indoors, can easily reach a height of 2-3ft and a leaf spread of 2-3 ft.  It has stiff stems that are strong and firm enough to keep the plant growing straight up as it matures.", 
        light: "How much light does a Philodendron Imperial Red need: Although the plant survives in lower light, it grows faster and looks better when grown in medium light.", 
        water: "How to water a Philodendron Imperial Red: Allow the top 50% of the soil to dry out before watering. The soil needs to dry out more during the winter when the plant is resting.", 
        temperature: "Best temperature for a Philodendron Imperial Red: Provide warm temperatures between 70°-85°F ( 21.1°-29.4°C). Keep the temperature above 55°F (12.8°C) during the winter.", 
        poisonous: "Is a Philodendron Imperial Red poisonous: All philodendron plants, including the Imperial Red, contain calcium oxalate are very toxic plants with a #2 toxicity level. Learn more about poisonous Houseplant Toxicity levels in the Glossary of the website.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-Imperial-Red-06-256x226.jpg",
        isSeeded: true
    },
    {
        name: "Philodendron Micans", 
        description: "Although the leaf shape and growing pattern closely resembles that of the heart leaf philodendron, a Philodendron Micans does not have glossy, green leaves. This unique looking plant has velvety, heart-shaped, greenish bronze leaves with reddish- brown undersides. The leaves grow on long, graceful, vining stems. When young, a Philodendron Micans closely resembles the Philodendron Melanochrysum, but there are some major differences. A Philodendron Micans is a vining plant with draping stems while the Philodendron Melanochrysum is a climbing plant that grows upwards and needs a pole for support.  Although both plants have velvety, heart shaped leaves, the Melanochrysum, a much rarer plant, has creamy white veins.", 
        light: "How much light for a philodendron micans: A philodendron micans prefers bright, indirect light, but no direct sun. Direct sun harms the beautiful, velvety leaves. This plant can survive in lower light but grows very slowly, the leaves tend to be much smallerl, and the plant becomes leggy as it stretches towards the light.", 
        water: "How to water a philodendron micans: Like many indoor houseplants, over watering a philodendron micans and not allowing the soil to dry out a bit, is the fastest way to kill the plant. Allow the top 1/3 of the soil to dry out before watering. When you do water, water well enough so that the water drains out the drip holes in the bottom of the pot. Never allow the plant sit in the excess water. During the winter, when the plant is resting, the soil needs to dry out even more. Always remember, the soil at the bottom of the plant container is wetter than the soil at the top.", 
        temperature: "Best temperature for a philodendron micans: A philodendron micans likes warm temperatures between 65°-75ºF (18.3°-23.9ºC) during the day and above 55º F (12.8ºC) at night.", 
        poisonous: "Is a philodendron micans a poisonous plant: All philodendron plants, including the philodendron micans, contain calcium oxalate crystals and are toxic to children, cats, dogs, and other pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-micans-06-copy.jpeg",
        isSeeded: true
    },
    {
        name: "Philodendron Selloum", 
        description: "A philodendron selloum (philodendron bipinnatifidum), is native to South America but also grows on the east and gulf coasts of the United States. It has many common names such as Hope Selloum, Horsehead Philodendron, Lacy Tree Philodendron, Philodendron Hope Selloum, and Tree Philodendron, and is often confused with the philodendron xanadu. This is a non-climbing, tree philodendron that spreads outward rather than growing upward. When grown as an indoor plant, the easy-care, self-heading philodendron selloum takes up a lot of space, often spreading out 5ft. or more with dark green, shiny, deeply lobed leaves that can be 2ft-3ft (60-90cm) long. This plant does grow a trunk as it matures; however, the leaves do a very good job of hiding it.", 
        light: "How much light for a philodendron selloum: Place the plant in bright indirect light but avoid direct sun. In lower light the leaves turn a darker green. Too much light or direct sun burns the leaves and causes the deep green color to fade.", 
        water: "How to water a philodendron selloum: Unlike other philodendrons, the selloum likes moist but not soggy soil. During the winter, water less, keeping the soil barely moist.", 
        temperature: "Best temperature for a philodendron selloum: Warm temperatures above 55°F (12.8°C). Keep these plants away from cold drafts and open doors during the winter.", 
        poisonous: "Is a philodendron selloum poisonous to cats, dogs, and small children: This is is a poisonous houseplant with a level #3 toxicity. All philodendron varieties contain calcium oxalate crystals. Eating any part of the plant may cause the following symptoms: pain in the mouth, drooling (dogs & cats), and vomiting. If swelling of the lips, tongue, and airway occurs, it becomes difficult to breathe or swallow.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-selloum-10-3-256x172.jpg",
        isSeeded: true
    },
    {
        name: "Philodendron Xanadu Plant", 
        description: "The Philodendron Xanadu, sometimes referred to as Philodendron “Winterbourn”, is a large compact easy to grow plant. Each shiny, green, leathery leaf has 15-20 distinct lobes. A Philodendron Xanadu is often wider than it is tall, reaching a height of 2-4ft. and a width of 3-5ft in ideal conditions. The leaves of this beautiful, exotic looking foliage plant can be as large as 16″-18″ long and 7″-14″  wide. These plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants.  Unlike many philodendrons, like the Monstera Deliciosa, the Xanadu is an upright plant not a climber or vine. The best part is the older a Xanadu gets the better it looks.", 
        light: "A Philodendron Xanadu needs more light than other philodendron plants to maintain its compact appearance. It grows best in medium, indirect light. Too much bright light causes the leaves to become pale and bleached looking; too little light and the stems become elongated as the plant stretches towards the light. Direct sun burns the leaves.", 
        water: "Water a Xanadu thoroughly until the water drains out the drip holes in the bottom of the pot, and then allow the top 50% of the soil to dry out before watering again. Leaves turn yellow if the soil stays too wet. A Xanadu grows more slowly in the winter and requires less water.", 
        temperature: "Daytime temperatures 75° to 80°F ( 23.9°-26.7°C); nighttime temperatures 65°- 70° F (18.3°-21.1°C)", 
        poisonous: "A Philodendron Xanadu is a poisonous plant with a level #1 toxicity. Philodendrons are especially poisonous to dogs and cats.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Philodendron-Xanadu-10-256x188.jpg",
        isSeeded: true
    },
    {
        name: "Pilea Plant", 
        description: "The pilea plant, a member of the nettle family, is an attractive hanging or table plant native to China and Viet Nam. There are many different types of pilea plants, and all are easy to grow, even for a new plant enthusiast. One of the easiest to care for is the Aluminum plant (Pilea Cadierei) also called the Watermelon Pilea. This variety is grown for its attractive leaves rather than its very small, white flowers. The dark green, oval, puffy foliage has distinct, shiny, silver markings on the upper side of the leaf that look like someone splashed aluminum colored paint on it. The leaves on an Aluminum plant are usually about 3” (7.6cm) long and the height of the plant 6″ to 12″ inches (15-31 cm.). All pilea plant varieties are small, soft- stemmed plants, the tallest usually no more than 12″-18″ (30-45 cm) tall. Pilea plants need to be pruned frequently if you want them to stay full and bushy and not become leggy and bare looking.", 
        light: "How much light does a pilea plant need: A pilea plant needs bright indirect light. Direct sun burns the very attractive leaves and insufficient light causes the plant to become leggy as it stretches for more light.", 
        water: "How to water a pilea plant: Keep the soil of a pilea plant slightly moist, but not soggy at all times. During the cooler months or when your pilea plant is not producing new leaves, allow the top 2-3 inches of soil to dry out before watering.", 
        temperature: "Best temperature for a pilea plant: This plant likes to be warm all of the time. The best temperature for a pilea plant is 60°-75°F ( 18.3°-23.9°C).", 
        poisonous: "Is a pilea plant poisonous: A pilea plant is a non- poisonous plant and safe to have around children, cats, dogs, and other pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/800px-Pilea_cadierei_flower-256x178.jpg",
        isSeeded: true
    },
    {
        name: "Podocarpus Plant", 
        description: "A Podocarpus plant, also called a Buddhist Pine or Japanese Yew, is a very dense, upright, slow growing evergreen that originally came from China and Japan. It has long slender dark green leathery leaves. A Podocarpus plant grows straight up with very little side branching unless it is actively pruned. This plant is relatively simple to care for and adapts well to various conditions. It is easily trained to be a bonsai or a topiary. These plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. When planted outside in the ground a Podocarpus plant grows quite large, but when used indoors or on the porch as a potted plant, it remains a small tree or shrub.", 
        light: "A Podocarpus requires very bright indirect light. If it is not getting enough light the lower needles on the branches become large and elongated.", 
        water: "Keep the soil moist but not soggy; allow the top two inches to dry out before watering. Brown leaf tips or gray needles indicate over- watering.", 
        temperature: "Podocarpus prefer cool temperatures between 50°-75°F (10°-23.9°C).", 
        poisonous: "A Podocarpus has a level #1 toxicity if eaten. However, various parts of the plant, especially the seeds within the berries are very harmful to dogs, cats, and horses. This plant should be kept away from small children and animals.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Podocarpus-gracilior-14-PY-1.jpg",
        isSeeded: true
    },
    {
        name: "Poinsettia Plant", 
        description: "The colorful parts of a Poinsettia plant are really modified leaves called bracts. Many people mistakenly think the bracts are the flower petals of the plant. These bracts are the beautiful part of the plant, but they are not the flowers. The real flowers are quite inconsequential and are located inside the small yellow part of the poinsettia called a cyathia. There is a cyathia in the center of each group of bracts. Selecting the right poinsettia is the key to having a plant that stays colorful and beautiful the entire holiday season. Ideally there should be green leaves all the way to the soil line. The plant should be well balanced and not top heavy. The “real” tiny, yellow flowers should be barely open, and there should be no pollen on the plant.", 
        light: "Light for a poinsettia plant: A poinsettia plant needs very bright, indirect light but no direct sun from January to late September. The light from a north- facing window is not enough. If you put your poinsettia plant close to a window, be sure none of the leaves touch the glass or the cold will damage them. At the end of September, move your poinsettia to a location where it will be in total darkness for 12-15 hours a day. Keep the plant in this location until the leaves begin to to turn color in December. The light from a north- facing window is not enough. If you put your poinsettia plant close to a window, be sure none of the leaves touch the glass or the cold will damage them.", 
        water: "How to water a poinsettia plant: A poinsettia plant is a member of the Euphorbia family and like been theory side. Allow the top 50% of the soil to dry out before you water to prevent root rot. Over-watering a poinsettia causes green leaves to fall off, leaving bare stems topped by a few colorful bracts. Severe under-watering, in which a poinsettia plant badly droops, results in both green and colored leaves dropping off. Avoid getting the leaves of a poinsettia plant wet when watering; water drops cause unsightly white marks on the flowers and leaves.", 
        temperature: "Best temperature for a poinsettia plant: Temperature is a very important factor in poinsettia plant care. A poinsettia plants lasts longer and look better when the temperature is between 65°-70°F (18.3°-21.1°C) during the day and around 60°F (15.6°C) at night. Temperatures that are too hot or too cold damage leaves and may cause leaf drop. Keep a poinsettia plant away from drafty doors and windows, fireplaces, heaters, and the tops of appliances that give off heat.", 
        poisonous: "A poinsettia plant is not toxic to small children, cats, or dogs. Despite all the rumors, the plant causes minor discomfort if a few leaves are eaten. If quite a bit of the plant is ingested, some vomiting, drooling in pets, or sometimes diarrhea may be occur. It's the white, milky sap of a poinsettia plant that can cause redness, swelling, and itchiness if it gets on the skin, especially if someone is allergic to latex.", 
        image: "https://www.houseplant411.com/wp-content/uploads/0cea2ee2-8f95-452a-98de-70b839eda458-244x266.jpg",
        isSeeded: true
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
        image: "https://www.houseplant411.com/wp-content/uploads/640px-Starr_080117-1693_Hypoestes_phyllostachya.jpg",
        isSeeded: true
    },
    {
        name: "Ponytail Palm Plant", 
        description: "A Ponytail Palm is not really a palm at all, but a relative of the yucca and lily plants and a member of the agave family. This is a unique succulent; there are no two ponytail palms that are exactly alike. A Ponytail Palm has a large, swollen base that some say resembles an elephant’s foot. The thin trunk is topped with flat, dark green, grass-like leaves. The leaves are about an inch wide and often five to six ft. long;  the edges can be quite sharp. A Ponytail Palm, sometimes referred to as a Bottle Palm or Elephant’s Foot Palm, is a slow growing, very different looking plant that thrives on neglect. Put this plant in bright light, water sparingly, and watch it grow.", 
        light: "A Ponytail Palm grows best in very bright indirect light or full sun. In proper growing conditions, it can reach a height of up to 8ft.", 
        water: "Over- watering is about the only way to kill a Ponytail Palm. Allow the top 50-70% of the soil to dry out before watering. During the warm months you may need to water every 7-14 days; in winter, only every three or four weeks. A Ponytail Palm stores water in its base and is very drought resistant. These plants can get brown leaf dips when they are over or under watered. However, when in doubt, do not water!", 
        temperature: "Ponytail Palms like warm temperatures above 60°F (15.6°C). They can survive lower temperatures, but don't grow as well. These plants, unlike other exotic tropical houseplants, like dry hot heat.", 
        poisonous: "A Ponytail Palm is a non- poisonous plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Pont-Tail-Palm.jpeg",
        isSeeded: true
    },
    {
        name: "Pothos Plant", 
        description: "A pothos plant is a highly adaptable, glossy-leafed plant with leathery, pointed, heart-shaped leaves. When growing outdoors, the leaves of a pothos plant can be as large as 10”-12” (25cm-30cm). Indoors, the leaves are much smaller, usually ranging in size from 4”-6” (10cm-15cm). The solid green pothos is often confused with a heart-leaf philodendron. A pothos plant produces long, vines and looks wonderful in a hanging basket. You can also attach the stems to a moss or styrofoam pole and have a tall, upright plant.", 
        light: "How much light for a pothos plant: A Green Jade pothos with solid green leaves does well in low light. A Golden Pothos with yellow and green patterned leaves likes medium light. The Marble Queen pothos with green and white variegated leaves grows best in medium to bright indirect light. The lighter the colors in the leaves of a pothos plant, the more light the plant requires.", 
        water: "How to water a Pothos plant: Water well and then allow the top 50% of the soil to dry out before watering again. Over-watering is the main reason a pothos plant dies. Bright yellow leaves indicate that the soil has dried out a bit too much before you watered it. Leaves turn pale yellow and get black marks when a pothos plant is over- watered. Over watering a pothos plant also causes new growth to turn black.", 
        temperature: "Best temperature for a Pothos plant: grows well in temperatures between 55°F - 80°F (12.8°C - 26.7°C). If temperatures drop below 45°F (7.2°C), a pothos plant stops growing and the leaves turn black.", 
        poisonous: "Pothos plants are poisonous plants with a level #2 toxicity, and is toxic to dogs, cats, and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Epipremnum-aureum-06-6-256x180.jpg",
        isSeeded: true
    },
    {
        name: "Prayer Plant", 
        description: "The large leaves of a prayer plant have colorful veins and bright patterns in red, green, brown, and cream. The flowers, however, are small and insignificant. The patches of color in the leaves get darker and more vibrant as the plant matures. A prayer plant is a short, spreading plant that is usually about 8″ to 12″ (20-25cm) tall and 12″ to 20″ (30-50cm) wide. The broad, oval, paddle shaped leaves are 5″ to 7″ (13-18cm) long.", 
        light: "How much light does a prayer plant need: Provide medium to high light, but avoid putting a prayer plant in the direct sun. When there is not enough light, the leaves close at night and do not fully open during the day. When there is too much light or direct sun, the color in the leaves fade.", 
        water: "How much water for a prayer plant: Keep the soil barely moist but never soggy at all times. Unlike most houseplants, a prayer plant does not like to have the soil dry out before you water. Water less in the winter when the plant is resting.", 
        temperature: "Best temperature for a prayer plant: Provide warm temperatures between 60°-80°F (15.6°-26.7°C). Low temperatures and cold drafts damage the leaves.", 
        poisonous: "A prayer plant is a non- poisonous houseplant and is safe to have around cats, dogs, and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Maranta-leuconeura-kerchoveana-06-2-256x184.jpg",
        isSeeded: true
    },
    {
        name: "Purple Velvet Plant", 
        description: "Outdoors a Purple Velvet plant (Gynura, a very unique plant that originated in Indonesia, is a woody perennial that can often grow up to 4 ft. wide and 2-3ft in height. Indoors this plant, also called a Purple Passion plant or a Velvet  plant, makes a very attractive trailing plant that can sit on a table or be placed in a hanging basket. Although the appearance of the plant may start to deteriorate after a few years, it’s very easy to propagate plant.", 
        light: "A Purple Velvet plant needs bright indirect light. The intense purple color in the leaves starts to fade when the plant is not getting enough light.", 
        water: "Always allow the top 25% of the soil to dry out before watering. A Purple Velvet plant has fragile roots and is very susceptible to root rot, so be very careful not to over-water. Reduce your watering in the spring and fall when a Purple Velvet Plant is not actively growing. Try to keep the foliage dry and do not mist this plant.", 
        temperature: "Temperatures between 65°-85°F (18.3°-29.4°C) are best.", 
        poisonous: "There are different opinions as to whether or not this plant is a poisonous houseplant. While it is often listed as a non- poisonous plant, I would recommend that it still be kept away from pets and small children. It has also been noted that some people have an allergic reaction from just touching the plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/5adfc3-768x1024.jpg",
        isSeeded: true
    },
    {
        name: "Purple Waffle Plant", 
        description: "A Purple Waffle plant, also called Metal Leaf plant, Waffle plant, Red Flame Ivy, and Red Ivy originated in the jungles of Java. The plant gets its name because of the”puckered” appearance of its leaves. A Purple Waffle plant, Hemigraphis alternata, only grows about 6”-8” tall but can produce stems 12” to 24” long and looks great in a hanging basket. This is a very pretty plant with shiny, dark green leaves that have a purple underside. Waffle plants are easy to care for and a perfect plant for beginners.", 
        light: "Provide medium to bright indirect light but no direct sun. The leaf edges turn brown and curl and the colors in the leaves bleach out if the light is too strong. When there is not enough light, the vibrant colors in the leaves of a Purple Waffle plant start to fade.", 
        water: "Keep the soil barely moist but not soggy, at all times. Water less during the winter when the plant is growing slowly.", 
        temperature: "Waffle plants likes warm temperatures between 55°F-75°F (12.8°C–23.9°C). Temperatures below 50°F (10°C) may damage the leaves.", 
        poisonous: "Non- poisonous to humans and pets", 
        image: "https://www.houseplant411.com/wp-content/uploads/Waffle-Plant.jpeg",
        isSeeded: true
    },
    {
        name: "Pygmy Date Palm", 
        description: "The Dwarf Pygmy Date palm, Phoenix roebelenii, originated underneath the canopy of dense tropical forests in Africa and Asia. This helps explain why this plant does so well in the indirect light found in homes and offices. The Pygmy Date palm grows very slowly, reaching a maximum height indoors of 4-5 ft. (1-2 meters). This palm produces arching, graceful fronds about 3ft. or .9 meters in length with delicate leaflets on them. These fronds develop off of a stately central trunk. Like most palms, the Dwarf Date palm is an excellent clean air plant.", 
        light: "An indoor date palm does well in bright indirect light, but can survive in medium filtered light; be careful not to over-water in lower light. Place a Phoenix roebelenii near an east or south facing window.", 
        water: "Keep the soil of a Pygmy Date Palm moist but never soggy during most of the year. In winter, allow the soil to dry out before watering. The fronds of a Dwarf Date Palm turn brown from too much water or from hard water.", 
        temperature: "The ideal temperature for Pygmy Date Palms is 50-75°F (16-24°C). A Phoenix Roebelenii does not do well when temperature go below 50°F (10°C).", 
        poisonous: "Phoenix Roebelenii are non- poisonous houseplants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Phoenix-roebelenii-17-249x235.jpg",
        isSeeded: true
    },
    {
        name: "Rabbit’s Foot Fern", 
        description: "The lacy, leathery, medium green, arching fronds of a Rabbit’s Foot Fern have an almost bluish tinge. This upright, airy looking plant is about 16”-18” tall and 18”-20” wide. As the plant matures it develops furry, rhizomes (fleshy roots) that grow on the surface of the soil and cling to the edges of the pot. These rhizomes, which do not like to be buried in the soil, are covered with brown hairs that make them resemble the feet of a rabbit. The large, triangular shaped fronds grow  out of the rhizomes. If you like the look of a Rabbit’s Foot fern you might want to check out some of its close “footed fern” cousins such as the Hare’s Foot fern, the Squirrel’s Foot fern, the White Rabbit’s Foot fern, and the Bear’s Foot Fern.", 
        light: "How much light for a Rabbit's Foot Fern: Prefers the medium light provided by a north or east- facing window. Avoid south and west- facing windows because the intense sun will burn the fronds and the heat will cause the soil to dry out too quickly.", 
        water: "How to water a Rabbit's Foot fern: This fern likes to be a little drier than most other indoor ferns. Wait until the top 25% of the soil has dried out before watering.", 
        temperature: "What's the best temperature for a Rabbit's Foot fern: Temperatures between 65°-75°F (18.3°- 23.9°C) during the day and 10° cooler at night help a Rabbit's Foot fern grow better.", 
        poisonous: "A Rabbit’s Foot Fern is a non- poisonous houseplant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Davallia-trichomannoides-06-copy-1-256x190.jpg",
        isSeeded: true
    },
    {
        name: "Rhapis Palm", 
        description: "A Lady Palm or Rhapis Palm is an elegant durable plant that can adapt to almost all conditions. The best variety to use as a houseplant is the Rhapis Excelsa. This slow growing palm has large, shiny, dark green fronds with blunt tips. The fronds of a Lady Palm grow out of multiple sturdy stems that are covered in a hairy brown fiber. When potted in a 6” or 8” container, this compact upright palm makes a great table plant. In a 10” or larger pot, a Lady Palm can grow up to 14 ft. tall. A Rhapis Palm is quite pricey but well worth it when you consider that it is a slow grower, has a long life span, demands little in the way of care, is a beautiful addition to any decor, and it cleans the air of harmful chemicals.", 
        light: "A Rhapis Palm grows best in bright indirect light but can adapt to lower light.", 
        water: "Allow the top 50% of the soil of a Rhapis Palm to dry out before watering. A Rhapis, like many palms, is sensitive to chlorine, fluoride, and boron in the water. If these chemicals are present allow the water to sit for 24-48 hours before using it or use distilled water. Consistent over-watering causes root rot.", 
        temperature: "The Rhapis Palm can adapt to temperatures between 50°and 80° F. (10°-26.7°C) so it is well-suited to any home or office.", 
        poisonous: "Lady Palms are non-toxic plants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Rhapis-excelsa-10-261x300.jpg",
        isSeeded: true
    },
    {
        name: "Rose Bush Plant", 
        description: "Miniature Rose bush plants, beautiful little hybrid plants that trace their parents back to China, usually appear in stores around Valentine’s Day and Mother’s Day. These indoor houseplant rose bushes  look lovely when first purchased but are difficult to keep indoors on a permanent basis. Enjoy your rose bush plant in your home and then plant it outside as soon as the weather permits. A miniature rose bush plant grows much better outdoors in the fresh air and bright light. This plant produces small 1”-2” (2.5-5cm) flowers in red, yellow, pink, white, peach, and orange. Since a miniature rose is a hybrid of the regular rose, it requires the same type of care and attention as a regular Rose Bush plant.", 
        light: "A miniature rose bush plant needs very bright light. If you don’t have a place in your home where the plant can get several hours of direct sun, move the rose bush outdoors into the sun for a few hours each day once the danger of a frost is over. When there is not enough light, rose bushes don’t bloom, the stems start to stretch to the light, and leaves are far apart.", 
        water: "A miniature rose bush requires a great deal of water, especially when it is flowering. Since these plants are usually purchased in small pots, be sure to check the soil every few days. Allow the top 1” (2.5cm) of soil to dry out before watering. During the winter, when a miniature rose bush plant is resting, keep the soil barely moist. Be careful not to get water on the leaves; wet leaves often cause a fungus called Black Spot to develop.", 
        temperature: "Miniature rose bush plants do well in temperatures between 60°-75°F (16°-24°C). These plants are very susceptible to frost damage.", 
        poisonous: "Miniature rose bush plants are non- poisonous plants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/82f981f441dff5e83462c48c41935aae-267x300.jpg",
        isSeeded: true
    },
    {
        name: "Sago Palm", 
        description: "A Sago Palm has a very rugged trunk 1”- 12” (2.54cm – 30.50cm)  in width depending upon the age of the plant. The trunk is topped with stiff, somewhat narrow, long, arching fronds that grow in a circular or rosette pattern. Be careful to avoid being stuck by the sharp, needle-like tips of the fronds. This is a very elegant, slow growing plant and often produces only one new frond per year. Although outdoors a Sago palm can reach a height of 6ft. (1.8 m), indoors a mature Sago palm, after five or six years, is still only about 2ft – 3ft tall (.6m-.9m).", 
        light: "How much light for a Sago palm: A Sago palm needs bright light with a little direct sun in the morning. Direct afternoon sun burns the leaves. Give a Sago palm a ¼ turn each week to keep it from growing toward the light. In bright light a Sago palm produces short thick fronds, in lower light the fronds are long and narrow.", 
        water: "How to water a Sago palm: A Sago palm is fairly drought resistant plant. It is more harmful to the plant to over water and cause root rot than to under water. Allow the top 75% of the soil to dry out before thoroughly watering a Sago Palm. Be sure the water comes out the drip holes in the bottom of the pot, but do not allow the plant to sit in the excess water. Water sparingly in the winter when there is less light and cooler temperatures. Be careful to never get water in the crown of a Sago palm, this can cause crown rot disease and the eventual death of the plant. Sago palms should never be allowed to totally dry out.", 
        temperature: "Best temperature for a Sago palm: Sago palms prefer warm temperatures between 60°-75° F (16°-24° C). They still survive in temperatures as low 45° F (7.2°C) but do not grow at all. Avoid putting a Sago palm near heaters, air conditioners, or cold drafts. These plants do not like severe temperature fluctuations.", 
        poisonous: "Is a Sago palm a poisonous plant: A Sago palm is a very poisonous houseplant with a #4 level toxicity. All parts are poisonous, especially the seeds. Keep a Sago palm out of the reach of children, dogs, and especially cats who love to play with the fronds of the plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Cycas-revoluta-17-4-256x200.jpg",
        isSeeded: true
    },
    {
        name: "Sansevieria Plant", 
        description: "A Sansevieria plant, also called a Snake plant, Mother in Law’s Tongue, Bowstring Hemp, and Devil’s Tongue, was originally found growing in Africa and southern Asia. This is a hardy, almost impossible to kill houseplant that thrives on neglect.  Sansevieria plants can grow in bright light or shade, are not harmed by low humidity or cold drafts, rarely need to be repotted, and are drought resistant. The only way to kill a sansevieria is by over watering or keeping it in temperatures 40°F ( 4.4°C) or less for aa extended period of time", 
        light: "How much light does a sansevieria need: This plant can be placed anywhere in a room, from the darkest corner to the brightest window. The better the light, the faster a sansevieria plant grows. The more coloration in the leaves, the more light the plant needs.", 
        water: "How to water a sansevieria plant: Over-watering is the main reason a sansevieria plant dies. Allow the soil to practically dry out before you water. During the winter, in a low light area, a sansevieria plant may need water only once every month or two.", 
        temperature: "Best temperature for a sansevieria plant: Sansevierias grow well in warm temperatures between 60°F (15.5°C) and 85° F (29°C)", 
        poisonous: "Is a sansevieria plant poisonous: A sansevieria is a mildly poisonous plant with a #1 level toxicity. It is toxic to dogs, cats, and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Sansevieria-trifasciata-Laurentii-14-copy.jpg",
        isSeeded: true
    },
    {
        name: "Schefflera Plant", 
        description: "A Schefflera plant, native to Australia, New Zealand, and the Pacific Islands, is often called an Umbrella Tree because of its large, shiny, dark green leaflets that drape down like the spokes of an umbrella. In nature, the plant can be a tall tree or a short bush with woody stems, growing as tall as 10-50 ft. In some outdoor areas, a Schefflera is called an Octopus Tree because it produces impressive, tentacle like flowers.", 
        light: "A Schefflera does well in medium light, but grows faster and develops more leaves in bright, indirect light. The Schefflera Amate variety needs less light than a regular Schefflera plant.", 
        water: "Allow the top 25-30% of the soil to dry out before watering. Green leaves drop off and new growth turns black when a Schefflera is over-watered. Yellow leaves indicate the plant needs more water.", 
        temperature: "A Schefflera prefers temperatures between 65°-80°F ( 18.3°-26.7°C). They do not do well in temperatures below 55°F (12.8°C). Keep the plant away from cold drafts and heaters.", 
        poisonous: "A Schefflera plant is a slightly poisonous houseplant with a level #1 toxicity. It is toxic to cats, dogs, and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Schefflera-actinophylla-Amate-10-4-239x266.jpg",
        isSeeded: true
    },
    {
        name: "Selaginella Plant", 
        description: "There are about 700 varieties of a  Selaginella plant which are often referred to as Spike Moss or Arborvitae Ferns. Selaginella plants are very diverse in their size and in the manner in which they grow. Many types of a Selaginella plant can be found growing wild in tropical America, Asia, China, Japan, North America, Mexico, South Africa and Australia. A Selaginella plant, depending upon the variety, may be a creeping, climbing, or trailing plant. Selaginella kraussiana, which is also called Spreading Club Moss or Trailing Moss, grows about ½ inch high and has a limitless spread. S. kraussiana has very small bright green leaves that overlap on trailing jointed stems. Selanginella martensii is a small bushy plant that grows about 7-9” tall and just as wide. S. martensii has thick, multi-branched stems filled with small green leaves. When S. lepidophylla, a native of desert and semi-desert regions, doesn’t get enough water, the leaves roll into tight brown balls (a phenomenon known as cespitose) and the plant becomes totally dormant. Once this Selaginella  gets some moisture, the leaves open up, turn green, and the plant starts to grow again. This is why the  Selaginella lepidophyllagets is called the “Resurrection Plant.”  Keep an eye out for mealybugs and spider mites that can hide in the leaves.", 
        light: "Light requirements depend upon the variety of Selaginella. bright indirect light indoors, partial shade outdoors is usually a good idea for most Selaginella varieties.", 
        water: "Keep the soil moist but never soggy and avoid using cold water. A Selaginella plant becomes totally dormant and the leaves roll into tight little brown balls when there is no moisture. Once the Selaginella is watered, it turns green and starts to grow again.", 
        temperature: "Best temperature 50°-75°F (10°-24°C ). Some types of Selaginella plants can handle temperatures as low as 40°F (4.4°C)", 
        poisonous: "A Selaginella is a non-poisonous houseplant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Selaginella-sp2-256x215.jpg",
        isSeeded: true
    },
    {
        name: "Shamrock Plant", 
        description: "A Shamrock plant is a small, bulb plant approximately 5”-7” tall. The thin leaves are usually divided into three leaflets, though some varieties may have four or more leaflets, and resemble clover. The leaflets exhibit “sleep movements” which means they spread open in the light and close up when it gets dark. When placed in bright, indirect light, Shamrock plants produce delicate, colorful flowers.", 
        light: "Shamrock plants need bright indirect light to grow well and produce flowers. They often bloom all winter if kept in a well-lit spot. The leaves of a Shamrock plant fold up at night and re-open when light returns.", 
        water: "Keep the soil barely moist but never soggy and allow the top 2” of soil to dry out before watering. It’s best to water a shamrock plant from the bottom so the thin fragile stems of the plant don’t get water logged and the soil stays loose.", 
        temperature: "Shamrock plants grow best in cool temperatures between 60°-70°F (15.6°-21.1°C) during the day and 55°-65°F (12.8°-18.3°C) at night.", 
        poisonous: "Shamrock plants are slightly poisonous if eaten in very large quantities with a #1 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/51eGtvCekML._AC_-256x256.jpg",
        isSeeded: true
    },
    {
        name: "Spider Plant", 
        description: "The plant produces grassy-looking, narrow leaves about 8”-10” long and less than 1” wide directly from the center of the plant. When kept root-bound, a spider plant sends out numerous long runners (stems) that produce small, delicate, star- shaped, white flowers. Once the flowers die, baby plants (plantlets) develop and can be easily used for propagation. A spider plant can also be propagated by dividing the fleshy, tuberous, plant roots.", 
        light: "How much light for a spider plant: A spider plant likes medium to bright indirect light. Solid green plants need less light than green and white varieties. No spider plant should ever be put in the direct sun.", 
        water: "How to water spider plant: How you water is a very important part of how to care for a spider plant. Allow the top 50% of the soil to dry out before you water. A good way to tell when the plant needs water is to look at the leaves. The green color starts to fade when the soil is dry. Using water with a high salt or chemical content (fluorine or chlorine) causes brown leaf tips. Never use water that had passed through a water softener; it is much too salty.", 
        temperature: "Best temperature for a spider plant: These plants grows best when the temperature is between 65°- 75°F.  (18°-23° C. ). They will survive in temperatures as low as low as 45°F (7.4°C) without damage, but the plant will not grow very much.", 
        poisonous: "A spider plant is not toxic to dogs, cats, and other pets and is not poisonous to small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Chlorophytum-comosum-08-8-256x171.jpg",
        isSeeded: true
    },
    {
        name: "Split Leaf Philodendron Plant", 
        description: `A Split Leaf philodendron, sometimes called a Lacy Tree philodendron or Horsehead philodendron, is a very large, popular, easy- care houseplant. These plants have big, glossy, leathery, heart- shaped leaves that, as the plant matures, split from the leaf edge to the center vein. The slits in the leaves of a Split Leaf philodendron are called cuts. When young, a Split Leaf philodendron plant has strong upright stems. As the plant grows larger and the leaves get bigger and heavier, the philodendron stems start to droop down until they are almost horizontal to the ground. A Split Leaf philodendron grows rapidly indoors, especially if the humidity is high, and often has leaves that are as large as 3ft. long and 2ft. wide.  When grown as a houseplant, it takes about 15–20 years for a Split Leaf philodendron plant to produce flowers. Eventually, an indoor Split leaf philodendron plant grows to be about twice as wide as it is tall and takes up quite a bit of space in your home or office.`, 
        light: "A Split leaf philodendron needs medium to bright light. It can survive in lower light, but the leaves won't split and the plant becomes leggy. Keep it out of the direct sun.", 
        water: "Water a Split leaf philodendron well, until the water drains out the drip holes in the bottom of the pot. Allow the top 25-30% of the soil to dry out before watering again. Keep the soil of a Split leaf philodendron damp but never soggy. Water droplets or perspiration on the leaves of a Split leaf philodendron indicate over-watering; brown leaf edges indicate under- watering.", 
        temperature: "A Split leaf philodendron plant prefers warm temperatures and doesn't do well in temperatures below 50°F (10°C) .", 
        poisonous: "A Split leaf philodendron is very poisonous houseplants with a #2 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/philodendron-768x1024.jpg",
        isSeeded: true
    },
    {
        name: "Staghorn Fern", 
        description: `A staghorn fern, also called an elkhorn fern, is native to the rain forests of Queensland Australia where it’s found growing on rocks and on the sides of trees. Staghorn ferns are unique looking plants and do not resemble any other fern plants. The large, spectacular, thick, outer leaves (“antler fronds”) grow out of the center of the plant and are shaped like elk or moose antlers. These leaves are covered in fine hairs that make them feel a little furry and give a staghorn fern a gray or silver look. The other very different looking leaf at the bottom of a staghorn fern is a brown, cup-shaped leaf (shield frond) that in nature captures nutrients that the plant needs. Outdoors, this frond also helps a staghorn fern cling to rocks and trees. Indoors this cup shaped frond helps a staghorn fern cling to the sides of the container in which it’s planted. Although a staghorn fern can be grown in a pot like any other houseplant, it looks best when mounted on a hard surface like a decorative board and hung on the wall. The bottom frond helps a staghorn fern cling to the decorative board.
        Although there are many different species of staghorn ferns, the most popular one used as a houseplant is the Platycerium bifurcatum variety. A staghorn fern is not a good plant for someone who wants a forgiving, green friend that can put up with being ignored or not cared for properly. This plant must be in an area that gets bright, indirect light and you can substitute artificial light. How you water your staghorn fern is very important because over and under watering are the main reasons a staghorn fern dies. Since staghorn ferns are often mounted on boards, the usual ways of watering potted plants won’t work. You’ll need to soak the fern in a sink of water for 10-20 minutes or mist all parts of the plant (undersides of the fronds especially). Follow the care tips below and you will have a staghorn fern, when mounted, looks like a piece of art.`, 
        light: "A Staghorn fern grows best in bright, indirect light but no direct sun.", 
        water: "How you water a staghorn fern determines if the plant lives or dies! Check the center of a Staghorn Fern for moisture. When the top 50% of the soil at the center is dry, submerge the entire plant, pot, piece of bark, or basket in a sink of lukewarm water for 10-20 minutes. Green fronds fall off a staghorn fern from over-watering. Keep the soil dryer during the winter. You can also thoroughly mist ALL parts of the plant with a fine spray if you don't want to try the soaking method.", 
        temperature: "Temperature for a staghorn fern should be 65°-80°F (18.3°-26.7°C)", 
        poisonous: "A Staghorn Fern is non- poisonous plant and is not toxic to cats, dogs, or humans.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Staghorn-Fern-copy-1-256x112.jpg",
        isSeeded: true
    },
    {
        name: "Strawberry Begonia Plant", 
        description: "The Strawberry Begonia plant, or Strawberry Geranium as it is sometimes called, is neither a begonia nor a geranium, but rather a member of the Saxifrage family. It does have bluish-green, fuzzy leaves like those of a begonia and it does spread by sending out “stolen” or “runners” like a strawberry plant; but a Strawberry Begonia is really an evergreen native to Asia and a close relative of the Piggyback plant. A Strawberry Begonia produces a lovely, white flower with pointed petals and a bright, yellow center. Like a strawberry plant, new babies develop at the ends of each of the “stolen.” Indoors or on your porch a Strawberry Begonia makes a beautiful hanging plant. Outdoors it can also be an excellent ground cover in your garden.", 
        light: "Place a Strawberry Begonia in bright indirect light. Direct sun burns a Strawberry Begonia Plant and puts holes in the leaves.", 
        water: "If the top 2”- 3” of soil in the Strawberry Begonia Plant are still moist, do not water. When the top few inches dry out, water a Strawberry Begonia until water comes out the bottom drip holes. A Strawberry Begonia Plant needs less water in the fall and winter when it is resting. Always water a Strawberry Begonia from the bottom so no water collects on the hairs of the leaves.", 
        temperature: "Strawberry Begonias like cool temperatures and do not thrive when it is too hot. They prefer temperatures between 40-65 degrees(F).", 
        poisonous: "A Strawberry Begonia is a non- poisonous houseplant. It is not in the same family as 'real' begonias (which are ALL poisonous).", 
        image: "https://www.houseplant411.com/wp-content/uploads/oldimages/Plant_186/634643396560761551-256x180.png",
        isSeeded: true
    },
    {
        name: "Stromanthe Plant", 
        description: "As a houseplant, the upright Stromanthe is usually about 2′-3′ (.6m -.9m) tall and produces long, elliptical-shaped, multi-colored, glossy leaves about 6″-12″ (15.2cm -30.5cm) long. The topside of the leaves are a combination of green, cream, white, and pink. No matter what the variety, the underside of the leaves is always a vibrant pinkish-red- color. The leaves of a Stromanthe lean in the direction of the light source as it moves across a room throughout the day. Once night arrives and it’s dark, the leaves fold up and open again as the light returns the next morning. When grown indoors, a Stromanthe may produce tiny white flowers surrounded by bright red bracts during late winter or early spring. The flowers are only about ½” (1.2cm) but the bracts surrounding them can be  2”-3” (5cm-7.5cm) wide. The flowers can’t compete with the plants’ beautiful leaves.", 
        light: "Place a Stromanthe plant in bright indirect light but no direct sun; a north or east facing window is best.", 
        water: "A Stromanthe likes to be kept barely moist at all times. Be careful not to over-water or the roots rot and the plant dies. In winter, allow the soil of a Stromanthe to dry out a little more, but never completely.", 
        temperature: "Stromanthe plants prefer warm temperatures between 65°F and 80°F (18.3°C-26.7°C) during the day and 5° cooler at night. Avoid cold or hot drafts.", 
        poisonous: "A Stromanthe is considered to be a non-toxic plant and safe to have around pets and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/strstr_grande-256x256.jpg",
        isSeeded: true
    },
    {
        name: "Swedish Ivy Plant", 
        description: "Swedish Ivies are lush, almost succulent – like plants with long, trailing, thick stems. The 1”-1.5” leaves are rounded with scalloped edges. The thick, bright green leaves are shaped more like a coleus leaf than an ivy leaf. When given enough bright light, a Swedish Ivy produces delicate, white, lavender, or purple tubular-shaped flowers throughout the year. Some varieties even have a special aroma when touched.", 
        light: "A Swedish Ivy requires bright indirect light, but no direct sun. Inadequate light causes a Swedish Ivy to 'reach' for the light and become leggy.", 
        water: "Allow the top 30% of the soil to dry out before watering a Swedish Ivy. The easiest way to kill a Swedish Ivy is by over-watering and causing root rot. Yellow leaves indicate the plant is over-watered. The leaves become soft and dull green when a Swedish Ivy needs water.", 
        temperature: "Provide temperatures between 70°-75°F (21.1°-23.9°C) most of the year for a Swedish Ivy. During the winter, when the plant is not actively growing, cooler temperatures of 60°-65°F (15.6°-23.9°C) are best.", 
        poisonous: "A Swedish Ivy is a non- poisonous plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/swedish-ivy-1.jpg",
        isSeeded: true
    },
    {
        name: "Wandering Jew Plant", 
        description: "The wandering jew plant group is made up of several different varieties. Most have long vines of 2″-4″ oval or heart shaped leaves. Leaf color depends upon the exact type and can be solid green, green with a purple stripe, green with a white or yellow stripe, green with splashes of pink, purple, and cream, or solid purple. The back of the leaf may also be purple. Some wandering jew plants have hairy leaves and some with a silver shine to them. The wandering jew plant produces small flowers in white, pink, purple, or magenta.", 
        light: "How much light does a Wandering Jew plant need: bright indirect light helps the plant produce colorful leaves and flowers. Direct sun causes the color in the leaves to fade.", 
        water: 'How to water a Wandering Jew plant: Water well and then allow the top 2" to 3" of soil dry out before watering again. If the soil is very dry and the plant is sitting in bright light, the leaves become stunted and lose color. Lack of water can also cause brown and crispy leaves on a Wandering Jew plant. This usually problem affects to older growth first. Over watering is more serious, resulting in root rot.', 
        temperature: "Best temperature for a Wandering Jew plant: Try to maintain temperatures between 60°- 80°F (15.6°- 26.7°C).", 
        poisonous: "A Wandering Jew plant is slightly poisonous with a level #1 toxicity. It is toxic to dogs, cats, and small children. The sap of the plant is caustic and may cause skin irritations or a rash. It is, however, considered safe to put into bird or reptile enclosures.", 
        image: "https://www.houseplant411.com/wp-content/uploads/e452b4f7f94c670d77f0c8a1a9afbb32-256x256.jpg",
        isSeeded: true
    },
    {
        name: "Yucca Plant", 
        description: "The spineless Yucca plant, a native of Guatemala and southeast Mexico, is an ideal, easy care houseplant. Yucca plants can be a bush or a stalk plant.  The long, leathery, sharply pointed leaves of a Yucca plant are a foot or more in length and about an inch wide.  Yucca plants are very top heavy and should always be set into a heavy clay or ceramic pot to prevent them from toppling over. A Yucca plant is poisonous and should be kept away from small children and pets. Read more about common houseplants that can be dangerous in my book Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. A Yucca is the type of plant that complements a Southwestern look in your home or office.", 
        light: "Yucca plants grow best in bright indirect light. A Yucca can survive indoors in lower light but will need very little water. The slow growing yucca will be even slower to produce new leaves in low to medium light. An ideal location is near a west, east, or south-facing window.", 
        water: "A Yucca plant originates in the deserts of Mexico and Guatemala so it likes to be kept dry. Allow at least the top 50% of the soil of a to dry out before watering. Over watering is the main and probably the only way to kill a yucca.", 
        temperature: "A yucca can adapt to temperatures as low as 35° and as high as 90°.", 
        poisonous: "Yucca plants are slightly poisonous with a #1 toxicity level. The poisonous part of the plant is difficult to reach, but a persistent child or pet might be able to get through the tough exterior and eat it.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Yucca-elephantipes-14-5432.jpg",
        isSeeded: true
    },
    {
        name: "Zamioculcas Zamiifolia-ZZ Plant", 
        description: `A ZZ plant, Zamioculcas zamiifolia, has many names around the world: Eternity Plant, Emerald Palm, Zanzibar Gem, ZuZu Plant, and Aroid Palm. It was originally found growing as an outdoor, flowering plant in eastern Africa but can now be found growing in tropical areas around the world. It was a Dutch nursery in Africa that realized a ZZ plant would be a perfect houseplant and started to propagate and sell it world wide. A ZZ plant is a member of the Araceae family and a close relative of the dieffenbachia, anthurium, philodendron monstera, and caladium.
        The unique looking, almost impossible to kill ZZ plant, is a slow growing, upright succulent plant that burst onto the houseplant market in the 1990’s. It became an immediate hit with indoor plant lovers because it grew almost anywhere and was tolerant of all types of care, except being over watered. What we call the the stems of a ZZ plant really the leaves of the plant. These long, thick “stems,” (15″-20″ tall) are covered in hundreds of small, plump, shiny green, leathery leaflets (not leaves) that are about 2″-3″ long. During the summer and early fall the plant may produce small flowers hidden inside a 2″-3″ dark yellow or bronze colored spadex; flowering usually occurs when a ZZ plant is grown outdoors. The roots of the plant are fat rhizomes, underground horizontal stems, that store water and enable a ZZ plant to be drought resistant. In a lowlight, cool area, a ZZ plant can sometimes go three or four months without being watered; it simply uses the water that has been stored in the rhizomes to survive.`, 
        light: "How much light does a ZZ plant need: These plants can survive in low light, but grow faster in bright, indirect light. Since a ZZ plant is a slow grower even in good light, in low light they rarely produces new leaves. Direct sun will fade and burn the leaves. Stems on a ZZ plant droop when there is not enough light and grow straight up when light is coming from above.", 
        water: "How to water a ZZ plant: Over-watering is the main (and practically the only) way to kill a ZZ plant. This is a plant that stores water in its rhizomes and does do not like wet feet, so allow the soil to dry out before watering. Unlike most plants, a ZZ plant is very forgiving, allowing you to over-water a few times before showing signs of serious damage. Yellow leaves are an indication that the plant has been over-watered or severely under-watered. In very warm weather, a ZZ plant may need water every 7-10 days. In cooler weather, the soil may take 2-3 weeks to dry out. When you water, water well enough so the water comes out the drip holes in the bottom of the pot. Do not allow the plant to sit in the excess water.", 
        temperature: "Best temperature for a ZZ plant: Temperatures between 60°-80°F (15.6°-26.7°C) are best. When the temperatures is below 60°F (16.6°C), the cold air slows down the plant growth.", 
        poisonous: "Is a ZZ plant poisonous: This is an extremely poisonous plant and very toxic to cats and dogs. Keep the plant out of the reach of small children who are tempted by the plump shiny leaves. A ZZ plant has a #4 toxicity level, the very highest level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/e5db3e44c0e6686d330d2b7797c20adc.png",
        isSeeded: true
    },
    {
        name: "Zebra Plant", 
        description: "A  Zebra plant (Aphelandra squarrosa) has spectacular foliage and exotic looking flowers. The nickname Zebra plant comes from its large, dark green, shiny leaves that have a bold white midrib and white veins. The stems of the leaves have a purple tinge. The bright yellow flowers on a Zebra plant, which require very bright light to bloom, emerge from bracts at the end of a long stem. A Zebra plant, native to the Brazilian forests, is primarily a table plant that stands about a foot tall.  These plants do require a little extra care; but this beautiful, out of the ordinary houseplant, is well worth it.", 
        light: "Zebra plants require very bright indirect light but no direct sun, especially if you want them to bloom.", 
        water: "Keep the soil moist but not soggy, and never allow the soil to totally dry out. Bottom leaves drop off a Zebra plant when it is over or under -watered.", 
        temperature: "Zebra plants prefer temperatures between 65°-75°F (18.3°-23.9°C). Prolonged exposure to temperatures below 60°F (15.6°C) causes leaves to fall off.", 
        poisonous: "Zebra plants are non- poisonous.", 
        image: "https://www.houseplant411.com/wp-content/uploads/800px-Zebra_Plant_Aphelandra_squarrosa-256x144.jpg",
        isSeeded: true
    }
]

// first we need to connect to the database
mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        // first we remove all of the plants
        // here we can add something to make sure we only delete pets without an owner
        //BE VERY CAREFUL HERE, DO NOT WANT TO DELETE PLANTS OF OTHER 
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