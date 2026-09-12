const productGrid = document.getElementById("product-grid");
const categoryButtons = document.querySelectorAll(".category");
const productModal = document.getElementById("product-modal");
const modalClose = document.getElementById("modal-close");

const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalCode = document.getElementById("modal-code");
const modalPrice = document.getElementById("modal-price");
const modalStatus = document.getElementById("modal-status");
function displayProducts(category = "all") {

    productGrid.innerHTML = "";

    const filteredProducts = category === "all"
        ? products
        : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");
        card.addEventListener("click", () => {

    modalImage.src = product.image;
    modalImage.alt = product.name;

    modalName.textContent = product.name;
    modalCode.textContent = product.code;
    modalPrice.textContent = `Rs. ${product.price.toLocaleString()}`;
    modalStatus.textContent = product.status;

    productModal.classList.add("active");
});

        card.innerHTML = `
    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
    </div>

    <h3>${product.name}</h3>

    <p>${product.code}</p>

    <span>Rs. ${product.price.toLocaleString()}</span>

    <small class="product-status">${product.status}</small>
`;

        productGrid.appendChild(card);
    });
}

displayProducts();

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        displayProducts(category);

    });

});

modalClose.addEventListener("click", () => {
    productModal.classList.remove("active");
});