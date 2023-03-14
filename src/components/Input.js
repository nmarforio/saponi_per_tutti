export default function Input() {
  return (
    <>
      <label htmlFor="quatity">Quatità</label>
      <input
        id="quatity"
        placeholder="0"
        max="10"
        min="0"
        type={"number"}
      ></input>
    </>
  );
}
