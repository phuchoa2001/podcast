
const Open = document.querySelector(".header__MenuMobile");
const Close = document.querySelector(".header__delete");
const Navbar = document.querySelector(".header__navbar");
Open.onclick = function () {
    Navbar.style = "right : 0px";
}
Close.onclick = function () {
    Navbar.style = "right : -100%";
}
// pricing__item 
const pricinItem = document.querySelectorAll(".pricing__item");
for (let i = 0; i < pricinItem.length; i++) {
    const item = pricinItem[i];
    item.onclick = function () {
        document.querySelector(".pricing__item.active").classList.remove("active");
        this.classList.add("active");
    }
}