/* ============================================================
   PRODUCT HUB WHOLESALE DISTRIBUTOR - LOGIC ENGINE
   ============================================================ */

// Complete Korean Wholesale Product Catalog
const productsData = [
    // --- K-SNACKS & SWEETS ---
  { id: 1, name: "Pepero Chocolate Original 47g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-original.jpg" },
 { id: 2, name: "Pepero White Cookie 32g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-white-cookie.png" },
  { id: 3, name: "Pepero Almond 32g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-almond.png" },
   { id: 4, name: "Pepero Choco Filled 50g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-choco-filled.jpg" },
    { id: 5, name: "Pepero Snowy Almond 32g", cat: "SNACKS", spec: "40 Boxes / Case", price: null },
    { id: 6, name: "Pepero Strawberry 32g", cat: "SNACKS", spec: "40 Boxes / Case", price: null },
    { id: 7, name: "Pepero Crunchy 39g", cat: "SNACKS", spec: "40 Boxes / Case", price: null },
    { id: 8, name: "Pepero Choco Cookie 32g", cat: "SNACKS", spec: "40 Boxes / Case", price: null },
    { id: 9, name: "Almond Chocoball 46g (40 pcs)", cat: "SNACKS", spec: "40 pcs / Display Box", price: null },
    { id: 10, name: "Almond Chocoball 46g (39 pcs)", cat: "SNACKS", spec: "39 pcs / Display Box", price: null },
    { id: 11, name: "Binch 102g", cat: "SNACKS", spec: "Bulk Wholesale Case", price: null },
    { id: 12, name: "Choco Pie Original 336g", cat: "SNACKS", spec: "12 Boxes / Case", price: null },

    // --- RAMEN & NOODLES ---
    { id: 13, name: "Jin Ramen Mild Multi-pack", cat: "RAMEN", spec: "40 Packs / Case", price: null },
    { id: 14, name: "Stir-Fry Cheese Ramen 120g", cat: "RAMEN", spec: "32 Packs / Case", price: null },
    { id: 15, name: "Stir-Fry Cheese Ramen Spicy 130g", cat: "RAMEN", spec: "32 Packs / Case", price: null },
    { id: 16, name: "Cheese Ramen Mild 111g", cat: "RAMEN", spec: "32 Packs / Case", price: null },
    { id: 17, name: "Cheese Ramen Spicy 111g", cat: "RAMEN", spec: "32 Packs / Case", price: null },
    { id: 18, name: "Pho Story Noodles 67g", cat: "RAMEN", spec: "30 Cups / Case", price: null },
    { id: 19, name: "Chakhan Vermicelli 14kg", cat: "RAMEN", spec: "14kg Commercial Sack", price: null },
    { id: 20, name: "Nongbu Glass Noodle 500g", cat: "RAMEN", spec: "20 Packs / Case", price: null },
    { id: 21, name: "Nongbu Glass Noodle 14kg", cat: "RAMEN", spec: "14kg Bulk Sack", price: null },
    { id: 22, name: "JINPUM Glass Noodles 10kg", cat: "RAMEN", spec: "10kg Bulk Sack", price: null },

    // --- CANNED & MEAT ---
    { id: 23, name: "Hansung Pork Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 24, name: "Hansung Chicken Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 25, name: "Hansung Luncheon Meat Cheese", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 26, name: "Lotte Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 27, name: "Rose Farm Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 28, name: "Namkwang Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 29, name: "Densing Dak Pork Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },

    // --- SEAWEEDS & KIM ---
    { id: 30, name: "NamKwang Seaweed 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 31, name: "NamKwang Seaweed Cheese 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 32, name: "NamKwang Seaweed 9*8", cat: "SEAWEED", spec: "8 Packs / Case", price: null },
    { id: 33, name: "NamKwang Seaweed 16*6", cat: "SEAWEED", spec: "6 Packs / Case", price: null },
    { id: 34, name: "NamKwang Kimbob Kim 10s", cat: "SEAWEED", spec: "100 Packs / Case", price: null },
    { id: 35, name: "NamKwang Kimbob Kim 100s", cat: "SEAWEED", spec: "10 Packs / Case", price: null },
    { id: 36, name: "Nongbu Kimbob Kim 10s", cat: "SEAWEED", spec: "100 Packs / Case", price: null },
    { id: 37, name: "Nongbu Kimbob Kim 100s", cat: "SEAWEED", spec: "10 Packs / Case", price: null },
    { id: 38, name: "Sura Laver Seaweeds 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 39, name: "Sura Laver Seaweeds 16*8", cat: "SEAWEED", spec: "8 Packs / Case", price: null },
    { id: 40, name: "Kimjaban Seaweeds (Vegetable)", cat: "SEAWEED", spec: "30 Packs / Case", price: null },
    { id: 41, name: "Kimjaban Seaweeds (Original)", cat: "SEAWEED", spec: "30 Packs / Case", price: null },
    { id: 42, name: "Kimjaban Seaweeds (Seafood)", cat: "SEAWEED", spec: "30 Packs / Case", price: null },
    { id: 43, name: "Kimbap Laver Seaweeds 10s", cat: "SEAWEED", spec: "100 Packs / Case", price: null },
    { id: 44, name: "Kimbap Laver Seaweeds 100s", cat: "SEAWEED", spec: "10 Packs / Case", price: null },
    { id: 45, name: "Boryeong Seaweeds 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 46, name: "Boryeong Seaweeds 16*8", cat: "SEAWEED", spec: "8 Packs / Case", price: null },
    { id: 47, name: "Boryeong Extra Olive Seaweeds 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 48, name: "Boryeong Extra Olive Seaweeds 16*6", cat: "SEAWEED", spec: "6 Packs / Case", price: null },
    { id: 49, name: "Sigolkim Seaweeds Original 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 50, name: "Sigolkim Seaweeds Original 9*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null },
    { id: 51, name: "Sigolkim Seaweeds Original 16*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null },
    { id: 52, name: "Sigolkim Seaweeds with Sesame Oil 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 53, name: "Sigolkim Seaweeds with Sesame Oil 9*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null },
    { id: 54, name: "Sigolkim Seaweeds with Sesame Oil 16*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null },

    // --- BEVERAGES & MILK ---
    { id: 55, name: "Binggrae Banana Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null },
    { id: 56, name: "Binggrae Banana Light Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null },
    { id: 57, name: "Binggrae Coffee Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null },
    { id: 58, name: "Binggrae Melon Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null },
    { id: 59, name: "Binggrae Strawberry Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null },
    { id: 60, name: "Binggrae Strawberry Light Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null },
    { id: 61, name: "Binggrae Taro Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null },
    { id: 62, name: "Binggrae Vanilla Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null },
    { id: 63, name: "Café Bene Peach / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 64, name: "Café Bene Blue Lemon / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 65, name: "Café Bene Green Grape / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 66, name: "Café Bene Watermelon / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 67, name: "Café Bene Honey Grapefruit / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 68, name: "Café Bene Pineapple / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 69, name: "Café Bene Omija / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 70, name: "Café Bene Vanilla Americano / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 71, name: "Café Bene Hazelnut / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 72, name: "Café Bene Caramel Macchiato / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 73, name: "Café Bene Americano / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 74, name: "Ice Talk A1 Peach / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 75, name: "Ice Talk A2 Blue Lemon / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 76, name: "Ice Talk A3 Blueberry / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 77, name: "Ice Talk A4 Pomegranate / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 78, name: "Ice Talk A5 Kiwi / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 79, name: "Ice Talk A7 Passion Mango / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 80, name: "Ice Talk A9 Watermelon / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 81, name: "Ice Talk A10 Greengrape / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 82, name: "Welchs Grape / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null },
    { id: 83, name: "Welchs Grape Zero / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null },
    { id: 84, name: "Welchs White Grape / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null },
    { id: 85, name: "Welchs Apple Mango / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null },
    { id: 86, name: "Welchs Orange Zero / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null },
    { id: 87, name: "Welchs Shinemuscat Zero / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null },
    { id: 88, name: "Lets Be Mild / 175 ML", cat: "DRINKS", spec: "30 Cans / Case", price: null },
    { id: 89, name: "Lets Be Mocha / 175 ML", cat: "DRINKS", spec: "30 Cans / Case", price: null },

    // --- MAXIM COFFEE ---
    { id: 90, name: "Maxim Mocha Gold 20T", cat: "COFFEE", spec: "20 Boxes / Case", price: null },
    { id: 91, name: "Maxim Original 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null },
    { id: 92, name: "Maxim Mocha Gold 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null },
    { id: 93, name: "Maxim White Gold 20T", cat: "COFFEE", spec: "20 Boxes / Case", price: null },
    { id: 94, name: "Maxim White Gold 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null },
    { id: 95, name: "Maxim Supreme Gold Coffee Mix 20T", cat: "COFFEE", spec: "20 Boxes / Case", price: null },
    { id: 96, name: "Maxim Decaf Coffee 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null },
    { id: 97, name: "Maxim Arabica 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null },

    // --- SOJU & ALCOHOL ---
    { id: 98, name: "JINRO Soju 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 99, name: "JINRO Chamisul Fresh 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 100, name: "JINRO Chamisul Original 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 101, name: "JINRO Grapefruit 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 102, name: "JINRO Green Grape 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 103, name: "JINRO Strawberry 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 104, name: "JINRO Peach 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 105, name: "JINRO Lemon 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 106, name: "ILPOOM JINRO Soju 25% 375ml*6", cat: "SOJU", spec: "6 Bottles / Case", price: null },
    { id: 107, name: "JR Jinro Soju 24 700ml*12", cat: "SOJU", spec: "12 Bottles / Case", price: null },
    { id: 108, name: "JINRO Plum 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },

    // --- SAUCES & PANTRY ---
    { id: 109, name: "Nongbu Tteokbokki 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 110, name: "Nongbu Tteokbokki 500g", cat: "SAUCE", spec: "20 Packs / Case", price: null },
    { id: 111, name: "Sliced Rice Cake 300g (Shelf-Stable)", cat: "SAUCE", spec: "30 Packs / Case", price: null },
    { id: 112, name: "Baby Shark Topokki (Creamy Flavour)", cat: "SAUCE", spec: "24 Cups / Case", price: null },
    { id: 113, name: "Baby Shark Topokki (Sweet & Mild Spicy)", cat: "SAUCE", spec: "24 Cups / Case", price: null },
    { id: 114, name: "Sing Song Ssamjang 170g", cat: "SAUCE", spec: "30 Tubs / Case", price: null },
    { id: 115, name: "Sing Song Ssamjang 500g", cat: "SAUCE", spec: "20 Tubs / Case", price: null },
    { id: 116, name: "Sing Song Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 117, name: "Nongbu Ssamjang 200g", cat: "SAUCE", spec: "30 Tubs / Case", price: null },
    { id: 118, name: "Nongbu Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 119, name: "Chakhan Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 120, name: "JINPUM Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 121, name: "Sing Song Gochujang 170g", cat: "SAUCE", spec: "30 Tubs / Case", price: null },
    { id: 122, name: "Sing Song Gochujang 500g", cat: "SAUCE", spec: "20 Tubs / Case", price: null },
    { id: 123, name: "Sing Song Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 124, name: "Nongbu Gochujang 200g", cat: "SAUCE", spec: "30 Tubs / Case", price: null },
    { id: 125, name: "Nongbu Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 126, name: "Chakhan Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 127, name: "JINPUM Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 128, name: "JINPUM Doenjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 129, name: "Sweet Corn 410g", cat: "SAUCE", spec: "24 Cans / Case", price: null },
    { id: 130, name: "Fruits Cocktail 850g", cat: "SAUCE", spec: "12 Cans / Case", price: null },
    { id: 131, name: "Black Olive Slice 405g", cat: "SAUCE", spec: "24 Cans / Case", price: null },
    { id: 132, name: "Vinegar 1.8L", cat: "SAUCE", spec: "6 Bottles / Case", price: null },
    { id: 133, name: "Roasted Sesame Oil (100%) 1.8L", cat: "SAUCE", spec: "6 Containers / Case", price: null },
    { id: 134, name: "Nongbu Chili Powder Green 1kg (Fine)", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 135, name: "Taeyangcho Chili Powder 1kg (Flakes)", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 136, name: "JINPUM Chili Powder 1kg (Fine)", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 137, name: "JINPUM Chili Powder 1kg (Flakes)", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 138, name: "Chili Powder (Fine) 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 139, name: "Chili Powder (Coarse) 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 140, name: "NONGBU Fish Cake 200g", cat: "SAUCE", spec: "30 Packs / Case", price: null },
    { id: 141, name: "NONGBU Fish Cake 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 142, name: "JINPUM Fish Cake 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 143, name: "Jin Kimchi 10kg", cat: "SAUCE", spec: "10kg Commercial Tub", price: null },

    // --- NON-FOOD & EQUIPMENT ---
    { id: 144, name: "Safe Butane", cat: "NONFOOD", spec: "28 Cans / Case", price: null },
    { id: 145, name: "Ssen Butane 220g", cat: "NONFOOD", spec: "28 Cans / Case", price: null },
    { id: 146, name: "Max Safe Butane", cat: "NONFOOD", spec: "28 Cans / Case", price: null },
    { id: 147, name: "EZ Cooking Machine", cat: "NONFOOD", spec: "Commercial Unit", price: null }
];

// App State
let cart = JSON.parse(localStorage.getItem('product_hub_cart')) || {};
let currentCategory = 'ALL';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
});

// Render Product Grid
function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = productsData.filter(p => {
        return currentCategory === 'ALL' || p.cat === currentCategory;
    });

    const noRes = document.getElementById('noResults');
    if (filtered.length === 0) {
        if (noRes) noRes.classList.remove('hidden');
        return;
    } else {
        if (noRes) noRes.classList.add('hidden');
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = "bg-brand-darkCard rounded-xl border border-brand-gold/30 hover:border-brand-gold p-4 flex flex-col justify-between transition-all hover:shadow-xl group";

      card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-2">
                    <span class="bg-brand-black text-brand-gold text-[10px] font-extrabold px-2 py-0.5 rounded border border-brand-gold/40 uppercase tracking-wider">
                        ${p.cat}
                    </span>
                    <span class="text-[11px] font-semibold text-gray-400">
                        <i class="fa-solid fa-boxes-stacked mr-1 text-brand-gold"></i> B2B Wholesale
                    </span>
                </div>

                <!-- PRODUCT IMAGE DISPLAY CONTAINER -->
                <div class="w-full h-40 rounded-lg overflow-hidden bg-brand-black border border-brand-gold/20 mb-3 flex items-center justify-center">
                    <img src="${p.img || p.image || 'images/logo.jpg'}" 
                         alt="${p.name}" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                         onerror="this.onerror=null; this.src='images/logo.jpg';">
                </div>

                <h3 class="font-bold text-white text-base group-hover:text-brand-goldLight transition-colors leading-snug">
                    ${p.name}
                </h3>
                <p class="text-xs text-brand-gold font-medium mt-1">
                    Packaging: ${p.spec}
                </p>
            </div>

            <div class="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
                <div>
                    <span class="text-[10px] text-gray-400 block uppercase">Wholesale Price</span>
                    <span class="text-xs font-bold text-white">${p.price ? '₱' + p.price : 'B2B Wholesale Rate'}</span>
                </div>
                <button onclick="addToCart(${p.id})" class="bg-brand-black hover:bg-brand-gold hover:text-brand-black text-brand-gold border border-brand-gold font-extrabold text-xs px-3 py-2 rounded-lg transition-all flex items-center gap-1.5">
                    <i class="fa-solid fa-plus"></i> Add Case
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Category Filter Function
function setCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('bg-brand-black', 'text-brand-gold', 'border-brand-gold');
        btn.classList.add('bg-brand-darkCard', 'text-gray-200', 'border-brand-gold/30');
    });
    if (event && event.target) {
        event.target.classList.add('bg-brand-black', 'text-brand-gold', 'border-brand-gold');
    }
    renderProducts();
}

// Filter Search Input
function filterProducts() {
    const input = document.getElementById('searchInput') || document.getElementById('mobileSearchInput');
    if (!input) return;
    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll('#productGrid > div');

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? "flex" : "none";
    });
}

function filterProductsMobile() {
    const mobileVal = document.getElementById('mobileSearchInput').value;
    const mainSearch = document.getElementById('searchInput');
    if (mainSearch) mainSearch.value = mobileVal;
    filterProducts();
}

// Cart Operations
function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    updateCartUI();
    toggleCartDrawer(true);
}

function changeQty(id, delta) {
    if (cart[id]) {
        cart[id] += delta;
        if (cart[id] <= 0) delete cart[id];
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('product_hub_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const container = document.getElementById('cartItemsContainer');
    if (!container) return;

    container.innerHTML = '';
    let totalCases = 0;
    const itemIds = Object.keys(cart);

    if (itemIds.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-gray-400">
                <i class="fa-solid fa-cart-flatbed text-4xl mb-2 text-brand-gold/50"></i>
                <p class="text-xs">Your wholesale cart is empty.</p>
            </div>
        `;
        const btn = document.getElementById('checkoutBtn');
        if (btn) {
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
        }
    } else {
        const btn = document.getElementById('checkoutBtn');
        if (btn) {
            btn.disabled = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        itemIds.forEach(id => {
            const product = productsData.find(p => p.id == id);
            if (!product) return;
            const qty = cart[id];
            totalCases += qty;

            const itemEl = document.createElement('div');
            itemEl.className = "bg-brand-black p-3 rounded-lg border border-brand-gold/30 flex items-center justify-between";
            itemEl.innerHTML = `
                <div class="flex-1 pr-2">
                    <h4 class="font-bold text-xs text-white leading-tight">${product.name}</h4>
                    <p class="text-[10px] text-brand-gold mt-0.5">${product.spec}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="changeQty(${id}, -1)" class="w-6 h-6 rounded bg-gray-800 text-brand-gold font-bold flex items-center justify-center hover:bg-brand-gold hover:text-black text-xs">-</button>
                    <span class="text-xs font-bold text-white px-1">${qty}</span>
                    <button onclick="changeQty(${id}, 1)" class="w-6 h-6 rounded bg-gray-800 text-brand-gold font-bold flex items-center justify-center hover:bg-brand-gold hover:text-black text-xs">+</button>
                </div>
            `;
            container.appendChild(itemEl);
        });
    }

    const badge = document.getElementById('cartCountBadge');
    if (badge) badge.innerText = totalCases;

    const totalCasesEl = document.getElementById('cartTotalCases');
    if (totalCasesEl) totalCasesEl.innerText = totalCases + " Case(s)";
}

// UI Drawer & Modal Controls
function toggleCartDrawer(forceOpen = false) {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('drawerOverlay');

    if (forceOpen || drawer.classList.contains('translate-x-full')) {
        drawer.classList.remove('translate-x-full');
        overlay.classList.add('hidden');
    } else {
        drawer.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    }
}

function openCheckoutModal() {
    toggleCartDrawer();
    document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.add('hidden');
}

function openRFQModal() {
    document.getElementById('checkoutModal').classList.remove('hidden');
}

// Order Processing & Digital Receipt
function processOrder(e) {
    e.preventDefault();

    const company = document.getElementById('custCompany').value;
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const region = document.getElementById('custRegion').value;
    const address = document.getElementById('custAddress').value;
    const type = document.getElementById('custOrderType').value;

let receipt = `🛒 PRODUCT HUB WHOLESALE ORDER\n\n`;
    receipt += `📋 CUSTOMER DETAILS:\n`;
    receipt += `- Store: ${company}\n`;
    receipt += `- Contact: ${name}\n`;
    receipt += `- Phone: ${phone}\n`;
    receipt += `- Region: ${region}\n`;
    receipt += `- Address: ${address}\n`;
    receipt += `- Type: ${type}\n\n`;
    receipt += `📦 ORDERED ITEMS:\n`;

    Object.keys(cart).forEach(id => {
        const p = productsData.find(item => item.id == id);
        if (p) {
            const qty = cart[id];
            const unitText = qty === 1 ? 'Box' : 'Boxes';
            receipt += `- ${p.name} = ${qty} ${unitText}\n`;
        }
    });

    receipt += `\n📌 Sent via Product Hub B2B Portal`;
    document.getElementById('receiptText').value = receipt;
    closeCheckoutModal();
    document.getElementById('receiptModal').classList.remove('hidden');
}

function copyReceipt() {
    const copyText = document.getElementById("receiptText");
    if (copyText) {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Order Summary copied to clipboard! Paste it into Facebook Messenger or Viber.");
    }
}

function sendToMessenger() {
    const copyText = document.getElementById("receiptText");
    if (copyText) {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    }
    
    alert("Order Summary copied to clipboard! You will now be redirected to Product Hub's Facebook Messenger. Please paste your order details into the chat.");
    window.open("https://m.me/ProductHub88", "_blank");
}

function closeReceiptModal() {
    document.getElementById('receiptModal').classList.add('hidden');
}
