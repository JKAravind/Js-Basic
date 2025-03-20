
function addTask(){
    task = document.getElementById("enterTask").value


    taskCell = document.createElement("div")
    taskCell.setAttribute("class","taskCell")

    taskInfo = document.createElement("p")
    taskInfo.innerHTML = task
    taskCell.appendChild(taskInfo)

    checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.name = "checkbox"
    taskCell.appendChild(checkBox)

    document.getElementById("task-container").appendChild(taskCell)


}

var taskcontainer = document.getElementById("task-container")
taskcontainer.addEventListener("change" , function(event){
    if (event.target.matches("input[name=checkbox]")){
        console.log("jello")
        if(event.target.checked){
            console.log("checked")
        }
        else{
            console.log("not")
        }
    }
})