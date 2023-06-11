import { req, createCardProduct, getData } from "./method.js"

req("https://fakestoreapi.com/products", showProductCard)

function showProductCard(arr = []) {
    const newElementsArr = arr.map(({ title, description, image, price, category, id }) => {
        return createCardProduct(title, price, category, image, description, addToBasket, { title, description, image, price, category, id })
    })
    document.querySelector(".products")
        .append(...newElementsArr)
}

function addToBasket(info) {
    if (localStorage.product) {
        const product = JSON.parse(localStorage.product);
        if (!Array.isArray(product)) {
            alert("перезавантажье сторінку")
        }
        if (info) {
            info.date = getData();
            product.push(info);
        }
        localStorage.product = JSON.stringify(product);
    } else if (info) {
        info.date = getData();
        localStorage.product = JSON.stringify([info])
    } else {
        return
    }

    const productArr = JSON.parse(localStorage.product);
    const newArr = productArr.map((el) => {
        return createProductBasket(el.title, el.price, el.date)
    })
    document.querySelector(".basket").innerHTML = ""
    document.querySelector(".basket").append(...newArr)
}

function createProductBasket(name, price, currentDate) {
    const li = document.createElement("li");
    li.innerText = `Назва позиції : ${name}. Ціна : ${price} (${currentDate})`
    return li
}

addToBasket()



