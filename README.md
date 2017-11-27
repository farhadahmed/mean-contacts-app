# mean-contacts-app
[Work in progress]

One mean contacs app - with MongoDB, Express.js, Angular.js, Node.js, and a RESTful API.

This app uses Angular on the front-end to take user input to create new contacts and displays those contacts
in a neat table using Bootstrap. On page load, a GET request is sent to /contacts to retrieve existing contact objects from
the db.  When a user fills the input fields and clicks enter, three things happen.  1) A POST request is sent to
the server to add the new contact data to the db and 2) a GET request is sent to retrieve data so that the
newly created contact appears in the table and 3) the input boxes are cleared.

Additionally, a remove button next to each contact, when clicked, sends a DELETE request to remove the contact from the db
and also sends a GET request to retrieve and display the contact list with the now removed contact.

To do:
- PUT request to update existing contacts