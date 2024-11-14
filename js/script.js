document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    // Определение целевого элемента и позиции с учетом смещения
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    // Прокрутка с учетом смещения в 59 пикселей
    const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 59;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
  // Получаем элементы бургер-кнопки и меню
  const burger = document.getElementById("header__burger");
  const menu = document.getElementById("menu");

  // Добавляем обработчик клика на бургер-кнопку
  burger.addEventListener("click", () => {
    // Переключаем классы для показа меню и анимации бургер-кнопки
    menu.classList.toggle("active");
    burger.classList.toggle("open");
  });

  document.querySelectorAll(".faq-question").forEach(function (button) {
    button.addEventListener("click", function () {
      const faqItem = button.parentElement;
      const isOpen = faqItem.classList.contains("active");

      // Закрываем все открытые элементы
      document.querySelectorAll(".faq-item").forEach(function (item) {
        item.classList.remove("active");
      });

      // Если элемент не был открыт, открываем его
      if (!isOpen) {
        faqItem.classList.add("active");
      }
    });
  });

  // Получаем форму и элемент сообщения
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  // Обработчик отправки формы
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Останавливаем стандартное поведение отправки

    const emailInput = form.elements["email"];

    // Проверяем валидность email
    if (emailInput.checkValidity()) {
      // Если email валиден, показываем сообщение
      successMessage.style.display = "block";
      form.reset(); // Сбрасываем форму после отправки
    } else {
      // Если email не валиден, показываем сообщение браузера
      emailInput.reportValidity();
    }
  });
});
