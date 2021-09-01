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
    

    archive.forEach(element => {
        console.log(element)
        
        const div =document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
            <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="card-img-top" alt="book image">
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p id="author" class="card-text">Author : ${element.author_name}</p>
            <p class="card-text">First Publish : ${element.first_publish_year}</p>
            <p class="card-text">Publisher : ${element.publisher}</p>
            </div>
        </div>
        `;
        bookList.appendChild(div);
    });
} 