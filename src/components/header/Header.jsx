import React from 'react'
import style from './header.module.css'
import logo from '../../assets/basket.png'

function Header() {
    return (<>
        <div className={style.header} >
            <div>
                <h3 className={style.h3}>
                    Intocode Coding Shopcamp</h3>
            </div>
            <div  > <img   className={style.header_logo} src={logo} alt="photo" /></div> 
         </div>   
      

    </>

    )
}

export default Header