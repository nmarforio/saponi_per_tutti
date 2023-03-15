import useSWR from "swr";

export default function User({ session }) {
  const user = useSWR("/api/soap/profile");

  async function handelSubmit(event) {
    event.preventDefualt();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    const response = await fetch("api/soap/profile", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  if (session) {
    return (
      <>
        <form onSubmit={handelSubmit}>
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
