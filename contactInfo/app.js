function copyToClipboard() {
    // Get the text value to copy
    var text = "LILXVG@gmail.com";
    var copDiv = document.getElementById("email");
    var copDiv2 = document.getElementById("copied");
    // Create a temporary input element
    var tempInput = document.createElement("input");
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Code to run if user is on a phone
        copDiv2.style.display="flex"
        copDiv2.style.color="#f6f6f6"
      } else {
        // Code to run if user is not on a phone
        copDiv2.style.display="none"
      }
    // Set the value of the temporary input element to the text value to copy
    tempInput.setAttribute("value", text);
  
    // Append the temporary input element to the document
    document.body.appendChild(tempInput);
    
    // Select the text in the temporary input element
    tempInput.select();
    
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    
    // Remove the temporary input element from the document
    document.body.removeChild(tempInput);

    var newDiv = "Copied To your Clipboard!";

    copDiv.textContent = newDiv;
    setTimeout(function() {
        copDiv.textContent = text;
        copDiv2.style.display="none"
    }, 1500);
  }