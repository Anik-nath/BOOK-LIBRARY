let numberOfResults = document.getElementById('numberOfResult');
const bookList = document.getElementById('book-List');

const searchBook = () =>{
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;

    const url = `http://openlibrary.org/search.json?q=${searchText}`

    if(inputField.value === ''){
       console.log('empty')
       numberOfResults.innerText = "No Results Found";
       bookList.textContent = '';
    }
    else{
        fetch(url)
        .then(res => res.json())
        .then(data => displayArchive(data.docs))
    }
    inputField.value = '';
}

const displayArchive = archive => {
   
    bookList.innerHTML = '';

    // console.log(archive)
    numberOfResults.innerText = archive.length;
    

    archive.forEach(books => {
        console.log(books)
        
        const div =document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
            <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top p-3" alt="book image">
            <div class="card-body">
            <h4 class="card-title text-primary">${books.title}</h4>
            <p id="author" class="card-text">Author : ${books.author_name}</p>
            <p class="card-text">First Publish : ${books.first_publish_year}</p>
            <p class="card-text">Publisher : ${books.publisher}</p>
            <p class="card-text">Publisher Year: ${books.first_publish_year}</p>
            </div>
        </div>
        `;
        bookList.appendChild(div);
    });
} 