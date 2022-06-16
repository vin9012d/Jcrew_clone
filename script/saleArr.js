let saleArr = [
    {
        imgUrl : "https://www.jcrew.com/s7-img-facade/BH465_SU9295_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name : "Scoopneck stretch cardigan top",
        description : "Your luxe cardigan top has arrived. This fresh take on the cardigan",
        strikePrice : "11800",
        price : "14999",
        off : "24",
        type : "top",
        category : "women",
        id : "1"
    },
    {
        imgUrl : "https://www.jcrew.com/s7-img-facade/BF360_BL9511_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name : "Magic Rinse™ half-zip sweatshirt",
        description : "We've got a new trick up our sleeve(s)...",
        strikePrice : "4899",
        price : "10999",
        off : "50",
        type : "top",
        category : "women",
        id : "2"
    },
    {
        imgUrl : "https://www.jcrew.com/s7-img-facade/AY080_NA6167_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name : "Magic Rinse™ crewneck sweatshirt",
        description : "We've got a new trick up our sleeve(s)... Meet Magic Rinse",
        strikePrice : "4899",
        price : "10999",
        off : "50",
        type : "top",
        category : "women",
        id : "3"
    },
    {
        imgUrl : "https://www.jcrew.com/s7-img-facade/BF015_SU9003_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name : "Cashmere ribbed crewneck sweatshirt in stripe",
        description : "We upgraded our cashmere collection with finer, loftier fibers to make the soft stuff",
        strikePrice : "9999",
        price : "15999",
        off : "33",
        type : "top",
        category : "women",
        id : "4"
    },
    {
        imgUrl : "https://www.jcrew.com/s7-img-facade/AW510_HT0810_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name : "Cotton-silk piqué sweater",
        description : "This soft sweater combines the ease of cotton with the refinement of silk",
        strikePrice : "7899",
        price : "9888",
        off : "29",
        type : "shirt",
        category : "men",
        id : "5"
    },
    {
        imgUrl : "https://www.jcrew.com/s7-img-facade/AW510_YL5820_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name : "Cotton-silk piqué sweater",
        description : "This soft sweater combines the ease of cotton with the refinement of silk",
        strikePrice : "2400",
        price : "6199",
        off : "63",
        type : "shirt",
        category : "men",
        id : "6"
    },
    {
        imgUrl : "https://www.jcrew.com/s7-img-facade/BE903_GR6553_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name : "Cotton cable-knit crewneck sweater",
        description : "We knit the classic cable-knit sweater in substantial-yet-versatile cotton",
        strikePrice : "7199",
        price : "9699",
        off : "23",
        type : "shirt",
        category : "men",
        id : "7"
    },
    {
        imgUrl : "https://www.jcrew.com/s7-img-facade/BE386_SP2335?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name : "Camden crepe-sole slip-ons in English suede",
        description : "Our Camden slip-ons are crafted in premium suede from C.F. Stead",
        strikePrice : "12999",
        price : "18990",
        off : "33",
        type : "shoes",
        category : "men",
        id : "8"
    },
    {
        imgUrl : "https://www.jcrew.com/s7-img-facade/BE393_PP2862?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name : "Nordic low-top hikers",
        description : "Inspired by vintage mountain gear, the J.Crew Nordic Collection is engineered to keep you sure-footed and bone-dry",
        strikePrice : "11666",
        price : "13666",
        off : "24",
        type : "shoes",
        category : "men",
        id : "9"
    },
    {
        imgUrl : "https://www.jcrew.com/s7-img-facade/AK786_BL8551?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name : "Woven belt",
        description : "Inspired by the ropes on ships, this braided belt is for the the person hoping to look like someone who knows port from starboard.",
        strikePrice : "4400",
        price : "3200",
        off : "27",
        type : "belt",
        category : "men",
        id : "10"
    }
]

localStorage.setItem("sale",JSON.stringify(saleArr));