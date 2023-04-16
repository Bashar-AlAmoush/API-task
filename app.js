class Product {
    constructor(title, price, description, image) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.image = image;
    }
  }
  let products = [];

  fetch('https://fakestoreapi.com/products?limit=20')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const product = new Product(
        item.title,
        item.price,
        item.description,
        item.image
      );
      products.push(product);
    });
    renderProducts();
  })
  .catch((error) => console.log(error));

  function renderProducts() {
    const main = document.getElementById("mainn");
   
    products.map((product) => {
      const card = document.createElement("div");
      card.style.margin="2rem"
      card.classList.add("card");
      card.classList.add("pro");
      const image = document.createElement("img");
      image.setAttribute("src", product.image);
      image.setAttribute("alt", product.title);
      image.style.width="20rem"
      image.style.height="25rem"
      const title = document.createElement("h2");
      title.textContent = product.title;
      const price = document.createElement("p");
      price.textContent = `$${product.price}`;
      const description = document.createElement("p");
      description.textContent = product.description;
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(description);
      main.appendChild(card);
    });
  }