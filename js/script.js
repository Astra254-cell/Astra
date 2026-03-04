alert("This is the javascript connectivity");

//variables
//variable is a container or variables are memory locations which hold values

//let a = 3;//integer datatype
//let b = "amaka"; //string datatype

//let c = false;//boolean

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});
