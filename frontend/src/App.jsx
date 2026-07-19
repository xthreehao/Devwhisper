import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HistoryPanel from './components/HistoryPanel.jsx'

function Home() {
  return (
    <>
      <h1>DevWhisper</h1>
      <p>Voice-native developer experience agent</p>
      <p>
        <Link to="/history">View History</Link>
      </p>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<HistoryPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
