export const Profile = {
    home: {
        title: "Hi, I'm Web Developer",
        presentation: "My name is Josué Pacheco",
        skills: ['Javascript', 'NodeJS', 'Angular2+', 'SQL', 'SCSS', 'Java', 'React'],
        links: { linkedin: 'https://www.linkedin.com/in/alexander-josue-pacheco/', github: 'https://github.com/PcaJosue', email: 'pca.josue@gmail.com' }

    },
    about: {
        skills: [
          { name: 'Angular 2+', level: 100 },
          { name: 'Javascript', level: 100 },
          { name: 'NodeJs', level: 80 },
          { name: 'Java', level: 60 },
          { name: 'SCSS', level: 90 },
          { name: 'HTML', level: 100 },
          { name: 'SQL', level: 70 },
          { name: 'no SQL', level: 70 },
          { name: 'React', level: 60 },
          { name: 'React Natvie', level: 60 }
        ]
    },
    projects: [
      {
          title: 'Curriculum Vitae App',
          subtitle: 'Personal Project',
          description: "Create Your Future with Our Professional Resumes in our APP, To create an effective CV, it's important to tailor it to the job you are applying for. This means including relevant keywords and phrases that match the job description. Using clear, concise language and bullet points can also make your CV easier to read and understand.",
          tools: ['Angular', 'Typescript', 'SCSS', 'NGRX'],
          image: { src: 'assets/images/cv.png', url: 'https://theqoder.com/cv/' },
          links: { github: 'https://github.com/PcaJosue/cv_app', site: 'https://theqoder.com/cv/' }
      },
      {
        title: 'Pomodoro',
        subtitle: 'Personal Project',
        description: 'The Pomodoro Technique is a time management method that can be used for any task. For many, time is an enemy.The anxiety produced by "clock ticks," especially if you have a deadline, leads to inefficient work and study habits that in turn lead to procrastination.',
        tools: ['Angular', 'Typescript', 'SCSS', 'NGXS'],
        image: { src: 'assets/images/pomodoro.png', url: 'https://pcajosue.github.io/pomodoro/' },
        links: { github: 'https://github.com/PcaJosue/pomodoro', site: 'https://pcajosue.github.io/pomodoro/' }
      },
      {
        title: 'Kanban',
        subtitle: 'Personal Project',
        description: 'The Kanban methodology is implemented by means of Kanban boards. It is a visual method of project management that allows teams to visualize their workflows and workload.On a Kanban board, work is displayed on a project in the form of a board organized by columns.Traditionally, each column represents a stage of the work.',
        tools: ['Angular', 'Typescript', 'SCSS', 'NGRX'],
        image: { src: 'assets/images/kanban.png', url: 'https://pcajosue.github.io/kanban-app/' },
        links: { github: 'https://github.com/PcaJosue/kanban-app', site: 'https://pcajosue.github.io/kanban-app/' }
      },
      {
        title: 'Meal App',
        subtitle: 'Personal Project',
        description: 'Website where you can find various food recipes, categorized by regions and types of food.',
        tools: ['Angular', 'API-REST', 'Typescript', 'SCSS', 'Jasmine', 'StoryBook'],
        image: { src: 'assets/images/mealApp.png', url: 'https://pcajosue.github.io/meal-app/' },
        links: { github: 'https://github.com/PcaJosue/meal-app', site: 'https://pcajosue.github.io/meal-app/' }
      },
      {
          title: 'Weather App',
          subtitle: 'Personal Project',
          description: 'A challenge from devchallenges.io, whose goal is to build a web application to display weekday weather information for different locations.',
          tools: ['Angular', 'API-REST', 'Typescript', 'SCSS', 'Jasmine', 'StoryBook'],
          image: { src: 'assets/images/weather.png', url: 'https://github.com/PcaJosue/weather-app' },
          links: { github: 'https://github.com/PcaJosue/weather-app' }
      }

    ],
    works: [
        {
            position: 'Fullstack Developer',
            name: 'Rumzer LLC',
            startDate: new Date('02/01/2021'),
            endDate: null,
            url: 'https://rumzer.com/',
            functions: [
              "Designing and architecting efficient and scalable software solutions",
              "Developing various UI components to effectively present desired functionality",
              "Analyzing requirements, designing solutions, and implementing them accordingly",
              "Building and managing required APIs to facilitate seamless integration",
              "Conducting teammate code reviews and providing leadership guidance",
              "Troubleshooting and optimizing software systems to address issues and improve performance",
              "Performing ongoing maintenance and continuous improvement of software applications",
              "Conducting research and staying updated with the latest industry trends and advancements"
            ]

        },
        {
            position: 'Technical Consultant',
            name: 'Kruger Corporation',
            startDate: new Date('10/01/2018'),
            endDate: new Date('12/01/2019'),
            url: 'https://krugercorp.com/',
            functions: [
              'Developed web applications using Angular for frontend and Java for backend.',
              'Conducted maintenance and updates on web applications to ensure optimal performance and functionality.',
              'Collaborated effectively with cross-functional teams in project development, fostering efficient communication and achieving project goals.',
              'Performed rigorous testing and meticulous debugging to identify and resolve issues, ensuring the delivery of high-quality software.',
              'Provided valuable technical support, assisting team members and end-users with technical inquiries and troubleshooting.',
              'Demonstrated a proactive approach to problem-solving through thorough research and analysis, leading to effective resolutions.'
            ]
        },
        {
            position: 'Junior Developer',
            name: 'Frontera Global s.a.',
            startDate: new Date('08/01/2018'),
            endDate: new Date('10/01/2018'),
            url: 'http://www.fronteraglobal.com/',
            functions: [
              "Developed web applications using Angular and Java for backend",
              "Performed maintenance and updates on web applications",
              "Collaborated in project development",
              "Conducted testing and debugging activities",
              "Provided technical support",
              "Conducted research and problem-solving"
            ]
        },
        {
            position: 'Intern',
            name: 'Ministry of Industries and Productivity',
            startDate: new Date('02/01/2017'),
            endDate: new Date('12/31/2017'),
            url: 'https://www.industrias.gob.ec/',
            functions: [
              "Conducted functionality tests to ensure the quality and proper functioning of applications",
              "Performed installation and configuration of Linux computers for development environments",
              "Developed reports to present and analyze data for business purposes",
              "Created MVC web applications using JavaEE and PrimeFaces framework",
              "Collaborated with team members to gather requirements and implement desired functionalities",
              "Assisted in the optimization and improvement of existing web applications",
              "Participated in code reviews and provided constructive feedback",
              "Engaged in continuous learning and professional development to stay updated with the latest web development trends and technologies"
            ]
        }
    ],
    contact: {
        email: 'pca.josue@gmail.com'
    }
}
