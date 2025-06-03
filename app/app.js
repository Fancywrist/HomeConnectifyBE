import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import dbConnect from '../config/dbConnect.js';
// Templating engine
import nunjucks from 'nunjucks';
import path from "path";
import { fileURLToPath } from 'url';

// Import Routes

import userRoutes from '../routes/users.route.js'

// ** `import.meta.url`  provides the full URL of the current module file. This URL includes the protocol (e.g., file://), the path to the file, and the filename itself.
const __filename = fileURLToPath(import.meta.url);

// * path.dirname() is a function that takes a file path as an argument and returns the directory name of that path. It essentially removes the last segment (the filename) from the path.
const __dirname = path.dirname(__filename);



// Database Connection
dbConnect();

const app  = express();


// * Middleware
// Parsing
// extended will convert to parse it to a string format.
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// * Static files - points to public directory at root level
app.use(express.static(path.join(__dirname, '../public')));
// Nunjucks setup - points to view directory at root level
nunjucks.configure(path.join(__dirname, '../views'), {
    autoescape: true, // ! It help to prevent Cross-Site Scripting (XSS) attacks.
    express: app, // ? it allows you to use `res.render()` method for rendering templates.
    watch:true, // * when set to `true`, nunjucks will automatically recompile templates if it detects changes to the templates files on the filesystem.
});


// * Routes

app.use('/', userRoutes)


export default app;