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
    const confirm = document.getElementById('confirmation').innerHTML = `${title.value} added!`;
    console.log(my_library);
    title.value = '';
    author.value = '';
    pages.value = '';
}