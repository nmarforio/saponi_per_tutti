import StarRating from "react-rating-stars-component";

export default function CommentsCard({ comments, id }) {
  return (
    <div className="soapdetails">
      <p>I commenti dei clienti:</p>
      {comments?.map((comment) => {
        if (comment.soapId === id) {
          return (
            <>
              <div className="comments" key={comment._id}>
                <p>{comment.commentText}</p>
                <StarRating
                  value={comment.ratingStar}
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
  );
}
