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

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              c:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

router.get('/bio', function (req, res) {
  res.render('bio', {
    layout: 'bio',
    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})

module.exports = router
