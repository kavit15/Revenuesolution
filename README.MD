This repo contain the automation code for applying filters to the nsw media release page

Tools used for automation:

The code is using cypress for automation

Mocha is used as framework

It is written in Page object model

MediaReleasePage.js contains all the selector

nswmedia.cy.js contain the test which resides in the e2e folder

Clone the repo

To Run the test

npm run test

Task details:

URL https://www.nsw.gov.au/media-releases is visited

Assertion is made to validate if Ministers accordion is visible

Premier value is passed and asserted and apply filter is clicked to see the result

The test is developed in such a way that any value can be passed instead of premier and the test will work


