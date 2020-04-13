const firePixelArray = [];
const fireWidth = 2;
const fireHeight = 6;

function start() {
    createFireDataStructure();
    console.log(firePixelArray);
}

function createFireDataStructure() {
    const numberOfPixels = fireHeight * fireWidth;

    for (let i = 0; i < numberOfPixels; i++) {
        firePixelArray[i] = 0;
        
    }
}

function calculateFirePropagation() {
    
}

function renderFire() {
    let html = '<table cellpadding = 0 cellspacing=0>';

    for (let row = 0; row < fireHeight; row++) {
        html += '<tr>';

        for (let column = 0; column < fireWidth; column++) {
            html += '<td>';

            html += '</td>';
        }
        html += '</tr>';
    }
    html += '<table>';
}

start();