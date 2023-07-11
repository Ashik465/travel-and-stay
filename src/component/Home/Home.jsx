import Blog from "../blog/Blog";
import Destination from "../destination/Destination";
import Footer from "../footer/Footer";
import Gallary from "../gallary/Gallary";
import Navbar from "../header/navbar/Navbar";
import Newsletter from "../newsletter/Newsletter";
import Partner from "../ourPartner/Partner";


const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Destination></Destination>
            <Partner></Partner>
            <Blog></Blog>
            <Newsletter></Newsletter>
            <Gallary></Gallary>
            <Footer></Footer>
        </>
    );
};

export default Home;