
flag = 0
currPlayer = "nil"


function gameStart(){
    grid = [[0,0,0],[0,0,0],[0,0,0]]

    currPlayer = "X"


    let state = document.getElementById("game-status")
    state.innerHTML = `Player ${currPlayer} needs To play`

}


function userPlayed(event){
    let clickedDiv = event.target.id;
    console.log(clickedDiv[1],"111")

    grid[clickedDiv[0]][clickedDiv[1]] = currPlayer


   

    let box = document.getElementById(clickedDiv)
    box.innerHTML = `<b>${currPlayer}</b>`

        
    if (checkWin(currPlayer)){
        alert("Won")
    }
    



    currPlayer = !flag == 0 ? "X" : "O" ;
    flag = !flag






    let state = document.getElementById("game-status")
    
    state.innerHTML = `Player ${currPlayer} needs To play`
}


function checkWin(currPlayer){
    console.log(currPlayer,grid,checkHorizontal(currPlayer),checkVertical(currPlayer),checkDiagonal(currPlayer))

    if (checkHorizontal(currPlayer) || checkVertical(currPlayer) || checkDiagonal(currPlayer)){
        return true
    }
    return false
}

function checkHorizontal(currPlayer){
    for (i in grid){

        checksum = 0
        for (j in i){
            if (j == currPlayer){
                checksum +=1
            }
        }
        if (checksum == 2) return true;
        console.log(checksum)
    }
    return checksum == 3 ?true : false
}

function checkDiagonal(currPlayer){
    if (grid[0][0]== currPlayer && currPlayer == grid[1][1] && currPlayer == grid[2][2]){
        return true
    }
    if (currPlayer == grid[0][2] && currPlayer == grid[1][1] && currPlayer==grid[2][0]){
        return true
    }
    return false
}

function checkVertical(currPlayer){
    for (let i = 0 ; i<=2 ; i++){
        if (grid[0][i]==currPlayer && grid[1][i]== currPlayer && currPlayer == grid[2][i]){
            return true

        }
    }
    return false
}