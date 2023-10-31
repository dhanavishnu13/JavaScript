// initalize the count as 0

// listen for clicks on the increment

//increment

// change count

let countEl =     document.getElementById('count')
// console.log(countEl) ---<h2 id="count">0</h2>
let saveEl = document.getElementById('save-el')


let count = 0
//
function increment() {
    count +=1
    countEl.innerText = count
}


// create a function, save() which logs out the count

function save() {
    let entry=count+' - '
    saveEl.textContent+=entry
    countEl.innerText = 0
    count = 0
}

//string
// let username="vishnu"
// console.log(username)

// Create a varible, message, that stores the string: "You have the notification"

// string + integer
let total= 10 +"10"  // 1010
// console.log(total)