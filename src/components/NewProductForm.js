export default function NewProductForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="newProductcard">
        <label htmlFor="name">Nome Nuovo prodotto:</label>
        <input id="name" name="name" type="text"></input>
        <label htmlFor="price">Prezzo in CHF:</label>
        <input id="price" name="price" type="number"></input>
        <label htmlFor="description">Descrizione:</label>
        <textarea id="description" name="description" type="text"></textarea>
        <label htmlFor="recipes">Sostanze:</label>
        <textarea id="recipes" name="recipes" type="text"></textarea>
        <button type="submit">Crea Prodotto</button>
      </div>
    </form>
  );
}
