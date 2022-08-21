// seed.js is going to be the file we run, whenever we want to seed our database, we'll create a bunch of plants at once.

// we want to be careful with this, because when we run it, it'll delete all of the plants in the db. 

// we can modify this later, to only delete plants that don't have an owner already, but we'll keep it simple for now.

const mongoose = require('mongoose')
const Plant = require('./plant')
const db = require('../../config/db')

const startPlants = [
    {
        name: "Dracaena Janet Craig", 
        description: "Dracaena janet craig plants have sword- shaped, leathery, shiny dark green leaves that can be as large as 3” wide and 10”- 20” long. When small, a Dracaena janet craig looks good sitting on a table, desk, or counter; later, as the plant matures, it can be used as a stately floor plant, either in bush or tree form. When purchasing a large Dracaena janet craig, look for one that has at least 3-5 stalks at different heights; this helps ensure that the plant will stay bushy and full as it matures. If growing conditions are ideal, a Dracaena janet craig may produce tall, 10″-12″ (25.4cm- 30.48cm) stalks with large, heavily scented, white flowers. Although this is fun to see, the flowers produce a messy, sticky sap that gets on the floor, carpets, and nearby furniture. The flowers also slow down new leaf development and can even distort the attractive shape of the plant. I like to cut them off as soon as they start to appear.", 
        light: "A Dracaena janet craig will grow slowly in low light, but grows much faster in medium to bright indirect light. When the light is extremely low, new leaves are smaller and narrower. Placing a Dracaena janet craig in the direct sun for even a few minutes, burns the leaves.", 
        water: "When in doubt, do not water a Dracaena janet craig! Allow the top 50% of the soil to dry out before watering. The lower the light, the less often a dracaena needs water. Fluoride, chlorine, or salt in the water causes brown leaf tips and yellow spots on the leaves.", 
        temperature: "A Dracaena janet craig prefers temperatures above 55°F (12.8°C). Cold winter drafts and blowing heaters damage the leaves.", 
        poisonous: "A Dracaena janet craig is sometimes listed as a non- poisonous houseplant; however, some pets, especially cats and dogs, have experienced problems after eating the leaves. My advice, keep all dracaenas away from your pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-deremensis-Janet-Craig-14-BU-1-230x300-2.jpg"
    },
    {
        name: "Dracaena Lemon Lime", 
        description: "The dracaena lemon lime plant, native to Africa, is a very close relative of the dracaena warneki (green and white striped leaves) and the dracaena janet craig (solid green leaves). The dracaena lemon lime has 12”-24” long sword shaped leaves with bright green and yellow stripes. Like other dracaena plants, the leaves are arranged in a rosette and grow off a very thick stem. A dracaena lemon lime is very easy to care for and can easily reach a height of 5ft-7ft. indoors. It also makes a beautiful bush. Because of the bright colors in the leaves, the dracaena lemon lime needs a little more light than other dracaenas. Its a great plant to brighten up any room in your house.", 
        light: "Although a Dracaena lemon lime Plant can adapt to low light, it does better in medium to indirect bright light. Too much direct bright light causes the color in the leaves to fade. Too little light and the new leaves are narrower than the older leaves.", 
        water: "Allow the top 50% of the soil to dry out before watering. Dracaenas are very sensitive to chemicals in the water. If your household water contains a lot of fluorine or chlorine, allow it to sit out over night before using it. Never use water that has passed through a water softener, it is too salty.", 
        temperature: "Provide warm temperatures between 70°-75°F (21.1°-23.9°C).", 
        poisonous: "The ASPCA considers a dracaena lemon lime a poisonous plant to dogs and cats", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-deremensis-Gold-Star-10-BU-2.jpg"
    },
    {
        name: "Dracaena Marginata", 
        description: "A Dracaena marginata is a  stately plant with multiple, snake-like canes, and hundreds of long, thin, leaves. The canes are often thick, twisted, and woody, making them desirable very three very unique appearance. The original variety has narrow, arching, dark green leaves trimmed in deep red. The newer varieties have much more colorful leaves.", 
        light: "Dracaena marginata plants prefer medium light, but survive in low light situations. Lower light slows down the growth rate and reduces the size of new leaves. Direct sun burns the leaves.", 
        water: "Over-watering causes root-rot and is the main reason a Dracaena marginata dies. Water well and don't water again until the top 50% of the soil is dry. In low light, this could take up to three weeks. Brown tips on the leaves indicate over-watering or too much fluoride or salt in the water. Never use water that has passed through a softener, it is too salty. If your household water has a lot of chemicals, allow it to sit out overnight before using it or use rain water or distilled water. This is a stalk plant, so it is common for the lower leaves to turn yellow and fall off if the plant is getting new leaves at the top. Numerous yellow leaves means the plant needs more water.", 
        temperature: "These plants prefer temperatures between 70°-80°F (21.1°- 26.7°C).", 
        poisonous: "A dracaena marginata is mildly poisonous to humans, but they are extremely toxic to dogs and cats with a #2 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-marginata-10-ML-3-215x300.jpg"
    },
    {
        name: "Dracaena Reflexa", 
        description: "A dracaena reflexa, native to Madigascar, Mauritius, and other islands of the Indian Ocean, is another member of the huge dracaena family. The regular dracaena reflexa, or pleomele, has dark green leaves. The dracaena reflexa, Song of India, has yellow stripes on the leaves, while the dracaena reflexa, Song of Jamaica, has off white stripes on the leaves. All varieties have short, narrow, pointed leaves that are spirally arranged on the stem and tufted at the ends of branches. This is is a slow growing, easy-care plant that can be used as a table plant, bush, or short tree.", 
        light: "A dracaena reflexa with solid dark green leaves does well in medium light. The Song of India and Song of Jamaica, with yellow and white stripes in their leaves, need bright indirect light. Direct sun burns the leaves of all varieties of dracaena reflexa.", 
        water: "Like all dracaenas, the reflexa likes to be kept on the dry side. Allow the top 50% of the soil to dry out before watering. I always suggest keeping the plant a little root bound in a small pot so the soil can dry out quickly and the roots do not stay wet too long. When you do water, water well enough so that it comes out the drip holes in the bottom of the pot. Dracaenas are very sensitive to fluorine in the water. If you water has a lot of chemicals in it, allow the water to sit out for 24 hours before using it; alternatively you can use rain water or distilled water.", 
        temperature: "Basic household temperatures between 65°-85° are ideal.", 
        poisonous: "A dracaena reflexa is considered non-toxic to humans but cases have been reported of cats suffering tremors after nibbling on a reflexa.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-reflexa-14-ML-232x300.jpg"
    },
    {
        name: "Dracaena Reflexa Song of India", 
        description: "This hardy, decorative houseplant, formerly called a Pleomele reflexa, is native to Madigascar, Mauritius, and other islands of the Indian Ocean.  The Dracaena reflexa, Song of India, has yellow stripes on short, narrow, pointed green leaves that are spirally arranged on the stem and tufted at the branch ends. The usual Dracaena reflexa has solid green leaves. This is a slow growing plant that can be used as a table plant, bush, or short tree.", 
        light: "A Dracaena reflexa likes bright indirect light but no direct sun", 
        water: "Like all dracaenas, the reflexa likes to be kept on the dry side. Allow the top 50% of the soil to dry out before watering. Over- watering, resulting in root rot, is the main reason this plant dies.", 
        temperature: "65°F (18.3°C) - 85°F (29.4°C). Temperatures below 55°F (12.8°C) can damage the leaves. Avoid cold drafts and heaters.", 
        poisonous: "A Dracaena reflexa is usually listed as a non-toxic plant, but cases have been reported of cats suffering tremors after eating some of the leaves.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-reflexa-Song-of-India-08-2-283x300.jpg"
    },
    {
        name: "https://www.houseplant411.com/wp-content/uploads/Dracaena-deremensis-Warneckei-14-BU-2-300x209.jpg", 
        description: "Dracaena warnekii, like all dracaenas, are hardy, slow-growing plants that thrive on neglect. Sometimes referred to as a “striped dracaena”, the warnekii has long, pointed, narrow green and white striped leaves and can be used as a table plant, bushy floor plant, or tall cane plant for home and office. The “jumbo” variety has wider leaves and is a more compact plant. The “lemon lime” cultivar has yellow and green stripes. A dracaena warnekii is one of the few colorful indoor plants that can survive in low light conditions. NASA recommends the dracaena warnekii as a clean air plant, one of the top ten plants for removing formaldehyde from the air.", 
        light: "A Dracaena warnekii survives in low light, but grows faster and fuller in medium light. In low light, the new leaves may be smaller and narrower. Direct sun burns the leaves.", 
        water: "All dracaena plants like to be kept on the dry side. Water well and then allow the top 50% of the soil to dry out before watering again. Never allow the plant to sit in water. The lower the light level the less water a dracaena warnekii needs. All types of dracaenas are very sensitive to fluorine and chlorine. If your household water is heavily chlorinated or contains a great deal of fluoride, allow it to sit out over night before using it; use water from an outside hose; use rain water or distilled water. Never use water that has passed through a water softener. It is too salty and can damage the leaves.", 
        temperature: "Usual household temperatures between 65°- 80°F (18.3°-26.7°C). are fine for a Dracaena Warnekii. Keep the leaves of striped dracaenas away from cold windows, air conditioners, and heaters.", 
        poisonous: "Dracaena warnekii plants have a level #1 toxicity and are considered slightly poisonous especially to dogs and cats.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Dracaena-deremensis-Warneckei-14-BU-2-300x209.jpg"
    },
    {
        name: "Easter Lily Plant", 
        description: "Easter Lily is an Asian species of flowering bulb that is found in grasslands and slopes in the rich soils and moist shade of woodlands.  It can be challenging to grow.  This is a stoloniferous lily with large large fragrant white flowers that appear in the late summer to early fall. ", 
        light: "Easter Lily Plants need bright indirect light but no direct sun.", 
        water: "Water an Easter Lily Plant when the first inch or two of soil is dry. Be careful not to over water or to allow the Easter Lily Plant to sit in water. Many Easter Lily Plants come in a decorative wrap. Remove this wrap when watering so excess water can drain freely from the Easter Lily plant and allow the plant to air out before replacing the wrap. When buying an Easter Lily Plant, avoid plants that have soggy soil, since may indicate root rot.", 
        temperature: "Easter Lilies prefer moderate to cool temperatures, 60-75 during the day and 55-65 at night. Like many other flowering plants, they do not do well in drafts or placed near fireplaces, heating vents, or appliances that give off heat.", 
        poisonous: "All Lily Plants are poisonous, especially for cats. Cats become ill if they ingest any part of an Easter Lily.", 
        image: "https://www.houseplant411.com/wp-content/uploads/oldimages/Plant_232/634680224411543876-300x300.png"
    },
    {
        name: "Echeveria Plant", 
        description: "The plump, succulent leaves of an echeveria grow in a rosette and are usually pointed with smooth edges, though there are some varieties with a different leaf shape. A powdery wax called farina covers the leaves and protects them from getting burned when the plant is placed in direct sun. The most common echeveria plants have grayish-green or bluish-gray leaves. When placed in very bright light, the 1″-3″ long leaves can turn purple, dark purple, lavender, maroon, white with red edges, green with red edges, or pinkish lavender with pink edges. The flowers of an echeveria plant are usually red, yellow, peach, or orange and grow atop a tall stem. They usually last about two weeks. Intense light and proper temperature help an echeveria flower.", 
        light: "How much light for an echeveria: An echeveria plant likes very bright indirect light and some direct morning sun.", 
        water: "How to water an echeveria: In the spring and summer, keep the soil of an echeveria plant barely moist, always erring on the dry side. Starting in late fall and throughout the winter, allow the soil to totally dry out before watering. The leaves become soft and even wrinkle a bit when the plant needs water. Water the soil and avoid getting water on the plant itself. Over watering is the main reason an echeveria plant dies.", 
        temperature: "Best temperature for an echeveria: Provide warm temperatures between 65°-80°F (18-27°C). The temperature should be 10°-15° cooler at night. During the winter, when the plant is resting, the temperature should be 10° cooler. An echeveria is not a cold hardy plant. If you put the plant outside for the summer, be sure to bring it indoors before the temperatures drops below 50°F (10°C).", 
        poisonous: "Although an echeveria is a non- poisonous plant and safe to have around cats, dogs, and small children, the sharp tips of the plant leaves can cause a painful sore.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Black-Prince-300x225.jpg"
    },
    {
        name: "Emerald Gem Plant", 
        description: "An Emerald Gem plant or Homalomena, native to tropical Asia and South America, is an upright plant with dark green, waxy, spade-shaped leaves. Since these plants are usually about 12″-30″ tall, it makes them ideal for areas with height restrictions. Although an Emerald Gem plant is a relative of the easy-care philodendron, it is a bit more finicky and requires more attention. However, if you are tired of the same old houseplants, an Emerald Gem plant makes a nice addition to your plant collection.", 
        light: "An Emerald Gem plant requires medium indirect light but grows even better in bright indirect light. Homalomenas, as they are also called, can survive in low light but become thin and spindly. The bottom leaves of an Emerald Gem plant turn yellow and fall off when there is not enough light.", 
        water: "Watering is the most difficult part of caring for an Emerald Gem plant. When the plant is either over or under watered the bottom leaves may fall off. Over-watering is also the main reason an Emerald Gem plant gets yellow leaves. Always allow the top 50% of the soil dry out before watering. When you do water, water well enough so that it drains out the drip holes in the bottom of the pot. An Emerald Gem plant doesn't like anything cold, so use warm water and never dump extra ice cubes into the soil.", 
        temperature: "Emerald Gem plants like warm household temperatures between 65°-80°F ( 18.3°-26.7°C). Keep these plants away from air conditioners and cold drafts.", 
        poisonous: "An Emerald Gem plant or Homalomena is a slightly poisonous houseplant with a level #1 toxicity.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Homalomena-Emerald-Gem-10-300x258.jpg"
    },
    {
        name: "Emerald Gem Plant", 
        description: "An Emerald Gem plant or Homalomena, native to tropical Asia and South America, is an upright plant with dark green, waxy, spade-shaped leaves. Since these plants are usually about 12″-30″ tall, it makes them ideal for areas with height restrictions. Although an Emerald Gem plant is a relative of the easy-care philodendron, it is a bit more finicky and requires more attention. However, if you are tired of the same old houseplants, an Emerald Gem plant makes a nice addition to your plant collection.", 
        light: "An Emerald Gem plant requires medium indirect light but grows even better in bright indirect light. Homalomenas, as they are also called, can survive in low light but become thin and spindly. The bottom leaves of an Emerald Gem plant turn yellow and fall off when there is not enough light.", 
        water: "Watering is the most difficult part of caring for an Emerald Gem plant. When the plant is either over or under watered the bottom leaves may fall off. Over-watering is also the main reason an Emerald Gem plant gets yellow leaves. Always allow the top 50% of the soil dry out before watering. When you do water, water well enough so that it drains out the drip holes in the bottom of the pot. An Emerald Gem plant doesn't like anything cold, so use warm water and never dump extra ice cubes into the soil.", 
        temperature: "Emerald Gem plants like warm household temperatures between 65°-80°F ( 18.3°-26.7°C). Keep these plants away from air conditioners and cold drafts.", 
        poisonous: "An Emerald Gem plant or Homalomena is a slightly poisonous houseplant with a level #1 toxicity.", 
        image: "https://www.houseplant411.com/wp-content/uploads/hedera-ivy-278x300.jpg"
    },
    {
        name: "Episcia Plant", 
        description: "Episcias are lovely trailing plants native to Central and South America, Brazil, and the West Indies. An Episcia plant is grown for its colorful textured leaves and small but pretty flowers. The most popular variety of the Episcia plant is the Flame Violet which has silver veined leaves and bears tubular bright pink or orange-red flowers about 3/4″ in size. The Episcia has never become as popular as its close relative the African Violet because they require more care. Episcias grow in a very unique manner. Each plant sends out runners called stolons which trail over the edge of the container or across the soil in the pot. New plants are propagated from these runners.This is a beautiful unique houseplant, but not a good plant for beginners.", 
        light: "Episcia Plants require bright light but no direct sun. If the light is too bright, the color in the leaves fades.", 
        water: "The soil of an Episcia plant should be moist but not soggy at all times. If the soil is too dry, the leaves develop brown edges. In the winter, when an Episcia is not growing, allow the soil to become a little drier.", 
        temperature: "Average household temperatures above 65°F (18.3°C). Lower temperatures may cause brown leaf edges. An Episcia plant usually dies when the temperature goes below 50°F ( 10°C).", 
        poisonous: "An Episcia is a non - poisonous houseplant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/3dbbbf563b06cbb56e4ee7a89eef8aba-196x300.jpg"
    },
    {
        name: "False Aralia", 
        description: "A False Aralia, native to New Caledonia, has many different names depending who you ask: Dizygothica elegantissima, Schefflera Elegantissima, or Spider Aralia. Whatever you call it, this is a beautiful plant with long, narrow, serrated leaves in a palmate (finger-like) arrangement. The color of the leaves starts out as a reddish, coppery green and gradually turns into a lovely dark green. A False Aralia can be used as a table plant when small and, when it matures, as a tall, exotic looking indoor tree.  It's a great plant to propagate using stem tip cuttings.", 
        light: "A False Aralia likes bright indirect light, but no direct sun.", 
        water: "Keep the soil barely moist but never soggy. When you water, water well until the water comes out the drip holes in the bottom of the pot. Allow the top 1″-2″ of soil to dry out before watering again. Wilted leaves usually mean the plant is over-watered. The plant loses leaves if the soil is too wet or too dry. During the winter, when the plant is resting, allow the soil to dry out more before watering.", 
        temperature: "These plants like warm temperatures between 65°-85°F (18-29°C). If the temperature dips below 60°F (15.6°C) a false aralia may drop leaves.", 
        poisonous: "A False aralia is a non- poisonous houseplant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Schefflera-elegantissima-10-204x300.jpg"
    },
    {
        name: "Fatsia Plant", 
        description: "A Fatsia plant, also called a Fatsia japonica, or Japanese aralia, originated in the sub-tropic forests of Japan, Korea, & Taiwan. Fatsia plants are a type of evergreen that can be grown both indoors and outdoors in frost-free areas. A Fatsia plant has shiny, leathery, medium green palmate (hand-shaped) leaves that grow at the ends of stiff stems. Fatsia japonica is a compact, upright plant that, even when grown as a houseplant, can reach 6ft in height. Prune a Fatsia japonica aggressively to keep the growth under control and the shape attractive. Watch out for powdery mildew when the humidity is high.", 
        light: "A fatsia does well in bright filtered light. If you move it outdoors in the spring and summer, be sure to keep it in the shade.", 
        water: "Allow the top 50% of the soil to dry out before watering, the leaves may even start to droop a little. Brown brittle leaves indicate under-watering. Soft leaves that turn yellow and fall off indicate over-watering.", 
        temperature: "A Fatsia likes cool temperatures, especially in the winter when it is resting. It does well in temperatures between 45°-55°F (7.2°C-12.8°C) in the winter and never above 70°F (21.1C) during the rest of the year.", 
        poisonous: "A Fatsia is non-toxic plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Fatsia-japonica-08-1-300x269.jpg"
    },
    {
        name: "Ficus Alii Plant", 
        description: "The Ficus Alii, or Amstel King as it is sometimes called, is a large plant that originally came from Asia, Malaysia, and India. It was first grown commercially in Hawaii where it got the Hawaiian name “alii” which means “king.” Although a Ficus Alii is closely related to the Ficus Benjamina, the Alii variety is much more tolerant and forgiving; it rarely sheds leaves, tolerates lower light, and can be moved around without going into shock. A ficus Alii does grows about 25% slower than a ficus Benjamina. The leaves are quite different than those of the usual Ficus trees. They are medium green, 3″-10” long, narrow, willow-like, and thick. The newer hybrids such as the  King Alii ficus have wider leaves. New growth on the ficus plant is a pretty, reddish-bronze color; but as the leaves mature they change to a medium green.", 
        light: "Ficus Alii plants do well in bright, indirect light; however, they can survive in medium light. The lower the light, the longer a ficus Alii takes to produce new leaves. Rotate it weekly to maintain the plant's beautiful shape.", 
        water: "Water when the top 1″ of the soil has dried out. If the plant is in a container larger than 12″ wait until the top 2″ of soil has dried out. Water deeply so that the excess water drains out the drip holes in the bottom of the pot. Immediately empty excess water and do not allow a ficus Alii to sit in water. New growth turns black and green leaves fall off from over -watering. Leaves become brown and crunchy, drop off, and may turn yellow when the plant needs water.", 
        temperature: "Unlike the ficus Benjamina, these plants are much more tolerant of temperature changes. Although a ficus Alii prefers temperatures between 60°-85° F (19°-25° C), these plants can survive in temperatures as low as 45°F (7.2°C) for a short time.", 
        poisonous: "Ficus Alii are poisonous plants with a level #2 toxicity. The sap contains latex that can cause skin irritations. Always wear gloves when pruning.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ficus-maclellandii-Amstel-King-14-BR.jpg"
    },
    {
        name: "Ficus Benjamina", 
        description: "For many years, a Ficus benjamina had the reputation of being a temperamental, high-light plant that easily dropped leaves if you just looked at it.  Today, however, there are new, hardy varieties that grow in almost any location. You can find ficus trees small enough to sit on a table or as large as 12ft. tall. The slender, pale brown, woody trunks can be straight, braided or twisted into a spiral. The thin, arching branches are covered in hundreds of 1”-3.5” glossy, leathery, pointed., oval to elliptical shaped leaves. All parts of the plant contain a milky, slightly toxic, white sap that can be quite irritating if eaten or if it gets into an open cut.", 
        light: "Ficus trees, especially the Benjamina and Wintergreen varieties, need very bright indirect light. New varieties, called ″Ficus of the Future″, can survive in medium and even low light. Examples of ″Ficus of the Future″ are the Monique with ruffled green leaves, the Midnight with dark green/black leaves, and the ficus Alli with elongated leaves. Direct sun burns the leaves of all ficus trees.", 
        water: "Allow the top 25% of the soil to dry out before watering. Under-watering causes leaves to turn yellow. Green leaves to fall off and new growth turns black when a ficus is over-watered. Ficus trees grow better if you follow a consistent watering schedule.", 
        temperature: "Indoor ficus trees like temperatures between 65°-85°F (18.3°-29.4°C). Keep a ficus tree away from cold drafts, air conditioners, and heaters or it will lose leaves.", 
        poisonous: "A ficus is considered a slightly poisonous houseplant with a level #1 toxicity. Many people find the sap extremely irritating if it comes in contact with their skin.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ficus-benjamina-Midnight-10-BR-197x300.jpg"
    },
    {
        name: "Rubber Tree Plant", 
        description: "Rubber tree plants have thick, leathery, glossy, oval leaves that are about  4”-14” (10cm-35cm) long and 2″-6″ (5cm-15cm) wide. Once damaged, the leaves cannot be trimmed and should be cut off. Interestingly, the leaves of younger plants are larger than those of more mature plants. When small, this versatile plant can be used as table plant and eventually as a bushy floor plant or tall tree. The easy to care for rubber tree can grow up to 10ft tall in a bright room with tall ceilings.", 
        light: "Light requirements for a rubber tree plant: Bright, indirect light especially for the varieties that have cream, pink, or light red variations in the leaves. A rubber tree plant with solid, dark green leaves can grow in medium light but may become leggy when there is not enough light. Direct sun will burn the leaves.", 
        water: "Water requirements for a rubber tree plant: Allow the top few inches of soil (25%-30% depending upon the pot size) to dry out before watering. It is confusing, but yellow leaves can develop when the plant is either over or under- watered. Like its cousin, the ficus benjamina, green leaves fall off and new growth turns black when the plant is over- watered.", 
        temperature: "The best temperature for a rubber tree plant: 60°F - 75°F (15°C-24° C) Temperatures below 55°F (12.8°C) can damage the leaves", 
        poisonous: "Is a rubber tree plant poisonous: The sap of a rubber tree plant is toxic and can irritate the skin, eyes, and mouth. The plant should be kept away from small children, dogs and cats. Always wear gloves and a long sleeve shirt when pruning, or propagating a rubber tree plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ficus-elastica-Robusta-08-BU-2-300x249.jpg"
    },
    {
        name: "Ficus Pumila", 
        description: "Ficus pumila or Creeping fig is a tiny- leafed plant native to Japan, Vietnam and China. Also called a Ficus Repens, it is an excellent table plant, hanging plant, or climbing plant. Since the fast- growing vines of a Creeping Fig easily cling to just about anything, it's also a great plant  if you want to create a topiary. The small (1”-2”), thin, delicate, heart- shaped leaves grow on wiry stems. As a ficus pumila matures, it develops a dense. dark green, mat-like appearance. ", 
        light: "A ficus pumila needs indirect light from an east or west-facing window. Plants with variegated leaves require even more light. Creeping fig plants do surprisingly well in strong artificial light.", 
        water: "Keep the soil moist but never soggy. The leaves of a ficus pumila deteriorate if the soil is allowed to repeatedly dry out. Reduce water during the winter.", 
        temperature: "A ficus pumila, also called a ficus repens, does well in temperatures between 55°F-75°F ( 12.8°C-23.9°C)", 
        poisonous: "A ficus pumila has a #1 toxicity level.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ficus-pumila-Curl-06-copy-300x227.jpg"
    },
    {
        name: "Fiddle Leaf Fig Plant", 
        description: "A Fiddle Leaf Fig has large, green, shiny, leathery leaves with a wavy margin. The heavily veined leaves can be 12″- 18″ ( 30cm - 45cm) long and 8″-12″ (20cm-30cm) wide,  and grow on upright, woody stems. When immature, the plant can be small enough to sit on a table plant, but eventually, with proper care, it becomes a tall, impressive indoor tree. This is a bold looking plant that makes an impression wherever you place it.", 
        light: "A Fiddle Leaf Fig requires bright, indirect light. In low light, new leaves are small and mature leaves may fall off. Turn frequently to keep a Ficus Lyrata from growing toward the light and becoming lop-sided. Too much bright light causes the leaves to fade.", 
        water: "A Fiddle Leaf Fig requires less water than other ficus trees. Allow the top 50% of the soil to dry out and the leaves to become soft and flexible before watering. Keep the leaves dry and water off of the large fiddle shaped leaves to prevent mold. Too much water and water on the leaves can also cause ugly brown spots on the leaves.", 
        temperature: "Fiddle Leaf Fig trees do well in temperatures between 60°-80°F (15.6°- 26.7°C). Keep all types of ficus trees away from air conditioners, cold drafts, and heating vents. Intense cold or heat causes leaf drop.", 
        poisonous: "A Fiddle Leaf Fig is considered a poisonous houseplant with a level #1 toxicity. The sap of is especially irritating.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ficus-lyrata-10-BU-7-182x300.jpg"
    },
    {
        name: "Fishtail Palm", 
        description: "A Fishtail Palm has large, arching, fan-shaped fronds (leaves) with bipinate, smaller leaflets about 6″ long and 4″ wide.  The plant gets its name, Fishtail Palm, because the leaflets are jagged at the distal end and resemble the tail of a fish.  As a houseplant, when properly cared for, a Fishtail Palm can reach a height 4ft-8ft (1.2m-2.4m). There are several types of Fishtail Palms such as the Caryota gigas (Giant Fishtail Palm), Clumping Fishtail palm, Toddy Fishtail Palm, that are too large to use indoors.Although most Fishtail Palms have single trunks, Caryota mitis,  the most popular variety used as a houseplant, is a suckering type. It produces several stems, growing near the base of the main stem and has numerous, ragged- edged leaflets. Caryota urens variety (Wine Fishtail Palm) has fewer, more triangular shaped leaflets.", 
        light: "Fishtail Palms need very bright indirect light from an east or west-facing window. Avoid direct exposure to the sun.", 
        water: "Water well and then allow the top 25% of the soil to dry out before watering again. Never allow the soil to totally dry out or permit a Fishtail Palm to sit in excess water. Leaf edges turn brown if there are too many chemicals in the water or the plant is under watered.", 
        temperature: "Fishtail Palms prefer temperatures between 75°-85°F (23.9°-29.4°C) during the day and 60°-70°F (15.6°-21.1°C) at night. Keep a Fishtail Palm out of cold drafts and away from air conditioners. Nighttime temperatures should never go below 45°F (7.2°C).", 
        poisonous: "The red berries on Fishtail Palm contain calcium oxalate and are poisonous to cats, dogs, and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Caryota-mitis-10-1-259x300.jpg"
    },
    {
        name: "Fittonia", 
        description: "A Fittonia (Nerve Plant), is a small, compact, low-growing plant usually about 6”- 8” tall and 12”- 18” wide. This is a creeping plant with 2” thin, oval, leaves that have distinctive white, pink, red, or silver veins; the leaves are attached to fuzzy stems. Fittonia plants are usually divided into two groups based on the color of the veins in their leaves; white-veined fittonia belong to the Argyroneura Group while red or pink-veined fittonia belong to the Verschaffeltii Group. During the summer, if  growing conditions are excellent, a mature plant may send out 3” flower spikes topped with bracts of small, tubular, yellowish/white flowers during the summer. The brightly colored leaves of the plant are more spectacular than the insignificant flowers.", 
        light: "A Fittonia (Nerve Plant) grows well in bright and medium indirect light. It will survive and grow slowly in lower light but vibrant colors in the leave may fade.", 
        water: "Try to keep the soil of a Fittonia barely moist but never soggy. During the winter, water less and keep the soil drier.", 
        temperature: "A Fittonia plant prefers warm temperatures between 70°F-80°F (21°C-26° C) and does not do well in temperatures below 60°F (15°C).", 
        poisonous: "A Fittonia (Nerve plant, Mosaic plant) is a non- poisonous plant and safe to have around small children, dogs, cats, and other pets..", 
        image: "https://www.houseplant411.com/wp-content/uploads/fittonia-verschaffeltii-200x300-1.jpg"
    },
    {
        name: "Gardenia Plant", 
        description: "A Gardenia plant has beautiful, scented, waxy, white flowers and glossy, green leaves, but are very temperamental plants and won't put up with neglect. A gardenia plant requires very specific growing conditions such as light, humidity, and temperature. Native to Japan and China,  these plants are usually seen as outdoor evergreen bushes on the southern and western coasts of the United States. The key to successfully growing a Gardenia plant indoors is to try to mimic the outdoor environment as closely as possible. Although it is quite a challenge and an accomplishment to grow a gardenia plant indoors, it is a flowering plant like none other. The jasmine fragrance of the flowers has inspired hundreds of perfumes. Before sending a gardenia plant as a gift, be sure the person you're sending it to has the time to care for it and the proper environment, otherwise they will just be frustrated as the plant gradually dies.", 
        light: "A gardenia plant requires very bright light for at least 6-8 hours a day. Be prepared to move your gardenia to different locations as the seasons change. grow lights may be necessary if there is not enough natural light to help your gardenia plant thrive.", 
        water: "Gardenia plants need to be watered very carefully. Allow the top 2-3 inches of the soil to dry out before watering. Over-watering causes root rot, brown spots on leaves, and buds not to open. Under-watering a gardenia plant results in green leaves falling off.", 
        temperature: "The correct temperature is extremely important. Ideal temperatures for gardenia plants are between 65°-70°F (18.3°-21.2°C) during the day and 55°-65°F (12.8°-18.3°C) at night. Cool night temperatures are essential for the buds to set. Gardenia buds drop off if temperatures go above 70°F (21.1°C).", 
        poisonous: "The correct temperature is extremely important. Ideal temperatures for gardenia plants are between 65°-70°F (18.3°-21.2°C) during the day and 55°-65°F (12.8°-18.3°C) at night. Cool night temperatures are essential for the buds to set. Gardenia buds drop off if temperatures go above 70°F (21.1°C).", 
        image: "https://www.houseplant411.com/wp-content/uploads/oldimages/Plant_62/634707072357604368-222x300.jpg"
    },
    {
        name: "Geranium Plant", 
        description: "A geranium plant is a very popular outdoor plant, but also makes a great indoor flowering plant. Geraniums are part of the genus Pelargonium which means “stork” in Latin. Native wildflowers and herbaceous perennials are the real members of the Geranium genus. There are over 200 Pelargonium species, most of them originating in South Africa. A Geranium plant produces clusters of flowers that come in a variety of colors such as white, pink, salmon, red, fuchsia, and lavender. Leaves are green, green and white, or multicolored. Geranium plants can be a compact upright plant or a graceful hanging vine. The vibrantly colored geranium flowers do not have an appealing aroma, but there are several geranium varieties that produce leaves with lovely scents such as rose, lime, peppermint, lemon, orange, or lime.  These plants are considered slightly poisonous and should be kept away from pets and children. Read more about common houseplants that are poisonous in Don't Feed Me To Your Cat! A Guide to Poisonous Houseplants. Geranium plants are a great addition to your houseplant plant collection, but very need very bright light or direct sun for at least 6-8 hours a day to bloom indoors.", 
        light: "Geranium plants grow indoors when placed in moderate light, but only bloom in very bright intense light. Fluorescent lights about 10 to 12 inches from a geranium plant can be used to supplement natural light", 
        water: "Geranium plants survive being under- watered but quickly develop root- rot when over- watered. Wait until the top 50% of the soil is dry, before watering.", 
        temperature: "Geranium plants prefer cool temperatures between 65°-70° F (18.3° 21.1°C) during the day, and around 55°F (12.8°C) at night. Avoid placing a geranium plant in cold, drafty areas or hot, dry places.", 
        poisonous: "Geranium plants are slightly poisonous with a level #1 toxicity.", 
        image: "https://www.houseplant411.com/wp-content/uploads/geranium.jpeg"
    },
    {
        name: "Goldfish Plant", 
        description: "Goldfish plants have long stems, that grow up to 3ft in length, covered in hundreds of small, thick, shiny, dark green leaves and colorful tubular flowers that resemble tiny goldfish. The flowers can be red, orange, or yellow and usually appear in the spring; however, several of the new hybrid varieties produce flowers all year. If you have a high light area that calls for a hanging or table plant that flowers, a Goldfish Plant, Columnea nematanthus, is a perfect choice. A Goldfish plant, native to Southern Mexico, Brazil, and Costa Rica, comes in over 25 different varieties. In nature, it is an epiphytic plant, meaning it grows on other plants, rocks, or trees for support. It’s a member of the Gesneriaceae family and a relative of the Lipstick Plant, Episcia, and African Violet.", 
        light: "A goldfish plant requires bright indirect light especially if you want it to develop flowers.", 
        water: "Allow the top 25%-30% of the soil to dry out before watering. Green leaves fall off when the plant is too wet or too dry.", 
        temperature: "Goldfish plants do well in temperatures between 65°-85°F ( 18.3°-29.4°C). Intense heat burns the leaves. Try to keep goldfish plants out of drafts and away from heaters.", 
        poisonous: "A Goldfish Plant is a slightly poisonous houseplant with a level #1 toxicity.", 
        image: "https://www.houseplant411.com/wp-content/uploads/il_1588xN.1347893659_9giz-295x300.jpg"
    },
    {
        name: "Grape Ivy Plant", 
        description: "A Grape Ivy plant, Cissus rhombifolia, (also called a Cissus alata) and its relative the Oak Leaf or Ellen Danica Ivy, has dark green, glossy leaves that grow off of long , thin stems. The plant is usually only about 18″ tall but can have trailing vines up to 10ft. in length.  Grape Ivy plants look beautiful sitting on a table or hanging in a basket. The tendrils of a Grape Ivy plant or Oak Leaf Ivy plant help them cling to poles or pieces of bark. These plants may be a little difficult to locate because many greenhouses don't want to spend the extra money and time it takes to grow them properly. They can be found at various online plant shops. The new Grape Ivy plant varieties are hardier and less prone to diseases and insects such as spider mites.", 
        light: "Grape Ivy plants require medium to high light though new varieties such as Ellen Danica and Mandianna can live in lower light. If the stems stretch toward the light and new leaves are further apart on the stem, move your plant to a brighter location.", 
        water: "Water well and then allow the top 50% of the soil to dry out before watering again. Crispy leaves mean the plant in over-watered.", 
        temperature: "Grape Ivy plants can handle temperatures from 40°-90°F (4.4°-32.2°C), although growth slows above 80°F ( 26.7°C). The ideal temperature for a Grape Ivy Plant is 60°-80°F ( 15.6°-26.7°C).", 
        poisonous: "A Grape Ivy is a non- poisonous houseplant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Cissus-rhombifolia-08-2-236x300.jpg"
    },
    {
        name: "Hawaiian Schefflera “Gold Capella”", 
        description: "The Hawaiian Schefflera “Gold Capella” is a bushy, upright houseplant with masses of small, shiny, leathery, green and gold patterned leaves. The schefflera plant originally came from Taiwan and, when grown as an outdoor plant, even flowers. These plants can be tall impressive trees, bushy floor plants, small table plants, or even be small enough to be used in a dish garden. A Hawaiian Schefflera is a bushy, upright houseplant with masses of small, shiny, leathery leaves. The original Hawaiian Schefflera has solid green leaves; the Hawaiian Schefflera “Gold Capella” has gold and green leaves; and the Hawaiian Schefflera “Tribute” has white and green leaves.", 
        light: "The brighter the light the faster and fuller a Hawaiian Schefflera plant grows. Variegated Hawaiian Scheffleras like the ”Capella” require more light than solid green Hawaiian scheffleras. Direct sun burns the leaves of all types of schefflera plants.", 
        water: "Water well and then allow the top 1/3 of the soil to dry out before watering again. This might be an inch or two in a small pot and 5” or more in a large pot. Green leaves fall off and new growth turns black when a Hawaiian Schefflera is over- watered. Leaves turn bright yellow when it is under-watered.", 
        temperature: "Hawaiian Scheffleras are fine with basic household temperatures. Try to keep all Schefflera plants out of cold drafts and away from heaters and air conditioners.", 
        poisonous: "Hawaiian Schefflera plants are mildly poisonous with a #1 toxicity leveland should be kept away from pets and children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Schefflera-arboricola-Gold-Cappella-08-BU-2-295x300.jpg"
    },
    {
        name: "Hawaiian Schefflera Plant", 
        description: "As an indoor houseplant, a Hawaiian Schefflera can be as small as 5″ and be used in dish gardens. Hawaiian Scheffleras are perfect table or floor plants for home or office. and are also an excellent choice if you want to try your hand at the art of bonsai. A Hawaiian schefflera, like its close cousin the Schefflera actinophylla or Umbrella tree plant, can also be a specimen tree reaching a height of six feet or more. This attractive plant is available with braided stems and also as bonsai plant. A Hawaiian Schefflera has masses of small, shiny, leathery leaves. The leaves are arranged palmately with 7-9 leaflets per leaf. The leaflets are small, ranging in size from about 3”- 7” (7.5-18 centimeters) in length and 2”- 4” (5- 10 centimeters) in width.", 
        light: "The brighter the light the faster and bushier a Hawaiian schefflera plant grows. Variegated Hawaiian scheffleras, like the ”capella” variety, require more light than solid green varieties. Direct sun burns the leaves on all varieties of schefflera.", 
        water: "Water well and then allow the top 1/3 of the soil to dry out before watering again. Seemingly healthy leaves fall off and new growth turns black when a Hawaiian schefflera is over- watered. Leaves turn bright yellow when the plant needs more water.", 
        temperature: "Hawaiian scheffleras grow well in normal household temperatures. Try to keep the plant out of cold drafts and away from heaters and air conditioners.", 
        poisonous: "Hawaiian scheffleras are considered to be slightly poisonous plants with a #1 toxicity level. Keep this plant out of reach of small children and pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Schefflera-arboricola-08-BU-7-300x273.jpg"
    },
    {
        name: "Hawaiian Ti Plant", 
        description: "A Hawaiian Ti plant, Cordyline fruticosa, is in the family Asparagaceae. It is a relative of the Agave, Sansevieria, and Yucca.  Although many plant sources still refer to the plant as Cordyline terminalis, that name is now considered invalid by the International Cordyline Society. Other common names for a Hawaiian Ti plant are, Ti Plant, Good Luck Plant, and Hawaiian Good Luck plant. Many types of cordylines are native to Hawaii, but other varieties were also found in Australia, New Zealand, South America, and parts of Asia. The long leaves of a Hawaiian Ti plant are often used as roofing material and to make traditional “hula” skirts.", 
        light: "A Hawaiian Ti plant grows well in bright, indirect light; avoid direct sun or the leaves will burn. If the light is too low the beautiful purple, red, pink, magenta, orange, cream, and yellow leaves revert to green.", 
        water: "Proper watering is the most difficult part of taking care of a Ti plant. The soil should be moist but never soggy, and should never totally dry out. If your household water contains fluorine, chlorine, or passes through a water softener, use distilled water or allow your regular water to sit out over night before using it. Chemicals in the water damage the leaves of a Hawaiian Ti plant. Fluoride toxicity is especially harmful, causing ugly brown leaf tips.", 
        temperature: "", 
        poisonous: "", 
        image: "https://www.houseplant411.com/wp-content/uploads/17AUG08014-226x300.jpg"
    },
    {
        name: "Hibiscus Plant", 
        description: "A Hibiscus plant is an outdoor plant in tropical and sub-tropical areas throughout the world. However, a hibiscus plant also does well as an indoor plant in warm, temperate climates. There are hundreds of varieties of hibiscus and all bloom indoors if cared for correctly. However, the flowers may be smaller than when the plant is grown outdoors. Many new hibiscus varieties are hybrids; this means they are grown from tissue cultures in greenhouses.Hibiscus plants, upright, woody bushes with dark glossy maple-leaf shaped foliage, produce large, beautiful flowers in orange, red, yellow, pink, and white. The size of the blooms may be as small as 2” or as large as 10”-12.” A Hibiscus plant can be 1'-15' in height depending on whether it's growing in a pot or planted outside. Hibiscus plants also make beautiful topiaries and bonsai plants.", 
        light: "Hibiscus require very bright light and several hours of direct sun in order to bloom as indoor plants.", 
        water: "During the spring and summer, when a Hibiscus is actively growing, keep the soil moist but never soggy. In the fall and winter, allow the top 2” to dry out before watering.", 
        temperature: "Hibiscus Plants do well in temperatures between 65°-85°F (18.3°-29.4°C). If the temperature goes below 40°F (4.4°C) for a prolonged period of time, the new growth is ruined.", 
        poisonous: "Hibiscus are non- poisonous plants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Hibiscus-263x300.jpg"
    },
    {
        name: "Hoya Hindu Rope Plant", 
        description: "The unique Hoya Hindu Rope plant, Hoya carnosa compacta, is a draping succulent plant that produce clusters of star-shaped, waxy flowers. The thick, twisted, curly, cupped leaves of a Hindu Rope plant are why it's often called Krinkle Kurl. Hindu rope plants can be found in solid green or with variegated leaves. This type of hoya plant is very easy to care for as long as you have plenty of light and are careful with your water.", 
        light: "All Hindu Rope plants, both green and variegated, grow best in very bright light. Southern exposure is best, but it can adapt to east or west locations in front of a window. In lows light, a Hindu Rope plant may never bloom. Afternoon sun will burn and bleach the color from the leaves.", 
        water: "All hoya plants, including the Hindu Rope plant, are succulents that need very little water. Water when the soil is almost dry. During the winter, water all varieties of hoya plants even less.", 
        temperature: "Hindu Rope plants prefer daytime temperatures of 70 ° (F) or higher and nighttime temperatures between 60° and 65° (F). These temperatures encourage mature plants to flower during the late spring and summer.", 
        poisonous: "Although not considered poisonous, a Hindu Rope Plant can make dogs and cats ill if they eat a large number of leaves.", 
        image: "https://www.houseplant411.com/wp-content/uploads/450px-Hoya_compacta_12-225x300.jpg"
    },
    {
        name: "Hoya Plant", 
        description: "A hoya plant is a trailing or climbing plant with thick, succulent leaves. The leaves come in many sizes, colors, shapes, and textures. All hoya plants  produce clusters of waxy, star shaped flowers from late spring to early autumn. Hoya carnosa is the basic species we use as an indoor plant. There are several different varieties of  this species available. There are over 50 other hoya plant varieties such as the Hoya Kerri (Sweetheart hoya) with heart-shaped leaves and the Hoya pubicalyx with elongated, oval leaves that make great houseplants. Most varieties grown indoors produce clusters, called umbels, of five-pointed, star shaped, fragrant flowers in red, white, pink, purple, yellow, orange, and even black.", 
        light: "How much light for a hoya plant: These plants grow faster and bloom more often in very bright, indirect light. They are one of the few indoor plants that can handle direct morning sun. Although a hoya plant can adapt to lower light, growth is slower and there are less flowers.", 
        water: "How to water a hoya plant: This is a succulent plant that stores water in its leaves. Allow the top several inches of soil to dry out before watering. Although somewhat drought resistant, they do need additional water when in bloom. Water less during fall and winter. If your water contains fluorine or chlorine, allow it to sit out 24 hours or more before using it so the chemicals can dissipate. Fluorine, chlorine, and salt are harmful to a hoya plant.", 
        temperature: "Best temperature for a hoya plant: Temperatures of 65°F - 80°F (18.3°- 26.7°C ) during the day and 60°F - 65°F (15.6°C - 18.3°C) at night are best. If the temperature is too cold or a hoya plant is sitting in a cold draft, it may drop leaves.", 
        poisonous: "Although not considered poisonous, hoya plants may make dogs and cats ill if they eat a large number of the leaves..", 
        image: "https://www.houseplant411.com/wp-content/uploads/bcada06010e07dfcf98a0c966dd93ec6-200x300.jpg"
    },
    {
        name: "Hoya Shooting Star Plant", 
        description: "The Hoya Shooting Star plant is native to Thailand and Malaysia. White blooms on a Hoya Shooting Star plant appear in large clusters, with the waxy petals leaning back behind the center of the flower, like shooting stars. There are over 200 species of the easy to grow almost indestructible hoya plant. These plants are often referred to as Wax Plants because of the waxy nature of their leaves and flowers.  Hoya plants grow well and produce more flowers when hanging in front of a window that gets bright, indirect light. Even a houseplant novice will be successful growing a Hoya plant if they don't over water and cause stem and root rot.", 
        light: "Hoya Plants do best and bloom more in very bright light. They are one of the few indoor houseplants that can even thrive in morning, direct sun. Although a Hoya Shooting Star plant can adapt to lower light, they grow slower and do not produce the fragrant porcelain- like flowers that are so beautiful.", 
        water: "These are Succulent Plants and need to completely dry out before being watered. Hoya Shooting Star plants do thrive on neglect, but need additional water when in bloom.", 
        temperature: "Hoya Plants can adapt to any temperature but prefer 70°-80°F ( 21.1°-26,7°C) during the day and 60°-65°F (15.5°-18.3°C) at night.", 
        poisonous: "Although not considered poisonous, Hoya Plants can make dogs and cats ill if they eat a large number of leaves.", 
        image: "https://www.houseplant411.com/wp-content/uploads/800px-Shooting_Stars_Hoya_multiflora_5-300x168.jpg"
    },
    {
        name: "Jade Plant", 
        description: "A jade plant is a green friend that just won't die! It got the name jade plant because of its resemblance to the jade gemstone. Today, there are many different varieties and cultivars available, with different leaf colors, patterns, and leaf shapes. The Crassula ovata remains the most the most popular. The scientific name is a perfect description of what the plant looks like. “Crassula” is latin for thick, and refers to the fat or thick, succulent, 2″ plant leaves. Ovata means egg-shaped, and refers to the shape of the leaves. All types of jade plants have thick roots, shiny, plump, leaves, and sturdy stems that store water and make the plant drought resistant. When placed in very bright light, some may develop red leaf edges. Certain jade plants produce tiny pink or white star-shaped flowers, not in the summer like most plants, but around Christmas.", 
        light: "How much light for a jade plant: This succulent plant grows best in bright, indirect light and morning sun. When there is not enough light, the stems of a jade plant become leggy and bare as they reach for the light.", 
        water: "How to water a jade plant: The main reason a jade plant loses leaves and eventually dies is from over watering due to rot rot. Allow the soil to practically dry out and the leaves to become a little soft and flat before watering.", 
        temperature: "Best temperature for a jade plant: These plants prefer warm temperatures between 60°-70°F (15°-25°C).", 
        poisonous: "A Jade plant, and all members of the Crassula family, are toxic to dogs, cats, and other pets. The sap of the plant is an irritant should be kept away from small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Crassula-argentea-12-1-300x230.jpg"
    },
    {
        name: "Jasmine Plant", 
        description: "Jasmine plants are very fragrant, flowering plants that originated in China and the tropical areas of Asia. The buds of a jasmine plant are often more fragrant than the flowers.  Jasmine plants have shiny, oval leaves and white, pink, or pale yellow tubular flowers.  The Jasmine “polyanthum” variety is a twining, climbing plant with long, slender, trailing stems and is one of the easiest varieties to grow indoors. Another good indoor variety is Jasminum “sambac” or “Maid of New Orleans.” Under the right conditions, high humidity and very bright light,  jasmine plants will bloom several times a year, filling your home with a beautiful scent.", 
        light: "A jasmine plant likes bright indirect light throughout the year, and in the winter benefits from a few hours of direct sun. However, avoid putting a jasmine plant in the direct sun during the summer, the intensity of the sun will burn the leaves. Try moving your jasmine plant outside for the summer, the plant will love it.", 
        water: "Jasmine plants loses leaves and leaves dry up from both too much and too little water. In the spring and summer, keep the soil moist but never soggy. The top 30% of the soil should dry out before watering. Soil that stays too wet, too long, damages the roots of the plant and eventually prevents the roots from absorbing water at all. When you do water, water well enough so that the water comes out the drip holes in the bottom of the pot. Do not allow the plant to sit in this excess water. During the fall and winter, keep a jasmine plant on the drier side.", 
        temperature: "Jasmine plants do well in cool rooms where the temperature is 65°-70°F (18.3°-21.1°C) and the light is very bright. If the room is too warm, a jasmine plant grows but doesn't produce any flowers. These plants, like most houseplants, do poorly when placed near heaters, hot air vents, and fireplaces.", 
        poisonous: "Jasmine plants do well in cool rooms where the temperature is 65°-70°F (18.3°-21.1°C) and the light is very bright. If the room is too warm, a jasmine plant grows but doesn't produce any flowers. These plants, like most houseplants, do poorly when placed near heaters, hot air vents, and fireplaces.", 
        image: "https://www.houseplant411.com/wp-content/uploads/jasmine-copy-300x275.jpg"
    },
    {
        name: "Kalanchoe Plant", 
        description: "The kalanchoe “blossfeldiana” is the most frequently sold variety. This is a short, bushy, upright plant, about 12” to 18” inches tall and  6” to 20” wide , with thick, oval-shaped, scalloped leaves. The long-lasting, star-like blooms on a kalanchoe blossfeldiana appear in clusters at the ends of sturdy stems throughout the year. The vibrant colored flowers come in red, orange, yellow, lavender, white, and pink. Some new varieties even have bi-colored flowers. The kalanchoe “mangginii” has fleshy, rounded leaves, and produces large, bell-shaped flowers in bright red and reddish/orange during the spring. The leaves of both varieties turn red when the plant is in very bright light. Best of all, the blooms on kalanchoe plants may last up to 8 weeks. If you are quick to deadhead the plant (pinch off dead flowers), you'll encourage the plant to bloom more often and produce a greater number of flowers.", 
        light: "How much light for a kalanchoe plant: A kalanchoe plant needs bright, indirect light and can even tolerate direct sun during the fall, winter, and spring. Direct sun in the summer is too intense and burns the leaves. The blooms on a kalanchoe plant are photo-periodically induced. As the days get shorter and a kalanchoe experiences longer periods of darkness, the plant produces more flowers.", 
        water: "How to water a kalanchoe plant: The succulent kalanchoe plant has plump leaves that store water for long periods of time. These plants are easily over-watered which results in root-rot. Always allow the top 50% of the soil to dry-out before watering a kalanchoe. If the soil is exceptionally dry, sit the plant in a deep saucer of water for about ten minutes; this not only prevents over-watering, but keeps the leaves dry. Wet leaves encourage plant diseases such as leaf spot or powdery mildew.", 
        temperature: "Best temperature for a kalanchoe plant: Indoor kalanchoe plants like warm temperatures between 60°-85°f (15.6°-18.3°c). Low temperatures below 40°f (4.4°c) can damage or kill a kalanchoe plant within a few hours. Keep these plants away from cold drafts and open windows during the winter.", 
        poisonous: "A Kalanchoe is a poisonous plant and is toxic to cats and dogs. They belong to a group of plants that contain naturally-occurring poisons that affect the heart. The toxins in kalanchoe plants are similar to digitalis or digoxin, a common heart medication used in both human and veterinary medicine. The severity of the injury depends upon the amount of plant eaten. All parts of the plant are considered toxic, even the water in the vase of cut kalanchoe flowers is dangerous.", 
        image: "https://www.houseplant411.com/wp-content/uploads/il_794xN.2350555218_dqqh-300x214.jpg"
    },
    {
        name: "Kangaroo Paw Fern", 
        description: "A Kangaroo Paw fern (Microsorum diversifolium), native to Australia and some parts of New Zealand, is a type of epiphytic evergreen with firm, leathery, shiny green, oddly- shaped fronds that vary in size. This is a short fern that grows to be about a foot tall, but its fronds can spread outwards 2-3 feet or more. A Kangaroo Paw fern does not need much fertilizer and likes to be warm. This is a unique looking, easy care fern that is very attractive in a hanging basket or set on a table in a pretty pot.", 
        light: "Medium to bright indirect light. Keep in the shade outside.", 
        water: "Water a kangaroo paw fern when the top 50% of the soil has dried out. When watering, give the plant enough water so that it drains out the bottom drip holes. I don’t recommend misting this or any other houseplant because keeping the leaves wet encourages bacterial and fungus infections.", 
        temperature: "These ferns like warm temperatures 70°-75°F (21.1°-23.9°C) in the spring, summer, and fall, but prefer cooler temperatures 60°-65°F (15.6°-18.3°C) and brighter light in the winter.", 
        poisonous: "These are non- poisonous houseplants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/100802013614253246-300x224.jpg"
    },
    {
        name: "Kentia Palm", 
        description: "Even when grown indoors, this palm is a very large, impressive plant that requires plenty of space; it can be as tall as 10-12 feet and as wide as 4-5ft. The wide feathery fronds (leaves) can easily be 10”-14” long. While in nature, a kentia palm has a single stem, when purchased as an indoor plant, there are multiple stems since several kentia palms are usually planted together to help the plant appear full and bushy. The fact that this is a slow growing plant and there are several plants in the pot, helps explain why a kentia palm is so expensive to purchase.", 
        light: "A Kentia palm can survive in low light conditions, but grows better and develops more fronds in medium indirect light.", 
        water: "Water a Kentia palm well and then allow the top 25% of soil to dry out before watering again. Over-watering, resulting in root-rot, is the major reason Kentia palms die. Kentias, like most indoor palms, are sensitive to salt, fluoride, and chlorine in the water. Allow your water to sit out over night before using it or use distilled water if your household water has a high chemical concentration. Never use water that has passed through a softener, it is too salty.", 
        temperature: "Keep the room temperature between 65 and 85 degrees for a Kentia Palm.", 
        poisonous: "A Kentia Palm is a non- poisonous plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Howea-forsteriana-kenta14-268x300.jpg"
    },
    {
        name: "Kimberly Queen Fern", 
        description: "Kimberley queen fern (Nephrolepis obliterata) is a tropical fern with beautiful dark green, sword-shaped fronds. It can be grown in the ground in warm climates but cannot tolerate cold temperatures. Thrives in full shade or dappled sunlight. It cannot tolerate full sun. When grown indoors, it acts as a natural air purifier. Fertilize twice a year and keep soil consistently moist but not wet.", 
        light: "Amount of light a Kimberly Queen fern needs: This fern prefers bright, indirect light and grows well hanging in front of a window with a north or east exposure. If the light is too bright, the leaves of a Kimberly Queen fern may lose their vibrant green color.", 
        water: "How to water a Kimberly Queen fern: Allow the top 25%-35% of the soil to dry-out before watering your fern. The fronds may turn a pale green when the fern needs water. Crispy brown fronds, especially in the center of a Kimberly Queen fern, is a sign that the plant is being over-watered. Avoid using “hard“ water, water that has a lot of salt in it or has passed through a water softener, or water high in fluorine or chlorine.", 
        temperature: "The best temperature for a Kimberly Queen fern is 60°F-70F° (15.5°C-21.1°C). Keep all indoor plants away from fireplaces, heaters, and air conditioners.", 
        poisonous: "Kimberly Queen ferns are non poisonous plants and are not toxic to cats, dogs, or small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Nephrolepis-exaltata-08-1-300x297.jpg"
    },
    {
        name: "Lipstick Plant", 
        description: "The leaves of a lipstick plant can be light green, dark green, mottled green, green, and maroon, or green with white streaks. Although the leaves are usually elliptically shaped, growing in pairs, and having smooth edges, certain varieties may have wavy, curly leaves. The distinctive looking flowers of a lipstick plant are how the plant got its name. The tubular flowers, which develop in clusters at the ends of the stems, look like tiny tubes of lipstick as they emerge from their dark maroon buds. Lipstick plant flowers can be bright red, orange, yellow, or pink. Although a lipstick plant can surprise us by flowering throughout the year, most blooms appear during the spring and summer. Flowers buds develop on the previous year's growth, so keep that in mind when pruning the plant.", 
        light: "Lipstick plants require very bright indirect light but no direct sun.", 
        water: "Allow the top 25% of the soil to dry out before watering. If the leaves appear soft and shriveled, provide more water. Lipstick plants lose healthy green leaves when over-watered.", 
        temperature: "A Lipstick Plant grows well in temperatures between 75°- 85°F (24°-29°C)", 
        poisonous: "Lipstick plants are not poisonous and are safe to have around cats, dogs, and small children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Lipstick.jpg"
    },
    {
        name: "Lucky Bamboo Plant", 
        description: "A Lucky Bamboo plant is really made up of the cut stalks of a Dracaena Sanderiana and is native to West Africa and Eastern Asia. The Lucky Bamboo plant stalks are usually 4″- 24″in height. Followers of Feng Shui believe that the Lucky Bamboo plant brings prosperity and good fortune to a home or business. If the Lucky Bamboo plant arrangement has three stalks it supposedly brings happiness; five stalks bring wealth; and six stalks bring health. Four stalks are never allowed since the word four in Chinese sounds too close to the Chinese word for death.", 
        light: "A Lucky Bamboo plant can survive in medium and even lower light, but does much better in bright indirect light. Pale leaves indicate the plant is not getting enough light. Avoid placing a Lucky Bamboo plant in the direct sun.", 
        water: "Watering a Lucky Bamboo plant takes a little time and care. Keep the marbles and pebbles in your vase covered with water at all times. Add water to the container weekly to keep the proper level. Once a month remove the Lucky Bamboo plant from the water, rinse the roots, pebbles, and marbles with fresh water, and then put the arrangement back together. Avoid using water high in fluoride or chlorine.", 
        temperature: "Lucky Bamboo Plants do best in warm temperatures between 70°-85°( 21°-29°C)", 
        poisonous: "A Lucky Bamboo plant has a #1 toxicity level and is considered to be a mildly to moderately poisonous plant, especially to dogs and cats.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Lucky-Bamboo-200x300.jpeg"
    },
    {
        name: "Maidenhair Fern", 
        description: "A Maiden Hair fern, which originated in the Brazilian tropics, can be found growing in temperate climates throughout the world. The graceful, delicate fronds sometimes reach 20″-24″ in length and are covered in tiny, triangular, bright green leaflets called pinnae. During the spring, a Maidenhair Fern produces fronds that seem to have tiny dark brown “spots” on the underside of the leaf edges. The “spots” are really fern spores; this is how the fern propagates in nature. These specialized fronds do not live as long as regular fronds and if you don't like the way they look just cut them off.  Although a Maidenhair fern does require more care and attention, with the proper care this plant can live for a long while, growing more beautiful with each passing year.", 
        light: "A maidenhair fern prefers bright indirect light but still grows slowly in medium light. It can handle early morning sun, but afternoon sun burns the fronds.", 
        water: "Keep the soil moist but not soggy and never allow it to totally dry out. If the soil is too wet, a maidenhair fern develops root rot and fungal diseases.", 
        temperature: "Maidenhair ferns need consistent temperatures. They can handle warmth or cold, but prefer warm areas. Never place a maidenhair fern where the temperature fluctuates constantly.", 
        poisonous: "A maidenhair fern is a non- poisonous plant.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Adiantum-raddianum-10-copy-2-300x278.jpg"
    },
    {
        name: "Majesty Palm", 
        description: "For its size, a Majesty palm, Ravenea Rivularis, is a relatively inexpensive plant with large, feathery, arching green fronds on several stems. Although a slow growing plant, in the proper indoor location, it can grow as tall as 8ft. This palm is a species of tree in the Arecaceae family, not to be confused with the Araceae  family that contains poisonous plants such as the dieffenbachia, Calla Lily, Caladium, and Anthurium.They are a challenge to take care of and are not very forgiving. Majesty Palms, native to Madagascar, do extremely well outdoors in rain forests, swamps, or in tropical areas such as Florida. In nature they can grow as tall as eighty feet. Indoors, a Majesty Palm often struggles to survive and does not do as well as a bamboo palm, neanthebella palm, kentia palm, or parlor palm.", 
        light: "A Majesty Palm needs very bright indirect light at all times. Inadequate light causes yellow fronds (leaves).", 
        water: "The soil of a Majesty Palm should be consistently moist but not soggy. Never let the soil totally dry out or allow the plant to sit in the excess water that drains out. Brown tips and fronds are telling you that the plant needs more water. Yellow leaf tips mean the plant has been over-watered.", 
        temperature: "Best temperature for a Majesty Palm is between 45°F-85°F ( 7.2°C-29.4°C). Try to keep the plant away from cold drafts or heating vents.", 
        poisonous: "A Majesty Palm is a non- poisonous plant and is not toxic to cats, dogs, or children.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Ravenea-rivularis-10-3-295x300.jpg"
    },
    {
        name: "Golden Pothos", 
        description: "Golden Pothos is a common cultivar of devil's ivy that has variegated leaves which display a sharp intermingling of green and yellow hues. Like other lighter-colored, variegated Pothos cultivars, golden Pothos will require a bit of extra sunlight to maintain its handsome pattern. Even so, these plants are very low-maintenance and quite popular.", 
        light: "A marble queen pothos survives in low light but looks better and grows faster in medium to bright indirect light. When the light is too low, the white swirls on the leaves revert to green on the new growth.", 
        water: "Marble queen pothos like their soil to be kept on the dry side. During the spring and summer, water well and then allow the top 50% of the soil to dry out before watering again. During the fall and winter, let the soil get almost totally dry before watering. If in doubt, wait for the leaves to become soft and droop a little before you water. Black leaves indicate over watering while bright yellow leaves mean the plant has gotten a bit too dry before you watered.", 
        temperature: "The best temperature is between 65°F-85°F (18.3°C-29.4°C) The leaves may be damaged if the temperature drops below 55°F ( 12.8°C).", 
        poisonous: "A marble queen pothos is very poisonous with a #2 toxicity level. Pets that eat stems or leaves of the plant may exhibit vomiting, pawing at the mouth, lack of appetite, and drooling.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Epipremnum-aureum-Marble-Queen-08-2.jpg"
    },
    {
        name: "Mimosa Pudica Plant", 
        description: "Shame plant, Mimosa pudica, or sensitive plant, is named for its unique characteristic of curling up when touched. The fernlike leaves will curl inwards when disturbed. It's purple fuzzy flowers make it an attractive houseplant, however, the plant contains alkaloids which are toxic to people and animals.", 
        light: "Sensitive Plants, Mimosa pudica, require bright light and even direct sun in the early morning.", 
        water: "Keep the soil of a Sensitive Plant moist but never soggy. A Mimosa Pudica requires less water during the winter. Sensitive Plants thrive on rain water if it is not acidic. A Sensitive Plant needs less water in the winter months.", 
        temperature: "Sensitive Plants like temperatures between 60°-85°F (16°-29°C).", 
        poisonous: "Mimosa Pudica or Sensitive Plant has a level #4 toxicity and is a very poisonous houseplant. Always wash your hands with soapy water after touching the leaves of a Mimosa pudica.", 
        image: "https://www.houseplant411.com/wp-content/uploads/800px-Mimosapudica-300x225.png"
    },
    {
        name: "Moses in the Cradle Plant", 
        description: "Boatlily 'Sitara' has eye-catching multi-colored foliage. The top sides of its leaves are green with pink variegation and margins, with darker pink undersides. this plant is popular as a houseplant due to its interesting foliage and low care needs.", 
        light: "A Moses in the Cradle plant needs very bright light. If the plant gets less than 6-8 hours a day of bright light, the stems become leggy.", 
        water: "Before watering a Moses in the Cradle plant, allow the top few inches of soil to dry out. Keep the soil drier during the winter months, when all houseplants, not just a Moses in the Cradle plant, are not actively growing.", 
        temperature: "The ideal temperature for a Moses in the Cradle plant is 60°-85° F (16°-19°C) during the day and about 10° cooler at night.", 
        poisonous: "A Moses in the Cradle plant is a poisonous plants with a #3 toxicity level. The sap can causes severe pain if it gets in the mouth or eyes and skin irritations. A Moses in the Cradle plant is toxic to cats, dogs, and small children so please keep this colorful plant out of reach.", 
        image: "https://www.houseplant411.com/wp-content/uploads/il_1588xN.2903478742_lzsp-300x200.jpg"
    },
    {
        name: "Natal Mahogany Plant", 
        description: "The little known Natal Mahogany plant, Trichila dregeana, is an excellent upright exotic looking houseplant that loves to be watered. The Natal Mahogany, a hardy, woody, bushy plant with dark green shiny leaves, can reach over 7 feet in height and over 4 feet in width. Although a Natal Mahogany resembles a Schefflera Amate, it's more exotic looking and much more forgiving. Interiorscapers have learned that a Natal Mahogany can grow even in moderate, low light as long as it has enough water.", 
        light: "Natal Mahogany houseplants like medium light but will even grow in lower light. These plants become leggy and thin in very low light.", 
        water: "Natal Mahogany plants thrive on water and are very forgiving when you over-water. These plants prefer their soil to be consistently moist, but not soggy, at all times. Place a saucer under a Natal Mahogany plant to hold extra water. Yellow leaves usually indicate that the plant needs more water.", 
        temperature:"A Natal Mahogany can survive temperatures as low as 45°F (7.2°C). In temperatures above 80°F (26.7°C) check the soil frequently to be sure the plant does not dry out", 
        poisonous: "The outer coating of the seeds of a Natal Mahogany plant are poisonous", 
        image: "https://www.houseplant411.com/wp-content/uploads/Trichilia-dregei-10-3.jpg"
    },
    {
        name: "Norfolk Pine", 
        description: "In nature the Norfolk Pine can grow as tall as 200 feet (60 meters), and the trunk can be as large as 10ft (3 meters) in diameter. As a houseplant, a Norfolk Pine can be small enough to sit on a table or big enough to fill the corner of a large room with tall ceilings. When grown indoors, it rarely gets taller than 9ft. When purchasing a Norfolk Pine, try to find a plant with multiple trunks so that it will stay bushy and full season after season. The branches are arranged in a perfectly symmetrical design and the trunks grow straight up.", 
        light: "How much light for a Norfolk Pine: A Norfolk Pine requires very bright light, even some direct, morning sun. Bottom branches die and fall off when the plant doesn't get enough light. Turn the plant weekly so all parts of a Norfolk Pine are exposed to bright light and the plant grows symmetrically.", 
        water: "How to water a Norfolk Pine: Keep the soil of a Norfolk Island Pine barely moist at all times. Yellow needles indicate that the soil is either too wet or too dry. If the soil of a Norfolk Pine completely dries out, entire fronds turn gray, brittle, and fall off.", 
        temperature: "Best temperature for a Norfolk Pine: A Norfolk Pine prefers cool temperatures between 60-70°F (15.6°-21.1°C) but will survive temperatures as low as 40°F (4.4°C) for brief time. Keep the plant away from cold drafts, air conditioning vents, and heating vents.", 
        poisonous: "Although not considered poisonous, if the needles of a Norfolk Pine are ingested by pets or children, they cause severe stomach irritation. I'd recommend keeping this plant far away from children and pets especially around Christmas when things are hectic and accidents happen.", 
        image: "https://www.houseplant411.com/wp-content/uploads/il_1588xN.2109340810_osrd-1-300x300.jpg"
    },
    {
        name: "Orchid - Cymbidium Orchid Plant", 
        description: "A Cymbidium Orchid plant, or Boat orchid, is among the most attractive, popular, and long lasting orchid plants available throughout the world.  The name Cymbidium comes from the greek word Kumbos which means cavity and refers to the shape of the base of the lip of the flower.", 
        light: "Cymbidium orchids like as much bright, indirect light as you can provide; but avoid placing them in the direct sun. Light green upright leaves indicate that your orchid plant is getting the proper amount of light. Dark green leaves mean a Cymbidium orchid needs more light. Yellow leaves are an indication that they are getting too much light.", 
        water: "The easiest way to kill Cymbidium orchid plants is by over-watering. When watering, thoroughly drench the plant, then let the excess water drain out the bottom drip holes. Allow the top 50% of the soil to dry out before watering again. You can prevent over and under-watering by checking the roots, they should be whitish- green and plump. Follow these few watering tips to prevent watering problems. Never allow orchid plants sit in water. Do not get water on the leaves or flowers. Never use water that has passed through a softener. Soil type, temperature, time of year, humidity, and pot size all influence how much water orchid plants need. The soil dries out faster in winter because of the heat and low humidity in homes and offices. Too much or too little water is the main cause of Bud Blast, orchid buds dying before they open.", 
        temperature: "Temperature is another important factor if you want indoor Cymbidium orchids to bloom. Ideal temperatures for the flower buds to set is 65°F-70°F (18.3°C-21.1°C) during the day and 10°-15° cooler at night. Temperature is especially important during the fall when orchid flowers are just starting to develop. Cymbidium plants can handle temperatures as low as 45°F (7° C), but do not do well in temperatures above 80° F (26.7°C). The higher the temperature, the more important it is to have good air movement around the plant.", 
        poisonous: "Cymbidium orchid plants are non- poisonous.", 
        image: "https://www.houseplant411.com/wp-content/uploads/oldimages/Plant_191/634643370823529821-199x300.png"
    },
    {
        name: "Orchid - Phalaenopsis Orchid Plant", 
        description: "n nature a phalaenopsis orchid plant sends out aerial roots so it can cling to trees, so as a houseplant most of its roots are above the pot and grow outside the container. This is perfectly normal so don't cut them off.  Tall flower stalks grow out of the leaf joints and produce 3″-6″ wide, flattened flowers. The exquisite flowers grow in a line on long arching stems and can be yellow, white, pink, lavender, purple, cream, spotted, or striped.", 
        light: "There is an orchid plant for almost any lighting condition, but none like being in the direct sun. If an area is too dark, the leaves turn dark green instead of the grassy yellow green they should be and the orchid plant doesn't bloom. If there is too much light, the leaves turn yellow and develop sunspots. A location near an east or west-facing window is usually the best location. Most orchid plants prefer about 10 hours of light a day.", 
        water: "The easiest way to kill any Orchid Plant is by over-watering. Always allow the top 50% of the potting compost to dry out before watering. Check the roots of an Orchid Plant monthly to be sure they are staying whitish green and plump. Set the plant in a deep saucer of water for about 30 minutes so it can absorb water through the drip holes in the bottom on the pot. Use tepid water that has not passed through a softener (too salty). If your household water has a lot of chemicals in it, allow the water to sit out over night before using it. Type of soil, temperature, time of year, humidity, and pot size all influence an orchid plant's watering needs. Orchids dry out a little faster in the winter because of the heat in your home and low humidity.", 
        temperature: "Orchid plants do well when the temperature is 65°-80°F (18°-26° C) during the day and 15° cooler at night. In the fall, cool night temperatures help the flower spikes develop. Once the orchid buds appear try to keep the temperature constant or the buds may fall off.", 
        poisonous: "Allvarietiesof orchid plants are non poisonous and safe to have around cat, dogs, and other pets.", 
        image: "https://www.houseplant411.com/wp-content/uploads/Another_Phaleonopsis_2252750743-300x200.jpg"
    },
    {
        name: "Ornamental Pepper Plant", 
        description: "An Ornamental Pepper plant (Capsicum Annuum) originally from South America, is an attractive plant that can be as small as 6” or, if planted outside, as large as 2-3 feet. They have upright, shiny, green leaves and when bearing fruit, these plants are covered in small, vibrantly orange, red, yellow, and purple peppers. An Ornamental Pepper plant grown indoors usually bears fruit only once and is then discarded or planted outside. This is an easy care plant that bears ornamental fruit in the fall and winter. If you are interested in learning about more easy care houseplants, check out our Plant Wizard.", 
        light: "Very bright light, even full sun. Ornamental pepper plants start to reach for the light and become quite leggy if they don't get at least 6-8 hours of very bright light every day; near a south-facing window is a great location.", 
        water: "Keep the soil barely moist and water the surface of the soil evenly. Water well, until it comes out the drip holes in the bottom of the pot; then allow the top 20% of the soil to dry out before watering again. Do not allow the plant to sit in the excess water.", 
        temperature: "These plants like warm temperatures, above 75°F (23.9C) if possible. The warmer the temperature, the faster the plant grows and the fruits develop.", 
        poisonous: "An Ornamental Pepper plant is a non- poisonous plant", 
        image: "https://www.houseplant411.com/wp-content/uploads/Unknown-25.jpeg"
    },
    {
        name: "Money Tree Plant", 
        description: "Today, a Money Tree plant is available throughout the world especially in bonsai form. A Pachira aquatica usually has a central trunk made up of three, five, or seven stems that are often braided together. Each leaf has 5-7 bright green, shiny, leathery leaflets.  When small, a Money Tree can be trained as a bonsai or used as a table plant. As the plant matures, it makes an impressive indoor tree  sometimes growing as tall as six feet or more.", 
        light: "A Money Tree plant grows best in medium to bright indirect light. This plant even does well under fluorescent lights.", 
        water: "Water well and then allow the top 1- 2“ of soil to dry out before watering again. A Pachira aquatica requires less water during the winter months when resting. Be sure to use a container with bottom drip holes to prevent over- watering and root rot. It's important to water the soil evenly.", 
        temperature: "This plant prefers temperatures between 65°-75°F (16°-24° C.)", 
        poisonous: "Money Tree plants are non- poisonous houseplants.", 
        image: "https://www.houseplant411.com/wp-content/uploads/d6762d36543f506491f1178dc5823fae.jpg"
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