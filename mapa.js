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

 var wall = new Image()
 wall.src = "assets/wallside.png"
 wall.onload = function(){
    
    cont.drawImage(wall,0,0)

 }

//  dibujarMapa()
}

function dibujarMapa(){
        var posX = 0
        var posY = 0
        var count = 1

        var tile1 = new Image()
        var tile2 = new Image()
        tile1.src = "assets/wallside.png"
        tile2.src = "assets/marbletile.png"

    for (var i = 0; i < world.layers[0].data.length; i++) {
        
        console.log(count)
         if(world.layers[0].data[i] == 2){
        cont.drawImage(tile2,posX,posY)
            
         }
         if(world.layers[0].data[i] == 1){
           cont.drawImage(tile1,posX,posY)
          }

        console.log("posX:" + posX)
        console.log("posY:" + posY)
        console.log("")
   
        if(count <= getMapWidthInTiles()){
            posX += getTileWidth()
        }
        if(count > getMapWidthInTiles()){
         count = 1
         posX = 0
         posY += getTileHeight()
     }
      count++
      
 }

    
}





