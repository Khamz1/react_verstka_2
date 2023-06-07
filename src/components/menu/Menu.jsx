import React from 'react'
import menuStyle from './menu.module.css'

function Menu() {
  return (<>
  <div className={menuStyle.menu} >
  <h4>Гаджеты и аксессуары</h4>
    <hr />
   <h4>Бытовая техника</h4>
 <hr />
   <h4>Прочее</h4>
   
  </div>
   
  </>
   
  )
}   

export default Menu