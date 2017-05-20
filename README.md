# Senepe
A photo sharing Web app developed in Spring boot (backend) and Angular 4 (frontend). 

# Overview
The Web application uses H2, an in-memory database to store the uploaded photos as such may not worry about database credentials

# Requirement
```
1. An Internet connection
2. Spring Tool Suite IDE (I use Intellij IDEA)
3. Any text editor (I use WebStorm)
4. Few photos for testing purposes
```

For front-end
```
git clone https://github.com/mrmodise/senepe.git
cd senepe
npm install (to install Angular dependencies - you need Internet connection for this)

see bottom 'development' section for more information
```

For backend
```
Import backend folder/project as an existing maven project in Spring Tool Suite
run application as spring boot application

```

# Summary
Senepe uses REST API as the middle layer sitting between the front-end and the back-end. The REST API is consumed using Angular2 Http client in services. 

```
a) I am hoping to write a much detailed tutorial soon. 
b) update angular2 router to the RC version
c) add hibernate search
d) add reddis for improved application performance
e) add in-memory text-editor
f) document how to deploy to heroku and digital ocean
g) add AJAX to handle updating front-end with realtime data from back-end
h) Update the security design of the application
```
# development
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

