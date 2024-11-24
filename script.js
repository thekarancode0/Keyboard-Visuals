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

            if(keyPressed === " " && key.classList.contains("space")){
                randomWords();
            }

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


const words = "Google was founded on September 4, 1998, by American computer scientists Larry Page and Sergey Brin while they were PhD students at Stanford University in California. Together, they own about 14% of its publicly listed shares and control 56% of its stockholder voting power through super-voting stock. The company went public via an initial public offering (IPO) in 2004. In 2015, Time is the continued sequence of existence and events that occurs in an apparently irreversible succession from the past, through the present, and into the future.[1][2][3] It is a component quantity of various measurements used to sequence events, to compare the duration of events or the intervals between them, and to quantify rates of change of quantities in material reality or in the conscious experience.[4][5][6][7] Time is often referred to as a fourth dimension, along with three spatial dimensions. Google was reorganized as a wholly owned subsidiary of Alphabet Inc. Google is Alphabet's largest subsidiary and is a holding company for Alphabet's internet properties and interests. Sundar Pichai was appointed CEO of Google on October 24, 2015, replacing Larry Page, who became the CEO of Alphabet. On December 3, 2019, Pichai also became the CEO of Alphabet.[14] India, officially the Republic of India,[j][20] is a country in South Asia. It is the seventh-largest country in the world by area and the most populous country. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[k] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.".split(" ");
const wordsCount = words.length;
const wordList = document.querySelector(".wordList");

function randomWords(){
    const wordsIndex = Math.floor(Math.random()*wordsCount);
    wordList.innerHTML = words[wordsIndex];
}

randomWords();