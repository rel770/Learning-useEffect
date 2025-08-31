import ExampleUseEffect1 from './components/ExampleUseEffect1'
import './App.css'

function App() {
  return (
    <div>
      <h1>Learning useEffect Examples</h1>
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Section 1: Run once on mount</h2>
        <ExampleUseEffect1 />
      </div>
    </div>
  )
}

export default App
