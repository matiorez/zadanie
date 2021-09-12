# Task for Python Fullstack Developer

Hi!

We are glad that you want to join us. This is a task based around our web stack. It will aid us in considering your application and is a way for you to shine among other candidates! Read the instructions carefully and send us back the link with your solution.

## Objective

We want to see how do you approach various problems and structure the code. This shouldn't be a full-blown application, keep it simple and clean.

## Tech stack

- Django with Django REST Framework (DRF)

- Angular

- Any relational database supported by Django (that includes SQLite)

## Specification

The main objective of this task is to build a simple CRUD app which consists of fundamental elements of a REST API and SPA. The app will be a portal with advertisements.

Data in the app consists of two models:

- `Category` with following fields:
  - `id`
  - `name` - human-readable and shown in the frontend
  - `ordering` - meant to be set manually by app's admin
- `Offer`, related many-to-one with `Category`, with following fields:
  - `id`
  - `title`
  - `description`
  - `price`
  - `created_at` - timestamp

Endpoints which should be included in the final project:

- `GET /offers` - returns all offers from the database with their ID, title, price and category ID.  
  _optionally_: accepts category ID as a query parameter, named `category`. In this case, returns offers filtered accordingly.
- `GET /category` - returns all categories ordered by `ordering` field
- `GET /offers/{id}` - returns a single offer, with all fields associated with it.
- `POST PUT DELETE /offers/{id}` - manipulate a single offer. For `POST` and `PUT`, all fields are obligatory.
- `POST PUT DELETE /category/{id}` - manipulate category. For `POST` and `PUT`, all fields are obligatory.

Allow manipulating offers and categories through Django admin site and DRF's default browsable api.

In frontend, implement the following:

- displaying a list of offers,
- display each offer in detail (after clicking on it in the list view),
- _optionally_: in offer list view, implement filtering offers based on category

For the sake of simplicity, don't worry about the authentication process (so anyone can use all endpoints).

## Would be awesome if you (with hints):

- Take advantage of DRF goodies like viewsets, mixins etc.

- What about data validation? serializer or database level?

- Cover the endpoints/models with basic tests (maybe factory_boy with Django integration will be handy?)

- Containerize the whole project (maybe docker-compose will be handy? Also consider the database)

- Take advantage of a component library like Angular Material (don't overthink the designs, just show us that you can work with components and query some data 🙂)

## Rules

The application's code should be kept in a public repository so that we can read it, pull it and build it ourselves. Remember to include README file with basic notes on application requirements and setup - we should be able to get it easily up and running.

**Good luck!** If you have any questions feel free to ping us!
