export const Input = ({ label, type = "text", idFor, valor = "", placeholder, onChange }) => {
	return (
		<div className="form-group mb-4">
			{label && (
				<label className="d-block fw-semibold" htmlFor={idFor}>{label}:</label>
			)}
			<input type={type} className="form-control" id={idFor} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
		</div>
	);
};
