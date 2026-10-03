function LoadHomepage(container){
    let page = document.createElement("div")
    page.classList.add("page")

    let title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "Dummy Restraunt Name!" 
    page.appendChild(title)

    let slogan = document.createElement("div")
    slogan.classList.add("slogan")
    page.appendChild(slogan)

    let hours = document.createElement("div")
    hours.classList.add("hours")
    page.appendChild(hours)

    let location = document.createElement("Div")
    location.classList.add("location")
    page.appendChild(location)

    container.appendChild(page)
}

export default LoadHomepage