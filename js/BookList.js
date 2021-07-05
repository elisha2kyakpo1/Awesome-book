const bookUl = document.querySelector('.book-list');
const bookList = [
  {
    title: 'title',
    author: 'author',
    id: 0,
  },
];

function showbook (id) {
  const bookObjective = bookList[id];
  const bookContainer = document.createElement('il');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('h2');
  const removeButton = document.createElement('button');
  const bar = document.createElement('div');
  bar.classList.add('bar');

  bookTitle.textContent = bookObjective.title;

  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(removeButton);
  bookContainer.appendChild(bar);

  bookUl.appendChild(bookContainer);
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
