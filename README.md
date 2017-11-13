# mean-contacts-app
[Work in progress]

One mean contacs app - with MongoDB, Express.js, Angular.js, and Node.js

This app uses Angular on the front-end to take user input to create new contacts and displays those contacts
in a neat table. On page load, a GET request is sent to /contacts to retrieve existing contact objects from
the db.

To do:
- POST request to add new contacts
- PUT request to update existing contacts
- DELETE to delete contacts