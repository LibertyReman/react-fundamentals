import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import SamplePage from './pages/SamplePage'

function App() {
  return (
    // 空のフラグメント returnの中で複数のタグを書きたい場合に必要
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sample-page' element={<SamplePage />}/>
      </Routes>
    </BrowserRouter >
  )
}

export default App
