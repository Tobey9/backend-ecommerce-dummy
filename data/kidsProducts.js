const kidsProducts = [
  {
    name: "Stitch Shoes",
    price: 50.0,
    image_url:
      "https://images.unsplash.com/photo-1717664644983-fa919d287460?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGtpZHNob2VzfGVufDB8fDB8fHww",
    category: "Kids",
  },
  {
    name: "Brown Shoes",
    price: 30.0,
    image_url:
      "https://images.unsplash.com/photo-1657194002467-5f7ebe98b7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGtpZHNob2VzfGVufDB8fDB8fHww",
    category: "Kids",
  },
  {
    name: "Black Nike Shoes",
    price: 70.0,
    image_url:
      "https://images.unsplash.com/photo-1518656306295-aa28b28b2504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGtpZHNob2VzfGVufDB8fDB8fHww",
    category: "Kids",
  },
  {
    name: "Big Sole Converse Shoes",
    price: 60.0,
    image_url:
      "https://images.unsplash.com/photo-1680204101108-d1bf3a7c725d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGtpZHNob2VzfGVufDB8fDB8fHww",
    category: "Kids",
  },
  {
    name: "Chuck Norris Converse Shoes",
    price: 65.0,
    image_url:
      "https://images.unsplash.com/photo-1634630797363-dd390bc3577b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
  {
    name: "Green Nike Shoes",
    price: 55.0,
    image_url:
      "https://images.unsplash.com/photo-1578338283913-9c5600f95702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
  {
    name: "Brown Vans Shoes",
    price: 55.0,
    image_url:
      "https://images.unsplash.com/photo-1724044280761-58aae6900099?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
  {
    name: "Black Vans Shoes",
    price: 65.0,
    image_url:
      "https://images.unsplash.com/photo-1601529492219-6b43936322ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
  {
    name: "Lime Green Air Jordan Shoes",
    price: 75.0,
    image_url:
      "https://images.unsplash.com/photo-1700151807931-0faaba3fe826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
  {
    name: "White Air Jordan Shoes",
    price: 85.0,
    image_url:
      "https://images.unsplash.com/photo-1579362094446-3db5b312f2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
  {
    name: "Green Vans Shoes",
    price: 65.0,
    image_url:
      "https://images.unsplash.com/photo-1638824139339-6d92a05d511a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
  {
    name: "Lego Adidas Shoes",
    price: 85.0,
    image_url:
      "https://images.unsplash.com/photo-1661098856696-a5f4e6020551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
  {
    name: "Black Fila Shoes",
    price: 55.0,
    image_url:
      "https://images.unsplash.com/photo-1628183474826-b53c052cfb2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQzfHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
  {
    name: "Lacoste Shoes",
    price: 75.0,
    image_url:
      "https://images.unsplash.com/photo-1718802323158-b32c0330ad4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA0fHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
  {
    name: "White Air Jordan Shoes",
    price: 55.0,
    image_url:
      "https://images.unsplash.com/photo-1555061486-8df38ac5fa6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM2fHxraWRzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
  },
];

module.exports = kidsProducts;
