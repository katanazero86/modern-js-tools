import people from './people/people'

const root = document.createElement("div")
root.innerHTML = `<p>Hello	Webpack.</p>` + people[0].name
document.body.appendChild(root)