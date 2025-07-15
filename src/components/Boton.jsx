export const Boton = ({ text, onClick, addClass }) => {
  return (
    <div className="container-button">
      <button className={`boton d-block w-100 btn btn-success ${addClass}`} text={text} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
