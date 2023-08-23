//import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs"

import "./ThanksForm.css"

const ThanksForm = () => {
  return (
    <div className="thanks-conteiner">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante em breve você reberá um cumpom de desconto de 10% de desconto na sua próxima compra.</p>
      <p>Para concluir a sua avaliação, clique no botão de Eviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
      </p>
    </div>
  )
}

export default ThanksForm