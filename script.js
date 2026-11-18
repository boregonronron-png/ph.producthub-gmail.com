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
    { id: 13, name: "ABC Milk Chocolate", cat: "SNACKS", spec: "20 Packs / Case", price: null, img: "images/abc-milk-chocolate.jpg" },

    // --- RAMEN & NOODLES ---
    { id: 14, name: "Jin Ramen Mild", cat: "RAMEN", spec: "Boxes / Case", price: null, img: "images/jin-ramen-mild.jpg" },
    { id: 15, name: "Stir-Fry Cheese Ramen 120g", cat: "RAMEN", spec: "Boxes / Case", price: null, img: "images/Stir-Fry Cheese Ramen 120g.jpg" },
    { id: 16, name: "Stir-Fry Cheese Ramen Spicy 130g", cat: "RAMEN", spec: "Boxes / Case", price: null, img: "images/stir-fry-cheese-ramen-spicy-130g.jpg" },
    { id: 17, name: "Cheese Ramen Mild 111g", cat: "RAMEN", spec: "Boxes / Case", price: null, img: "images/cheese-ramen-mild-111g.jpg" },
    { id: 18, name: "Samyang Original Buldak", cat: "RAMEN", spec: "Packs / Case", price: null, img: "images/samyang-original-buldak.jpg" },
    { id: 19, name: "Samyang Buldak Carbonara", cat: "RAMEN", spec: "Packs / Case", price: null, img: "images/Samyang Buldak Carbonara.jpg" },
    { id: 20, name: "Samyang Buldak Rose", cat: "RAMEN", spec: "Packs / Case", price: null, img: "images/samyang-buldak-rose.jpg" },
    { id: 21, name: "Samyang Buldak Quattro Cheese", cat: "RAMEN", spec: "Packs / Case", price: null, img: "images/samyang-buldak-quattro-cheese.jpg" },
    { id: 22, name: "Cheese Ramen Spicy 111g", cat: "RAMEN", spec: "Boxes / Case", price: null, img: "images/cheese-ramen-spicy-111g.jpg" },
  { id: 23, name: "Pho Story Noodles 67g", cat: "RAMEN", spec: "30 Cups / Case", price: null, img: "images/Pho Story Noodles 67g.jpg" },
    { id: 24, name: "Chakhan Vermicelli 14kg", cat: "RAMEN", spec: "14kg Commercial Sack", price: null, img: "images/Chakhan Vermicelli 14kg.jpg", isReservation: true },
    { id: 25, name: "Nongbu Glass Noodle 500g", cat: "RAMEN", spec: "20 Packs / Case", price: null, img: "images/Nongbu Glass Noodle 500g.jpeg" },
    { id: 26, name: "Nongbu Glass Noodle 14kg", cat: "RAMEN", spec: "14kg Bulk Sack", price: null, img: "images/Nongbu Glass Noodle 14kg.jpg" },
  { id: 27, name: "JINPUM Glass Noodles 10kg", cat: "RAMEN", spec: "10kg Bulk Sack", price: null, img: "images/jinpum-glass-noodles-10kg.jpg" },
    
    // --- CANNED & MEAT ---
    { id: 28, name: "Hansung Pork Luncheon Meat", cat: "MEAT", spec: "Cans / Case", price: null, img: "images/hansung-pork-luncheon-meat.jpg" },
    { id: 29, name: "Hansung Chicken Luncheon Meat", cat: "MEAT", spec: "Cans / Case", price: null, img: "images/hansung-chicken-luncheon-meat.jpg" },
    { id: 30, name: "Hansung Luncheon Meat Cheese", cat: "MEAT", spec: "Cans / Case", price: null, img: "images/hansung-luncheon-meat-cheese.jpg" },
    { id: 31, name: "Lotte Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 32, name: "Rose Farm Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 33, name: "Namkwang Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },
    { id: 34, name: "Densing Dak Pork Luncheon Meat", cat: "MEAT", spec: "24 Cans / Case", price: null },

    // --- SEAWEEDS & KIM ---
    { id: 35, name: "NamKwang Seaweed 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null, img: "images/namkwang-seaweed-3-24.jpg" },
    { id: 36, name: "NamKwang Seaweed Cheese 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null, img: "images/namkwang-seaweed-cheese-3-24.jpg" },
    { id: 37, name: "NamKwang Seaweed 9*8", cat: "SEAWEED", spec: "8 Packs / Case", price: null, img: "images/Namkwang 98.jpg" },
    { id: 38, name: "NamKwang Seaweed 16*6", cat: "SEAWEED", spec: "6 Packs / Case", price: null, img: "images/namkwang.jpg" },
    { id: 39, name: "NamKwang Kimbob Kim 10s", cat: "SEAWEED", spec: "100 Packs / Case", price: null, isReservation: true, image: "images/NamKwang-Kimbob-Kim-10s.jpg" },
  { id: 40, name: "NamKwang Kimbob Kim 100s", cat: "SEAWEED", spec: "10 Packs / Case", price: null, img: "images/namkwang-kimbob-kim-100s.jpg" },
   { id: 41, name: "Nongbu Kimbob Kim 10s", cat: "SEAWEED", spec: "100 Packs / Case", price: null, img: "images/nongbu-kimbob-kim-10s.webp" },
  { id: 42, name: "Nongbu Kimbob Kim 100s", cat: "SEAWEED", spec: "10 Packs / Case", price: null, img: "images/nongbu-kimbob-kim-100s.webp" },
   { id: 43, name: "Sura Laver Seaweeds 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null, img: "images/sura-laver-seaweeds-3-24.jpg" },
  { id: 44, name: "Sura Laver Seaweeds 16*8", cat: "SEAWEED", spec: "8 Packs / Case", price: null, img: "images/sura-laver-seaweeds-16x8.webp" },
 { id: 45, name: "Kimjaban Seaweeds (Vegetable)", cat: "SEAWEED", spec: "30 Packs / Case", price: null, img: "images/kimjaban-seaweeds-vegetable.webp" },
{ id: 46, name: "Kimjaban Seaweeds (Original)", cat: "SEAWEED", spec: "30 Packs / Case", price: null, img: "images/kimjaban-seaweeds-original.webp" },
  { id: 47, name: "Kimjaban Seaweeds (Seafood)", cat: "SEAWEED", spec: "30 Packs / Case", price: null, img: "images/kimjaban-seaweeds-seafood.webp" },
  { id: 48, name: "Kimbap Laver Seaweeds 10s", cat: "SEAWEED", spec: "100 Packs / Case", price: null, img: "images/kimbap-laver-seaweeds-10s.webp" },
  { id: 49, name: "Kimbap Laver Seaweeds 100s", cat: "SEAWEED", spec: "10 Packs / Case", price: null, img: "images/kimbap-laver-seaweeds-100s.webp" },
  { id: 50, name: "Boryeong Seaweeds 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null, img: "images/boryeong-seaweeds-3-24.jpg" },
  { id: 51, name: "Boryeong Seaweeds 16*8", cat: "SEAWEED", spec: "8 Packs / Case", price: null, img: "images/boryeong-seaweeds-16x8.webp" },
 { id: 52, name: "Boryeong Extra Olive Seaweeds 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null, img: "images/boryeong-extra-olive-seaweeds-3x24.webp" },
   { id: 53, name: "Boryeong Extra Olive Seaweeds 16*6", cat: "SEAWEED", spec: "6 Packs / Case", price: null, img: "images/boryeong-extra-olive-seaweeds-16x6.webp" },
   { id: 54, name: "Sigolkim Seaweeds Original 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null, img: "images/sigolkim-seaweeds-original-3x24.webp" },
   { id: 55, name: "Sigolkim Seaweeds Original 9*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null, img: "images/sigolkim-seaweeds-original-9x12.webp" },
  { id: 56, name: "Sigolkim Seaweeds Original 16*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null, img: "images/sigolkim-seaweeds-original-16x12.png" },
  { id: 57, name: "Sigolkim Seaweeds with Sesame Oil 3*24", cat: "SEAWEED", spec: "24 Bundles / Case", price: null, img: "images/sigolkim-seaweeds-sesame-oil-3-24.jpg" },
{ id: 58, name: "Sigolkim Seaweeds with Sesame Oil 9*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null, img: "images/sigolkim-seaweeds-with-sesame-oil-9x12.webp" },
{ id: 59, name: "Sigolkim Seaweeds with Sesame Oil 16*12", cat: "SEAWEED", spec: "12 Packs / Case", price: null, img: "images/sigolkim-seaweeds-with-sesame-oil-16x12.webp" },

    // --- BEVERAGES & MILK ---
    { id: 60, name: "Binggrae Banana Milk", cat: "DRINKS", spec: "24 x 200ml / Case", price: null, img: "images/binggrae-banana..jpg" },
    { id: 61, name: "Binggrae Coffee Milk", cat: "DRINKS", spec: "24 x 200ml / Case", price: null, img: "images/bingrae coffee milk drink.jpg" },
    { id: 62, name: "Binggrae Banana Light Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null, isReservation: true, image: "images/binggrae-banana-light-milk.jpg" },
    { id: 63, name: "Binggrae Melon Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null, img: "images/binggrae melon.jpg" },
    { id: 64, name: "Binggrae Strawberry Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null, img: "images/binggrae strawberry.jpg" },
    { id: 65, name: "Binggrae Strawberry Light Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null, isReservation: true, image: "images/binggrae-strawberry-light-milk.jpg" },
    { id: 66, name: "Binggrae Taro Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null, img: "images/binggrae taro.jpg" },
    { id: 67, name: "Binggrae Vanilla Milk", cat: "DRINKS", spec: "24 Packs / Case", price: null, img: "images/binggrae vanilla.jpg" },
   { id: 68, name: "Café Bene Peach / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, img: "images/cafe-bene-peach-190ml.webp" },
   { id: 69, name: "Café Bene Blue Lemon / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, img: "images/cafe-bene-blue-lemon-190ml.webp" },
    { id: 70, name: "Café Bene Green Grape / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/caffe-bene-green-grape-ade.jpg" },
    { id: 71, name: "Café Bene Watermelon / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/caffe-bene-watermelon.jpg" },
    { id: 72, name: "Café Bene Honey Grapefruit / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/caffe-bene-honey-grapefruit.jpg" },
    { id: 73, name: "Café Bene Pineapple / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/caffe-bene-pineapple.jpg" },
    { id: 74, name: "Café Bene Omija / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/caffe-bene-omija.jpg" },
    { id: 75, name: "Café Bene Vanilla Americano / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/caffe-bene-vanilla-americano.jpg" },
    { id: 76, name: "Café Bene Hazelnut / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/caffe-bene-hazelnut.jpg" },
    { id: 77, name: "Café Bene Caramel Macchiato / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/cafe-bene-caramel-macchiato.jpg" },
  { id: 78, name: "Café Bene Americano / 190 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, img: "images/cafe-bene-americano-190ml.webp" },
   { id: 79, name: "Ice Talk A1 Peach / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, img: "images/ice-talk-a1-peach-230ml.webp" },
    { id: 80, name: "Ice Talk A2 Blue Lemon / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/Ice-Talk-A2-Blue-Lemon.jpg" },
    { id: 81, name: "Ice Talk A3 Blueberry / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/Ice-Talk-A3-Blueberry.jpg" },
    { id: 82, name: "Ice Talk A4 Pomegranate / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/ice-talk-a4-pomegranate-230ml.png (2).png" },
{ id: 83, name: "Ice Talk A5 Kiwi / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, img: "images/ice-talk-a5-kiwi-230ml.webp" },
  { id: 84, name: "Ice Talk A7 Passion Mango / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, img: "images/ice-talk-a7-passion-mango-230ml.webp" },
    { id: 85, name: "Ice Talk A9 Watermelon / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, image: "images/ice-talk-a9-watermelon-230ml.png.png" },
  { id: 86, name: "Ice Talk A10 Greengrape / 230 ML", cat: "DRINKS", spec: "30 Pouches / Case", price: null, isReservation: true, img: "images/ice-talk-a10-greengrape-230ml.webp" },
    { id: 87, name: "Welchs Grape / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null, img: "images/Welchs Grape.jpg" },
 { id: 88, name: "Welchs Grape Zero / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null, img: "images/welchs-grape-zero-355ml.webp" },
    { id: 89, name: "Welchs White Grape / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null, img: "images/welchs-white-grape-355ml.webp" },
    { id: 90, name: "Welchs Apple Mango / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null, img: "images/Welchs Apple Mango.jpg" },
 { id: 91, name: "Welchs Orange Zero / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null, img: "images/welchs-orange-zero-355ml.webp" },
    { id: 92, name: "Welchs Shinemuscat Zero / 355 ML", cat: "DRINKS", spec: "24 Cans / Case", price: null, img: "images/Welchs Shinemuscat Zero.jpg" },
    { id: 93, name: "Lets Be Mild / 175 ML", cat: "DRINKS", spec: "30 Cans / Case", price: null, isReservation: true, image: "images/lets-be-mild.jpg" },
    { id: 94, name: "Lets Be Mocha / 175 ML", cat: "DRINKS", spec: "30 Cans / Case", price: null, isReservation: true, image: "images/lets-be-mocha.jpg" },

    // --- MAXIM COFFEE ---
  { id: 95, name: "Maxim Mocha Gold 20T", cat: "COFFEE", spec: "20 Boxes / Case", price: null, img: "images/maxim-mocha-gold-20t.jpg" },
   { id: 96, name: "Maxim Original 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null, img: "images/maxim-original-100t.jpg" },
{ id: 97, name: "Maxim Mocha Gold 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null, img: "images/maxim-mocha-gold-100t.webp" },
 { id: 98, name: "Maxim White Gold 20T", cat: "COFFEE", spec: "20 Boxes / Case", price: null, img: "images/maxim-white-gold-20t.jpg" },
   { id: 99, name: "Maxim White Gold 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null, img: "images/maxim-white-gold-100t.jpg" },
  { id: 100, name: "Maxim Supreme Gold Coffee Mix 20T", cat: "COFFEE", spec: "20 Boxes / Case", price: null, img: "images/maxim-supreme-gold-coffee-mix-20t.webp" },
  { id: 101, name: "Maxim Decaf Coffee 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null, img: "images/maxim-decaf-coffee-100t.webp" },
   { id: 102, name: "Maxim Arabica 100T", cat: "COFFEE", spec: "8 Boxes / Case", price: null, img: "images/maxim-arabica-100t.webp" },

    // --- SOJU & ALCOHOL ---
   { id: 103, name: "JINRO Soju 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/jinro-soju-360ml.webp" },
  { id: 104, name: "JINRO Chamisul Fresh 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/jinro-chamisul-fresh-360ml-20.jpg" },
  { id: 105, name: "JINRO Chamisul Original 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/jinro-chamisul-original-360ml.webp" },
  { id: 106, name: "JINRO Grapefruit 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/jinro-grapefruit-360ml.webp" },
    { id: 107, name: "Jinro Green Grape 360ml", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/JINRO Green Grape.jpg" },
  { id: 108, name: "JINRO Strawberry 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/jinro-strawberry-360ml.webp" },
  { id: 109, name: "JINRO Peach 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/jinro-peach-360ml.webp" },
    { id: 110, name: "Jinro Lemon Soju 360ml", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/JINRO Lemon.jpg" },
  { id: 111, name: "ILPOOM JINRO Soju 25% 375ml*6", cat: "SOJU", spec: "6 Bottles / Case", price: null, img: "images/ilpoom-jinro-soju-25-375ml.webp" },
  { id: 112, name: "JR Jinro Soju 24 700ml*12", cat: "SOJU", spec: "12 Bottles / Case", price: null, img: "images/jr-jinro-soju-24-700ml.webp" },
{ id: 113, name: "JINRO Plum 360ml*20", cat: "SOJU", spec: "20 Bottles / Case", price: null, img: "images/jinro-plum-360ml.webp" },

    // --- SAUCES & PANTRY ---
    // Nongbu Group
    { id: 114, name: "Nongbu Tteokbokki 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null, img: "images/nongbu-tteokbokki.jpg" },
  { id: 115, name: "Nongbu Tteokbokki 500g", cat: "SAUCE", spec: "20 Packs / Case", price: null, img: "images/nongbu-tteokbokki-500g.jpg" },
   { id: 116, name: "Nongbu Ssamjang 200g", cat: "SAUCE", spec: "30 Tubs / Case", price: null, img: "images/nongbu-ssamjang-200g.jpeg" },
    { id: 117, name: "Nongbu Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, image: "images/Nongbu Ssamjang 14kg.jpg" },
  { id: 118, name: "Nongbu Gochujang 200g", cat: "SAUCE", spec: "30 Tubs / Case", price: null, img: "images/nongbu-gochujang-200g.jpeg" },
    { id: 119, name: "Nongbu Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, image: "images/Nongbu Gochujang 14kg.jpg" },
    { id: 120, name: "Nongbu Chili Powder Green 1kg (Fine)", cat: "SAUCE", spec: "10 Packs / Case", price: null, img: "images/nongbu-chili-powder-green-1kg-fine.jpg" },
  { id: 121, name: "NONGBU Fish Cake 200g", cat: "SAUCE", spec: "30 Packs / Case", price: null, img: "images/nongbu-fish-cake-200g.jpeg" },
   { id: 122, name: "NONGBU Fish Cake 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null, img: "images/nongbu-fish-cake-1kg.jpeg" },

    // Sing Song Group
 { id: 123, name: "Sing Song Ssamjang 170g", cat: "SAUCE", spec: "30 Tubs / Case", price: null, img: "images/sing-song-ssamjang-170g.jpeg" },
    { id: 124, name: "Sing Song Ssamjang 500g", cat: "SAUCE", spec: "20 Tubs / Case", price: null, img: "images/singsong-ssamjang-500g.jpg" },
  { id: 125, name: "Sing Song Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, img: "images/sing-song-ssamjang-14kg.jpg" },
{ id: 126, name: "Sing Song Gochujang 170g", cat: "SAUCE", spec: "30 Tubs / Case", price: null, img: "images/sing-song-gochujang-170g.webp" },
    { id: 127, name: "Sing Song Gochujang 500g", cat: "SAUCE", spec: "20 Tubs / Case", price: null, img: "images/singsong-gochujang-500g.jpg" },
  { id: 128, name: "Sing Song Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, img: "images/sing-song-gochujang-14kg.webp" },

    // Jinpum Group
  { id: 129, name: "JINPUM Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, img: "images/jinpum-ssamjang-14kg.webp" },
  { id: 130, name: "JINPUM Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, img: "images/jinpum-gochujang-14kg.webp" },
   { id: 131, name: "JINPUM Doenjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, isReservation: true, img: "images/jinpum-doenjang-14kg.webp" },
   { id: 132, name: "JINPUM Chili Powder 1kg (Fine)", cat: "SAUCE", spec: "10 Packs / Case", price: null, img: "images/jinpum-chili-powder-1kg-fine.webp" },
  { id: 133, name: "JINPUM Chili Powder 1kg (Flakes)", cat: "SAUCE", spec: "10 Packs / Case", price: null, img: "images/jinpum-chili-powder-1kg-flakes.webp" },
 { id: 134, name: "JINPUM Fish Cake 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null, img: "images/jinpum-fish-cake-1kg.webp" },

    // Chakhan Group
 { id: 135, name: "Chakhan Ssamjang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, img: "images/chakhan-ssamjang-14kg.webp" },
  { id: 136, name: "Chakhan Gochujang 14kg", cat: "SAUCE", spec: "14kg Bulk Bucket", price: null, img: "images/chakhan-gochujang-14kg.webp" },

    // Other Pantry Items
    { id: 137, name: "Sliced Rice Cake 300g (Shelf-Stable)", cat: "SAUCE", spec: "30 Packs / Case", price: null, isReservation: true },
    { id: 138, name: "Baby Shark Topokki (Creamy Flavour)", cat: "SAUCE", spec: "24 Cups / Case", price: null, isReservation: true, image: "images/Baby Shark Topokki (Creamy Flavour).jpg" },
  { id: 139, name: "Baby Shark Topokki (Sweet & Mild Spicy)", cat: "SAUCE", spec: "24 Cups / Case", price: null, isReservation: true, img: "images/baby-shark-topokki-sweet-mild-spicy.jpg" },
    { id: 140, name: "Sweet Corn 410g", cat: "SAUCE", spec: "24 Cans / Case", price: null },
    { id: 141, name: "Fruits Cocktail 850g", cat: "SAUCE", spec: "12 Cans / Case", price: null },
  { id: 142, name: "Black Olive Slice 405g", cat: "SAUCE", spec: "24 Cans / Case", price: null, img: "images/black-olive-slice-405g.webp" },
    { id: 143, name: "Vinegar 1.8L", cat: "SAUCE", spec: "6 Bottles / Case", price: null },
    { id: 144, name: "Roasted Sesame Oil (100%) 1.8L", cat: "SAUCE", spec: "6 Containers / Case", price: null },
  { id: 145, name: "Taeyangcho Chili Powder 1kg (Flakes)", cat: "SAUCE", spec: "10 Packs / Case", price: null, img: "images/taeyangcho-chili-powder-1kg-flakes.webp" },
    { id: 146, name: "Chili Powder (Fine) 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
    { id: 147, name: "Chili Powder (Coarse) 1kg", cat: "SAUCE", spec: "10 Packs / Case", price: null },
   { id: 148, name: "Jin Kimchi 10kg", cat: "SAUCE", spec: "10kg Commercial Tub", price: null, img: "images/jin-kimchi-10kg.png" },

    // --- NON-FOOD & EQUIPMENT ---
    { id: 149, name: "Safe Butane", cat: "NONFOOD", spec: "28 Cans / Case", price: null, img: "images/Safe Butane.jpg" },
    { id: 150, name: "Ssen Butane 220g", cat: "NONFOOD", spec: "28 Cans / Case", price: null, img: "images/Ssen Butane 220g.jpg" },
 { id: 151, name: "Max Safe Butane", cat: "NONFOOD", spec: "28 Cans / Case", price: null, img: "images/max-safe-butane.webp" },
   { id: 152, name: "EZ Cooking Machine", cat: "NONFOOD", spec: "Commercial Unit", price: null, isReservation: true, img: "images/ez-cooking-machine.webp" },
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
    onclick="openModal(this.src, this.alt)"
    class="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
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

    let totalCases = 0;
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
            totalCases += qty;
            receipt += `• ${qty}x ${p.name}\n`;
        }
    });

    receipt += `\nTotal: ${totalCases} ${totalCases === 1 ? 'Case' : 'Cases'}\n`;
    receipt += `📌 Sent via Product Hub B2B Portal`;

    document.getElementById('receiptText').value = receipt;
    closeCheckoutModal();
    document.getElementById('receiptModal').classList.remove('hidden');
}

// Quick Copy Order List directly from Cart Drawer
function quickCopyCartToMessenger(openMessenger = false) {
    const itemIds = Object.keys(cart);
    if (itemIds.length === 0) return;

    let totalCases = 0;
    let msg = `Hi Product Hub! Magpapa-quote po ako para sa mga sumusunod:\n\n`;

    itemIds.forEach(id => {
        const p = productsData.find(item => item.id == id);
        if (p) {
            const qty = cart[id];
            totalCases += qty;
            msg += `• ${qty}x ${p.name}\n`;
        }
    });

    msg += `\nTotal: ${totalCases} ${totalCases === 1 ? 'Case' : 'Cases'}`;

    navigator.clipboard.writeText(msg);

    if (openMessenger) {
        alert("Order List copied! Bubukas na ang Messenger ng Product Hub—i-paste (Ctrl+V o Paste) na lang po sa chat.");
        window.open("https://m.me/ProductHub88", "_blank", "noopener,noreferrer");
    } else {
        alert("Order List copied to clipboard! Pwede niyo na itong i-paste sa Messenger o Viber.");
    }
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

// Function para mag-open ang Zoom Modal
function openModal(imgSrc, altText) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imgFull");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgSrc;
  captionText.innerHTML = altText || "";
}

// Function para isara ang Zoom Modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Para pwede ring isara gamit ang 'Esc' key sa keyboard
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// ============================================================
// PRODUCT DESCRIPTION & HIGHLIGHTS ENGINE (ALL 152 ITEMS)
// ============================================================

const customProductDescriptions = {
    // --- SNACKS & PEPERO (ID 1 - 13) ---
    1: {
        overview: "Crisp Korean biscuit sticks generously dipped in rich, smooth milk chocolate. Lotte's flagship classic snack and a guaranteed fast-mover on retail shelves.",
        bullets: ["South Korea's #1 iconic chocolate biscuit stick", "47g value pack ideal for convenience stores & groceries", "High impulse-buy appeal and strong repeat orders"]
    },
    2: {
        overview: "Crunchy dark cocoa cookie bits blended into a creamy, sweet white chocolate coating over a crisp biscuit stick.",
        bullets: ["Top-requested cookies-and-cream Pepero variant in the PH", "Eye-catching blue retail box with strong youth demand", "Great for supermarkets, K-marts, and online resellers"]
    },
    3: {
        overview: "Rich chocolate biscuit sticks coated in smooth chocolate and topped with crunchy crushed chocolate cookie pieces for double cocoa indulgence.",
        bullets: ["Intense double-chocolate crunch for choco lovers", "Individually boxed for clean shelf merchandising", "Consistent year-round wholesale seller"]
    },
    4: {
        overview: "Crunchy biscuit sticks coated in velvety milk chocolate and loaded with roasted California almond bits for a nutty, satisfying bite.",
        bullets: ["Premium nut-and-chocolate flavor combination", "Best-selling Pepero variant for gifting & retail display", "Long shelf life and strong wholesale margin"]
    },
    5: {
        overview: "Thick, crispy biscuit sticks filled on the inside with smooth, creamy chocolate—giving a rich choco burst in every bite without melting on fingers.",
        bullets: ["Inside-filled chocolate core keeps hands mess-free", "Generous 50g pack size with strong value perception", "High repeat purchase among students and families"]
    },
    6: {
        overview: "A luxurious blend of sweet, creamy white chocolate and roasted almond pieces coating a crisp, golden biscuit stick.",
        bullets: ["Unique white-choco and roasted almond crunch", "Standout premium variant for K-snack assortments", "Strong seasonal and holiday bundle performer"]
    },
    7: {
        overview: "Crispy biscuit sticks dipped in sweet, fruity strawberry cream with crunchy strawberry cookie bits for a refreshing berry twist.",
        bullets: ["Vibrant pink packaging that pops on snack racks", "Sweet-and-fruity flavor loved by kids and teens", "Essential variant to complete any Pepero retail lineup"]
    },
    8: {
        overview: "Light, airy puffed rice and malt crunch coated in smooth milk chocolate over a crisp biscuit stick for extra texture in every bite.",
        bullets: ["Extra-crispy puffed cereal texture in milk chocolate", "39g pack size with strong everyday snack appeal", "Fast-turning SKU for sari-sari stores and mini-marts"]
    },
    9: {
        overview: "Whole roasted almonds double-coated in rich, velvety Korean milk chocolate for a classic sweet-and-nutty bite-sized treat.",
        bullets: ["Whole crunchy almonds wrapped in smooth chocolate", "Compact 46g retail box ideal for counter displays", "High-margin impulse snack for groceries & cafes"]
    },
    10: {
        overview: "Retail-ready counter display box containing 39 individual packs of Almond Chocoball 46g—designed for effortless store merchandising.",
        bullets: ["Ready-to-display 39-pack commercial counter box", "Maximizes checkout-counter impulse purchases", "Ideal for wholesalers, canteens, and mini-marts"]
    },
    11: {
        overview: "Crisp, buttery Korean wheat biscuits topped with a delicate layer of rich milk chocolate embossed with classic European-style patterns.",
        bullets: ["Premium tea-time biscuit with smooth chocolate top", "Individually wrapped pieces inside for freshness", "Popular among offices, cafes, and family shoppers"]
    },
    12: {
        overview: "Soft, fluffy sponge cake sandwiching a chewy marshmallow center, coated in rich dark chocolate—Korea's timeless family snack icon.",
        bullets: ["336g family multi-pack with individually wrapped pies", "Soft cake + chewy marshmallow + rich choco coating", "Staple fast-mover for supermarkets and groceries"]
    },
    13: {
        overview: "Bite-sized, smooth Korean milk chocolates molded with alphabet letters—creamy, sweet, and fun for kids and chocolate lovers.",
        bullets: ["Creamy, melt-in-your-mouth Korean milk chocolate", "Resealable/shareable pack great for kids & snacking", "High-demand confectionery item for retail stores"]
    },

    // --- RAMEN & NOODLES (ID 14 - 27) ---
    14: {
        overview: "Korea's beloved savory beef-broth ramyun with chewy wheat noodles and a gentle, family-friendly level of warmth.",
        bullets: ["Mild, rich savory broth suitable for all ages", "Thick, chewy noodles that hold texture well", "Core Korean noodle staple with high repeat orders"]
    },
    15: {
        overview: "Savory stir-fried Korean noodles coated in a rich, creamy cheese sauce with a mild, kid-friendly savory finish.",
        bullets: ["Rich, creamy cheese flavor without overwhelming heat", "Quick-cooking stir-fry format loved by teens", "Strong seller in convenience stores and K-marts"]
    },
    16: {
        overview: "Bold, fiery Korean stir-fried noodles balanced with rich, velvety cheese powder for an addictive spicy-creamy kick.",
        bullets: ["130g hearty serving with bold spicy-cheese glaze", "High demand among spicy noodle enthusiasts", "Great margin item for retail and online bundles"]
    },
    17: {
        overview: "Comforting Korean soup ramyun infused with rich, savory cheddar cheese flavor in a mild, creamy broth.",
        bullets: ["Creamy cheese soup base with chewy Korean noodles", "Mild spice profile appeals to wide household buyers", "Easy-to-stock case format for groceries"]
    },
    18: {
        overview: "The world-famous Korean fiery spicy chicken stir-fried noodles—intensely bold, savory, and topped with roasted sesame and seaweed flakes.",
        bullets: ["Iconic viral Korean spicy noodle bestseller", "Guaranteed high foot-traffic driver for any K-store", "Strong bulk turnover across retail & food stalls"]
    },
    19: {
        overview: "Samyang's signature fiery Buldak sauce blended with creamy, savory Italian-style carbonara cheese powder and wider chewy noodles.",
        bullets: ["#1 top-selling creamy-spicy Buldak variant nationwide", "Balanced heat with rich, velvety creaminess", "Must-have hero SKU for supermarkets & resellers"]
    },
    20: {
        overview: "Smooth, smoky-creamy rose sauce paired with Buldak's signature spicy chicken kick—rich, trendy, and full of umami.",
        bullets: ["Trendy Korean rose cream + spicy Buldak fusion", "Slightly milder, ultra-creamy mouthfeel", "High repeat demand from young adult shoppers"]
    },
    21: {
        overview: "Loaded with four rich cheeses—mozzarella, cheddar, camembert, and gouda—blended into fiery Buldak stir-fry noodles.",
        bullets: ["Ultra-cheesy 4-cheese blend tames the Buldak heat", "Thick, chewy noodles coated in rich cheese sauce", "Premium Buldak flavor with strong collector/fan appeal"]
    },
    22: {
        overview: "Rich, savory Korean cheese soup ramyun elevated with an extra kick of bold Korean chili heat.",
        bullets: ["Warming spicy-cheesy broth with springy noodles", "111g pack ideal for solo meals & quick snacks", "Strong performer alongside classic Korean ramyun"]
    },
    23: {
        overview: "Light, aromatic Vietnamese-style rice noodle cup featuring a clear, flavorful broth and delicate rice noodles ready in minutes.",
        bullets: ["30-cup commercial case ready for convenience retail", "Light, comforting soup alternative to heavy ramyun", "Convenient cup format for offices, schools & travel"]
    },
    24: {
        overview: "Commercial 14kg bulk sack of authentic Korean sweet potato starch glass noodles (dangmyeon)—springy, translucent, and built for high-volume kitchens.",
        bullets: ["14kg heavy-duty bulk sack for restaurants & caterers", "Chewy, non-mushy texture ideal for authentic Japchae", "Cost-efficient commercial supply (available for reservation)"]
    },
    25: {
        overview: "Authentic Korean sweet potato glass noodles (dangmyeon) in a convenient 500g retail/kitchen pack—chewy, glossy, and versatile.",
        bullets: ["Made from 100% sweet potato starch for authentic bounce", "500g pack suits both home cooks and small restaurants", "Essential ingredient for Japchae, bulgogi & hotpots"]
    },
    26: {
        overview: "Heavy-duty 14kg bulk sack of Nongbu Korean sweet potato glass noodles engineered for Korean restaurants, samgyupsal buffets, and commissaries.",
        bullets: ["High-yield 14kg commercial sack lowers per-serving cost", "Holds firm, chewy texture even on buffet warmers", "Trusted brand across Korean dining establishments"]
    },
    27: {
        overview: "Commercial 10kg bulk pack of JINPUM Korean glass noodles—elastic, smooth, and ideal for Japchae, dumplings, and stews.",
        bullets: ["Manageable 10kg bulk sack for kitchens & food stalls", "Clean, translucent finish with superior chewiness", "Reliable wholesale supply for foodservice operators"]
    },

    // --- CANNED & MEAT (ID 28 - 34) ---
    28: {
        overview: "Premium Korean pork luncheon meat known for its tender, juicy bite and savory seasoning—perfect for frying, kimbap, and budae-jjigae.",
        bullets: ["Rich pork flavor with firm yet juicy sliceability", "Top choice for Korean restaurants & home breakfast", "Long shelf life canned format for easy storage"]
    },
    29: {
        overview: "Savory, tender Korean luncheon meat crafted from quality chicken—lighter in profile while keeping rich, juicy flavor.",
        bullets: ["Pork-free chicken alternative for broader customer reach", "Slices cleanly for pan-frying, musubi, and sandwiches", "Strong retail & foodservice demand"]
    },
    30: {
        overview: "Savory Korean luncheon meat studded with creamy, melty cheese pockets throughout every slice.",
        bullets: ["Built-in creamy cheese bursts when pan-fried", "Crowd-favorite twist for kids, kimbap & rice bowls", "High-margin specialty canned meat SKU"]
    },
    31: {
        overview: "Classic Korean canned luncheon meat from Lotte—well-balanced savory seasoning, tender texture, and reliable quality in a 24-can wholesale case.",
        bullets: ["Trusted Lotte brand quality with strong retail recognition", "24 cans/case standard wholesale carton", "Versatile staple for groceries & commissaries"]
    },
    32: {
        overview: "Flavorful Korean luncheon meat offering hearty texture and rich savory taste at an attractive wholesale value.",
        bullets: ["Competitive wholesale price-to-quality ratio", "24 cans/case ideal for retail shelves & food stalls", "Great for fried rice, army stew, and bento meals"]
    },
    33: {
        overview: "Savory Korean luncheon meat from Namkwang—juicy, easy to slice, and seasoned to complement steamed rice and Korean dishes.",
        bullets: ["Consistent slice integrity when grilled or pan-fried", "24 cans/case wholesale packaging", "Dependable pantry essential for K-stores & groceries"]
    },
    34: {
        overview: "Hearty Korean pork luncheon meat crafted for rich, meaty flavor and golden-crisp edges when pan-seared.",
        bullets: ["Rich pork aroma and firm, satisfying bite", "24 cans/case commercial wholesale carton", "High repeat orders from retail & foodservice buyers"]
    },

    // --- SEAWEEDS & KIM (ID 35 - 59) ---
    35: {
        overview: "Crispy roasted Korean seasoned seaweed in convenient 3-pack retail bundles (24 bundles per case)—light, savory, and addictive.",
        bullets: ["3-pack retail bundle format easy to display & sell", "Crisp, lightly salted Korean laver for snacks or rice", "Fast-turning healthy snack SKU"]
    },
    36: {
        overview: "Crispy roasted Korean seaweed seasoned with savory-sweet cheese powder—a fun, kid-friendly twist on classic gim.",
        bullets: ["Savory cheese seasoning appeals strongly to kids", "24 x 3-pack bundles per wholesale case", "Standout flavor variant for K-snack shelves"]
    },
    37: {
        overview: "Family-value 9-pack bundle of crispy NamKwang roasted seaweed (8 bundles per case)—built for household pantry stocking.",
        bullets: ["High-value 9-pack multi-bundle for supermarkets", "Crisp roasted laver with clean sesame aroma", "Strong household repeat purchase rate"]
    },
    38: {
        overview: "Bulk 16-pack value bundle of NamKwang roasted seaweed (6 bundles per case)—maximum value per sheet for heavy seaweed lovers.",
        bullets: ["16-pack mega-bundle ideal for wholesale & club buyers", "Freshly sealed packs preserve crispness", "Great margin for retail & online bundle sellers"]
    },
    39: {
        overview: "Full-size roasted Korean seaweed sheets (10 sheets/pack, 100 packs/case) specifically crafted for rolling firm, delicious kimbap and sushi.",
        bullets: ["Tear-resistant roasted laver sheets for easy rolling", "100-pack wholesale case for restaurants & stores", "Available for advance reservation / pre-order"]
    },
    40: {
        overview: "Commercial bulk 100-sheet pack of NamKwang Kimbob Kim (10 bulk packs per case)—engineered for high-volume kimbap, sushi, and Japanese-Korean kitchens.",
        bullets: ["1,000 total sheets per case for foodservice efficiency", "Crisp, aromatic laver that holds rice without cracking", "Essential bulk supply for restaurants & caterers"]
    },
    41: {
        overview: "Roasted Korean kimbap laver in convenient 10-sheet retail packs (100 packs per case)—ideal for both home kimbap makers and small food stalls.",
        bullets: ["Retail-ready 10-sheet packs with high turnover", "Consistent thickness and rich roasted sea aroma", "100 packs/case wholesale carton"]
    },
    42: {
        overview: "Commercial 100-sheet value packs of Nongbu Kimbob Kim (10 packs per case) built for busy Korean restaurants, sushi bars, and commissaries.",
        bullets: ["High-yield 100-sheet commercial packs", "Strong, flexible roasted sheets prevent tearing", "Cost-effective bulk supply for daily operations"]
    },
    43: {
        overview: "Crispy, lightly roasted Sura Korean laver in classic 3-pack retail bundles (24 bundles per case).",
        bullets: ["Clean, savory roasted flavor pairs well with hot rice", "24 x 3-pack wholesale carton", "Affordable everyday K-food staple"]
    },
    44: {
        overview: "Large 16-pack value bundle of Sura roasted Korean laver (8 bundles per case) offering generous retail value.",
        bullets: ["16 individual snack packs per bundle", "Great for family grocery shoppers & resellers", "Lightweight, high-margin wholesale item"]
    },
    45: {
        overview: "Crunchy Korean roasted seaweed flakes blended with savory vegetable seasoning and sesame—ready to sprinkle over rice, noodles, or salads.",
        bullets: ["Ready-to-eat seasoned seaweed flakes (jaban)", "Savory vegetable & sesame crunch loved by kids", "30 packs/case wholesale carton"]
    },
    46: {
        overview: "Classic crispy Korean roasted seaweed flakes lightly glazed with sesame oil and salt—the ultimate instant rice topper.",
        bullets: ["Authentic sweet-savory roasted gimjaban crunch", "Resealable pouch keeps flakes crisp after opening", "30 packs/case fast-moving retail item"]
    },
    47: {
        overview: "Savory roasted Korean seaweed flakes enriched with umami seafood seasoning and toasted sesame seeds.",
        bullets: ["Rich coastal umami flavor for rice bowls & onigiri", "30 packs/case commercial wholesale packaging", "Great variety addition to seaweed sections"]
    },
    48: {
        overview: "Standard 10-sheet packs of roasted Korean kimbap seaweed (100 packs per case) for retail grocery shelves and home cooking.",
        bullets: ["Full-sized roasted sheets for kimbap & hand rolls", "100 retail packs per wholesale case", "Consistent quality and crispness"]
    },
    49: {
        overview: "Bulk 100-sheet packs of roasted kimbap laver (10 packs per case) tailored for foodservice kitchens, bento shops, and sushi counters.",
        bullets: ["100 sheets per pack for uninterrupted kitchen prep", "Aromatic roasted laver with firm rolling strength", "10 packs/case wholesale bulk carton"]
    },
    50: {
        overview: "Famous Boryeong West Coast Korean seaweed in 3-pack retail bundles (24 bundles per case)—prized for its delicate crispness and savory roast.",
        bullets: ["Harvested from Korea's renowned Boryeong coast", "24 x 3-pack retail-ready bundles per case", "High brand trust among Korean food buyers"]
    },
    51: {
        overview: "Value-packed 16-pack bundle of Boryeong roasted Korean seaweed (8 bundles per case) for high-volume retail and family shoppers.",
        bullets: ["16-pack bulk bundle maximizes retail value", "Crisp, thin laver sheets roasted to golden perfection", "8 bundles/case wholesale carton"]
    },
    52: {
        overview: "Boryeong Korean seaweed delicately roasted with extra virgin olive oil for a cleaner, smoother, heart-friendly crunch.",
        bullets: ["Infused with extra virgin olive oil for light crispness", "24 x 3-pack bundles per wholesale case", "Appeals to health-conscious retail customers"]
    },
    53: {
        overview: "Mega 16-pack value bundle of Boryeong Extra Olive Oil Seaweed (6 bundles per case)—combining premium olive oil roasting with bulk savings.",
        bullets: ["16-pack family value size with extra olive oil", "Crisp, fragrant, and non-greasy finish", "6 bundles/case wholesale carton"]
    },
    54: {
        overview: "Traditional Korean country-style roasted seaweed (Sigolkim) in classic 3-pack bundles (24 bundles per case) with authentic savory seasoning.",
        bullets: ["Traditional Korean home-style crispness & flavor", "24 x 3-pack bundles per wholesale case", "Steady seller for groceries & K-marts"]
    },
    55: {
        overview: "9-pack multi-bundle of Sigolkim Original roasted seaweed (12 bundles per case) offering convenient mid-size family value.",
        bullets: ["9 individual packs per bundle (12 bundles/case)", "Crisp, savory laver ideal for packed lunches", "Strong turnover in supermarkets & mini-marts"]
    },
    56: {
        overview: "16-pack bulk value bundle of Sigolkim Original roasted seaweed (12 bundles per case) built for maximum retail value.",
        bullets: ["16 packs per bundle for heavy seaweed consumers", "12 bundles/case wholesale carton", "High-margin bulk retail SKU"]
    },
    57: {
        overview: "Sigolkim Korean seaweed roasted with fragrant toasted sesame oil in 3-pack bundles (24 bundles per case) for rich nutty aroma.",
        bullets: ["Rich toasted sesame oil aroma in every crisp sheet", "24 x 3-pack retail bundles per case", "Classic pairing with steamed white rice"]
    },
    58: {
        overview: "9-pack bundle of Sigolkim Sesame Oil roasted seaweed (12 bundles per case)—balancing aromatic sesame flavor with family pack convenience.",
        bullets: ["9 packs per bundle infused with fragrant sesame oil", "12 bundles/case wholesale packaging", "Consistent repeat buyer favorite"]
    },
    59: {
        overview: "Large 16-pack value bundle of Sigolkim Sesame Oil roasted seaweed (12 bundles per case) for families, resellers, and food stalls.",
        bullets: ["16-pack mega bundle with rich sesame oil roast", "12 bundles/case wholesale carton", "Excellent value-per-pack wholesale option"]
    },

    // --- BEVERAGES & MILK (ID 60 - 94) ---
    60: {
        overview: "Korea's iconic sweet, creamy banana-flavored milk drink in 200ml packs—an absolute must-have bestseller in every Korean store.",
        bullets: ["#1 most recognizable Korean beverage worldwide", "24 x 200ml wholesale case ready for chillers", "Guaranteed foot-traffic magnet & fast seller"]
    },
    61: {
        overview: "Smooth, creamy Korean milk blended with sweet, aromatic roasted coffee flavor—gentle, refreshing, and easy to drink.",
        bullets: ["Mild, sweet cafe-latte taste loved by non-bitter drinkers", "24 x 200ml packs per wholesale case", "Strong morning & afternoon convenience store seller"]
    },
    62: {
        overview: "Reduced-sugar, lighter version of Korea's famous Binggrae Banana Milk—keeping the signature creamy banana taste with fewer calories.",
        bullets: ["Lighter calorie profile for health-conscious buyers", "24 packs/case wholesale carton", "Available for advance reservation / pre-order"]
    },
    63: {
        overview: "Rich, creamy Korean milk infused with sweet, fragrant cantaloupe melon flavor—refreshing and smooth when served ice-cold.",
        bullets: ["Sweet, aromatic Korean melon milk favorite", "24 packs/case ideal for retail beverage coolers", "High repeat demand alongside Banana Milk"]
    },
    64: {
        overview: "Sweet, creamy Korean milk blended with juicy strawberry flavor—smooth, fruity, and popular with kids and young adults.",
        bullets: ["Classic creamy strawberry milk taste", "24 packs/case wholesale packaging", "Bright pink pack stands out in chillers"]
    },
    65: {
        overview: "Lighter, lower-sugar edition of Binggrae Strawberry Milk—delivering sweet berry creaminess with a cleaner finish.",
        bullets: ["Reduced-sugar strawberry milk alternative", "24 packs/case wholesale carton", "Available for advance reservation / pre-order"]
    },
    66: {
        overview: "Velvety Korean milk flavored with sweet, nutty purple taro—creamy, unique, and trending among milk-tea and K-drink fans.",
        bullets: ["Rich, creamy taro flavor with loyal fan base", "24 packs/case wholesale carton", "Great differentiator for K-marts and cafes"]
    },
    67: {
        overview: "Smooth, classic Korean milk infused with sweet, aromatic vanilla—creamy and comforting straight from the chiller.",
        bullets: ["Rich, dessert-like vanilla milk flavor", "24 packs/case wholesale carton", "Completes the full Binggrae rainbow lineup"]
    },
    68: {
        overview: "Refreshing Korean pouch drink bursting with sweet, juicy peach iced tea flavor—designed to be poured over a cup of ice.",
        bullets: ["190ml ready-to-pour Korean convenience store pouch", "30 pouches/case for cafes, K-marts & resellers", "High-margin impulse chiller drink"]
    },
    69: {
        overview: "Zesty, vibrant blue citrus-lemonade pouch drink—tangy, cooling, and visually striking over ice.",
        bullets: ["Eye-catching electric blue citrus refreshment", "30 x 190ml pouches per wholesale case", "Top summer and all-year convenience drink"]
    },
    70: {
        overview: "Crisp, sweet Korean green grape ade in a 190ml pouch—fruity, aromatic, and ultra-refreshing over ice.",
        bullets: ["Sweet-tart Korean green grape flavor favorite", "30 pouches/case wholesale carton", "Available for advance reservation / pre-order"]
    },
    71: {
        overview: "Sweet, cooling Korean watermelon ade pouch drink—captures juicy summer watermelon refreshment in every sip.",
        bullets: ["Refreshing fruity watermelon ade for ice cups", "30 x 190ml pouches per wholesale case", "Available for advance reservation / pre-order"]
    },
    72: {
        overview: "Zesty Korean grapefruit ade sweetened with smooth honey notes—a balanced sweet-tangy citrus favorite.",
        bullets: ["Sophisticated honey-grapefruit cafe flavor", "30 x 190ml pouches per wholesale case", "Available for advance reservation / pre-order"]
    },
    73: {
        overview: "Tropical, sweet-tangy Korean pineapple ade pouch drink—bright, juicy, and refreshing over ice.",
        bullets: ["Tropical pineapple refreshment loved by all ages", "30 x 190ml pouches per wholesale case", "Available for advance reservation / pre-order"]
    },
    74: {
        overview: "Traditional Korean five-flavor berry (Omija) ade—a unique balance of sweet, tangy, and refreshing fruity notes.",
        bullets: ["Authentic Korean Omija berry cafe specialty", "30 x 190ml pouches per wholesale case", "Available for advance reservation / pre-order"]
    },
    75: {
        overview: "Smooth, aromatic Korean black Americano coffee infused with sweet vanilla—ready to pour over ice for instant cafe coffee.",
        bullets: ["Instant iced vanilla Americano in 190ml pouch", "30 pouches/case for convenience stores & offices", "Available for advance reservation / pre-order"]
    },
    76: {
        overview: "Fragrant roasted Korean coffee blended with rich, nutty hazelnut aroma—smooth and satisfying served chilled.",
        bullets: ["#1 bestselling Korean convenience-store coffee pouch flavor", "30 x 190ml pouches per wholesale case", "Available for advance reservation / pre-order"]
    },
    77: {
        overview: "Creamy, sweet Korean coffee pouch layered with rich buttery caramel notes—cafe-quality indulgence in seconds.",
        bullets: ["Sweet caramel macchiato taste ready over ice", "30 x 190ml pouches per wholesale case", "Available for advance reservation / pre-order"]
    },
    78: {
        overview: "Clean, bold Korean black Americano coffee in a 190ml pouch—crisp, unsweetened, and ready for instant iced coffee.",
        bullets: ["Authentic Korean iced Americano convenience pouch", "30 pouches/case in-stock wholesale carton", "High daily repeat demand from coffee drinkers"]
    },
    79: {
        overview: "Large 230ml Korean pouch drink bursting with sweet, fragrant peach ade—generous single-serve refreshment over ice.",
        bullets: ["Larger 230ml pouch size for fuller ice-cup servings", "30 pouches/case wholesale carton", "Available for advance reservation / pre-order"]
    },
    80: {
        overview: "Tangy, vibrant Blue Lemon ade in a generous 230ml Korean pouch—zesty citrus refreshment with strong visual appeal.",
        bullets: ["230ml high-value pouch format for retail & cafes", "30 pouches/case wholesale carton", "Available for advance reservation / pre-order"]
    },
    81: {
        overview: "Rich, sweet-tart Korean blueberry ade in a 230ml pouch—fruity, deep purple refreshment ideal over ice.",
        bullets: ["Bold berry flavor in generous 230ml pouch", "30 pouches/case wholesale carton", "Available for advance reservation / pre-order"]
    },
    82: {
        overview: "Tangy, ruby-red Korean pomegranate ade in a 230ml pouch—crisp, fruity, and packed with bright flavor.",
        bullets: ["Refreshing sweet-tart pomegranate ade", "30 x 230ml pouches per wholesale case", "Available for advance reservation / pre-order"]
    },
    83: {
        overview: "Zesty, tropical Korean kiwi ade in a 230ml pouch—bright green, tangy-sweet, and ultra-cooling over ice.",
        bullets: ["Unique tangy kiwi ade flavor standout", "30 x 230ml pouches per wholesale case", "Available for advance reservation / pre-order"]
    },
    84: {
        overview: "Exotic, tropical blend of tangy passionfruit and sweet mango ade in a generous 230ml Korean pouch.",
        bullets: ["Tropical passion-mango fusion loved by PH buyers", "30 x 230ml pouches per wholesale case", "Available for advance reservation / pre-order"]
    },
    85: {
        overview: "Juicy, sweet Korean watermelon ade in a large 230ml pouch—crisp and hydrating when poured over ice.",
        bullets: ["Generous 230ml summer watermelon refreshment", "30 pouches/case wholesale carton", "Available for advance reservation / pre-order"]
    },
    86: {
        overview: "Sweet, fragrant Korean green grape ade in a 230ml pouch—fruity, crisp, and a consistent crowd favorite.",
        bullets: ["Popular green grape flavor in 230ml pouch", "30 pouches/case wholesale carton", "Available for advance reservation / pre-order"]
    },
    87: {
        overview: "Bold, fizzy Korean Welch's Grape soda in a 355ml sleek can—bursting with rich Concord grape flavor.",
        bullets: ["Top-selling Korean canned grape soda in the PH", "24 x 355ml cans per wholesale case", "Essential chiller beverage for K-BBQ & stores"]
    },
    88: {
        overview: "All the bold, fizzy Concord grape flavor of Korean Welch's Grape with zero sugar and zero calories.",
        bullets: ["Guilt-free zero-sugar grape soda bestseller", "24 x 355ml cans per wholesale case", "High demand among diet-conscious shoppers"]
    },
    89: {
        overview: "Crisp, sparkling Korean Welch's White Grape soda—sweet, aromatic, and refreshingly light in a 355ml can.",
        bullets: ["Sweet white grape fizz with clean finish", "24 x 355ml cans per wholesale case", "Strong performer in K-marts and restaurants"]
    },
    90: {
        overview: "Tropical Korean Welch's soda blending crisp apple sweetness with juicy mango aroma in a 355ml can.",
        bullets: ["Fruity apple-mango sparkling refreshment", "24 x 355ml cans per wholesale case", "Unique flavor variant that drives impulse trials"]
    },
    91: {
        overview: "Bright, zesty Korean Welch's Orange soda formulated with zero sugar—crisp citrus fizz without the calories.",
        bullets: ["Zero-sugar sparkling orange refreshment", "24 x 355ml cans per wholesale case", "Growing demand in modern retail & convenience stores"]
    },
    92: {
        overview: "Premium Korean Shine Muscat green grape sparkling soda with zero sugar—fragrant, crisp, and ultra-refreshing.",
        bullets: ["Trendy Korean Shine Muscat grape flavor + Zero Sugar", "24 x 355ml cans per wholesale case", "High-margin specialty soda SKU"]
    },
    93: {
        overview: "Korea's iconic pocket-sized 175ml canned sweet milk coffee—smooth, creamy, and lightly roasted for an instant pick-me-up.",
        bullets: ["Classic 175ml Korean canned coffee staple", "30 cans/case compact wholesale carton", "Available for advance reservation / pre-order"]
    },
    94: {
        overview: "Rich, chocolate-infused Korean canned mocha coffee in a convenient 175ml can—sweet, smooth, and satisfying chilled or warm.",
        bullets: ["Chocolatey mocha twist on Korea's classic canned coffee", "30 x 175ml cans per wholesale case", "Available for advance reservation / pre-order"]
    },

    // --- MAXIM COFFEE (ID 95 - 102) ---
    95: {
        overview: "Korea's #1 instant coffee mix in a handy 20-stick retail box—perfectly balanced roast coffee, rich creamer, and golden sugar.",
        bullets: ["South Korea's #1 bestselling instant coffee mix", "Compact 20-stick box ideal for groceries & trial buyers", "20 boxes/case wholesale carton"]
    },
    96: {
        overview: "Value 100-stick box of Maxim Original Coffee Mix—richer, deeper roasted coffee flavor for traditional coffee lovers.",
        bullets: ["Bold, classic coffee-forward profile in 100-stick box", "8 boxes/case ideal for offices, pantries & bulk buyers", "High repeat commercial demand"]
    },
    97: {
        overview: "Bulk 100-stick value box of Maxim Mocha Gold Mild—smooth, aromatic, and creamy Korean coffee mix loved nationwide.",
        bullets: ["Hero 100-stick pack of Korea's most famous coffee mix", "8 boxes/case top-moving wholesale SKU", "Essential stock for supermarkets, offices & resellers"]
    },
    98: {
        overview: "Smooth, creamy Korean instant coffee mix made with fat-free milk creamer in a 20-stick retail box for a milder, silky latte taste.",
        bullets: ["Extra-creamy, smooth milk-forward coffee blend", "20-stick retail box (20 boxes/case)", "Popular among drinkers who prefer gentle, creamy coffee"]
    },
    99: {
        overview: "100-stick bulk value box of Maxim White Gold—delivers a soft, creamy latte-style cup with clean coffee aroma.",
        bullets: ["100-stick value box for heavy daily coffee drinkers", "8 boxes/case wholesale carton", "Strong seller alongside Mocha Gold 100T"]
    },
    100: {
        overview: "Premium 20-stick box of Maxim Supreme Gold—crafted with richer roasted beans and deeper, velvety latte creaminess.",
        bullets: ["Upgraded rich-and-creamy premium Maxim blend", "20-stick retail box (20 boxes/case)", "High-margin specialty coffee item"]
    },
    101: {
        overview: "100-stick value box of Maxim Decaffeinated Coffee Mix—delivers the full smooth Mocha Gold taste without the caffeine.",
        bullets: ["Caffeine-free enjoyment for evening or sensitive drinkers", "100-stick bulk box (8 boxes/case)", "Unique niche bestseller for groceries & offices"]
    },
    102: {
        overview: "100-stick value box crafted with 100% premium Arabica coffee beans for a cleaner, more aromatic, cafe-style instant cup.",
        bullets: ["100% Arabica bean blend for refined coffee aroma", "100-stick value box (8 boxes/case)", "Strong appeal to specialty coffee enthusiasts"]
    },

    // --- SOJU & ALCOHOL (ID 103 - 113) ---
    103: {
        overview: "The world's #1 selling spirit—classic JINRO Soju in 360ml green bottles, known for its clean, crisp, and smooth finish.",
        bullets: ["Global #1 best-selling Korean soju brand", "20 x 360ml bottles per wholesale case", "Core beverage requirement for K-BBQ & restaurants"]
    },
    104: {
        overview: "Bamboo-charcoal filtered JINRO Chamisul Fresh (16.5% ABV)—ultra-clean, crisp, and smooth with zero harsh aftertaste.",
        bullets: ["Top-requested bamboo-charcoal filtered fresh soju", "20 x 360ml bottles per wholesale case", "Fastest-turning classic soju SKU in bars & stores"]
    },
    105: {
        overview: "Traditional JINRO Chamisul Original (20.1% ABV)—fuller, richer, and bolder classic Korean soju character for purists.",
        bullets: ["Higher-proof traditional Korean soju profile", "20 x 360ml bottles per wholesale case", "Preferred by authentic Korean diners & seasoned drinkers"]
    },
    106: {
        overview: "Refreshing JINRO Grapefruit Soju (13% ABV)—blends smooth Korean soju with tangy, sweet-zesty red grapefruit flavor.",
        bullets: ["#1 most popular fruit-flavored soju variant", "20 x 360ml bottles per wholesale case", "Easy-drinking crowd favorite for parties & restaurants"]
    },
    107: {
        overview: "Crisp, sweet JINRO Green Grape Soju (13% ABV)—light, fruity, and fragrant like fresh white grapes.",
        bullets: ["Sweet, approachable green grape flavor profile", "20 x 360ml bottles per wholesale case", "High turnover in convenience stores & K-BBQ spots"]
    },
    108: {
        overview: "Sweet, aromatic JINRO Strawberry Soju (13% ABV)—bursting with juicy berry sweetness and a smooth finish.",
        bullets: ["Top choice for sweet, fruity cocktail-style drinking", "20 x 360ml bottles per wholesale case", "Strong appeal among casual & younger adult buyers"]
    },
    109: {
        overview: "Juicy, fragrant JINRO Peach Soju (13% ABV)—delivers sweet ripe peach aroma with gentle, smooth soju warmth.",
        bullets: ["Soft, sweet ripe peach flavor loved nationwide", "20 x 360ml bottles per wholesale case", "Essential fruit soju SKU for retail & nightlife"]
    },
    110: {
        overview: "Zesty, crisp JINRO Lemon Soju (13% ABV)—bright citrus tang balanced with light sweetness for a super-refreshing drink.",
        bullets: ["Crisp, zesty lemon twist cuts through rich K-BBQ meals", "20 x 360ml bottles per wholesale case", "Trending citrus flavor variant"]
    },
    111: {
        overview: "Premium aged Korean distilled soju (25% ABV) in an elegant 375ml bottle—smooth, complex, and crafted from 100% pure rice.",
        bullets: ["Luxury craft Korean distilled soju (6 bottles/case)", "Aged in oak for deep, refined aroma and smoothness", "High-ticket item for upscale Korean dining & gifting"]
    },
    112: {
        overview: "Large 700ml sharing bottle of classic JINRO 24 Soju (24% ABV)—crisp, clean, and ideal for mixing cocktails or group tables.",
        bullets: ["Generous 700ml bottle format (12 bottles/case)", "24% ABV clean profile ideal for bars & cocktail mixing", "Strong value for high-volume restaurants & lounges"]
    },
    113: {
        overview: "Sweet-tart JINRO Plum Soju (13% ABV)—infused with fragrant Korean green plum (maesil) for a smooth, fruity finish.",
        bullets: ["Authentic Korean green plum flavor profile", "20 x 360ml bottles per wholesale case", "Completes the full JINRO fruit soju collection"]
    },

    // --- SAUCES & PANTRY (ID 114 - 148) ---
    114: {
        overview: "Chewy, cylinder-shaped Korean rice cakes (garaetteok) in a 1kg pack—soft, bouncy, and ready for spicy tteokbokki or K-BBQ skewers.",
        bullets: ["1kg pack (10 packs/case) for restaurants & food stalls", "Chewy, non-mushy texture holds up in simmering sauces", "Core menu staple for Korean street-food sellers"]
    },
    115: {
        overview: "Convenient 500g pack of Nongbu chewy Korean rice cakes (20 packs per case)—ideal for retail grocery shelves and home cooking.",
        bullets: ["Retail-friendly 500g pack size (20 packs/case)", "Cooks quickly into soft, bouncy tteokbokki", "High repeat demand from K-food home cooks"]
    },
    116: {
        overview: "Authentic Korean seasoned soybean & chili dipping paste in a 200g retail tub—essential for samgyupsal lettuce wraps.",
        bullets: ["200g retail tub (30 tubs/case) for grocery shelves", "Balanced savory, nutty, and mildly spicy flavor", "Must-have companion for home Korean BBQ"]
    },
    117: {
        overview: "Heavy-duty 14kg commercial bucket of Nongbu Ssamjang engineered for unlimited samgyupsal restaurants and Korean BBQ chains.",
        bullets: ["14kg bulk foodservice bucket maximizes restaurant margins", "Rich, authentic Korean BBQ dipping paste consistency", "Trusted bulk staple across K-BBQ operators"]
    },
    118: {
        overview: "Traditional fermented Korean red chili paste in a 200g retail tub—sweet, spicy, and deeply savory for bibimbap, tteokbokki, and marinades.",
        bullets: ["200g retail tub (30 tubs/case) for supermarkets & K-marts", "Rich umami heat essential to Korean cooking", "Consistent household pantry bestseller"]
    },
    119: {
        overview: "Commercial 14kg bulk bucket of Nongbu Gochujang—authentic fermented Korean chili paste built for high-volume restaurant kitchens.",
        bullets: ["14kg commercial foodservice bucket", "Deep fermented umami and vibrant red color", "Essential base for tteokbokki, stews & spicy marinades"]
    },
    120: {
        overview: "Finely ground Korean red chili powder (gochugaru) in a 1kg pack—vibrant red color and clean, fruity heat for kimchi and sauces.",
        bullets: ["1kg fine-grind pack (10 packs/case)", "Smooth texture ideal for gochujang, tteokbokki & dips", "Vibrant natural red color without artificial dyes"]
    },
    121: {
        overview: "Savory Korean flat fish cakes (eomuk) in a handy 200g pack (30 packs per case)—tender, flavorful, and essential for tteokbokki and odeng soup.",
        bullets: ["200g retail/small-batch pack (30 packs/case)", "Rich savory seafood umami and tender bite", "Top pairing item sold alongside tteokbokki"]
    },
    122: {
        overview: "Commercial 1kg pack of Nongbu Korean fish cakes (10 packs per case)—crafted for street-food stalls, tteokbokki bars, and restaurants.",
        bullets: ["1kg foodservice pack (10 packs/case)", "Slices easily for skewers, soup pots, and stir-fries", "High-turnover commercial kitchen staple"]
    },
    123: {
        overview: "Compact 170g retail tub of Sing Song Ssamjang (30 tubs per case)—famous Korean heritage brand for savory BBQ dipping paste.",
        bullets: ["170g convenient single-meal/small-family tub", "30 tubs/case wholesale carton", "Trusted traditional Korean condiment brand"]
    },
    124: {
        overview: "Mid-size 500g tub of Sing Song Ssamjang (20 tubs per case)—ideal for frequent home K-BBQ lovers and small eateries.",
        bullets: ["500g value tub (20 tubs/case)", "Rich fermented soybean & garlic-chili balance", "Strong supermarket and K-mart seller"]
    },
    125: {
        overview: "Commercial 14kg bulk bucket of Sing Song Ssamjang—delivers authentic Korean heritage flavor for busy K-BBQ restaurants.",
        bullets: ["14kg heavy-duty restaurant bucket", "Consistent batch-to-batch savory flavor", "Cost-effective bulk supply for high-volume dining"]
    },
    126: {
        overview: "Compact 170g retail tub of Sing Song Gochujang (30 tubs per case)—classic fermented Korean red chili paste.",
        bullets: ["170g starter/retail tub (30 tubs/case)", "Rich, glossy fermented chili paste", "Great entry size for grocery & convenience shelves"]
    },
    127: {
        overview: "500g household & kitchen tub of Sing Song Gochujang (20 tubs per case)—versatile size for regular Korean cooking.",
        bullets: ["500g value tub (20 tubs/case)", "Deep sweet-spicy umami for stews & marinades", "Reliable retail & foodservice mover"]
    },
    128: {
        overview: "Commercial 14kg bulk bucket of Sing Song Gochujang—trusted by Korean chefs for authentic, full-bodied chili paste flavor.",
        bullets: ["14kg commercial foodservice bucket", "Thick, glossy consistency ideal for sauces & glazes", "High-value bulk staple for restaurants & commissaries"]
    },
    129: {
        overview: "Commercial 14kg bulk bucket of JINPUM Ssamjang—savory, well-balanced Korean BBQ dipping paste built for high-volume foodservice.",
        bullets: ["14kg bulk bucket for samgyupsal & grill restaurants", "Rich soybean and seasoning blend", "Competitive commercial foodservice pricing"]
    },
    130: {
        overview: "Commercial 14kg bulk bucket of JINPUM Gochujang—vibrant, savory-spicy Korean chili paste for large-scale kitchen prep.",
        bullets: ["14kg bulk foodservice bucket", "Smooth, consistent paste for tteokbokki & sauces", "Dependable supply for restaurants & caterers"]
    },
    131: {
        overview: "Commercial 14kg bulk bucket of JINPUM Doenjang (fermented Korean soybean paste)—deep, earthy umami essential for doenjang-jjigae and marinades.",
        bullets: ["14kg bulk bucket of authentic fermented soybean paste", "Rich, savory backbone for Korean soups & meat rubs", "Available for advance reservation / pre-order"]
    },
    132: {
        overview: "Finely milled 1kg pack of JINPUM Korean chili powder (10 packs per case)—smooth texture for vibrant red sauces, tteokbokki, and pastes.",
        bullets: ["1kg fine-grind gochugaru (10 packs/case)", "Dissolves smoothly into broths and marinades", "Bright red color and balanced Korean chili heat"]
    },
    133: {
        overview: "Coarse-flaked 1kg pack of JINPUM Korean chili powder (10 packs per case)—essential texture and vibrant color for authentic kimchi making.",
        bullets: ["1kg coarse-flake gochugaru (10 packs/case)", "Ideal flake size for traditional kimchi & spicy stir-fries", "Clean, aromatic Korean chili profile"]
    },
    134: {
        overview: "Commercial 1kg pack of JINPUM Korean fish cakes (10 packs per case)—bouncy, savory sheets ready for odeng broth and tteokbokki.",
        bullets: ["1kg foodservice pack (10 packs/case)", "Holds firm, tender texture in hot soups & sauces", "High-demand ingredient for K-street food & restaurants"]
    },
    135: {
        overview: "Commercial 14kg bulk bucket of Chakhan Ssamjang—generous foodservice supply of savory Korean BBQ dipping paste.",
        bullets: ["14kg bulk bucket for K-BBQ & buffet kitchens", "Well-balanced savory and mildly spicy notes", "Economical bulk option for high daily turnover"]
    },
    136: {
        overview: "Commercial 14kg bulk bucket of Chakhan Gochujang—rich, spicy-sweet fermented chili paste for commercial kitchens.",
        bullets: ["14kg commercial foodservice bucket", "Vibrant red hue and consistent viscosity", "Built for high-volume Korean culinary operations"]
    },
    137: {
        overview: "Shelf-stable 300g pack of sliced Korean rice cakes (tteokguk-tteok) in a 30-pack case—no refrigeration needed before opening.",
        bullets: ["Ambient shelf-stable 300g pack (30 packs/case)", "Zero cold-chain storage hassle for retailers", "Available for advance reservation / pre-order"]
    },
    138: {
        overview: "Kid-friendly instant tteokbokki cup featuring chewy rice cakes in a rich, mild, creamy sauce with fun Baby Shark packaging.",
        bullets: ["24 cups/case instant microwave/hot-water cup", "Non-spicy creamy flavor loved by kids & families", "Available for advance reservation / pre-order"]
    },
    139: {
        overview: "Instant tteokbokki cup with chewy rice cakes coated in a gentle, sweet-and-mildly-spicy Korean sauce.",
        bullets: ["24 cups/case convenient snack cup format", "Balanced sweet-mild heat suitable for young snackers", "Available for advance reservation / pre-order"]
    },
    140: {
        overview: "Crisp, golden whole-kernel sweet corn in 410g cans (24 cans per case)—essential topping for Korean corn cheese, salads, and side dishes.",
        bullets: ["410g commercial/retail cans (24 cans/case)", "Sweet, tender kernels ideal for K-BBQ corn cheese", "Long shelf life pantry staple"]
    },
    141: {
        overview: "Assorted diced fruits in light syrup in large 850g cans (12 cans per case)—versatile for desserts, fruit salads, and cafe drinks.",
        bullets: ["Generous 850g foodservice & family can (12 cans/case)", "Bright fruit medley for cafes, bakeshops & retail", "High-value bulk pantry item"]
    },
    142: {
        overview: "Ready-to-use pitted black olive slices in 405g cans (24 cans per case)—convenient topping for pizzas, pastas, salads, and Korean Western dishes.",
        bullets: ["Pre-sliced 405g cans (24 cans/case) save prep time", "Firm texture and rich savory olive flavor", "Ideal for cafes, pizzerias & supermarkets"]
    },
    143: {
        overview: "Commercial 1.8L bottle of clean, sharp culinary vinegar (6 bottles per case)—essential for pickled radish (danmuji), cold noodles, and dressings.",
        bullets: ["1.8L foodservice bottle (6 bottles/case)", "Crisp acidity tailored for Korean pickling & sauces", "Cost-effective kitchen bulk format"]
    },
    144: {
        overview: "Pure 100% roasted Korean sesame oil in a commercial 1.8L container (6 containers per case)—deep, nutty aroma that finishes every Korean dish.",
        bullets: ["100% pure roasted sesame oil in 1.8L kitchen jug", "Rich, fragrant aroma for bibimbap, japchae & dips", "6 containers/case high-value foodservice staple"]
    },
    145: {
        overview: "Sun-dried Taeyangcho Korean red chili flakes in a 1kg pack (10 packs per case)—prized for bright red color, natural sweetness, and clean heat.",
        bullets: ["Premium sun-dried Taeyangcho chili quality", "1kg coarse-flake pack (10 packs/case) for kimchi", "Superior vibrant red color and rich chili aroma"]
    },
    146: {
        overview: "1kg pack of finely ground Korean red chili powder (10 packs per case)—smooth, vibrant, and versatile for sauces, stews, and marinades.",
        bullets: ["1kg fine-grind pack (10 packs/case)", "Blends effortlessly into tteokbokki & dipping sauces", "Essential commercial spice staple"]
    },
    147: {
        overview: "1kg pack of coarsely flaked Korean red chili powder (10 packs per case)—delivers classic texture and vibrant red hue for kimchi and banchan.",
        bullets: ["1kg coarse-flake pack (10 packs/case)", "Authentic texture for kimchi, cucumber salad & stews", "Reliable bulk spice supply for restaurants"]
    },
    148: {
        overview: "Commercial 10kg tub of authentic fermented Jin Kimchi—crisp napa cabbage seasoned with rich Korean chili, garlic, and savory umami.",
        bullets: ["10kg commercial foodservice tub for K-BBQ & restaurants", "Crisp, tangy, well-fermented flavor ready to serve", "High-demand staple for side dishes, stews & fried rice"]
    },

    // --- NON-FOOD & EQUIPMENT (ID 149 - 152) ---
    149: {
        overview: "High-purity Korean portable butane gas canisters (28 cans per case) engineered for safe, steady flame output in K-BBQ tabletop stoves.",
        bullets: ["28 cans/case standard wholesale carton", "Clean-burning fuel for tabletop grills & hotpots", "Essential consumable for K-BBQ restaurants & caterers"]
    },
    150: {
        overview: "220g Korean portable butane fuel canisters (28 cans per case)—reliable, consistent pressure for commercial dining tables and outdoor stoves.",
        bullets: ["220g standard canister (28 cans/case)", "Steady blue flame for uninterrupted table cooking", "High repeat reorder item for Korean restaurants"]
    },
    151: {
        overview: "Explosion-proof safety-engineered Korean butane gas canisters (28 cans per case) featuring rim-vent release (RVR) protection for maximum table safety.",
        bullets: ["RVR anti-explosion safety design for busy dining rooms", "28 cans/case commercial wholesale carton", "Top choice for safety-conscious K-BBQ & hotpot chains"]
    },
    152: {
        overview: "Commercial automated induction ramyun cooker (Han River style) engineered for convenience stores, K-marts, cafes, and self-serve noodle bars.",
        bullets: ["One-touch automated cooking timer & water dispenser", "Turns instant ramyun into a high-margin dine-in experience", "Commercial unit (available for advance reservation)"]
    }
};

function getProductHighlights(p) {
    return customProductDescriptions[p.id] || {
        overview: `${p.name} is an authentic imported South Korean wholesale product supplied directly by Product Hub Wholesale Distributor.`,
        bullets: [
            "100% authentic Korean import direct from trusted manufacturers",
            "Packed for efficient B2B wholesale distribution and retail display",
            "Available for nationwide Luzon, Visayas, and Mindanao dispatch"
        ]
    };
}

function openDescModal(id) {
    const p = productsData.find(item => item.id == id);
    if (!p) return;

    const info = getProductHighlights(p);
    document.getElementById('descModalCat').textContent = p.cat;
    document.getElementById('descModalTitle').textContent = p.name;
    document.getElementById('descModalImg').src = p.img || p.image || 'images/logo.jpg';
    document.getElementById('descModalOverview').textContent = info.overview;
    document.getElementById('descModalSpec').textContent = `Standard Wholesale Packaging: ${p.spec}. ${p.isReservation ? 'Available for advance reservation / pre-order.' : 'Ready for wholesale case dispatch.'}`;
    document.getElementById('descModalQty').value = 1;

    const bulletsEl = document.getElementById('descModalBullets');
    bulletsEl.innerHTML = info.bullets.map(b => `<li>${b}</li>`).join('');

    const addBtn = document.getElementById('descModalAddBtn');
    addBtn.textContent = p.isReservation ? '📌 Reserve Case in Wholesale Cart' : '+ Add Case to Wholesale Cart';
    addBtn.onclick = function () {
        const qty = Math.max(1, parseInt(document.getElementById('descModalQty').value, 10) || 1);
        cart[p.id] = (cart[p.id] || 0) + qty;
        saveCart();
        updateCartUI();
        closeDescModal();
        toggleCartDrawer(true);
    };

    document.getElementById('productDescModal').classList.remove('hidden');
}

function closeDescModal() {
    const modal = document.getElementById('productDescModal');
    if (modal) modal.classList.add('hidden');
}
