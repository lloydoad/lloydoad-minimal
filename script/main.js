// script

const scrollHorizontalLayer = document.getElementsByClassName("scroll-horizontal-layer")[0];
const mainContainer = document.getElementsByClassName("main-container")[0];
const mainButtons = {
    resumeBtn: document.getElementById("resume"),
    projectBtn: document.getElementById("project"),
    contact: document.getElementById("contact"),
};
const mainWindows = {
    resume: document.querySelector("#resumeWindow"),
    project: document.querySelector("#projectWindow"),
    contact: document.querySelector("#contactWindow")
}

let isWindowOpen = {
    resume: false,
    project: false,
    contact: false
}
let isDown = false;
let startX;
let scrollLeft;

// setupScrollWindow();

function hideAllMenuButtons() {
    mainButtons.resumeBtn.style.display = "none";
    mainButtons.projectBtn.style.display = "none";
    mainButtons.contact.style.display = "none";
}

function hideAllWindows() {
    mainWindows.resume.style.display = "none";
}

function respondToMenu(element, detailWindow) {
    if(isWindowOpen[element.id]) {
        closeSelectedWindow(element, detailWindow);
    } else {
        openSelectedWindow(element, detailWindow);
    }

    isWindowOpen[element.id] = !isWindowOpen[element.id];
}

function openSelectedWindow(element, detailWindow) {
    const middleLayer = detailWindow.getElementsByClassName("middle-layer-window")[0];
    const screenWidth = mainContainer.clientWidth;

    hideAllMenuButtons();

    element.style.display = "";
    element.className = "top-menu-button-opened";

    middleLayer.className = "middle-layer-window layer-fade-in";
    if(element.id === "project" || (element.id === "contact" && screenWidth > 460)) {
        detailWindow.className = "detail-window detail-window-open short";
    }else{
        detailWindow.className = "detail-window detail-window-open";
    }
}

function closeSelectedWindow(element, detailWindow) {
    const middleLayer = detailWindow.getElementsByClassName("middle-layer-window")[0];

    middleLayer.className = "middle-layer-window layer-fade-out";
    detailWindow.className = "detail-window detail-window-close";

    mainButtons.resumeBtn.style.display = "";
    mainButtons.projectBtn.style.display = "";
    mainButtons.contact.style.display = "";

    setTimeout(
        function(){ 
            element.className = "top-menu-button";
        }, 
        300
    );
}