// write your code here
document.addEventListener('DOMContentLoaded',()=>{
    renderImages()
    newRamenForm()
})

const ramenUrl = `http://localhost:3000/ramens`

// Rendering images in the div with id="ramen-menu`
function renderImages(){
    fetch (ramenUrl)
    .then (response => response.json())
    .then(ramenObj => { 
        ramenObj.forEach(ramen=> {
            addImage(ramen)
        })
    })
}

function addImage(ramen){
    const ramenMenuContainer = document.querySelector(`#ramen-menu`)
    const ramenMenuImg = document.createElement('img')
    ramenMenuImg.src = ramen.image
    ramenMenuImg.addEventListener(`click`,()=>{ console.log(ramen)
        document.querySelector(`.detail-image`).src = ramen.image;
        document.querySelector(`.name`).textContent = ramen.name;
        document.querySelector(`.restaurant`).textContent = ramen.restaurant;
        document.querySelector(`#rating-display`).textContent =ramen.rating
        document.querySelector(`#comment-display`).textContent = ramen.comment
    })
    ramenMenuContainer.appendChild(ramenMenuImg)
}


//Form

// <form id="new-ramen">
//     <h4>Add New Ramen</h4>
//     <label for="name">Name: </label>
//     <input type="text" name="name" id="new-name" />
//     <label for="restaurant">Restaurant: </label>
//     <input type="text" name="restaurant" id="new-restaurant" />
//     <label for="image">Image: </label>
//     <input type="text" name="image" id="new-image" />
//     <label for="rating">Rating: </label>
//     <input type="number" name="rating" id="new-rating" />
//     <label for="new-comment">Comment: </label>
//     <textarea name="new-comment" id="new-comment"></textarea>
//     <input type="submit" value="Create" />
//   </form>


function newRamenForm (){
    const form = document.querySelector(`form`)
    form.addEventListener('submit',(e)=>{
       e.preventDefault()
       const ramenMenuContainer = document.querySelector(`#ramen-menu`)
       const ramenMenuImg = document.createElement('img')
       
    const name = e.target[0].value
    const restaurant= e.target[1].value
    const image = e.target[2].value
    const rating = e.target[3].value;
    const comment = e.target[4].value
    ramenMenuImg.src = e.target[2].value

    ramenMenuContainer.appendChild(ramenMenuImg)
    ramenMenuImg.addEventListener(`click`, (e)=>{ 
        document.querySelector(`.detail-image`).src = image;
        document.querySelector(`.name`).textContent = name;
        document.querySelector(`.restaurant`).textContent = restaurant;
        document.querySelector(`#rating-display`).textContent = rating;
        document.querySelector(`#comment-display`).textContent = comment
    })
    form.reset()

    })
}