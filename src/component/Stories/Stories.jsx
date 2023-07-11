import backgroundImg from '../../assets/picture/story1.png'
import backgroundImg2 from '../../assets/picture/story2.png'
import backgroundImg3 from '../../assets/picture/story3.png'
import backgroundImg4 from '../../assets/picture/story4.png'
import middle1 from '../../assets/picture/middle1.png'
import middle2 from '../../assets/picture/middle2.png'
import middle3 from '../../assets/picture/middle3.png'
import middle4 from '../../assets/picture/middle4.png'
const Stories = () => {
    return (
        <>
        <div className=" container mx-auto my-20 p-5">
        <h1 className="text-black text-5xl font-medium">Interesting Stories</h1>
        <p className="text-zinc-600 text-xl font-normal my-5">Watch and be inspired</p>

           {/* image start */}

           <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
        
           <div
            className="flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "480px",
            }}
          >
            <div className='flex flex-col gap-2'>
             <img src={middle1} alt="" />
             <h1 className="text-white text-4xl font-normal">Russia</h1>

            </div>
            
          </div>
           <div
            className="flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImg2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "480px",
            }}
          >
            <div className='flex flex-col gap-2'>
             <img src={middle2} alt="" />
             <h1 className="text-white text-4xl font-normal">Russia</h1>

            </div>
            
          </div>
           <div
            className="flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImg3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "480px",
            }}
          >
            <div className='flex flex-col gap-2'>
             <img src={middle3} alt="" />
             <h1 className="text-white text-4xl font-normal">Russia</h1>

            </div>
            
          </div>
           <div
            className="flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImg4})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "480px",
            }}
          >
            <div className='flex flex-col gap-2'>
             <img src={middle4} alt="" />
             <h1 className="text-white text-4xl font-normal">Russia</h1>

            </div>
            
          </div>





           </div>



{/* end */}


        </div>
            
        </>
    );
};

export default Stories;