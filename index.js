import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import config from "./config.js";

// Controllers/Parsers
import * as CasesController from './controllers/CaseController.js';
import * as UserController from "./controllers/UserController.js";
const app = express();

// Middleware
app.use(express.json());
app.use(cors({credentials: true, origin: ["http://localhost:3000"]}));
app.use(cookieParser())
app.use(session({
    key: 'session',
    secret: config.session.secret,
    cookie: config.session.cookie,
    resave: false,
    saveUninitialized:true,
}))

// Routes
app.post('/auth', UserController.login);
app.get('/cases', CasesController.getUserCases);
//app.post('/cases', checkAuth, caseCreateValidation, handleValidationErrors, PostController.create);

app.listen(config.port, (err) => {
    if (err) {
        console.log("ERROR: ", err);
    }
    console.log("SERVER STARTED");
});

module.exports = app;