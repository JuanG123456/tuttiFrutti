//defino el arreglo que representa el abecedario
let abecedario=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

//defino las etiquetas de HTML que se usan aca
const sortear=document.querySelector("#Sortear")
const reiniciar=document.querySelector("#Reiniciar")
const imagen=document.querySelector("img");
imagen.setAttribute("src","img/inicia.jpg");

//Entra un numero maximo y saca un random hasta ese nuemro
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//funcion que devuelve la letra
function obtenerLetra(num){
    return abecedario[num];
}

//funcion que elimina la letra que ya salio
function eliminar(array, num) {
    var resultado = []
    for (var i = 0; i < array.length; i++) {
      if (i !== num) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }

  //Inicializa el abecedario
  function reiniciarAbecedario(){
    abecedario=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
    return abecedario.length;
    
  }

  //click en boton sortear
  sortear.addEventListener("click", (event) => {

    setTimeout(()=>{
      imagen.setAttribute("src","img/3.jpg");
    },1000)
    setTimeout(()=>{
      imagen.setAttribute("src","img/2.jpg");
    },2000)
    setTimeout(()=>{
      imagen.setAttribute("src","img/1.jpg");
    },3000)
    setTimeout(()=>{
      var num=getRandomInt(abecedario.length);
      var letra=obtenerLetra(num);     
      abecedario=eliminar(abecedario,num);
         
      switch(letra){
        case "A":
          imagen.setAttribute("src","img/a.jpg");
          break;
        case "B":
          imagen.setAttribute("src","img/b.jpg");
          break;
        case "C":
          imagen.setAttribute("src","img/c.jpg");
          break;
        case "D":
          imagen.setAttribute("src","img/d.jpg");
          break;
        case "E":
          imagen.setAttribute("src","img/e.jpg");
          break;
        case "F":
          imagen.setAttribute("src","img/f.jpg");
          break;
        case "G":
          imagen.setAttribute("src","img/g.jpg");
          break;
        case "H":
          imagen.setAttribute("src","img/h.jpg");
          break;
        case "I":
          imagen.setAttribute("src","img/i.jpg");
          break;
        case "J":
          imagen.setAttribute("src","img/j.jpg");
          break;
        case "K":
          imagen.setAttribute("src","img/k.jpg");
          break;
        case "L":
          imagen.setAttribute("src","img/l.jpg");
          break;
        case "M":
          imagen.setAttribute("src","img/m.jpg");
          break;
        case "N":
          imagen.setAttribute("src","img/n.jpg");
          break;
        case "O":
          imagen.setAttribute("src","img/o.jpg");
          break;
        case "P":
          imagen.setAttribute("src","img/p.jpg");
          break;
        case "Q":
          imagen.setAttribute("src","img/q.jpg");
          break;
        case "R":
          imagen.setAttribute("src","img/r.jpg");
          break;
        case "S":
          imagen.setAttribute("src","img/s.jpg");
          break;
        case "T":
          imagen.setAttribute("src","img/t.jpg");
          break;
        case "U":
          imagen.setAttribute("src","img/u.jpg");
          break;
        case "V":
          imagen.setAttribute("src","img/v.jpg");
          break;
        case "W":
          imagen.setAttribute("src","img/w.jpg");
          break;
        case "X":
          imagen.setAttribute("src","img/x.jpg");
          break;
        case "Y":
          imagen.setAttribute("src","img/y.jpg");
          break;
        case "Z":
          imagen.setAttribute("src","img/z.jpg");
          break;
        default:
          imagen.setAttribute("src","img/fin.jpg");
          break;
      }
      
    },4000)

    
  });

  //click en boton reiniciar
  reiniciar.addEventListener("click",(event)=>{
    var total=reiniciarAbecedario();
    console.log(total);
    imagen.setAttribute("src","img/inicia.jpg");
  });

