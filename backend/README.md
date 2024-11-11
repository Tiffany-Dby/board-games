# Backend - Board Games

This is the backend portion of the **Board Games** project, built with Django and Django Ninja.

## Folder Structure

- `backend/`: Root directory containing the Django project.
- `backend/board_games/settings.py`: Settings file where you can add more apps.
- `backend/blackjack/`: Contains the simplified Blackjack app.

## Running the Backend

To start the backend server:

```bash
python manage.py runserver
```

## API Documentation (Django Ninja)

Django Ninja automatically generates API documentation. Once the backend is running, you can access it at: `http://127.0.0.1:8000/docs/`

# Commands List

```bash
conda activate blackjack

pip install django
pip install django-ninja
pip install django-cors-headers

python manage.py makemigrations
python manage.py migrate
python manage.py runserver

# Utilities

pip list
```
