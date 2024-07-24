
import SidebarBtn from '../../butoons/SidebarBtn';
import LearnMore from '../../butoons/LearnMore'
import { Link } from 'react-router-dom';


const Main = () => {
  return (
    <div className="main ">
      <div className="banner relative w-full h-80 sm:h-80 md:h-screen">
        <img
          className="banner-img relative h-full w-full bg-cover bg-center bg-no-repeat"
          src="../images/Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682_VP4-1399x600.avif"
          alt=""
        />
        <Link to="/">
          <i className="fa-thin fa-greater-than text-3xl absolute top-40 right-5 text-white md:hidden"></i>
        </Link>
        <Link to="/">
          <i className="fa-thin fa-less-than text-3xl absolute top-40 text-white left-5 md:hidden"></i>
        </Link>
        <div className="about-box shadow-lg absolute top-72 left-10 w-5/6 md:top-20 md:left-20 md:w-5/12  bg-white p-8 over">
          <div className="new capitalize pl-2 pr-2 bg-yellow-400 w-fit">new</div>
          <div className="about-heading mt-2 mb-3 font-bold text-2xl capitalize">
            meet surface pro
          </div>
          <div className="overflow-hidden">
            <div className="about-heading mb-9 text-wrap ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus molestias cum repellendus incidunt dolor sit aliquid
              numquam atque a voluptates?
            </div>
          </div>
          <div>
            <LearnMore />
          </div>
        </div>
        <SidebarBtn />
      </div>
    </div>
  );
};

export default Main;
