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
              id: "single1",
              type: "large",
              title: {
                text: "",
                color: "#2ae7d5",
              },
              tag: {
                title: "NEW WEEK, NEW REWARDS!",
                subtitle: "This Weekly Competition is LIVE",
                color: "#29bd2b"
              },
              image: "https://todosalta.com/download/multimedia.normal.b9dad15b8518b7b0.aGhoX25vcm1hbC53ZWJw.webp"
            },
            {
              id: "single2",
              type: "large",
              title: {
                text: "NEW STADIUMS",
                color: "white"
              },
              tag: {
                title: "Opens in: 4 Hours 2 Mins!",
                subtitle: "Your Weekend League begins soon",
                color: "#29bd2b"
              },
              image: "https://static1.squarespace.com/static/54d10203e4b0d299700879e5/t/5ccb5b73195cb900011bee32/1556831098332/Fifa2019.png"
            },
            {
              id: "embedded1",
              type: "embedded",  // El tipo es embedded
              link: "https://11builder.com/",  // Link dinámico
              width: "100%",   // Puedes ajustar el tamaño
              height: "100%"
            },
            {
              id: "embedded2",
              type: "embedded",  // Otro video, puede ser YouTube
              link: "https://www.youtube.com/embed/dQw4w9WgXcQ",  
              width: "100%",   
              height: "500px"
            }
          ]
        },
        {
          title: "Alineación",
          page: "myclub",
          cards: []
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
