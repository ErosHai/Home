import {
  electron
} from 'webpack';
import Home from './home'
import login from './login'
import './style.css'
import Png from './windows11.png'

console.log(Home);
window.onload = function () {
  login(),


    const myPng = new Image();
  myPng.src = Png;

  Element.appendChild(myPng);
}

// const arr = ['zhangsan', 'lisi', 'zhanghailong']
// arr.map(obj => console.log(obj))