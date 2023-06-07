import React from 'react'
import Header from "./components/header/Header"
import Menu from './components/menu/menu'
import Cards from './components/content/Cards'
import appStyle from "./app.module.css"
function App() {

  return (<>
    <div className={appStyle.allPage} >
    <Header />
      <div className={appStyle.main} >
        <Menu />
        <Cards />
      </div>
    </div>
    
    


  </>

  )
}

export default App
