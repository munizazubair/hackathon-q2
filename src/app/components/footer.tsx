import Image from "next/image"
import mainlogo from "/public/Logo Icon.png"
import icons from "/public/Social Links.png"
import paymentlogos from "/public/Rectangle 33.png"

export default function Footer() {
    return(
        <div className="lg:h-[418px]  bg-white w-full z-10">
            {/* <div className="lg:h-[343px] grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4 justify-around items-start">
                <div className="lg:h-[198px] lg:w-[350px] flex flex-col lg:gap-[24px]">
                    <div className="flex lg:gap-[8px] gap-2">
                        <div><Image height={30} width={30} src={mainlogo} alt="logo"></Image></div>
                        <h1 className="lg:text-[26px] text-[19px]">Comforty</h1>
                        </div>

                        <p className="lg:text-[16px] text-[12px] h-[14px] w-[20px] text-color24">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                        Cras egestas purus </p>
                        <div><Image src={icons} alt="icons"></Image></div>
                </div>
                <div className="lg:h-[203px] lg:w-[105px] w-[100px] gap-[10px]">
                    <h2 className="lg:text-[14px] text-[12px] text-color9">Category</h2>
                    <div className=" clas flex flex-col text-black lg:text-[16px] text-[13.5px]">
                        <div>Sofa</div>
                        <div>Armchair</div>
                        <div>Wing Chair</div>
                        <div className="text-color5">Desk Chair</div>
                        <div>wooden Chair</div>
                        <div>Park Bench</div>
                    </div>
                </div>
                <div className="lg:h-[143px] lg:w-[156px] w-[120px] gap-[10px]">
                <h2 className="lg:text-[14px] text-[12px] text-color9">Support</h2>
                    <div className=" clas flex flex-col text-black lg:text-[16px] text-[13.5px]">
                        <div>Help & Support</div>
                        <div>Tearms & Conditions</div>
                        <div>Privacy Policyr</div>
                        <div>Help</div>
                </div>
                </div>
                <div className="lg:h-[142px] lg:w-[424px] w-[120px] flex flex-col gap-[10px]">
                <h2 className="lg:text-[14px] text-color9">Newsletter</h2>
                <div>
                    <div className="flex lg:gap-[4px]"><input className="lg:h-[46px] lg:w-[285px] rounded-[8px] border-[1px] border-color24 lg:text-[16px] text-[13.5px]" placeholder="Your email" type="text" /> 
                    <button className="bg-color5 lg:h-[46px] lg:w-[127px] flex justify-center items-center lg:text-[16px] text-[13px] h-[30px] w-[90px]  text-white rounded-[8px]">Subscribe</button></div>
                    <p className="text-color lg:text-[16px] text-[13.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>                
                    </div>
                </div>
            </div>
            <div className="h-[1px] w-full bg-color25"></div>
            <div className="lg:h-[75px] h-[50px] flex flex-col lg:flex-row justify-around items-center text-color25 lg:text-[16px] text-[13.5px]">
                <div className="lg:text-[16px] text-[12px]">@ 2021 - Blogy - Designed & Develop by Zakirsoft</div>
                <div><Image className="h-[20px] w-[80px]" height={27} width={227} src={paymentlogos} alt="logos"></Image></div>
            </div> */}
        </div>
    )
}