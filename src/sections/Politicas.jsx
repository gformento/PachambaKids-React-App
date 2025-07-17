export const ModalPoliticas = ({ show, onClose }) => {
  	if (!show) return null;
	return (
   	<>
   		<div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
   			<div className="modal-dialog modal-dialog-centered">
   				<div className="modal-content">
   					<div className="modal-header">
   					  	<h5 className="modal-title">Políticas de Privacidad</h5>
   					  	<button type="button" className="btn-close" onClick={onClose}></button>
   					</div>
   					<div className="modal-body">
   					  	<p>En PachambaKids tenemos una política de privacidad flexible de cambios con el fin de que nuestros clientes puedan realizar la compra de modo confiado.</p>
							<p><strong>No se realizarán reintegros de dinero.</strong></p>
							<p>Para poder hacer efectivo un pedido, el requisito se basa en que todos los datos sean lo mas precisos posibles.</p>
							<p>De haberse modificado el precio del Producto y estar dentro del plazo de 30 días, se considerará el precio a la fecha de compra que figura en el ticket.</p>
							<p>Muchas gracias!</p>
							<p className="text-center"><strong>PachambaKids©</strong></p>
							<p className="text-center"><strong>Copyright Reserved By PachambaKids©</strong></p>
   					</div>
   					<div className="modal-footer">
   					 	<button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
   					</div>
   				</div>
   			</div>
   		</div>
   		<div className="modal-backdrop fade show"></div>
   	</>
  );
};

export default ModalPoliticas;
