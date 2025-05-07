const menProducts = [
  {
    name: "Stay Wild T-shirt",
    price: 40.0,
    image_url:
      "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "White T-shirt",
    price: 20.0,
    image_url:
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Blue Printed T-shirt",
    price: 20.0,
    image_url:
      "https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Black T-shirt",
    price: 30.0,
    image_url:
      "https://images.unsplash.com/photo-1502389614483-e475fc34407e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Broken Heart T-shirt",
    price: 40.0,
    image_url:
      "https://images.unsplash.com/photo-1613852348851-df1739db8201?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Goku Black T-shirt",
    price: 40.0,
    image_url:
      "https://images.unsplash.com/photo-1678872844677-d650b788709b?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Peace Sign Black T-shirt",
    price: 40.0,
    image_url:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Men",
  },
  {
    name: "Red Shoes",
    price: 80.0,
    image_url:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Black Nike Shoes",
    price: 100.0,
    image_url:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Green Nike Shoes",
    price: 150.0,
    image_url:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Air Jordan Shoes",
    price: 150.0,
    image_url:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Brown New Balance Shoes",
    price: 150.0,
    image_url:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Green Nike Shoes",
    price: 110.0,
    image_url:
      "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=1541&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Men",
  },
  {
    name: "Black n White Nike Shoes",
    price: 120.0,
    image_url:
      "https://images.unsplash.com/photo-1570464197285-9949814674a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNob2VzfGVufDB8fDB8fHww",
    category: "Men",
  },
  {
    name: "Low Air Jordan Shoes",
    price: 120.0,
    image_url:
      "https://images.unsplash.com/photo-1543508282-5c1f427f023f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNob2VzfGVufDB8fDB8fHww",
    category: "Men",
  },
];

module.exports = menProducts;
