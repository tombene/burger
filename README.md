# Node Express Handlebars

### Overview

This app is a simple app that uses handlebars,express,body-parser,mysql node modules. It also has a custom ORM example that handles the requests of the models. 

### This has two main features

## Create a Burger
* When a user types in a name of a burger and hits enter or submit button it will use jquery ajax call to the post api/add route which calles a function in the burger model which then calls the ORM.

![Image of appended log file](/public/assets/img/burger-input-img.png)

* The ORM will then connect to the database to create a new burger that the user inputed.

![Image of appended log file](/public/assets/img/devoure-img.png)


## Devoure a Burger
* When you click on any of the burger patties it will devoure the burger and add a new patty with the burger name into the burger on the right side of the screen. 

![Image of appended log file](/public/assets/img/devoured-img.png)

## Final Image

![Image of appended log file](/public/assets/img/main-screen.png)
