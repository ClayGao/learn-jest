import { useCallback, useState } from 'react'

function Card({name, age, description}) {
  const [cardText, setCardText] = useState('')

  const onCardClick = useCallback(() => {
    setCardText(`已點擊`)
  },[])

  return (
    <div 
      onClick={onCardClick}
      data-testid="card-container" 
      className="round-sm border-2 h-full  flex-1"
    >
      <div>{name}</div>
      <div>{age}</div>
      <div>{description}</div>
      <div data-testid="card-text">{cardText}</div>
      <div>123</div>
    </div>
  );
}

export default Card;
