 # Workday Planner     
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description

  InI started this project with all the css that I would need and some of the html set up with links to bootstrap, moment, and fontawesome.
  I started off finishing the html format, I made use of the bootstrap already linked to add textareas and buttons to make my planner. The next step was to make a bunch of columns and rows for my time slots, textareas and buttons to be placed in and the planner its shape. Once the whole shape of my planner was done in html and all of the textareas and buttons had ids, I made a link to a javascript file at the bottom to work in.
  I started the javascript file with making the date at the top of my page display the actual time using moment and appending it to my html file. I then moved on to the my click function so that when the user attempted to save their input for an hour of time it would go into local storage. If they attempted to save nothing in the hour then an alert would pop up notifiying them. Each button to save the text next to it was done seperately, so there is a click function for each button.After saving it into local storage I moved on to a for loop that went through the different hours listed in the planner and made a variable through moment to capture the current hour. Then a function that used if and else statements was made in the for loop to compare what hour the for loop was on to the current hour so that I could apply either a past, present, or future color coding to the planner. Lastly I made sure that the things I made in local storage were pulled back out of local storage at the end of the script so that if the user reloaded the page they would still see the text that they input. sert

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ### Installation

  No installation is necessary, you may simply visit the webpage for use.

  https://carrpw.github.io/work-day-planner/

  ### Usage

  The workday planner allows one to write notes for each hour of the 9-5 workday. It also is color coded to inform the user of hours that have past, are present, and in the future. Local storage is used to save the notes to the planner so that the webpage may be refreshed without worry of losing your notes.

  ### License

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ### Contributors

  Myself

  ### Tests

  N/A

  ### Questions

  * GitHub profile name: Carrpw
  * Name: Paul Carr
  * Email: pwcarr15@gmail.com
  * Repo link for this project: https://github.com/Carrpw/work-day-planner

![Screenshot (65)](https://user-images.githubusercontent.com/73077219/98881277-9d046e00-2457-11eb-9de7-4b3f8d4775d6.png)