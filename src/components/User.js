export default function User({ session }) {
  if (session) {
    return (
      <>
        <form>
          <p>Crea il tuo Profilo:</p>
          <label htmlFor="name">Nome:</label>
          <input value={session.user.name}></input>
          <label htmlFor="adress">Indirizzo:</label>
          <input id="adress"></input>
          <label htmlFor="email">Email:</label>
          <input id="email" value={session.user.email}></input>
          <button type="submit">Crea</button>
        </form>
      </>
    );
  }
}
