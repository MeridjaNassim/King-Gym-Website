import { CSSProperties } from "react";

interface Item {
    text: string,
    included?: boolean
}
interface Props {
    containerClassName?: string,
    contentContainerClassName?: string,
    containerStyle?: CSSProperties,
    price: string,
    id?:string,
    option: string,
    items: Item[]
}
const PriceCard: React.FC<Props> = (props) => {
    return (
        <div id={props.id} className={`shadow-sm mx-10 ${props.containerClassName}  lg:my-auto`} style={{
            height: "fit-content",
            borderRadius: "2rem"
        }}>
            <div className={` p-2  flex flex-col justify-center text-center ${props.contentContainerClassName}`} style={{
                ...props.containerStyle,
                borderRadius: "2rem",
                background: "linear-gradient(to right top, #f9e345, #f5de3a, #f1d82d, #eed31e, #eacd05)",
                boxShadow: "0px 3px 16px rgba(234, 205, 5, 0.3)"
            }}>

                <h2 className="text-black text-5xl font-bold">{props.price}</h2>
                <h4 className="text-black text-3xl font-light">{props.option}</h4>
                <ul className="py-2 px-10 text-left">
                    {props.items.map(item => item.included && <li key={item.text} className="p-1">
                    <span className="mr-4">{<i className="fa fa-check text-black text-xl"></i>}</span>
                    <span className="text-lg font-semibold">{item.text}</span></li>)}
                </ul>


            </div>
        </div>)
}
export default PriceCard;