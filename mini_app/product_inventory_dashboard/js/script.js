// --- State Management ---
// Default data agar pehli baar app khul rahi hai
const defaultProducts = [
    { id: 1710000001, name: "Wireless Mouse", price: 1200, stock: 15, category: "electronics" },
    { id: 1710000002, name: "Mechanical Keyboard", price: 3500, stock: 4, category: "electronics" }, // Low stock
    { id: 1710000003, name: "Cotton T-Shirt", price: 500, stock: 20, category: "clothing" },
    { id: 1710000004, name: "Denim Jeans", price: 1500, stock: 8, category: "clothing" },
    { id: 1710000005, name: "JavaScript Crash Course", price: 800, stock: 0, category: "books" }, // Out of stock
    { id: 1710000006, name: "Atomic Habits", price: 400, stock: 12, category: "books" },
    { id: 1710000007, name: "Leather Wallet", price: 900, stock: 5, category: "accessories" },
    { id: 1710000008, name: "Aviator Sunglasses", price: 1200, stock: 2, category: "accessories" } // Low stock
];

let inventory = []; // Hamara main array jo poori app mein use hoga

// --- DOM Elements ko target karna ---
const loadingMessage = document.getElementById('loadingMessage');
const productGrid = document.getElementById('productGrid');

//  --- LocalStorage Logic ---
function initData() {
    // Check karte hain ki pehle se data save hai ya nahi
    const savedData = localStorage.getItem('inventoryData');
    
    if (savedData) {
        inventory = JSON.parse(savedData);
    } else {
        // Agar khali hai toh default products daal do
        inventory = [...defaultProducts];
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    localStorage.setItem('inventoryData', JSON.stringify(inventory));
}

// --- Async API Simulation ---
function fetchProducts() {
    return new Promise((resolve) => {
        // 1.5 seconds ka fake server delay create kar rahe hain
        setTimeout(() => {
            resolve(inventory);
        }, 1500);
    });
}

// --- App Initialization ---
async function startDashboard() {
    initData(); // Pehle localStorage se data uthao

    try {
        // Fake API call ko wait karo
        const data = await fetchProducts();
        
        // ---- YAHAN TUMHARI PROBLEM FIX HOGI ----
        // Data aane ke baad loading screen ko hatao aur Grid ko dikhao
        loadingMessage.classList.add('hidden');
        productGrid.classList.remove('hidden');

        // Check karne ke liye console log
        console.log("Products successfully loaded!", data);
        
        renderProducts(data);
        // updateAnalytics();

    } catch (error) {
        console.error("Data fetch karne mein problem aayi:", error);
        loadingMessage.innerHTML = "<p style='color: red;'>Failed to load products.</p>";
    }
}

document.addEventListener('DOMContentLoaded', startDashboard);


// Ye function array ko HTML cards mein convert karke screen par dikhayega
function renderProducts(productsArray) {
    // Sabse pehle grid ko khali karo, to avoid duplicating purana data
    productGrid.innerHTML = '';

    // Agar array khali hai (jaise filter karne par kuch na mile), toh message dikhao
    if (productsArray.length === 0) {
        productGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 20px; color: #7f8c8d;">
                <h3>No products found!</h3>
                <p>Try adjusting your search or filters.</p>
            </div>
        `;
        return; 
    }

    // Array ke har item par loop chala kar card DOM element banao
    productsArray.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        // Card ka andar ka HTML structure (Template literals use karke variables inject kiye hain)
        card.innerHTML = `
            <h3>${product.name}</h3>
            <span class="category-badge">${product.category.toUpperCase()}</span>
            <p><strong>Price:</strong> ₹${product.price}</p>
            <p><strong>Stock:</strong> 
                <span style="color: ${product.stock < 5 ? 'red' : 'green'}; font-weight: bold;">
                    ${product.stock} units
                </span>
            </p>
            <button class="delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
        `;

        // Tayyar card ko main product grid mein jod do
        productGrid.appendChild(card);
    });
}