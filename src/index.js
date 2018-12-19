import people from './people/people'


const root = document.createElement("div")
root.innerHTML = `<p>Hello	Webpack.</p>` + people[0].name
document.body.appendChild(root)

const testApp = document.getElementById('testApp')
console.log(testApp)
let pElement = document.createElement('p')
pElement.innerText = '텍스트 컨텐츠!'
testApp.appendChild(pElement)
