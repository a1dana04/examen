const inpt1 = document.querySelector(".inpt1")
const inpt2 = document.querySelector(".inpt2")
const inpt3 = document.querySelector(".inpt3")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const card1 = document.querySelector(".card1")

function task1(){
    card1.innerHTML  = ""
    let task = JSON.parse(localStorage.getItem("task")) || []  
    task.map((el)=>{
        card1.innerHTML += `
        <div class="card2">
        <div class = "cardd">
        <h4> <img src="${el.userurl}" alt="img"></h4></div>
      
        
        <div class="card5">
        <h4>  name:${el.username}</h4>

        <h4> email:${el.useremail}</h4>
        </div>

      
        <button class = "btn3"> delete</button>
        </div>
        `
    })
    deleteTask()

}
task1()




btn1.addEventListener("click", ()=>{
    let task = JSON.parse(localStorage.getItem("task")) || []
    let obj = {
        username:inpt1.value,
        useremail:inpt2.value,
        userurl:inpt3.value
    }
    let res = [...task, obj]
    localStorage.setItem("task", JSON.stringify(res))
    inpt1.value = ""
    inpt2.value = ""
    inpt3.value = ""
    task1()
})

 function deleteTask(){
    let task = JSON.parse(localStorage.getItem("task")) || []
    let btn3 = document.querySelectorAll(".btn3")
    btn3.forEach((btn11, index)=>{
        btn11.addEventListener("click", () =>{
            task = task.filter((el,idx)=>{
                return idx !== index
            })
            localStorage.setItem("task", JSON.stringify(task))
            task1()

        })
    })
 }
 deleteTask()

 btn2.addEventListener("click", ()=>{
    card1.style.display = "block"
 })

 btn2.addEventListener("dblclick", ()=>{
    card1.style.display = "none"
 })
