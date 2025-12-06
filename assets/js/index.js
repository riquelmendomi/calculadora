// ---------------------------------------------------------
// FUNCION PRINCIPAL: calcular la propina según monto y %
// ---------------------------------------------------------
function calcularPropina(monto, porcentaje) {
  return monto * (porcentaje / 100);
}

// ---------------------------------------------------------
// FORMATEADOR: convierte números a moneda CLP  / Usando separadores de miles y sin decimales.
// ---------------------------------------------------------
function formatoCLP(valor) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(valor);
}

// ---------------------------------------------------------
// EVENTO: Se ejecuta cuando se hace clic en el botón "Calcular"
// ---------------------------------------------------------
document.getElementById("calcular").addEventListener("click", function () {

  // 1. Obtener los datos del usuario
  const monto = parseFloat(document.getElementById("monto").value);
  const porcentaje = parseFloat(document.getElementById("porcentaje").value);

  // 2. Validación
  if (isNaN(monto) || isNaN(porcentaje)) {
    alert("Por favor ingresa valores válidos.");
    return;
  }

  // 3. Calcular propina y total
  const propina = calcularPropina(monto, porcentaje);
  const total = monto + propina;

  // 4. Mostrar en el HTML con formato CLP
  document.getElementById("propina").textContent = formatoCLP(propina);
  document.getElementById("total").textContent = formatoCLP(total);

  // 5. Mostrar en consola con el formato del ejercicio, pero en CLP
  console.log("--- Resumen de la Cuenta ---");
  console.log("Monto de la cuenta: " + formatoCLP(monto));
  console.log("Propina (" + porcentaje + "%): " + formatoCLP(propina));
  console.log("Total a pagar: " + formatoCLP(total));
});
