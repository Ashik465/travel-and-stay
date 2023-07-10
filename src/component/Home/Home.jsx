import Footer from "../footer/Footer";
import Gallary from "../gallary/Gallary";
import Navbar from "../header/navbar/Navbar";
import Newsletter from "../newsletter/Newsletter";


const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Newsletter></Newsletter>
            <Gallary></Gallary>
            <Footer></Footer>
        </>
    );
};

export default Home;