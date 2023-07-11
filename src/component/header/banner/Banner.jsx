
import banner from '../../../assets/picture/banner.png'
import Navbar from "../../header/navbar/Navbar";
// import Down from '../down/Down';
const Banner = () => {
    return (
       
        <div className='relative container mx-auto'>
 <div className='container mx-auto'>
   <div className="carousel w-full  md:h-[600px] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner} className="w-full " />
    <div className="absolute rounded-xl flex items-center  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
    <div className=' text-white space-y-2 md:space-y-7 pl-5 md:pl-12  w-96 md:w-1/2'>
<div className='relative'>
 <div className="text-white text-2xl md:text-8xl font-normal">Arizona</div>
<div className="text-white text-xs md:text-base font-semibold absolute -top-4 -right-40 whitespace-nowrap ">United State of America</div>
<div className="w-2.5 h-2.5 bg-orange-600 rounded-full absolute -top-2 right-4" />

</div>
       

      <div className="w-80 text-white text-base font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>

        
        <div className='flex  items-center gap-2'>
        <button className='btn btn-primary border-none  mr-5 bg-orange-600   text-xs md:text-xl'>Book Now </button>
        <div className="text-white text-xs md:text-xl font-bold whitespace-nowrap">Choose Tour</div>

     </div>
    </div>

     

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 md:bottom-40">
      <a href="#slide4" className="btn btn-circle  border-none  mr-5   text-white bg-[#C2B9B9]  ">❮</a> 
      <a href="#slide2" className="btn btn-circle text-white bg-[#C2B9B9] border-none">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner} className="w-full   " />
    <div className="absolute rounded-xl flex items-center  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
    <div className=' text-white space-y-2 md:space-y-7 pl-5 md:pl-12  w-96 md:w-1/2'>
<div className='relative'>
 <div className="text-white text-2xl md:text-8xl font-normal">Arizona</div>
<div className="text-white text-base font-semibold absolute -top-4 -right-40 whitespace-nowrap ">United State of America</div>
<div className="w-2.5 h-2.5 bg-orange-600 rounded-full absolute -top-2 right-4" />

</div>
       

      <div className="w-80 text-white text-base font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>

        
        <div className='flex  items-center gap-2'>
        <button className='btn btn-primary border-none  mr-5 bg-orange-600   text-xs md:text-xl'>Book Now </button>
        <div className="text-white text-xs md:text-xl font-bold whitespace-nowrap">Choose Tour</div>

     </div>
    </div>

     

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0 md:bottom-40">
      <a href="#slide1" className="btn btn-circle  text-white bg-[#C2B9B9] border-none  mr-5  ">❮</a> 
      <a href="#slide3" className="btn btn-circle  text-white bg-[#C2B9B9] border-none">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner} className="w-full " />

    <div className="absolute rounded-xl flex items-center  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
    <div className=' text-white space-y-2 md:space-y-7 pl-5 md:pl-12  w-96 md:w-1/2'>
<div className='relative'>
 <div className="text-white text-2xl md:text-8xl font-normal">Arizona</div>
<div className="text-white text-base font-semibold absolute -top-4 -right-40 whitespace-nowrap ">United State of America</div>
<div className="w-2.5 h-2.5 bg-orange-600 rounded-full absolute -top-2 right-4" />

</div>
       

      <div className="w-80 text-white text-base font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>

        
        <div className='flex  items-center gap-2'>
        <button className='btn btn-primary border-none  mr-5 bg-orange-600   text-xs md:text-xl'>Book Now </button>
        <div className="text-white text-xs md:text-xl font-bold whitespace-nowrap">Choose Tour</div>

     </div>
    </div>

     

    </div>


    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0 md:bottom-40">
      <a href="#slide2" className="btn btn-circle text-white bg-[#C2B9B9] border-none  mr-5  ">❮</a> 
      <a href="#slide4" className="btn btn-circle  text-white bg-[#C2B9B9] border-none">❯</a>
    </div>
  </div> 
 
</div>
        </div>

   <div className='absolute  top-0 left-0 mx-auto container'>
     <Navbar></Navbar>
   </div>

{/* <div className=' absolute -bottom-40 mx-auto container w-[50%] '>
<Down></Down>


</div> */}


        </div>
    );
};

export default Banner;