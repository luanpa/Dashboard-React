import React from 'react'
import "./sidebar.css";

/* Import Image */
import logo from "../../assents/titi.png"
/* Importa icon */
import {IoMdSpeedometer, } from "react-icons/io"
import {MdDeliveryDining, MdOutlineExplore} from "react-icons/md"
import {BsTrophy, BsCreditCard2Back} from "react-icons/bs"
import {AiOutlinePieChart, AiOutlineContacts} from "react-icons/ai"
import {BiTrendingUp} from "react-icons/bi"



const Sidebar = () => {
  return (
    <div className='sidebar grid'>


      <div className="logoDiv flex">
        <img src={logo} alt="image Name" />
        <h2>Planta.</h2>
        </div>

        <div className='menuDiv'>
          <div/>

          <h3 className="divTitle">
            Menu
          </h3>
          <ul className="menulista grid">

            <li className="listaItems">
              <a href="#" className='MenuLink felx'>
                <IoMdSpeedometer className="icon"/>
                <span className="smallText">
                  DashBoard
                  </span> 
              </a>
            </li>

            <li className="listaItems">
              <a href="#" className='MenuLink felx'>
                <MdDeliveryDining className="icon"/>
                <span className="smallText">
                Minhas Ordens
                  </span> 
              </a>
            </li>

            <li className="listaItems">
              <a href="#" className='MenuLink felx'>
                <BsTrophy className="icon"/>
                <span className="smallText">
                Produtos
                  </span> 
              </a>
            </li>

            <li className="listaItems">
              <a href="#" className='MenuLink felx'>
                <MdOutlineExplore className="icon"/>
                <span className="smallText">
                  Explorar
                  </span> 
              </a>
            </li>

            </ul>
        </div>
        {/*  */}

        <div className='menuDiv'>
          <h3 className="divTitle">
            Settings
          </h3>
          <ul className="menulista grid">

            <li className="listaItems">
              <a href="#" className='MenuLink felx'>
                <AiOutlinePieChart className="icon"/>
                <span className="smallText">
                Gráficos
                  </span> 
              </a>
            </li>

            <li className="listaItems">
              <a href="#" className='MenuLink flex'>
                <BiTrendingUp className="icon"/>
                <span className="smallText">
                  Trends
                  </span> 
              </a>
            </li>

            <li className="listaItems">
              <a href="#" className='MenuLink flex'>
                <AiOutlineContacts className="icon"/>
                <span className="smallText">
                  Contatos
                  </span> 
              </a>
            </li>

            <li className="listaItems">
              <a href="#" className='MenuLink flex'>
                <BsCreditCard2Back className="icon"/>
                <span className="smallText">
                  Creditos
                  </span> 
              </a>
            </li>

            </ul>
        </div>
        <div className='sideBarCard'>
          <div className="cardContent">

            <h3>Central de ajuda</h3>
            <button className='btn'>Whatsapp</button>
          </div>
        </div>
    </div>
  )
}

export default Sidebar