# react-flask-boilerplate
Boilerplate for setting up new React Projects running on a simple Flask webserver, built with Gulp and Watchify

## Requirements
- [Python 3.4+](https://www.python.org/)
- [Node 0.10.25+](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [virtualenvwrapper 1.11.6+](http://virtualenvwrapper.readthedocs.io/en/latest/http://virtualenvwrapper.readthedocs.io/en/latest/)
- [git](https://git-scm.com/)
- [git-flow](https://github.com/nvie/gitflow)

# Installs
- [Flask](http://flask.pocoo.org/docs/0.11/)
- [React](https://facebook.github.io/react/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)
- [Watchify](https://github.com/substack/watchify)

## Installation instructions
1. Clone this repository with a new project name

        git clone https://github.com/Eighty20/react-flask-boilerplate new_project

1. Create a new repository on github or bitbucket with the same name
1. Enter the directory you just created

        cd new_project

1. Set the remote origin of your project to the new repository and push

        git remote set-url origin https://github.com/Eighty20/new_project
        git push -u origin master

1. Set up `git flow`

        git flow init -d

1. Checkout the `develop` branch

        git checkout develop

1. Set up a new python virtual environment

        mkvirtualenv --python=/usr/bin/python3 training

1. If your virtual environment is not immediately activated, enter it with

        workon training

1. Install the required python packages

        pip install -r requirements.txt

1. Install the required node modules

        npm install


## Running the app
1. In a new terminal, in the project folder, run `gulp`

        gulp

1. In another terminal, start the webserver

        ./run.sh

1. In a browser, navigate to http://localhost:5000
1. Read the documentation on each of the technologies to figure out where to go from there.
