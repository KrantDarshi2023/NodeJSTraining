import createError from 'http-errors';
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser';
import  logger  from 'morgan';

import indexRouter  from'./src/routes/index.js';
import usersRouter  from './src/routes/users.js';
import router from './src/routes/books.js';
import mongoose from 'mongoose'
import userRouterExc from './src/routes/usersRoutes.js';
import dbConnection from './src/Database/MongoDbConnection.js';
// import dbSqlConnection from './src/Database/mysqlDbConnection.js';
import employeeRouter from './src/routes/employee.js';

var app = express();
// mongoose.connect("mongodb://localhost:27017/test").then(()=> console.log("connected"))
// dbConnection();
// dbSqlConnection();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', router)
app.use('/usersRouter', userRouterExc )
app.use('/employee',employeeRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
	res.status(err.status).json({
		status: 'error',
		data: [],
		error: err.message,
	});
	next();
});

export default app;
