function displayType (character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " are the drivers in the " + character.innerHTML + " Team for 2023 Formula1 season.");
  }