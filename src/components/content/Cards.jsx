import React from 'react'
import Card from './Card'
import Macbook from '../../assets/macbook.png'
import Samsung from '../../assets/samsung.png'
import Scooter from '../../assets/scooter.png'
import Monitor from '../../assets/monitor.png'
import Mask from '../../assets/respirator.png'
import Washer from '../../assets/washer.png'
import contentPageStyle from './card.module.css'

function Cards() {
    return (<>


        <div className={contentPageStyle.block} >
            <Card img={Macbook} price="97 000"  name="Macbook" button="Купить"  discount={""}/>

            <Card img={Samsung} price="35 999" name="Galaxy" button="Купить"  discount={"5555"}/>

            <Card img={Scooter} price="58 950" name="Scooter" button="Купить"  discount={"5555"}/>

            <Card img={Monitor} price="12 000" name="Monitor" button="Купить"  discount={"5555"}/>

            <Card img={Mask} price="500" name="Mask" button="Купить"  discount={"5555"}/>

            <Card img={Washer} price="75 000" name="Washer" button="Купить"  discount={"5555"}/>

        </div>



    </>


    )
}

export default Cards