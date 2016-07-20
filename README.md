# senepe
A photo sharing Web app developed in Spring boot (backend) and Angular 2 (frontend). 

#Overview
The Web application uses H2, an in-memory database to store the uploaded photos as such may not worry about database credentials

#requirement
```
1. An Internet connection
2. Spring Tool Suite IDE
3. Visual Studio Code (optional)
4. Few photos for testing purposes
```

For front-end
```
git clone https://github.com/mrmodise/senepe.git
cd senepe
npm install (to install angular2 dependencies - you need Internet connection for this)
npm start (to start the Web application)
```

For backend
```
Import backend folder/project as an existing maven project in Spring Tool Suite
run application as spring boot application

```

#summary
Senepe uses REST API as the middle layer sitting between the front-end and the back-end. The REST API is consumed using Angular2 Http client in services. 

```
a) I am hoping to write a much detailed tutorial soon. 
b) update angular2 router to the RC version
c) add hibernate search
d) add reddis for improved application performance
e) add in-memory text-editor
f) document how to deploy to heroku and digital ocean
```
