const doc = document
const prototypeColorTarget = doc.getElementsByTagName("body")[0]
const prototypeColor = doc.getElementById("color")
const heightManager = doc.getElementById("height")
const footer = doc.getElementById("prototype")
const container = doc.getElementById("container")
const btnAdd = doc.getElementById("add")
const input = doc.getElementById("task")
const upcomingTask = doc.getElementById("upcomingTask")
const currentTask = doc.getElementById("currentTask")
const completedTask = doc.getElementById("completedTask")

let draggedElementNode;

container.addEventListener("click", function (ev) {
    addDragExtension()
    const targetElementa = ev.target
    const targetElement = targetElementa.parentNode
    //console.log(targetElement)
    if (targetElementa.className == "del") {
        //console.log("FOUND")
        targetElement.parentNode.remove()
    } else if (targetElementa.className == "switch") {
        if (targetElement.parentNode.parentNode.className == "taskc") {
            //console.log("We're in a correct path!")
            if (targetElement.parentNode.parentNode.id == "upcomingTask") {
let newTaskElement = doc.createElement("div")
        currentTask.appendChild(newTaskElement)
        newTaskElement.className = "task"
        newTaskElement.innerHTML += targetElement.parentNode.innerHTML
                targetElement.parentNode.remove()
            } else if (targetElement.parentNode.parentNode.id == "currentTask") {
                let newTaskElement = doc.createElement("div")
        completedTask.appendChild(newTaskElement)
        newTaskElement.className = "task"
        newTaskElement.innerHTML += `
        <p class="par">${targetElement.parentNode.getElementsByTagName("p")[0].textContent}<div></p><button class="del">Del</button></div>`
                targetElement.parentNode.remove()
            }
        }
    }
})

btnAdd.addEventListener("click", function () {
    addDragExtension()
    if (input.value != "") {
        let newTaskElement = doc.createElement("div")
        upcomingTask.appendChild(newTaskElement)
        newTaskElement.className = "task"
        newTaskElement.setAttribute("draggable",true)
        newTaskElement.innerHTML += `
        <p class="par">${input.value}</p><div><button class="switch">Switch</button><button class="del">Del</button></div>`
    }
})

const addDragExtension = () => {
    console.log("function called")
    container.childNodes.forEach(ElementNodeMain => { ElementNodeMain.childNodes.forEach(ElementNode => {
        console.log(`Child: ${ElementNode.innerHTML} Parent: ${ElementNode.parentNode.innerHTML}`)
        ElementNode.addEventListener("dragstart", ev => draggedElementNode = ev.target)
        ElementNode.addEventListener("dragend", () => draggedElementNode = null)
        ElementNode.parentNode.addEventListener("dragover", ev => ev.preventDefault)
        ElementNode.parentNode.addEventListener("drop", () => {
            if (ElementNode.parentNode) {
                ElementNode.parentNode.appendChild(ElementNode)
            }
        })
     })
  })
}
