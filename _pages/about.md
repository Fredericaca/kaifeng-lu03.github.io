---
layout: about
title: About
permalink: /
subtitle: ""

profile:
  align: right
  image: profile_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p class="location-line mb-2">
      <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
      <span class="sr-only">Location:</span> Rochester, NY
    </p>

    <p class="time-line mb-2">
      <i class="fa-solid fa-clock" aria-hidden="true"></i>
      <span id="zone-time"></span>
    </p>

    <p class="college-line mb-2">
      <i class="fa-solid fa-building-columns aria-hidden="true""></i>
      <span class="sr-only">Location:</span> University of California, Berkeley
    </p>

    <p class="email-line mb-2">
      <i class="fa-solid fa-envelope aria-hidden="true""></i>
      klu15 at u dot rochester dot edu
    </p>

    <p class="github-line mb-2">
      <i class="fa-brands fa-github" aria-hidden="true"></i>
      <a href="https://github.com/kaifeng-lu03" target="_blank" rel="noopener">Github</a>
    </p>

    <p class="linkedin-line mb-2">
      <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
      <a href="https://www.linkedin.com/in/kaifeng-lu-a92b822a1/" target="_blank" rel="noopener">LinkedIn</a>
    </p>

    <script>
      const TZ_CHINA       = 'Asia/Shanghai';     // Mainland China
      const TZ_ROCHESTER   = 'America/New_York';  // Rochester, NY
      const TZ_BERKELEY    = 'America/Los_Angeles'; // Berkeley, CA


      const CHOSEN_TZ = TZ_ROCHESTER;  // ← set to the zone you want

      function tick() {
        const now = new Date();
        document.getElementById('zone-time').textContent =
          new Intl.DateTimeFormat('en-US', {
            timeZone: CHOSEN_TZ,
            hour:     '2-digit',
            minute:   '2-digit',
            hour12:   false,
            timeZoneName: 'short'   // gives “EST”, “CET”, “PDT”, etc.
          }).format(now);
      }

      tick();                  // first render
      setInterval(tick, 60000);  // update every minute
    </script>



selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 5 # leave blank to include all the blog posts
---

Hi! I an undergraduate student in Mathematics doubling Computer Science who currently studies at the [University of Rochester](https://www.rochester.edu/) and will transfer to [UC Berkeley](https://math.berkeley.edu/home/) this fall. 

I am currently working as an undergraduate research assistant at [professor Kang Jian](https://jiank2.github.io/)'s lab. I have broad interests in **deep learning** and **information retrieval**, especially on **music understanding** and **computer vision**.

You can find my full **CV** here: [html](/cv/) \| [pdf](http://kaifeng-lu03.github.io/assets/pdf/Kaifeng%20Lu%20Resume_Feb20_2025.pdf)

***I am actively looking for undergraduate research assistant position in this summer either remote or in-person. Please email me if you are interested.***

### Visitor's Map

<div class="visitor-map my-4" 
     style="width:350px;margin:2rem 0;float:left;">
  <script id="clustrmaps" 
          type="text/javascript"
          src="//clustrmaps.com/map_v2.js?d=nN01yYaUtrDbpPHi2jfaZHBlIX-Fbh2pSdbV7x3Ej-A&cl=ffffff&w=350">
  </script>
</div>