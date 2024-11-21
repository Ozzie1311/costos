document.addEventListener('DOMContentLoaded', function(){
  const totalAcumulado = document.getElementById('total-acumulado');
  const totalAcumuladoDivisa = document.getElementById('total-divisa');
  let costoTotal = 0;

  const botones = document.querySelectorAll('.btn');
  botones.forEach(boton => {
    boton.addEventListener('click', function(){
      const parentDiv = boton.parentElement;
      const precio = parseFloat(parentDiv.querySelector('.precio').value);
      const cantidad = parseFloat(parentDiv.querySelector('.cantidad').value);
      const resultado = parentDiv.querySelector('.resultado');

     
      if(isNaN(precio) || isNaN(cantidad)){
        alert('Por favor, ingrese un valor válido');
        return;
      }

      if(parentDiv.className.includes('huevo')){
       const costoUnidad = precio / 15; //costo de la unidad.
       const costoTotalHuevo = costoUnidad * cantidad; //costo Total por la cantidad de huevos.
       resultado.textContent = costoTotalHuevo.toFixed(2);
       costoTotal += costoTotalHuevo; //Actualizando el costo total de los huevos. 
      } else {
        const gramos = precio / 1000;//Costo de cada gramo.
        const valor = gramos * cantidad;//Costo total por KG.
        resultado.textContent = valor.toFixed(2);
        costoTotal += valor;//Actualizando el valor del costo total.
      }
      totalAcumulado.textContent = costoTotal.toFixed(2);
      

      const tasaDivisa = parseFloat(document.querySelector('#input-tasa').value);
      const operacion = costoTotal / tasaDivisa;
      console.log(costoTotal)
      console.log(tasaDivisa)
      totalAcumuladoDivisa.textContent = operacion.toFixed(2);

    });
});

});