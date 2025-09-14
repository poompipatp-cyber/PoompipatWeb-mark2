# Hello World Web Project

This is a simple "Hello World" web project that demonstrates modern web development techniques, including:

- A single-page application (SPA) architecture with client-side routing.
- Reusable Web Components for a modular UI.
- Modern CSS for a responsive and themable design.

## Running the Project

Since this is a static website, you can serve the files using any simple HTTP server. A common way to do this is with Python's built-in `http.server` module.

1.  **Open a terminal** in the root of the project directory.

2.  **Start the server** with the following command:

    ```bash
    python -m http.server
    ```

3.  **Open your browser** and navigate to [http://localhost:8000](http://localhost:8000).

**Note:** If you are using a different port, the command will show you the correct address.

## Project Structure

- `index.html`: The main entry point and application shell.
- `pages/`: Contains the content for each page of the application.
- `styles/`: Contains the CSS stylesheets.
- `scripts/`: Contains the JavaScript files, including the router and component definitions.
- `components/`: Contains the HTML and JavaScript for reusable Web Components.
- `images/`: Contains images used in the project.
- `blueprint.md`: A detailed document outlining the project's architecture and features.
