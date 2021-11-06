import "./ModalAccount.scss";
import CopyIcon from "../../../assets/images/copy-icon.svg";
import LogoutIcon from "../../../assets/images/logout.svg";
import MiniLogoIcon from "../../../assets/images/mini-logo.svg";

const ModalAccount = (props) => {
  const disConnectToWallet = () => {
    props.disConnectToWallet();
  };
  return (
    <>
      <div
        className="modal  fade modal-token"
        id="Modal-Account"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <h4 className="modal-title graphic-medium" id="exampleModalLabel">
                Your Account
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
              <div className="acc-modal-tabs">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      aria-controls="pills-home"
                      aria-selected="true"
                      className="nav-link active"
                      data-toggle="pill"
                      href="#pills-investors"
                      id="investors-tab"
                      role="tab"
                    >
                      Wallet
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      aria-controls="pills-profile"
                      aria-selected="false"
                      className="nav-link"
                      data-toggle="pill"
                      href="#pills-fund-managers"
                      id="fund-managers-tab"
                      role="tab"
                    >
                      Transactions
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-content mt-4" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-investors"
                  role="tabpanel"
                  aria-labelledby="investors-tab"
                >
                  <div className="account-balance-card py-sm-0 py-3">
                    <div className="row w-100 justify-content-center align-items-center">
                      <div className="col-md-2">
                        <div className="logo-box mr-4 mb-sm-0 mb-4">
                          <img alt="" height="40" src={MiniLogoIcon} />
                        </div>
                      </div>
                      <div className="col-4 col-md-3">
                        <h6 className="fs-14 text-white g">Balance</h6>
                        <h6 className="fs-16 mb-0 text-white graphic-medium">
                          6.81 ETH
                        </h6>
                      </div>
                      <div className="col-4 col-md-3">
                        <h6 className="fs-14 text-white g">Network</h6>
                        <h6 className="fs-16 mb-0 text-white graphic-medium">
                          Ethereum
                        </h6>
                      </div>
                      <div className="col-4  col-md-3">
                        <h6 className="fs-14 text-white g">Wallet</h6>
                        <h6 className="fs-16 mb-0 text-white graphic-medium">
                          Metamask
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label
                      className="fs-14 text-muted"
                      for="exampleInputEmail1"
                    >
                      Your Address{" "}
                    </label>
                    <div className="input-group mb-2 copy-link">
                      <input
                        type="text"
                        className="form-control muted-input"
                        value="0xec0B02DAca36A765FEf0b8Ca89a3Bc0B02DAca3"
                      />
                      <div className="input-group-prepend cursor-pointer">
                        <div className="input-group-text text-black">
                          {" "}
                          <img alt="" className="mr-2" src={CopyIcon} /> Copy
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      disConnectToWallet();
                    }}
                    className="d-flex fs-14 justify-content-center mt-4 mb-3 align-items-center cursor-pointer"
                  >
                    <img alt="" className="mr-2" src={LogoutIcon} /> Disconnect
                    Wallet
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-fund-managers"
                  role="tabpanel"
                  aria-labelledby="fund-managers-tab"
                >
                  2nd
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAccount;
