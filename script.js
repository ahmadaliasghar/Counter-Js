let add = document.getElementById("increment")
let add2 = document.getElementById("increment2")
let minus = document.getElementById("decrement")
let minus2 = document.getElementById("decrement2")
let int = document.getElementById("int")
let integer = 0
add.addEventListener("click" ,function (){
    integer += 1
    int.innerHTML = integer
})
add2.addEventListener("click" ,function (){
    integer += 2
    int.innerHTML = integer
})
minus.addEventListener("click" ,function (){
    integer -= 1
    int.innerHTML = integer
})
minus2.addEventListener("click" ,function (){
    integer -= 2
    int.innerHTML = integer
})
