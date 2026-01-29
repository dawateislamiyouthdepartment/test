# Youth & Education Portal

This project is a React-based web application for the Youth & Education Department. It allows users to browse events, resources, locate centres, and more.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1.  Open your terminal in the project directory.
2.  Run the following command to install dependencies:
    ```bash
    npm install
    ```
    *Note: If you encounter permission issues on Windows PowerShell, try running via Command Prompt (cmd) or ensure your execution policies allow scripts.*

### Running the App

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown (usually `http://localhost:5173`).

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

- `src/components`: UI chips and layout components.
- `src/pages`: Main page views (Events, Resources, etc.).
- `src/data`: Mock data for the application.
- `src/App.jsx`: Main application layout and routing logic.

## Deployment

This project is ready to be deployed to GitHub Pages or any static hosting service (Vercel, Netlify).

1.  Initialize a git repository: `git init`
2.  Add files: `git add .`
3.  Commit: `git commit -m "Initial commit"`
4.  Push to your remote repository.

## Technologies

- React
- Vite
- Tailwind CSS
- Lucide React (Icons)
