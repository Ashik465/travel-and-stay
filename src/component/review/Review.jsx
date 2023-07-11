import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import Rating from "react-rating-stars-component";
import review1 from "../../assets/picture/review1.png";
import review2 from "../../assets/picture/review2.png";
import review3 from "../../assets/picture/review3.png";

const Review = () => {
  const [rating, setRating] = useState(3);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <div className="container mx-auto my-10">
        <div className="text-center mb-10">
          <h1 className="text-orange-600 text-3xl font-normal">
            Testimonials and Review
          </h1>
          <p className="text-black text-5xl font-normal">What They’re Saying</p>
        </div>

        {/* carousel start */}
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
          <SwiperSlide>
            <div className="md:grid md:grid-cols-3 gap-5 ">
              <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={review1}
                    alt=""
                  />
                </div>

                <div className="p-10 bg-white shadow-2xl">
                  <div className="flex justify-center items-center">
                    <Rating
                      value={rating}
                      count={5}
                      onChange={handleRatingChange}
                      size={24}
                      activeColor="#FF3B00"
                      edit={false}
                    />
                  </div>

                  <p className="  text-neutral-600 text-base font-normal ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the
                  </p>

                  <h1 className="text-black text-xl font-medium mt-5">
                    Shirly Smith
                  </h1>
                  <p className="text-orange-600 text-base font-normal ">
                    CUSTOMER
                  </p>
                </div>
              </div>
              <div className="md:flex hidden md:flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={review2}
                    alt=""
                  />
                </div>

                <div className="p-10 bg-white shadow-2xl">
                  <div className="flex justify-center items-center">
                    <Rating
                      value={rating}
                      count={5}
                      onChange={handleRatingChange}
                      size={24}
                      activeColor="#FF3B00"
                      edit={false}
                    />
                  </div>

                  <p className="  text-neutral-600 text-base font-normal ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the
                  </p>

                  <h1 className="text-black text-xl font-medium mt-5">
                  Kevin Martin
                  </h1>
                  <p className="text-orange-600 text-base font-normal ">
                    CUSTOMER
                  </p>
                </div>
              </div>
              <div className="md:flex hidden md:flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={review3}
                    alt=""
                  />
                </div>

                <div className="p-10 bg-white shadow-2xl">
                  <div className="flex justify-center items-center">
                    <Rating
                      value={rating}
                      count={5}
                      onChange={handleRatingChange}
                      size={24}
                      activeColor="#FF3B00"
                      edit={false}
                    />
                  </div>

                  <p className="  text-neutral-600 text-base font-normal ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the
                  </p>

                  <h1 className="text-black text-xl font-medium mt-5">
                  Jecchica Brown
                  </h1>
                  <p className="text-orange-600 text-base font-normal ">
                    CUSTOMER
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 2 */}
            <div className="md:grid md:grid-cols-3 gap-5 ">
              <div className="md:flex hidden md:flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={review1}
                    alt=""
                  />
                </div>

                <div className="p-10 bg-white shadow-2xl">
                  <div className="flex justify-center items-center">
                    <Rating
                      value={rating}
                      count={5}
                      onChange={handleRatingChange}
                      size={24}
                      activeColor="#FF3B00"
                      edit={false}
                    />
                  </div>

                  <p className="  text-neutral-600 text-base font-normal ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the
                  </p>

                  <h1 className="text-black text-xl font-medium mt-5">
                    Shirly Smith
                  </h1>
                  <p className="text-orange-600 text-base font-normal ">
                    CUSTOMER
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={review2}
                    alt=""
                  />
                </div>

                <div className="p-10 bg-white shadow-2xl">
                  <div className="flex justify-center items-center">
                    <Rating
                      value={rating}
                      count={5}
                      onChange={handleRatingChange}
                      size={24}
                      activeColor="#FF3B00"
                      edit={false}
                    />
                  </div>

                  <p className="  text-neutral-600 text-base font-normal ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the
                  </p>

                  <h1 className="text-black text-xl font-medium mt-5">
                  Kevin Martin
                  </h1>
                  <p className="text-orange-600 text-base font-normal ">
                    CUSTOMER
                  </p>
                </div>
              </div>
              <div className="md:flex hidden md:flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={review3}
                    alt=""
                  />
                </div>

                <div className="p-10 bg-white shadow-2xl">
                  <div className="flex justify-center items-center">
                    <Rating
                      value={rating}
                      count={5}
                      onChange={handleRatingChange}
                      size={24}
                      activeColor="#FF3B00"
                      edit={false}
                    />
                  </div>

                  <p className="  text-neutral-600 text-base font-normal ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the
                  </p>

                  <h1 className="text-black text-xl font-medium mt-5">
                  Jecchica Brown
                  </h1>
                  <p className="text-orange-600 text-base font-normal ">
                    CUSTOMER
                  </p>
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 3 */}

            <div className="md:grid md:grid-cols-3 gap-5 ">
              <div className="md:flex hidden md:flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={review1}
                    alt=""
                  />
                </div>

                <div className="p-10 bg-white shadow-2xl">
                  <div className="flex justify-center items-center">
                    <Rating
                      value={rating}
                      count={5}
                      onChange={handleRatingChange}
                      size={24}
                      activeColor="#FF3B00"
                      edit={false}
                    />
                  </div>

                  <p className="  text-neutral-600 text-base font-normal ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the
                  </p>

                  <h1 className="text-black text-xl font-medium mt-5">
                    Shirly Smith
                  </h1>
                  <p className="text-orange-600 text-base font-normal ">
                    CUSTOMER
                  </p>
                </div>
              </div>
              <div className="md:flex hidden md:flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={review2}
                    alt=""
                  />
                </div>

                <div className="p-10 bg-white shadow-2xl">
                  <div className="flex justify-center items-center">
                    <Rating
                      value={rating}
                      count={5}
                      onChange={handleRatingChange}
                      size={24}
                      activeColor="#FF3B00"
                      edit={false}
                    />
                  </div>

                  <p className="  text-neutral-600 text-base font-normal ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the
                  </p>

                  <h1 className="text-black text-xl font-medium mt-5">
                  Kevin Martin
                  </h1>
                  <p className="text-orange-600 text-base font-normal ">
                    CUSTOMER
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center">
                  <img
                    className="w-64 h-64 rounded-full"
                    src={review3}
                    alt=""
                  />
                </div>

                <div className="p-10 bg-white shadow-2xl">
                  <div className="flex justify-center items-center">
                    <Rating
                      value={rating}
                      count={5}
                      onChange={handleRatingChange}
                      size={24}
                      activeColor="#FF3B00"
                      edit={false}
                    />
                  </div>

                  <p className="  text-neutral-600 text-base font-normal ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the
                  </p>

                  <h1 className="text-black text-xl font-medium mt-5">
                  Jecchica Brown
                  </h1>
                  <p className="text-orange-600 text-base font-normal ">
                    CUSTOMER
                  </p>
                </div>
              </div>
            </div>


          </SwiperSlide>
        </Swiper>
        {/* end */}
      </div>
    </>
  );
};

export default Review;
