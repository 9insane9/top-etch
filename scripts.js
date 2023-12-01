let gridSizeButton = document.querySelector(".set-grid-size");
let container = document.querySelector(".container");

gridSizeButton.addEventListener('click', () => {
    let gridSize = prompt("Enter grid dimensions", "16");

    for (let i=0; i <= (gridSize * gridSize); i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        container.appendChild(pixel);
        }
});