
gridContainer = document.getElementById("grid-container")


function startMaze(){

    for (let i = 0;i<7;i++){
        for (let j=0;j<7;j++){

        cell = document.createElement("div")
        gridContainer.appendChild(cell)
        cell.classList.add("cell")
        cell.id = `${i}-${j}`
        }
    }

    gridArray = Array.from({length:7} , ()=>Array(7).fill(1))
    visited = new Set()
    direction = [[0, -1], [0, 1], [1, 0], [-1, 0]];

    grid(2,2)
    console.log(visited)
}


function grid(i,j){


    if (i<0 || j<0  || i>=gridArray.length || j>=gridArray.length ||  visited.has(`${i}-${j}`) || gridArray[i][j]==0){
        return
    }
    visited.add(`${i}-${j}`)
    gridArray[i][j]=0
    
    setTimeout(()=>{
        colorGrid = document.getElementById(`${i}-${j}`)
        colorGrid.style.backgroundColor = "black";
    } , visited.size*100)

    shuffleArray(direction)

    console.log(direction)

    for (let count=0 ; count<4 ; count++){
        let[row , col] = direction[count]
        console.log(row,col)
        grid(i+row,j+col)
    }
    return 
}



function shuffleArray(direction){
    

    for (let idx = 3 ; idx>0 ; idx--){

        console.log(Math.floor(Math.random()*(idx+1)))

        let randomIndex = Math.floor(Math.random()*(idx+1));

        console.log(direction[randomIndex]);

        [direction[idx],direction[randomIndex]] = [direction[randomIndex],direction[idx]]
        

    }
    return 

}