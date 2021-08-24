class Food {
    constructor(){}

 
// function to update food stock and last fed time
feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
Food:foodObj.getFoodStock(),
FeedTime:hour()

  })
}

// function to add foods
addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS

})
}


 display(){
    var x=80,y=100;
  
    imageMode(CENTER);
  image(this.image,720,220,70,70);
  Food=loadImage("images/milk.png");
  if(this.foodStock!=0){
  for(var i=0;i<this.foodStock;i++){
  if(i%10==0){
    x=80;
    y=y+50;
  }
  image(this.image,x,y,50,50);
}
}
}
}
