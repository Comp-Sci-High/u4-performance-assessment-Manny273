const express = require('express')
const app = express()

const clothingItems = [
  {
    category: "Tops",
  // Top Pieces
    items: [
  {
    name: "bouqet Knit black",
    cost: 126,
    sizes: ["S", "M", "L", "XL"],
    description: "50% cotton 50% polyamide bouclé yarn / pique jacquard knit / jacquard pattern on the back / fits true to size",
    imageURL: "https://derschutze.com/cdn/shop/files/2024_12_09-3-2.jpg?v=1734430590&width=1280",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024_12_09-3-1_copy.jpg?v=1735135014&width=1280",
    quantity: 50,
    path: "/tops/0"
  },
  {
    name: "NYC to RIO Knit black",
    cost: 108,
    sizes: ["M", "L", "XL"],
    description: "100% cotton yarn / knitted pattern on the back / distressed knit pieces on shoulder and sleeves / fits true to size",
    imageURL: "https://derschutze.com/cdn/shop/files/2024_12_05-6-2.jpg?v=1734207355&width=1280",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024_12_05-6-1.jpg?v=1734207356&width=1280",
    quantity: 0,
    path: "/tops/1"
  },
  {
    name: "last supper Puffer black",
    cost: 291,
    sizes: ["S", "M", "L"],
    description: "100% polyester / micro gel filling / embroidery on front and back / adjustable waistband / fits true to size",
    imageURL: "https://derschutze.com/cdn/shop/files/2024_12_05-18-2.jpg?v=1734430599&width=1280",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024_12_05-18-1.jpg?v=1734430599&width=1280",
    quantity: 40,
    path: "/tops/2"
  },
  {
    name: "void Puffer black",
    cost: 291,
    sizes: ["M", "L", "XL"],
    description: "water repellent fabric / 100% polyester / micro gel filling / embroidery on sleeves, front and back / removable hood  / adjustable waistband /  fits true to size",
    imageURL: "https://derschutze.com/cdn/shop/files/processed-2024-11-26-10-1.jpg?v=1732916921&width=1280",
    imageURL2: "https://derschutze.com/cdn/shop/files/processed-2024-11-26-10-3.jpg?v=1732916926&width=1280",
    quantity: 25,
    path: "/tops/3"
  },
  {
    name: "awakening v2 Hoodie black",
    cost: 108,
    sizes: ["S", "M"],
    description: "480gsm / 100% preshrunk cotton / digital print all over / slight distress / true to size",
    imageURL: "https://derschutze.com/cdn/shop/files/2024-10-17-5-1.jpg?v=1730274279&width=1280",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024-10-17-5-2.jpg?v=1730274279&width=1800",
    quantity: 20,
    path: "/tops/4"
  },
  {
    name: "sashiko v2 knit jersey brown",
    cost: 82,
    sizes: ["S", "M", "L", "XL"],
    description: "100% cotton thread / print and embroidery on the front / fits true to size",
    imageURL: "https://derschutze.com/cdn/shop/files/2024-10-24-1-1-1copy.jpg?v=1730372299&width=1280",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024-10-24-1-2-1copy.jpg?v=1730372299&width=1280",
    quantity: 35,
    path: "/tops/5"
  },
  {
    name: "awakening v2 Jersey knitted black",
    cost: 82,
    sizes: ["M", "L", "XL"],
    description: "100% cotton / knitted artwork / fits true to size",
    imageURL: "https://derschutze.com/cdn/shop/files/1_23f83f39-4862-4edf-992f-73d92feff589.jpg?v=1727709764&width=1280",
    imageURL2: "https://derschutze.com/cdn/shop/files/2_92275e3d-2c06-42ad-aded-39158a3d352c.jpg?v=1727709761&width=1280",
    quantity: 15,
    path: "/tops/6"
  },
  {
    name: "lotus Zip Up pink",
    cost: 126,
    sizes: ["S", "M", "L"],
    description: "480gsm French terry / 100% preshrunk cotton / washed effect / embedded crochet detailing / embroidery on back / YKK Zipper/ fits true to size",
    imageURL: "https://derschutze.com/cdn/shop/files/2024-_07_04_11_1.jpg?v=1720623047&width=1280",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024-_07_04_11_2.jpg?v=1720623047&width=1280",
    quantity: 60,
    path: "/tops/7"
  }
  ]
 },
 {
  category: "Bottoms",
  items : [
  // Bottom Pieces
  {
    name: "lotus denim faded rose",
    cost: 49.99,
    sizes: ["S", "M", "L", "XL"],
    description: "Slim fit jeans that offer a modern, streamlined silhouette.",
    imageURL: "https://derschutze.com/cdn/shop/files/processed-2024-11-26-1-2-1.jpg?v=1732784527&width=1800",
    imageURL2: "https://derschutze.com/cdn/shop/files/processed-2024-11-26-1-1-1.jpg?v=1732784525&width=1800",
    quantity: 40,
    path: "/bottoms/8"
  },
  {
    name: "echo Denim",
    cost: 39.99,
    sizes: ["M", "L", "XL"],
    description: "Comfortable chino pants suitable for both work and play.",
    imageURL: "https://derschutze.com/cdn/shop/files/2024_12_09-9-2-1.jpg?v=1734430596&width=1800",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024_12_09-9-1-1.jpg?v=1734430596&width=1800",
    quantity: 30,
    path: "/bottoms/9"
  },
  {
    name: "yasmin v3 denim brown",
    cost: 29.99,
    sizes: ["S", "M", "L"],
    description: "Utility cargo shorts featuring multiple pockets for convenience.",
    imageURL: "https://derschutze.com/cdn/shop/files/processed-2024-11-26-2-2-1.jpg?v=1732784540&width=1800",
    imageURL2: "https://derschutze.com/cdn/shop/files/processed-2024-11-26-2-1-1.jpg?v=1732784545&width=1800",
    quantity: 50,
    path: "/bottoms/10"
  },
  {
    name: "lotus denim black purple tint",
    cost: 34.99,
    sizes: ["S", "M"],
    description: "An elegant pleated skirt perfect for a graceful, chic look.",
    imageURL: "https://derschutze.com/cdn/shop/files/processed-2024-11-26-6-2-1.jpg?v=1732784579&width=1800",
    imageURL2: "https://derschutze.com/cdn/shop/files/processed-2024-11-26-6-1-1.jpg?v=1732784584&width=1800",
    quantity: 25,
    path: "/bottoms/11"
  },
  {
    name: "awakening Denim bronze fade",
    cost: 26.99,
    sizes: ["S", "M", "L"],
    description: "Trendy high-waist shorts that flatter your figure.",
    imageURL: "https://derschutze.com/cdn/shop/files/2024-05-13-2_2_1.jpg?v=1716722638&width=1800",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024-05-13-2_1.jpg?v=1716722638&width=1800",
    quantity: 35,
    path: "/bottoms/12"
  },
  {
    name: "koi fish v2 denim mud wash",
    cost: 44.99,
    sizes: ["M", "L", "XL"],
    description: "Comfortable jogger pants designed for a relaxed, sporty look.",
    imageURL: "https://derschutze.com/cdn/shop/files/2024-07-16-1-1.jpg?v=1723742293&width=1800",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024-07-16-1-2.jpg?v=1723742292&width=1800",
    quantity: 30,
    path: "/bottoms/13"
  },
  {
    name: "western Jogger beige",
    cost: 24.99,
    sizes: ["S", "M", "L"],
    description: "Classic denim shorts perfect for summer and casual outings.",
    imageURL: "https://derschutze.com/cdn/shop/files/2024-09-10-10-1-1.jpg?v=1726994207&width=1800",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024-09-10-10-2-1.jpg?v=1726994208&width=1800",
    quantity: 45,
    path: "/bottoms/14"
  },
  {
    name: "western Jogger black",
    cost: 39.99,
    sizes: ["S", "M", "L"],
    description: "A flowing maxi skirt that exudes a bohemian vibe.",
    imageURL: "https://derschutze.com/cdn/shop/files/2024-09-10-11-1-1.jpg?v=1726994051&width=1800",
    imageURL2: "https://derschutze.com/cdn/shop/files/2024-09-10-11-2-1.jpg?v=1726994052&width=1800",
    quantity: 20,
    path: "/bottoms/15"
  }
 ]
}
];

app.set("view engine","ejs")


app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

app.use(express.static(__dirname + "/public"))


app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html")
})


app.get("/tops", (req,res) => {
  res.render("tops.ejs", clothingItems[0])
})
app.get("/images/logo.webp", (req,res) => {
  res.sendFile(__dirname + "/images/logo.webp")
})
app.get("/tops/:index", (req,res) => {
  let i =req.params.index;
  res.render("singularTop.ejs", clothingItems[0].items[i])
})

app.get("/bottoms", (req,res) => {
  res.render("bottoms.ejs",clothingItems[1]);
})
app.get("/bottoms/:index", (req,res) => {
  let i =req.params.index;
  res.render("singularBottom.ejs", clothingItems[1].items[i-8])
})


app.listen(3000, () => {
    console.log("Server running")
})
