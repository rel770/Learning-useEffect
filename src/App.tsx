import ExampleUseEffect1 from './components/ExampleUseEffect1'
import ExampleUseEffect2 from './components/ExampleUseEffect2'
import ExampleUseEffect3 from './components/ExampleUseEffect3'
import ExampleUseEffect4 from './components/ExampleUseEffect4'
import ExampleUseEffect5 from './components/ExampleUseEffect5'
import './App.css'

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
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
      
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Section 4: Set up and clean up</h2>
        <ExampleUseEffect4 />
      </div>
      
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Section 5: React to multiple dependencies</h2>
        <ExampleUseEffect5 />
      </div>
      
      <div style={{ margin: '40px 0', padding: '20px', backgroundColor: '#e8f5e8', border: '1px solid #4caf50' }}>
        <h2>Summary</h2>
        <p>You have learned how to:</p>
        <ul>
          <li>Run code once on mount (empty dependency array)</li>
          <li>Run code when specific values change (dependency array with values)</li>
          <li>Fetch data from a backend API</li>
          <li>Set up and clean up intervals or subscriptions</li>
          <li>React to multiple dependencies in a single useEffect</li>
        </ul>
      </div>
    </div>
  )
}

export default App
