//import PriceCard from "../common/PriceCard"

const Pricing2 : React.FC = ()=>{
    return (<section className="py-20 text-center relative block  bg-primary">
  

    <div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
        <div className="flex flex-col lg:flex-row justify-center items-center ">
           <h1 className="text-black font-normal text-6xl uppercase">Starting at <span className="border-b-4 border-black font-extrabold">2000 DA!</span> <span className="text-white font-extrabold">ONLY</span> <i
                    className={
                      "text-black fas fa-crown text-6xl leading-lg mr-2"
                    }
                  />  </h1>
        </div>
    </div>
</section>
)
}
// const Pricing: React.FC = () => {

//     return (<section className="pb-20 relative block  bg-white">
//         <div
//             className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 "
//             style={{ height: "80px", transform: "translateZ(0)" }}
//         >
//             <svg
//                 className="absolute bottom-0 overflow-hidden"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="none"
//                 version="1.1"
//                 viewBox="0 0 2560 100"
//                 x="0"
//                 y="0"
//             >
//                 <polygon
//                     className=" text-black fill-current"
//                     points="2560 0 2560 100 0 100"
//                 ></polygon>
//             </svg>
//         </div>

//         <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
//             <div className="flex flex-wrap text-center justify-center">
//                 <div className="w-full lg:w-6/12 px-4">
//                     <h2 className="text-4xl font-bold text-black">
//                         Our Pricing
//             </h2>
//                     <p className="text-lg leading-relaxed mt-4 mb-4 text-black">
//                         Best prices for the best training.
//             </p>
//                 </div>
//             </div>
//             <div className="flex flex-col lg:flex-row mt-12 justify-center ">
//                 <PriceCard id="price__card1" items={[
//                     {
//                         text: "Item 1",
//                         included: true
//                     },
//                     {
//                         text: "Item 2",
//                         included: true
//                     },
                    
//                 ]} option="2 days/week" price="2000 DA" containerClassName="flex-1 my-2" contentContainerClassName="py-10 self-center" />
//                 <PriceCard id="price__card2" items={[
//                     {
//                         text: "Item 1",
//                         included: true
//                     },
//                     {
//                         text: "Item 2",
//                         included: true
//                     },
//                     {
//                         text: "Item 3",
//                         included: true
//                     },
//                     {
//                         text: "Item 4",
//                         included: true
//                     },
//                     {
//                         text: "Item 5",
//                         included: false
//                     }
//                 ]} option="Open 7/7" price="3000 DA" containerClassName="flex-1 my-2" contentContainerClassName="lg:py-20 self-center" />
//                 <PriceCard id="price__card3" items={[
//                     {
//                         text: "Item 1",
//                         included: true
//                     },
//                     {
//                         text: "Item 2",
//                         included: true
//                     },
//                 ]} option="3 days/week" price="2500 DA" containerClassName="flex-1 my-2" contentContainerClassName="py-10 self-center" />
//                 <style jsx>
//                     {`
//                         @media (max-width: 640px) {
//                             #price__card2 {
//                                 order: -1
//                             }
                            
//                         }
                       
//                     `}
//                 </style>
//             </div>
//         </div>
//     </section>
//     )
// }

export default Pricing2;