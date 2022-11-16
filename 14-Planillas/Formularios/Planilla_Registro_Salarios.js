class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<script src="../../Script/Include-html.js"></script>
		<header data-include="../../Plantillas/Encabezado.html"></header>
		<div style="width: 99%; height:90%;" >

					<div id ="Cajon41" >
							<div data-include="../../Plantillas/Cajon51.html"></div>
							<nav id="Barra">
							<div Class="Cajon61" id="modificable">
								<div  class="readmore" id="Alturaboton2">
										<div id="example" class="more">
													<div class="text">
																<main class="principal" id="Alturaboton1">
																	<section class="contenedor_menu" >
																		<div class="container">
																			<div class="card2"  >
																				<div class="titulo_menu1">
																					<h3></h3>
																				</div>
																				<div id="menu1">
																					<ul>
																						<li><i></i><a href="../Formularios/Planilla_Registro_Salarios.html"> <span class="material-icons"> dashboard </span> Formulario Registro de Planilla</a></li>
																						<li><i></i><a href="../Formularios/Registro Colaboradores.html"> <span class="material-icons"> dashboard </span> Formulario Registro Colaboradores</a></li>
																						<li><i></i><a href="../Formularios/Planilla_Rebajos_Salarios.html"> <span class="material-icons"> dashboard </span> Formulario Registro de Prestamos</a></li>
																						<li><i></i><a href="../Formularios/Asientos Contabilidad.html"> <span class="material-icons"> dashboard </span> Formulario Asientos Contabilidad</a></li>
																						<li><i></i><a href="../Formularios/Reporte Rebajos Salarios - RRHH.html"> <span class="material-icons"> arrow_back_ios </span> Reportes</a></li>
																					</ul>
																				</div>
																			</div>
																		</div>
																	</section>
																</main>
													</div>
										</div>
								</div>
								</nav>
							</div>

					<div  Class="Cajon31" id="modificable1" >
							<div id="content">
								<!-- Caspio Deployed Code Start Here || CM - Employees/Employees Report  -->
								<script type="text/javascript" src="https://c0hcr676.caspio.com/dp/95de900033db5c15e67b43a197df/emb"></script>
								<div id="cxkg"><a href="https://c0hcr676.caspio.com/dp/95de900033db5c15e67b43a197df">Click here</a> to load this Caspio <a href="http://www.caspio.com" target="_blank" title="Cloud Database">Cloud Database</a></div>
								<!-- Caspio Deployed Code End Here -->
							</div>
						</div >

					<script src="../../Script/Ocultar-Boton-Menu.js"></script>
					<script src="../../Script/Mostrar-Boton-Menu.js"></script>
					<script src="../../Script/Ocultar-Boton-Menu2.js"></script>
					<script src="../../Script/Mostrar-Boton-Menu2.js"></script>
					<script src="../../Script/Reducir-Menu.js"></script>
					<script src="../../Script/Aumentar-Menu.js"> </script>
					<script src="../../Script/Reducir-Form.js"></script>
					<script src="../../Script/Aumentar-Form.js"></script>
					<script src="../../Script/Ocultar-Menu.js"></script>


		</div>
		<div data-include="../../Plantillas/Pie_de_Pagina.html"></div>
		`;
  }
}

customElements.define('my-component', MyComponent);
