import "./loadingModal.css";

export default function LoadingModal() {
	return (
		<div className="modal">
			<div className="modal__wrapper">
				<div className="modal__head">
					<h3>Cargando</h3>
				</div>
				<div className="modal__body">
					<div>
						<i className="fa-solid fa-spinner loading-icon"></i>
					</div>
					<div className="modal__description">
						<h3>Cargue Masivo</h3>
						<p>Espera un momento mientras procesamos los datos, esto puede tardar uno minutos.</p>
					</div>
				</div>
			</div>
		</div>
	)
}