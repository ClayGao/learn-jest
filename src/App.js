import CardSection from './components/CardSection';
import { useAllCards, useMaleCards, useFemaleCards, useAdultCards, useAsyncAllCards } from './hooks/useCards'
import './App.css';

function App() {
  const cardsData = useAsyncAllCards();
  console.log({cardsData})

  return (
    <div className="App">
      <CardSection cards={cardsData} />
    </div>
  );
}

export default App;
