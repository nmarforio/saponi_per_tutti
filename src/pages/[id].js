import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useSession } from "next-auth/react";
import SingleSoapCard from "@/components/SingleSoapCard";
import CommentsCard from "@/components/CommentsCard ";

export default function Soapdetail() {
  const [detailSoap, setDetailSoap] = useState();
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState();
  const { data: session } = useSession();

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/soaps/${id}`);
      const json = await data.json();

      setDetailSoap(json);
    };
    id && fetchData().catch(console.error);
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/comment`);
      const json = await data.json();

      setComments(json);
    };
    fetchData().catch(console.error);
  }, []);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const comments = event.target.comments.value;

    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        userId: session.user.id,
        commentText: comments,
        soapId: id,
        ratingStar: rating,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      await response.json();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }

    const res = await fetch(`/api/soaps/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        ratingStar: rating,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      await res.json();
      event.target.reset();
    } else {
      console.error(`Error: ${res.status}`);
    }
  }

  if (detailSoap) {
    return (
      <>
        <SingleSoapCard
          detailSoap={detailSoap}
          onSubmit={handleSubmit}
          ratingChanged={ratingChanged}
        />
        <CommentsCard comments={comments} id={id} />
      </>
    );
  }
}
