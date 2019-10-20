//javascript project

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


const title = <div>React with Webpack and Babel</div>;
ReactDOM.render(
	<App title={title} />,
  	document.getElementById('app')
);

module.hot.accept();

console.log("Hello WebPack Project");

document.getElementById("but").addEventListener("click", clicked);

function clicked(){
	var colors = ['red', 'blue', 'green', "white"]; 
	var rand = colors[Math.floor(Math.random() * colors.length)];

	document.body.style.background = rand;
	return;
}


