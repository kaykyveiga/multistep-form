//Emojis

import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs"

/* eslint-disable react/prop-types */

import "./ReviewForm.css"

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <div className=" score-conteiner">
        <label className="radio-conteiner">
          <input type="radio" name="review" required value="unsatisfied"
            checked={data.review === "unsatisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-conteiner">
          <input type="radio" name="review" required value="neutral"
            checked={data.review === "neutral"} onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-conteiner">
          <input type="radio" name="review" required value="satisfied"
            checked={data.review === "satisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-conteiner">
          <input type="radio" name="review" required value="very-satisfied"
            checked={data.review === "very-satisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label>
          <span>Comentário:</span>
          <textarea name="coment" cols="30" rows="10" placeholder="Deixe seu comentário aqui..."
            value={data.comment || ""} onChange={(e) => updateFieldHandler("comment", e.target.value)}
          ></textarea>
        </label>
      </div>
    </div>
  )
}

export default ReviewForm