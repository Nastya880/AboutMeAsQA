const SKILL_MODALS = {
  qa: {
    title: 'QA-процессы',
    text: 'Системный подход к тестированию: проектирую тестовую модель, применяю техники тест-дизайна (классы эквивалентности, граничные значения, попарное тестирование), создаю тест-кейсы и баг-репорты. Практикую shift-left подход, практику 3 Амиго, практику с Acceptance bugs и zero-bug policy.',
    links: [
      { text: 'ISTQB — фундаментальные техники тест-дизайна', href: 'https://www.istqb.org' },
      { text: 'Статья про shift-left testing', href: 'https://www.atlassian.com/continuous-delivery/principles/shift-left-testing' },
    ],
  },
  auto: {
    title: 'Автоматизация',
    text: 'Пишу (преимуущественно с агентом), ревьюю и поддерживаю автотесты на Playwright (JavaScript/TypeScript) с применением паттерна Page Object Model. Использую Cucumber для BDD, Storybook для скриншотных тестов и моки/стабы API для изоляции тестов.',
    links: [
      { text: 'Playwright — документация', href: 'https://playwright.dev' },
      { text: 'Cucumber — BDD-фреймворк', href: 'https://cucumber.io' },
      { text: 'Page Object Model — паттерн', href: 'https://martinfowler.com/bliki/PageObject.html' },
    ],
  },
  api: {
    title: 'API и интеграции',
    text: 'Тестирую REST и GraphQL API: проверяю статус-коды, схемы ответов, авторизацию (OAuth, JWT), сессии и кеширование. Работаю с cURL, Swagger, T-Insomnia и Nitro для отладки запросов.',
    links: [
      { text: 'REST API — основы', href: 'https://restfulapi.net' },
      { text: 'GraphQL — документация', href: 'https://graphql.org' },
      { text: 'Swagger / OpenAPI', href: 'https://swagger.io' },
    ],
  },
  db: {
    title: 'Базы данных',
    text: 'Работаю с реляционными БД: пишу SQL-запросы (JOIN, UNION, EXCEPT, GROUP BY), тестирую данные в PostgreSQL и Redis (кэш). Понимаю ACID-свойства и транзакции для проверки консистентности.',
    links: [
      { text: 'PostgreSQL — документация', href: 'https://www.postgresql.org' },
      { text: 'SQL — обучающие материалы', href: 'https://www.w3schools.com/sql/' },
      { text: 'Redis — документация', href: 'https://redis.io' },
    ],
  },
  tools: {
    title: 'Инструменты и CI/CD',
    text: 'Веду задачи и документацию в Jira (JQL) и Confluence, использую Allure TestOps для отчётов, Git и GitLab CI для пайплайнов. Работаю с DevTools и логами (Sage/Kibana) для кроссплатформенного анализа.',
    links: [
      { text: 'Jira — документация', href: 'https://www.atlassian.com/software/jira' },
      { text: 'Allure TestOps', href: 'https://qameta.io' },
      { text: 'GitLab CI/CD', href: 'https://docs.gitlab.com/ee/ci/' },
    ],
  },
  soft: {
    title: 'Софт-скиллы',
    text: 'Внимательность к деталям, системное мышление и самостоятельность помогают находить нестандартные баги. Хорошо коммуницирую в команде и быстро обучаюсь новым инструментам.',
    links: [
      { text: 'Курс по soft skills', href: 'https://practicum.yandex.ru' },
    ],
  },
};

const initSkillModals = () => {
  const modal = document.querySelector('[data-skill-modal]');
  if (!modal) {
    return;
  }

  const modalTitle = modal.querySelector('.modal__title');
  const modalContent = modal.querySelector('[data-skill-modal-content]');
  const openButtons = document.querySelectorAll('[data-skill-open]');
  const closeElements = modal.querySelectorAll('[data-skill-close]');

  const buildContent = (data) => {
    const textP = document.createElement('p');
    textP.className = 'modal__text';
    textP.textContent = data.text;

    const list = document.createElement('ul');
    list.className = 'modal__links';
    data.links.forEach((link) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = link.text;
      li.appendChild(a);
      list.appendChild(li);
    });

    modalContent.innerHTML = '';
    modalContent.appendChild(textP);
    modalContent.appendChild(list);
  };

  const openModal = (key) => {
    const data = SKILL_MODALS[key];
    if (!data) {
      return;
    }
    modalTitle.textContent = data.title;
    buildContent(data);
    modal.hidden = false;
    document.body.classList.add('modal-open');
    modal.querySelector('[data-skill-close]').focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
  };

  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openModal(button.dataset.skillOpen);
    });
  });

  closeElements.forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
};

export {initSkillModals};