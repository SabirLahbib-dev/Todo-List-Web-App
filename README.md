# Todo List Web App

A lightweight React + Vite todo application for managing daily tasks with a clean, responsive interface. It lets users create, edit, complete, and delete tasks while keeping everything saved in the browser using local storage.

## Features

- Add new tasks with dates
- Mark tasks as complete or active
- Edit existing task details
- Delete tasks from the list
- Filter tasks by search term
- Browse tasks by date using the date selector
- Toggle between active and completed task views
- Responsive layout for desktop and mobile devices
- Browser persistence using localStorage

## Tech Stack

- React 19
- Vite
- JavaScript
- CSS Modules / component styles
- Vitest + Testing Library for UI tests

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

The app will start in development mode, usually at http://localhost:5173.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
  App.jsx
  components/
  assets/
  Tests/
public/
README.md
package.json
```

## Notes

This project stores task data in the browser's localStorage, so tasks remain available after page refreshes on the same browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
