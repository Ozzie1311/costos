

document.addEventListener('DOMContentLoaded', function() {
    
    const precioHarina = document.getElementById('precio-harina');
    const grsHarina = document.getElementById('grs-harina');
    const btnHarina = document.getElementById('btn-harina');
    const spanHarina = document.getElementById('costo-harina');

    btnHarina.addEventListener('click', function(){
        return spanHarina.textContent =  (costoGramo(precioHarina.value) * Number(grsHarina.value)).toFixed(2)
    })
});

function costoGramo(precio) {
    let gramos = Number(precio) / 1000;
    return gramos;
}
