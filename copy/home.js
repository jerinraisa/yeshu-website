const copy = {
  navbar: {
    aboutMe: {
      title: "About Me",
    },
    experience: {
      title: "Experience",
    },
    project: {
      title: "Projects",
    },
    resume: {
      title: "Resume",
      link: "https://drive.google.com/file/d/1FQ5w-bp3kQ4Q4yY3b_HIJrRCNZEoXmnS/view",
    },
  },
  hero: {
    title: "Hi, I’m <em>Yeshu Jain</em> 👋🏼",
    blurb:
      "I’m a software developer with an interest in Artificial Intelligence and Embedded Systems.",
  },
  aboutMe: {
    title: "Here’s a bit about me",
    blurb:
      "Currently, I’m studying <em>Computer Engineering</em> at the <em>University of Waterloo</em>. This past fall, I’ve been interning as a Software Engineer at Intel, working on their FPGA based Deep Learning Accelerator. I’ll be graduating in Winter 2022.<br/><br/>For the last few years of my undergrad, I’ve been on the <em>Dean’s Honours List</em>. I also have an affinity for research, as I’ve worked as a Research Assistant under Professor Wojciech Golab in Winter 2019. Here I used numerical analysis to estimate the total energy consumption used by a household. In my freetime, I enjoy reading Fantasy Fiction such as the <em>Lord of the Rings</em> series, and playing board games with friends. Reach out if you want to hear more about my interests, research, or board game suggestions.",
  },
  experiences: {
    title: "Some of my recent experiences",
    experienceContent: {
      watonomous: {
        title: "Watonomous — Software Developer",
        description:
          "I am working on vehicle localization in the Path Planning Team for Watonomous. Currently working towards the year 4 competition conducted by SAE. I used Kalman filters in a ROS node to fuse sensor data and get a better estimate for vehicle's position and orientation.",
      },
      intel: {
        title: "Intel — Software Developer Intern/Co-op",
        description:
          "This past fall, I was part of the deep learning accelerator team at intel. As part of the team, I got to develop a compiler for AI acceleration on FPGAs. I also created a new CI/CD pipeline for the team to help maintain an error-free branch.",
      },
      globe: {
        title: "The Globe and Mail — Data Engineering Intern/Co-op",
        description:
          "As a Data Engineering Intern at The Globe and Mail, I worked with the Sophi team. I developed a sandbox pipeline using docker-compose and localstack to test code changes locally before deploying to aws. I also worked on a cron job to back up data from postgres database to s3 buckets.",
      },
      mindbeacon: {
        title: "Mindbeacon — Data Scientist Intern/Co-op",
        description:
          "At Mindbeacon, I worked as a Data Scientist. I built a classifier using TensorFlow to classify streaming client messages with a 65% accuracy (not bad for my first time :P) . Also engineered an API using Scala.js to evaluate user-defined logic statements with client information.",
      },
    },
  },
  projects: {
    title: "Some of my recent projects",
    projectContent: {
      hairMeOut: {
        title: "Hair Me Out — Hack the North",
        description:
          "For Hack the North 2020, we built a web app that allows people to log in using Facebook and then determines the face shape of a person. Once the face shape is determined, it recommends one of the trendy fashionable hairstyles for the user to try to get them tinder matches.",
      },
      riscV: {
        title: "RISC-V Processor Architecture  — Academic Course: ECE 320",
        description:
          "For my Computer Architecture course at University of Waterloo (ECE 320), we built a 5 stage RISC-V pipeline in Verilog. It supported all 32 bit RISC-V instructions including Branches and Jumps.",
      },
      controller: {
        title: "XY Platform Motion Controller — Academic Course: ECE 298",
        description:
          "For our Instrumentation and Prototyping Laboratory, we designed a XY platform controller that took X-Y coordinates through a keyboard input and rotated stepper motors to move to the given coordinates. Designed a schematic and PCB using diptrace for the same.",
      },
    },
  },
  footer: {
    text: "Thanks for coming by, if you’re interested in hearing more about my work, interests, or simply nerd out about Lord of the Rings, check out my <a href='https://ca.linkedin.com/in/yeshu-jain/' target='_blank'>Linkedin</a>, <a href='https://github.com/yeshuj/' target='_blank'>Github</a>, or feel free to <a href='mailto:y5jain@uwaterloo.ca?Subject=Dope Website%20🌊!'>email</a> me! 👋🏼",
  },
  scrollBack: {
    text: "Scroll back to the top",
  },
};

export default copy;
