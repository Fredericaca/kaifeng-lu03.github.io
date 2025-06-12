// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of cool stuff.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "A visual notebook of the moment that shapes me",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "post-i-just-create-my-first-personal-website",
        
          title: "I just create my first personal website!",
        
        description: "Github Pages + al-folio template + Local development on Docker = ?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/projects/2025/initial-post/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "gallery-foothill-berkeley",
          title: 'Foothill Berkeley',
          description: "with my homie Xiang",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/berkeley-foothill/";
            },},{id: "gallery-dmst101-at-chimney-bluffs-state-park",
          title: 'DMST101 at Chimney Bluffs State Park',
          description: "with Harry gg, TX gg, and Wenbo gg",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/ontario-lake.md/";
            },},{id: "news-a-paper-that-i-participated-in-has-been-submitted-to-neuripr2025",
          title: '🔥 A paper that I participated in has been submitted to NeurIPR2025!',
          description: "",
          section: "News",},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%6C%75%31%35@%75.%72%6F%63%68%65%73%74%65%72.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kaifeng-lu03", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kaifeng-lu-a92b822a1", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zhihu.com/people/san-lian-tao-fen-da-xue-qin-jiao-shou", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
