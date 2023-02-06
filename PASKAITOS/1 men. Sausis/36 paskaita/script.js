const someArr = [
    {
        "username": "johndoe123",
        "age": 35,
        "gender": "male",
        "phoneNumber": "555-555-5555",
        "email": "johndoe123@example.com",
        "name": "John Doe"
    },
    {
        "username": "janedoe456",
        "age": 25,
        "gender": "female",
        "phoneNumber": "555-555-5556",
        "email": "janedoe456@example.com",
        "name": "Jane Doe"
    },
    {
        "username": "bobsmith789",
        "age": 45,
        "gender": "male",
        "phoneNumber": "555-555-5557",
        "email": "bobsmith789@example.com",
        "name": "Bob Smith"
    },
    {
        "username": "sarahjones101",
        "age": 32,
        "gender": "female",
        "phoneNumber": "555-555-5558",
        "email": "sarahjones101@example.com",
        "name": "Sarah Jones"
    },
    {
        "username": "mikebrown212",
        "age": 41,
        "gender": "male",
        "phoneNumber": "555-555-5559",
        "email": "mikebrown212@example.com",
        "name": "Mike Brown"
    },
    {
        "username": "ashleytaylor323",
        "age": 29,
        "gender": "female",
        "phoneNumber": "555-555-5560",
        "email": "ashleytaylor323@example.com",
        "name": "Ashley Taylor"
    },
    {
        "username": "joshuamiller434",
        "age": 38,
        "gender": "male",
        "phoneNumber": "555-555-5561",
        "email": "joshuamiller434@example.com",
        "name": "Joshua Miller"
    },
    {
        "username": "amandamiller545",
        "age": 22,
        "gender": "female",
        "phoneNumber": "555-555-5562",
        "email": "amandamiller545@example.com",
        "name": "Amanda Miller"
    },
    {
        "username": "matthewdavis656",
        "age": 50,
        "gender": "male",
        "phoneNumber": "555-555-5563",
        "email": "matthewdavis656@example.com",
        "name": "Matthew Davis"
    },
    {
        "username": "laurenrogers767",
        "age": 40,
        "gender": "female",
        "phoneNumber": "555-555-5564",
        "email": "laurenrogers767@example.com",
        "name": "Lauren Rogers"
    }
]
const imgArr = ['http://hd.wallpaperswide.com/thumbs/volcano_eruption_lightning-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/futuristic_cityscape-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/the_wise_owl-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/full_moon_reflection-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/moon_12-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/mysterious_forest-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/dragon_2-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/jurassic_world_dominion_2022_movie-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/keep_the_ocean_clean-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/army_gas_mask-t2.jpg']

const body = document.querySelector('body')
function userInfo (){
    someArr.map(user => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        const age = document.createElement('div')
        const userName = document.createElement('h1')
        const phone = document.createElement('div')
        const email = document.createElement('div')
        const name = document.createElement('h2')
        const gender = document.createElement('div')


        div.classList.add('box')
        age.classList.add('age')
        userName.classList.add('userName')
        phone.classList.add('phone')
        email.classList.add('email')
        name.classList.add('name')
        gender.classList.add('gender')

        age.innerHTML = 'Age: '+user.age
        img.src = imgArr[Math.floor(Math.random() * imgArr.length)]
        userName.innerHTML = user.username
        phone.innerHTML = user.phoneNumber
        email.innerHTML = user.email
        name.innerHTML = user.name

        div.appendChild(img)
        div.appendChild(age)
        div.appendChild(userName)
        div.appendChild(phone)
        div.appendChild(email)
        div.appendChild(name)
        div.appendChild(gender)

        body.appendChild(div)

        if (user.gender === "male")  gender.style.backgroundColor = '#1e9bff'
        if (user.gender === "female")  gender.style.backgroundColor = 'lightpink'

        img.onclick = () => {
            console.log(img.src)
        }
        age.onclick = () => {
            console.log(user.age)
        }
        userName.onclick = () => {
            console.log(user.username)
        }
        phone.onclick = () => {
            console.log(user.phoneNumber)
        }
        email.onclick = () => {
            console.log(user.email)
        }
        name.onclick = () => {
            console.log(user.name)
        }
        gender.onclick = () => {
            console.log(user.gender)
        }
    })
}
// userInfo()

function userInfoEasyWay (){
    someArr.map(user => {
        body.innerHTML += `<div class="box">
                <img src= "http://hd.wallpaperswide.com/thumbs/army_gas_mask-t2.jpg" >
                <div class="age">${user.age}</div>
                <h1 class="username">${user.username}</h1>
                <div class="phone">${user.phoneNumber}</div>
                <div class="email">${user.email}</div>
                <h2 class="name">${user.name}</h2>
                <div class="gender"></div>
        </div>`

        img.src =imgArr[Math.floor(Math.random() * imgArr.length)]
        if (user.gender === "male")  gender.style.backgroundColor = '#1e9bff'
        if (user.gender === "female")  gender.style.backgroundColor = 'lightpink'


    })

    const boxes = document.querySelectorAll('.box')
    boxes.forEach(item => item.onclick =()=>{
        console.log(user)
    })
}
// userInfoEasyWay()


/************************** **********************************/

const productArr = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3,
            "count": 400
        }
    },
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 1.9,
            "count": 100
        }
    },
    {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
            "rate": 3.3,
            "count": 203
        }
    },
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 470
        }
    },
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 250
        }
    },
    {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.2,
            "count": 140
        }
    },
    {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
            "rate": 2.6,
            "count": 235
        }
    },
    {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 340
        }
    },
    {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.8,
            "count": 679
        }
    },
    {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 130
        }
    },
    {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.5,
            "count": 146
        }
    },
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }
]


function shopList (){
    productArr.map(prod  => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        const productTitle = document.createElement('div')
        const productPrice = document.createElement('div')
        const productDescription = document.createElement('div')
        const productRate = document.createElement('div')

        div.classList.add('box')
        img.src = prod.image
        productTitle.innerHTML = 'Product Title: '+ prod.title
        productPrice.innerHTML ='Product Price: '+ prod.price
        productDescription.innerHTML = 'Product Description: '+prod.description
        productRate.innerHTML = 'Product Rate: '+prod.rating.rate

        div.appendChild(img)
        div.appendChild(productTitle)
        div.appendChild(productPrice)
        div.appendChild(productDescription)
        div.appendChild(productRate)

        body.appendChild(div)
    })
}
// shopList()

function shopListEasy (){
    productArr.map(prod =>{
        body.innerHTML += `
        <div class="box">
            <img src=${prod.image} >
            <h1>${prod.title}</h1>
            <h2>Price: ${prod.price}</h2>
            <div class="productDescription">Description: ${prod.description}</div>
            <div>Rating: ${prod.rating.rate}</div>
            <button>Delete</button>
            <span>Change Color</span>
        </div>`
    })
    const deleteButton = document.querySelectorAll('button')
    deleteButton.forEach(btn => btn.onclick =(event)=> {
        event.composedPath()[1].remove()
    })
    const color = document.querySelectorAll('span')
    color.forEach(btn => btn.onclick =(event)=> {
        event.composedPath()[1].style.backgroundColor = 'green'
    })
}
shopListEasy()
