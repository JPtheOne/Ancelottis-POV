import React, { useState } from 'react';
import './EmbeddedWebsiteCard.css';

const EmbeddedWebsiteCard = ({ link, width = "100%", height = "600px", title = "Embedded Content" }) => {
    const [iframeHeight, setIframeHeight] = useState(height);

    const handleLoad = () => {
        // Aquí podrías ajustar visualmente tras la carga si es necesario
    };

    return (
        <div className="embedded-website-card">
            <h1 className="embedded-website-title">{title}</h1>
            <div className="iframe-container" style={{ height: iframeHeight }}>
                <iframe
                    src={link}
                    width={width}
                    height={iframeHeight}
                    onLoad={handleLoad}
                    style={{ border: 'none' }}
                    title={title}
                ></iframe>
            </div>
        </div>
    );
}

export default EmbeddedWebsiteCard;
