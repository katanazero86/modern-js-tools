document.getElementById('profile-body').innerHTML = '<p>어흥!!! app.js</p>'

const button = document.createElement("button")
button.textContent = 'Open Alert'
document.body.appendChild(button)

button.addEventListener('click', function () {
    alert('zzzz')
})