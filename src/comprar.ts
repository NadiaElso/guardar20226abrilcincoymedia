const conteiner=document.createElement("div")as HTMLDivElement;
const lista=document.createElement("ul") as HTMLUListElement;
const etiquetaContenido=document.createElement("il")as HTMLUListElement;
const contenido=document.createElement("textarea")as HTMLTextAreaElement;
const input=document.createElement("input")as HTMLInputElement;
console.log(input);
console.log(contenido);
console.log(etiquetaContenido);
console.log(lista);

console.log(conteiner);

conteiner.appendChild(lista);
lista.appendChild(etiquetaContenido);
etiquetaContenido.appendChild(contenido);
etiquetaContenido.appendChild(input);

const productos:string[]=new Array(2);
productos[0]="Azucar";
productos[1]="Yerba";

function CrearLista(lista:String[]) {
  for (let index = 0; index < lista.length; index++) {
   const etiquetaContenido=lista.values;
    console.log(etiquetaContenido);
  }
}

CrearLista(productos);