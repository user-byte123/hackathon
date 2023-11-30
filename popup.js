// JS that controls the behavior and functionality of the popup.thml UI
// run every time we open facebook/ youtube, if website includes social media host
// document.getElementById("someImage").src = /imgs/IMG_2438.jpg;
switch (window.location.hostname) {
    case "www.youtube.com":
        document.body.style.margin = '0'; // Remove default margin
        document.body.style.height = '100vh'; // Set body height to full viewport height
        document.body.style.display = 'flex'; // Use flexbox for centering
        document.body.style.justifyContent = 'center'; // Center horizontally
        document.body.style.alignItems = 'center'; // Center vertically
        document.body.style.overflow = 'hidden'; // Hide any overflow
        document.body.innerHTML = "<img src=\'https://http.dog/403.jpg' width=\'900px\'>";
        break;
    case "www.9gag.com":
        document.body.style.margin = '0'; // Remove default margin
        document.body.style.height = '100vh'; // Set body height to full viewport height
        document.body.style.display = 'flex'; // Use flexbox for centering
        document.body.style.justifyContent = 'center'; // Center horizontally
        document.body.style.alignItems = 'center'; // Center vertically
        document.body.style.overflow = 'hidden'; // Hide any overflow
        document.body.innerHTML = "<img src=\'https://http.dog/440.jpg' width=\'1595px\' height=\'900px\'>";
        break;
    case "www.netflix.com":
        document.body.style.margin = '0'; // Remove default margin
        document.body.style.height = '100vh'; // Set body height to full viewport height
        document.body.style.display = 'flex'; // Use flexbox for centering
        document.body.style.justifyContent = 'center'; // Center horizontally
        document.body.style.alignItems = 'center'; // Center vertically
        document.body.style.overflow = 'hidden'; // Hide any overflow
        document.body.innerHTML = "<img src=\'https://http.dog/425.jpg' width=\'900px\' height=\'900px\'>";
        break;
    case "www.facebook.com":
        document.body.style.margin = '0'; // Remove default margin
        document.body.style.height = '100vh'; // Set body height to full viewport height
        document.body.style.display = 'flex'; // Use flexbox for centering
        document.body.style.justifyContent = 'center'; // Center horizontally
        document.body.style.alignItems = 'center'; // Center vertically
        document.body.style.overflow = 'hidden'; // Hide any overflow
        document.body.innerHTML = "<img src=\'https://http.dog/451.jpg' width=\'900px\' height=\'900px\'>";
        break;
    case "www.instagram.com":
        document.body.style.margin = '0'; // Remove default margin
        document.body.style.height = '100vh'; // Set body height to full viewport height
        document.body.style.display = 'flex'; // Use flexbox for centering
        document.body.style.justifyContent = 'center'; // Center horizontally
        document.body.style.alignItems = 'center'; // Center vertically
        document.body.style.overflow = 'hidden'; // Hide any overflow
        document.body.innerHTML = "<img src=\'https://http.dog/406.jpg' width=\'900px\' height=\'900px\'>";
        break;
    default:
        break;
}

document.addEventListener('click',function(event) {
    document.body.innerHTML = "<img src=\'https://http.dog/440.jpg' width=\'900px\'>"
    const textElement = document.createElement('p')
    document.body.appendChild(textElement)
    textElement.textContent = "Enough dogging around time to go back to studying"
    textElement.style.fontSize = "100px";
    textElement.style.color = "white"
})