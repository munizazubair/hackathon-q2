import Image from "next/image";
import Link from "next/link";
import sideImage from "/public/Product Image.png"
import logo from "/public/Logo.png";
import logo1 from "/public/Logo (1).png"
import logo2 from "/public/Logo (2).png"
import logo3 from "/public/Logo (3).png"
import logo4 from "/public/Logo (4).png"
import logo5 from "/public/Logo (5).png"
import logo6 from "/public/Logo (6).png"
import leftImage from "/public/Image (1).png"
import gridImage1 from "/public/Image (2).png"
import gridImage2 from "/public/Image.png"

interface productInterface {
  name:string,
  price:string,
  crossPrice: string,
  image:string,
  tag:string,
  cartLogo: string,
  cartLogo2: string
}
interface product2Interface {
  name: string,
  quantity: string,
  image: string
}

export default function Home() {

  const product:productInterface[] = [
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "", image: `/Image.png` , tag: "New" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "$39", image: `/Images.png` , tag: "Sale" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "", image: `/Image (1).png` , tag: "" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "", image: `/Image (2).png` , tag: "" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
  ]
  const product2: product2Interface[] = [
    {name: "Wing Chair", quantity: "3,584 Products", image: "/cateogary1.png"},
    {name: "Wooden Chair", quantity: "154 Products", image: "/cateogary2.png"},
    {name: "Desk Chair", quantity: "157 Products", image: "/cateogary3.png"}
  ]

  const product3:productInterface[] = [
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "", image: `/Image.png` , tag: "New" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "$39", image: `/Images.png` , tag: "Sale" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "", image: `/Image (1).png` , tag: "" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "", image: `/Image (2).png` , tag: "" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "", image: `/cateogary2.png` , tag: "New" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "$39", image: `/images (1).png` , tag: "Sale" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "", image: `/images (2).png` , tag: "" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},
    {name: "Library Stool Chair", price: "$20" ,crossPrice: "", image: `/Image.png` , tag: "" , cartLogo: "/Buy 3.png", cartLogo2: "/Add Cart.png"},  
  ]
  return (
    <div className="h-[770vh] md:h-[800vh] lg:h-[705vh] xl:h-[400vh] 2xl:h-[360vh] flex flex-col lg:gap-[30px] gap-[10px] items-center w-full bg-white">
      {/* section 1 */}
      <section className="xl:h-[850px] lg:h-[500px] h-[200px] md:h-[400px] lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-color3 flex justify-around items-center lg:rounded-b-[48px] rounded-b-[20px] md:rounded-b-[30px] lg:gap-[10px] gap-[4px] md:gap-[7px] ">
        <div className="xl:h-[337px] xl:w-[557px] lg:h-[300px] lg:w-[480px] w-[370px] flex flex-col lg:gap-[10px] gap-[6px] md:gap-[8px] mx-2 ">
          <p className="lg:text-[14px] text-[10px] md:text-[12px] text-color">Welcome to chairy</p>
          <h1 className="xl:text-[60px] lg:text-[50px] text-[16px] md:text-[33px]  text-color font-bold xl:leading-[66px] lg:leading-[53px] leading-[22px] md:leading-[33px]">Best Furniture Collection for your interior.</h1>
          <button className="lg:h-[52px] h-[32px] md:h-[40px] lg:w-[171px] w-[100px] md:w-[130px] lg:mt-[25px] mt-[10px] md:mt-[18px] bg-color5 rounded-[8px] text-white flex justify-center items-center lg:gap-[20px] gap-[12px] md:gap-[15px] lg:text-[16px] text-[12px] md:text-[14px]">
            <p>Shop Now</p>
            <div><svg className="lg:h-[24px] lg:w-[24px] h-[18px] w-[18px] md:h-[20px] md:w-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
          </button>
        </div>
        <div><Image className="xl:h-[584px] lg:h-[400px] h-[180px] md:h-[304px] xl:w-[434px] lg:w-[300px] w-[180px] md:w-[220px]" src={sideImage} alt="side image of the main page "></Image></div>
      </section>

      {/* section 2 */}
      <section className="xl:h-[139px] lg:h-[120px] h-[70px] md:h-[130px] lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white grid grid-cols-7 gap-2 justify-around items-center  ">
        <div className="flex justify-center items-center"><Image className="lg:h-[87px] lg:w-[85px] h-[25px] w-[28px] md:h-[40px] md:w-[38px]" src={logo} alt="logo"></Image></div>        
        <div className="flex justify-center items-center"><Image className="lg:h-[109px] lg:w-[107px]  h-[40px] w-[48px] md:h-[65px] md:w-[63px]" src={logo1} alt="logo1"></Image></div>
        <div className="flex justify-center items-center"><Image className="lg:h-[139px] lg:w-[135px] h-[50px] w-[65px] md:h-[100px] md:w-[98px]" src={logo2} alt="logo2"></Image></div>
        <div className="flex justify-center items-center"><Image className="lg:h-[65px] lg:w-[63px] h-[15px] w-[18px] md:h-[30px] md:w-[28px]" src={logo3} alt="logo3"></Image></div>
        <div className="flex justify-center items-center"><Image className="lg:h-[98px] lg:w-[101px] h-[35px] w-[48px] md:h-[36px] md:w-[59px]" src={logo4} alt="logo4"></Image></div>
        <div className="flex justify-center items-center"><Image className="lg:h-[113px] lg:w-[115px] h-[40px] w-[53px] md:h-[70px] md:w-[68px]" src={logo5} alt="logo5"></Image></div>
        <div className="flex justify-center items-center"><Image className="lg:h-[84px] lg:w-[87px] h-[30px] w-[33px] md:h-[43px] md:w-[40px]" src={logo6} alt="logo6"></Image></div>
      </section>

      {/* section 3 */}
      <section className="xl:h-[461px] lg:h-[900px] h-[450px] md:h-[850px] lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white flex flex-col gap-[8px] justify-around items-start  ">
        <h1 className="lg:text-[32px] text-[24px] md:text-[29px] text-color font-bold">Featured Products</h1>
        <div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-[25px] gap-y-[10px]">{product.map((item) => (
            <div  className="group lg:h-[377px] xl:w-[312px] flex flex-col lg:gap-[10px] gap-[5px] md:gap-[8px] text-color relative ">

  {item.tag === "New" ? <div className="lg:h-[26px] lg:w-[54px] w-[42px] h-[18px] md:w-[49px] md:h-[22px] rounded-[4px] bg-color7 text-white flex justify-center items-center lg:text-[13px] text-[9px] md:text-[11px] absolute lg:top-[20px] top-[5px] left-[5px] md:top-[8px] md:left-[8px] lg:left-[20px]"> {item.tag} </div> : ""}
  {item.tag === "Sale" ? <div className="lg:h-[26px] lg:w-[49px] w-[47px] h-[18px] md:w-[54px] md:h-[22px] rounded-[4px] bg-color8 text-white flex justify-center items-center lg:text-[13px] text-[9px] md:text-[11px] absolute  lg:top-[20px] top-[5px] left-[5px] md:top-[8px] md:left-[8px] lg:left-[20px]"> {item.tag} </div> : ""}

              <Image className="lg:h-[312px] lg:w-[312px] lg:text-[16px] text-[12px] md:text-[14px]"width={312} height={312} src={item.image} alt={item.name}></Image>
              <div className="flex justify-between items-center ">
              <div className="flex flex-col lg:gap-[10px]">
                <h3 className="lg:text-[16px] text-[12px] md:text-[14px] group-hover:text-color6 ">{item.name}</h3>
                <div className="flex justify-start items-center gap-[4px]">
                <h2 className="lg:text-[18px] text-[14px] md:text-[16px] font-bold">{item.price}</h2>
                <h2>{item.crossPrice ? <div className="lg:text-[16px] text-[12px] md:text-[14px] text-color9 line-through">{item.crossPrice}</div> : ""}</h2>
                </div>
              </div>
              
              <div className="lg:h-[44px] lg:w-[44px] h-[25px] w-[25px] md:h-[40px] md:w-[40px] rounded-[2px]  hidden group-hover:flex justify-center items-center lg:rounded-[4px] bg-color5 ">
                
                <Image className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]" src={item.cartLogo} alt={item.name} width={19} height={19} ></Image></div>
                <div className="bg-color3 lg:h-[44px] lg:w-[44px]  h-[25px] w-[25px] md:h-[40px] md:w-[40px] rounded-[2px] flex group-hover:hidden justify-center items-center lg:rounded-[4px]  ">
                <Image className="h-[25px] w-[25px]  md:h-[40px] md:w-[40px]" src={item.cartLogo2} alt={item.name} width={220} height={220} ></Image> 
                </div>
              </div>
               </div>))}</div>
        </div>
      </section>

      {/* section 4 */}
      <section className="xl:h-[461px] lg:h-[450px] xl:mb-20 h-[900px] pt-20 lg:pt-0 md:h-[700px] lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white flex flex-col gap-[18px] justify-around items-start  ">
        <h1 className="lg:text-[32px] text-[24px] md:text-[29px] text-color font-bold">Top categories</h1>
        <div>
          <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[25px] md:gap-x-[35px] md:gap-y-[30px] gap-y-[20px]">{product2.map((item2) => (
            <div  className="lg:h-[300px] lg:w-[300px] h-[280px] w-[280px] md:h-[300px] md:w-[300px] flex flex-col lg:gap-[10px] gap-[5px] md:gap-[8px]  relative rounded-[10px] ">
              <Image className="h-[280px] w-[280px] md:h-[300px] md:w-[300px] " src={item2.image} alt={item2.name} width={424} height={424}></Image>
              <div className="absolute bottom-0 bg-color10 lg:h-[85px] h-[60px]  w-[280px] md:h-[80px] md:w-[300px]   rounded-b-[10px] text-white flex flex-col justify-center items-start lg:gap-[8px] gap-[4px] md:gap-[6px] lg:pl-[22px] pl-[12px] md:pl-[18px]">
                <h1 className="lg:text-[20px] text-[16px] md:text-[18px]">{item2.name}</h1>
                <h3 className="lg:text-[14px] text-[10px] md:text-[12px] opacity-[70%]">{item2.quantity}</h3>
              </div>

               </div>
              ))}</div>
        </div>
      </section>

      {/* section 5 */}
      <section className="xl:h-[698px] lg:h-[1400px] h-[1000px] pt-32 lg:pt-0 md:h-[1200px] lg:w-[1000px] xl:w-[1341px] w-[90%] md:w-[650px]  bg-white flex flex-col xl:flex-row lg:gap-[10px] gap-[15px] justify-around items-center xl:pr-40  ">
        <p className="xl:-rotate-90 xl:text-[34px] lg:text-[32px] text-[22px] md:text-[30px] xl:w-[700px] xl:h-[90px] font-semibold ">EXPLORE NEW AND POPULAR STYLES</p>
        <div><Image className="md:h-[400px] md:w-[400px] lg:w-[530px] lg:h-[530px]  xl:p-0" src={leftImage} alt="left side image " width={648} height={648}></Image></div>
        <div className="grid grid-cols-2 lg:gap-[20px] gap-[15px] ">
          <div><Image className="md:h-[250px] md:w-[250px] lg:w-[250px] lg:h-[250px]" width={312} height={312} src={gridImage1} alt="grid image"></Image></div>
          <div><Image className="md:h-[250px] md:w-[250px] lg:w-[250px] lg:h-[250px]" width={312} height={312} src={gridImage2} alt="grid image"></Image></div>
          <div><Image className="md:h-[250px] md:w-[250px] lg:w-[250px] lg:h-[250px]" width={312} height={312}  src={gridImage1} alt="grid image"></Image></div>
          <div><Image className="md:h-[250px] md:w-[250px] lg:w-[250px] lg:h-[250px]" width={312} height={312}  src={gridImage2} alt="grid image"></Image></div>
        </div>
      </section>

      {/* section 6 */}
      <section className="xl:h-[461px] lg:h-[1800px] h-[850px] md:h-[900px] lg:w-[900px] xl:w-[1321px] w-[90%] md:w-[650px] bg-white flex flex-col gap-[8px] justify-around items-center  ">
        <h1 className="lg:text-[32px] text-[24px] md:text-[29px] text-color font-bold lg:pb-5">Our Products</h1>
        <div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 lg:gap-y-[20px]  gap-x-[25px] gap-y-[10px]">{product3.map((item) => (
            <div  className="group lg:h-[377px] xl:w-[312px] flex flex-col lg:gap-[10px] gap-[5px] md:gap-[8px] text-color relative ">

  {item.tag === "New" ? <div className="lg:h-[26px] lg:w-[54px] w-[42px] h-[18px] md:w-[49px] md:h-[22px] rounded-[4px] bg-color7 text-white flex justify-center items-center lg:text-[13px] text-[9px] md:text-[11px] absolute lg:top-[20px] top-[5px] left-[5px] md:top-[8px] md:left-[8px] lg:left-[20px]"> {item.tag} </div> : ""}
  {item.tag === "Sale" ? <div className="lg:h-[26px] lg:w-[49px] w-[47px] h-[18px] md:w-[54px] md:h-[22px] rounded-[4px] bg-color8 text-white flex justify-center items-center lg:text-[13px] text-[9px] md:text-[11px] absolute  lg:top-[20px] top-[5px] left-[5px] md:top-[8px] md:left-[8px] lg:left-[20px]"> {item.tag} </div> : ""}

              <Image className="lg:h-[312px] lg:w-[312px] lg:text-[16px] text-[12px] md:text-[14px]"width={312} height={312} src={item.image} alt={item.name}></Image>
              <div className="flex justify-between items-center ">
              <div className="flex flex-col lg:gap-[10px]">
                <h3 className="lg:text-[16px] text-[12px] md:text-[14px] group-hover:text-color6 ">{item.name}</h3>
                <div className="flex justify-start items-center gap-[4px]">
                <h2 className="lg:text-[18px] text-[14px] md:text-[16px] font-bold">{item.price}</h2>
                <h2>{item.crossPrice ? <div className="lg:text-[16px] text-[12px] md:text-[14px] text-color9 line-through">{item.crossPrice}</div> : ""}</h2>
                </div>
              </div>
              
              <div className="lg:h-[44px] lg:w-[44px] h-[25px] w-[25px] md:h-[40px] md:w-[40px] rounded-[2px]  hidden group-hover:flex justify-center items-center lg:rounded-[4px] bg-color5 ">
                
                <Image className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]" src={item.cartLogo} alt={item.name} width={19} height={19} ></Image></div>
                <div className="bg-color3 lg:h-[44px] lg:w-[44px]  h-[25px] w-[25px] md:h-[40px] md:w-[40px] rounded-[2px] flex group-hover:hidden justify-center items-center lg:rounded-[4px]  ">
                <Image className="h-[25px] w-[25px]  md:h-[40px] md:w-[40px]" src={item.cartLogo2} alt={item.name} width={220} height={220} ></Image> 
                </div>
              </div>
               </div>))}</div>
        </div>
      </section>
    </div>


          )
        }


