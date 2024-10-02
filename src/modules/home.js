export {homePage}

const container = document.querySelector("#content")

function homePage () {
    container.textContent = ""
    addReviewDiv()
    addScheduleDiv()
    addLocationDiv()
}

function addReviewDiv() {
    const review = document.createElement("div")
    review.classList.add("review")

    const reviewText = document.createElement("div")
    reviewText.classList.add("review-text")
    reviewText.textContent = "Very Nice"
    
    const reviewAuthor = document.createElement("div")
    reviewAuthor.classList.add("reviewAuthor")
    reviewAuthor.textContent = "John Review"
    
    review.appendChild(reviewText)
    review.appendChild(reviewAuthor)
    container.appendChild(review)
}

function addScheduleDiv() {
    const schedule = document.createElement("div")
    schedule.classList.add("schedule")

    const scheduleTitle = document.createElement("div")
    scheduleTitle.classList.add("schedule-title")
    scheduleTitle.textContent = "Schedule"

    const scheduleHours = document.createElement("div")
    scheduleHours.classList.add("schedule-hours")
    scheduleHours.textContent = "Monday: Tuesday: Wednesday: Thursday: Friday: Saturday: Sunday:"

    schedule.appendChild(scheduleTitle)
    schedule.appendChild(scheduleHours)
    container.appendChild(schedule)
}

function addLocationDiv() {
    const location = document.createElement("div")
    location.classList.add("location")
    
    const locationTitle = document.createElement("div")
    locationTitle.classList.add("location-title")
    locationTitle.textContent = "Location"

    const locationAddress = document.createElement("div")
    locationAddress.classList.add("location-address")
    locationAddress.textContent = "Ulitsa Pushkina, Dom Kolotushkina"

    location.appendChild(locationTitle)
    location.appendChild(locationAddress)
    container.appendChild(location)
}