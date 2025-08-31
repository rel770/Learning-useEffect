import ExampleUseEffect1 from './components/ExampleUseEffect1'
import ExampleUseEffect2 from './components/ExampleUseEffect2'
import ExampleUseEffect3 from './components/ExampleUseEffect3'
import './App.css'

function App() {
  return (
    <div>
      <h1>Learning useEffect Examples</h1>
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Section 1: Run once on mount</h2>
        <ExampleUseEffect1 />
      </div>
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Section 2: Run when a value changes</h2>
        <ExampleUseEffect2 />
      </div>
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Section 3: Fetch data from backend</h2>
        <ExampleUseEffect3 />
      </div>
    </div>
  )
}

export default App
