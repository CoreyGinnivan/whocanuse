<p align="center">
    <img alt="WhoCanUse Logo" src="https://whocanuse.com/whocanuse_600.png" width="100" />
</p>
<h1 align="center">
  WhoCanUse.com
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/6a01d121-f24e-4c62-8fa6-b6fd95bf0cc4/deploy-status)](https://app.netlify.com/sites/whocanuse/deploys)
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors)

**What is WhoCanUse?**
<p>It's a tool that brings attention and understanding to how color contrast can affect different people with visual impairments.</p>

<p>The <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG)</a> covers a wide range of recommendations for making Web content more accessible. Just a tiny part of making the web more accessible is accommodating for those with a form of blindness or low vision.</p>
<p>The standard grading system is a great start, but I thought I'd try to humanize the people who are affected by the different grades.</p>

**What is WhoCanUse?**
<MediumText>Where did you get the info from?</MediumText>
<p>The percentages are sourced from both <a href="https://www.colour-blindness.com" target="_blank" rel="noopener noreferrer">colour-blindness.com</a> and <a href="https://www.visionaustralia.org/" target="_blank" rel="noopener noreferrer">Vision Australia</a>. P.S. You're both the best, thankyou ✌️</Text>

**Your maths is off, it doesn't add up to 100%...?**
<p>Good eyes! (haha) The population data provided are estimates for individual impairments, and don't cover the vast amount of visual impairments in the world. This is to give you not just an understanding of <strong>how</strong> color contrast affects different people but also <strong>who</strong> it can affect.</Text>

**I'm fascinated by how this works, can you tell me more?**
<p>Of course! There's a few stages to get to this point. First we figure out the contrast between two HEX values. For this we're using a plugin called <a href="https://vis4.net/chromajs/" target="_blank" rel="noopener noreferrer">chroma.js</a> - this does the heavy lifting for us. Once we have the ratio (and using font size and font weight) we can apply a grade to that specific color combo.</p>
<p>For the color blindness options we're using another plugin aptly called <a href="https://github.com/skratchdot/color-blind" target="_blank" rel="noopener noreferrer">Color-blind</a> that converts our HEX codes in to ones that would be seen by people with the different impairments, then we can apply our same process to obtain the color ratios and determine their grade.</p>
<p>For cataracts, glaucoma, low vision, and the situational events I've personally created simulations to help identify their rating.</p>

**What does a failing grade mean?**
<p>The grading uses a combination of color contrast, text size and text weight. A fail simply means that the color combination offers some visual strain to the person seeing it and should be avoided if possible.</p>

**Can I help contribute?**
<p>Absolutely! Feel free to fork the repo and submit a PR with any helpful additions or changes.</p>

## 🚀 Getting Started

1.  **Clone the repo.**

2.  **Install everything.**

    Navigate to wherever you cloned the whocanuse repo to and install all the things:

    ```sh
    npm install
    ```

2.  **Start developing.**

    Start it up!

    ```sh
    npm run dev
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!
 
    
    


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/CoreyGinnivan"><img src="https://avatars1.githubusercontent.com/u/7619810?v=4" width="100px;" alt="Corey"/><br /><sub><b>Corey</b></sub></a><br /><a href="#design-CoreyGinnivan" title="Design">🎨</a> <a href="https://github.com/CoreyGinnivan/whocanuse/commits?author=CoreyGinnivan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JakeGinnivan"><img src="https://avatars2.githubusercontent.com/u/453152?v=4" width="100px;" alt="Jake Ginnivan"/><br /><sub><b>Jake Ginnivan</b></sub></a><br /><a href="#infra-JakeGinnivan" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/CoreyGinnivan/whocanuse/commits?author=JakeGinnivan" title="Code">💻</a></td>
    <td align="center"><a href="http://madebymike.com.au"><img src="https://avatars0.githubusercontent.com/u/1320567?v=4" width="100px;" alt="Mike"/><br /><sub><b>Mike</b></sub></a><br /><a href="#infra-MadeByMike" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/CoreyGinnivan/whocanuse/commits?author=MadeByMike" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Tombre"><img src="https://avatars1.githubusercontent.com/u/3880871?v=4" width="100px;" alt="Tom Leenders"/><br /><sub><b>Tom Leenders</b></sub></a><br /><a href="https://github.com/CoreyGinnivan/whocanuse/commits?author=Tombre" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Logarek"><img src="https://avatars2.githubusercontent.com/u/25744314?v=4" width="100px;" alt="Matthew Putland"/><br /><sub><b>Matthew Putland</b></sub></a><br /><a href="#ideas-Logarek" title="Ideas, Planning, & Feedback">🤔</a> <a href="#accessibility-Logarek" title="A11y">♿️</a></td>
    <td align="center"><a href="http://www.juliegrundy.id.au/"><img src="https://avatars3.githubusercontent.com/u/3842742?v=4" width="100px;" alt="Julie Grundy"/><br /><sub><b>Julie Grundy</b></sub></a><br /><a href="#ideas-stringyland" title="Ideas, Planning, & Feedback">🤔</a> <a href="#accessibility-stringyland" title="A11y">♿️</a></td>
    <td align="center"><a href="https://github.com/jessbudd"><img src="https://avatars1.githubusercontent.com/u/17704960?v=4" width="100px;" alt="Jess Budd"/><br /><sub><b>Jess Budd</b></sub></a><br /><a href="#content-jessbudd" title="Content">🖋</a> <a href="#accessibility-jessbudd" title="A11y">♿️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/severn101"><img src="https://avatars1.githubusercontent.com/u/15342678?v=4" width="100px;" alt="Pavel"/><br /><sub><b>Pavel</b></sub></a><br /><a href="https://github.com/CoreyGinnivan/whocanuse/commits?author=severn101" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
