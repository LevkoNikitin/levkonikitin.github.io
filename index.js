
const homeButton = document.getElementById("homeButton");
const aboutButton = document.getElementById("aboutButton");
const contactButton = document.getElementById("contactButton");

const homeButtonSmall = document.getElementById("homeButtonSmall");
const aboutButtonSmall = document.getElementById("aboutButtonSmall");
const contactButtonSmall = document.getElementById("contactButtonSmall");

const homePage = document.getElementById("homePage")
const aboutPage = document.getElementById("aboutPage")
const contactPage = document.getElementById("contactPage")

function removeClass() {
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    contactButton.classList.remove("active");
}

function noRender() {
    homePage.classList.add("noRender");
    aboutPage.classList.add("noRender");
    contactPage.classList.add("noRender");
}

//Desktop Breakpoint Buttons
homeButton.addEventListener("click", () => {
    removeClass();
    homeButton.classList.add("active");
    noRender();
    homePage.classList.remove("noRender");
})

aboutButton.addEventListener("click", () => {
    removeClass();
    aboutButton.classList.add("active");
    noRender();
    aboutPage.classList.remove("noRender");
})

contactButton.addEventListener("click", () => {
    removeClass();
    contactButton.classList.add("active");
    noRender();
    contactPage.classList.remove("noRender");
})

//Mobile Breakpoint Buttons
homeButtonSmall.addEventListener("click", () => {

    noRender();
    homePage.classList.remove("noRender");
})

aboutButtonSmall.addEventListener("click", () => {

    noRender();
    aboutPage.classList.remove("noRender");
})

contactButtonSmall.addEventListener("click", () => {

    noRender();
    contactPage.classList.remove("noRender");
})