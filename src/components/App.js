import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CardsContainer from './CardsContainer/CardsContainer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          title: "Menú",
          page: "futcentral",
          cards: [
            {
              id: "futcentral1",
              type: "large",
              title: {
                text: "Eurocopa 2024",
                color: "white",
              },
              tag: {
                title: "España liderando",
                subtitle: "Click aquí para más",
                color: "#29bd2b"
              },
              image: "https://i.dailymail.co.uk/1s/2024/06/27/15/86648367-0-image-m-6_1719498998631.jpg"
            },
            {
              id: "futcentral2",
              type: "large",
              title: {
                text: "Copa América 2024",
                color: "white",
              },
              tag: {
                title: "¿Último título de Messi?",
                subtitle: "Ver la final en VIVO",
                color: "goldenrod"
              },
              image: "https://files.antena2.com/antena2/public/styles/imagen_despliegue/public/2024-07/SeleccionArgentinaCopaAmerica.jpg.webp?VersionId=KiEUeF59u6.BdoE0JOaFmUVBlafi0mwB&itok=OuIUEbse"
            }
          ]
        },
        {
          title: "Análisis",
          page: "single",
          cards: [
         
      
            {
              id: "embedded2",
              type: "embedded",  // Otro video, puede ser YouTube
              link: "https://i.ytimg.com/vi/jGYoelSrzFY/maxresdefault.jpg",  
              width: "100%",   
              height: "500px"
            }
            
          ]
        },
        {
          title: "Alineación",
          page: "myclub",
          cards: [
            {
            id: "embedded1",
            type: "embedded",  // El tipo es embedded
            link: "https://11builder.com/",  // Link dinámico
            width: "100%",   // Puedes ajustar el tamaño
            height: "100%"
          },
        ]

        }
      ]
    }
  }

  componentDidMount() {
    this.setState({
      activePage: this.state.menuItems[0].page,
      cards: this.state.menuItems[0].cards
    });

    this.render();
  }

  handlePageChange(e, data) {
    this.setState({
      activePage: data.page,
      cards: data.cards
    });
    this.render();
  }

  render() {
    console.log("rendering");
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Navbar activePage={this.state.activePage} onPageChange={(e, data) => { this.handlePageChange(e, data) }} items={this.state.menuItems}></Navbar>
          <Route exact path="/home" render={(routeProps) => (
            <CardsContainer {...routeProps} cards={this.state.cards} />
          )}
          />
        </div>
      </Router>
    );
  }

}

export default App;
