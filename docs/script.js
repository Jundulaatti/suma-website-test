if(document.getElementById("nav-icon-open")) {
    document.getElementById("nav-icon-open").addEventListener("click", openMenu)
}

if(document.getElementById("nav-icon-close")) {
    document.getElementById("nav-icon-close").addEventListener("click", closeMenu)
}

function openMenu() {
    document.getElementById("nav-links-mobile").classList.add("active");
    document.getElementById("nav-icon-open").style.display = "none"
    document.getElementById("nav-icon-close").style.display ="block"
    document.body.classList.add("no-scroll")
}

function closeMenu() {
    document.getElementById("nav-links-mobile").classList.remove("active");
    document.getElementById("nav-icon-open").style.display = "block";
    document.getElementById("nav-icon-close").style.display = "none";
    document.body.classList.remove("no-scroll")
}

