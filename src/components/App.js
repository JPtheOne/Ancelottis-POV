import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from  './Navbar/Navbar';
import CardDetail from './CardDetail/CardDetail';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
              image: "https://media.juanfutbol.com/wp-content/uploads/2024/07/JFB_20240711_JFB_178664_Bolavip-Notas-1-2024-07-11T112409.652.jpg"
            },
            {
              id: "futcentral3",
              type: "large",
              title: {
                text: "DIVISION RIVALS",
                color: "white",
              },
              tag: {
                title: "NEW WEEK, NEW REWARDS!",
                subtitle: "This Weekly Competition is LIVE",
                color: "#29bd2b"
              },
              image: "https://conteudo.imguol.com.br/c/entretenimento/ab/2018/08/10/fifa-19---neymar-1533917429175_v2_900x506.jpg"
            },
            {
              id: "futcentral4",
              type: "large",
              title: {
                text: "",
                color: "white",
              },
              tag: {
                title: "",
                subtitle: "",
                color: ""
              },
              image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2ybOb"
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
                text: "DIVISION RIVALS",
                color: "#2ae7d5",
              },
              tag: {
                title: "NEW WEEK, NEW REWARDS!",
                subtitle: "This Weekly Competition is LIVE",
                color: "#29bd2b"
              },
              image: "https://pbs.twimg.com/media/GRbHi3_b0AQlHD8.jpg:large"
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
    })

    this.render();

  }

  handlePageChange(e, data) {
    this.setState({
      activePage: data.page,
      cards: data.cards
    })
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
          <Route path="/detail" component={CardDetail} />
        </div>
      </Router>
    );
  }
  
}

export default App;
