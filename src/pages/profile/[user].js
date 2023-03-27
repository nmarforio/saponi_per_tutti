import LoginButton from "@/components/Login-btn";
import { set } from "mongoose";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function UserPage() {
  const { data: session, status } = useSession();
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState();
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [adress, setAdress] = useState();
  const id = router.query;
  console.log("ID", id.user);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/profile/${session.user.id}`);
      const json = await data.json();

      setUser(json);
      setAdress(json.adress);
      setName(json.name);
      setEmail(json.email);
    };

    fetchData().catch(console.error);
  }, [id.user]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    console.log("FORM INPUt", userData);

    const response = await fetch(`/api/profile/${session.user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        adress: userData.adress,
        email: userData.email,
        name: userData.name,
      }),
      headers: {
        Accept: "application/json",
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

  if (!user) {
    return <p>Nessun Dato</p>;
  }
  if (showForm) {
    return (
      <>
        <h2>Cambia i toui Dati:</h2>
        <div className="changeDatasForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.adress);
              }}
              required
            ></input>

            <label htmlFor="adress">Indirizzo:</label>
            <textarea
              id="adress"
              name="adress"
              value={adress}
              onChange={(event) => {
                setAdress(event.target.adress);
              }}
              required
            ></textarea>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.email);
              }}
              required
            ></input>
            <button
              className="saveDatasButton"
              type="Submit"
              onClick={() => router.push("/profile")}
            >
              Salva
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="yourDatas">I tuoi Dati:</h2>
        <div className="profileCard">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.adress}</p>

          <button
            className="changeDatas"
            onClick={() => setShowForm(!showForm)}
          >
            Cambia i tuoi dati
          </button>
        </div>
        <LoginButton session={session} />
      </>
    );
  }
}
