export const Banner = ({ altBanner, imgBanner }) => {
	return (
		<div className="container w-100 mb-3 banner d-flex justify-content-center align-items-center">
			<img src={imgBanner} className="logo w-100 object-fit-contain" alt={altBanner} />
		</div>
	);
};
