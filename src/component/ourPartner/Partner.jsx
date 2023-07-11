import partner2 from '../../assets/picture/partner2.png'
import partner3 from '../../assets/picture/partner3.png'
import partner4 from '../../assets/picture/partner4.png'

const Partner = () => {
    return (
        <>
           <div className=" flex flex-col md:flex-row py-20 px-8  my-10 container mx-auto bg-zinc-300 gap-10 xl:gap-20 justify-center items-center " >
          
           <h1 className="text-orange-600 text-4xl font-bold">Our Partners</h1>

               <img src={partner2} alt="" /> 
               <img src={partner3} alt="" /> 
               <img src={partner4} alt="" /> 
                
        </div> 
        </>
    );
};

export default Partner;