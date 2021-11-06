import "./ModalConnect.scss";
import CatIcon from "../../../assets/images/cat.svg";
import WalletConnectIcon from "../../../assets/images/walletconnect.svg";
import HorizWhiteIcon from "../../../assets/images/horizontal_white.svg";
import BinanceChainIcon from "../../../assets/images/binance-chain.svg";
import MathWalletIcon from "../../../assets/images/math-wallet.png";
import TokenPocketIcon from "../../../assets/images/tocken-pocket.png";
import SafePalIcon from "../../../assets/images/safepal.png";
import Coin98Icon from "../../../assets/images/coin98.png";

const ModalConnect = (props) => {
  const connectToWallet = () => {
    props.connectToWallet();
  };
  return (
    <>
      <div
        className="modal fade modal-token"
        id="Modal-Connect"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <h4 className="modal-title graphic-medium" id="exampleModalLabel">
                Connect Wallet
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body pt-4">
              <div className="row text-center">
                <div
                  className="col-6 col-md-4 mb-30"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    connectToWallet();
                  }}
                >
                  <img
                    alt=""
                    className="mb-2"
                    height="50"
                    width="50"
                    src={CatIcon}
                  />
                  <h6 className="fs-14 mb-0 text-black">Metamask</h6>
                </div>
                <div
                  className="col-6 col-md-4 mb-30"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    connectToWallet();
                  }}
                >
                  <img
                    alt=""
                    className="mb-2"
                    height="50"
                    width="50"
                    src={WalletConnectIcon}
                  />
                  <h6 className="fs-14 mb-0 text-black">WalletConnect</h6>
                </div>
                <div
                  className="col-6 col-md-4 mb-30"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    connectToWallet();
                  }}
                >
                  <img
                    alt=""
                    className="mb-2"
                    height="50"
                    width="50"
                    src={HorizWhiteIcon}
                  />
                  <h6 className="fs-14  mb-0 text-black">Trust Wallet </h6>
                </div>
                <div
                  className="col-6 col-md-4 mb-30"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    connectToWallet();
                  }}
                >
                  <img
                    alt=""
                    className="mb-2"
                    height="50"
                    width="50"
                    src={BinanceChainIcon}
                  />
                  <h6 className="fs-14 mb-0 text-black">
                    Binance Chain Wallet
                  </h6>
                </div>
                <div
                  className="col-6 col-md-4 mb-30"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    connectToWallet();
                  }}
                >
                  <img
                    alt=""
                    className="mb-2"
                    height="50"
                    src={MathWalletIcon}
                  />
                  <h6 className="fs-14 mb-0 text-black">Math Wallet</h6>
                </div>
                <div
                  className="col-6 col-md-4 mb-30"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    connectToWallet();
                  }}
                >
                  <img
                    alt=""
                    className="mb-2"
                    height="50"
                    width="50"
                    src={TokenPocketIcon}
                  />
                  <h6 className="fs-14  mb-0 text-black">Token Pocket </h6>
                </div>
                <div
                  className="col-6 col-md-4 mb-30"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    connectToWallet();
                  }}
                >
                  <img alt="" className="mb-2" height="50" src={SafePalIcon} />
                  <h6 className="fs-14 mb-0 text-black">SafePal</h6>
                </div>
                <div
                  className="col-6 col-md-4 mb-30"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    connectToWallet();
                  }}
                >
                  <img
                    alt=""
                    className="mb-2"
                    height="50"
                    width="50"
                    src={Coin98Icon}
                  />
                  <h6 className="fs-14  mb-0 text-black">Coin98 </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalConnect;
