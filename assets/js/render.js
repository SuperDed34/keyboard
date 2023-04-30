let body = document.querySelector('body');
console.log(body);

document.body.onload = addElement;

function addElement() {
  
  let header = document.createElement("div");
  header.classList.add("header");

  let headerH1 = document.createElement("h1");
  headerH1.classList.add("header__h1");
  headerH1.textContent = "RSS Virtual Keyboard";


  let textPole = document.createElement("textarea");
  textPole.classList.add("header__textarea");


  let KeyboardWrapper = document.createElement("div");
  KeyboardWrapper.classList.add("keyboard");


  let firstRow = document.createElement("div");
  firstRow.classList.add("keyboard__keys");

  let secondRow = document.createElement("div");
  secondRow.classList.add("keyboard__keys");

  let thridRow = document.createElement("div");
  thridRow.classList.add("keyboard_keys");

  let fourRow = document.createElement("div");
  fourRow.classList.add("keyboard_keys");
  
  let fiveRow = document.createElement("div");
  fiveRow.classList.add("keyboard_keys");

  let keyboardFrames = document.querySelectorAll(".keyboard__keys");

  function addKeys(row) {
    let counter = 0;
    let rows = 0;
    if (row === firstRow) {
      counter = 13;
      rows = 0;
    } else if (row === secondRow) {
      counter = 14;
      rows = 1;
    } else if (row === thridRow) {
      counter = 12;
      rows = 2;
    } else if (row === fourRow) {
      counter = 12;
      rows = 3;
    } else if (row === fiveRow) {
      counter = 8;
      rows = 4;
    }


    for (let i = 0; i < counter ; i++){
      let newKey = document.createElement("div");
      newKey.classList.add("keyboard__key");
      console.log(counter);
      console.log(keyboardFrames);

      let keyLayer = keyboardFrames[rows];
      console.log(keyLayer);
      keyLayer.appendChild(newKey);
    }
  }

  addKeys(firstRow);
  addKeys(secondRow);
  addKeys(thridRow);
  addKeys(fourRow);
  addKeys(fiveRow);

  let footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Клавиатура создана в операционной системе Windows Для переключения языка комбинация: левые ctrl+alt";


  body.appendChild(header);
  header.appendChild(headerH1);
  header.appendChild(textPole);

  body.appendChild(KeyboardWrapper);
  KeyboardWrapper.appendChild(firstRow);
  KeyboardWrapper.appendChild(secondRow);
  KeyboardWrapper.appendChild(thridRow);
  KeyboardWrapper.appendChild(fourRow);
  KeyboardWrapper.appendChild(fiveRow);

  body.appendChild(footer);

}