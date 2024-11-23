// Массив с данными карточек
const cardsData = [
  { title: "Карточка 1", description: "Это описание первой карточки." },
  {
    title: "Карточка 2",
    description: "Это описание второй карточки с ключевым словом.",
  },
  { title: "Карточка 3", description: "Описание третьей карточки." },
  { title: "Карточка 4", description: "Ключевое слово в этой карточке." },
];

// Функция для отображения карточек
function displayCards(cards) {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = ""; // Очистить контейнер перед добавлением новых карточек
  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `<h3>${card.title}</h3><p>${card.description}</p>`;
    container.appendChild(cardElement);
  });
}

// Функция для фильтрации карточек
function filterCards() {
  const keyword = document.getElementById("keyword").value.toLowerCase();
  const filteredCards = cardsData.filter(
    (card) =>
      card.title.toLowerCase().includes(keyword) ||
      card.description.toLowerCase().includes(keyword)
  );
  displayCards(filteredCards);
}

// Слушатель события на кнопку фильтрации
document.getElementById("filterBtn").addEventListener("click", filterCards);

// Изначально отображаем все карточки
displayCards(cardsData);
