# Board Games

**Board Games** is a Single Page Application (SPA) featuring various board games, starting with a simplified Blackjack. More games will be added in the future.

## Technologies Used

- **Backend**: Django, Django Ninja, SQLite
- **Frontend**: React (Vite), React-Router-Dom, Sass

---

## Setup Instructions

To run the full application locally, you'll need to set up both the backend and frontend.

### Backend Setup

1. Navigate to the `backend` directory:

```bash
 cd backend
```

2. Create and activate the Conda environment:

```bash
conda activate blackjack
```

3. Install the required dependencies:

```bash
pip install django
pip install django-ninja
pip install django-cors-headers
```

4. Run the Django development server:

```bash
python manage.py runserver
```

The backend should now be running at `http://127.0.0.1:8000/`

### Frontend Setup

1. Navigate to the `frontend` directory:

```bash
cd frontend
```

2. Install the required dependencies:

```bash
npm install
```

3. Run the Vite development server:

```bash
npm run dev
```

The frontend should now be running at `http://localhost:5173/`

## Development Workflow

During development, you'll run both the backend and frontend servers simultaneously:

- Backend (Django): `python manage.py runserver`
- Frontend (Vite): `npm run dev`
  The frontend communicates with the backend through API endpoints exposed by Django Ninja.

## WIP
