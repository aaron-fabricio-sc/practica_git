var imagenes =[];
imagenes["cauchin"]="vaca.png";
imagenes["pokacho"]="pollo.png";
imagenes["tosinosaurio"]="cerdo.png";

console.log(imagenes);


class pakiman{
    constructor(n, v, a)
    {
        this.imagen=new Image();
        this.nombre =n;
        this.vida =v;
        this.ataque =a;
      

        this.imagen.src=imagenes[this.nombre];
    }
    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<p >")
 
        document.write("<strong>"+ this.nombre +"</strong><br />");
        document.write( "Vida "+this.vida+"<br />");
        document.write("ataque "+this.ataque+"<hr />")
    }
}





var coleccion=[];
coleccion.push(new pakiman("cauchin", 100 ,30));
coleccion.push(new pakiman("pokacho",80,50));
coleccion.push(new pakiman("tosinosaurio",120,40));
console.log(coleccion);

for(var aa of coleccion){
     aa.mostrar();
}





