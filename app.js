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

    numberOfResults.innerText = archive.length;
    

    archive.forEach(books => {
        // console.log(books.publish_year)


        const div =document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
            <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top p-3" alt="book image">
            <div class="card-body">
            <h4 class="card-title text-primary">${books.title}</h4>
            <p id="author" class="card-text">Author : ${typeof books.author_name === 'undefined'?'Author not found':books.author_name[0]}</p>
            <p class="card-text">First Publish : ${typeof books.first_publish_year === 'undefined'?'Year Not Found':books.first_publish_year}</p>
            <p class="card-text">Publisher : ${typeof books.publisher === 'undefined'?'Publiser not found':books.publisher[0]}</p>
            <p class="card-text">Publish Year: ${typeof books.publish_year === 'undefined'?'Not Found':books.publish_year[0]}</p>
            </div>
        </div>
        `;
        bookList.appendChild(div);
    });
} 
