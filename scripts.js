const my_library = [];

// Constructor for Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Removes object at index id from array and recreates grid
function removeElement(id) {
    my_library.splice(id, 1);
    createGrid();
    console.log(my_library);
}

// Changes read status of a book (a book cannot be un-read)
function changeRead(e) {
    const index = e.target.parentNode.id;
    if (!my_library[index].read) {
        e.target.innerHTML = 'Read';
        e.target.style.backgroundColor = '#6de4629a';
    }
    my_library[index].read = true;
}

// Creates a grid containing all elements within my_library
// Each grid element consists of a div with two buttons that will show the read status of a book
// And remove that element from the list
function createGrid() {
    const container = document.querySelector('#grid-container');
    container.innerHTML = '';
    for (let i = 0; i < my_library.length; i++) {
        const new_grid = document.createElement('div');
        // Inserts new_grid text content
        new_grid.innerHTML = `Title: ${my_library[i].title}<br/>Author: ${my_library[i].author}<br/>Pages: ${my_library[i].pages}<br/>`
        new_grid.classList.add('book-grid');
        // Gives the new_grid an id that will be correlate to the index of my_library that it's information comes from
        new_grid.setAttribute('id', i);
        container.appendChild(new_grid);
        // Creates button for new_grid that will display read status
        const read_button = document.createElement('button');
        read_button.classList.add('read-button');
        read_button.onclick = function (e) {
            changeRead(e);
        }
        // Creates button for new_grid that will delete current new_grid
        const remove_button = document.createElement('button');
        remove_button.classList.add('submit-btn');
        remove_button.onclick = function (e) {
            removeElement(e.target.parentNode.id);
        }
        remove_button.innerHTML = 'Remove';
        if (my_library[i].read) {
            read_button.innerHTML = 'Read';
            read_button.style.backgroundColor = '#6de4629a';
        } else {
            read_button.innerHTML = 'Not Read';
            read_button.style.backgroundColor = '#e462629a';
        }
        new_grid.appendChild(read_button);
        new_grid.appendChild(remove_button);
    }
}

// Grabs book info entered into HTML elements and creates a new object with them
// New object is added to my_library
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
    // When a new book is added, create the grid
    createGrid();
    // Call changeForm() to close form
    changeForm();
}

// If form is open, will close form
// If form is closed, will open form
function changeForm() {
    const form = document.getElementById('myForm');
    if (form.style.display == 'none') {
        form.style.display = 'flex';
    } else {
        form.style.display =  'none';
    }
}