
// Mobile Navigation GOT IT FROM W3SCHOOLS
//https://www.w3schools.com/howto/howto_css_menu_icon.asp
const menuButton = document.querySelector(".container"); // Button 
const mobileMenuContent = document.getElementById("sidenav"); // menu content
const mobileMenuContainer = document.querySelector(".mobile-menu"); // div containing menu content for aria label
const overlay = document.querySelector(".overlay");

// 2. Define la función que manejará el clic
function toggleMobileMenu() {
    menuButton.classList.toggle("change");
    const isOpen = menuButton.classList.contains("change"); // verify is menu is open

    if (isOpen) {
        mobileMenuContent.classList.toggle("open");  // opens the menu
        overlay.classList.add("active"); // show the overlay
    } else {
        mobileMenuContent.style.width = "0"; // closes the menu
        overlay.classList.remove("active"); // hide the overlay
    }

    mobileMenuContainer.setAttribute("aria-expanded", isOpen); // set aria attribute to open
}

menuButton.addEventListener("click", toggleMobileMenu);

// closes the menu if the overlay is clicked
if (overlay) { // verifies if the overlay exists
    overlay.addEventListener("click", toggleMobileMenu); // reuses the toggleMobileMenu function to close
}