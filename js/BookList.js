const bookUl = document.querySelector(".book-list");
const bookList = [
    {
    title: "title",
    author: "author",
    id: 0,
    }
];

function showbook (id){
    bookObjective = bookList[id];
    bookContainer = document.createElement('il');
    bookTitle = document.createElement('h2');
    bookAuthor = document.createElement('h2');
    removeButton =document.createElement('button');
    bar = document.createElement('div');
    bar.classList.add('bar');
    
    bookTitle.textContent = bookObjective.title;
    bookAuthor.textContent = bookObjective.author,


    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(removeButton)
    bookContainer.appendChild(bar);

    bookUl.appendChild(bookContainer);
}

showbook(0);