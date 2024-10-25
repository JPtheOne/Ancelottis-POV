import React from "react";
import Card from "../Card/Card";
import EmbeddedWebsiteCard from "../EmbeddedWebsiteCard/EmbeddedWebsiteCard";
import './CardsContainer.css';

class CardsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.render();
    }

    render() {
        if (!this.props.cards) {
            console.log(this.props);
            return ('');
        }
        let cards = [];
        for (let i = 0; i < this.props.cards.length; i++) {
            const cardData = this.props.cards[i];

            // Si el tipo es 'embedded', renderizamos el EmbeddedWebsiteCard con el link y tamaño dinámico
            if (cardData.type === 'embedded') {
                cards.push(
                    <EmbeddedWebsiteCard 
                        key={cardData.id} 
                        link={cardData.link} 
                        width={cardData.width} 
                        height={cardData.height} 
                    />
                );
            } else {
                // Si no es un embedded, renderizamos un Card normal
                cards.push(<Card key={cardData.id} data={cardData}></Card>);
            }
        }
        return (
            <div className="card-container">
                {cards}
            </div>
        );
    }
}

export default CardsContainer;
