function bulbOnOff() {
var image = document.getElementById('image');

if (image.src.includes('Pic/on-edited.png')) {
    // Turning OFF
    image.src = "Pic/Off-edited.png";
    image.classList.remove('bulb-on'); // Remove glow
    document.body.style.backgroundColor = "#010101";
} else {
    // Turning ON
    image.src = "Pic/on-edited.png";
    image.classList.add('bulb-on');    // Add glow
    document.body.style.backgroundColor = "#121212"; // Very slight lift from black
}
}