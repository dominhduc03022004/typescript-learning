// import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Client from './layout/Client'

import Home from './pages/Home'
import Detail from './pages/Detail'
import Admin from './layout/Admin'
import HomeAdmin from './pages/HomeAdmin'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Client}>
            <Route path='/' Component={Home}/>
            <Route path='/detail/:id' Component={Detail}/>
        </Route>
        <Route path='/admin' Component={Admin}>
            <Route path='list' Component={HomeAdmin}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
