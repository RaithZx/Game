window.addEventListener("load", init())

// var mapHeight
// var mapWidth 
// var canvas 
// var cont 

function init(){
 mapHeight = getMapHeightInTiles()
 mapWidth = getMapWidthInTiles()

 canvas = document.getElementById("canvas")
 canvas.width = getMapWidthInTiles() * getTileWidth()
 canvas.height = getMapHeightInTiles() * getTileHeight()
 cont = canvas.getContext("2d")

 dibujarMapa()
}

function dibujarMapa(){
        var posX = 0
        var posY = 0
        var count = 0

    for (var i = 0; i < world.layers[0].data.length; i++) {
        count++
        console.log("hola: "+ count)
        var tile = new Image()
        
        tile.onload = function(){
        console.log("mayor")
        if(i == 2){
            tile.src = "assets/marbletile.png"
        }
        if(i == 1){
            tile.src = "assets/wallside.png"
        }
        if(count > getMapWidthInTiles()){
            count = 0
            posX = 0
            posY += getTileHeight()
        }else{
            posX += getTileWidth()
            posY = 0 
        }

        cont.drawImage(tile,posX,posY)
        }
    }
}





