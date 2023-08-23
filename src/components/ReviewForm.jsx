import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs"

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="score-conteiner">
        <div className="radio-conteiner">
          <label htmlFor="radio-conteiner">
            <input type="radio" name="review" required value="unsatisfied" />
            <BsFillEmojiFrownFill />
            <p>Insatisfeito</p>
          </label>
        </div>
        <div className="radio-conteiner">
          <label htmlFor="radio-conteiner">
            <input type="radio" name="review" required value="neutral" />
            <BsFillEmojiNeutralFill />
            <p>Poderia ser melhor</p>
          </label>
        </div>
        <div className="radio-conteiner">
          <label htmlFor="radio-conteiner">
            <input type="radio" name="review" required value="satisfied" />
            <BsFillEmojiSmileFill />
            <p>Satisfeito</p>
          </label>
        </div>
        <div className="radio-conteiner">
          <label htmlFor="radio-conteiner">
            <input type="radio" name="review" required value="very-satisfied" />
            <BsFillEmojiHeartEyesFill />
            <p>Muito Satisfeito</p>
          </label>
        </div>
      </div>
      <div className="form-control">
        <label>
          <span>Comentário:</span>
          <textarea name="coment" cols="30" rows="10" placeholder="Deixe seu comentário aqui..."></textarea>
        </label>
      </div>
    </div>
  )
}

export default ReviewForm