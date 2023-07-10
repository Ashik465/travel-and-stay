import blog1 from '../../assets/picture/blog1.png'
const Blog = () => {
    return (
        <div className="my-10  container mx-auto">
           <h1 className="text-black text-5xl font-medium mb-3">Recent Blog Posts</h1>
           <p className="text-zinc-600 text-xl font-normal mb-9">Latin literature from 45 BC, making it over 2000 years old</p>

{/* card section */}

         <div>
<div className="card w-96 bg-base-100 ">
  <figure><img src={blog1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>
         </div>

{/* card end  */}
 
        </div>
    );
};

export default Blog;