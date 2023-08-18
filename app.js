// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");
const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");




// text.style.backgroundColor = "pink";


   





// changeColor.addEventListener('click',function(){ // this is also called call back function
//     text.classList.toggle("change"); //toggle sai wapas button jo pichle state mai tha waise hi hojata hai.
// })

addListBtn.addEventListener("click", function () {
//next task is that create an li out of thin air
const newLi = document.createElement("LI");
const liContent = document.createTextNode(listInput.value);
// add the input value inside that new li 
newLi.appendChild(liContent);

// attaching the li to the use list
userList.appendChild(newLi);
})
