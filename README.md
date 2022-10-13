<p align="center">
    <img alt="WhoCanUse Logo" src="https://whocanuse.com/whocanuse_600.png" width="100" />
</p>
<h1 align="center">
  WhoCanUse.com
</h1>

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

Absolutely! This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

Check out [CONTRIBUTING.md](CONTRIBUTING.md) for more info.