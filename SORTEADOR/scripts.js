function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        alert("O valor mínimo tem que ser menor que o valor máximo")
    }

    else {

        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        const resultDisplay = document.querySelector(".result-display")

        resultDisplay.textContent = `O número sorteado é ${result}`
    }

}

