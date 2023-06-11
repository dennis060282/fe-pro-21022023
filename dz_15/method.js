//function req (url = "", method = {method: "GET"}) 

function req(url = "", callback) {
    const data = fetch(url);
    data
      .then((i) => { return i.json() })
      .then(i => callback(i))
  }
  
  function createCardProduct(productName, productPrice, productCategory, productImg, productDescription, eventFN, fullProductInfo) {
    const cardContainer = document.createElement("div"),
      btn = document.createElement("button"),
      name = document.createElement("div"),
      image = document.createElement("img"),
      description = document.createElement("p"),
      price = document.createElement("div"),
      category = document.createElement("span");
  
    cardContainer.classList.add("card");
    name.classList.add("card__name");
    description.classList.add("card__description");
    price.classList.add("card__price");
    category.classList.add("card__category");
    btn.classList.add("card__btn")
  
    btn.innerText = "Додати до кошика";
    name.innerText = productName;
    price.innerText = productPrice + "грн.";
    description.innerText = productDescription;
    image.src = productImg;
    category.innerText = productCategory;
  
    btn.addEventListener("click", () => { eventFN(fullProductInfo) })
  
    cardContainer.append(image, name, category, description, price, btn)
  
    return cardContainer
  }
    
  
  function getData() {
  
    // ГГ:ХХ:СС ДД.ММ.РРРР
    const date = new Date();
    const nowDate =
      `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()} ${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`
    return nowDate
  }
  
  export { req, createCardProduct, getData }
  
  