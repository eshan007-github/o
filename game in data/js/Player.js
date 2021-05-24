class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      "name":this.name,
      "distance":this.distance
    });
  }

  /*Static functions are not attached to each object of the class */ 
  //getPlayerInfo This function will not be attached to any particular player
  //Hence will be called by the Class and not the object of the class
  static getPlayerInfo(){

    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",function(data){
      allPlayers = data.val();
    })
  

  }

}
