import TextToSpeech from "./components/TextToSpeach"
import "./index.css"

const App = () => {
  const text = 'Vítáme vás na palubě lodi M-web-x ';
  // ťext který se přečte ale nezobrazí
  return (
    <div>
      <h1>Čtečka skrytého textu</h1>
      <TextToSpeech text={text}/>
    </div>
  )
}

export default App