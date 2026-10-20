// async function fetchFruitData(fruit) {
//     try {
//         const resp = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`);

//         if (resp.ok) {
//             const data = await resp.json();
//             addFruit(data);
//         } else {
//             throw "Error: http status code = " + resp.status;
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[type="search"]');
const searchDropdown = document.querySelector("#searchDropdown")

searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const query = searchInput.value.trim();

    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        getFiveBooks(data);
        //console.log(data.docs[0]);
        //console.log(data.items);

    } catch (error) {
        console.error("Error fetching books:", error);
    }
});

function getFiveBooks(data){
    const books = data.docs.slice(0, 5);
    //console.log(books)
    titles = []
    authors = []
    for (i=0;i<5;i++){
        titles[i] = books[i].title
        authors[i] = books[i].author_name

    }
    console.log(titles)
    console.log(authors)
    displayFiveBooks(titles,authors)
}

function displayFiveBooks(titles, authors) {
    searchDropdown.innerHTML = "";

    for (let i = 0; i < titles.length; i++) {
        const option = document.createElement("button");

        option.type = "button";
        option.className = "list-group-item list-group-item-action";

        option.innerHTML = `
            <strong>${titles[i]}</strong><br>
            <small class="text-muted">${authors[i]}</small>
        `;

        option.addEventListener("click", function () {
            searchInput.value = titles[i];
            searchDropdown.style.display = "none";
        });

        searchDropdown.appendChild(option);
    }
     searchDropdown.style.display = "block";
}