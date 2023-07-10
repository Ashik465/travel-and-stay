import mail from '../../assets/picture/mail.png';
import backgroundImg from '../../assets/picture/newslettercover.png';

const Newsletter = () => {
  return (
    <div
      className="bg-cover bg-center container mx-auto px-10 py-32 rounded-lg my-10 md:my-20"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="flex flex-col md:flex-row items-center  space-y-5 xl:space-x-16 md:space-x-10 ">
        <div>
          <h1 className="text-white text-2xl font-semibold">Newsletter</h1>
          <p className="text-white text-base font-normal ">
            Sign Up to receive the best offer
          </p>
        </div>

        <input
          type="text"
          placeholder="Destination"
          className="input input-bordered w-full md:max-w-xs max-w-sm bg-zinc-800 bg-opacity-50 text-white"
        />

        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-sm bg-zinc-800 bg-opacity-50 text-white md:max-w-xs"
        />

        <div className="bg-orange-600 rounded-full p-4">
          <img src={mail} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
