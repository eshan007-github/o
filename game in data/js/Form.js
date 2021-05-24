class Form {
  constructor() {
    this.input = createInput("Name");
    this.greeting = createElement('h3');
    this.button = createButton('Play');
  }

  hide(){

    this.input.hide();
    this.button.hide();
    this.greeting.hide();

  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    //mousePressed is called inside the display function which is called by the form object. ()=>
    // Arrow function ensures that 'this' remains bound to the form object.
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount
      player.update()
      player.updateCount(playerCount);
      //var
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}
