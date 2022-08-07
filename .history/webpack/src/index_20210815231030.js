import {
  electron
} from 'webpack';
import Home from './home'
// import login from './login'
import './style.css'
import Png from './windows11.png'

console.log(Home);

// const element = document.createElement('div')

function component() {
  const hello = document.getElementsByClassName('hello')
  console.log(hello);
  // const myPng = new Image();
  myPng.src = Png;

  hello.appendChild(myPng);
  return hello;
}

component();

// const arr = ['zhangsan', 'lisi', 'zhanghailong']
// arr.map(obj => console.log(obj))