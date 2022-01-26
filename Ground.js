//Molde ó clase para el suelo 
class Ground {
  constructor(x,y,w,h){
      //let te permite declarar variables limitando su alcance
      let options = {
          isStatic: true
      };
      //Creamos cuerpo rectangular para el suelo
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;
      //Agregamos cuerpo del suelo al mundo 
      World.add(world,this.body);
  }
  //Función para mostrar el cuerpo
  display(){
      let pos = this.body.position;
      push();//Push captura la nueva posición 
          rectMode(CENTER);//Cambiamos el punto de origen para las coordenadas
          noStroke();//Sin borde
          fill("gray");
          rect(pos.x,pos.y,this.w,this.h);
      pop();//Vuelve a la posición anterior 
  }
}