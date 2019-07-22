// header, portfolio, and footer sections for the default view scheme
const header = document.getElementsByClassName("masterhead")[0];
const portfolio = document.getElementsByClassName("portfoliosect")[0];
const footer = document.getElementsByClassName("masterfoot")[0];
const hamburger = document.getElementsByClassName("hamburger")[0];
// modal, for viewing enlarged images, and the image object
const modal = document.getElementsByClassName("modal")[0];
const modalImage = document.getElementsByClassName("bigimage")[0].children[0];

// list of images
const images = [
    "alpine",
    "autumn",
    "bluemoon",
    "bluewater",
    "browngreysky",
    "canyon",
    "lights",
    "redmoon",
    "redview",
    "rust",
    "snowview",
    "waterfall",
    "yellow"
];
var imageIndex = 0;

// sleep function for timing
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// opens image modal and navigates to correct image
async function viewImage(imageName) {
    goToImage(imageName);
    modal.style.display = "grid";
    await sleep(50);

    modal.classList.add("visible");
    await sleep(250);
    document.body.style.overflowY = "hidden";
}

// helper function for viewImage; handles navigating to the new image
function goToImage(imageName) {
    imageIndex = 0;
    while (images[imageIndex] !== imageName) {
        imageIndex++;
    }
    modalImage.src = "./images/" + images[imageIndex] + ".jpg";
}

// closes the image viewer modal
async function exitImageViewer() {
    modal.classList.remove("visible");
    document.body.style.overflowY = "scroll";
    await sleep(500);
    modal.style.display = "none";
}

function hamburgerMenu() {
    if (!hamburger.classList.contains("hamburger-transition")) {
        hamburger.classList.add("hamburger-transition")
    }
    if (hamburger.classList.contains("menuopen")) {
        hamburger.classList.remove("menuopen");


        header.classList.remove("menuopen");
        portfolio.classList.remove("menuopen");
        footer.classList.remove("menuopen");
    }
    else {
        header.classList.add("menuopen");
        portfolio.classList.add("menuopen");
        footer.classList.add("menuopen");


        hamburger.classList.add("menuopen");
    }
}

function nextImage() {
    imageIndex++;
    if (imageIndex === images.length) {
        imageIndex = 0;
    }
    goToImage(images[imageIndex]);
}
function prevImage() {
    if (imageIndex === 0) {
        imageIndex = images.length;
    }
    imageIndex--;
    goToImage(images[imageIndex]);
}
