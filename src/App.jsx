import './App.css';
import Header from "./components/Header"
import Landing from './components/Landing';
import Card from './components/Card';
import data from './components/CardData';

function App() {
  
  const cards = data.map(item => {
    return (
        <Card 
        {...item}
        key={item.id}
        />
    )
}) 
  return (
    <div className="App">
      <Header />
      <Landing />
      <section>{cards}</section>
      
    </div>
  )
}

export default App
