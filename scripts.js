let gridSizeButton = document.querySelector(".grid-size-button");
let container = document.querySelector(".container");
let row;
let pixel;
let grid = false;

gridSizeButton.addEventListener('click', () => {
    let gridDimension = prompt("Enter grid dimensions", "20");

    if (gridDimension > 100) {
        alert("you interplanetary goat, try a lower number");
    } else {
        //calculate pixel dimension
        let pixelDimension = container.offsetHeight / gridDimension - 2.3;
        pixelDimension += "px";
        console.log(`pixel dimension is ${pixelDimension}`);//

        if (grid) { //delete old grid if one already exists
            let allRows = document.querySelectorAll(".row");
            let allPixels = document.querySelectorAll(".pixel");
            
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
            row.style.setProperty("display", "flex");
            row.style.setProperty("justify-content", "space-between")
            container.appendChild(row);
            

            //add pixels to row
            for (let i = 1; i <= gridDimension; ++i) {
                pixel = document.createElement("div");
                pixel.setAttribute("class", "pixel");
                pixel.style.setProperty("height", pixelDimension);
                pixel.style.setProperty("width", pixelDimension);
                row.appendChild(pixel);           
            }
        }
        grid = true;
    }
});