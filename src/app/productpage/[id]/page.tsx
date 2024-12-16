import Image from "next/image"
import cartlogo from "/public/Group.png"

interface ListInterface {
    name: string,
    price: string,
    image: string
}

interface ParamsInterface {
    id: number
}
interface DynamicListInterface {
    [key: number]: { name: string, price: string, image: string }
}
export default function Details({ params }: { params: ParamsInterface }) {

    const dynamicList: DynamicListInterface = {
        1: {name: "Library Stool Chair",price:"$50.00 USD", image: "/Image.png"},
        2: { name: "Library Stool Chair", price: "$20.00 USD", image: "/Images.png" },
        3: {name: "Library Stool Chair",price:"$81.00 USD", image: "/Image (1).png"},
        4: {name: "Library Stool Chair",price:"$49.00 USD", image: "/Image (2).png"},
        5: {name: "Library Stool Chair",price:"$30.00 USD", image: "/cateogary2.png"},
        6: {name: "Library Stool Chair",price:"$80.00 USD", image: "/images (1).png"},
        7: {name: "Library Stool Chair",price:"$90.00 USD", image: "/images (2).png"},
        8: {name: "Library Stool Chair",price:"$24.00 USD", image: "/Image.png"},
        9: {name: "Library Stool Chair",price:"$67.00 USD", image: "/cateogary1.png"},
        10: { name: "Library Stool Chair", price: "$20.00 USD", image: "/Images.png" },
        11: {name: "Library Stool Chair",price:"$32.00 USD", image: "/Image (1).png"},
        12: {name: "Library Stool Chair",price:"$40.00 USD", image: "/cateogary3.png"},

    }
    const listProducts: ListInterface[] = [
        { name: "Library Stool Chair", price: "$20", image: `/images (2).png` },
        { name: "Library Stool Chair", price: "$20", image: `/Image.png` },
        { name: "Library Stool Chair", price: "$20", image: `/cateogary3.png` },
        { name: "Library Stool Chair", price: "$20", image: `/Image (1).png` },
        { name: "Library Stool Chair", price: "$20", image: `/cateogary1.png` },

    ]

    const dynamicProducts = dynamicList[params.id];


    return (
        <div>
            <section className="flex flex-col md:flex-row xl:gap-20 lg:h-[400px] xl:h-[700px] h-[500px] md:h-[250px] md:gap-8 gap-10 items-center md:items-start justify-center pb-5 md:pt-5 lg:pt-16 md:pl-10">

<div><Image src={dynamicProducts.image} alt={dynamicProducts.name} height={607} width={675} className="xl:h-[607px] xl:w-[675px] lg:h-[300px] lg:w-[320px] h-[200px] w-[215px] md:h-[250px] md:w-[400px]"></Image></div>
<div className="flex flex-col xl:gap-5 gap-3 pl-2">
    <h1 className="xl:text-[60px] lg:text-[35px] font-bold xl:w-[500px] text-[17px] md:text-[20px]">{dynamicProducts.name}</h1>
    <div className="xl:h-[44px] xl:w-[144px] lg:h-[25px] lg:w-[100px] lg:text-[12px] h-[20px] w-[90px] text-[10px] rounded-full bg-color5 text-white flex items-center justify-center xl:text-[20px]">{dynamicProducts.price}</div>
    <div className="h-[1px] xl:w-[521px] bg-color27 lg:w-[400px] w-[90%]"></div>
    <p className="xl:text-[22px] text-[12px] xl:h-[101px] lg:w-[400px] xl:w-[543px] text-color w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
    <button className="xl:h-[63px] xl:w-[212px] h-[28px] w-[120px] lg:h-[40px] lg:w-[180px] rounded-[4px] bg-color5 flex items-center justify-center text-white xl:gap-3 md:gap-2 gap-1 text-[12px] lg:text-[17px]">
        <div><Image width={29} height={29} src={cartlogo} alt="cart logo" className="xl:h-[29px] xl:w-[29px] h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]"></Image></div>
        <p className="xl:text-[22px]">Add To cart</p>
    </button>
</div>

</section>
           

           <section className="xl:h-[461px] lg:h-[409px] h-[450px] md:h-[350px] bg-white flex flex-col gap-[8px] justify-center items-center  xl:px-10  px-6 ">
            <div className="flex justify-between items-center w-[100%] lg:px-28 xl:px-0">
                   <h1 className="xl:text-[28px] text-[16px] md:text-[22px] text-black font-bold">Featured Products</h1>
                   <div className=" border-b-[2px] border-black text-black xl:text-[18px] text-[12px] md:text-[14px] font-semibold xl:h-[31px] xl:w-[75px] flex justify-center items-center">View all</div>
                   </div>
                   <div>
                     <div className="grid md:grid-cols-5 grid-cols-2 gap-x-[25px] gap-y-[10px]">{listProducts.map((item) => (
                       <div  className="xl:h-[306px] xl:w-[263px] lg:w-[133px] flex flex-col xl:gap-[10px] gap-[5px] md:gap-[8px] text-color  ">           
                         <Image className=" xl:h-[263px] xl:w-[263px] h-[110px] w-[110px] md:w-[140px] md:h-[140px]"width={312} height={312} src={item.image} alt={item.name}></Image>
                         <div className="flex justify-between items-center ">
                           <h3 className="xl:text-[16px] text-[10px] md:text-[12px] group-hover:text-color6 ">{item.name}</h3>
                           <h2 className="xl:text-[14px] text-[8px] md:text-[10px] font-bold">{item.price}</h2>
                         </div>
                         
                        
                          </div>
                        ))}</div>
                   </div>
                 </section>
        </div>
    )
}