let open = false;
function toggleMenuMobile() {
    const navigationMobile = document.getElementById("navigation");
    const header = document.getElementById("header");
    if (!open) {
        navigationMobile.classList.add("active");
        header.classList.add("active");
        open = true;
    } else {
        navigationMobile.classList.remove("active");
        header.classList.remove("active");
        open = false;
    }

}