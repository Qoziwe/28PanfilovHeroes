const toggleButton = document.querySelector(".toggle-button");
const content = document.querySelector(".content");

toggleButton.addEventListener("click", () => {
  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    // Если секция развёрнута, задвигаем обратно
    content.style.maxHeight = "0";
    toggleButton.textContent = "Показать карточки";
  } else {
    // Если секция скрыта, разворачиваем
    content.style.maxHeight = content.scrollHeight + "px";
    toggleButton.textContent = "Скрыть карточки";
  }
});
