function validateForm() {
    let x = document.forms["myForm"].value;
    if (x == "") {
      alert("All information must be filled out");
      return false;
    }
  }