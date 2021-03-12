import React from 'react'
import { ImageWithOverlay } from '../common/Image'
import ImageGallery from '../common/ImageGallery'

interface Props {

}

const Cardio: React.FC<Props> = () => {
    return (
        <section id="cardio" className="pt-20 pb-48 bg-primary relative">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px", transform: "translateZ(0)" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-primary fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
            <div className="flex flex-col-reverse md:flex-row px-4 md:px-24 justify-center">
                <div className="flex-1 flex justify-center">
                    <ImageWithOverlay
                        style={{
                            maxWidth: 350
                        }}
                        src="https://images.unsplash.com/photo-1584952449180-f8fddc0b03a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="weight lifting" />
                </div>
                <div className="flex-1 mt-10 md:mt-0">
                    <h2 className="text-6xl font-bold">Cardio</h2>
                    <h3 className="text-xl font-light text-gray-900 leading-relaxed">Burning Fat</h3>
                    <p className="text-xl text-justify mb-12" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, ex eos ipsum dolore unde dolores numquam impedit delectus sit praesentium. Vitae at incidunt vel quis cupiditate qui excepturi doloribus provident.Nesciunt dolor mollitia fuga excepturi fugiat, voluptas iure debitis nostrum totam omnis qui vel at culpa officiis provident suscipit reprehenderit? Quaerat perspiciatis assumenda consequatur nam eius autem vero nobis voluptates.
                </p>
                    <div className="hidden md:flex w-full justify-between ">

                        <ImageGallery itemPerRow={3} withPreview={false} images={[
                            {
                                uid:"cardio1",
                                previewSource:"",
                                source:"https://images.unsplash.com/photo-1578763363228-6e8428de69b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                alt:"cardio1"
                            },
                            {
                                uid:"cardio1",
                                previewSource:"",
                                source:"https://images.unsplash.com/photo-1517931524326-bdd55a541177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                alt:"cardio1"
                            },
                            {
                                uid:"cardio1",
                                previewSource:"",
                                source:"https://images.unsplash.com/photo-1563053764-85dbf278c408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                alt:"cardio1"
                            }

                        ]} />
                       
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Cardio
