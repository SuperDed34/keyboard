let body = document.querySelector('body');

document.body.onload = addElement;

function addElement() {
  
  let header = document.createElement("div");
  header.classList.add("header");

  let headerH1 = document.createElement("h1");
  headerH1.classList.add("header__h1");
  headerH1.textContent = "RSS Virtual Keyboard";


  let textPole = document.createElement("textarea");
  textPole.classList.add("header__textarea");


  // Находим элемент, куда будем добавлять клавиатуру
  let keyboardContainer = document.createElement("keyboard");

  // Создаем клавиатуру
  let keyboardLayout = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\&#9650', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\&#9668', '\&#9660', '\&#9658', 'Ctrl']
  ];

  let rusKeyboardLayout = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\&#9650', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\&#9668', '\&#9660', '\&#9658', 'Ctrl']
  ];
  
  // Создаем элементы клавиатуры и добавляем их в контейнер
  for (let i = 0; i < keyboardLayout.length; i++) {
    let row = document.createElement('div');
    row.classList.add('keyboard-row');

    for (let j = 0; j < keyboardLayout[i].length; j++) {
      var key = document.createElement('div');
      key.classList.add('keyboard-key');
      key.innerHTML = keyboardLayout[i][j];
      if (key.textContent === 'Backspace' || key.textContent === 'CapsLock' || key.textContent === 'Shift') {
        key.style.width = '100px';
      } else if (key.textContent === 'Tab') {
        key.style.width = '44px';
      } else if (key.textContent === 'Enter') {
        key.style.width = '96px';
      } else if (key.textContent === 'Space') {
        key.style.width = '380px';
      }
      row.appendChild(key);
    }

    keyboardContainer.appendChild(row);
  }
  
  

  let footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Клавиатура создана в операционной системе Windows Для переключения языка комбинация: левые ctrl+alt";

  body.appendChild(header);
  header.appendChild(headerH1);
  header.appendChild(textPole);
  body.appendChild(keyboardContainer);
  body.appendChild(footer);

}