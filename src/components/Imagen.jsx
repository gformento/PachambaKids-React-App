export const Imagen = ({ source, altText }) => {
	return (
	  	<img
			className="object-fit-contain rounded mx-auto h-100 w-100"
			src={source}
			alt={altText}
			onError={(e) => {
				e.target.onerror = null;
				e.target.src = "https://placehold.co/300x300/e0e0e0/555555?text=Imagen+no+disponible";
			}}
		/>
	);
};
