/* eslint max-classes-per-file: ["error", 2] */
let bookList;
const bookUl = document.querySelector('.book-list');
const tableContainer = document.querySelector('.tbody');

class Node {
  constructor(title, id, author, nextNode = null) {
    this.title = title;
    this.id = id;
    this.author = author;
    this.nextNode = nextNode;
  }

  add(title, id, author) {
    if (this.nextNode === null) {
      this.nextNode = new Node(title, id, author, null);
    } else {
      this.nextNode.add(title, id, author, null);
    }
  }

  get(index, count) {
    if (index === count) {
      return this.title;
    } if (this.nextNode !== null) {
      return this.nextNode.get(index, count + 1);
    }
    return null;
  }

  getNode(index, count) {
    if (index === count) {
      return this;
    } if (this.nextNode !== null) {
      return this.nextNode.get(index, count + 1);
    }
    return null;
  }

  removeNode(index, count, old) {
    if (index === count) {
      old.nextNode = this.nextNode;
      return true;
    } if (this.nextNode !== null) {
      return this.nextNode.remove(index, count + 1, this);
    }
    return null;
  }

  removebyId(id, old) {
    if (this.id === id) {
      old.nextNode = this.nextNode;
      return true;
    } if (this.nextNode !== null) {
      return this.nextNode.removebyId(id, this);
    }
    return null;
  }

  addAt(index, count, value, old) {
    if (index === count) {
      const node = new Node(value, this);
      old.nextNode = node;
      return true;
    } if (this.nextNode !== null) {
      return this.nextNode.addAt(index, count + 1, value, this);
    }
    return null;
  }

  showInformation() {
    const removeButton = document.createElement('button');
    const bookContainer = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const buttonTd = document.createElement('td');
    removeButton.textContent = 'Remove';

    removeButton.classList.add('delete');

    title.innerHTML = `<td>${this.title}</td>`;
    author.innerHTML = `<td>${this.author}</td>`;

    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    buttonTd.appendChild(removeButton);
    bookContainer.appendChild(buttonTd);
    tableContainer.appendChild(bookContainer);
    bookContainer.setAttribute('id', this.id);
    bookUl.appendChild(bookContainer);
    removeButton.onclick = () => {
      const objective = document.getElementById(this.id);
      objective.remove();
      bookList.removebyId(this.id);
      let information = 0;
      if (bookList.size > 0) {
        information = bookList.saveInformation();
      } else {
        information = [];
      }
      localStorage.setItem('information', JSON.stringify(information));
    };
    if (this.nextNode !== null) {
      this.nextNode.showInformation();
    }
  }
}

class LinkedList {
  // setup head and tail
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(title, id, author) {
    if (this.head === null) {
      this.head = new Node(title, id, author, null);
    } else {
      this.head.add(title, id, author);
    }
    this.size += 1;
  }

  addAt(index, title, id, author) {
    if (this.head !== null) {
      if (index === 0) {
        this.head = new Node(title, id, author, this.head.nextNode);
      } else {
        this.size += 1;
        return this.head.addAt(index, 0, title, id, author, this.head);
      }
    } else {
      this.add(title, id, author);
    }
    return null;
  }

  // Get at index
  get(index) {
    return this.head.get(index, 0);
  }

  getNode(index) {
    return this.head.getNode(index, 0);
  }

  remove(index) {
    this.size -= 1;
    return this.head.remove(index, 0, this.head);
  }

  removebyId(id) {
    if (this.head !== null) {
      this.head = this.head.nextNode;
      return true;
    }
    this.size -= 1;
    return this.head.removebyId(id, this.head);
  }

  showInformation() {
    if (this.head !== null) {
      this.head.showInformation(0);
    }
  }

  saveInformation() {
    const information = [];
    if (this.head != null) {
      const book = {
        title: this.head.title,
        id: this.head.id,
        author: this.head.author,
      };
      information.push(book);
      let currentNode = this.head.nextNode;
      while (currentNode !== null) {
        information.push(currentNode);
        currentNode = currentNode.nextNode;
      }
    }
    return information;
  }

  getInformation(information) {
    information.forEach((book) => {
      this.add(book.title, book.id, book.author);
    });
  }
}

bookList = new LinkedList();

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  const information = JSON.parse(localStorage.getItem('information'));
  if (information === null) {
    bookList = new LinkedList();
    bookList.add('Elisha', 0, 'good');
  } else {
    bookList.getInformation(information);
  }
}

function hidden() {
  while (bookUl.lastElementChild) {
    bookUl.removeChild(bookUl.lastElementChild);
  }
}

function showbook() {
  hidden();
  bookList.showInformation();
}

const addBook = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = Date();
  bookList.add(title, id, author);
  const information = bookList.saveInformation();
  localStorage.setItem('information', JSON.stringify(information));
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

showbook();