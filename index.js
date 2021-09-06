const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = new express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req,res)=>{
	res.sendFile(path.resolve(__dirname, './pages/index.html'));
});

app.get('/about', (req,res)=>{
	res.sendFile(path.resolve(__dirname, './pages/about.html'));
});

app.get('/contact', (req,res)=>{
	res.sendFile(path.resolve(__dirname, './pages/contact.html'));
});

app.get('/sample', (req,res)=>{
	res.sendFile(path.resolve(__dirname, './pages/sample.html'));
});

app.listen(5000, ()=>{
	console.log('App listening on port 5000');
});

