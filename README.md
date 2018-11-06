## Business requirements completed:
* Implement a login/logout feature - assume the user is already registered (the register feature works too)
* Both frontend and backend must have validations (front end only)
* If a required field is not filled out, display error with focus on field
* User Profile must have a unique email address

## Business requirements incomplete:
* Create a rest api service to update a User's profile
* OWASP Top Ten standards need to be followed needs to be followed
* Frontend should display to the User either successfully saved or a general error occurred
* User Profile page will have a reset and submit button - Did not have time to research or try to build out this feature with Angular
* User Profile page will have a header with a logout button - Aforementioned statement, but there is a function logout button


## User story requirements completed:
* User tries to login and enters wrong password - error displayed - Displays combined error for username / password
* User tries to login and enters wrong username - error displayed - Displays combined error for username / password
* User tries to login with no username/password - error displayed
* Email address needs to be valid and is required
* First, Last names are required fields

## User story requirements incomplete:
* User successfully logs in and is directed to their profile page.
* User updates profile successfully and gets successful message
* User updates but email is not unique - displays error and focus on email field
* User updates but required field(s) are not filled out.  Highlight fields and display error message
* Phone number field must be formatted (###) ###-#### but saved as numeric