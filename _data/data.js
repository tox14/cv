export default {
  en: {
    title: 'CV - Portfolio',
    resume: 'Resume',
    name: 'Anton Chernookiy',
    position: 'Frontend Developer',
    profile_photo: '/assets/profile_photo.png',
    profile_photo_alt: 'Frontend Developer CV profile photo',
    contacts: [
      { label: 'P', text: '+375 29 991-40-17', href: 'tel:+375299914017' },
      {
        label: 'E',
        text: 'a.chernookiy@yandex.ru',
        href: 'mailto:a.chernookiy@yandex.ru',
      },
      {
        label: 'W',
        text: 'www.antonchernookiy.by',
        href: 'https://www.antonchernookiy.by',
      },
    ],
    location: {
      country: 'Belarus',
      city: 'Minsk',
    },
    about: {
      title: 'Profile',
      text: "Developing web interfaces is my hobby and my passion. I'm focused on quality and speed of development. I love doing pixel-perfect markup. I enjoy bringing the client's wishes and the designer's vision to life in real interfaces that people use.",
    },
    skills_label: 'Skills',
    experience_label: 'Experience',
    experience: [
      {
        company_name: 'Elinext',
        position: 'Frontend Engineer',
        period: '11.2019 - present',
        description:
          'I develop web applications for businesses in the public transportation and smart city management sectors. My work includes public transport management and monitoring, fare collection control, parking payment management and monitoring, as well as remote configuration and management of ticket vending machines (TVMs).<br/>I have experience developing applications for Ticket Vending Machines, working with both frontend and backend using React and Node.js (Express). I integrate Node.js with hardware devices, such as NFC readers and payment terminals. I actively participate in making technical decisions and selecting appropriate solutions.<br/>I introduced unit testing (Jest) and screenshot testing for components (Storybook), ensuring the most critical features in the project are covered by tests. Additionally, I implemented code linting and automatic formatting based on our code style using ESLint and Prettier, and set up CI/CD pipelines.<br/>I am also actively involved in code refactoring and conducting code reviews.<br/><br/><br/>',
        hook: '8 years of <br/>professional',
        skills: [
          'Git',
          'React',
          'HTML',
          'CSS',
          'Node.js',
          'JavaScript',
          'Webpack',
          'Vue.js',
          'Redux',
          'TypeScript',
        ],
      },
      {
        company_name: 'Advansys Ecommerce Solutions',
        position: 'Fullstack Developer',
        period: '01.2018 - 10.2019',
        description:
          'Developed websites for clients, including landing pages, corporate websites, and e-commerce stores. Built approximately 30 websites and web applications from scratch. Focused on reducing the development time for business features and improved multitasking skills. Maintained existing projects by resolving optimization issues and refactoring significant amounts of legacy code. Developed the core of a new corporate CMS to replace the existing one. Implemented features include:<ul><li>Authorization/authentication module;</li><li>Website page builder;</li><li>Customizable dashboard for displaying key metrics with charts and graphs;</li><li>Service booking/scheduling module with an interactive calendar.</li></ul>Onboarding and mentoring of junior colleagues.',
        hook: null,
        skills: [
          'Git',
          '.NET',
          'JavaScript',
          'HTML',
          'CSS',
          'SCSS/SASS',
          'Twitter Bootstrap',
          'jQuery',
          'PHP',
          'SQLite',
        ],
      },
    ],
    languages: {
      label: 'Languages',
      items: [
        { name: 'Russian', level: 'Native' },
        { name: 'English', level: 'Advanced' },
      ],
    },
    education: {
      label: 'Education',
      items: [
        {
          name: 'Baranavichy State University',
          period: '09.2013 - 07.2017',
          description:
            'Degree in Information Systems and Technologies.<br/>During my studies, I specialized in web development, deeply studying the processes of creating modern websites. As part of my graduation project, I successfully designed and developed a corporate website for an IT company. While implementing this project, I used a relevant technology stack, including the Webpack module bundler for resource optimization, JavaScript with the jQuery library for interactivity, the Sass preprocessor for structuring styles, and PHP for server-side logic. This experience allowed me to consolidate practical skills in the full development cycle, from architecture design to final deployment.',
        },
      ],
    },
  },
  ru: {
    title: 'CV - Портфолио',
    resume: 'Резюме',
    name: 'Антон Черноокий',
    position: 'Frontend-разработчик',
    profile_photo: '/assets/profile_photo.png',
    profile_photo_alt: 'Фронтенд-разработчик, фото в резюме',
    contacts: [
      { label: 'T', text: '+375 29 991-40-17', href: 'tel:+375299914017' },
      {
        label: 'E',
        text: 'a.chernookiy@yandex.ru',
        href: 'mailto:a.chernookiy@yandex.ru',
      },
      {
        label: 'C',
        text: 'www.antonchernookiy.by',
        href: 'https://www.antonchernookiy.by',
      },
    ],
    location: {
      country: 'Беларусь',
      city: 'Минск',
    },
    about: {
      title: 'Oбо мне',
      text: 'Разработка веб-интерфейсов - это моё хобби и моя страсть. Сосредоточен на качестве и скорости разработки. Люблю верстать в стиле pixel-perfect. Мне нравится воплощать желания заказчика и видение дизайнера в реальных интерфейсах, которыми пользуются люди.',
    },
    skills_label: 'Скилы',
    experience_label: 'Опыт',
    experience: [
      {
        company_name: 'Name of company',
        position: 'Frontend Developer',
        period: '2019 - present',
        description:
          "Developing web interfaces is my hobby and my passion. I'm focused on quality and speed of development. I love doing pixel-perfect markup. I enjoy bringing the client's wishes and the designer's vision to life in real interfaces that people use.",
        hook: '10 years of <br/>professional',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Next.js',
          'TypeScript',
          'Node.js',
          'Git',
        ],
      },
      {
        company_name: 'Advansys Ecommerce Solutions',
        position: 'Фронтенд-разработчик',
        period: '01.2018 - 10.2019',
        description:
          'Разработка сайтов для заказчиков: лендинги, сайты-визитки, интернет-магазины. C нуля разработано около 30 сайтов и веб-приложений. Работал над сокращением времени на разработку бизнес-фич и развивал навык многозадачности. Поддержка существующих проектов: решал задачи оптимизации и рефакторинга большого количества легаси-кода. Разработка core для новой корпоративной CMS на замену старой. Реализованные фичи:<ul> <li>Модуль авторизации/аутентификации;</li> <li>Конструктор страниц сайта;</li> <li>Настраиваемый дашборд для отображения важных метрик с диаграммами и графиками;</li> <li>Модуль бронирования / записи на услуги с интерактивным календарем.</li> </ul> <br/> Онбординг и менторство младших коллег.',
        hook: null,
        skills: [
          'Git',
          '.NET',
          'JavaScript',
          'HTML',
          'CSS',
          'SCSS/SASS',
          'Twitter Bootstrap',
          'jQuery',
          'PHP',
          'SQLite',
        ],
      },
    ],
    languages: {
      label: 'Языки',
      items: [
        { name: 'Русский', level: 'Нативный' },
        { name: 'Английский', level: 'A1' },
      ],
    },
    education: {
      label: 'Образование',
      items: [
        {
          name: 'Барановичский государственный университет',
          period: '09.2013 - 07.2017',
          description:
            'Специальность "Информационные системы и технологии".<br/>Во время обучения специализировался на веб-разработке, углубленно изучая процессы создания современных сайтов. В рамках дипломного проекта успешно спроектировал и разработал корпоративный веб-сайт для компании, работающей в сфере информационных технологий. При реализации этого проекта применял актуальный стек технологий, включая сборщик модулей Webpack для оптимизации ресурсов, JavaScript с использованием библиотеки jQuery для интерактивности, препроцессор Sass для структурирования стилей и PHP для серверной логики. Этот опыт позволил мне закрепить практические навыки полного цикла разработки от проектирования архитектуры до финального деплоя.',
        },
      ],
    },
  },
};
