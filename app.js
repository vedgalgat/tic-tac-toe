let boxes = document.querySelectorAll(".box")
let msg = document.querySelector(".msg")
let restbtn = document.querySelector("#btn")
let sound = document.querySelector("#btnsound")

let turnO = true;

const winpattren = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("yes,button was clicked ")
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
            box.style.backgroundColor = "orange"
            box.style.color = "white"
        } else {
            box.innerHTML = "x";
            turnO = true
            box.style.backgroundColor = "green"
            box.style.color = "white"
        }
        box.disabled = true // don't change again box inner text
        winner()
        ved()


    })
})

const winner = () => {
    for (let val of winpattren) {
        let pos1 = boxes[val[0]].innerText;
        let pos2 = boxes[val[1]].innerText;
        let pos3 = boxes[val[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("winner", pos1)
                showwinner(pos1)
                disablebox()

            }
        }
    }
}



let disablebox = () => {
    for (let box of boxes) {
        box.disabled = true // disable all boxes
    }

}
restbtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = ""
        box.disabled = false // re-enable all boxes 
        box.style.backgroundColor = ""
        msg.innerHTML = ""
        winsound.pause()
    }
    turnO = true
})


let showwinner = (winner) => {

    let player = winner === "0" ? "player1" : "player2"
    msg.innerHTML = `Congratulation , ${winner} is the winner!`
    msg.classList.remove("hide")

    const winsound = document.getElementById("winsound")
    winsound.play();

}

function ved() {
    sound.play()

}

