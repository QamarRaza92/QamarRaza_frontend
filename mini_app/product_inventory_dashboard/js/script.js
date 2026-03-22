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