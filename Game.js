class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
  }
}
 play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getBikesAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
    
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;
    }

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        bikes[inde+1].x = x;
        bikes[index+1].y = y;
      }
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("green");
          ellipse(x,y,60,60);
          bikes[index - 1].shapeColor = "green";
          camera.position.x = displayWidth/2;
          camera.position.y = bikes[index-1].y;
        }
      
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank = player.rank + 1;
      Player.updateBikesAtEnd(player.rank);
    }
    drawSprites();
  }
}
