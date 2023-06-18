let elBody = document.querySelector('body')
let elList = document.querySelector('.list')
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => mapper(data))

function mapper(arr) {
  arr.map((item) => {
    console.log(item);
    elBody.style.backgroundColor = '#333'
    let newLi = document.createElement('li')
    newLi.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="https://avatars.mds.yandex.net/i?id=c6e7e00c4932c758525e974bdf0ec4b135412491-9181886-images-thumbs&n=13" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.id}</h5><br>
          <h5 class="card-title">${item.username}</h5><br>
          <p>Phone:</p>
          <a href="tel:+">+${item.phone}</a><br>
          <p>Email:</p>
          <a href="https://" class="card-text">${item.email}</a><br>
          <p>Website:</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">${item.website}</a><br><br>
          <button type="button" class="btn btn-primary more__btn" id="${item.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
              More info
          </button>
        </div>
      </div>`
    elList.appendChild(newLi)
  })
  let elBtns = document.querySelectorAll('.more__btn')
  elBtns.forEach((btn)=> {
    btn.addEventListener('click', (a)=>{
      filPost(a.target.id)
    })
  })
}

function filPost(id){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=>{
      mapperPost(data.filter((item)=> item.userid == id));
    })
}

function mapperPost(data){
  data.map((item)=>{
    document.querySelector('.modal-body').innerHTML = ''
    let newP = document.createElement('p')
    newP.textContent =item.userid + item.title
    document.querySelector('.modal-body').appendChild(newP) 
  })
}

