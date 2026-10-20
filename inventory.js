const books = [
    {
        id: 1,
        title: "Dune",
        author: "Frank Herbert",
        quantity: 4,
        location: "Library 1"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        quantity: 2,
        location: "Library 2"
    },
    {
        id: 3,
        title: "Dracula",
        author: "Bram Stoker",
        quantity: 1,
        location: "Library 3"
    }
]


const inventoryTable = document.querySelector("#inventoryTable")


function displayBooks() {

    inventoryTable.innerHTML = ""

    books.forEach(book => {

        const row = document.createElement("tr")

        row.innerHTML = `
            <td>
                <strong>${book.title}</strong>
                <br>
                ${book.author}
            </td>

            <td>${book.quantity}</td>

            <td>${book.location}</td>
        `

        inventoryTable.appendChild(row)
    })
}


displayBooks()