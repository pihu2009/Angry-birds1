class Bird extends Baseclass
{
 constructor(x,y,w,h,d)
 {

  super(x,y,w,h)
  this.image=loadImage("sprites/bird.png")
  Body.setDensity(this.body,d)
 }
  
 display()
 {
  var pos =  this.body.position  

  //pos.x= mouseX
  //pos.y= mouseY
  
  super.display()

 }





 }











































































































