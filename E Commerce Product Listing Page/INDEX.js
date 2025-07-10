// Image links mapped by product title
const imageLinks = {
  "Wireless Headphones": "C:\Users\Dell\Desktop\E Commerce Product Listing Page\IMAGE",
  "Running Shoes": "https://source.unsplash.com/300x200/?running-shoes",
  "Smartphone": "https://source.unsplash.com/300x200/?smartphone",
  "Coffee Mug": "https://source.unsplash.com/300x200/?coffee-mug",
  "Yoga Mat": "https://source.unsplash.com/300x200/?yoga-mat",
  "Bluetooth Speaker": "https://source.unsplash.com/300x200/?bluetooth-speaker",
  "Smartwatch": "https://source.unsplash.com/300x200/?smartwatch",
  "Notebook": "https://source.unsplash.com/300x200/?notebook",
  "Designer T-Shirt": "https://source.unsplash.com/300x200/?tshirt",
  "LED Lamp": "https://source.unsplash.com/300x200/?desk-lamp",
  "Sunglasses": "https://source.unsplash.com/300x200/?sunglasses",
  "Cookbook": "https://source.unsplash.com/300x200/?cookbook",
  "Gaming Mouse": "https://source.unsplash.com/300x200/?gaming-mouse",
  "Laptop Sleeve": "https://source.unsplash.com/300x200/?laptop-sleeve",
  "Wall Clock": "https://source.unsplash.com/300x200/?wall-clock",
  "Perfume": "https://source.unsplash.com/300x200/?perfume",
  "Leather Wallet": "https://source.unsplash.com/300x200/?leather-wallet",
  "Throw Pillow": "https://source.unsplash.com/300x200/?throw-pillow",
  "USB Hub": "https://source.unsplash.com/300x200/?usb-hub",
  "Travel Backpack": "https://source.unsplash.com/300x200/?travel-backpack"
};

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 99,
    rating: 4.5,
    image: imageLinks["C:\Users\Dell\Desktop\E Commerce Product Listing Page\IMAGE"]
  },
  {
    id: 2,
    title: "Running Shoes",
    category: "Clothing",
    price: 59,
    rating: 4.2,
    image: imageLinks["Running Shoes"]
  },
  {
    id: 3,
    title: "Smartphone",
    category: "Electronics",
    price: 199,
    rating: 4.6,
    image: imageLinks["Smartphone"]
  },
  {
    id: 4,
    title: "Coffee Mug",
    category: "Home",
    price: 15,
    rating: 4.0,
    image: imageLinks["Coffee Mug"]
  },
  {
    id: 5,
    title: "Yoga Mat",
    category: "Accessories",
    price: 25,
    rating: 4.1,
    image: imageLinks["Yoga Mat"]
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    category: "Electronics",
    price: 45,
    rating: 4.4,
    image: imageLinks["Bluetooth Speaker"]
  },
  {
    id: 7,
    title: "Smartwatch",
    category: "Electronics",
    price: 120,
    rating: 4.3,
    image: imageLinks["Smartwatch"]
  },
  {
    id: 8,
    title: "Notebook",
    category: "Books",
    price: 12,
    rating: 3.9,
    image: imageLinks["Notebook"]
  },
  {
    id: 9,
    title: "Designer T-Shirt",
    category: "Clothing",
    price: 35,
    rating: 4.2,
    image: imageLinks["Designer T-Shirt"]
  },
  {
    id: 10,
    title: "LED Lamp",
    category: "Home",
    price: 60,
    rating: 4.5,
    image: imageLinks["LED Lamp"]
  },
  {
    id: 11,
    title: "Sunglasses",
    category: "Accessories",
    price: 30,
    rating: 4.1,
    image: imageLinks["Sunglasses"]
  },
  {
    id: 12,
    title: "Cookbook",
    category: "Books",
    price: 18,
    rating: 4.0,
    image: imageLinks["Cookbook"]
  },
  {
    id: 13,
    title: "Gaming Mouse",
    category: "Electronics",
    price: 49,
    rating: 4.6,
    image: imageLinks["Gaming Mouse"]
  },
  {
    id: 14,
    title: "Laptop Sleeve",
    category: "Accessories",
    price: 25,
    rating: 4.3,
    image: imageLinks["Laptop Sleeve"]
  },
  {
    id: 15,
    title: "Wall Clock",
    category: "Home",
    price: 40,
    rating: 4.0,
    image: imageLinks["Wall Clock"]
  },
  {
    id: 16,
    title: "Perfume",
    category: "Accessories",
    price: 55,
    rating: 4.4,
    image: imageLinks["Perfume"]
  },
  {
    id: 17,
    title: "Leather Wallet",
    category: "Accessories",
    price: 70,
    rating: 4.2,
    image: imageLinks["Leather Wallet"]
  },
  {
    id: 18,
    title: "Throw Pillow",
    category: "Home",
    price: 22,
    rating: 3.8,
    image: imageLinks["Throw Pillow"]
  },
  {
    id: 19,
    title: "USB Hub",
    category: "Electronics",
    price: 28,
    rating: 4.3,
    image: imageLinks["USB Hub"]
  },
  {
    id: 20,
    title: "Travel Backpack",
    category: "Accessories",
    price: 80,
    rating: 4.5,
    image: imageLinks["Travel Backpack"]
  }
];

// DOM elements
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

// Render product cards
function renderProducts(productList) {
  productGrid.innerHTML = "";
  if (productList.length === 0) {
    productGrid.innerHTML = "<p>No products found.</p>";
    return;
  }
  productList.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h4>${product.title}</h4>
      <p>$${product.price}</p>
      <p>⭐ ${product.rating}</p>
    `;
    productGrid.appendChild(card);
  });
}

// Filter logic
function applyFilters() {
  const categoryFilters = Array.from(
    document.querySelectorAll(".category-filter:checked")
  ).map((input) => input.value);

  const priceFilter = document.querySelector("input[name='price']:checked")?.value || "all";
  const ratingFilter = parseFloat(document.querySelector("input[name='rating']:checked")?.value || "0");
  const searchTerm = searchInput.value.toLowerCase();

  let filtered = products.filter((p) => {
    const matchCategory = categoryFilters.length === 0 || categoryFilters.includes(p.category);
    const matchSearch = p.title.toLowerCase().includes(searchTerm);

    let matchPrice = true;
    if (priceFilter !== "all") {
      const [min, max] = priceFilter.split("-").map(Number);
      matchPrice = p.price >= min && p.price <= max;
    }

    const matchRating = p.rating >= ratingFilter;

    return matchCategory && matchSearch && matchPrice && matchRating;
  });

  renderProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", applyFilters);
document.querySelectorAll(".category-filter, input[name='price'], input[name='rating']")
  .forEach((input) => input.addEventListener("change", applyFilters));

// Initial render
renderProducts(products);
