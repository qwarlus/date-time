const main = document.querySelector('main')

const [dateEl, monthEl, yearEl, hourEl, minEl, secEl, dayEl] = document.querySelectorAll("b")
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const fonts = ['Roboto Mono', 'Playfair Display', "Handjet", 'Nanum Gothic Coding']

chooseFont()

updateTime()
setInterval(updateTime, 1000)

function updateTime() {
    const { date, month, year, hours, minutes, seconds, day } = getData()

    dateEl.innerText = date
    monthEl.innerText = month
    yearEl.innerText = year
    hourEl.innerText = hours
    minEl.innerText = minutes
    secEl.innerText = seconds
    dayEl.innerText = day
}

function getData() {
    const d = new Date

    return {
        date: d.getDate().toString().padStart(2, 0),
        month: (d.getMonth() + 1).toString().padStart(2, 0),
        year: (d.getYear() - 100).toString().padStart(2, 0),
        hours: d.getHours().toString().padStart(2, 0),
        minutes: d.getMinutes().toString().padStart(2, 0),
        seconds: d.getSeconds().toString().padStart(2, 0),
        day: days[d.getDay()],
    }
}

function chooseFont() {
    main.style.fontFamily = fonts.at(Math.random() * fonts.length)
}