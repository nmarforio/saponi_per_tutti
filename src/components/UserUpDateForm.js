import { useRouter } from "next/router";

export default function UserUpDateForm({
  name,
  onSubmit,
  onChangeName,
  adress,
  onChangeAdress,
  email,
  onChangeEmail,
}) {
  const router = useRouter();
  return (
    <div className="changeDatasForm">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(event) => {
            onChangeName(event.target.name);
          }}
          required
        ></input>

        <label htmlFor="adress">Indirizzo:</label>
        <textarea
          id="adress"
          name="adress"
          value={adress}
          onChange={(event) => {
            onChangeAdress(event.target.adress);
          }}
          required
        ></textarea>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={(event) => {
            onChangeEmail(event.target.email);
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
  );
}
