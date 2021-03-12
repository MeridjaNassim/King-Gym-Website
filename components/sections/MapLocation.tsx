import React, { ReactElement } from 'react'
import MapEmbedder from '../common/MapEmbedder'

interface Props {

}

function MapLocation({ }: Props): ReactElement {
    return (
        <section className=" relative block text-center bg-black py-20" style={{ height: "80vh" }}>
            <div className="flex flex-col md:flex-row items-stretch h-full md:mx-5">
                <div className="flex-1 flex flex-col justify-center items-center">
                <h1 className="text-primary font-extrabold text-6xl uppercase p-2">You can find us at  </h1>
                </div>
                <div className="flex-1 mx-4 md:mx-0 w-auto h-full shadow-xs border-4 border-primary"> 
                    <MapEmbedder mapUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12791.308516839817!2d3.1494665!3d36.7267128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x607e12f809782afe!2sKing%20gym!5e0!3m2!1sfr!2sdz!4v1615573016154!5m2!1sfr!2sdz" />

                </div>
            </div>

        </section>
    )
}

export default MapLocation
