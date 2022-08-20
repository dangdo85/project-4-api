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
        image: "https://www.houseplant411.com/wp-content/uploads/African-Violet-Plant-256x192.jpg"
    },
    {
        name: "Agave Plant", 
        description: "An agave plant comes in all different sizes and shapes; some are extremely  large and belong growing outside while the smaller varieties make perfect indoor potted houseplants. Agave plants are succulents with multi-layered rosettes of thick, fleshy, leaves. The short, thick stem is often hidden by the large, leathery leaves. If there are children and pets in the house, avoid purchasing agave plants that have sharp, pointed leaves with spiny margins. The sap in the agave leaves is very irritating and the spines and sharp points are painful if they puncture your skin. It takes many, many years for an agave plant to flower, especially when grown indoors. Some varieties may eventually produce a very tall stalk with clusters of flowers at the top. You may not want your agave plant to bloom since, strangely, they often die after flowering.", 
        light: "How much light for an agave plant: An indoor agave plant needs all the bright light it can get to grow well indoors. Place the plant in front of a south or west facing window if possible.", 
        water: "How to water an agave plant: These are very drought resistant plants and the easiest way to kill an agave plant is by over watering, especially in the winter. During the spring and summer, water when the tops few inches of soil has dried out. In the fall, water every 2-3 weeks. During the winter, water about once a month.", 
        temperature: "Best temperature for an agave plant: Warm temperatures above 65° and as high as 80° are perfect for an agave plant. Avoid placing it near cold winter drafts or in front of an air conditioner.", 
        poisonous: "An agave plant is a toxic plant and can be quite dangerous to have around dogs, cats, and small children. The leaves of the plant contain oxalate crystals, and if ingested, can cause swelling and difficulty breathing. Another problem is skin irritations caused when someone is pricked by the sharp leaf tips or the spines along the edges of the leaves. Dermatitis problems also occur if the sap of an agave plant gets into an open cut on your hands or arms.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Agave-attenuata-08-1-256x178.jpg"
    },
    {
        name: "Alocasia", 
        description: "An Alocasia plant, native to Asia and eastern Australia, is also called an Elephant Ear plant or African Mask plant because of its very large, glossy, heart-shaped leaves, some with very, wavy edges. The leaves may be as large as eight to thirty five inches (20cm-90cm) in length. This plant does produce flowers, but the flowers are small and insignificant and certainly pale in comparison to the beautiful plant leaves. In its native habitat, an alocasia plant grows on the floor of the forest which explains why it likes bright light, but direct sun burns the beautiful leaves.", 
        light: "How much light does an alocasia plant need: An alocasia plant requires very bright, indirect light but no direct sun. When placed in the sun, the beautiful leaves get ugly brown marks.", 
        water: 'How to water an alocasia plant: Allow the top 2"- 3" of soil to dry out before watering an alocasia plant. When watering, water evenly so all parts of the soil are moistened. As with all indoor plants, too much water, constantly wet leaves, and heavy, soggy soil encourage numerous fungal infections that can seriously harm an alocasia plant. Examine the soil frequently until you are sure how often the plant needs to be watered. During the winter, when an alocasia plant is resting, it requires less water.', 
        temperature: "Best temperature for an alocasia plant: An alocasia grows well in warm temperatures between 60°-80°F (15.6°-26.7°C). When it is exposed to temperatures below 60°F (15.6°C) for a long period, the plant becomes dormant and may drop all of its leaves. Keep an alocasia plant away from air conditioners and cold drafts or you may the leaves drooping and falling off.", 
        poisonous: "Is an alocasia a poisonous plant: An alocasia plant is an extremely poisonous plant and very toxic to children, cats, dogs, and other small pets. Eating parts of an alocasia can be be life threatening. I give this plant a #4 toxicity level which means it is very lethal.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Alocasia-X-amazonica-165x152.jpg"
    },
    {
        name: "Alocasia – Jewel Alocasia", 
        description: "The Alocasia “Jewel” plant, native to Asia, and is also called an Alocasia Nebula. Alocasia plants have large, glossy, heart-shaped leaves with wavy edges.  If you are searching for a dramatic, very different looking plant that can be as small as 6″ or as tall as a tree, an alocasia plant is a great choice.", 
        light: "An alocasia plant requires very bright indirect light. Direct sun burns the leaves.", 
        water: 'Always allow the top 2"- 3" of the soil to dry out before watering. Keep the soil evenly moist. Over- watering, wet leaves, and soggy soil makes an alocasia plant susceptible to a variety of serious fungal infections. Check the soil frequently until you are sure of the plant\'s watering needs. Water less during the winter when it is dorman.', 
        temperature: "Alocasia plants prefer warm temperatures between 60°-80°F (15.6°-26.7°C). Alocasia plants becomes dormant with prolonged exposure to temperatures below 60°F (15.6°C), and may drop all of their leaves. Be sure to keep an alocasia away from air conditioners and cold drafts. During warm summer months an alocasia plant can produce a new leaf every week and each new leaf may be twice the size of the previous leaf.", 
        poisonous: "Alocasia plants are very poisonous houseplants with a #4 toxicity level. Alocasia plants are considered poisonous and should be kept away from pets and children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Alocasia-nebula-Imperialis-06-180x110.jpg"
    },
    {
        name: "Aloe Vera Plant", 
        description: "An aloe vera plant has little or no stems to speak of. The stemless rosettes of long, fleshy, green-gray leaves have sharp, serrated edges, so be very careful when handling the plant. The leaves, which can be as tall as 2ft, have several layers. It is the inner layer that contains the medicinal gel. Because of the cactus like nature and the sharp teeth on the leaves, an aloe vera plant is sometimes erroneously referred to as a “Desert Cactus.” Although an indoor aloe vera plant rarely blooms; when grown outside, it produces long spikes with yellow, white, or red tubular flowers at the top. When small, an aloe vera plant can be used as a table plant and, as it matures, a floor plant", 
        light: "How much sun an aloe vera plant needs indoors is different than aloe vera light requirements outdoors. Indoors an aloe vera likes bright, indirect light and only morning sun. Avoid direct afternoon sun or the leaves may become discolored. An outdoor aloe vera plant can adapt to direct sun.", 
        water: "How to water an aloe vera plant: Water well and then allow the soil to thoroughly dry out before watering again. It may be 2-3 weeks before an aloe vera plants needs to be watered again. During the winter, an aloe vera plant needs even less water. An aloe vera plant can be saved from severe under-watering, but rarely survives being over-watered.", 
        temperature: "These plants likes dry, warm temperatures between 65°-85°F (18°-29° C). Aloe Vera plants do not do well in temperatures below 40°F (4.5°C)", 
        poisonous: "Although the sap of an Aloe Vera plant is highly recommended for treating burns, other parts of the plant are poisonous. This plant has a #1 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/cb76738f43d2d7cfae8f87b3a865ec31-153x231.jpg"
    },
    {
        name: "Amaryllis", 
        description: "Amaryllis Plant Bulbs can be planted (or purchased pre-planted) from October through the end of April and will bloom anywhere from late November to January in the northern hemisphere. The spectacular amaryllis flowers range in size from 4”- 10.” When buying amaryllis bulbs, remember it is the large, healthy bulbs that produce the larger flowers. Amaryllis flowers can be singles or doubles and come in many colors such as red, white, rose, dark reddish/burgundy, orange, and apricot. New amaryllis plant varieties produce bicolored flowers and flowers with different edge colors. With proper after-bloom care,  the easy care Amaryllis plant will flower year after year for many years.", 
        light: "HOW MUCH LIGHT FOR AN AMARYLLIS PLANT: Bright indirect but not direct afternoon sun is ideal for an amaryllis plant. Turn the plant each time you water keep the stems growing straight up and not leaning toward the light.", 
        water: "HOW TO WATER AN AMARYLLIS PLANT: Water the bulbs sparingly until the stems appear. As the stem, flower buds, and leaves develop increase the water. Keeping the soil barely moist helps extend the life of the flowers.", 
        temperature: "BEST TEMPERATURE FOR AN AMARYLLIS PLANT: These plants like temperatures between 68°-70°F(20°-21.1°C). Once the plant flowers moe it to a slightly cooler area to help the flowers last longer.", 
        poisonous: "IS AN AMARYLLIS PLANT poisonous: This plant is extremely poisonous to small children, dogs, cats and other pets.. All parts of the plant contain alkaloids that can cause severe problems if the plant is ingested. The amaryllis bulbs contain calcium oxalates and are the most dangerous part of the plant. Pets that swallow pieces of an amaryllis plant suffer severe mouth pain, drooling, foaming at the mouth, vomiting, and breathing problems. Small children who eat any part of the plant develop digestive problems and swelling of the lips, tongue and airways making it difficult to breathe and swallow.", 
        image: "https://www.houseplant411.com/wp-content/uploads/images-11-117x152.jpeg"
    },
    {
        name: "Angel Wing Begonia", 
        description: "Angel wing begonias are named for their large, “angel wing” shaped, dark green leaves that are often decorated with metallic or frosty silver specks. The underside of the leaf is usually a deep purple or red. These plants produce large, heavy, draping, clusters of delicate, dangling flowers in red, white, orange, or pink. The intensity of the flower and leaf colors depends upon how much light a begonia gets. When still a young, an indoor angel wing begonia is small enough to sit on a table or desk. As the plant matures, the stems can be pruned to create a large bushy floor plant or a beautiful hanging plant. If you have the room and the proper light, an angel wing begonia can grow into a 5ft tree.", 
        light: "Angel wing begonias like bright indirect light but no direct sun. Proper light helps the leaves and flowers develop a more intense color. Insufficient light causes the plant to become leggy and prevents flowering. When light is too intense, the edges of the leaves curl and turn brown.", 
        water: "Be careful not to over-water! If the plant is in a small pot, allow the top 1” of soil to dry out before watering. In a larger pot, allow the top 2”-3” of soil to dry out. Angel wing begonia containers must have drip holes in the bottom for proper drainage and the plant should never sit in water. When over-watered, the leaves turn yellow and fall off.", 
        temperature: "Angel wing begonias do well when the temperature is 65°-75°F (18.3°-23.9°C). Temperatures below 50°F (10.0°C) damage leaves and flowers.", 
        poisonous: "Angel Wing begonia plants have a #1 toxicity level due to the insoluble oxalates in the plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/angel-wing-begonia-114x152.jpeg"
    },
    {
        name: "Anthurium", 
        description: "This easy-care houseplant produces beautiful, long-lasting, waxy, heart- shaped “flowers” which are really modified leaves called “spathes” throughout the year. The exotic looking anthurium flowers come in vibrant red, light pink, dark pink, white, purple, orange, green, and new varieties are bi-colored. There are even light blue and dark blue anthurium flowers. The plant usually blooms for a few months and then rests for a few months before blooming again. Some anthuriums have leaves that are as spectacular looking as flowers.", 
        light: "How much light for an anthurium: Provide as much bright, indirect light as possible, but no direct sun. If there is insufficient light, an anthurium produces fewer flowers and becomes thin and straggly as stems stretch toward the light.", 
        water: "How to water an anthurium: Water well and then allow the top few inches of soil to dry out before watering again. Over-watering causes yellow leaf tips and under- watering causes brown leaf tips.", 
        temperature: "What is the best temperature for an anthurium: 75°F-85°F (23.9°C-29.4°C) during the day and about 10° cooler at night are ideal. Temperatures below 60°F (15.6°C) slow leaf and flower growth.", 
        poisonous: "An anthurium is a very poisonous plant and toxic to cats, dogs, and children. It has a #3 toxicity level which means it should be kept far out of reach.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Anthurium-Red-06-180x143.jpg"
    },
    {
        name: "Aralia Plant", 
        description: "Aralia plants have a distinctive, oriental look to them and often have twisted, woody stems or a short, thick, stump for a base. The leaves can be leathery and round like a dinner plate, lacy and fern-like, or even crinkled. Aralia plant leaves may be solid green or variegated with flecks and patterns in green, white, gold, and cream. When small, the plant can be used as a table plant and, as it matures, an impressive floor plant.", 
        light: "An aralia plant can survive in low light conditions, but grow faster and produce more leaves in medium to bright indirect light.", 
        water: "Too much water, resulting in root rot, is the main reason an aralia plant dies. Allow the top 50% of the soil to dry out before watering. In low light conditions, an aralia plant may need water as little as every 2-3 weeks.", 
        temperature: 'Temperatures between 60°-85° F (15.6°-29.4°C) are best for an Aralia plant.', 
        poisonous: "An aralia plant is a poisonous plant with a #2 toxicity level. All parts of an aralia plant contain saponins which may cause gastrointestinal irritation, nausea, vomiting and diarrhea.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Polyscias-fruticosa-10-S-2-153x220.jpg"
    },
    {
        name: "Aralia Plant – Balfour", 
        description: "A Balfour Aralia plant is an evergreen plant native to Africa, Asia, Australia, parts of North and Central America, and South America. The distinct leaves of a Balfour Aralia resemble leathery, round, dinner plates about 1″- 2″ in diameter, which is how the plant got its nickname, the Dinner Plate Aralia.  The leaves can range in color from light green to dark green and some varieties have green and cream colored variegated leaves. Aralias are not  good houseplants for beginners since they are easy to over- water which results in root rot and leaves falling off.", 
        light: "Balfour Aralia plants do best in bright indirect light; but will survive in low light if you are careful not to over-water.", 
        water: "Aralias have very fine roots and are easily over-watered. Always allow the top 1/2 of the soil in the pot to dry out before watering. During the winter when plants are resting, they need even less water. In low light situations, Aralias may need water only once a month.", 
        temperature: "Balfour Aralias like basic household temperatures between 65-80 degrees.", 
        poisonous: "These plants are considered poisonous and should be kept away from pets and children. Read more about common houseplants that can be dangerous in my book Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Polyscias-scutellaria-10.jpg"
    },
    {
        name: "Areca Palm", 
        description: "An Areca palm is a type of cane palm. When grown indoors, an immature Areca palm can be small enough to sit on a table or desk. However, as the plant matures, it quickly develops into a medium sized, exotic looking palm that can reach a height of 6-8 feet. An Areca palm gets its nickname, the “Butterfly Palm” because of the way its long, feathery fronds (leaves) arch upwards off multiple reed- like stems, resembling butterfly wings. Each frond has between 40-60 leaflets and may be as tall as 3ft.", 
        light: "How much light for an Areca Palm: bright indirect light; too much light or direct sun burns the fronds and causes them to turn yellow.", 
        water: "How to water an Areca Palm: Keep the soil barely moist but never soggy. Allow the top few inches of the soil to dry out before watering. Remember, the soil at the bottom of the container is wetter than the soil at the top. Never allow an Areca Palm to sit in the excess water that drains out the drip holes in the bottom of the pot. If your household water has a lot of chemicals in it or passes through a water softener, allow the water to sit out over-night before using it, or use distilled water or rain water. Water containing chemicals or salt may cause ugly spots on the leaves. A Areca palm develops yellow leaves if the soil gets too dry.", 
        temperature: "Best temperature for an Areca Palm: 65F°-75F° (18.3°C-23.9°) during the day and around 55°F (12.8°C) at night. Areca palms are very sensitive to low temperatures so if you place it outside during the summer be sure to bring it in before temperatures dip below 50°F (10°C).", 
        poisonous: "An Areca Palm is non- poisonous plant and safe to have around cats, dogs, or small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dypsis-lutescens-17-153x189.jpg"
    },
    {
        name: "Arrowhead Plant", 
        description: "No matter what type you select, the leaves of an Arrowhead plant always have a spade-like shape that resembles an “arrowhead”. The young, immature plant is short and bushy. However, as the plant matures and is not aggressively pruned, it produces long draping stems just as it does in nature. You can put the plant in a hanging basket or tie it to a trellis. If you want your arrowhead plant to be a large, full floor plant, cut back the long vines and keep pinching off the growing tips at the ends the stems. You can use the Stem Cuttings to propagate new plants.", 
        light: "How much light does an arrowhead plant need: The leaf color of the plant determines how much light an arrowhead plant requires. Varieties with solid green leaves can grow in low to medium light. New arrowhead hybrids with white, pink, burgundy, and lime green in their leaves require medium to bright, indirect light.", 
        water: "How to water an arrowhead plant: Water well, and then allow the top 50% of the soil to dry out before watering again. Leaves may droop when the soil is dry, but the plant quickly perks up when watered. I like to water an arrowhead plant from the bottom to prevent over watering that can cause root rot.", 
        temperature: "Best temperature for an arrowhead plant: These plants grow well when the temperature is 60°-70°F (15.5°-21.1°C). Avoid placing an arrowhead plant near heating vents, air conditioners, cold drafts, and fireplaces.", 
        poisonous: "Is an arrowhead plant poisonous: This plant has a #2 toxicity level which means it is very toxic to dogs, cats, and small children. All parts of the plant contain calcium oxalates which, if ingested, cause swelling of the lips, mouth, tongue, and airways. This swelling makes breathing very difficult.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Syngonium-podophyllum-White-Lightning-08-180x139.jpg"
    },
    {
        name: "Asparagus Fern", 
        description: "An asparagus fern has long stems of graceful, feathery, bright green foliage. The tiny “leaves” are not really leaves at all; they are flattened, short, needlelike, modified stems.   The plant looks best in a hanging basket so the arching, trailing stems can grow freely. An asparagus fern produces small white flowers and bright red berries. As the plant matures, stems become a little woody and develop sharp spines. Some asparagus fern varieties, like the springeri, grow over 2-3ft. wide with cascading trailing stems 2ft-4ft.in length.", 
        light: "How much light for an Asparagus Fern: These plants grow best in bright indirect light coming from an east, west, or north-facing window. In lower light an asparagus fern grows very slowly and may develop yellow fronds.", 
        water: "How to water an Asparagus Fern: Do not water until the top 50% of the soil has dried out. If in doubt, allow the fronds to turn pale green before watering. An asparagus fern requires more water in the hot summer months, and likes drier soil during the cold winter months. Asparagus ferns are very drought resistant; however, yellow stems indicate the plant needs more water while brown stems mean you may be over- watering your asparagus fern.", 
        temperature: "Best temperature for an Asparagus Fern: Temperature should be between 50°-75°F (10°-24°C). These plants can even survive briefly in temperatures as low as 36°F (2.2°C).", 
        poisonous: "An Asparagus Fern is considered a poisonous plant and should be kept away small children , cats, dogs, and birds. Although the leaves are not harmful, the sharp, small thorns can be painful if touched and the red berries are toxic and cause digestive problems if eaten.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Asparagus.fern_.2010.11.07-1024x848-3-256x212.jpg"
    },
    {
        name: "Azalea", 
        description: "An Azalea plant is the national flower of Nepal, and is part of an ancient group of plants dating back million of years. They are related to rhododendrons and blueberries and are descendents of Asian shrubs. Azaleas can also be used as a centerpiece for weddings or to replace expensive cut flower arrangements in your home or office. Azaleas have delicate, funnel shaped,  lipped flowers that can be red, pink, white, yellow, purple and even bi-color.", 
        light: "Azalea plants require bright indirect light while blooming, but no direct sun. If there is not enough light, the flower buds on an azalea plant won't open.", 
        water: 'Allow the top 2"-3" of soil to dry out before watering. Azaleas are acid loving plants; if your water is alkaline add one tablespoon of vinegar to each gallon of water. You can also water azaleas with leftover tea. Large numbers of leaves drop off if the soil is too wet or too dry.', 
        temperature: "Azalea plants thrive and their flowers last longer when the temperature is 50°-60°F (10°-15.6°C) at night and 60°-70°F (15.6°-21.1°C)F during the day. Temperatures over 80°F (26.7°C) cause leaf drop and flowers to quickly fade.", 
        poisonous: "All parts of an Azalea contain a substance called grayanotoxin which makes the plant very poisonous with a #4 toxicity level. Keep azalea plants away from children and pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/800px-Azalea_japonica_Madame_Van_Hecke_J2-256x192.jpg"
    },
    {
        name: "Baby’s Tears Plant", 
        description: 'A Baby’s Tears plant was used as a mossy ground cover long before it became a houseplant. Outdoors, it grows close to the ground in a creeping  fashion, producing mounds of  small, green leaves and tiny white flowers. This very little plant spreads quickly when planted in a warm, shady spot out of the direct sun. Although it only grows about 2″-5″ tall, a Baby’s Tears plant can spread out over six feet and is often considered an invasive plant', 
        light: "Baby’s Tears plants like bright, indirect light but no direct sun.", 
        water: "Keep the soil of a Baby Tear's plant moist but never soggy. If the soil stays too wet, the roots and stems die.", 
        temperature: "Normal household temperatures or even a little cooler are best, 60°-75°F (15.6°-23.9°C) is ideal.", 
        poisonous: "A Baby's Tears plant is non- poisonous and looks perfect in a child's room.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Babys-Tears-Plant-180x135.jpg"
    },
    {
        name: "Bamboo Palm", 
        description: "It’s easy to see why a Bamboo Palm is used so often as an indoor plant. It is a beautiful, compact, easy care, tropical looking plant that grows well in medium light. It can even be happy in lower light if you are careful with your water. Even though it is called a Bamboo Palm, it is not a relative of the real bamboo, a type of grass that requires very bright light. Indoors the plant be as tall as 5 – 7ft. and as wide as  3 -5ft. with multiple, reed-like stems growing in clumps. It’s these reed like stems that gave the Bamboo Palm its nickname, the Reed Palm. There are about 10-15 fronds on each stem and each frond has 10-14 pinnate (feathery), dark green leaflets. The base of each stem is covered in a tan-colored fiber that resembles bamboo.", 
        light: "Although a bamboo palm grows faster in bright indirect light, it still does well in medium light, and grows very slowly in low light if you're careful not to over-water.", 
        water: "Allow the top 1/3 of the soil of a bamboo palm to dry out before watering. These plants like barely moist but never soggy soil. Never allow a bamboo palm to sit in the excess water that drains from the pot. Do not use water that has passed through a softener because the high salt content damages the leaves. Leaf tips look pale in color and green leaves fall off when a bamboo palm is over-watered. New growth and leaf tips turn brown when a bamboo palm is under-watered. The confusing thing is that yellow leaves can develop when the plant is over or under- watered, so you need to check the soil as far down as you can to know if the plant needs water.", 
        temperature: "A bamboo palm does well in temperatures between 65°-80°F (18.3°-26.7°C).", 
        poisonous: "Although the ASPCA lists a bamboo palm as a non- poisonous houseplant, other experts state that the entire plant, especially any berries that appear, is toxic. We've erred on the side of caution and have listed a Bamboo Palm as a poisonous houseplant with a #1 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Chamaedorea-erumpens-10-2-153x205.jpg"
    },
    {
        name: "Begonia Plant", 
        description: "The leaves of some begonia plants, such as the Begonia Rex or the Iron Cross Begonia, have extraordinarily colorful foliage. Other varieties, such as the Rieger Begonia have broad green leaves and beautiful flowers. There are some such as the Angel Wing Begonia, that have both lovely flowers and outstanding leaves.", 
        light: "Although certain varieties of begonia can adapt to lower light, most begonias need medium to bright indirect light. The better the light, the more flowers a begonia plant produces. Leaves and flowers drop off when the light is too low.", 
        water: "Water a begonia well and then allow the top 50% of the soil to dry out before watering again. Too much water causes mildew, mold, and permanent root damage. Water dripped on the leaves may cause leaf-rot.", 
        temperature: "Begonias plants do well in cool temperatures between 65°-75°.", 
        poisonous: "Begonias are poisonous plants with a #1 toxicity level. They are especially toxic to dogs and cats.", 
        image: "https://www.houseplant411.com/wp-content/uploads/a-tuberous-begonia-orange-gr-153x153.jpg"
    },
    {
        name: "Begonia Rex Plant", 
        description: "Most begonia plants are grown for their lovely flowers, though some have pretty leaves as well. A Begonia Rex, is grown for its large, colorful, patterned leaves rather than its small, pink and white “winter” flowers. The leaves come in a variety of shapes such as oval, spear-shaped, heart-shaped, and star-shaped. The leathery, ruffled, or puckered leaves can be as small as ½ inch or as large as 10”-12;” though the average leaf size is usually 4”- 6” wide and 5”-7” long. It’s the dramatic color combinations on the leaves that sets ta Begonia Rex apart from the usual green- leafed houseplant. Splashes, swirls, spots, and stripes of red, pink, silver, purple, bronze, green, yellow, orange decorate the leaves.", 
        light: "How much light does a Begonia rex need: A Begonia rex plant needs s great deal of bright, indirect light, but no direct sun during the spring, summer, and fall. During the winter, when the light is weaker, it likes a few hours of direct morning sun. If the stems of a Begonia rex become long and straggly, it means the plant is stretching for more light. The edges of the leaves turn brown when the plant is getting too much light. Since a Begonia rex does not bloom very often, it grows better in less light than some other begonia plants and can even grow under fluorescent lights.", 
        water: "How to water a Begonia rex: A begonia rex plant likes to be evenly watered, but hates to be over-watered. Wait to water until the top 30%-50% of the soil has dried out before you water. During the winter, when the plant is dormant, water even less. keep in mind the the soil at the bottom of the pot is always wetter than the soil at the top of the pot.", 
        temperature: "Best temperature for a Begonia rex: This is a plant that likes to be warm all of the time so be careful to avoid cold drafts in the winter. A Begonia rex can be damaged if the temperature goes below 60°F (15.6°C). The leaves can also be damaged by large temperature swings.", 
        poisonous: "Is a Begonia rex a poisonous plant: A Begonia rex is a mildly poisonous plant with a #1 toxicity level. These plants are especially toxic to cats and dogs.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Begonia-rex-10-256x175.jpg"
    },
    {
        name: "Bird of Paradise Plant", 
        description: "The most popular Strelitzia species used as an indoor plant is the Strelitzia Reginae. It has very large, blue/green, oblong, leathery, paddle- shaped leaves that resemble those of a banana plant. Even indoors a Bird of Paradise plant with its upright, stiff leaves can easily reach a height of 4ft-6ft (1.2m-1.8m). After 4 or 5 years and the plant matures, it may, on rare occasions, produce spectacular, exotic- looking, orange, red and blue flowers called “crane flowers” (because they resemble the head of a crane). In warm climates, an outdoor Bird of Paradise plant often flowers throughout the year producing 25-30 flower spikes that can last for weeks.", 
        light: "A Bird of Paradise plant requires very bright light. This plant can even be placed in the direct sun if you do it gradually and allow the leaves to slowly adapt. You may have to move a Bird of Paradise plant to different areas of your home as the seasons change in order to give it adequate light; placing it close to a south- facing window is always best. The leaves on a Bird of Paradise plant start to curl when it does not get enough light.", 
        water: "In the spring and summer keep the soil moist but never soggy. A Bird of Paradise plant needs less water in the fall and winter. Water from the bottom so the soil stays loose and remains well aerated. Water that has a high salt content burns the leaves.", 
        temperature: "An indoor Bird of Paradise plant grows best in temperatures between 65°-75°F (18.3°-23.9°C) during the spring, summer, and fall. In the winter, when the plant is \"resting,\" keep the temperature 10° cooler. Temperatures below 50°F (10.0°C) cause the leaves to curl and turn black.", 
        poisonous: "A Bird of Paradise plant has a #1 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Strelitzia-nicolai-14-2-768x821-2-142x152.jpg"
    },
    {
        name: "Bird’s Nest Fern", 
        description: "This unusual  looking fern has long, erect, leathery, apple-green fronds that never split like those of a Kimberly Queen Fern or a Maidenhair Fern. The wide, rippled leaves of a Bird’s Nest Fern emerge from a central rosette or crown that looks like a fuzzy, brown funnel. The tongue- shaped fronds are fragile so try not to handle the young immature fronds and place the plant in an area where it won’t be bumped. Although in nature a Bird’s Nest Fern may have fronds as long as 5ft (1.5m), as a houseplant, the mature plant forms a compact, vase like shape with leaves not much larger than 24” (60cm) wide and 16” (40cm) tall.", 
        light: "A Bird’s Nest fern requires medium, indirect light. The distinctive bright green leaves become pale when exposed to too much light. Direct sun causes unsightly burn marks on the fronds of a Bird's Nest fern.", 
        water: "The soil of a Bird's Nest fern should be kept barely moist but never soggy at all times.", 
        temperature: "A Bird's Nest fern grows well when the temperatures is between 70°-90°F (21.1°-32.2°C) during the day and about 10° cooler at night. These slow growing ferns grow even more slowly when the temperature is not warm and the fronds are quickly damaged by hot or cold drafts. The base of the fronds of a Bird's Nest fern turn yellow when the temperature is too warm.", 
        poisonous: "Bird's Nest ferns are non- poisonous houseplants and are not toxic cats, dogs, and other pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Birds-Nest-Asplenium-nidus-10-1-248x235.jpg"
    },
    {
        name: "Bleeding Heart VIne", 
        description: "A Bleeding Heart plant, native to tropical west Africa, is grown for its masses of beautiful bi-colored flowers. Each flower on a Bleeding Heart plant is made up of a corolla or inner group of bright red petals that emerge from a white calyx or outer part of the flower. The Bleeding Heart plant’s nickname, the “Bag Plant” refers to the shape of the outer white petals. When planted in a container, a Bleeding Heart Plant can grow up to 3 feet in length, outside in tropical areas, it often reaches 15 feet. This lovely plant has twining stems with large attractive dark green leaves. You can place a trellis in your container to help a Bleeding Heart plant grow tall or place it in a hanging basket.", 
        light: "A Bleeding Heart plant loves very bright light but no direct sun. The brighter the light, the more blossoms a Bleeding Heart Vine produces.", 
        water: "Keep the soil of a Bleeding Heart plant moist in the spring and summer but not soggy. When a Bleeding Heart plant is resting in the fall and winter, place it in a cool location and water infrequently. Never use ice cold water.", 
        temperature: "A Bleeding Heart does well in regular household temperatures in the spring and summer, but likes cooler temperatures between 55°-60°F (12.8°C-15.6°C) when it is resting in the late fall and winter.", 
        poisonous: "Bleeding Heart Plants are poisonous houseplants with a level #3 toxicity. Quite a bit of the plant needs to be eaten before there is a serious problem. However, small children, small dogs, and other pets should be kept away from this plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/800px-Bleeding_Heart_Vine_Clerodendrum_thomsoniae-256x144.jpg"
    },
    {
        name: "Boston Fern", 
        description: "The wide- spreading Boston fern, with its long, arching fronds looks beautiful in hanging baskets. The fronds or leaves can be 2-3 feet long and 4-6 inches wide. Each frond has small leaflets (pinnae) on either side of a midrib. The leaflets have slightly serrated edges and a deltoid shape.", 
        light: "How much light does a Boston fern need: Bright, indirect light helps the plant grow well. Placing a Boston fern in front of a window with a northern exposure allows it to get sufficient light, but not so much that the leaves lose their vibrant green color. Keep the plant out of direct sun.", 
        water: "How much water for a Boston fern: Allow the top 30% of the soil to dry-out before watering. The fronds or leaves may turn a pale green which indicates the fern needs water. Yellow, limp, rotting fronds, especially in the center of a Boston fern, mean the plant is being over-watered. Crispy leaves indicate the fern needs more water. Using \"hard water\" causes unsightly white marks on the fronds. A Boston fern is more drought-resistant than most ferns, so when in doubt, don't water.", 
        temperature: "Best temperature for a Boston fern: Temperature should be 60°-70°F (15.6-21.1°C). Keep all varieties of indoor ferns away from heat sources such as fireplaces and heaters. If the temperature drops below 50°F (10°C) or goes above 90°F (32.2°C), it may damage the leaves.", 
        poisonous: "Is a Boston fern poisonous: Ferns are non- poisonous and are safe to have around small children, cats, dogs, and other pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Nephrolepis-exaltata-08-256x253-1-238x235.jpg"
    },
    {
        name: "Bougainvillea Plant", 
        description: "A bougainvillea plant is native to the rain forests of Brazil, Peru, and southern Argentina. Bougainvillea plants, with their thorny, woody, tropical vines, produce beautiful clusters of red, pink, orange, white, yellow, purple, and magenta paper-like bracts. The colorful bracts surround the actual flower, which is usually small and white. Bougainvillea flowers appear on branches 18″-20″ long.", 
        light: "A Bougainvillea Plant needs bright full sun for at least 5-6 hours every day in order to bloom. Lack of light is the main reason why a Bougainvillea Plant doesn’t flower indoors. Keep a Bougainvillea These plants need at least 5 hours of sun to grow and flower indoors. Place as close to a south or west facing window as possible.", 
        water: "Bougainvillea is a drought tolerant plant that should be kept on the dry side. Allow the top 50% of the soil to dry out before watering. A bougainvillea may even wilt a little to let you know it needs water. When you do water a bougainvillea plant, water deeply and cover the entire surface of the soil. Good drainage is essential and a bougainvillea should never sit in water. Frequent light waterings encourages weak roots and discourages good flower color. During the winter, a bougainvillea requires even less water. If over-watered bougainvillea plants develop root rot, do not flower, and drop leaves. If the soil totally dries out, bracts and leaves fall off.", 
        temperature: "A bougainvillea does well in temperatures between 70°-85°F during the day and 60°-70°F at night. When resting during the winter, Bougainvilleas prefer temperatures between 50°-60°F.", 
        poisonous: "A Bougainvillea Plant is a very poisonous houseplant and has a #3 Toxicity level. The sap from a Bougainvillea can cause a rash that resembles poison ivy so be sure to wear gloves when pruning this plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Bougainvillea-Pink-10-1-256x178.jpg"
    },
    {
        name: "Bromeliad Plant – Silver Vase", 
        description: "A Bromeliad plant (Aechmea fasciata), sometimes called a Silver Vase plant or Urn plant, is an easy care flowering plant native to Brazil. In nature, it is an epiphytic plant, which means it grows on other plants or trees. This bromeliad variety has thick, arching, gray-green leaves.These unique leaves are arranged in a circular fashion so that they form an upturned waxy cup in the center. This central cup, or reservoir collects the water and nutrients that the plant needs. After three or four years, as a Bromeliad fasciata matures, the plant produces a tall flower stalk with numerous pink bracts.", 
        light: "A Bromelia fasciata (Silvr Vase Plant) requires very bright light in order to flower. Once the pink bracts appear, move the plant to lower light to prolong the colorful bracts.", 
        water: "Keep the “cup” of this type of bromeliad filled with fresh water. Clean the cup weekly and replace the water with clean water to prevent diseases, gnats, and mosquitos. Dampen the soil and do not water again until the top 1/2” of soil has dried out. Never allow the soil to totally dry out and never use hard water. The lime in hard water disfigures the leaves. These plants have a very small root system so be careful not to over-water.", 
        temperature: "The colorful bracts last longer if you keep the temperature between 6o°-75° F (17°- 24° C). Aechmea fasciatas can survive colder temperatures than other bromeliads.", 
        poisonous: "Although considered a non- poisonous houseplant, a bromeliad contains substances that may cause skin irritations and contact dermatitis in some people and pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Aechmea-fasciata-158x152.jpg"
    },
    {
        name: "Bromeliad Plant- Guzmania", 
        description: "If you’re tired of buying expensive cut flower arrangements for your dining room table or the reception desk in your office, think about using an easy care Bromeliad plant. There are over 2500 species of bromeliads that are native to North, Central and South America. My favorites varieties of bromeliads are: neoregelia, aechmea, and guzmania. A Bromeliad guzmania plant has long, thin, green. leathery leaves. Brightly colored flowers, really bracts, that can be red, yellow, orange, or even deep purple grow from the center of the plant.", 
        light: "A bromeliad plant is very adaptable to all types of light, and there is a bromeliad plant variety for every light condition. If your bromeliad plant has thin green leaves it can survive in low light. If a bromeliad plant has thick gray leaves, it needs medium light. The flowers (colorful “bracts”) of a bromeliad plant fade quickly and the leaves turn pale green when it's placed in very bright light. The leaves of a bromeliad plant get further apart and turn dark green when the plant needs more light.", 
        water: "Bromeliad plants are drought resistant succulents that like dry soil. A bromeliad plant has very small roots and over-watering is the number one reason bromeliad plants die. Some bromeliad plant varieties have \"tanks\" that like being filled with water; others varieties have fine hairs on their leaves that enjoy being misted.", 
        temperature: "Bromeliad plants are tropical plants that can survive in temperatures between 40F°-100°F (4.4C°-37.8°C) but prefer 70F°-75°F (21.1C- 23.9°C) during the day and ten degrees cooler at night. The blooms on a Bromeliad plant last longer when the temperature is cool.", 
        poisonous: "Bromeliads are non- poisonous houseplants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/guzmania-bromeliad-126x152.jpg"
    },
    {
        name: "Cactus Plant", 
        description: "There are about 2000 varieties of cacti, and they come in a wide variety of shapes and sizes. About 50% of indoor cactus plants will  bloom is properly cared for. Many produce large, beautiful flowers that can be yellow, white, orange, pink, red, and even blue. Some get flowers that bloom only at night and last just one day while others have flowers that last for weeks. Indoors, a potted cactus plant needs to be three or four years old before it blooms, and flowers only develop on new growth. Keeping a cactus plant slightly rootbound helps it to flower.", 
        light: "A cactus plant likes as much bright, indirect light as you can provide. Introduce a cactus plant to direct, morning sunlight gradually to prevent sunburn. The ideal location for a small cactus plant is near a south-facing window.", 
        water: "A cactus plant requires more water in the spring, summer, and early fall when it is growing than in the winter. Allow the soil of a cactus plant to almost dry out before watering during the winter months. Over-watering is the main reason a cactus plant dies.", 
        temperature: "An indoor cactus plant likes temperatures between 60°-80°F (15.6°-26.7°C)", 
        poisonous: "Although a cactus plant is not a poisonous plant, getting a puncture wound from one of the sharp spines is very unpleasant and could be dangerous if not properly being taken care of.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Cereus-peruvianus-monstrosus-10-1-137x235.jpg"
    },
    {
        name: "Caladium Plant", 
        description: "Caladiums are bulb plants grown for their large, paper-thin, arrow-shaped, colorful leaves that are often more spectacular than many flowers. The most popular indoor varieties are the “fancy-leafed” and “lance-leafed” types. The leaves, some as long as 24 inches, have marbled, spotted, or veined patterns in red, pink, white, and green.", 
        light: "A caladium plant requires very bright indirect light. Keep a caladium plant out of the direct sun to prevent leaf burn.", 
        water: "The soil of a caladium plant should be moist but never soggy during the growing season. As the leaves start to die in the early fall and the caladium plant goes into its resting/dormant period, gradually reduce the water to about once every 4-6 weeks.", 
        temperature: "A caladium plant likes warm temperatures between 70°-85°F (21.1°-29.4°C) with as little fluctuation in temperature as possible. During the five or so months when a caladium plant is dormant, the temperature should be cooler but never below 55°F (12.8°C).", 
        poisonous: "A Caladium plant is a very poisonous plant with a #3 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Caladium_bicolor_Florida_Sweetheart_Plant_2220px-171x152.jpg"
    },
    {
        name: "Calathea Plant", 
        description: "The many different calathea varieties have leaves with a purple underside and vibrant, colorful patterns on the top side. Indoors, it is a low growing table plant or short bush that rarely gets taller than 10.” It can, however, spread out 24”-26” wide. The leaves of a calathea plant are much more spectacular than the purple, yellow, or white flowers that may develop during the summer.", 
        light: "How much light does a calathea plant need: A calathea plant likes bright indirect light; so placing it in front of an east, west, or north window is ideal. Too much direct sun burns the leaves and causes the beautiful leaf colors to fade.", 
        water: "How to water a calathea plant: Calathea plants are very sensitive to the water you use. Hard water, soft water, fluoridated water, or water of poor quality causes ugly, brown leaf burn. The best way to water is to use distilled water, rain water, or allow your tap water to sit out over night before using it. Keep the soil of a Calathea plant barely moist but never soggy. Allow the top 2-3” to dry out before watering and never allow the plant to sit in the excess water.", 
        temperature: "Calatheaplants like temperatures between 65°-80°F (18.3°-26.7°C), and do not like cold drafts or temperatures below 55°-60°F (12.8°-15.6°C). Hot temperatures cause the leaves of a Calathea plant to curl.", 
        poisonous: "A Calathea plant is a non- poisonous plant and safe to have around young children and your pets..", 
        image: "https://www.houseplant411.com/wp-content/uploads/Calathea-pictura-Argentea-08-1-176x152.jpg"
    },
    {
        name: "Calathea Ornata", 
        description: "Indoors, this plant rarely grows larger than about 2ft. wide and 2ft. tall. The leaves of the calathea ornata are smaller than those of other calathea plants and have bright pink stripes. The pink coloring of the “roseolineata” variety is even more vibrant.", 
        light: "A calathea plant requires bright indirect light but no direct sun. Direct sun burns the leaves and causes the vibrant colors to fade.", 
        water: "The leaves of calathea plants are easily damaged by the quality of the water you use. Hard water or soft water, water with a high chemical content (fluorine, chlorine, or salt), water that has passed through a softener, or water of poor quality causes leaf tip burn. Use distilled water, rain water, or allow your tap water to sit out over night before using it. Calathea plants like moist but not soggy, soil at all times; never let the plant sit in water. Allow the top 2-3” of the soil to dry out before watering.", 
        temperature: "Calathea plants prefer temperatures between 65°-80°F (18.3°-27.7°C) , and don't do well in cold drafts or temperatures below 55°-60°F (12.8°-15.6°C). The leaves of a calathea plant curl when the temperature is too warm.", 
        poisonous: "Calathea are non- poisonous plants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Calathea-ornata-Rosea-lineata-06-3-246x235.jpg"
    },
    {
        name: "Calla Lily Plant", 
        description: "A Calla Lily plant is grown from small rhizomes. A rhizome is a long, thick, modified stem that grows horizontally underground. It produces shoots that grow upwards and out of the soil and roots that grow downwards. Rhizomes, like Plant Bulbs, not only support the plant but store food and other nutrients. The large, tubular or funnel shaped Calla Lily flowers (spathes), grow atop tall, thick stems and have a finger-like yellow spadix in the center. The flower can be as large as 10″ (25.4cm) long. ", 
        light: "Calla Lilies require at least six hours a day of very bright indirect light. Avoid direct sun, especially during the middle of the day, since it will burn the leaves and flowers.", 
        water: "These plants like moist soil at all times. Calla Lilies are not drought resistant and should never be allowed to totally dry out. Keep the soil moist but not soggy. Never allow a Calla Lily to sit in water for more than 15 minutes.", 
        temperature: "Room temperatures should be between 50°-75°F (10°-24°C) for optimal growth. Keep Calla Lilies away from heating and air conditioning vents. If planted outdoors, be sure to dig up the Calla Lily bulbs and bring them inside before temperatures dip below freezing.", 
        poisonous: "A Calla Lily is a very poisonous houseplant with a #3 toxicity level. Please keep it away from small children and pets. This plant contains high levels of calcium oxalate and ingestion may cause severe burning and swelling of the mouth, throat, lips, and tongue. Stomach distress and diarrhea can also occur.", 
        image: "https://www.houseplant411.com/wp-content/uploads/640px-Pink_Calla_Lily_Zantedeschia_rehmannii_2000px.jpg"
    }
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