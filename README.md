[![Packagist](badges/java-v8-red.png)]()  [![Packagist](badges/angular-v4-orange.png)]() [![Badges](badges/orm.png)]()

### Senepe
Senepe is a photo sharing Web application. The user can browse through a list of photos upon landing on the site. 
In the case the user wishes to share pictures, the user can register and login to do so. The aim of this project is to demonstrate Angular fundamentals as well as good programming standards. The back-end is developed in Spring boot (backend) and Angular 4 (frontend). 

### Setup
Clone the project to your preferred location and ``yarn install`` to install dependencies. The project was generated using ``angular CLI``, as such, providing ``ng serve`` should run the project.

### Unit Tests
```
Run ng test to execute all tests. Currently all 63 tests should pass
```
Am busy finishing off the unit tests for all components and services. So far, these are "completed":

- LoginComponent
- RegisterComponent
- AddPhotoComponent
- PhotoListComponent
- AppComponent
- LoginService
- PhotoService

### End-to-end Tests
To execute e2e tests: ```ng e2e```. WIP

### Summary 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

Run `mvn package` to package the back-end code. ``java -jar /target/senepe-0.0.1-SNAPSHOT.jar`` to execute the back-end code. REST API launches on port 8088. All routes are secured excluding `/auth`

`Note` project is still under development. Updated weekly `:)`

Completed modules: `registration`, `login` and `photo uploading`.

More refactoring to be done.....

### License
```
The MIT License (MIT)

Copyright (c) 2016 Mr Modise

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
