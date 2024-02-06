const logOut = document.getElementById("logout")

logOut.addEventListener("click", (e) => {
  var alertChiqdi = false;

  if (!alertChiqdi && confirm("Chiqishga ishonchingiz komilmi?")) {
    alert("Amal muvaffaqiyatli bajarildi!");
    alertChiqdi = true;
  }
  window.location.href = "index.html"
})
const alertIshtirokEtish = true;

// if (alertIshtirokEtish) {
//   alert("Ro'yhatdan muvaffaqiyatli o'tdingiz! Davom etish uchun 'OK' ni bosing");
//   alertIshtirokEtish = null; 
// }

const sunBtn = document.querySelector(".navbar__right")
const body = document.body

sunBtn.addEventListener("click", () => {
  body.classList.toggle("dark")
})





const booksList = document.querySelector(".books")
const BASE_URL = "https://openlibrary.org/people/mekBot/books"

const BASE_IMG = "https://covers.openlibrary.org/b/olid/"


const fetchData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/currently-reading.json`)

    if (!res.ok) throw new Error(`Could not fetch data from ${BASE_URL}`)

    return res.json()
  } catch (error) {
    console.error(error.message)
  }
}
fetchData()

const createCard = () => {
  fetchData().then((books) => {
    const bookList = books.reading_log_entries.slice(0, 12)
    const myBook = document.createElement("div")
    myBook.classList = "book"
    bookList.forEach((book) => {
      const data = book.work
      booksList.innerHTML += `
             <div class= "book" >
              <img id="bookPhoto" src="${BASE_IMG}${data.cover_edition_key}.jpg" alt="${data.author_names}" />

              <h1 id="titleName">${data.title}</h1>
              <p id="authorName" class="author">${data.author_names}</p>
              <p class="date">${data.first_publish_year}</p>

              <div class="order__buttons">
                <button id="btnbookmark" class="bookmark__btn">Bookmark</button>
                <button class="more__btn">More Info</button>
              </div>
              <button id="readPage" class="read__btn">Read</button></div>
      `

      const booklist = document.getElementById("booklist")
      const bookmarkButtons = document.querySelectorAll('[id^="btnbookmark"]');

      bookmarkButtons.forEach(function (button) {
        button.addEventListener('click', function () {

          const newElement = document.createElement('div');
          newElement.setAttribute("class", "buy")
          const leftElement = document.createElement("div")
          const rightElement = document.createElement("div")
          leftElement.setAttribute("class", "left__buy")
          rightElement.setAttribute("class", "right__buy")
          const bookName = document.createElement("h1")
          const authorName = document.createElement("h2")
          const titleName = document.getElementById("titleName")
          const authorTitle = document.getElementById("authorName")

          bookName.textContent = `${data.title}`
          authorName.textContent = `${data.author_names}`

          const read = document.createElement("img")


          const deleteImg = document.createElement("img")

          read.setAttribute("src", "./assets/images/icons/book-icon.svg")

          deleteImg.setAttribute("src", "./assets/images/icons/delete-icon.svg")

          booklist.appendChild(newElement);
          newElement.appendChild(leftElement);
          newElement.appendChild(rightElement);
          leftElement.appendChild(bookName);
          leftElement.appendChild(authorName);
          rightElement.appendChild(read);
          rightElement.appendChild(deleteImg);

          deleteImg.addEventListener("click", (e) => {
            newElement.parentNode.removeChild(newElement);
          });
        });
      });


      const overlayExit = document.querySelector(".overlay__exit");
      const overlay = document.querySelector(".general__overlay");
      const over = document.querySelector(".over");
      const readButtons = document.querySelectorAll('[id^=readPage]');

      readButtons.forEach(function (read) {
        read.addEventListener("click", function () {
          over.classList.toggle("over");
          overlay.classList.remove("exit");
          overlayExit.addEventListener('click', function () {
            overlay.classList.toggle("exit");
          });
        });
      });


    })
    booksList.appendChild(myBook)
  })
}

createCard()



// const overlayExit = document.querySelector(".overlay__exit");
// const overlay = document.querySelector(".general__overlay")

// overlayExit.addEventListener('click', function () {
//   overlay.classList.toggle("exit")
// })


// /*ReadBtn Js */

// const over = document.querySelector(".over");

// readBtn.addEventListener('click', function () {
//   over.classList.toggle("over")
// })