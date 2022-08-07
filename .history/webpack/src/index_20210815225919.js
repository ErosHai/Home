import {
  electron
} from 'webpack';
import Home from './home'
import login from './login'
import './style.css'
import Png from './windows11.png'

console.log(Home);
window.onload = function () {
  // const element = document.createElement('div')
  const hello = document.getElementsByClassName('hello')

  const myPng = new Image();
  myPng.src = Png;

  hello.appendChild(myPng);
  return hello
}

// const arr = ['zhangsan', 'lisi', 'zhanghailong']
// arr.map(obj => console.log(obj))