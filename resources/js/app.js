import "./bootstrap";

const desktopMenu = document.querySelector("#desktopNav");
const hamMenu = document.querySelector(".menu");
const mobileNav = document.querySelector("#mobileNav");
const invisibleBox = document.querySelector("#invisibleBoxToCloseNav");

function toggleMobileNav() {
    hamMenu.classList.toggle("opened");
    hamMenu.setAttribute("aria-expanded", hamMenu.classList.contains("opened"));
    mobileNav.classList.toggle("opened");
    invisibleBox.classList.toggle("opened");
}

function removeActiveClass(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].children[0].classList.remove("active");
    }
}

function activate(target) {
    target.classList.add("active");
}

desktopMenu.addEventListener("click", function (e) {
    if (e.target.nodeName === "A" || e.target.nodeName === "LI") {
        removeActiveClass(desktopMenu.children[0].children);
        activate(e.target);
    } else if (e.target.nodeName === "svg") {
        removeActiveClass(desktopMenu.children[0].children);
        activate(e.target.parentNode);
    } else if (e.target.nodeName === "path") {
        removeActiveClass(desktopMenu.children[0].children);
        activate(e.target.parentNode.parentNode);
    }
});

hamMenu.addEventListener("click", toggleMobileNav);

mobileNav.addEventListener("click", function (e) {
    if (e.target.nodeName === "A" || e.target.nodeName === "LI") {
        removeActiveClass(mobileNav.children[0].children);
        activate(e.target);
        toggleMobileNav();
    } else if (e.target.nodeName === "svg") {
        removeActiveClass(mobileNav.children[0].children);
        activate(e.target.parentNode);
        toggleMobileNav();
    } else if (e.target.nodeName === "path") {
        removeActiveClass(mobileNav.children[0].children);
        activate(e.target.parentNode.parentNode);
        toggleMobileNav();
    }
});

invisibleBox.addEventListener("click", toggleMobileNav);
