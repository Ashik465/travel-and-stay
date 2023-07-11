import backgroundImg from '../../assets/picture/desti1.png';
import backgroundImg2 from '../../assets/picture/desti2.png';
import backgroundImg3 from '../../assets/picture/desti3.png';
import backgroundImg4 from '../../assets/picture/desti4.png';
import backgroundImg5 from '../../assets/picture/desti5.png';
import backgroundImg6 from '../../assets/picture/desti6.png';

const Destination = () => {
  return (
    <>
      <div className="container mx-auto my-10 p-5">
        <h1 className="text-black text-5xl font-medium">Top Destinations</h1>
        <div className="flex flex-col md:flex-row justify-between my-4 gap-4">
          <p className="text-zinc-600 text-xl font-normal">
            Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.
          </p>
          <p className="text-zinc-600 text-xl font-normal">
            View All Destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-10">
          <div
            className="flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "300px",
            }}
          >
            <h1 className="text-white text-5xl font-bold">America</h1>
          </div>
          <div
            className="flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImg2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "300px",
            }}
          >
            <h1 className="text-white text-5xl font-bold">Maldives</h1>
          </div>
          <div
            className="flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImg3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "300px",
            }}
          >
            <h1 className="text-white text-5xl font-bold">Africa</h1>
          </div>
          <div
            className="flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImg4})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "300px",
            }}
          >
            <h1 className="text-white text-5xl font-bold">Japan</h1>
          </div>
          <div
            className="flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImg5})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "300px",
            }}
          >
            <h1 className="text-white text-5xl font-bold">Australia</h1>
          </div>
          <div
            className="flex justify-center items-center rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImg6})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "300px",
            }}
          >
            <h1 className="text-white text-5xl font-bold">India</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
