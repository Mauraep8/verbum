# verbum

App tech
- React
- Node.js
- Prisma
- MySQL
- Docker (currently not operational)

How to get the app started

#1 Clone the git repo.
#2 Open repo in vs code.
#3 In the VS Code terminal "cd" into the "backend-prisma" folder.
#4 Once in the folder, on the terminal run "node server.js".
#5 Open MySQL and make sure local server is running on port 3306.
#5 OPen a new terminal in VS Code, then "cd" into the "frontend" folder.
#6 Once in the folder, on the terminal run "npm start".


How to use the app

About Page

#1 The about page has no functionality.

Contact Page

#1 The user can write in the subject and message input.
#2 The user can submit the message by clicking the "submit" button.
#3 A pop up should appear to indicate the submission was succesful.
#4 The pop-up should dissapear after a few seconds.

Exercice Page

Database Component

#1 In the Verb Library list, the user should be able to click the add "+" button beside the verb, and it should appear in the User LIbrary list
#2 The User Library should have 2 default verbs "aimer" and "avoir" in the User Library list when page is refreshed.
#3 The user should be able to delete verbs by clicking the "-" button.
#4 Once the user decides on alist of verbs in the User Library, the user can click the "submit" button. The chosen verbs should show up in the Exercice 
component inside the ultimate dropdown beside the "answer" input
#5 The first verb in the User Library list should show up as text inside the dropdown button

Exercice Component
#1 All grammar dropdown menus should be able to open and close and include default options always.
#2 The user should be able to check and uncheck the checkboxes beside the dropdown menu options.
#3 When the user clicks on the "shuffle" button, all checked option should be able to shuffle within their category and a new or repeated option should
show up inside the dropdown button text.
#4 Once shuffle has occured all dropdown buttons should have new or repeated text that momentarily turns blue to indicate shuffle has occured.
#5 The user can write their answer in the answer input and click the "Verify" button.
#6 The button should trigger an api call to retrieve the answer.
#7 If the user's answer is correct, their text answer should turn green, if it is wrong it should turn red and the correct answer should show up on top of the answer input.
