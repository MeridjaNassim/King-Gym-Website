import React from 'react'
import { ImageWithOverlay } from '../common/Image'
import ImageGallery from '../common/ImageGallery'

interface Props {

}

const Crossfit: React.FC<Props> = () => {
    return (
        <section id="crossfit" className="pt-20 pb-48 bg-black relative">

            <div className="flex flex-col md:flex-row px-4 md:px-24 justify-around ">

                <div className="flex-1" >
                    <h2 className="text-6xl font-bold text-primary">Crossfit</h2>
                    <h3 className="text-xl font-light text-gray-100 leading-relaxed">Building Endurance</h3>
                    <p className="text-xl text-justify  text-primary mb-12">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, ex eos ipsum dolore unde dolores numquam impedit delectus sit praesentium. Vitae at incidunt vel quis cupiditate qui excepturi doloribus provident.Nesciunt dolor mollitia fuga excepturi fugiat, voluptas iure debitis nostrum totam omnis qui vel at culpa officiis provident suscipit reprehenderit? Quaerat perspiciatis assumenda consequatur nam eius autem vero nobis voluptates.
                </p>
                    <div className="hidden md:flex w-full justify-between ">
                        <ImageGallery itemPerRow={3} withPreview={false} images={[

                            {
                                uid: "crossfit1",
                                previewSource:"",
                                source:"https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                alt:"crossfit1"
                            },
                            {
                                uid: "crossfit2",
                                previewSource:"",
                                source:"https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
                                alt:"crossfit2"
                            },
                            {
                                uid: "crossfit3",
                                previewSource:"",
                                source:"https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                alt:"crossfit3"
                            },

                        ]} />
                    </div>
                </div>
                <div className="flex justify-center mt-12 md:mt-0 flex-1">
                    <ImageWithOverlay
                        style={{
                            maxWidth: 350
                        }}
                        src="https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=704&q=80" alt="weight lifting" />
                </div>
            </div>

        </section>
    )
}
export default Crossfit