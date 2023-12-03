let gridSizeButton = document.querySelector(".grid-size-button");
let container = document.querySelector(".container");
let row;
let pixel;
let grid = false;

let allRows;
let allPixels;

gridSizeButton.addEventListener('click', () => {
    let gridDimension = prompt("Enter grid dimensions", "100");

    if (gridDimension > 100) {
        alert("you interplanetary goat, try a lower number");
    } else {
        //calculate pixel dimension
        let pixelDimension = container.offsetHeight / gridDimension;
        pixelDimension += "px";
        console.log(`pixel dimension is ${pixelDimension}`);//

        if (grid) { //delete old grid if one already exists                        
            allPixels.forEach((element) => {
                element.remove();
            })

            allRows.forEach((element) => {
                element.remove();
            })
        }
        
        for (let i = 1 ; i <= gridDimension; ++i) {  //create row            
            row = document.createElement("div");
            row.setAttribute("class", "row");
            container.appendChild(row);
                        
            for (let i = 1; i <= gridDimension; ++i) { //add pixels to row
                pixel = document.createElement("div");
                pixel.setAttribute("class", "pixel");
                pixel.style.setProperty("height", pixelDimension);
                pixel.style.setProperty("width", pixelDimension);
                row.appendChild(pixel);           
            }
        }
        grid = true;
        allRows = document.querySelectorAll(".row");
        allPixels = document.querySelectorAll(".pixel");

        allPixels.forEach((pixel) => pixel.addEventListener("mouseover", (element) => {
            pixel.setAttribute("class", "color1");
        }))
    }
});