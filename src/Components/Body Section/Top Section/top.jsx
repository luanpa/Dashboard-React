import React from 'react'
import "./top.css";
/* Import Icon */
import {BiSearchAlt} from "react-icons/bi"
import {TbMessageCircle} from "react-icons/tb"
import {MdNotificationsNone} from "react-icons/md"
import {BsArrowRight} from "react-icons/bs"
/* Import Image */
import img from "../../../assents/foto.jpg";
import img1 from "../../../assents/pngegg.png";
import video from "../../../assents/Yard.mp4";

const top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className='title'>
          <h1>Bem Vindo, Vamos plantar? </h1>
          <p>Oi luan, Bem vindo de volta!</p>
        </div>

        <div className='searchBar flex'>
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className="icon"/>
        </div>

        <div className='adminDiv flex'>
          <TbMessageCircle className="icon"/>
          <MdNotificationsNone className="icon"/>
          <div className='adminImage'>
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Comprar ou Vender Produtos</h1>
          <p>Melhor Mercado de Planta do Brasil!</p>
          
          <div className='buttons flex'>
              <button className="btn transparent">Explorar</button>
              <button className="btn transparent">O mais Vendidos</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
          
        </div>
        <div className="leftCard flex">
            <div className="main flex">
               <div className="textDiv">
                <h1>Painel de Controle</h1>


                <div className="flex">
                  <span>
                    Hoje <br /> <small> 4 ordens</small>
                  </span>
                <span>
                 Este mês <br /> <small> 123 ordens</small>
                  </span>
               </div>
               <span className="flex link">
                Minhas ordens <BsArrowRight className='icon'/>
               </span>
               </div>
               <div className="imgDiv">
                <img src={img1} alt="img1" />
               </div>
               {/*   <div className='sideBarCard'>
          <div className="cardContent">

            <h3>Central de ajuda</h3>
            <button className='btn'>Whatsapp</button>
          </div>
        </div>*/}
            </div>
            
          </div>
      </div>
    </div>


  )
}

export default top