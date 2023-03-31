function somenumber(){
  let someanswer = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?!")
  switch (someanswer) {
    case "5":
      alert("Ответ верный!");
      break;
    case "пять":
        alert("Ответ верный!");
      break;
    default:
      alert("Ответ неверный!");
      break;
  }
}

somenumber()
