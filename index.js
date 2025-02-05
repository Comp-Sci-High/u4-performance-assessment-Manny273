const express = require('express')
const app = express()

const clothingItems = [
  {
    category: "Tops",
  // Top Pieces
    items: [
  {
    name: "Classic White T-Shirt",
    cost: 19.99,
    sizes: ["S", "M", "L", "XL"],
    description: "A timeless white t-shirt perfect for everyday wear.",
    imageURL: "https://example.com/images/white-tshirt.jpg",
    quantity: 50
  },
  {
    name: "Black Hoodie",
    cost: 39.99,
    sizes: ["M", "L", "XL"],
    description: "A warm and stylish black hoodie for casual outings.",
    imageURL: "https://example.com/images/black-hoodie.jpg",
    quantity: 30
  },
  {
    name: "Striped Long Sleeve",
    cost: 29.99,
    sizes: ["S", "M", "L"],
    description: "Comfortable long sleeve top featuring classic stripes.",
    imageURL: "https://example.com/images/striped-long-sleeve.jpg",
    quantity: 40
  },
  {
    name: "Denim Jacket",
    cost: 49.99,
    sizes: ["M", "L", "XL"],
    description: "A versatile denim jacket ideal for layering.",
    imageURL: "https://example.com/images/denim-jacket.jpg",
    quantity: 25
  },
  {
    name: "Floral Blouse",
    cost: 34.99,
    sizes: ["S", "M"],
    description: "An elegant floral blouse perfect for a chic look.",
    imageURL: "https://example.com/images/floral-blouse.jpg",
    quantity: 20
  },
  {
    name: "Casual Polo Shirt",
    cost: 24.99,
    sizes: ["S", "M", "L", "XL"],
    description: "A classic polo shirt for a relaxed, everyday style.",
    imageURL: "https://example.com/images/polo-shirt.jpg",
    quantity: 35
  },
  {
    name: "V-Neck Sweater",
    cost: 44.99,
    sizes: ["M", "L", "XL"],
    description: "A soft V-neck sweater that's perfect for cooler days.",
    imageURL: "https://example.com/images/vneck-sweater.jpg",
    quantity: 15
  },
  {
    name: "Graphic Tee",
    cost: 22.99,
    sizes: ["S", "M", "L"],
    description: "A trendy graphic tee with a bold design statement.",
    imageURL: "https://example.com/images/graphic-tee.jpg",
    quantity: 60
  },
  {
    name: "Sleeveless Crop Top",
    cost: 18.99,
    sizes: ["S", "M"],
    description: "A stylish crop top perfect for warm weather and layering.",
    imageURL: "https://example.com/images/crop-top.jpg",
    quantity: 45
  },
  {
    name: "Lace Top",
    cost: 27.99,
    sizes: ["S", "M", "L"],
    description: "A delicate lace top for a sophisticated, feminine look.",
    imageURL: "https://example.com/images/lace-top.jpg",
    quantity: 20
  }
  ]
 },
 {
  category: "Bottoms",
  items : [
  // Bottom Pieces
  {
    name: "Slim Fit Jeans",
    cost: 49.99,
    sizes: ["S", "M", "L", "XL"],
    description: "Slim fit jeans that offer a modern, streamlined silhouette.",
    imageURL: "https://example.com/images/slim-fit-jeans.jpg",
    quantity: 40
  },
  {
    name: "Chino Pants",
    cost: 39.99,
    sizes: ["M", "L", "XL"],
    description: "Comfortable chino pants suitable for both work and play.",
    imageURL: "https://example.com/images/chino-pants.jpg",
    quantity: 30
  },
  {
    name: "Cargo Shorts",
    cost: 29.99,
    sizes: ["S", "M", "L"],
    description: "Utility cargo shorts featuring multiple pockets for convenience.",
    imageURL: "https://example.com/images/cargo-shorts.jpg",
    quantity: 50
  },
  {
    name: "Pleated Skirt",
    cost: 34.99,
    sizes: ["S", "M"],
    description: "An elegant pleated skirt perfect for a graceful, chic look.",
    imageURL: "https://example.com/images/pleated-skirt.jpg",
    quantity: 25
  },
  {
    name: "High-Waist Shorts",
    cost: 26.99,
    sizes: ["S", "M", "L"],
    description: "Trendy high-waist shorts that flatter your figure.",
    imageURL: "https://example.com/images/highwaist-shorts.jpg",
    quantity: 35
  },
  {
    name: "Jogger Pants",
    cost: 44.99,
    sizes: ["M", "L", "XL"],
    description: "Comfortable jogger pants designed for a relaxed, sporty look.",
    imageURL: "https://example.com/images/jogger-pants.jpg",
    quantity: 30
  },
  {
    name: "Denim Shorts",
    cost: 24.99,
    sizes: ["S", "M", "L"],
    description: "Classic denim shorts perfect for summer and casual outings.",
    imageURL: "https://example.com/images/denim-shorts.jpg",
    quantity: 45
  },
  {
    name: "Maxi Skirt",
    cost: 39.99,
    sizes: ["S", "M", "L"],
    description: "A flowing maxi skirt that exudes a bohemian vibe.",
    imageURL: "https://example.com/images/maxi-skirt.jpg",
    quantity: 20
  },
  {
    name: "Leather Pants",
    cost: 59.99,
    sizes: ["M", "L"],
    description: "Edgy leather pants designed to make a bold fashion statement.",
    imageURL: "https://example.com/images/leather-pants.jpg",
    quantity: 15
  },
  {
    name: "Culottes",
    cost: 32.99,
    sizes: ["S", "M", "L", "XL"],
    description: "Stylish culottes that blend comfort with contemporary design.",
    imageURL: "https://example.com/images/culottes.jpg",
    quantity: 25
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

app.get("/bottoms", (req,res) => {
  res.render("bottoms.ejs",clothingItems[1]);
})



app.listen(3000, () => {
    console.log("Server running")
})
