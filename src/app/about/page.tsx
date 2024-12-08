import Image from "next/image"
import product from "/public/Image.png"
import logo from "/public/Delivery.png"
export default function About() {
    return(
        <div className="flex flex-col items-center">
            <div className="flex lg:gap-[20px] ">
                <div className="lg:w-[672px] lg:h-[478px] bg-color21 flex flex-col items-start justify-around lg:pl-[60px] rounded-[8px]">
                    <div className="lg:h-[161px] lg:w-[495px] flex flex-col lg:gap-[12px]">
                        <h1 className="text-white lg:text-[32px]">About Us - Comforty</h1>
                        <p className="lg:text-[18px] text-white leading-[21px]">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                    </div>
                    <button className="lg:h-[56px] lg:w-[179px] flex justify-center items-center lg:text-[16px] bg-color22 text-white rounded-[4px]">View collection</button>
                </div>
                <div><Image className="lg:h-[478px] lg:w-[602px]" src={product} alt="product image" ></Image></div>
            </div>
            <div>
                <h1 className="lg:text-[32px] font-semibold">What makes our Brand Different</h1>
                <div className="lg:h-[244px] grid lg:grid-cols-4 grid-cols-2">
                    <div className="lg:h-[244px] lg:w-[309px] bg-color23 text-color6">
                        <div><Image src={logo} alt="logo" width={24} height={24}></Image></div>
                        <h1 className="lg:text-[20px]">Next day as standard</h1>
                        <p className="lg:text-[16px]">Order before 3pm and get your order the next day as standard</p>
                    </div>

                    <div className="lg:h-[244px] lg:w-[309px] bg-color23 text-color6">
                        <div><Image src={logo} alt="logo" width={24} height={24}></Image></div>
                        <h1 className="lg:text-[20px]">Made by true artisans</h1>
                        <p className="lg:text-[16px]">Handmade crafted goods made with real passion and craftmanship</p>
                    </div>

                    <div className="lg:h-[244px] lg:w-[309px] bg-color23 text-color6">
                        <div><Image src={logo} alt="logo" width={24} height={24}></Image></div>
                        <h1 className="lg:text-[20px]">Unbeatable prices</h1>
                        <p className="lg:text-[16px]">For our materials and quality you won’t find better prices anywhere</p>
                    </div>

                    <div className="lg:h-[244px] lg:w-[309px] bg-color23 text-color6">
                        <div><Image src={logo} alt="logo" width={24} height={24}></Image></div>
                        <h1 className="lg:text-[20px]">Recycled packaging</h1>
                        <p className="lg:text-[16px]">We use 100% recycled to ensure our footprint is more manageable</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}