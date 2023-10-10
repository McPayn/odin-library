const my_library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const new_book = new Book(title.value, author.value, pages.value);
    my_library.push(new_book);
    console.log(my_library);
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