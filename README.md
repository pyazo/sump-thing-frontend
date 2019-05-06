# React Boostrap App
A foundation for rapid React prototypes


# Index
- [Prerequisites](#Prerequisites)
  - For devs who have never used the DT Starts stack before
- [Installation](#Installation)
  - Cloning the repo from VSTS
- [Setup](#Setup)
  - Setting up/running the app
- [Structure](#Structure)
  - The layout of the app
- [Tests](#Tests)
  - Creating and running unit tests for the app.
- [Docs](#Docs)
  - Docs for the libraries/technologies used here
- [Deployment](#Deployment)
  - Deploying this app to Heroku
- [Troubleshooting/FAQ](#Troubleshooting/FAQ)
  - Common problems/questions

---

# Prerequisites

Things you need before you can run the app.

**Please install the prerequisites for your operating system before installing the general prerequisites**

*Note: We assume you are running Ubuntu/Debian for all Linux references.*

---

## OSX Only

#### Homebrew (OSX Only)

You can install Homebrew by pasting the following line into your terminal:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

---

## Windows Only

#### Chocolatey

You can install chocolatey [here](https://chocolatey.org/)


---

## General

#### Docker

Mac OSX - [here](https://store.docker.com/editions/community/docker-ce-desktop-mac)
Windows - [here](https://store.docker.com/editions/community/docker-ce-desktop-windows)
Linux - [here](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#uninstall-old-versions).

### Git

Install git by pasting the following line into your terminal

Mac OSX - `brew install git`
Windows - `choco install git`
Linux -
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install git
```

### Node

Node is required for tests and running the app locally, you can install it by pasting the following line into your terminal

Max OSX - `brew install node`
Windows - `choco install node`
Linux -
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Yarn

Yarn is the preferred package manager for new node projects

Mac OSX - `brew install yarn`
Windows - `choco install yarn`
Linux -
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

```
sudo apt-get update && sudo apt-get install yarn
```

---

# Installation
Install the app locally using git. You can clone the repo by going to your terminal and pasting the following line

`git clone ssh://developertown@developertown.visualstudio.com:22/DefaultCollection/DT%20Starts/_git/react-bootsrap`

_Note: You'll need to setup an SSH key in VSTS before you can clone this repo. Find more info on that [here](https://docs.microsoft.com/en-us/vsts/git/use-ssh-keys-to-authenticate)._

---

# Setup

_**order mattters**_

1. run `yarn install`
2. run `yarn start`

### After First Setup

The first setup should take the longest. After the initial setup you may continue to use `yarn start` to start the application.

In order to exit the shell you must press `CMD + C` on a Mac or `CTRL + C` on PC. Exiting the shell should stop the application, but in the rare case that you force exit please use `yarn stop` to exit the application.

Other useful commands:
- `yarn stop`
  - stops the application from running
- `docker-compose ps`
  - displays a list of all running containers

---

# Structure

The structure here refers to the frontend folder, where most (_all_) of the work will happen

All of the components should follow the following structure.

```js
// Under the routes folder
-  Home/
- - - index.jsx
- - - style.js
```

All component specific styling should live in `style.js`, all React component things should live in `index.jsx`

The name of the folder should be an easily recognizable name based on the view.

A subcomponent with no styling can be `SubComponent.jsx` whereas a subcomponent with styling should be a folder named `SubComponent` with `index.jsx` and `style.js` nested inside.

For example, if we had a home page with 3 sections (sub components) the structure would look like this:

```js
-  HomePage/
- - index.jsx
- - style.js
- - section1/
- - - - index.jsx
- - - - style.js
- - section2/
- - - - index.jsx
- - - - style.js
- - section3/
- - - - index.jsx
- - - - style.js
```

---

# Tests

Tests are ran using Jest and Enzyme.

### Running Tests

All tests can be ran using

```
yarn test
```

or if you'd like to watch tests you can use

```
yarn test:watch
```

### Structure

All tests can be found in `frontend/tests`

Tests should follow the same structure as the `frontend/routes` directory, all file extensions should be `.test.js` instead of `.jsx`.

### Info on Writing Tests

All components should have a set of unit tests to go along with them.

You should test all parts of the component that _could_ be broken due to syntactical errors or refactoring.

Do not write tests for libraries that already have tests...

For example: Do not test that the React render function works, tests that the component renders.

_What is the difference?_: The React render function will always work, but you may not always give it the correct return, or you might make a syntactical error in the render function.

### Docs

If you go to the [docs](#Docs) section you will find documentation for Jest and Enzyme, both of the libraries used for frontend testing.

---

# Docs

Docs for technologies used in the app

- [react](https://reactjs.org/)
- [airbnb style guide](http://airbnb.io/javascript/)
- [material-ui](https://material-ui-1dab0.firebaseapp.com/)
- [jest](http://facebook.github.io/jest/)
- [enzyme](http://airbnb.io/enzyme/docs/api/)

---

# Deployment

when someone gets to this point poke me to update this section

---

# Troubleshooting/FAQ

- **I added a new NPM package but the app isn't updating**
- You can rebuild the app by running `docker-compose down --volumes` and then run `yarn start` again.


- **I started the application, how do I see it?**
- Open any browser and navigate to `http://localhost:8080`
