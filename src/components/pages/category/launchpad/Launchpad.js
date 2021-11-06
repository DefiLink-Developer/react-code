import "./Launchpad.scss";
import Card from "./card/Card";
import Binance from "../../../../assets/images/binance.png";
import Uniswap from "../../../../assets/images/uniswap.png";
import KindstonIcon from "../../../../assets/images/kindston.png";
import HighstreetIcon from "../../../../assets/images/highstreet.png";
import MangaIcon from "../../../../assets/images/manga.png";
import AntexIcon from "../../../../assets/images/antex.png";

const Launchpad = () => {
  return (
    <>
      <section className="inner-header">
        <h2 className="inner-heading">Launchpad</h2>
      </section>
      <div className="align-items-center d-flex inner-filter py-3 py-lg-0">
        <div className="container">
          <div className="justify-content-center d-flex">
            <div className="tabs-dark">
              <ul className="nav nav-pills bg-pink rounded" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="active-icon-tab"
                    data-toggle="pill"
                    href="#active-icon"
                    role="tab"
                    aria-controls="active-icon-tab"
                    aria-selected="true"
                  >
                    Active ICO
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="upcoming-icon-tab"
                    data-toggle="pill"
                    href="#upcoming-icon"
                    role="tab"
                    aria-controls="upcoming-icon-tab"
                    aria-selected="false"
                  >
                    Upcoming ICO
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="ended-icon-tab"
                    data-toggle="pill"
                    href="#ended-icon"
                    role="tab"
                    aria-controls="ended-icon-tab"
                    aria-selected="false"
                  >
                    Ended ICO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="wonder-box-section inner-section-space mb-0">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="active-icon"
              role="tabpanel"
              aria-labelledby="active-icon-tab"
            >
              <div className="row">
                <Card
                  type="1"
                  profileImg={KindstonIcon}
                  mainHeading="The Three Kingdoms"
                  subHeading="Gaming • Not Rated"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                  remain="6% Left"
                />

                <Card
                  type="1"
                  profileImg={HighstreetIcon}
                  mainHeading="Highstreet"
                  subHeading="Marketplace • Rated High"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                  remain="6% Left"
                />

                <Card
                  type="1"
                  profileImg={MangaIcon}
                  mainHeading="Manga Fomo Chronicles"
                  subHeading="Gaming • Not Rated"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                  remain="6% Left"
                />

                <Card
                  type="1"
                  profileImg={AntexIcon}
                  mainHeading="AntEx"
                  subHeading="Gaming • Not Rated"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                  remain="6% Left"
                />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="upcoming-icon"
              role="tabpanel"
              aria-labelledby="upcoming-icon-tab"
            >
              <div className="row">
                <Card
                  type="2"
                  profileImg={KindstonIcon}
                  mainHeading="The Three Kingdoms"
                  subHeading="Gaming • Not Rated"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                />

                <Card
                  type="2"
                  profileImg={HighstreetIcon}
                  mainHeading="Highstreet"
                  subHeading="Marketplace • Rated High"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                />

                <Card
                  type="2"
                  profileImg={MangaIcon}
                  mainHeading="Manga Fomo Chronicles"
                  subHeading="Gaming • Not Rated"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                />

                <Card
                  type="2"
                  profileImg={AntexIcon}
                  mainHeading="AntEx"
                  subHeading="Gaming • Not Rated"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ended-icon"
              role="tabpanel"
              aria-labelledby="ended-icon-tab"
            >
              <div className="row">
                <Card
                  type="3"
                  profileImg={KindstonIcon}
                  mainHeading="The Three Kingdoms"
                  subHeading="Gaming • Not Rated"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                  remain="Completed"
                />

                <Card
                  type="3"
                  profileImg={HighstreetIcon}
                  mainHeading="Highstreet"
                  subHeading="Marketplace • Rated High"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                  remain="Completed"
                />

                <Card
                  type="3"
                  profileImg={MangaIcon}
                  mainHeading="Manga Fomo Chronicles"
                  subHeading="Gaming • Not Rated"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                  remain="Completed"
                />

                <Card
                  type="3"
                  profileImg={AntexIcon}
                  mainHeading="AntEx"
                  subHeading="Gaming • Not Rated"
                  endingTime="4d, 24h, 30m"
                  goal={{ total: "$3,200,000", value: "$3,000,000" }}
                  remain="Completed"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Launchpad;
