/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'
function Footer() {
  return (
    <div>
         <div className='footer' >
            <div className="container">
                    <div className="about">
                    <h2>Hakkımızda</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque sed facere.</p>
        </div>
        <div className="category">
          <h2>Kategoriler</h2>
          
          <ul>
            <li>
              <a href="https://www.ciceksepeti.com/cicek-bakimi" className="nav-link">
                 Beyaz Eşya
              </a>
            </li>
            <li>
              <a href="https://www.ciceksepeti.com/cicek-anlamlari" className="nav-link">
                  Ankastre
              </a>
            </li>
            <li>
              <a href="https://www.ciceksepeti.com/mevsimlere-gore-cicekler" className="nav-link">
                Klima ve Isıtıcılar
              </a>
            </li>
            <li>
              <a href="https://www.ciceksepeti.com/mevsimlere-gore-cicekler" className="nav-link">
                Küçük Ev Aletleri
              </a>
            </li>
            <li>
              <a href="https://www.ciceksepeti.com/mevsimlere-gore-cicekler" className="nav-link">
               Mobil Cihazlar
              </a>
            </li>
            <li>
              <a href="https://www.ciceksepeti.com/mevsimlere-gore-cicekler" className="nav-link">
                Hediye Fikirleri
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h2>Destek</h2>
          <ul>
            <li>             
               <a href="">
                    İletişim
               </a>         
            </li>
            <li> 
              <a href="">
                İşlem Rehberi
              </a>
            </li>
            <li> 
              <a href="">
                Mağazalarımız
              </a>
            </li>
            <li> 
              <a href="">
                Servislerimiz
              </a>
            </li>
          </ul>
        </div>
  </div>
 
  <div className="copyright">
    Copyright &copy; Aleyna
  </div>

 </div>
    </div>
  )
}

export default Footer