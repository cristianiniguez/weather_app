require('./index.css')

const { Weather } = require('./Weather')
const { UI } = require('./UI')
const { Store } = require('./Store')

const store = new Store()
const { city, countryCode } = store.getLocationData()

const weather = new Weather(city, countryCode)
const ui = new UI()

async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data)
    ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', e => {
    e.preventDefault()
    const city = document.getElementById('city').value
    const countryCode = document.getElementById('country-code').value
    weather.changeLocation(city, countryCode)
    store.setLocationData(city, countryCode)
    fetchWeather()
})
document.addEventListener('DOMContentLoaded', fetchWeather)