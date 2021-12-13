import Card from './Card'

function CardSection({cards}) {
  return (
    <div 
      data-test-id="CardSection" 
      className="bg-red border-2 h-96 flex"
    >
      {cards.map(({name, age, description}) => {
        return (<Card 
          key={name}
          name={name}
          age={age}
          description={description}
        />)
      })}
    </div>
  );
}

export default CardSection;
