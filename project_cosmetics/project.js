// Product Data
const products = [
    { id: 1, name: "Royal Kajal", price: 25, image: "https://beeone.co.in/cdn/shop/files/ROYAL-KAJAL-scaled_1.jpg?v=1709190500&width=823/200x200/?kajal,eyeliner" },
    { id: 2, name: "Silk Lipstick", price: 35, image: "https://www.lookfantastic.com/images?url=https://static.thcdn.com/productimg/1600/1600/12296411-8454723279368780.jpg&format=webp&auto=avif&width=985&height=985&fit=cover" },
    { id: 3, name: "Golden Eyeshadow", price: 45, image: "https://rdcosmetics.in/cdn/shop/files/3.png?v=1714483864" },
    { id: 4, name: "Pearl Face Powder", price: 30, image: "https://www.bigbasket.com/media/uploads/p/l/40179629_3-gala-of-london-pearl-face-powder-natural-glow.jpg" },
    { id: 5, name: "Herbal Face Mask", price: 40, image: "https://ec.nice-cdn.com/upload/image/product/large/default/3464_db86670d.768x768.jpg" },
    { id: 6, name: "Luxury Brush Set", price: 60, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/brush-applicator/b/o/9/soft-fluffy-makeup-brushes-set-with-finger-size-powder-puff-16-original-imagqf4tgrhcmmuw.jpeg?q=20&crop=false" },
    { id: 7, name: "24K Gold Serum", price: 80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_kC7hEbmai2hFOkW7cRSSV02TQqqebyTmA&s" },
    { id: 8, name: "Saffron Face Cream", price: 55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqyUf7END17LFQQcCG4VcskHbQ-hvqOflNg&s" },
    { id: 9, name: "Rose Perfume", price: 65, image: "https://m.media-amazon.com/images/I/613qjmQxXiL._AC_UF1000,1000_QL80_.jpg" },
    { id: 10, name: "Ayurvedic Hair Oil", price: 28, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAZcVSO-H_ypT8qxsGCnYdtznBaZDR00rxw&s" }
  ];
  
  // Initialize products
  function initProducts() {
    const productGrid = document.getElementById('productGrid');
    const productSelect = document.getElementById('feedbackProduct');
    
    products.forEach(product => {
        // Add products to grid
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
            </div>
        `;
        
        // Add products to feedback select
        productSelect.innerHTML += `
            <option value="${product.id}">${product.name}</option>
        `;
    });
  }
  
  // Feedback Form Handling
  document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const feedbackData = {
        name: document.getElementById('feedbackName').value,
        email: document.getElementById('feedbackEmail').value,
        product: document.getElementById('feedbackProduct').value,
        message: document.getElementById('feedbackMessage').value
    };
    
    // Here you would typically send this data to a server
    console.log('Feedback Submitted:', feedbackData);
    alert('Thank you for your feedback!');
    this.reset();
  });
  
  // Initialize the page
  window.onload = initProducts;