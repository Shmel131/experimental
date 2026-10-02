const topics = {
  git: {
    title: "Git",
    short: "История изменений и работа в команде",
    what:
      "Git — это система контроля версий. Она позволяет сохранять историю изменений в проекте, возвращаться к прошлым версиям и работать нескольким людям над одним кодом без хаоса.",
    why:
      "В Data Science это важно, потому что эксперименты, модели, данные и скрипты часто меняются. Git помогает понять, что именно изменилось, не потерять рабочую версию и удобно делиться кодом с коллегами.",
    example: `git init
git add .
git commit -m "Add baseline model"
git checkout -b feature/new-approach
git push origin feature/new-approach`
  },
  "package-json": {
    title: "package.json",
    short: "Список зависимостей и скриптов проекта",
    what:
      "package.json — это файл конфигурации проекта в экосистеме Node.js. В нём описаны зависимости, скрипты запуска, название проекта и версия.",
    why:
      "Если у тебя команда запускает один и тот же проект на разных машинах, package.json помогает зафиксировать, какие библиотеки нужны, и какой командой запускать проект. Это намного проще, чем вручную помнить все зависимости.",
    example: `{
  "name": "ml-service",
  "scripts": {
    "dev": "node server.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}`
  },
  "gitignore": {
    title: ".gitignore",
    short: "Файлы, которые Git не должен отслеживать",
    what:
      ".gitignore — это список файлов и папок, которые не нужно загружать в репозиторий. Обычно туда добавляют данные, логи, .env, секреты, временные файлы и артефакты обучения.",
    why:
      "Иначе в репозиторий попадут лишние и иногда конфиденциальные данные. Это делает проект грязным, тяжёлым и потенциально небезопасным.",
    example: `node_modules/
__pycache__/
.env
*.log
data/raw/
models/checkpoints/`
  },
  api: {
    title: "API",
    short: "Интерфейс для общения между приложениями",
    what:
      "API — это набор правил, по которым программы общаются между собой. Сервисы отправляют запросы и получают ответы в формате JSON или XML.",
    why:
      "Модель машинного обучения часто запускается не как отдельный ноутбук, а как сервис. API нужен, чтобы веб-приложение, мобильное приложение или другой сервис могли отправить данные и получить предсказание.",
    example: `POST /predict
Content-Type: application/json

{
  "age": 32,
  "salary": 120000,
  "region": "Moscow"
}

Response:
{
  "prediction": "approved",
  "score": 0.91
}`
  },
  webhook: {
    title: "Webhook",
    short: "Автоматическое уведомление от сервиса",
    what:
      "Webhook — это способ, когда один сервис сам вызывает другой при наступлении события. Например, GitHub может отправить HTTP-сообщение о push или pull request в CI/CD-систему.",
    why:
      "Это удобно, когда нужно автоматически запускать тесты, сборку или деплой без ручного вмешательства. Webhooks особенно важны для автоматизации процессов.",
    example: `POST /deploy
{
  "event": "push",
  "repo": "ml-project",
  "branch": "main"
}`
  },
  docker: {
    title: "Docker",
    short: "Контейнеризация и переносимость",
    what:
      "Docker создаёт контейнеры — изолированные среды, в которых запускается приложение со всеми зависимостями. Всё, что нужно, упаковано в один образ.",
    why:
      "Это решает проблему: у тебя всё работает локально, но на сервере или у коллеги — нет. Docker делает запуск одинаковым в любой среде.",
    example: `FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]`
  },
  "ci-cd": {
    title: "CI/CD",
    short: "Автоматизация тестов и развёртывания",
    what:
      "CI (Continuous Integration) — это автоматический запуск проверок после каждого коммита. CD (Continuous Delivery / Deployment) — автоматизация доставки и релиза приложения.",
    why:
      "Автоматизация снижает риск ошибок, уменьшает ручную работу и даёт возможность быстро выкатывать новые версии продукта.",
    example: `name: CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pytest
      - run: docker build -t app .`
  }
};

const topicGrid = document.getElementById("topic-grid");
const detailTitle = document.getElementById("detail-title");
const detailWhat = document.getElementById("detail-what");
const detailWhy = document.getElementById("detail-why");
const detailExample = document.getElementById("detail-example");
const quizFeedback = document.getElementById("quiz-feedback");

function renderTopics() {
  const entries = Object.entries(topics);

  topicGrid.innerHTML = entries
    .map(
      ([key, value]) => `
        <button class="topic-button active" data-topic="${key}">
          <span class="topic-tag">${key === "ci-cd" ? "DevOps" : "concept"}</span>
          <h4>${value.title}</h4>
          <p>${value.short}</p>
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".topic-button").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.topic;
      selectTopic(selected);
    });
  });
}

function selectTopic(key) {
  const topic = topics[key];
  if (!topic) return;

  detailTitle.textContent = topic.title;
  detailWhat.textContent = topic.what;
  detailWhy.textContent = topic.why;
  detailExample.textContent = topic.example;

  document.querySelectorAll(".topic-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.topic === key);
  });
}

function bindHeroButtons() {
  document.querySelectorAll("[data-topic]").forEach((button) => {
    const key = button.dataset.topic;
    if (topics[key]) {
      button.addEventListener("click", () => selectTopic(key));
    }
  });
}

function bindQuiz() {
  const options = document.querySelectorAll(".quiz-option");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((btn) => {
        btn.disabled = true;
        btn.classList.remove("correct", "wrong");
      });

      const isCorrect = option.dataset.correct === "true";

      if (isCorrect) {
        option.classList.add("correct");
        quizFeedback.textContent = "Верно! Зависимости и среда должны быть зафиксированы — это сохраняет воспроизводимость проекта.";
      } else {
        option.classList.add("wrong");
        const correct = [...options].find((btn) => btn.dataset.correct === "true");
        correct.classList.add("correct");
        quizFeedback.textContent = "Не совсем. Важно фиксировать зависимости и среду, чтобы проект запускался одинаково везде.";
      }
    });
  });
}

renderTopics();
selectTopic("git");
bindHeroButtons();
bindQuiz();
