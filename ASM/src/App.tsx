// import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Client from './layout/Client'

import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Client}>
            <Route path='/' Component={Home}/>
            <Route path='/detail/:id' Component={Detail}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
