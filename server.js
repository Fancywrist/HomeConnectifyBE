import http from 'http';
import app from './app/app.js';

// * Server Connection

const PORT  = process.env.PORT || 7826;


// Configuring the server to use express application(app) to handle incomming HTTP requests
// ** This will allow you to control and manage the server for example (when you start to listen for connection.)
const server = http.createServer(app);

server.listen(PORT, console.log(`Server is up and running on ${PORT}`));