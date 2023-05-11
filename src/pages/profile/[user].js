import LoginButton from "@/components/Login-btn";
import UserUpDateForm from "@/components/UserUpDateForm";
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
    return <p className="createProfile">Cariamento...</p>;
  }
  if (showForm) {
    return (
      <>
        <h2 className="changeDatasTitle">Cambia i toui Dati:</h2>
        <UserUpDateForm
          name={name}
          onSubmit={handleSubmit}
          onChangeName={setName}
          adress={adress}
          onChangeAdress={setAdress}
          email={email}
          onChangeEmail={email}
        />
      </>
    );
  } else {
    return (
      <>
        <div className="profileCard">
          <h2>I tuoi Dati:</h2>
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
