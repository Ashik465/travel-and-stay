import blog1 from '../../assets/picture/blog1.png'
import blog2 from '../../assets/picture/blog2.png'
import blog3 from '../../assets/picture/blog3.png'
import people1 from '../../assets/picture/people1.png'
import people2 from '../../assets/picture/people2.png'
const Blog = () => {
    return (
        <div className="my-10  container mx-auto p-10">
           <h1 className="text-black text-5xl font-medium mb-3">Recent Blog Posts</h1>
           <p className="text-zinc-600 text-xl font-normal mb-9">Latin literature from 45 BC, making it over 2000 years old</p>

{/* card section */}

         <div className='flex flex-wrap gap-32 '>
<div className="card w-96 bg-base-100 ">
  <div className='relative '>
    <figure><img src={blog1} alt="Shoes" /></figure>
    <h1 className="text-white text-2xl font-bold absolute top-5 left-5 bg-orange-600 p-3 rounded-lg ">Streem</h1>

  </div>
  
  <div className="card-body p-0 py-4">
    <div className='flex items-center gap-2'>
      <img src={people1} alt="" />
      <p className="text-zinc-600 text-xl font-semibold">June 31th by Admin</p>

    </div>

    <p className=" text-zinc-600 text-xl font-normal ">Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.</p>

   
  </div>
</div>
         
    {/* card 2      */}
    <div className="card w-96 bg-base-100 ">
  <div className='relative '>
    <figure><img src={blog2} alt="Shoes" /></figure>
    <h1 className="text-white text-2xl font-bold absolute top-5 left-5 bg-orange-600 p-3 rounded-lg ">Streem</h1>

  </div>
  
  <div className="card-body p-0 py-4">
    <div className='flex items-center gap-2'>
      <img src={people2} alt="" />
      <p className="text-zinc-600 text-xl font-semibold">June 31th by Admin</p>

    </div>

    <p className=" text-zinc-600 text-xl font-normal ">Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.</p>

   
  </div>
</div>

{/* card 3 */}

<div className="card w-96 bg-base-100 ">
  <div className='relative '>
    <figure><img src={blog3} alt="Shoes" /></figure>
    <h1 className="text-white text-2xl font-bold absolute top-5 left-5 bg-neutral-600 p-3 rounded-lg ">Press</h1>

  </div>
  
  <div className="card-body p-0 py-4">
    <div className='flex items-center gap-2'>
      <img src={people1} alt="" />
      <p className="text-zinc-600 text-xl font-semibold">June 31th by Admin</p>

    </div>

    <p className=" text-zinc-600 text-xl font-normal ">Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.</p>

   
  </div>
</div>

         
         </div>

{/* card end  */}
 
        </div>
    );
};

export default Blog;