import React, { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes, ReactElement, useEffect, useState } from 'react'


interface LoadableImageProps {
    preview: string,
    src: string,
    children: (renderProps: { src: string }) => ReactElement
}

export const LoadableImage = (props: LoadableImageProps) => {
    const { preview, src, children } = props;
    const [source, setSource] = useState(preview)
    const _loadfullImage = () => {
        const fullimg = new Image();
        fullimg.onload = (_) => setSource(fullimg.src)
        fullimg.src = src
    }
    useEffect(_loadfullImage, [])
    return <>
        {children({ src: source })}
    </>
}

interface ImageWithOverlayProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    foregroundImageStyle?: CSSProperties,
    backgroundImageStyle?: CSSProperties,
    style?: CSSProperties
}
export const ImageWithOverlay: React.FC<ImageWithOverlayProps> = (props) => {

    const { width, height, style, foregroundImageStyle, backgroundImageStyle, src, ...rest } = props;
    return <div className="custom_image_wrapper">
        <img style={{ ...style, ...foregroundImageStyle }} className="rounded-md background-img transition-all duration-200 ease-linear" src={src} alt="" width={width ?? "auto"} height={height ?? "auto"} />
        <img style={{ ...style, ...backgroundImageStyle }} className="rounded-md foreground-img transition-all duration-200 ease-linear" src={src} alt="" {...rest} width={width ?? "auto"} height={height ?? "auto"} />

        <style jsx>{
            `   
                .custom_image_wrapper {
                    position : relative;
                    
                }
                .foreground-img {
                    z-index: 1;
                   position: relative;
                }
                .background-img {
                    position : absolute;
                    top: 10px;
                    z-index:0;
                    filter : blur(10px);
                }
                
            `
        }</style>
    </div>
}