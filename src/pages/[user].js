import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserId() {
  const [profiledetail, setprofiledetail] = useState([]);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/soaps/profile/${id}`);
      const json = await data.json();

      setprofiledetail(json);
    };
    fetchData().catch(console.error);
  }, []);

  return <p>Hello</p>;
}
