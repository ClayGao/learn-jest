
function Card({isShow, name, age, description}) {
  return (
    <div 
      data-test-id="Card" 
      data-show={isShow} 
      className="round-sm border-2 h-full  flex-1"
    >
      <div>{name}</div>
      <div>{age}</div>
      <div>{description}</div>
    </div>
  );
}

export default Card;
