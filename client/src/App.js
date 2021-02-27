import './App.css';
import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [state, setState] = useState({ msg: "hi" })

  const getRequest = async () => {
    try {
      const { data } = await axios.get("/api/test")
      setState(data)
    } catch (err) {
      console.log(`${err}`)
    }
  }

  useEffect(() => {
    getRequest()
  }, [])

  return (
    <div className="App">
      <h1>Hello Full Stack</h1>
      <h3>{state.msg}</h3>
    </div>
  );
}

export default App;
