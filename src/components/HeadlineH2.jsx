export const Headline = ({ text, ref }) => {
	return (
		<h2 className="d-flex justify-content-center align-items-center fw-bold py-3" ref={ref}>
			{text}
		</h2>
	);
};