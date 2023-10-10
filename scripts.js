const my_library = [];
let count = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createGrid() {
    const container = document.querySelector('#grid-container');
    const new_grid = document.createElement('div');
    new_grid.innerHTML = `Title: ${my_library[count].title}<br/>Author: ${my_library[count].author}<br/>Pages: ${my_library[count].pages}<br/>`
    new_grid.classList.add('book-grid');
    new_grid.setAttribute('id', 'grid'+count);
    const read_button = document.createElement('button');
    read_button.classList.add('read-button');
    read_button.setAttribute('id', 'btn'+count);
    const remove_button = document.createElement('button');
    remove_button.classList.add('submit-btn');
    remove_button.innerHTML = 'Remove';
    if (my_library[count].read) {
        read_button.innerHTML = 'Read';
        read_button.style.backgroundColor = '#6de4629a';
    } else {
        read_button.innerHTML = 'Not Read';
        read_button.style.backgroundColor = '#e462629a';
    }
    container.appendChild(new_grid);
    new_grid.appendChild(read_button);
    new_grid.appendChild(remove_button);
    count++;
}

function addBookToLibrary() {
    let read = false;
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    if (document.getElementById('read').checked) {
        read = true;
    }
    const new_book = new Book(title.value, author.value, pages.value, read);
    my_library.push(new_book);
    createGrid();
    console.log(my_library);
    changeForm();
}

function changeForm() {
    const form = document.getElementById('myForm');
    if (form.style.display == 'none') {
        form.style.display = 'flex';
    } else {
        form.style.display =  'none';
    }
}

function removeFromLibrary(title) {
    // title is not at top of array, title is in the object
    // Need to figure out another way to access correct element in array
    const index = my_library.indexOf(title);
    console.log(index);
    my_library.pop(my_library[index]);
    console.log(my_library);
}