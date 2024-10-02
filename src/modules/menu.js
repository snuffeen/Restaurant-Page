export {menuPage}

const container = document.querySelector("#content")

function menuPage() {
    container.textContent = ""
    addBeveragesDiv()
    addSidesDiv()
    addMainCoursesDiv()
}

function addBeveragesDiv() {
    const beverages = document.createElement("div")
    beverages.classList.add("beverages")

    const beveragesSectionTitle = document.createElement("div")
    beveragesSectionTitle.classList.add("beverages-section-title")
    beveragesSectionTitle.textContent = "Beverages"

    beverages.appendChild(beveragesSectionTitle)
    addMenuItem("Iced Tea", "Very Iced, Very Tea", "2", "picture placeholder", beverages)
    container.appendChild(beverages)
}

function addSidesDiv() {
    const sides = document.createElement("div")
    sides.classList.add("sides")

    const sidesSectionTitle = document.createElement("div")
    sidesSectionTitle.classList.add("sides-section-title")
    sidesSectionTitle.textContent = "Sides"

    sides.appendChild(sidesSectionTitle)
    addMenuItem("French Fries", "Very French, Very Fries", "2", "picture placeholder", sides)
    container.appendChild(sides)
}

function addMainCoursesDiv() {
    const mainCourses = document.createElement("div")
    mainCourses.classList.add("main-courses")

    const mainCoursesSectionTitle = document.createElement("div")
    mainCoursesSectionTitle.classList.add("main-courses-section-title")
    mainCoursesSectionTitle.textContent = "Main Courses"

    mainCourses.appendChild(mainCoursesSectionTitle)
    addMenuItem("Pancakes", "Very Pan, Very Cake", "2", "picture placeholder", mainCourses)
    container.appendChild(mainCourses)
}

function addMenuItem(name, description, price, picture, e) {
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")

    const menuItemName = document.createElement("div")
    menuItemName.classList.add("menu-item-name")
    menuItemName.textContent = name

    const menuItemDescription = document.createElement("div")
    menuItemDescription.classList.add("menu-item-description")
    menuItemDescription.textContent = description

    const menuItemPrice = document.createElement("div")
    menuItemPrice.classList.add("menu-item-price")
    menuItemPrice.textContent = price

    const menuItemPicture = document.createElement("img")
    menuItemPicture.classList.add("menu-item-picture")
    menuItemPicture.textContent = picture

    menuItem.appendChild(menuItemName)
    menuItem.appendChild(menuItemDescription)
    menuItem.appendChild(menuItemPrice)
    menuItem.appendChild(menuItemPicture)
    e.appendChild(menuItem)
}