//Emojis
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs"

import "./ThanksForm.css"

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

/* eslint-disable react/prop-types */

const ThanksForm = ({ data }) => {
  return (
    <div className="thanks-conteiner">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante em breve você reberá um cumpom de desconto de 10% de desconto na sua próxima compra.</p>
      <p>Para concluir a sua avaliação, clique no botão de Eviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário: </span>
        {data.comment}
      </p>
    </div>
  )
}

export default ThanksForm