#Frontend
It contains frontend.html , frontendscript.js , frontendstyles.css  which can be run in vs code .

#AWS
It contains AWS lamda function that adds two numbers and returns the result.

#Django
# Chat Application (chat_app)

Develop a chat application with the following features:

a. Users can sign up and log in.

b. Display all registered users in left menu.

c. Allow the logged-in user to select any user from the menu and initiate a chat.

d. Store all user data and chat messages in the database.

e. Retrieve and display old messages in the chat interface.

f. Use a WebSocket for chat application.

g. user can search for any message from the search bar located at top right corner.




## Clone Repository
git clone https://github.com/PULAK-0308/Assignment.git

cd chat_app


## Install Required Dependencies
pip install django channels 

pip install daphne
## Configure Database
python manage.py makemigrations

python manage.py migrate

By above commands models will be created in database , which can be accessed by admin.

## Create Superuser
python manage.py createsuperuser


## Run Development Server
python manage.py runserver

## Access the Application
http://127.0.0.1:8000

By this user will be redirect to login page , if user is not registered then click on Register otherwise login.

To understand the functionality login with user A in one window and login with user B in another window.

Then start sending messages from user A to user B , you will see user B is receiving messages.

## Access the django database
http://127.0.0.1:8000/admin

