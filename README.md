# CSCI4800 Assignment 4

![Screenshot](public/img/smol-wink.svg)

**Names:** Tammy Husnetdinova and Alex Verkest<br>
<br>
**Class:** CSCI4800-E01 <br>
<br>
**Date:** 4/14/21 <br>
<br>
**Assignment:** 4 for Online Social Network <br>
<br>
**Learning objectives:** Our goal was to add to the progress made in the previous classwork by adding CRUD operations to the backend mongo database, authentication using passport, sign in/sign out capabilities, flash messages, and session cookies. We once again continue to challenge ourselves by incorporating more modals into the project by incorporating them into the CRUD functionality necessary. <br>
<br>
**Technologies used:** HTML5, CSS3, Native Javascript, Vue.js for code, Visual Studio Code for development and testing, Google Chrome browser for testing, Windows 10 OS <br>
<br>
**Justification in design choices:** We let ourselves have some fun by making creative design choices that were outside the basic requirements, while also meeting all the outlined goals, like authentication, flash messages, sessions, cookies, CRUD, more error handling, and the ability to post. On top of the milestones, we took the time to make our social network especially aesthetic and fun to navigate. Some elements, such as authentication and displaying the logged in user at the top, are borrowed from the Confetti Cuisine classwork, while others are a combination of continuing to model our website after Reddit and adding our own flair along the way. Our users are now able to sign up, log in with proper error checking and validation+authentication and make posts. Posts can only be made if the user is logged in, and the navbar layout changes based on the state of being logged vs not logged in. Flash messages were a labor of love that took learning some pretty cool css animation with fades and keyframes to make them dynamic and only visible for an appropriate amount of time after an event that triggered them. The post button is a combination of sneaky css and some Adobe Illustrator skill, and it adds some more life to the page. Users are able to create new posts, edit them, and delete them. The screens for creating and editing takes place in modals, similar to signing up and signing in. Our CRUD operations may look a little different than the classworks, and the lack of all the typical ejs views for them might seem more simplistic than what we've been doing for Confetti Cuisine. But... all the hard work for routing can still be seen in our modal logic and main.js to make for some CRUDdy modals. We do not have a new.ejs layout for posts for a reason, and that is because that logic is in the new post modal that's in the index.ejs of the posts views. We tried to do the same modal logic for editing the posts for this assignment, but ran into some weird modal/CRUD interactions; we decided to keep editing to a separate ejs layout rather than doing it in a modal, but we will revisit this. We also have an issue with images showing up as broken links when on the posts views, but we are working on resolving this issue. <br>
<br>
**Extra features:** Extra features include an adaptive navbar that will look different if you're logged in vs logged out, as well as only being able to create a post if the user is currently logged in. We took our time with animating the flash messages for successes and errors that let the user know what's happening when something goes well or not so well when signing up and signing in. The post button located in the lower right hand corner of the screen took Adobe Illustrator to create and some trial and error and learning of css to position how we wanted. But we did it :) And one of the biggest achievements was continuing to figure out modals and routing to allow users to create posts in a modal rather than on a separate page. Editing in a modal is still in progress, but we decided to go with the standalone layout version rather than a less stable modal version for this assignment. We think that modals are a more modern approach and closer resemble popular social media sites with text posts like Reddit, Facebook, and Twitter. <br>
<br>
**Nu HTML Checker status:** For the current build, there were no  .html files to put through the checker. 
However, our .ejs view files that contain html view formatting, did pass the checker with warnings about not having a doctype tag, head, or title, all of which an ejs file does not need. So we are good there! <br>
One nuance is that we do not yet have a working search function for searching posts, so we have a placeholder submit button when searching that leads to a dummy search results page (this is purely visual right now to show dynamicity). So, we do get this error with layout.ejs: <br>
`<a href="/search" class="btn btn-outline-success my-2 my-sm-0" type="submit"> Search </a>`<br>
Another notable warning is the embedded javascript using special characters that html checker did not approve of, but they are necessary for displaying the page: <br>
`<%- body %>` <br>
<br>
**Sources:** <br>
https://www.w3schools.com/css/css_display_visibility.asp <br>
https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_animate-top <br>
https://www.w3schools.com/css/css3_borders.asp <br>
https://www.w3schools.com/css/css_align.asp <br>
<br>
**Looking ahead:** <br>
We plan to work on some peripheral parts of the assignment that got overshadowed by the user functions, such as epanding the account and settings pages, and getting the search functionality up and running. Ultimately, we want to let the user upload more than just text-based posts by letting them add pictures too. Comments, likes, etc are something we are deciding on for the next big update too. We also want to add more user info on posts, such as when the post was made and who it was made by. <br>
<br>
**Instructions for running program:** Please download the code, run `npm install`, then seed the database by running `node seed.js`, then run `npm start`. <br>
<br>
No link for this one, because GitHub pages can only host static HTML pages, like the ones in prior assignments. No server side technology is supported, so Node.js applications won't run on GitHub pages. <br>
<br>

