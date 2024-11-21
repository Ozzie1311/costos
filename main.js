document.addEventListener('DOMContentLoaded', function(){
  const totalAcumulado = document.getElementById('total-acumulado');
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

      if(parentDiv.className === 'huevo') {
        const unidades = precio / 15;
        const precioHue = unidades * cantidad
        resultado.textContent = precioHue.toFixed(2);
      } 
        const gramos = precio / 1000;
        const valor = gramos * cantidad;
      

      resultado.textContent = valor.toFixed(2);

      costoTotal += valor;
      totalAcumulado.textContent = costoTotal.toFixed(2);
    });
});

});