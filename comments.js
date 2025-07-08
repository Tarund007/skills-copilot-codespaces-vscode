
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;  // Port number for the server               
app.use(bodyParser.json());  // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));  // Middleware to parse URL-encoded bodies
// Serve static files from the 'public' directory
app.use(express.static('public'));
// Handle GET requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');  // Send the index.html file
});
// Handle POST requests to the '/submit' URL
app.post('/submit', (req, res) => {
    const data = req.body;  // Get the data from the request body
    console.log('Received data:', data);  // Log the received data to the console
    res.json({ message: 'Data received successfully!' });  // Send a JSON response back to the client
});
// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);  // Log the server URL to the console
});
// Export the app for testing purposes
module.exports = app;  // This allows the app to be imported in other files for testing
// This is a simple Express.js server that serves static files and handles form submissions.
// It listens on port 3000 and serves an HTML file from the 'public' directory
// when the root URL is accessed. It also handles POST requests to the '/submit' URL
// and logs the received data to the console, responding with a success message.
// To run this server, you need to have Node.js and Express installed.
// You can start the server by running `node server.js` in your terminal.
// Make sure to create a 'public' directory with an 'index.html' file to test the server.
// The server uses body-parser middleware to parse incoming request bodies,
// allowing it to handle both JSON and URL-encoded data.

