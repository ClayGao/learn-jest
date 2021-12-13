import CardSection from './components/CardSection';
import { useAllCards, useMaleCards, useFemaleCards, useAdultCards, useAsyncAllCards } from './hooks/useCards'
import './App.css';

function App() {
  const cardsData = useAllCards();
  // const cardsData = useAsyncAllCards();
  // const cardsData = useMaleCards();
  // const cardsData = useFemaleCards();
  // const cardsData = useAdultCards();

  return (
    <div className="App">
      <CardSection cards={cardsData} />
    </div>
  );
}

export default App;
