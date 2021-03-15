import React, { ReactElement } from 'react'

interface Props {
    mapUrl : string,
    width ?: number |  string,
    height ?: number | string,
}

function MapEmbedder({mapUrl}: Props): ReactElement {
    return (
        <iframe title="king gym location" src={mapUrl} width="100%" height="100%"  allowFullScreen loading="lazy"></iframe>
    )
}

export default MapEmbedder
