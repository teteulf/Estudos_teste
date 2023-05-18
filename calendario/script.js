function onMouseOverOption(imagePath, Text) {
  const image = document.querySelector("#imagem");
  const result = document.querySelector("#texto");
  image.src = imagePath;
  image.style.display = "block";

  result.innerHTML = Text;
}

document.addEventListener("DOMContentLoaded", function () {
  const seletor = document.querySelector("#select");
  seletor.addEventListener("change", function (event) {
    const selectedOption = this.options[this.selectedIndex];
    const imagePath = selectedOption.getAttribute("data-image");
    const text = selectedOption.getAttribute("data-text");
    onMouseOverOption(imagePath, text);
  });

  const initialOption = seletor.options[seletor.selectedIndex];
  const imagePath = initialOption.getAttribute("data-image");
  const text = initialOption.getAttribute("data-text");
  onMouseOverOption(imagePath, text);
});
