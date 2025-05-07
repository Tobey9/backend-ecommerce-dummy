const womenProducts = [
  {
    name: "Orange Shirt",
    price: 35.0,
    image_url:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Women",
  },
  {
    name: "Black Jacket",
    price: 90.0,
    image_url:
      "https://images.unsplash.com/photo-1622445275992-e7efb32d2257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Women",
  },
  {
    name: "Black Top",
    price: 50.0,
    image_url:
      "https://plus.unsplash.com/premium_photo-1670282392820-e3590c1c5c54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHx0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
    category: "Women",
  },
  {
    name: "White T-shirt",
    price: 30.0,
    image_url:
      "https://plus.unsplash.com/premium_photo-1690038783904-b9d3edc24992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHx0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
    category: "Women",
  },
  {
    name: "White Copenhagen T-shirt",
    price: 40.0,
    image_url:
      "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
    category: "Women",
  },
  {
    name: "Black T-shirt",
    price: 30.0,
    image_url:
      "https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHx0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
    category: "Women",
  },
  {
    name: "Aquamarine T-shirt",
    price: 30.0,
    image_url:
      "https://plus.unsplash.com/premium_photo-1681484184209-b6e2d37710d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHx0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
    category: "Women",
  },
  {
    name: "Floral Blouse",
    price: 60.0,
    image_url:
      "https://images.unsplash.com/photo-1568732939097-b949d8c03cc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Women",
  },
  {
    name: "Imagine Dragons T-shirt",
    price: 55.0,
    image_url:
      "https://images.unsplash.com/photo-1572879759273-d95646f4a0c5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Women",
  },
  {
    name: "Pink&Blue Shoes",
    price: 110.0,
    image_url:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww",
    category: "Women",
  },
  {
    name: "Pink New Balance Shoes",
    price: 120.0,
    image_url:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
    category: "Women",
  },
  {
    name: "Pink New Balance Shoes",
    price: 115.0,
    image_url:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fHww",
    category: "Women",
  },
  {
    name: "Yellow Air Jordan Shoes",
    price: 125.0,
    image_url:
      "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Women",
  },
  {
    name: "Brown Boots",
    price: 150.0,
    image_url:
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHNob2VzfGVufDB8fDB8fHww",
    category: "Women",
  },
  {
    name: "Pink Yeezy",
    price: 130.0,
    image_url:
      "https://images.unsplash.com/photo-1554735490-5974588cbc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHNob2VzfGVufDB8fDB8fHww",
    category: "Women",
  },
];

module.exports = womenProducts;
