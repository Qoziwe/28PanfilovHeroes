// Данные массива
const people = [
  { id:0, name: "Иван Иванов", age: 25, bio: "Преподаватель математики." },
  { id:1, name: "Мария Петрова", age: 30, bio: "Преподаватель истории." },
  { id:2, name: "Алексей Сидоров", age: 40, bio: "Директор колледжа." },
  { id:3, name: "ЛЕВА ЕГОРИН", age: 4039, bio: "ахует ькакой крутой чел"}
];

// Контейнер для карточек
const bioContainer = document.getElementById("bioContainer");

// Функция для создания карточек
function renderCards(data) {
  data.forEach(person => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
          <h2>${person.name}</h2>
          <p><strong>Возраст:</strong> ${person.age}</p>
          <p><strong>Биография:</strong> ${person.bio}</p>
      `;
      bioContainer.appendChild(card);
  });
}

// Вызов функции для рендера
renderCards(people);
