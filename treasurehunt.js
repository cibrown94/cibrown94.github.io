alert("You're here!")
var id = Math.floor(Math.random() * 9 )
const treasure = (id) => {
  if(id === 0){
    return document.getElementById(id).innerHTML = "🍎"
  } else if(id === 1){
    return document.getElementById(id).innerHTML = "🌈"
  } else if(id === 2){
    return document.getElementById(id).innerHTML = "😇"
  } else if(id === 3){
    return document.getElementById(id).innerHTML = "😈"
  } else if(id === 4){
    return document.getElementById(id).innerHTML = "🧠"
  } else if(id === 5){
    return document.getElementById(id).innerHTML = "🧶"
  } else if(id === 6){
    return document.getElementById(id).innerHTML = "🍷"
  } else if(id === 7){
    return document.getElementById(id).innerHTML = "🎱"
  } else if(id === 8){
    return document.getElementById(id).innerHTML = "💣"
  }
}


// // console.log("hello world")
//
// const easterEgg = (apple) => {
//   console.log("apple", apple)
//   if(apple === "granny") {
//     document.getElementById(apple).innerHTML = "🍏"
//   } else if(apple === "figi") {
//     document.getElementById(apple).innerHTML = "🏝"
//   } else if(apple === "red") {
//     document.getElementById(apple).innerHTML = "🍎"
//   } else {
//     return "oops!"
//   }
// }
