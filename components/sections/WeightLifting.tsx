import React from 'react'
import { ImageWithOverlay } from '../common/Image'
import ImageGallery from '../common/ImageGallery'

interface Props {

}

const WeightLifting: React.FC<Props> = () => {
    return (
        <section id="weightlifting" className="pt-20 pb-48">
            <div className="flex flex-col md:flex-row px-4 md:px-24 justify-center">
                <div className="text-justify flex-1">
                    <h2 className="text-6xl font-bold">Weight Lifting</h2>
                    <h3 className="text-xl font-light text-gray-600 leading-relaxed">Building muscle</h3>
                    <p className="text-xl mb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, ex eos ipsum dolore unde dolores numquam impedit delectus sit praesentium. Vitae at incidunt vel quis cupiditate qui excepturi doloribus provident.Nesciunt dolor mollitia fuga excepturi fugiat, voluptas iure debitis nostrum totam omnis qui vel at culpa officiis provident suscipit reprehenderit? Quaerat perspiciatis assumenda consequatur nam eius autem vero nobis voluptates.
                    </p>
                    <div className="hidden md:flex w-full">

                        <ImageGallery withPreview={false}  itemPerRow={2} images={[
                            {
                                uid: "weight1",
                                previewSource: "",
                                source: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                alt: "weight1"
                            },
                            {
                                uid: "weight2",
                                previewSource: "",
                                source: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                alt: "weight2"
                            },
                            {
                                uid: "weight3",
                                previewSource: "",
                                source: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                alt: "weight3"
                            },



                        ]} />
                    </div>

                </div>
                <div className="flex-1 flex justify-center mt-10 md:mt-0">

                    <ImageWithOverlay
                        style={{
                            maxWidth: 350
                        }}
                        src="https://images.unsplash.com/photo-1589828695526-c461b4ddc158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="weight lifting" />
                </div>
            </div>

        </section>
    )
}

export default WeightLifting