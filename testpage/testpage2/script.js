// Пример массива словарей
const data = [
  {
    name: "Alice",
    title: "Engineer",
    birthdate: "1990-01-01",
    birthplace: "London",
    bio: "Loves coding.",
  },
  {
    name: "Bob",
    title: "Artist",
    birthdate: "1985-05-12",
    birthplace: "Paris",
    bio: "Enjoys painting.",
  },
  {
    name: "Charlie",
    title: "Doctor",
    birthdate: "1992-11-30",
    birthplace: "New York",
    bio: "Helps people.",
  },
];

// Функция для поиска значений
function findValueInObjects(data, inputValue) {
  const indices = [];
  data.forEach((item, index) => {
    // Проверяем, есть ли значение в любом поле объекта
    const values = Object.values(item).map(String); // Преобразуем все значения в строки
    if (values.some((value) => value.includes(inputValue))) {
      indices.push(index); // Добавляем индекс в массив
    }
  });
  return indices;
}

// Логика обработки событий
document.getElementById("searchButton").addEventListener("click", () => {
  const inputValue = document.getElementById("searchInput").value.trim(); // Получаем значение из инпута
  const resultElement = document.getElementById("result");

  if (!inputValue) {
    resultElement.textContent = "Введите значение для поиска!";
    return;
  }

  const result = findValueInObjects(data, inputValue);

  // Выводим результат
  if (result.length > 0) {
    resultElement.textContent = `Значение найдено в словарях с индексами: ${result.join(
      ", "
    )}`;
  } else {
    resultElement.textContent = "Значение не найдено.";
  }
});
