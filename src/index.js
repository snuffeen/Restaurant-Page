import "./styles.css"

import { homePage } from "./modules/home"
import { menuPage } from "./modules/menu"
import { contactPage } from "./modules/contact"

const home = document.querySelector(".home")
const menu = document.querySelector(".menu")
const contact = document.querySelector(".contact")

home.addEventListener("click", homePage)
menu.addEventListener("click", menuPage)
contact.addEventListener("click", contactPage)