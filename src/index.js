import pageLoad from "./page_load.js"
import { header, nav } from "./header.js"
import menu from "./menu.js"
import './style.css'



const content = document.getElementById('content')

// cosnole.log("I'm an alert, in the console!")

content.appendChild(header())

// header();
//nav();
let currentTab = menu

content.appendChild(currentTab())
