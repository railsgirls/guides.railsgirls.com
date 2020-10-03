function toggleMobileMenu() {
  var navbarList = document.getElementById("navbar-list");
  if (navbarList.style.height === "auto") {
    navbarList.style.height = "0";
  } else {
    navbarList.style.height = "auto";
  }
}
