import gallary1 from '../../assets/picture/gallary1.png'
import gallary2 from '../../assets/picture/gallary2.png'
import gallary3 from '../../assets/picture/gallary3.png'
import gallary4 from '../../assets/picture/gallary4.png'
import gallary5 from '../../assets/picture/gallary5.png'

const Gallary = () => {
    return (
        <>
           <div className='grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 container mx-auto p-10 pb-0 '>

            <img className="w-80 h-72" src={gallary1} alt="" />
            <img className="w-80 h-72" src={gallary2} alt="" />
            <img className="w-80 h-72" src={gallary3} alt="" />
            <img className="w-80 h-72" src={gallary4} alt="" />
            <img className="w-80 h-72" src={gallary5} alt="" />
            </div> 
        </>
    );
};

export default Gallary;