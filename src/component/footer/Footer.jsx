import logo from "../../assets/picture/logo.png";
import phone from '../../assets/picture/phone.png'
import email from '../../assets/picture/email.png'
import location from '../../assets/picture/location.png'
import tik from '../../assets/picture/tik.png'
import fb from '../../assets/picture/facebook.png'
import insta from '../../assets/picture/instagram.png'
import twit from '../../assets/picture/twitter.png'
import up from '../../assets/picture/up.png'

const Footer = () => {
    return (
        <div className=" bg-[#151515] relative ">
            <footer className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-10 xl:pt-32 xl:pl-28 xl:pr-16 xl:pb-28 text-base-content container mx-auto">
  <div className="flex flex-col">
    <img className="w-32 h-20 mb-9" src={logo} alt="" />
    <p className=" w-72 text-white text-base font-normal pb-8 border-b-2 border-[#FF3B00]">Lorem Ipsum is simply dummy text of the  printing and typesetting industry</p>
  </div> 

  

  <div className="flex flex-col ml-10">
    <span className="text-white text-2xl font-medium pb-12">Company</span> 
    <a className="text-zinc-300 text-base font-normal mb-5">About us </a> 
    <a className="text-zinc-300 text-base font-normal mb-5">Company Blogs</a> 
    <a className="text-zinc-300 text-base font-normal mb-5">Work with Us</a> 
    <a className="text-zinc-300 text-base font-normal mb-5">Meet the team</a>
  </div> 
  <div className="flex flex-col ml-10 md:ml-0 ">
    <span className="text-white text-2xl font-medium pb-12">Explore</span> 
    <a className="text-zinc-300 text-base font-normal mb-5">Account</a> 
    <a className="text-zinc-300 text-base font-normal mb-5">Legal</a> 
    <a className="text-zinc-300 text-base font-normal mb-5">Contact</a> 
    <a className="text-zinc-300 text-base font-normal mb-5">Privacy policy </a>
  </div> 
  <div className="flex flex-col gap-2 ml-10 md:ml-0 ">
    <span className="text-white text-2xl font-medium pb-12">Newsletter</span> 
    <input type="text" placeholder="Email address" className="input input-bordered w-full max-w-xs bg-stone-400 bg-opacity-80 text-white text-center" />

    <button className=" btn max-w-xs  border-none  text-white text-center  bg-orange-600  font-medium">Subscribe</button>

    <div className="flex items-center gap-2">
        <img  src={tik} alt="" />
        <p className="text-white text-sm font-normal">I agree to all terms and condition</p>
    </div>
   
  </div> 
  
  

   <div className="flex flex-col ml-10 md:ml-0  ">
     <div className=" flex py-2  "> 
        <img src={phone} alt="" />
        <h3 className="text-white text-xl font-normal ml-4">  + 880 1611 66 4965 </h3>
     </div>
     <div className=" flex py-2  "> 
        <img src={email} alt="" />
        <h3 className="text-white text-xl font-normal ml-4">solutya@gmail.com</h3>
     </div>
     <div className=" flex py-2  "> 
        <img src={location} alt="" />
        <h3 className="text-white text-xl font-normal ml-4 whitespace-nowrap"> Usman center,  Uttara-12</h3>
     </div>

   </div>



</footer>

{/* copyright section  */}
<div className=" absolute bottom-0 right-0 md:w-[60%]  ">
   <div className=" bg-white rounded-tl-lg  relative hidden xl:block  " >

    <div className="rounded-tl-lg absolute inset-y-0 left-0 p-16 flex justify-center items-center bg-[#FF3B00]">
        <img src= {up} alt="" />
    </div>
    <div className="flex justify-between py-16 px-10 ml-40">
        <div className="flex gap-2">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twit} alt="" />
        </div>

        <div>
          <h1>@ All Copyright 2022, Solutya</h1>
        </div>
        
    </div>

 </div> 
</div>









        </div>
    );
};

export default Footer;