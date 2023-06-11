// Створіть сайт з коментарями. Коментарі тут : https://jsonplaceholder.typicode.com/
// Сайт має виглядати так : https://kondrashov.online/images/screens/120.png
// На сторінку виводити по 10 коментарів, у низу сторінки зробити поле пагінації (перемикання сторінок) при перемиканні
// сторінок показувати нові коментарі. 
// з коментарів виводити : 
// "id": 1,
// "name"
// "email"
// "body":

function req(method = "GET", url = "", callback) {
   
    const data = new XMLHttpRequest();
    data.open(method, url);
    data.send();
    data.addEventListener("readystatechange", () => {
        if (data.readyState === 4 && data.status >= 200 && data.status < 300) {
            setTimeout(() => {
                callback(JSON.parse(data.responseText)) 
            }, 0)
        } else if (data.readyState === 4) {
            console.error("Помилка з запитом")
        }
    })

}
const show = (data = []) => {
    const section = document.querySelector("section");

    var state = {
        'querySet': data,
        'page': 1,
        'rows': 10,
        'window': 5,
    }

    buildComments()

    function pagination(querySet, page, rows) {

        var trimStart = (page - 1) * rows
        var trimEnd = trimStart + rows
        var trimmedData = querySet.slice(trimStart, trimEnd)
        var pages = Math.round(querySet.length / rows);

        return {
            'querySet': trimmedData,
            'pages': pages,
        }
    }
    function pageButtons(pages) {
        var wrapper = document.getElementById('pagination')

        wrapper.innerHTML = ``
        console.log('Pages:', pages)

        var maxLeft = (state.page - Math.floor(state.window / 2))
        var maxRight = (state.page + Math.floor(state.window / 2))

        if (maxLeft < 1) {
            maxLeft = 1
            maxRight = state.window
        }

        if (maxRight > pages) {
            maxLeft = pages - (state.window - 1)
            if (maxLeft < 1) {
                maxLeft = 1
            }
            maxRight = pages
        }

        for (var page = maxLeft; page <= maxRight; page++) {
            wrapper.innerHTML += `<button value=${page} class="page">${page}</button>`
        }

        if (state.page != 1) {
            wrapper.innerHTML = `<button value=${1} class="page">&#171; First</button>` + wrapper.innerHTML
        }

        if (state.page != pages) {
            wrapper.innerHTML += `<button value=${pages} class="page">Last &#187;</button>`
        }

        var buttons = document.querySelector('#pagination')
        
        buttons.addEventListener('click', (ev) => {
           var placeForComments = document.querySelector('section')
           placeForComments.innerHTML = ''
            state.page = Number(ev.target.value)
            buildComments()
        })
    }


    function buildComments() {
        var allComents = document.querySelector('section')

        var dataNew = pagination(state.querySet, state.page, state.rows)
        var myList = dataNew.querySet

        for (var i = 1 in myList) {
            //Keep in mind we are using "Template Litterals to create rows"
            const string = `
    <div class="comment" id="${myList[i].id}">
    <div class="comment-header">
    <div class="number-and-name"><div class="number">#${myList[i].id}  </div>
    <div class="name"> Name: ${myList[i].name}</div></div>
    <div class="email">E-mail: ${myList[i].email}</div></div>
    <div class="text">${myList[i].body}</div>
    </div>
    `
            allComents.insertAdjacentHTML("beforeend", string)
        }
        pageButtons(dataNew.pages)
    }
}
req("GET", "https://jsonplaceholder.typicode.com/comments", show)
