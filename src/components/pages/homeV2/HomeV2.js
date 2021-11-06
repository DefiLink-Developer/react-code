import "./HomeV2.scss";

import RunImg from "../../../assets/images/mouse-running.png";
import CapIcon from "../../../assets/images/cap.png";
import InvestIcon from "../../../assets/images/invest-image.png";
import EarnIcon from "../../../assets/images/earn-image.png";
import ManageIcon from "../../../assets/images/manage-image.png";

import Section from "./section/Section";

const NewHomeV2 = () => {
  return (
    <>
      <Section name="mainSection" />
      {/* <Section name="imageSection" /> */}
      <Section name="textSection" />
      <Section name="stepSection" />
      <Section name="imageHeadingSection" />
      <Section
        name="centerHeadingSection"
        mainHeading="The Entire DeFi World In One Place"
        subHeading="“Proven platforms, strategies and technologies are integrated into the framework of Wonderland, bringing the Blockchain's best into a single hub”"
      />
      <Section
        name="rightImageButtonSection"
        mainHeading="MANAGE"
        button1Text="Portfolio"
        button2Text="Funds"
        description="View the performance of your investments & entire crypto portfolio with data that makes you wiser."
        viewText="View Dashboard"
        image={ManageIcon}
      />
      <Section
        name="leftImageButtonSection"
        mainHeading="INVEST"
        button1Text="Register for Whitelist"
        description="Decentralised Hedge Funds, Investment Pools, & Launch Pads bring the greatest opportunities to you"
        viewText="Start Investing"
        image={InvestIcon}
      />

      <Section
        name="rightImageButtonSection"
        mainHeading="EARN"
        button1Text="Staking"
        button2Text="Yield Farming"
        description="Earn interest (yield) on your crypto with 7 unique ways to earn; our platform sources the best of the best for you."
        viewText="Start Earning"
        image={EarnIcon}
      />

      <Section
        name="centerHeadingSection"
        mainHeading="Wonderland Features"
        subHeading="Currently being built by the Wonderland team for Fortune 1000
          clients, businesses, & people"
      />

      <Section name="cardSection" />
      <Section name="buttonSection" />

      <div class="container">
        <div class="text-center">
          <img src={RunImg} class="img-fluid mouse-running" />
        </div>
      </div>
    </>
  );
};

export default NewHomeV2;
