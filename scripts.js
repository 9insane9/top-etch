let gridSizeButton = document.querySelector(".grid-size-button");
let container = document.querySelector(".container");

gridSizeButton.addEventListener('click', () => {
    let gridDimension = prompt("Enter grid dimensions", "20");

    //calculate pixel dimension
    let pixelDimension = container.offsetHeight / gridDimension - 2.3;
    pixelDimension += "px";
    console.log(`pixel dimension is ${pixelDimension}`);//

    //create row
    for (let i = 1 ; i <= gridDimension; ++i) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        row.style.setProperty("display", "flex");
        row.style.setProperty("justify-content", "space-between")
        container.appendChild(row);

        //add pixels to row
        for (let i = 1; i <= gridDimension; ++i) {
            let pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            pixel.style.setProperty("height", pixelDimension);
            pixel.style.setProperty("width", pixelDimension);
            row.appendChild(pixel);
            pixel.textContent = "px";
            
        }
    }
});