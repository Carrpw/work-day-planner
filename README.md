# work-day-planner

This homework is for making a work day planner using jquery.

files include:
-html
-css
-javascript
-readme

I started this project with all the css that I would need and some of the html set up with links to bootstrap, moment, and fontawesome.
I started off finishing the html format, I made use of the bootstrap already linked to add textareas and buttons to make my planner. The next step was to make a bunch of columns and rows for my time slots, textareas and buttons to be placed in and the planner its shape. Once the whole shape of my planner was done in html and all of the textareas and buttons had ids, I made a link to a javascript file at the bottom to work in.
I started the javascript file with making the date at the top of my page display the actual time using moment and appending it to my html file. I then moved on to the my click function so that when the user attempted to save their input for an hour of time it would go into local storage. If they attempted to save nothing in the hour then an alert would pop up notifiying them. Each button to save the text next to it was done seperately, so there is a click function for each button.After saving it into local storage I moved on to a for loop that went through the different hours listed in the planner and made a variable through moment to capture the current hour. Then a function that used if and else statements was made in the for loop to compare what hour the for loop was on to the current hour so that I could apply either a past, present, or future color coding to the planner. Lastly I made sure that the things I made in local storage were pulled back out of local storage at the end of the script so that if the user reloaded the page they would still see the text that they input. 


![Screenshot (65)](https://user-images.githubusercontent.com/73077219/98881277-9d046e00-2457-11eb-9de7-4b3f8d4775d6.png)

https://github.com/Carrpw/work-day-planner
https://carrpw.github.io/work-day-planner/