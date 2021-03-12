import { CSSProperties } from "react"
import { ImageWithOverlay, LoadableImage } from "./Image"

interface ImageData {
    uid: string,
    previewSource: string,
    source: string,
    alt: string
}
interface Props {
    itemPerRow: number,
    imageWidth?: number | string,
    imageHeight?: number | string
    withPreview?: boolean,
    imageStyle?: CSSProperties
    images: ImageData[]
}
const ImageGallery: React.FC<Props> = (props) => {
    const { withPreview, images } = props

    const renderImages = () => {
        return images.map(image => {
            let items = (isFinite(props.itemPerRow) && props.itemPerRow > 0) ? props.itemPerRow : 3;
            let style: CSSProperties = {
                boxSizing : "border-box",
                padding : 5,
                height: props.imageHeight ?? "auto",
                width: (props.imageWidth) || (100/items +"%"),
            }
            if (!withPreview) return <div style={style}>
                <ImageWithOverlay key={image.uid} src={image.source} alt={image.alt} style={props.imageStyle} />
            </div>
            if (image.previewSource.length !== 0) {

                return <div style={style}>
                    <LoadableImage key={image.uid} preview={image.previewSource} src={image.source}>
                        {({ src }) => <ImageWithOverlay src={src} alt={image.alt} style={props.imageStyle} />}
                    </LoadableImage>
                </div>
            }
        })
    }
    return (<div className="flex justify-center w-full flex-wrap">
        {
            renderImages()
        }

    </div>)
}

export default ImageGallery;