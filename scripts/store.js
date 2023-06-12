const productSection = document.querySelector(".shop__area");
const STORE_API = "https://api.storerestapi.com/products";

axios.get(STORE_API).then((response) => {
  console.log(response.data.data);
  const productsList = response.data.data;

  const addElement = (type, text, targetEl, className) => {
    const element = document.createElement(type);
    element.innerText = text;
    if (className != undefined) {
      element.classList.add(className);
    }
    targetEl.appendChild(element);
    return element;
  };

  //const element = addElement("div", "text.text", productSection, "classnameEx");
  // const product = addElement("", null, productEl, "")

  function displayProduct(product) {
    const productCardEl = addElement(
      "article",
      null,
      productSection,
      "product"
    );

    const productImgEl = addElement("img", null, productCardEl, "product__img");
    productImgEl.src = product.image
      ? product.image !== ""
      : "./assets/logos/mdm-logo.jpg";

    const productTextAreaEl = addElement(
      "div",
      null,
      productCardEl,
      "product__text-area"
    );
    const productTitle = addElement(
      "h3",
      product.title,
      productTextAreaEl,
      "product__title"
    );
    const productDesc = addElement(
      "p",
      product.description,
      productTextAreaEl,
      "product__desc"
    );
    const productRowEl = addElement(
      "div",
      null,
      productTextAreaEl,
      "product__row"
    );
    const productQuantityLabel = addElement(
      "label",
      "Amount:",
      productRowEl,
      "product__quantity"
    );
    const productQuantity = addElement(
      "input",
      null,
      productRowEl,
      "product__quantity"
    );
    productQuantity.type = "number";
    productQuantity.min = "1";
    productQuantity.value = "0";

    const productRowEl2 = addElement(
      "div",
      null,
      productTextAreaEl,
      "product__row"
    );
    const productPrice = addElement(
      "p",
      `£${product.price}`,
      productRowEl2,
      "product__price"
    );
    const productButton = addElement(
      "button",
      "Add to Cart",
      productRowEl2,
      "product__button"
    );
  }
  const renderProducts = () => {
    // document.querySelector(".shop__area").innerHTML = "";
    productsList.forEach((product) => {
      displayProduct(product);
    });
    return;
  };
  renderProducts();
});
