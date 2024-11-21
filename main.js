    let costoTotal = 0;
    const precioHarina = document.getElementById('precio-harina');
    const grsHarina = document.getElementById('grs-harina');
    const btnHarina = document.getElementById('btn-harina');
    const spanHarina = document.getElementById('costo-harina');

    const precioAzucar = document.getElementById('precio-azucar');
    const grsAzucar = document.getElementById('grs-azucar');
    const btnAzucar = document.getElementById('btn-azucar');
    const spanAzucar = document.getElementById('costo-azucar');

    btnHarina.addEventListener('click', function(){
        let costoHarina =  (costoGramo(precioHarina.value) * Number(grsHarina.value)).toFixed(2);
        costoTotal += Number(costoHarina);
        console.log(costoTotal);
        return spanHarina.textContent = costoHarina;
    });

    btnAzucar.addEventListener('click', function(){
        return spanAzucar.textContent =  (costoGramo(precioAzucar.value) * Number(grsAzucar.value)).toFixed(2)
    });



function costoGramo(precio) {
    let gramos = Number(precio) / 1000;
    return gramos;
}
