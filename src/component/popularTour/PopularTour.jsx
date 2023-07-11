import banner from '../../assets/picture/popular1.png'
import banner2 from '../../assets/picture/popular2.png'

const PopularTour = () => {
    return (
        <>
            <div className="container mx-auto  my-10 p-5">
            <h1 className="text-black text-5xl font-medium">Most Popular Tours</h1>
        <div className="flex flex-col md:flex-row justify-between my-4 gap-4">
          <p className="text-zinc-600 text-xl font-normal">
          Lorem Ipsum is simply dummy text.
          </p>
          <p className="text-zinc-600 text-xl font-normal">
          View All Tours
          </p>
        </div>
        {/* carousel start  */}

        <div className="carousel w-full  md:h-[600px] ">
  <div id="slide4" className="carousel-item relative w-full">
   <div className='grid grid-cols-2 gap-10 '>
    {/* 1st slide */}
    <img src={banner} className="w-full " />
    <div className="absolute rounded-xl flex items-center  h-full left-0 top-0 ">
    <div className=' text-white space-y-2 md:space-y-7 pl-5 md:pl-12  w-96 md:w-1/2'>
<div className='relative'>
 {/* <div className="text-white text-2xl md:text-4xl font-normal">Lorem Ipsum is simply dummy text.</div> */}
{/* <div className="text-white text-xs md:text-base font-semibold absolute -top-4 -left-0 whitespace-nowrap ">Australia</div> */}
{/* <div className="w-2.5 h-2.5 bg-orange-600 rounded-full absolute -top-2 right-0" /> */}

</div>
       

      {/* <div className="w-80 text-white text-base font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div> */}

        
        {/* <div className='flex  items-center gap-2'>
        <button className='btn btn-primary border-none  mr-5 bg-orange-600   text-xs md:text-xl'>Book Now </button>
        <div className="text-white text-xs md:text-xl font-bold whitespace-nowrap">Choose Tour</div>

     </div> */}
    </div>

     

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 md:bottom-40">
      <a href="#slide4" className="btn btn-circle  border-none  mr-5   text-white bg-[#C2B9B9]  ">❮</a> 
      <a href="#slide5" className="btn btn-circle text-white bg-[#C2B9B9] border-none">❯</a>
    </div>
    {/* 2nd */}
    <img src={banner2} className="w-full " />
    <div className="absolute rounded-xl flex items-center  h-full left-0 top-0  ">
    <div className=' text-white space-y-2 md:space-y-7 pl-5 md:pl-12  w-96 md:w-1/2'>
<div className='relative'>
 {/* <div className="text-white text-2xl md:text-4xl font-normal">Lorem Ipsum is simply dummy text.</div> */}
{/* <div className="text-white text-xs md:text-base font-semibold absolute -top-4 -right-40 whitespace-nowrap ">Australia</div>
<div className="w-2.5 h-2.5 bg-orange-600 rounded-full absolute -top-2 right-0" /> */}

</div>
       

      {/* <div className="w-80 text-white text-base font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div> */}

        
        {/* <div className='flex  items-center gap-2'>
        <button className='btn btn-primary border-none  mr-5 bg-orange-600   text-xs md:text-xl'>Book Now </button>
        <div className="text-white text-xs md:text-xl font-bold whitespace-nowrap">Choose Tour</div>

     </div> */}
    </div>

     

    </div>
    {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 md:bottom-40">
      <a href="#slide4" className="btn btn-circle  border-none  mr-5   text-white bg-[#C2B9B9]  ">❮</a> 
      <a href="#slide2" className="btn btn-circle text-white bg-[#C2B9B9] border-none">❯</a>
    </div> */}

    {/* end */}
   </div>
  </div> 
 
 
 
  <div id="slide5" className="carousel-item relative w-full">
  <div className='grid grid-cols-2 gap-10 '>
    {/* 1st slide */}
    <img src={banner} className="w-full " />
    <div className="absolute rounded-xl flex items-center  h-full left-0 top-0 ">
    <div className=' text-white space-y-2 md:space-y-7 pl-5 md:pl-12  w-96 md:w-1/2'>
<div className='relative'>
 {/* <div className="text-white text-2xl md:text-4xl font-normal">Lorem Ipsum is simply dummy text.</div> */}
{/* <div className="text-white text-xs md:text-base font-semibold absolute -top-4 -left-0 whitespace-nowrap ">Australia</div> */}
{/* <div className="w-2.5 h-2.5 bg-orange-600 rounded-full absolute -top-2 right-0" /> */}

</div>
       

      {/* <div className="w-80 text-white text-base font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div> */}

        
        {/* <div className='flex  items-center gap-2'>
        <button className='btn btn-primary border-none  mr-5 bg-orange-600   text-xs md:text-xl'>Book Now </button>
        <div className="text-white text-xs md:text-xl font-bold whitespace-nowrap">Choose Tour</div>

     </div> */}
    </div>

     

    </div>
    {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 md:bottom-40">
      <a href="#slide4" className="btn btn-circle  border-none  mr-5   text-white bg-[#C2B9B9]  ">❮</a> 
      <a href="#slide2" className="btn btn-circle text-white bg-[#C2B9B9] border-none">❯</a>
    </div> */}
    {/* 2nd */}
    <img src={banner2} className="w-full " />
    <div className="absolute rounded-xl flex items-center  h-full left-0 top-0  ">
    <div className=' text-white space-y-2 md:space-y-7 pl-5 md:pl-12  w-96 md:w-1/2'>
<div className='relative'>
 {/* <div className="text-white text-2xl md:text-4xl font-normal">Lorem Ipsum is simply dummy text.</div> */}
{/* <div className="text-white text-xs md:text-base font-semibold absolute -top-4 -right-40 whitespace-nowrap ">Australia</div>
<div className="w-2.5 h-2.5 bg-orange-600 rounded-full absolute -top-2 right-0" /> */}

</div>
       

      {/* <div className="w-80 text-white text-base font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div> */}

        
        {/* <div className='flex  items-center gap-2'>
        <button className='btn btn-primary border-none  mr-5 bg-orange-600   text-xs md:text-xl'>Book Now </button>
        <div className="text-white text-xs md:text-xl font-bold whitespace-nowrap">Choose Tour</div>

     </div> */}
    </div>

     

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 md:bottom-40">
      <a href="#slide4" className="btn btn-circle  border-none  mr-5   text-white bg-[#C2B9B9]  ">❮</a> 
      <a href="#slide4" className="btn btn-circle text-white bg-[#C2B9B9] border-none">❯</a>
    </div>

    {/* end */}
   </div>
  </div> 
 
 
</div>

{/* end */}
            </div>
        </>
    );
};

export default PopularTour;