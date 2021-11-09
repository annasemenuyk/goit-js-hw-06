// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
//(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
//В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const refs = {
    inputRangeControl : document.querySelector("#font-size-control"),
    inputText : document.querySelector("#text")
};
    const inputFontSizeControl = (event) => {
        refs.inputText.style.fontSize = `${refs.inputRangeControl.value}px`;
  };
  refs.inputRangeControl.addEventListener("input", inputFontSizeControl);