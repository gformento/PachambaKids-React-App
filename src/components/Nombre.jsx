export const Nombre = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="">Nombre: </label> <br />
      <input type="text" onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};
