# Green Home

An app that helps you to care for your house plants.

## ROLES

Team Manager: Dang Do  
Front End SME:  Dan Stacy and Neil Rissman
Back End SME: Lance Nguyen

## API's

We created our own API that we will seed into the database. Info from Houseplants411. 

## User Stories

As an unregistered user I want to be able to:
  - Create an account
  - View all of the plants
  - View a single plant

As a registered user I want to be able to:
  - Sign into my account
  - Sign out of my account
  - Update my password
  - Create a plant
  - Search plants db
  - Add plants to My Plants
  - View my plants
  - Edit my plants
  - Delete my plants
  - Add notes to my plants
  - Edit a note
  - Delete a note

## Structure

Dependencies are stored in package.json.

The most important file for understanding the structure of the template is server.js. This is where the actual Express app object is created, where the middlewares and routes are registered, and more. To register a routefile, follow the pattern established here with exampleRoutes and userRoutes. If you want to add any middlewares to your app, do that here.

The app directory contains models and route files. Models are Mongoose models. To create your own, follow the patterns established in app/models/example.js. Route files are somewhat similar to controllers in Rails, but they cover more functionality, including serialization and deciding which HTTP verbs to accept and what to do with them.

The config directory holds just db.js, which is where you specify the name and URL of your database.

The lib directory is for code that will be used in other places in the application. The token authentication code is stored in lib/auth.js. The other files in lib deal with error handling. custom_errors.js is where all the different custom classes of errors are created. If you need some other kind of error message, you can add it here. There are also some functions defined here that are used elsewhere to check for errors. lib/error_handler.js is a function that will be used in all your .catches. It catches errors, and sets the response status code based on what type of error got thrown.

You probably will only need to interact with files in app/models, app/routes, and server.js. You'll need to edit db/config.js just once, to change the name of your app.

## Back End Routes

### Authentication

| Verb   | URI Pattern         | Controller#Action |
|--------|---------------------|-------------------|
| POST   | `/sign-up`          | `users#signup`    |
| POST   | `/sign-in`          | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

### Plants

| Verb  | URI Pattern         | Controller#Action |
|-------|---------------------|-------------------|
| GET   |        `/`          |     `index`       |
| GET   |      `/:id`         |     `show`        |

### MyPlants

| Verb  | URI Pattern         | Controller#Action |
|-------|---------------------|-------------------|
| GET   |        `/`          |     `index`       |
| GET   |      `/:id`         |     `show`        |
| POST  |       `/`           |     `add`         |
| PATCH |       `/:id`        |    `update`       |
| DELETE|       `/:id`        |      `destroy`    |


### Notes

| Verb  | URI Pattern         | Controller#Action |
|-------|---------------------|-------------------|
| POST  |       `/:id`        |     `add`         |
| PATCH |    `/:id/:notesId`  |    `update`       |
| DELETE|    `/:id/:notesId`  |     `destroy`     |


## Models

## USERS COLLECTION

email: {
    type: String,
    required: true,
    unique: true
}

hashedPassword: {
    type: String, 
    required: true
}

token: String

## Plants

name: {
    type: String,
    required: true
}

description: String

light: String

water: String

temperature: String

poisonous: String

image: String

owner: String

notes: []

## Notes 

note: String

owner: String

timestamp

## ERD 

![](.vscode/planning/10.jpg)

## Client Repo

https://github.com/dangdo85/project-4-client

## Deploy Link

https://dangdo85-greenhome.netlify.app/