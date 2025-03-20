
function addTask(){
    task = document.getElementById("enterTask").value



    taskCell = document.createElement("div")
    taskCell.setAttribute("class","taskCell")

    taskInfo = document.createElement("p")
    taskInfo.innerHTML = task
    taskCell.appendChild(taskInfo)

    checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    taskCell.appendChild(checkBox)






    document.getElementById("task-container").appendChild(taskCell)

}