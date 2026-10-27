/* ============================================================
    PRODUCT HUB WHOLESALE DISTRIBUTOR - LOGIC ENGINE
    ============================================================ */

// Complete Korean Wholesale Product Catalog
const productsData = [
    // --- K-SNACKS & SWEETS ---
    // --- SNACKS & PEPERO ---
    { id: 1, name: "Pepero Chocolate Original 47g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-original.jpg" },
    { id: 2, name: "Pepero White Cookie 32g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-white-cookie.png" },
    { id: 3, name: "Pepero Choco Cookie 32g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-choco-cookie.png.png" },
    { id: 4, name: "Pepero Almond 32g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-almond.png" },
    { id: 5, name: "Pepero Choco Filled 50g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-choco-filled.jpg" },
    { id: 6, name: "Pepero Snowy Almond 32g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-snowy-almond.jpg" },
    { id: 7, name: "Pepero Strawberry 32g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-strawberry.png.png" },
    { id: 8, name: "Pepero Crunchy 39g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/pepero-crunchy.jpg" },
    { id: 9, name: "Almond Chocoball 46g", cat: "SNACKS", spec: "40 Boxes / Case", price: null, img: "images/almond-chocoball-46g.jpg" },
    { id: 10, name: "Almond Chocoball 46g (39 pcs)", cat: "SNACKS", spec: "39 pcs / Display Box", price: null, img: "images/Almond Chocoball 46g (39 pcs).jpeg" },
    { id: 11, name: "Binch Biscuits", cat: "SNACKS", spec: "Boxes / Case", price: null, img: "images/binch-biscuits.jpg" },
    { id: 12, name: "Choco Pie Original 336g", cat: "SNACKS", spec: "Boxes / Case", price: null, img: "images/choco-pie-original-336g.jpg" },

    // --- RAMEN & NOODLES ---
    { id: 13, name: "Jin Ramen Mild", cat: "RAMEN", spec: "Boxes / Case", price: null, img: "images/jin-ramen-mild.jpg" },
    { id: 14, name: "Stir-Fry Cheese Ramen 120g", cat: "RAMEN", spec: "Boxes / Case", price: null, img: "images/Stir-Fry Cheese Ramen 120g.jpg" },
    { id: 15, name: "Stir-Fry Cheese Ramen Spicy 130g", cat: "RAMEN", spec: "Boxes / Case", price: null, img: "images/stir-fry-cheese-ramen-spicy-130g.jpg" },
    { id: 16, name: "Cheese Ramen Mild 111g", cat: "RAMEN", spec: "Boxes / Case", price: null, img: "images/cheese-ramen-mild-111g.jpg" },
    { id: 17, name: "Samyang Original Buldak", cat: "RAMEN", spec: "Packs / Case", price: null, img: "images/samyang-original-buldak.jpg" },
    { id: 18, name: "Samyang Buldak Carbonara", cat: "RAMEN", spec: "Packs / Case", price: null, img: "images/Samyang Buldak Carbonara.jpg" },
    { id: 19, name: "Samyang Buldak Rose", cat: "RAMEN", spec: "Packs / Case", price: null, img: "images/samyang-buldak-rose.jpg" },
    { id: 20, name: "Samyang Buldak Quattro Cheese", cat: "RAMEN", spec: "Packs / Case", price: null, img: "images/samyang-buldak-quattro-cheese.jpg" },
    { id: 21, name: "Cheese Ramen Spicy 111g", cat: "RAMEN", spec: "Boxes / Case", price: null, img: "images/cheese-ramen-spicy-111g.jpg" },
    { id: 22, name: "Pho Story Noodles 67g", cat: "RAMEN", spec: "30 Cups / Case", price: null },
    { id: 23, name: "Chakhan Vermicelli 14kg", cat: "RAMEN", spec: "14kg Commercial Sack", price: null, img: "images/Chakhan Vermicelli 14kg.jpg", isReservation: true },
    { id: 24, name: "Nongbu Glass Noodle 500g", cat: "RAMEN", spec: "20 Packs / Case", price: null, img: "images/Nongbu Glass Noodle 500g.jpeg" },
    { id: 25, name: "Nongbu Glass Noodle 14kg", cat: "RAMEN", spec: "14kg Bulk Sack", price: null, img: "images/Nongbu Glass Noodle 14kg.jpg" },
    { id: 26, name: "JINPUM Glass Noodles 10kg", cat: "RAMEN", spec: "10kg Bulk Sack", price: null },
    
    // --- CANNED & MEAT ---
    { id: 27, name: "Hansung Pork Luncheon Meat", cat: "MEAT", spec: "Cans / Case", price: null, img: "images/hansung-pork-luncheon-meat.jpg" },
    { id: 28, name: "Hansung Chicken Luncheon Meat", cat: "MEAT", spec: "Cans / Case", price: null, img: "images/hansung-chicken-luncheon-meat.jpg" },
    { id: 29, name: "Hansung Luncheon Meat Cheese", cat: "MEAT", spec: "Cans / Case", price: null, img: "images/hansung-luncheon-meat-cheese.jpg" },
    { id: 30, name: "Lotte Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 31, name: "Rose Farm Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 32, name: "Namkwang Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 33, name: "Densing Dak Pork Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },

    // --- SEAWEEDS & KIM ---
    { id: 34, name: "NamKwang Seaweed 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null, img: "images/namkwang-seaweed-3-24.jpg" },
    { id: 35, name: "NamKwang Seaweed Cheese 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null, img: "images/namkwang-seaweed-cheese-3-24.jpg" },
    { id: 36, name: "NamKwang Seaweed 9*8", cat: "SEAWEED", spec: "8 Packs / Case", price: null, img: "images/Namkwang 98.jpg" },
    { id: 37, name: "NamKwang Seaweed 16*6", cat: "SEAWEED", spec: "6 Packs / Case", price: null, img: "images/namkwang.jpg" },
    { id: 38, name: "NamKwang Kimbob Kim 10s", cat: "SEAWEED", spec: "100 Packs / Case", price: null },
    { id: 39, name: "NamKwang Kimbob Kim 100s", cat: "SEAWEED", spec: "10 Packs / Case", price: null },
    { id: 40, name: "Nongbu Kimbob Kim 10s", cat: "SEAWEED", spec: "100 Packs / Case", price: null },
    { id: 41, name: "Nongbu Kimbob Kim 100s", cat: "SEAWEED", spec: "10 Packs / Case", price: null },
    { id: 42, name: "Sura Laver Seaweeds 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 43, name: "Sura Laver Seaweeds 16*8", cat: "SEAWEED", spec: "8 Packs / Case", price: null },
    { id: 44, name: "Kimjaban Seaweeds (Vegetable)", cat: "SEAWEED", spec: "30 Packs / Case", price: null },
    { id: 45, name: "Kimjaban Seaweeds (Original)", cat: "SEAWEED", spec: "30 Packs / Case", price: null },
    { id: 46, name: "Kimjaban Seaweeds (Seafood)", cat: "SEAWEED", spec: "30 Packs / Case", price: null },
    { id: 47, name: "Kimbap Laver Seaweeds 10s", cat: "SEAWEED", spec: "100 Packs / Case", price: null },
    { id: 48, name: "Kimbap Laver Seaweeds 100s", cat: "SEAWEED", spec: "10 Packs / Case", price: null },
    { id: 49, name: "Boryeong Seaweeds 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 50, name: "Boryeong Seaweeds 16*8", cat: "SEAWEED", spec: "8 Packs / Case", price: null },
    { id: 51, name: "Boryeong Extra Olive Seaweeds 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 52, name: "Boryeong Extra Olive Seaweeds 16*6", cat: "SEAWEED", spec: "6 Packs / Case", price: null },
    { id: 53, name: "Sigolkim Seaweeds Original 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 54, name: "Sigolkim Seaweeds Original 9*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null },
    { id: 55, name: "Sigolkim Seaweeds Original 16*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null },
    { id: 56, name: "Sigolkim Seaweeds with Sesame Oil 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null },
    { id: 57, name: "Sigolkim Seaweeds with Sesame Oil 9*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null },
    { id: 58, name: "Sigolkim Seaweeds with Sesame Oil 16*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null },

    // --- BEVERAGES & MILK ---
    { id: 59, name: "Binggrae Banana Milk", cat: "DRINKS", spec: "24 x 200ml / Case", price: null, img: "images/binggrae-banana..jpg" },
    { id: 60, name: "Binggrae Coffee Milk", cat: "DRINKS", spec: "24 x 200ml / Case", price: null, img: "images/bingrae coffee milk drink.jpg" },
    { id: 61, name: "Binggrae Banana Light Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null },
    { id: 62, name: "Binggrae Melon Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null, img: "images/binggrae melon.jpg" },
    { id: 63, name: "Binggrae Strawberry Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null, img: "images/binggrae strawberry.jpg" },
    { id: 64, name: "Binggrae Strawberry Light Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null },
    { id: 65, name: "Binggrae Taro Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null, img: "images/binggrae taro.jpg" },
    { id: 66, name: "Binggrae Vanilla Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null, img: "images/binggrae vanilla.jpg" },
    { id: 67, name: "Café Bene Peach / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 68, name: "Café Bene Blue Lemon / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 69, name: "Café Bene Green Grape / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 70, name: "Café Bene Watermelon / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 71, name: "Café Bene Honey Grapefruit / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 72, name: "Café Bene Pineapple / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 73, name: "Café Bene Omija / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 74, name: "Café Bene Vanilla Americano / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 75, name: "Café Bene Hazelnut / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 76, name: "Café Bene Caramel Macchiato / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
    { id: 77, name: "Café Bene Americano / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null },
{ id: 78, name: "Ice Talk A1 Peach / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true },
{ id: 79, name: "Ice Talk A2 Blue Lemon / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true },
  { id: 80, name: "Ice Talk A3 Blueberry / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true },
{ id: 81, name: "Ice Talk A4 Pomegranate / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/ice-talk-a4-pomegranate-230ml.png(2)" },
    { id: 82, name: "Ice Talk A5 Kiwi / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true },
    { id: 83, name: "Ice Talk A7 Passion Mango / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true },
{ id: 84, name: "Ice Talk A9 Watermelon / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/ice-talk-a9-watermelon-230ml.png.png" },
    { id: 85, name: "Ice Talk A10 Greengrape / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true },
    { id: 86, name: "Welchs Grape / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null, img: "images/Welchs Grape.jpg" },
    { id: 87, name: "Welchs Grape Zero / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null },
    { id: 88, name: "Welchs White Grape / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null },
    { id: 89, name: "Welchs Apple Mango / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null, img: "images/Welchs Apple Mango.jpg" },
    { id: 90, name: "Welchs Orange Zero / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null },
    { id: 91, name: "Welchs Shinemuscat Zero / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null, img: "images/Welchs Shinemuscat Zero.jpg" },
    { id: 92, name: "Lets Be Mild / 175 ML", cat: "DRINKS", spec: "30 Cans / Case", price: null },
    { id: 93, name: "Lets Be Mocha / 175 ML", cat: "DRINKS", spec: "30 Cans / Case", price: null },

    // --- MAXIM COFFEE ---
    { id: 94, name: "Maxim Mocha Gold 20T", cat: "COFFEE", spec: "20 Boxes / Case", price: null },
    { id: 95, name: "Maxim Original 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null },
    { id: 96, name: "Maxim Mocha Gold 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null },
    { id: 97, name: "Maxim White Gold 20T", cat: "COFFEE", spec: "20 Boxes / Case", price: null },
    { id: 98, name: "Maxim White Gold 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null },
    { id: 99, name: "Maxim Supreme Gold Coffee Mix 20T", cat: "COFFEE", spec: "20 Boxes / Case", price: null },
    { id: 100, name: "Maxim Decaf Coffee 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null },
    { id: 101, name: "Maxim Arabica 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null },

    // --- SOJU & ALCOHOL ---
    { id: 102, name: "JINRO Soju 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 103, name: "JINRO Chamisul Fresh 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 104, name: "JINRO Chamisul Original 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 105, name: "JINRO Grapefruit 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 106, name: "Jinro Green Grape 360ml", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/JINRO Green Grape.jpg" },
    { id: 107, name: "JINRO Strawberry 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 108, name: "JINRO Peach 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },
    { id: 109, name: "Jinro Lemon Soju 360ml", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/JINRO Lemon.jpg" },
    { id: 110, name: "ILPOOM JINRO Soju 25% 375ml*6", cat: "SOJU", spec: "6 Bottles / Case", price: null },
    { id: 111, name: "JR Jinro Soju 24 700ml*12", cat: "SOJU", spec: "12 Bottles / Case", price: null },
    { id: 112, name: "JINRO Plum 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null },

    // --- SAUCES & PANTRY ---
    { id: 113, name: "Nongbu Tteokbokki 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 114, name: "Nongbu Tteokbokki 500g", cat: "SAUCE", spec: "20 Packs / Case", price: null },
  { id: 115, name: "Sliced Rice Cake 300g (Shelf-Stable)", cat: "SAUCE", spec: "30 Packs / Case", price: null, isReservation: true },
{ id: 116, name: "Baby Shark Topokki (Creamy Flavour)", cat: "SAUCE", spec: "24 Cups / Case", price: null, isReservation: true, image: "images/Baby Shark Topokki (Creamy Flavour).jpg" },
    { id: 117, name: "Baby Shark Topokki (Sweet & Mild Spicy)", cat: "SAUCE", spec: "24 Cups / Case", price: null, isReservation: true },
    { id: 118, name: "Sing Song Ssamjang 170g", cat: "SAUCE", spec: "30 Tubs / Case", price: null },
    { id: 119, name: "Sing Song Ssamjang 500g", cat: "SAUCE", spec: "20 Tubs / Case", price: null },
    { id: 120, name: "Sing Song Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 121, name: "Nongbu Ssamjang 200g", cat: "SAUCE", spec: "30 Tubs / Case", price: null },
    { id: 122, name: "Nongbu Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, img: "images/Nongbu Ssamjang 14kg.jpg" },
  { id: 123, name: "Chakhan Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, image: "Chakhan Ssamjang 14kg.jpg" },
    { id: 124, name: "JINPUM Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 125, name: "Sing Song Gochujang 170g", cat: "SAUCE", spec: "30 Tubs / Case", price: null },
    { id: 126, name: "Sing Song Gochujang 500g", cat: "SAUCE", spec: "20 Tubs / Case", price: null },
    { id: 127, name: "Sing Song Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 128, name: "Nongbu Gochujang 200g", cat: "SAUCE", spec: "30 Tubs / Case", price: null },
    { id: 129, name: "Nongbu Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, img: "images/Nongbu Gochujang 14kg.jpg" },
    { id: 130, name: "Chakhan Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 131, name: "JINPUM Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null },
    { id: 132, name: "JINPUM Doenjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, isReservation: true },
    { id: 133, name: "Sweet Corn 410g", cat: "SAUCE", spec: "24 Cans / Case", price: null },
    { id: 134, name: "Fruits Cocktail 850g", cat: "SAUCE", spec: "12 Cans / Case", price: null },
    { id: 135, name: "Black Olive Slice 405g", cat: "SAUCE", spec: "24 Cans / Case", price: null },
    { id: 136, name: "Vinegar 1.8L", cat: "SAUCE", spec: "6 Bottles / Case", price: null },
    { id: 137, name: "Roasted Sesame Oil (100%) 1.8L", cat: "SAUCE", spec: "6 Containers / Case", price: null },
    { id: 138, name: "Nongbu Chili Powder Green 1kg (Fine)", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 139, name: "Taeyangcho Chili Powder 1kg (Flakes)", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 140, name: "JINPUM Chili Powder 1kg (Fine)", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 141, name: "JINPUM Chili Powder 1kg (Flakes)", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 142, name: "Chili Powder (Fine) 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 143, name: "Chili Powder (Coarse) 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 144, name: "NONGBU Fish Cake 200g", cat: "SAUCE", spec: "30 Packs / Case", price: null },
    { id: 145, name: "NONGBU Fish Cake 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 146, name: "JINPUM Fish Cake 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 147, name: "Jin Kimchi 10kg", cat: "SAUCE", spec: "10kg Commercial Tub", price: null },

    // --- NON-FOOD & EQUIPMENT ---
    { id: 148, name: "Safe Butane", cat: "NONFOOD", spec: "28 Cans / Case", price: null, img: "images/Safe Butane.jpg" },
    { id: 149, name: "Ssen Butane 220g", cat: "NONFOOD", spec: "28 Cans / Case", price: null, img: "images/Ssen Butane 220g.jpg" },
    { id: 150, name: "Max Safe Butane", cat: "NONFOOD", spec: "28 Cans / Case", price: null },
    { id: 151, name: "EZ Cooking Machine", cat: "NONFOOD", spec: "Commercial Unit", price: null, isReservation: true }
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
        const isRes = p.isReservation;

        // Badge Logic
        const badgeHTML = isRes 
            ? `<span class="bg-amber-500/20 text-amber-500 text-[10px] font-extrabold px-2 py-0.5 rounded border border-amber-500/40 uppercase tracking-wider">For Reservation</span>`
            : `<span class="bg-brand-black text-brand-gold text-[10px] font-extrabold px-2 py-0.5 rounded border border-brand-gold/40 uppercase tracking-wider">${p.cat}</span>`;

        // Button Logic
        const btnText = isRes ? "📌 Reserve Box" : "+ Add Box";
        const btnClass = isRes 
            ? "border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
            : "border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black";
            
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-2">
                    ${badgeHTML}
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
               <button onclick="addToCart(${p.id})" class="bg-brand-black font-extrabold text-xs px-3 py-1.5 rounded border transition-all ${btnClass}">${btnText}</button>
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
