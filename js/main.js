const form=document.querySelector(".form")
const name1=document.querySelector(".name1")
const speed1 = document.querySelector(".speed1");
const price1 = document.querySelector(".price1");
const img1 = document.querySelector(".img1");
const right=document.querySelector(".right")
const slider = document.querySelector(".slider")
const body = document.querySelector("body")
const button = document.querySelector("button")
const box = document.querySelector(".box")
const h2 = document.querySelector("h2")





var users  = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]




var data = () => {
  right.innerHTML = "";
  users.forEach((item) => {
    right.innerHTML += `
     <div class="box">
          <img src="${item.img}" alt="">
          <div class="text">
           <div class="clik">
          <h2 class="model">model:${item.name}</h2>
       
        </div>
          <hr>
          <h2>speed:${item.speed} km/h</h2>
          
          <h2>price:${item.price} $</h2>
          
          
          </div>
          <button  onclick="clears(${item.id}) "><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
    `;

  });
};
data()


form.addEventListener("submit", (e) => {
  e.preventDefault();
  users.push({
    name: name1.value,
    speed:speed1.value,
    price:price1.value,
    img:img1.value,
    id: Math.floor(Math.random() * 999),
    
  });
  localStorage.setItem("users", JSON.stringify(users))
   
    // inputText.value = ""
  name1.value=""
  speed1.value=""
  price1.value=""
   img1.value=""
  data();
})
const clears = (id) => {
  users = users.filter((user) => user.id !== id);
  localStorage.setItem("users", JSON.stringify(users))
  data();
};
slider.addEventListener("click",()=>{
  body.classList.toggle("active")
  name1.classList.toggle("active")
  speed1.classList.toggle("active")
  price1.classList.toggle("active")
  img1.classList.toggle("active")
  right.classList.toggle("active")
  slider.classList.toggle("active")
  button.classList.toggle("active")
  box.classList.toggle("active")
  h2.classList.toggle("active")



   
})