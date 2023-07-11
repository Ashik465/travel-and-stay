import Stories from "../Stories/Stories";
import Blog from "../blog/Blog";
import Destination from "../destination/Destination";
import Footer from "../footer/Footer";
import Gallary from "../gallary/Gallary";
import Banner from "../header/banner/Banner";
import Navbar from "../header/navbar/Navbar";
import Newsletter from "../newsletter/Newsletter";
import Partner from "../ourPartner/Partner";
import Review from "../review/Review";


const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Destination></Destination>
            <Stories></Stories>
            <Partner></Partner>
            <Review></Review>
            <Blog></Blog>
            <Newsletter></Newsletter>
            <Gallary></Gallary>
            <Footer></Footer>
        </>
    );
};

export default Home;