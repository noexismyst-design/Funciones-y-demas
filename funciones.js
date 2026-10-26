document.addEventListener("DOMContentLoaded", function () {
  var btnToggle = document.getElementById("btn-toggle-login");
  var loginBox = document.getElementById("login-box");

  if (btnToggle && loginBox) {
    btnToggle.addEventListener("click", function () {
      loginBox.classList.toggle("hidden");
    });
  }

  actualizarVistaPaises("Arreglo inicial listo.");
});

let votos = { norte: 0, sur: 0, centro: 0 };
function registrarVoto() {
  let sec = document.getElementById('seccion-select').value;
  switch (sec) {
    case 'norte': votos.norte++; break;
    case 'sur': votos.sur++; break;
    case 'centro': votos.centro++; break;
  }
  document.getElementById('res-votos').innerText = 
    `Norte: ${votos.norte} | Sur: ${votos.sur} | Centro: ${votos.centro}`;
}

function sumarPositivos() {
  let suma = 0;
  let num = 0;
  do {
    num = parseFloat(prompt("Ingresa un número positivo (negativo o 0 para terminar):"));
    if (num > 0) suma += num;
  } while (num > 0);
  document.getElementById('res-suma-pos').innerText = `Suma total: ${suma}`;
}

function ordenarNumeros() {
  let a = parseFloat(document.getElementById('n1').value);
  let b = parseFloat(document.getElementById('n2').value);
  let c = parseFloat(document.getElementById('n3').value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById('res-orden').innerText = "Ingresa los 3 números.";
    return;
  }

  let nums = [a, b, c].sort((x, y) => y - x);
  document.getElementById('res-orden').innerText = `Ordenados: ${nums.join(', ')}`;
}

function calcularImpuesto() {
  let bruto = parseFloat(document.getElementById('bruto').value);
  if (isNaN(bruto)) return;
  let tasa = bruto > 15000 ? 0.16 : 0.10;
  let neto = bruto * (1 - tasa);
  document.getElementById('res-impuesto').innerText = 
    `Neto: $${neto.toFixed(2)} (Impuesto: ${tasa * 100}%)`;
}

function calcularSueldo() {
  let ant = parseFloat(document.getElementById('antiguedad').value);
  if (isNaN(ant)) return;
  let base = 40000;
  let aum = 0;

  if (ant > 10) aum = 0.10;
  else if (ant > 5) aum = 0.07;
  else if (ant > 3) aum = 0.05;
  else aum = 0.03;

  let total = base * (1 + aum);
  document.getElementById('res-sueldo').innerText = 
    `Sueldo final: ${total.toFixed(2)} € (+${aum * 100}%)`;
}

function sumarImpares() {
  let suma = 0;
  for (let i = 1; i <= 100; i += 2) {
    suma += i;
  }
  document.getElementById('res-impares').innerText = `Suma de impares (1-100): ${suma}`;
}

function mostrarAsteriscos() {
  let cant = parseInt(document.getElementById('cant-ast').value);
  if (isNaN(cant) || cant <= 0) return;
  document.getElementById('res-asteriscos').innerText = "*".repeat(cant);
}

function generarTablas() {
  let cont = document.getElementById('res-tablas');
  cont.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    let div = document.createElement('div');
    div.className = "tabla-item";
    let html = `<strong>Tabla del ${i}</strong><br>`;
    for (let j = 1; j <= 10; j++) {
      html += `${i} x ${j} = ${i * j}<br>`;
    }
    div.innerHTML = html;
    cont.appendChild(div);
  }
}

let paises = ["México", "Japón", "Canadá", "Francia", "Brasil", "Alemania", "Chile", "Italia", "España", "Perú"];

function actualizarVistaPaises(txt = "") {
  document.getElementById('arr-paises').innerText = JSON.stringify(paises);
  document.getElementById('res-arreglo').innerText = `Operación: ${txt}`;
}

function ejPop() {
  let borrado = paises.pop();
  actualizarVistaPaises(`pop() eliminó: "${borrado}"`);
}

function ejShift() {
  let borrado = paises.shift();
  actualizarVistaPaises(`shift() eliminó: "${borrado}"`);
}

function ejPush() {
  let p = prompt("Ingresa un país:");
  if (p) {
    paises.push(p);
    actualizarVistaPaises(`push() agregó: "${p}"`);
  }
}

function ejUnshift() {
  let p = prompt("Ingresa un país:");
  if (p) {
    paises.unshift(p);
    actualizarVistaPaises(`unshift() agregó al inicio: "${p}"`);
  }
}

function ejSplice() {
  paises.splice(1, 1, "Argentina");
  actualizarVistaPaises(`splice(1, 1, 'Argentina') reemplazó la posición 1`);
}

function ejDelete() {
  delete paises[0];
  actualizarVistaPaises(`delete paises[0] dejó la primera posición vacía (undefined)`);
}

function ejReverse() {
  paises.reverse();
  actualizarVistaPaises("reverse() invirtió el arreglo");
}

function ejSort() {
  paises.sort();
  actualizarVistaPaises("sort() ordenó el arreglo");
}

function ejConcat() {
  let extra = ["Corea", "Colombia"];
  let nuevo = paises.concat(extra);
  document.getElementById('res-arreglo').innerText = `concat(): ${JSON.stringify(nuevo)}`;
}

function ejJoin() {
  let cadena = paises.join(" - ");
  document.getElementById('res-arreglo').innerText = `join(" - "): ${cadena}`;
}

function ejLength() {
  document.getElementById('res-arreglo').innerText = `length: El arreglo tiene ${paises.length} elementos`;
}
