import './App.css'
import naruto from './assets/naruto.jpg'

function App() {
  return (
    <div>
      <h1>Naruto</h1>

      <img
        src={naruto}
        alt="Naruto"
        width="800"
      />
    </div>
  )
}

export default App