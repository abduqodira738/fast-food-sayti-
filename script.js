
const image = id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=85`;

const foods = [
  // BURGERLAR
  {id:1,name:"Classic Burger",category:"burger",price:30000,desc:"Mol go'shti, salat va maxsus sous",img:"photo-1568901346375-23c9450c58cd"},
  {id:2,name:"Cheese Burger",category:"burger",price:35000,desc:"Pishloqli mazali burger",img:"photo-1571091718767-18b5b1457add"},
  {id:3,name:"Double Burger",category:"burger",price:48000,desc:"Ikki qavat go'sht va pishloq",img:"photo-1553979459-d2229ba7433a"},
  {id:4,name:"Chicken Burger",category:"burger",price:32000,desc:"Qarsildoq tovuqli burger",img:"photo-1606755962773-d324e0a13086"},
  {id:5,name:"BBQ Burger",category:"burger",price:45000,desc:"Barbekyu sousli burger",img:"photo-1550547660-d9450f859349"},

  // PIZZA
  {id:6,name:"Margarita Pizza",category:"pizza",price:55000,desc:"Pishloq va pomidorli pizza",img:"photo-1513104890138-7c749659a591"},
  {id:7,name:"Pepperoni Pizza",category:"pizza",price:70000,desc:"Pepperoni kolbasali pizza",img:"photo-1628840042765-356cda07504e"},
  {id:8,name:"Chicken Pizza",category:"pizza",price:65000,desc:"Tovuqli va pishloqli pizza",img:"photo-1571407970349-bc81e7e96d47"},
  {id:9,name:"Four Cheese",category:"pizza",price:75000,desc:"To'rt xil pishloqli pizza",img:"photo-1579751626657-72bc17010498"},
  {id:10,name:"Meat Pizza",category:"pizza",price:80000,desc:"Go'shtli maxsus pizza",img:"photo-1574071318508-1cdbab80d002"},

  // CHICKEN
  {id:11,name:"Fried Chicken",category:"chicken",price:42000,desc:"Qarsildoq qovurilgan tovuq",img:"photo-1626082927389-6cd097cdc6ec"},
  {id:12,name:"Chicken Wings",category:"chicken",price:38000,desc:"Mazali tovuq qanotlari",img:"photo-1527477396000-e27163b481c2"},
  {id:13,name:"Nuggets",category:"chicken",price:30000,desc:"Tovuqli nuggets",img:"photo-1562967914-608f82629710"},
  {id:14,name:"Chicken Strips",category:"chicken",price:40000,desc:"Qarsildoq tovuq bo'laklari",img:"photo-1606755962773-d324e0a13086"},
  {id:15,name:"Chicken Set",category:"chicken",price:65000,desc:"Tovuq, fri va sous",img:"photo-1626645738196-c2a7c87a8f58"},

  // HOT DOG
  {id:16,name:"Classic Hot Dog",category:"hotdog",price:20000,desc:"Sosiska va ketchup",img:"photo-1612392062631-94dd858cba88"},
  {id:17,name:"Cheese Hot Dog",category:"hotdog",price:26000,desc:"Pishloqli hot-dog",img:"photo-1619740455993-9e612b1af08a"},
  {id:18,name:"Double Hot Dog",category:"hotdog",price:32000,desc:"Ikki sosiska bilan",img:"photo-1612392062631-94dd858cba88"},
  {id:19,name:"Spicy Hot Dog",category:"hotdog",price:27000,desc:"Achchiq sousli hot-dog",img:"photo-1619740455993-9e612b1af08a"},
  {id:20,name:"Special Hot Dog",category:"hotdog",price:35000,desc:"Maxsus sous va sabzavotlar",img:"photo-1612392062631-94dd858cba88"},

  // SNACKS
  {id:21,name:"French Fries",category:"snack",price:18000,desc:"Qarsildoq kartoshka fri",img:"photo-1573080496219-bb080dd4f877"},
  {id:22,name:"Cheese Fries",category:"snack",price:25000,desc:"Pishloqli kartoshka",img:"photo-1518013431117-eb1465fa5752"},
  {id:23,name:"Onion Rings",category:"snack",price:22000,desc:"Qovurilgan piyoz halqalari",img:"photo-1639024471283-03518883512d"},
  {id:24,name:"Potato Wedges",category:"snack",price:20000,desc:"Ziravorli kartoshka",img:"photo-1518977676601-b53f82aba655"},
  {id:25,name:"Nachos",category:"snack",price:28000,desc:"Pishloqli nachos",img:"photo-1513456852971-30c0b8199d4d"},

  // LAVASH
  {id:26,name:"Classic Lavash",category:"wrap",price:30000,desc:"Go'sht va sabzavotli lavash",img:"photo-1529006557810-274b9b2fc783"},
  {id:27,name:"Chicken Lavash",category:"wrap",price:28000,desc:"Tovuqli lavash",img:"photo-1561651823-34feb02250e4"},
  {id:28,name:"Cheese Lavash",category:"wrap",price:35000,desc:"Pishloqli lavash",img:"photo-1626700051175-6818013e1d4f"},
  {id:29,name:"Doner Kebab",category:"wrap",price:38000,desc:"Go'shtli doner",img:"photo-1529006557810-274b9b2fc783"},
  {id:30,name:"Special Shawarma",category:"wrap",price:40000,desc:"Maxsus shaurma",img:"photo-1561651823-34feb02250e4"},

  // DRINKS
  {id:31,name:"Coca-Cola",category:"drink",price:12000,desc:"Sovuq Coca-Cola",img:"photo-1554866585-cd94860890b7"},
  {id:32,name:"Orange Juice",category:"drink",price:18000,desc:"Apelsin sharbati",img:"photo-1600271886742-f049cd451bba"},
  {id:33,name:"Milkshake",category:"drink",price:22000,desc:"Shirin milkshake",img:"photo-1572490122747-3968b75cc699"},
  {id:34,name:"Limonad",category:"drink",price:15000,desc:"Muzdek limonad",img:"photo-1513558161293-cdaf765edfd4"},
  {id:35,name:"Ice Tea",category:"drink",price:14000,desc:"Muzli choy",img:"photo-1556679343-c7306c1976bc"},

  // DESSERTS
  {id:36,name:"Chocolate Cake",category:"dessert",price:25000,desc:"Shokoladli tort",img:"photo-1578985545062-69928b1d9587"},
  {id:37,name:"Cheesecake",category:"dessert",price:28000,desc:"Pishloqli desert",img:"photo-1533134242443-d4fd215305ad"},
  {id:38,name:"Donut",category:"dessert",price:15000,desc:"Shirin ponchik",img:"photo-1551024506-0bccd828d307"},
  {id:39,name:"Ice Cream",category:"dessert",price:18000,desc:"Mazali muzqaymoq",img:"photo-1563805042-7684c019e1cb"},
  {id:40,name:"Brownie",category:"dessert",price:22000,desc:"Shokoladli brownie",img:"photo-1606313564200-e75d5e30476c"}
];

let cart = [];
let currentCategory = "all";

const $ = id => document.getElementById(id);

function money(number) {
  return number.toLocaleString("uz-UZ") + " so'm";
}

// MAHSULOTLARNI CHIQARISH
function renderFoods() {
  const search = $("searchInput").value.toLowerCase();

  const filtered = foods.filter(food => {
    const categoryMatch =
      currentCategory === "all" ||
      food.category === currentCategory;

    const searchMatch =
      food.name.toLowerCase().includes(search) ||
      food.desc.toLowerCase().includes(search);

    return categoryMatch && searchMatch;
  });

  $("foodList").innerHTML = filtered.length
    ? filtered.map(food => `
      <article class="food-card">
        <img src="${image(food.img)}"
          alt="${food.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/700x450/222/fff?text=FAST+FOOD'">

        <div class="food-info">
          <h3>${food.name}</h3>
          <p>${food.desc}</p>
          <span class="price">${money(food.price)}</span>
          <button class="add-btn" data-add="${food.id}">
            🛒 Savatchaga qo'shish
          </button>
        </div>
      </article>
    `).join("")
    : "<p>Bu mahsulot topilmadi.</p>";
}

// KATEGORIYA
$("filters").addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  currentCategory = button.dataset.category;

  document.querySelectorAll("#filters button")
    .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");
  renderFoods();
});

// QIDIRUV
$("searchInput").addEventListener("input", renderFoods);

// SAVATCHAGA QO'SHISH
$("foodList").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  const id = Number(button.dataset.add);
  const item = cart.find(x => x.id === id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({id, quantity:1});
  }

  updateCart();

  button.textContent = "✓ Qo'shildi!";
  setTimeout(() => {
    button.textContent = "🛒 Savatchaga qo'shish";
  }, 900);
});

// SAVATCHANI YANGILASH
function updateCart() {
  const count = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  $("cartCount").textContent = count;

  $("cartItems").innerHTML = cart.length
    ? cart.map(item => {
        const food = foods.find(f => f.id === item.id);

        return `
          <div class="cart-item">
            <div>
              <b>${food.name}</b>
              <p>${money(food.price * item.quantity)}</p>
            </div>
            <div>
              <button data-change="${item.id}" data-amount="-1">−</button>
              ${item.quantity}
              <button data-change="${item.id}" data-amount="1">+</button>
            </div>
          </div>
        `;
      }).join("")
    : "<p>Savatchangiz bo'sh.</p>";

  const total = cart.reduce((sum,item) => {
    const food = foods.find(f => f.id === item.id);
    return sum + food.price * item.quantity;
  }, 0);

  $("cartTotal").textContent = "Jami: " + money(total);
}

// MAHSULOT MIQDORINI O'ZGARTIRISH
$("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-change]");
  if (!button) return;

  const id = Number(button.dataset.change);
  const amount = Number(button.dataset.amount);

  const item = cart.find(x => x.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(x => x.id !== id);
  }

  updateCart();
});

// MODALLAR
function openModal(id) {
  $(id).style.display = "flex";
}

function closeModal(id) {
  $(id).style.display = "none";
}

$("openCart").addEventListener("click", () => {
  updateCart();
  openModal("cartModal");
});

$("closeCart").addEventListener("click", () => {
  closeModal("cartModal");
});

$("closeOrder").addEventListener("click", () => {
  closeModal("orderModal");
});

$("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Avval savatchaga ovqat qo'shing!");
    return;
  }

  closeModal("cartModal");
  openModal("orderModal");
});

// MODAL TASHQARISINI BOSISH
document.querySelectorAll(".overlay").forEach(overlay => {
  overlay.addEventListener("click", event => {
    if (event.target === overlay) {
      overlay.style.display = "none";
    }
  });
});

// BUYURTMA
$("orderForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!cart.length) {
    alert("Savatchangiz bo'sh!");
    closeModal("orderModal");
    return;
  }

  const customer = $("customer").value.trim();
  const phone = $("phone").value.trim();
  const address = $("address").value.trim();
  const forWhom = $("forWhom").value.trim();
  const comment = $("comment").value.trim();

  const total = cart.reduce((sum,item) => {
    return sum +
      foods.find(f => f.id === item.id).price * item.quantity;
  }, 0);

  const order = {
    customer,
    phone,
    address,
    forWhom,
    comment,
    products: cart.map(item => ({
      name: foods.find(f => f.id === item.id).name,
      quantity: item.quantity
    })),
    total
  };

  // DEMO: BUYURTMA BRAUZERDA SAQLANADI
  const oldOrders = JSON.parse(
    localStorage.getItem("fastFoodOrders") || "[]"
  );

  oldOrders.push({
    ...order,
    date: new Date().toLocaleString("uz-UZ")
  });

  localStorage.setItem(
    "fastFoodOrders",
    JSON.stringify(oldOrders)
  );

  $("orderMessage").textContent =
    "✅ Rahmat, " + customer +
    "! Buyurtmangiz demo rejimida saqlandi. Jami: " +
    money(total) +
    ". Haqiqiy do'konga hali yuborilmadi.";

  cart = [];
  updateCart();
  event.target.reset();
});

// SAYTNI ISHGA TUSHIRISH
renderFoods();
updateCart();
