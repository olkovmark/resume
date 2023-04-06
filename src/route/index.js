const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {})
})

const fullname = 'Mark Olkov'
const position = 'Junior Fullstack Developer'
const salary = '600$ в місяц'
const adress = 'Третя планет від сонця'
const social = [
  {
    href: 'mailto:dmytro@mail.com',
    text: 'dmytro@mail.com',
  },
  {
    href: 'tel:+380670000123',
    text: '+380670000123',
  },
  {
    href: 'https://www.linkedin.com/in/dmytro-test',
    text: 'LinkedIn',
  },
]
const header = {
  fullname,
  position,
  salary,
  adress,
}

router.get('/summary', function (req, res) {
  res.render('summary', {
    header,
    social,
    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },
  })
})
router.get('/skills', function (req, res) {
  res.render('skills', {
    header,
    social,
    main: {
      skills: [
        { name: 'HTMl', point: 10, isTop: true },
        { name: 'Handlebars', point: 10, isTop: true },
        { name: 'VS CODE', point: 9, isTop: false },
        { name: 'Terminal', point: 9 },
        { name: 'Next.js', point: 0 },
        { name: 'PHP', point: null },
      ],
      hobbies: [
        {
          name: 'Подорожувати крізь простір та час в Будці',
          isMain: false,
          isTrue: false,
        },
        {
          name: 'Керувати масонами',
          isMain: false,
          isTrue: false,
        },
        {
          name: 'Дайвінг',
          isMain: true,
          isTrue: true,
        },
        {
          name: 'Сноубордінг',
          isMain: false,
          isTrue: true,
        },
        {
          name: 'Підземелля та Дракони',
          isMain: false,
          isTrue: true,
        },
      ],
    },
  })
})
router.get('/education', function (req, res) {
  res.render('education', {
    header,
    social,
    main: {
      educations: [
        { name: 'ITbrains', isEnd: false },
        { name: 'Школа', isEnd: true },
        { name: 'КПЛзПВФП', isEnd: true },
        { name: 'НАУ', isEnd: true },
      ],
      certificates: [
        { name: 'Рицарь круглого стола', id: 12344123 },
        { name: 'Великий ОЗ', id: 414251234 },
        { name: 'Джедай', id: 414251234 },
      ],
    },
  })
})

router.get('/works', function (req, res) {
  res.render('works', {
    layout: 'big',
    header,
    social,
    main: {
      works: [
        {
          position: 'ITbrains',
          company: {
            name: 'IT-Brains',
            url: 'https://google.com',
          },
          duration: {
            from: '10.10.2002',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://google.com',
              about:
                'Airbnb competitor. High-load application for searching apartments',
              stacksAmount: 3,
              stacks: ['React.js', 'HTML / CSS', 'Nodejs'],
              awardsAmount: 1,
              awards: [
                'app crashed - waiting for file changes before starting...',
              ],
            },
          ],
        },
      ],
    },
  })
})

module.exports = router
