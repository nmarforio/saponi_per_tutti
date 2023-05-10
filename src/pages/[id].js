import Soap from "@/components/Soap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import StarRating from "react-rating-stars-component";
import { useSession } from "next-auth/react";

export default function Soapdetail() {
  const [detialSoap, setDetailSoap] = useState();
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
    const stars = rating;

    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        userId: session.user.id,
        commentText: comments,
        soapId: id,
        starRating: rating,
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

  if (detialSoap) {
    return (
      <>
        <div className="soapdetails">
          <h1>{detialSoap.name}</h1>
          <div>
            <Image
              alt={detialSoap._id}
              src={detialSoap.image}
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="price">
            <strong>CHF: {detialSoap.price}</strong>
          </span>

          <p>{detialSoap.description}</p>
          <strong>Sostanze</strong>
          <p>{detialSoap.recipes}</p>

          <form className="commentInput" onSubmit={handleSubmit}>
            <label htmlFor="comments" id="comments">
              <strong> Lascia un commento e delle Stelle:</strong>
            </label>
            <textarea
              name="comments"
              id="comments"
              placeholder="I LOVE IT"
              required
            ></textarea>
            <StarRating
              onChange={ratingChanged}
              id="stars"
              name="stars"
              activeColor="#9B3D00"
              color={"black"}
              size={17}
            />
            <button type="submit">Fatto</button>
          </form>
        </div>
        <div className="soapdetails">
          <p>I commenti dei clienti:</p>
          {comments?.map((comment) => {
            if (comment.soapId === id) {
              return (
                <>
                  <div className="comments" key={comment._id}>
                    <p>{comment.commentText}</p>
                    <StarRating
                      value={comment.starRating}
                      edit={false}
                      color={"black"}
                      activeColor={"#9B3D00"}
                    />
                  </div>
                </>
              );
            }
          })}
        </div>
      </>
    );
  }
}
