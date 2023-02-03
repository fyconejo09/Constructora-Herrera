

    function imprimirNombre(){

          // Inicializamos la variable para guardar el total de venta realizada
          var totalventarealizada = 0;

          // Iteramos sobre el rango del 1 al 50
          for (var i = 0; i <= 50; i++) {
            var ariaLabel = document.querySelector(`.highcharts-point.highcharts-color-${i}`)?.getAttribute("aria-label");

            // Verificamos si el atributo "aria-label" contiene la palabra "Otros"
            if (ariaLabel && ariaLabel.includes("Vendido")) {
              var valor = ariaLabel.split(', ')[1];

              // Verificamos si el valor es válido
              if (valor) {
                // Convertimos el valor a formato numérico y lo sumamos al total de venta realizada
                totalventarealizada += parseFloat(valor.replace(/[^\d.-]/g, '')) || 0;

                // Detenemos el bucle for cuando se encuentre el resultado
                break;
              }
            }
          }
//------------------------------------------------------------------------------------------------------------------------------------------

    // Inicializamos la variable para guardar el total de venta realizada
    var adquirioencompetencia = 0;

    // Iteramos sobre el rango del 1 al 50
    for (var i = 0; i <= 50; i++) {
      var ariaLabel = document.querySelector(`.highcharts-point.highcharts-color-${i}`)?.getAttribute("aria-label");

      // Verificamos si el atributo "aria-label" contiene la palabra "Otros"
      if (ariaLabel && ariaLabel.includes("Adquirió en competencia")) {
        var valor = ariaLabel.split(', ')[1];

        // Verificamos si el valor es válido
        if (valor) {
          // Convertimos el valor a formato numérico y lo sumamos al total de venta realizada
          adquirioencompetencia += parseFloat(valor.replace(/[^\d.-]/g, '')) || 0;

          // Detenemos el bucle for cuando se encuentre el resultado
          break;
        }
      }
    }
//------------------------------------------------------------------------------------------------------------------------------------------

    // Inicializamos la variable para guardar el total de venta realizada
    var presupuestonoadquirido = 0;

    // Iteramos sobre el rango del 1 al 50
    for (var i = 0; i <= 50; i++) {
      var ariaLabel = document.querySelector(`.highcharts-point.highcharts-color-${i}`)?.getAttribute("aria-label");

      // Verificamos si el atributo "aria-label" contiene la palabra "Otros"
      if (ariaLabel && ariaLabel.includes("Presupuesto, no adquirido")) {
        var valor = ariaLabel.split(', ')[1];

        // Verificamos si el valor es válido
        if (valor) {
          // Convertimos el valor a formato numérico y lo sumamos al total de venta realizada
          presupuestonoadquirido += parseFloat(valor.replace(/[^\d.-]/g, '')) || 0;

          // Detenemos el bucle for cuando se encuentre el resultado
          break;
        }
      }
    }

//------------------------------------------------------------------------------------------------------------------------------------------

    // Inicializamos la variable para guardar el total de venta realizada
    var licitacionposiblecompra = 0;

    // Iteramos sobre el rango del 1 al 50
    for (var i = 0; i <= 50; i++) {
      var ariaLabel = document.querySelector(`.highcharts-point.highcharts-color-${i}`)?.getAttribute("aria-label");

      // Verificamos si el atributo "aria-label" contiene la palabra "Otros"
      if (ariaLabel && ariaLabel.includes("Licitación  posible compra")) {
        var valor = ariaLabel.split(', ')[1];

        // Verificamos si el valor es válido
        if (valor) {
          // Convertimos el valor a formato numérico y lo sumamos al total de venta realizada
          licitacionposiblecompra += parseFloat(valor.replace(/[^\d.-]/g, '')) || 0;

          // Detenemos el bucle for cuando se encuentre el resultado
          break;
        }
      }
    }
//------------------------------------------------------------------------------------------------------------------------------------------

    // Inicializamos la variable para guardar el total de venta realizada
    var nosehallamado = 0;

    // Iteramos sobre el rango del 1 al 50
    for (var i = 0; i <= 50; i++) {
      var ariaLabel = document.querySelector(`.highcharts-point.highcharts-color-${i}`)?.getAttribute("aria-label");

      // Verificamos si el atributo "aria-label" contiene la palabra "Otros"
      if (ariaLabel && ariaLabel.includes("No se ha llamado")) {
        var valor = ariaLabel.split(', ')[1];

        // Verificamos si el valor es válido
        if (valor) {
          // Convertimos el valor a formato numérico y lo sumamos al total de venta realizada
          nosehallamado += parseFloat(valor.replace(/[^\d.-]/g, '')) || 0;

          // Detenemos el bucle for cuando se encuentre el resultado
          break;
        }
      }
    }
//------------------------------------------------------------------------------------------------------------------------------------------

    // Inicializamos la variable para guardar el total de venta realizada
    var otros = 0;

    // Iteramos sobre el rango del 1 al 50
    for (var i = 0; i <= 50; i++) {
      var ariaLabel = document.querySelector(`.highcharts-point.highcharts-color-${i}`)?.getAttribute("aria-label");

      // Verificamos si el atributo "aria-label" contiene la palabra "Otros"
      if (ariaLabel && ariaLabel.includes("Otros")) {
        var valor = ariaLabel.split(', ')[1];

        // Verificamos si el valor es válido
        if (valor) {
          // Convertimos el valor a formato numérico y lo sumamos al total de venta realizada
          otros += parseFloat(valor.replace(/[^\d.-]/g, '')) || 0;

          // Detenemos el bucle for cuando se encuentre el resultado
          break;
        }
      }
    }
//------------------------------------------------------------------------------------------------------------------------------------------

    // Inicializamos la variable para guardar el total de venta realizada
    var presupuestoposiblecompraafuturo = 0;

    // Iteramos sobre el rango del 1 al 50
    for (var i = 0; i <= 50; i++) {
      var ariaLabel = document.querySelector(`.highcharts-point.highcharts-color-${i}`)?.getAttribute("aria-label");

      // Verificamos si el atributo "aria-label" contiene la palabra "Otros"
      if (ariaLabel && ariaLabel.includes("Presupuesto posible compra a futuro")) {
        var valor = ariaLabel.split(', ')[1];

        // Verificamos si el valor es válido
        if (valor) {
          // Convertimos el valor a formato numérico y lo sumamos al total de venta realizada
          presupuestoposiblecompraafuturo += parseFloat(valor.replace(/[^\d.-]/g, '')) || 0;

          // Detenemos el bucle for cuando se encuentre el resultado
          break;
        }
      }
    }
//------------------------------------------------------------------------------------------------------------------------------------------

    // Inicializamos la variable para guardar el total de venta realizada
    var nohuborespuesta = 0;

    // Iteramos sobre el rango del 1 al 50
    for (var i = 0; i <= 50; i++) {
      var ariaLabel = document.querySelector(`.highcharts-point.highcharts-color-${i}`)?.getAttribute("aria-label");

      // Verificamos si el atributo "aria-label" contiene la palabra "Otros"
      if (ariaLabel && ariaLabel.includes("No hubo respuesta")) {
        var valor = ariaLabel.split(', ')[1];

        // Verificamos si el valor es válido
        if (valor) {
          // Convertimos el valor a formato numérico y lo sumamos al total de venta realizada
          nohuborespuesta += parseFloat(valor.replace(/[^\d.-]/g, '')) || 0;

          // Detenemos el bucle for cuando se encuentre el resultado
          break;
        }
      }
    }
//------------------------------------------------------------------------------------------------------------------------------------------

    // Inicializamos la variable para guardar el total de venta realizada
    var notuvimosdisponibilidaddeentrega = 0;

    // Iteramos sobre el rango del 1 al 50
    for (var i = 0; i <= 50; i++) {
      var ariaLabel = document.querySelector(`.highcharts-point.highcharts-color-${i}`)?.getAttribute("aria-label");

      // Verificamos si el atributo "aria-label" contiene la palabra "Otros"
      if (ariaLabel && ariaLabel.includes("No tuvimos disponibilidad de entrega")) {
        var valor = ariaLabel.split(', ')[1];

        // Verificamos si el valor es válido
        if (valor) {
          // Convertimos el valor a formato numérico y lo sumamos al total de venta realizada
          notuvimosdisponibilidaddeentrega += parseFloat(valor.replace(/[^\d.-]/g, '')) || 0;

          // Detenemos el bucle for cuando se encuentre el resultado
          break;
        }
      }
    }
//------------------------------------------------------------------------------------------------------------------------------------------


        // Tomamos todos los totales y los sumamos para reflejarlos en la etiqueta label "Total General"
          var total = totalventarealizada +
                      adquirioencompetencia +
                      presupuestonoadquirido +
                      licitacionposiblecompra +
                      nosehallamado +
                      otros +
                      presupuestoposiblecompraafuturo +
											nohuborespuesta +
											notuvimosdisponibilidaddeentrega;

          total =  total.toFixed(2);
//------------------------------------------------------------------------------------------------------------------------------------------------
          // Tomamos cada valor generado de cada barra y lo dividimos entre el total general para obtener el porcentaje que
          // representa el total de cada barra entrel el total general

              var ventarealizadaporcentaje   = (totalventarealizada/total)*100;
              if (isNaN(ventarealizadaporcentaje) || !isFinite(ventarealizadaporcentaje)) {
                ventarealizadaporcentaje = 0;
              }
              ventarealizadaporcentaje = ventarealizadaporcentaje  .toFixed(2);

//-----------------------------------------------------------------------------------------------------------
              var adquirioencompetenciaporcentaje   = (adquirioencompetencia/total)*100;
              if (isNaN(adquirioencompetenciaporcentaje) || !isFinite(adquirioencompetenciaporcentaje)) {
                adquirioencompetenciaporcentaje = 0;
              }
              adquirioencompetenciaporcentaje = adquirioencompetenciaporcentaje  .toFixed(2);

//-----------------------------------------------------------------------------------------------------------
              var presupuestonoadquiridoporcentaje   = (presupuestonoadquirido/total)*100;
              if (isNaN(presupuestonoadquiridoporcentaje) || !isFinite(presupuestonoadquiridoporcentaje)) {
                presupuestonoadquiridoporcentaje = 0;
              }
              presupuestonoadquiridoporcentaje = presupuestonoadquiridoporcentaje  .toFixed(2);

//-----------------------------------------------------------------------------------------------------------
              var licitacionposiblecompraporcentaje = (licitacionposiblecompra/total)*100;
              if (isNaN(licitacionposiblecompraporcentaje) || !isFinite(licitacionposiblecompraporcentaje)) {
                licitacionposiblecompraporcentaje = 0;
              }
              licitacionposiblecompraporcentaje = licitacionposiblecompraporcentaje  .toFixed(2);

//-----------------------------------------------------------------------------------------------------------
              var nosehallamadoporcentaje = (nosehallamado/total)*100;
              if (isNaN(nosehallamadoporcentaje) || !isFinite(nosehallamadoporcentaje)) {
                nosehallamadoporcentaje = 0;
              }
              nosehallamadoporcentaje = nosehallamadoporcentaje.toFixed(2);

//-----------------------------------------------------------------------------------------------------------
              var otrosporcentaje = (otros/total)*100;
              if (isNaN(otrosporcentaje) || !isFinite(otrosporcentaje)) {
                otrosporcentaje = 0;
              }
              otrosporcentaje = otrosporcentaje.toFixed(2);

//-----------------------------------------------------------------------------------------------------------
              var presupuestoposiblecompraafuturoporcentaje = (presupuestoposiblecompraafuturo/total)*100;
              if (isNaN(presupuestoposiblecompraafuturoporcentaje) || !isFinite(presupuestoposiblecompraafuturoporcentaje)) {
                presupuestoposiblecompraafuturoporcentaje = 0;
              }
              presupuestoposiblecompraafuturoporcentaje = presupuestoposiblecompraafuturoporcentaje.toFixed(2);

//------------------------------------------------------------------------------------------------------------------------------------------------
          var nohuborespuestaporcentaje = (nohuborespuesta/total)*100;
              if (isNaN(nohuborespuestaporcentaje) || !isFinite(nohuborespuestaporcentaje)) {
                nohuborespuestaporcentaje = 0;
              }
              nohuborespuestaporcentaje = nohuborespuestaporcentaje.toFixed(2);

//------------------------------------------------------------------------------------------------------------------------------------------------

        var notuvimosdisponibilidaddeentregaporcentaje = (notuvimosdisponibilidaddeentrega/total)*100;
              if (isNaN(notuvimosdisponibilidaddeentregaporcentaje) || !isFinite(notuvimosdisponibilidaddeentregaporcentaje)) {
                notuvimosdisponibilidaddeentregaporcentaje = 0;
              }
              notuvimosdisponibilidaddeentregaporcentaje = notuvimosdisponibilidaddeentregaporcentaje.toFixed(2);

//------------------------------------------------------------------------------------------------------------------------------------------------

            // Mostramos el resultado en el elemento con id "resultadoadquirioencompetencia"
        document.getElementById("resultadototalventarealizada").innerHTML = "₡" + totalventarealizada.toLocaleString();
        document.getElementById("resultadoadquirioencompetencia").innerHTML = "₡" + adquirioencompetencia.toLocaleString();
        document.getElementById("resultadopresupuestonoadquirido").innerHTML = "₡" + presupuestonoadquirido.toLocaleString();
        document.getElementById("resultadolicitacionposiblecompra").innerHTML = "₡" + licitacionposiblecompra.toLocaleString();
        document.getElementById("resultadonosehallamado").innerHTML = "₡" + nosehallamado.toLocaleString();
        document.getElementById("resultadootros").innerHTML = "₡" + otros.toLocaleString();
        document.getElementById("resultadopresupuestoposiblecompraafuturo").innerHTML = "₡" + presupuestoposiblecompraafuturo.toLocaleString();
        document.getElementById("resultadonohuborespuesta").innerHTML = "₡" + nohuborespuesta.toLocaleString();
        document.getElementById("resultadonotuvimosdisponibilidaddeentrega").innerHTML = "₡" + notuvimosdisponibilidaddeentrega.toLocaleString();
        document.getElementById("TotalGeneral").innerHTML = "₡" + parseFloat(total.replace("$", "")).toLocaleString();


        // aca se muestra  el resultado de divider cada ttal entre el total general enformato de porcentaje
        document.getElementById("resultadototalventarealizadaporcentaje").innerHTML = "%" + ventarealizadaporcentaje.toLocaleString();
        document.getElementById("resultadoadquirioencompetenciaporcentaje").innerHTML = "%" + adquirioencompetenciaporcentaje.toLocaleString();
        document.getElementById("resultadopresupuestonoadquiridoporcentaje").innerHTML = "%" + presupuestonoadquiridoporcentaje.toLocaleString();
        document.getElementById("resultadolicitacionposiblecompraporcentaje").innerHTML = "%" + licitacionposiblecompraporcentaje.toLocaleString();
        document.getElementById("resultadonosehallamadoporcentaje").innerHTML = "%" + nosehallamadoporcentaje.toLocaleString();
        document.getElementById("resultadootrosporcentaje").innerHTML = "%" + otrosporcentaje.toLocaleString();
        document.getElementById("resultadopresupuestoposiblecompraafuturoporcentaje").innerHTML = "%" + presupuestoposiblecompraafuturoporcentaje.toLocaleString();
				document.getElementById("resultadonohuborespuestaporcentaje").innerHTML = "%" + nohuborespuestaporcentaje.toLocaleString();
				document.getElementById("resultadonotuvimosdisponibilidaddeentregaporcentaje").innerHTML = "%" + notuvimosdisponibilidaddeentregaporcentaje.toLocaleString();

    }
