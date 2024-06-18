import './Sistema.css';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { FaPlug, FaUser, FaBars, FaCog, FaChartBar, FaEnvelope, FaBell, FaFileAlt, FaQuestionCircle, FaCalendarAlt, FaCreditCard, FaImage } from 'react-icons/fa';
import Slide from './Analytics/Slide/slide';
import Cards from './Analytics/Cards/cards';
import Grafico from './Analytics/Grafico/grafico';

function Sistema() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    let slideIndex = 0;
    const showSlides = () => {
      let slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "block";
    };

    let slideshowInterval = setInterval(showSlides, 5000);

    return () => {
      clearInterval(slideshowInterval);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <Grid spacing={2}>
      <Grid item xs={12}>
        <div id="wrapper" className={isSidebarOpen ? 'toggled' : ''}>
          <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
              <img style={{ width: '130px' }} src="../img/ppa.png" alt="" />
            </div>
            <ul className="sidebar-nav">
              <li className="active">
                <a href="./Analytics/Cards"><FaChartBar /><span className="menu-text">Analytics</span></a>
              </li>
              <li className="active">
                <a href="#"><FaChartBar /><span className="menu-text">Insight</span></a>
              </li>
              <li className="active">
                <a href="#"><FaPlug /><span className="menu-text">Plugins</span></a>
              </li>
              <li className="active">
                <a href="#"><FaUser /><span className="menu-text">Users</span></a>
              </li>
              <li className="active">
                <a href="#"><FaCog /><span className="menu-text">Settings</span></a>
              </li>
              <li className="active">
                <a href="#"><FaEnvelope /><span className="menu-text">Messages</span></a>
              </li>
              <li className="active">
                <a href="#"><FaBell /><span className="menu-text">Notifications</span></a>
              </li>
              <li className="active">
                <a href="#"><FaFileAlt /><span className="menu-text">Documents</span></a>
              </li>
              <li className="active">
                <a href="#"><FaQuestionCircle /><span className="menu-text">Help</span></a>
              </li>
              <li className="active">
                <a href="#"><FaCalendarAlt /><span className="menu-text">Calendar</span></a>
              </li>
              <li className="active">
                <a href="#"><FaCreditCard /><span className="menu-text">Payments</span></a>
              </li>
              <li className="active">
                <a href="#"><FaImage /><span className="menu-text">Gallery</span></a>
              </li>
              <div className='welcome'>
                <h3>Onde podemos atendê-lo</h3>
                <div className="slideshow-container">
                  <div className="mySlides fade">
                    <img src="../img/residências.png" alt="Imagem 1" style={{ height:'200px', width: '100%' }} />
                    <h3>Residências</h3>
                  </div>
                  <div className="mySlides fade">
                    <img src="../img/empresas.png" alt="Imagem 2" style={{ height:'200px', width: '100%' }} />
                    <h3>Empresas</h3>
                  </div>
                  <div className="mySlides fade">
                    <img src="../img/condominios.png" alt="Imagem 3" style={{ height:'200px', width: '100%' }} />
                    <h3>Condomínios</h3>
                  </div>
                  <div className="mySlides fade">
                    <img src="../img/industrias.png" alt="Imagem 3" style={{ height:'200px', width: '100%' }} />
                    <h3>Indústrias</h3>
                  </div>
                </div>
              </div>
            </ul>
          </aside>

          <div id="navbar-wrapper">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a href="#" className="navbar-brand" onClick={toggleSidebar}><FaBars /></a>
                </div>
              </div>
              <Slide />
              <Cards />
              <Grafico />
            </nav>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Sistema;


