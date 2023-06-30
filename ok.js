function scrollToSection() {
    // get the element to scroll to by its ID
    var section = document.getElementById("projects");
  
    // scroll to the element using the scrollIntoView method
    section.scrollIntoView({ behavior: "smooth" });
}