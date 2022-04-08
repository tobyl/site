function fetchWeather() {
  const lat = '42.1386014'
  const lon = '-82.7016631'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f3800980b9030cdeb84ebf0f2309ed31`
  fetch(url)  
    .then(res => res.json())
    .then(data => {
      const { icon, description } = data.weather[0]
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
      const weatherIcon = document.createElement('img')
      weatherIcon.setAttribute('src', iconUrl)
      weatherIcon.setAttribute('alt', description)
      document.body.appendChild(weatherIcon)
    })
}

// window.onload = fetchWeather()