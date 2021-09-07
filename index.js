const express = require('express');
const path = require('path');


const app = new express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res)=>{
	res.render('index');
});

app.get('/about', (req, res)=>{
	res.render('about');
});

app.get('/contact', (req, res)=>{
	res.render('contact');
});

app.get('/post', (req, res)=>{
	res.render('post');
});


app.listen(5000, ()=>{
	console.log('App listening on port 5000');
});

