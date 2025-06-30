export const Email = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="">Email: </label> <br />
      <input type="text" onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};
