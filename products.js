const productsData = {
  "Oily": {
    "Cleanser": [
      { name: "Neutrogena Oil-Free Cleanser", img: "https://via.placeholder.com/200x200?text=Neutrogena+Cleanser" },
      { name: "Cetaphil Oily Skin Cleanser", img: "https://via.placeholder.com/200x200?text=Cetaphil+Cleanser" },
      { name: "La Roche-Posay Effaclar", img: "https://via.placeholder.com/200x200?text=Effaclar+Cleanser" }
    ],
    "Moisturizer": [
      { name: "Clinique Oil-Free Gel", img: "https://via.placeholder.com/200x200?text=Clinique+Moisturizer" },
      { name: "Neutrogena Hydro Boost Gel", img: "https://via.placeholder.com/200x200?text=Hydro+Boost" }
    ],
    "Serum": [
      { name: "Niacinamide 10% Serum", img: "https://via.placeholder.com/200x200?text=Niacinamide+Serum" },
      { name: "Salicylic Acid Serum", img: "https://via.placeholder.com/200x200?text=Salicylic+Serum" }
    ],
    "Toner": [
      { name: "AHA BHA Toner", img: "https://via.placeholder.com/200x200?text=AHA+BHA+Toner" }
    ],
    "Sunscreen": [
      { name: "Lotus Matte Gel SPF 50", img: "https://via.placeholder.com/200x200?text=Lotus+Sunscreen" }
    ]
  },
  "Dry": {
    "Cleanser": [
      { name: "CeraVe Hydrating Cleanser", img: "https://via.placeholder.com/200x200?text=CeraVe+Cleanser" },
      { name: "Aveeno Gentle Hydrating", img: "https://via.placeholder.com/200x200?text=Aveeno+Cleanser" }
    ],
    "Moisturizer": [
      { name: "Cetaphil Moisturizing Cream", img: "https://via.placeholder.com/200x200?text=Cetaphil+Moisturizer" },
      { name: "Eucerin Advanced Repair", img: "https://via.placeholder.com/200x200?text=Eucerin+Moisturizer" }
    ],
    "Serum": [
      { name: "Hyaluronic Acid Serum", img: "https://via.placeholder.com/200x200?text=Hyaluronic+Serum" }
    ],
    "Toner": [
      { name: "Hydrating Rose Toner", img: "https://via.placeholder.com/200x200?text=Rose+Toner" }
    ],
    "Sunscreen": [
      { name: "Moisturizing SPF 50", img: "https://via.placeholder.com/200x200?text=Moisturizing+Sunscreen" }
    ]
  }
  // Aap aur skin types bhi isi pattern me add kar sakte ho
};

const skinType = localStorage.getItem("detectedSkinType");
document.getElementById("selectedSkinType").textContent = `For Skin Type: ${skinType}`;

const container = document.getElementById("productsContainer");
if (skinType && productsData[skinType]) {
  Object.keys(productsData[skinType]).forEach(category => {
    const items = productsData[skinType][category];
    const categoryBlock = document.createElement("div");
    categoryBlock.innerHTML = `<h2>${category}</h2>`;
    
    items.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
      `;
      categoryBlock.appendChild(card);
    });
    
    container.appendChild(categoryBlock);
  });
} else {
  container.innerHTML = "<p>No product data available for this skin type.</p>";
}
