export const Boton = ({ text, onClick }) => {
  return (
    <div className="container-button">
      <button className="boton" text={text} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
