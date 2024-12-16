import Image from "next/image"
import image from "/public/Image (1).png"
import image1 from "/public/cateogary1.png"
import image2 from "/public/Frame.png"
import image3 from "/public/Frame (1).png"

export default function Cart() {
    return(
        <div>
            <div className="lg:h-[633px] xl:w-[1430px] lg:w-[1000px] md:w-[750px] flex lg:flex-row flex-col justify-center gap-[50px] lg:gap-0 items-center  lg:px-10 xl:p-0 pb-10">

            <div className="lg:h-[547px]  lg:w-[900px] flex flex-col lg:gap-[40px] gap-[22px] md:gap-[35px] ">

<h1 className="lg:text-[22px] text-[18px] md:text-[20px] font-semibold ">Bag</h1>

<div className="lg:h-[211px] lg:w-[500px] xl:w-[800px] w-[300px] h-[120px]  flex items-start justify-between border-b-[0.3px] border-color10  lg:pr-20">
    <div className="flex lg:gap-[35px] gap-[12px] md:gap-[22px]">
        <div><Image className="h-[90px] w-[90px]" src={image} width={150} height={150} alt="product image"></Image></div>
        <div className="flex flex-col lg:gap-[20px] gap-[8px] md:gap-[16px] text-color12">
            <h1 className="text-color lg:text-[16px] text-[12px] md:text-[14px]">Library Stool Chair</h1>
           <div className="flex flex-col lg:gap-[6px] gap-[5px] ">
           <p className="lg:text-[16px] text-[10px] md:text-[12px]">Ashen Slate/Cobalt Bliss</p>
            <div className="flex lg:gap-[19px] gap-[15px] md:gap-[17px] lg:text-[15px] text-[12px]">
                <div className="flex lg:gap-[10px] gap-[8px]"><p>Size</p><p>L</p></div>
                <div className="flex lg:gap-[10px] gap-[8px]"><p>Quantity</p><p>1</p></div>
            </div>
           </div>
            <div className="flex lg:gap-[10px] gap-[8px]">
                <div><Image className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" src={image2} width={24} height={24} alt="heart icon"></Image></div>
                <div><Image className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" src={image3} width={24} height={24} alt="trash icon"></Image></div>
            </div>
        </div>
    </div>
    <div className="text-[12px] lg:text-[15px]">MRP: $99</div>
</div>

<div className="lg:h-[211px]  lg:w-[500px] xl:w-[800px] w-[300px] h-[120px]  flex items-start justify-between border-b-[0.3px] border-color10  lg:pr-20">
<div className="flex lg:gap-[35px] gap-[12px] md:gap-[22px]">
<div><Image className="h-[90px] w-[90px]" src={image1} width={150} height={150} alt="product image"></Image></div>
<div className="flex flex-col lg:gap-[20px] gap-[8px] md:gap-[16px] text-color12">
            <h1 className="text-color lg:text-[16px] text-[12px] md:text-[14px]">Library Stool Chair</h1>
           <div className="flex flex-col lg:gap-[6px] gap-[5px] ">
           <p className="lg:text-[16px] text-[10px] md:text-[12px]">Ashen Slate/Cobalt Bliss</p>
            <div className="flex lg:gap-[19px] gap-[15px] md:gap-[17px] lg:text-[15px] text-[12px]">
                <div className="flex lg:gap-[10px] gap-[8px]"><p>Size</p><p>L</p></div>
                <div className="flex lg:gap-[10px] gap-[8px]"><p>Quantity</p><p>1</p></div>
            </div>
           </div>
            <div className="flex lg:gap-[10px] gap-[8px]">
                <div><Image className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" src={image2} width={24} height={24} alt="heart icon"></Image></div>
                <div><Image className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" src={image3} width={24} height={24} alt="trash icon"></Image></div>
            </div>
        </div>
    </div>
    <div className="text-[12px] lg:text-[15px]">MRP: $99</div>
</div>

            </div>
            <div className="lg:w-[350px] lg:h-[295px] w-[240px] h-[200px]  md:w-[230px] md:h-[250px] flex flex-col lg:gap-[30px] gap-[10px] md:gap-[20px]">
                <h1 className="lg:text-[21px] text-[16px] md:text-[19px] text-black font-semibold ">Summary</h1>
                <div className="flex flex-col lg:gap-[8px] gap-[4px] md:gap-[6px]">
                    <div className="lg:w-[334px] lg:h-[28px] w-[224px] h-[26px] flex justify-between items-center lg:text-[14px] text-[12px] "><p>Subtotal</p><p>$198.00</p></div>
                    <div className="lg:w-[334px] lg:h-[28px] w-[224px] h-[26px] flex justify-between items-center lg:text-[14px] text-[12px] "><p>Estimated Delivery & Handling</p><p>Free</p></div>
                    <div className="lg:w-[340px] lg:h-[62px] w-[220px] h-[36px] flex justify-between items-center lg:text-[14px] border-y-[1px] border-color11 text-[12px] "><p>Total</p><p>$198.00</p></div>
                    <button className="lg:w-[334px] lg:h-[60px] h-[35px] w-[224px] flex justify-center items-center lg:text-[15px]  text-[12px] md:text-[13.5px]  lg:rounded-[30px] rounded-[20px] text-white bg-color5">Member Checkout</button>
                </div>

            </div>

            </div>
        </div>
    )
}