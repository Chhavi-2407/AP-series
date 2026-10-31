// Import the built-in HTTP module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response content type
    res.setHeader("Content-Type", "text/plain");

    // Route 1: Home page
    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        res.end("Welcome to my website!");
    }

    // Route 2: About page
    else if (req.url === "/about" && req.method === "GET") {
        res.statusCode = 200;
        res.end("This is the About page.");
    }

    // Route 3: Students API
    else if (req.url === "/api/students" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;

        const students = [
            { id: 1, name: "Aarav" },
            { id: 2, name: "Priya" },
            { id: 3, name: "Rahul" }
        ];

        res.end(JSON.stringify(students));
    }

    // Route 4: Page not found
    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log("HTTP server running at http://localhost:3000");
});
