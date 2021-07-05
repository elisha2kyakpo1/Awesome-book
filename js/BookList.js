const bookUl = document.querySelector('.book-list');
const bookList = [
  {
    title: 'title',
    author: 'author',
    id: 0,
  },
];

function showbook (id) {
    while (bookUl.hasChildNodes){
        bookUl.removeChild(0);
    }
    for(let i=0; i<bookList.length; i +=1){
    bookObjective =bookList[i];
  const bookContainer = document.createElement('div');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('h2');
  const removeButton = document.createElement('button');
  const bar = document.createElement('div');
  bar.classList.add('bar');

  bookTitle.innerHTML = `<h2>${bookObjective.title}</h2>`;
  bookAuthor.innerHTML = `<h2>${bookObjective.author}</h2>`;

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(removeButton);
  bookContainer.appendChild(bar);

  bookUl.appendChild(bookContainer);
    }
  bookList.forEach((book) => {
    let allBooks = book[0];
    return allBooks;
  });
}

const addBook = () => {
  const book = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  };
  bookList.push(book);
  showbook();
};

const clear = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
};

const save = document.getElementById('submit');
save.addEventListener('click', (e) => {
  e.preventDefault();
  addBook();
  clear();
});
