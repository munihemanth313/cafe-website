// Replace with your own number (country code 91, no + or spaces)
const phone = "919999999999";

const items = [
  { name: "Cappuccino", price: 150, cat: "coffee", img: "images/cappuccino.jpg" },
  { name: "Cold Coffee", price: 170, cat: "coffee", img: "images/cold-coffee.jpg" },
  { name: "Espresso", price: 120, cat: "coffee", img: "images/espresso.jpg" },
  { name: "Veg Sandwich", price: 130, cat: "snacks", img: "images/sandwich.jpg" },
  { name: "French Fries", price: 110, cat: "snacks", img: "images/fries.jpg" },
  { name: "Chocolate Brownie", price: 140, cat: "desserts", img: "images/brownie.jpg" },
  { name: "Cheesecake", price: 190, cat: "desserts", img: "images/cheesecake.jpg" },
];

const grid = document.getElementById("menuGrid");

function render(cat) {
  const list = cat === "all" ? items : items.filter(i => i.cat === cat);
  grid.innerHTML = list.map(i => `
    <div class="card" data-name="${i.name}" data-price="${i.price}">
      <img src="${i.img}" alt="${i.name}">
      <div class="card-body">
        <h3>${i.name}</h3>
        <p class="price">₹${i.price}</p>
        <p class="order">Tap to order on WhatsApp</p>
      </div>
    </div>`).join("");
}

// Clicking an item opens WhatsApp with that item
grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const msg = `Hi, I'd like to order 1 ${card.dataset.name} (₹${card.dataset.price}) from The Royal Café.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
});

// Category filter buttons
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    render(btn.dataset.cat);
  });
});

// Contact section button
document.getElementById("whatsapp").href =
  `https://wa.me/${phone}?text=${encodeURIComponent("Hi, I'd like to place an order at The Royal Café")}`;

render("all");