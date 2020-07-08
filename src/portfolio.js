
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Samuel Hawkins",
  title: "Hi all, I'm Sam",
  subTitle: emoji("A passionate Software Developer and Artist interested in making the web a better place for everyone  I have experience building Web and Mobile applications using JavaScript, Python, ReactJs, nodeJs, Django, and Flask along with a handful of Databases and other frameworks, libraries, and  languages. I love clean and documented code and strive to keep structured and easy to read files on my machine. I got into software because I saw the potential to learn something new almost everyday of my life and because of how fast everything changes! I learn best when I have a solid team around it always helps!"),
  resumeLink: "https://drive.google.com/file/d/1o5ufbgmuqBalLr6TX58M4frtvc5xwy9W/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/samuelhhawkins",
  linkedin: "https://www.linkedin.com/in/sam-hawkins-a0b34117b/",
  gmail: "samuel.h.hawkins1@gmail.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Imersive",
      company: "General Assembly",
      companylogo: require("./assets/images/GA.png"),
      date: "March 2020 – June 2020",
      desc: "Immersive full time Software engineering and web development program. Fo"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY LARGER PERSONAL PROJECTS/CONCEPTS. CHECK THEM OUT CARONA INVADERS ON THE LEFT IS A FUN LITTLE  VANILLA JS GAME! ",
  projects: [
    {
      image: require("./assets/images/3D9B79D5-A2B9-47A1-A779-FB7DF6BAA932.jpeg"),
      link: "https://samuelhhawkins.github.io/project1/",
      txt: "Corona Invader— Space invaders copy cat with a CoronaVirus theme. Created using vanilla JS, HTML, CSS, p5JS"

    },
    {
      image: require("./assets/images/0CE88355-8738-4881-88B1-3B355C826D48.jpeg"),
      link: "https://partake-project2.herokuapp.com/",
      txt: "Partake— art share/trade website. Created using ReactJS, Js, NodeJS, Postgres, HTML, CSS, Heroku "

    },
    {
      image: require("./assets/images/BA719974-493F-4887-A4B5-0AB94764BF5B.jpeg"),
      link: "https://friend-hub.herokuapp.com/signup",
      txt: "FriendHub — Social media sharing website. Created using ReactJS, Js, mongoDB, HTML, CSS, Heroku"

    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Education And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "General Assembly SEI program",
      subtitle: "Completed jFull-stack software engineering immersive student in an intensive, 12 week, 450+ hour program focused on product development fundamentals and OOD programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of individual and group projects.",
      image: "https://ga-shop-production-herokuapp-com.global.ssl.fastly.net/assets/images/logo_1200_by_627_1QIVL.jpg",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/15uZwq22PkcQ3hRscuj_8XXO-6w1s1u5M/view?usp=sharing" },
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Reach Out to Me! ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(425) 638-3479",
  email_address: "samuel.h.hawkins@hotmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
