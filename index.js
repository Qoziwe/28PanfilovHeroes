// window.onload = function () {
//   console.log("ADad");
//   var top = document.getElementById("MembersList").offsetTop;
//   console.log(top);
//   window.scrollTo(0, top);
// };

const searchContainer = document.querySelector(".WP-SearchContainer");
const searchInput = document.querySelector(".WP-SearchInput");
const searchBtn = document.querySelector(".WP-SearchBtn");
const svgIcon = `<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="3vw" height="3vw" viewBox="0 0 128 128" style="fill: rgb(233, 233, 233)"><path d="M 52.349609 14.400391 C 42.624609 14.400391 32.9 18.1 25.5 25.5 C 10.7 40.3 10.7 64.399219 25.5 79.199219 C 32.9 86.599219 42.600391 90.300781 52.400391 90.300781 C 62.200391 90.300781 71.900781 86.599219 79.300781 79.199219 C 94.000781 64.399219 93.999219 40.3 79.199219 25.5 C 71.799219 18.1 62.074609 14.400391 52.349609 14.400391 z M 52.300781 20.300781 C 60.500781 20.300781 68.700391 23.399219 74.900391 29.699219 C 87.400391 42.199219 87.4 62.5 75 75 C 62.5 87.5 42.199219 87.5 29.699219 75 C 17.199219 62.5 17.199219 42.199219 29.699219 29.699219 C 35.899219 23.499219 44.100781 20.300781 52.300781 20.300781 z M 52.300781 26.300781 C 45.400781 26.300781 38.9 29 34 34 C 29.3 38.7 26.700391 44.800391 26.400391 51.400391 C 26.300391 53.100391 27.600781 54.4 29.300781 54.5 L 29.400391 54.5 C 31.000391 54.5 32.300391 53.199609 32.400391 51.599609 C 32.600391 46.499609 34.699219 41.799219 38.199219 38.199219 C 41.999219 34.399219 47.000781 32.300781 52.300781 32.300781 C 54.000781 32.300781 55.300781 31.000781 55.300781 29.300781 C 55.300781 27.600781 54.000781 26.300781 52.300781 26.300781 z M 35 64 A 3 3 0 0 0 32 67 A 3 3 0 0 0 35 70 A 3 3 0 0 0 38 67 A 3 3 0 0 0 35 64 z M 83.363281 80.5 C 82.600781 80.5 81.850781 80.800391 81.300781 81.400391 C 80.100781 82.600391 80.100781 84.499609 81.300781 85.599609 L 83.800781 88.099609 C 83.200781 89.299609 82.900391 90.6 82.900391 92 C 82.900391 94.4 83.8 96.700391 85.5 98.400391 L 98.300781 111 C 100.10078 112.8 102.39922 113.69922 104.69922 113.69922 C 106.99922 113.69922 109.29961 112.79961 111.09961 111.09961 C 114.59961 107.59961 114.59961 101.90039 111.09961 98.400391 L 98.300781 85.599609 C 96.600781 83.899609 94.300391 83 91.900391 83 C 90.500391 83 89.2 83.300391 88 83.900391 L 85.5 81.400391 C 84.9 80.800391 84.125781 80.5 83.363281 80.5 z M 91.900391 88.900391 C 92.700391 88.900391 93.5 89.200781 94 89.800781 L 106.69922 102.5 C 107.89922 103.7 107.89922 105.59922 106.69922 106.69922 C 105.49922 107.89922 103.6 107.89922 102.5 106.69922 L 89.800781 94.099609 C 89.200781 93.499609 88.900391 92.700391 88.900391 91.900391 C 88.900391 91.100391 89.200781 90.300781 89.800781 89.800781 C 90.400781 89.200781 91.100391 88.900391 91.900391 88.900391 z"></path></svg></span>`;

document.querySelector(".WP-SearchBtn").addEventListener("click", () => {
  const input = document
    .querySelector(".WP-SearchInput")
    .value.toLowerCase()
    .trim();

  if (input) {
    const elements = Array.from(document.querySelectorAll("body *"));
    const foundElement = elements.find((el) =>
      el.innerText?.toLowerCase().includes(input)
    );

    if (foundElement) {
      foundElement.style.outline = "2px solid red";
      setTimeout(() => (foundElement.style.outline = ""), 2000);
      foundElement.scrollIntoView({ behavior: "smooth", block: "center" });
      document.getElementById("ML-Container").style.maxHeight =
        content.scrollHeight + "px";
    } else {
      alert("Ничего не найдено.");
    }
  }
});

searchBtn.addEventListener("click", () => {
  if (!searchContainer.classList.contains("active")) {
    searchContainer.classList.add("active");
    searchInput.focus();
    searchBtn.innerHTML = "Search";
    searchBtn.style.backgroundColor = "#d41010";
    searchBtn.style.width = "6vw";
    searchBtn.style.height = "2.5vw";
  } else {
    searchContainer.classList.remove("active");
    searchBtn.innerHTML = svgIcon;
    searchBtn.style.backgroundColor = "rgba(202, 202, 202, 0)";
    searchBtn.style.width = "3vw";
    searchBtn.style.height = "3vw";
    searchInput.blur();
    setTimeout(() => {
      searchInput.value = "";
    }, 300);
  }
});

const MLButton = document.getElementById("ML-Button");
const content = document.getElementById("ML-Container");

MLButton.addEventListener("click", () => {
  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0";
    MLButton.innerHTML = "<h1>Развернуть</h1>";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    MLButton.innerHTML = "<h1>Свернуть</h1>";
  }
});

const MLResetButton = document.getElementById("ML-ResetButton");
const MLCCardsContainer = document.getElementById("ML-C-Cards");
const MLInput = document.getElementById("ML-Input");
const MLButtonSearch = document.getElementById("ML-ButtonSearch");
const cardsValues = `<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/Vasiliy-Klochkov.png"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Василий Георгиевич Клочков</h1>
    <p>8 марта 1911 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Локоть</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="./descriptions/Клочков-Василий.html">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/Ananyev-Nikolay.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Николай Яковлевич Ананьев</h1>
    <p>19 ноября 1912 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Сазановка</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/Grigoriy-Bezrodnyh.png"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Григорий Михеевич Безродных</h1>
    <p>24 февраля 1909 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Урыв-Покровка</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/Nikolay-Bolotov.png"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Николай Никанорович Болотов</h1>
    <p>1911 год</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Белашово</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/yakov-aleksandrovich.png"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Яков Александрович Бондаренко</h1>
    <p>1905 год</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>поселок <br />Миллерево</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/illarion-eomanovich.png"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Илларион Романович Васильев</h1>
    <p>5 ноября 1910 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Мунгат</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/ivan-dobrobabin.jpeg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Иван Евстафьевич Добробабин</h1>
    <p>8 июня 1913 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Перекоп</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/Petr-danilovich.png"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Петр Данилович Дутов</h1>
    <p>6 августа 1916 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Холмогоровка</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/petr-emcov.jpeg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Петр Кузьмич Емцов</h1>
    <p>14 мая 1909 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Георгиевка</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/Nursutbai-Esebulatov.png"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Нурсутбай Есебулатов</h1>
    <p>1913 год</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Джансугуров</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/Dmitriy-Kalenik.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Дмитрий Митрофанович Каленик</h1>
    <p>23 ноября 1910 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Стеценково</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/kozha.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Даниил Александрович Кожубергенов</h1>
    <p>1917 год</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p><br />Алма-Ата</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/konkin.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Григорий Ефимович Конкин</h1>
    <p>1911 год</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Покровка</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/kruchj.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Абрам Иванович Крючков</h1>
    <p>1910 год</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Плотава</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/maksimov.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Николай Гордеевич Максимов</h1>
    <p>5 июля 1911 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Мордовское</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/meetin.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Гавриил Степанович Митин</h1>
    <p>1908 год</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Устьянка</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/meetcheno.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Никита Андреевич Митченко</h1>
    <p>3 апреля 1910 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Нововладимировка</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/petrenko.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Григорий Алексеевич Петренко</h1>
    <p>22 ноября 1909 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Черныши</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/saen.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Мусабек Сенгирбаев</h1>
    <p>10 марта 1917 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>аул <br />Кзыл-Арык</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/trofim.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Николай Игнатьевич Трофимов</h1>
    <p>5 мая 1915 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>деревня <br />Киргизка</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/gtima.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Дмитрий Фомич Тимофеев</h1>
    <p>23 февраля 1907 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Мальцева Курья Бийского уезда</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/shad.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Иван Демидович Шадрин</h1>
    <p>17 июня 1913 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Плотниково</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/doi.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Дуйшенкул Шопоков</h1>
    <p>19 мая 1915 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>село <br />Шалта</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/shema.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Григорий Мелентьевич Шемякин</h1>
    <p>19 мая 1915 года</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>город <br />Пржевальск</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/shepetkov.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Иван Алексеевич Шепетков</h1>
    <p>1910 год</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>город <br />Пржевальск</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>
<div class="ML-C-Card">
<div class="ML-C-Name">
  <img
    src="./images/Cards-images/mosk.jpg"
    alt=""
    class="ML-C-N-Image"
  />
  <div class="ML-C-N-Text">
    <h1>Иван Васильевич Москаленко</h1>
    <p>1912 год</p>
  </div>
</div>
<div class="ML-C-Information">
  <div class="ML-C-I-Birthplace">
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
      fill="#000000"
      style="width: 1.5vw"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="red "
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>
      </g>
    </svg>
    <p>город <br />Георгиевка</p>
  </div>
  <button class="ML-C-I-Button">
    <a href="">Узнать больше</a>
  </button>
</div>
</div>`;

MLButtonSearch.onclick = function () {
  MLCCardsContainer.innerHTML = "";
};
MLResetButton.onclick = function () {
  MLCCardsContainer.innerHTML = cardsValues;
};
descriptionPage=function(n){
  localStorage.setItem('pageNumber', n);
  console.log(localStorage.getItem('pageNumber'))
  window.location.href="./descriptions/lecva.html"
}