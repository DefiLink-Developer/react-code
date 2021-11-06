import "./Home.scss";
import Section from "./sections/Section";
import RunImg from "../../../assets/images/mouse-running.png";

const Home = () => {
  return (
    <>
      <Section section="main" />
      <Section section="cardSection" />
      <Section section="buttonSection" />
      <Section section="headingSection" />
      <Section section="imageButtonSection" />
      <Section section="headingButtonSection" />
      <div className="text-center">
        <img alt="" src={RunImg} className="img-fluid mouse-running" alt="" />
      </div>
    </>
  );
};

export default Home;
