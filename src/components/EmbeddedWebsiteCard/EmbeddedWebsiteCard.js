import React from 'react';
import './EmbeddedWebsiteCard.css';

const EmbeddedWebsiteCard = ({ link, width = "100%", height = "600px" }) => {
    return (
        <div className="embedded-website-card">
            <h1 className="embedded-website-title">Embedded Content</h1>
            <div className="iframe-container" style={{ height }}>
                <iframe
                    src={link}
                    width={width}
                    height={height}
                    style={{ border: 'none' }}
                    title="Embedded Content"
                ></iframe>
            </div>
        </div>
    );
}

export default EmbeddedWebsiteCard;
