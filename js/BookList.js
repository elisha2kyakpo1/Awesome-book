let idCount = 1;
const bookUl = document.querySelector('.book-list');
let bookList = [
  {
    title: 'elisha',
    author: 'good',
    id: 0,
  },
];

function remove(id) {
  const objective = document.getElementById(id);
  objective.remove();
  bookList = bookList.filter((book) => book.id !== id);
}

function showbook() {
  for (let i = 0; i < bookList.length; i += 1) {
    const removeButton = document.createElement('button');
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h2');
    const bookObjective = bookList[i];
    removeButton.textContent = 'Remove';

    bookTitle.textContent = bookObjective.title;
    bookAuthor.textContent = bookObjective.author;

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(removeButton);
    bookContainer.setAttribute('id', bookObjective.id);
    bookUl.appendChild(bookContainer);
    removeButton.onclick = () => {
      remove(bookObjective.id);
    };
  }
}

const addBook = () => {
  const book = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    id: idCount,
  };
  idCount += 1;
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
