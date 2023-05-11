import Image from "next/image";
import StarRating from "react-rating-stars-component";

export default function SingleSoapCard({
  detailSoap,
  onSubmit,
  ratingChanged,
}) {
  return (
    <div className="soapdetails">
      <h1>{detailSoap.name}</h1>
      <div>
        <Image
          alt={detailSoap._id}
          src={detailSoap.image}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </div>
      <span className="price">
        <strong>CHF: {detailSoap.price}</strong>
      </span>

      <p>{detailSoap.description}</p>
      <strong>Sostanze</strong>
      <p>{detailSoap.recipes}</p>

      <form className="commentInput" onSubmit={onSubmit}>
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
  );
}
