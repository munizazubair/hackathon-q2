import Image from "next/image"
import cartlogo from "/public/Group.png"

interface ListInterface {
    name:string,
    price: string,
    image: string
}

interface ParamsInterface {
    id:number
}
interface DynamicListInterface {
    [key: number] : {name: string, price:string, image: string}
}
export default function Details({params} : {params: ParamsInterface}) {

    const dynamicList: DynamicListInterface = {
        1 : {name: "Library Stool Chair", price: "$20.00 USD", image: "/Images.png"}
        // 2: {name: "",price:"", image: "/"}
    }
    const listProducts: ListInterface[] = [
        {name: "Library Stool Chair", price: "$20" , image:`/images (2).png` },
        {name: "Library Stool Chair", price: "$20" , image: `/Image.png` },
        {name: "Library Stool Chair", price: "$20" , image: `/cateogary3.png` },
        {name: "Library Stool Chair", price: "$20" , image: `/Image (1).png` },
        {name: "Library Stool Chair", price: "$20" , image: `/cateogary1.png` }, 

    ]
   
    const dynamicProducts = dynamicList[params.id];

    if (!dynamicProducts) {
        return(
            <div className="text-xl font-bold text-color flex justify-center ">This Product is Out Of Stock</div>
        )
        
    }
     return(
        <div>
            <section className="flex">
                <div><Image src={dynamicProducts.image} alt={dynamicProducts.name} height={607} width={675}></Image></div>
                <div>
                    <h1 className="lg:text-[60px] font-bold">{dynamicProducts.name}</h1>
                    <button>{dynamicProducts.price}</button>
                    <div className="h-[1px] w-[521px]"></div>
                    <p className="lg:text-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <button className="lg:h-[63px] lg:w-[212px] rounded-[4px] bg-color5">
                        <div><Image width={29} height={29} src={cartlogo} alt="cart logo"></Image></div>
                        <p className="lg:text-[22px]">Add To cart</p>
                    </button>
                </div>
            </section>
            {/* <div className="lg:h-[409px] lg:w-full">
                <div className="flex justify-between items-center">
                <h1 className="lg:text-[28px]">Featured Products</h1>
                <button className="lg:h-[22px] lg:w-[69px] border-b-black border-2 lg:text-[18px]">View all</button>
                </div>
                {listProducts.map((item) => (
                    <div>
                        <section className="xl:h-[139px] lg:h-[120px] h-[400px] md:h-[200px] lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white grid md:grid-cols-4 grid-cols-2 lg:grid-cols-7 justify-around items-center  ">
        <Image className="lg:h-[87px] lg:w-[85px] h-[55px] w-[53px] md:h-[65px] md:w-[63px] " width={186} height={186} src={item.image} alt={item.name}></Image>     
        </section>
                        </div>
                    ))}
            </div> */}
        </div>
     )
}