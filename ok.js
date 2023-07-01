function scrollToProjects() {
    // get the element to scroll to by its ID
    var section = document.getElementById("projects");
  
    // scroll to the element using the scrollIntoView method
    section.scrollIntoView({ behavior: "smooth" });
}

function scrollToHome() {
    // get the element to scroll to by its ID
    var section = document.getElementById("Home-page");
  
    // get the position of the section from the top of the page
    var sectionPosition = section.getBoundingClientRect().top;
  
    // scroll to the element using the scrollIntoView method with an offset of 300px from the top
    window.scroll({
      top: sectionPosition + window.pageYOffset - 300,
      left: 0,
      behavior: "smooth",
    });
  }

  function goTocontact() {
    window.location.href = "D:\Projects\protefolie\contact-me\contact.html";
  }