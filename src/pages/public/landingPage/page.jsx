import Navbar from "../../../components/navbar/Navbar";
import Button from "../../../components/button/Button";
import BannerCard from "../../../components/banner-card/BannerCard";
import Card from "../../../components/card/Card";
// img
import bannerImg from "../../../assets/Rectangle 1.png";
import dhosaImg from "../../../assets/Group 117.png";
import CardImg from "../../../assets/Rectangle 5.png";
import BannerCardImg from "../../../assets/sandwich-5930496_1280 1.png";

const Landingpage = () => {
  return (
    <>
      <div className="total_wrapper">
        <header>
          <nav>
            <Navbar />
          </nav>
          <article className="banner-container px-16 flex gap-7 items-center  text-white h-[560px] w-full bg-[#00242B]">
            <aside
              className="w-[530px] h-[500px] text-left  flex flex-col
             "
            >
              <div className="flex flex-col items-start w-[400px]">
                <h1 className="text-5xl font-bold mb-3">
                  <span className="text-red-500">Be The Fastest </span>
                  <br /> In Delivering Your Food
                </h1>
                <p className="mb-4 text-1xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <Button content={"Get Started"} bgradius={"10px"} />
              </div>
              <div className="flex mt-12">
                <div>
                  <h2 className="text-2xl font-bold mb-3">
                    Fresh Food for You
                  </h2>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, et.
                  </p>
                  <a href="#" className="text-green-400 text-xl">
                    {" "}
                    More -->
                  </a>
                </div>
                <div className="h-52  ">
                  <img src={dhosaImg} className="w-full h-full" />
                </div>
              </div>
            </aside>
            <aside className="h-[500px] w-[530px]">
              <img src={bannerImg} className="h-full w-full" />
            </aside>
          </article>
        </header>
        <main>
          <div className="card-container grid place-content-center ">
            <h1 className="py-8 text-6xl">
              <span className="text-red-600"> Be The Fastest </span>In
              Delivering your food
            </h1>
            <div className="card-product-container grid grid-cols-4  gap-12 ">
              <Card img={CardImg} />
              <Card img={CardImg} />
              <Card img={CardImg} />
              <Card img={CardImg} />
              <Card img={CardImg} />
              <Card img={CardImg} />
              <Card img={CardImg} />
              <Card img={CardImg} />
            </div>
          </div>
          <div className="flex justify-center gap-9 py-32 px-16">
            <BannerCard img={BannerCardImg} />
            <BannerCard img={BannerCardImg} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Landingpage;
