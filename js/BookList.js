const bookUl = document.querySelector('.book-list');
const bookList = [
  {
    title: 'elisha',
    author: 'good',
    id: 0,
  },
];

const titleElement = document.querySelector('.title-ele');
const authorElement = document.querySelector('.author-ele');
const removeButton = document.createElement('button');
const bookContainer = document.createElement('div');
const bookTitle = document.createElement('h2');
const bookAuthor = document.createElement('h2');
function showbook() {
  for (let i = 0; i < bookList.length; i += 1) {
    const bookObjective = bookList[i];
    removeButton.textContent = 'Remove';
    const bar = document.createElement('hr');

    bookTitle.innerHTML = `<h2>${bookObjective.title}</h2>`;
    bookAuthor.innerHTML = `<h2>${bookObjective.author}</h2>`;

    titleElement.appendChild(bookTitle);
    authorElement.appendChild(bookAuthor);
    bookContainer.appendChild(removeButton);
    bookContainer.appendChild(bar);

    bookUl.appendChild(bookContainer);
  }
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

removeButton.addEventListener('click', () => {
  bookUl.removeChild(bookTitle);
  bookUl.removeChild(bookAuthor);
});