const keys = document.querySelectorAll(".key");
const text = document.querySelector(".textBox");
let isShiftPressed = false; // Track Shift key state

// Detect key press
document.addEventListener("keydown", (event) => {
    const keyPressed = event.key;

    // Handle Shift key state
    if (keyPressed === "Shift") {
        isShiftPressed = true;
        return;
    }

    // Handle Backspace
    if (keyPressed === "Backspace") {
        const currentText = text.innerHTML;
        text.innerHTML = currentText.slice(0, -1);
        return;
    }

    keys.forEach((key) => {
        key.style.backgroundColor = "";
    });

    keys.forEach((key) => {
        const keyText = key.textContent.trim();
        if (keyText.toLowerCase() === keyPressed.toLowerCase() ||
            (keyPressed === " " && key.classList.contains("space"))) {

            const character = isShiftPressed ? keyText.toUpperCase() : keyText.toLowerCase();
            text.innerHTML += keyPressed === " " ? "&nbsp;" : character;

            const color = ["#CB9DF0","#FF9C73","#133E87","#FFB38E","#7AB2D3","#FEEC37","#FF9D3D","#024CAA","#006BFF"]
            const randIndex = Math.floor(Math.random() * color.length);
            key.style.backgroundColor = color[randIndex];

        }
    });
});

// Reset Shift state on key release
document.addEventListener("keyup", (event) => {
    if (event.key === "Shift") {
        isShiftPressed = false;
    }
    text.scrollTop = text.scrollHeight;
});