import "./App.scss";
import { Route, Switch, useLocation } from "react-router";

//Components
import Error from "./components/pages/error/Error";
import Home from "./components/pages/home/Home";
import Exchange from "./components/pages/navigate/exchange/Exchange";
import Liquidity from "./components/pages/navigate/liquidity/Liquidity";
import Farm from "./components/pages/navigate/farms/Farm";
import Pool from "./components/pages/category/pool/Pool";
import StablecoinVault from "./components/pages/category/stableCoinVault/StablecoinVault";
import NFTs from "./components/pages/category/nFTs/NFTs";
import Launchpad from "./components/pages/category/launchpad/Launchpad";
import Governance from "./components/pages/category/governance/Governance";
import Info from "./components/pages/about/info/Info";
import Contact from "./components/pages/about/contact/Contact";
import Docs from "./components/pages/about/docs/Docs";
import Blog from "./components/pages/about/blog/Blog";
import Merch from "./components/pages/about/merch/Merch";
import Fund from "./components/pages/navigate/hedgeFund/Fund";
import Form from "./components/pages/navigate/form/Form";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import GovernanceDetail from "./components/pages/category/governance/governanceDetail/GovernanceDetail";
import Affiliate from "./components/pages/category/affiliate/Affiliate";
import Trade from "./components/pages/trade/Trade";
import { useEffect, useRef } from "react";
import FundDetail from "./components/pages/navigate/hedgeFund/detail/FundDetail";
import NewHome from "./components/pages/newHome/Home";
import ModalConnect from "./components/modals/modalConnect/ModalConnect";
import ModalAccount from "./components/modals/modalAccount/ModalAccount";
import NewHomeV2 from "./components/pages/homeV2/HomeV2";

const App = () => {
  const location = useLocation();
  let navRef = useRef();
  let footerRef = useRef();
  let body = document.body;

  const connectToWallet = () => {
    navRef.current.connectToWallet();
  };

  const disConnectToWallet = () => {
    navRef.current.disConnectToWallet();
  };

  useEffect(() => {
    navRef.current.showNewHome(false);
    navRef.current.showNewHomeV2(false);
    footerRef.current.showNewFooterV2(false);

    if (location && location.pathname === "/") {
      body.classList.add("home");
    } else {
      body.classList.remove("home");
      if (location && location.pathname === "/new/home") {
        navRef.current.showNewHome(true);
      } else if (location && location.pathname === "/new_home_v2") {
        navRef.current.showNewHomeV2(true);
        footerRef.current.showNewFooterV2(true);
      }
    }
    navRef.current.hideNavbar();
  }, [location, body.classList]);

  return (
    <div>
      <Navbar ref={navRef} />
      <section className="content-section">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/new_home_v2" component={NewHomeV2} exact />
          <Route path="/exchange" component={Exchange} exact />
          <Route path="/governance_detail" component={GovernanceDetail} exact />
          <Route path="/liquidity" component={Liquidity} exact />
          <Route path="/affiliate" component={Affiliate} exact />
          <Route path="/farms" component={Farm} exact />
          <Route path="/form" component={Form} exact />
          <Route path="/pools" component={Pool} exact />
          <Route path="/stablecoin" component={StablecoinVault} exact />
          <Route path="/nft" component={NFTs} exact />
          <Route path="/launchpad" component={Launchpad} exact />
          <Route path="/governance" component={Governance} exact />
          <Route path="/info" component={Info} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/docs" component={Docs} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/merch" component={Merch} exact />
          <Route path="/funds" component={Fund} exact />
          <Route path="/funds_detail" component={FundDetail} exact />
          <Route path="/trade" component={Trade} exact />
          <Route path="/new/home" component={NewHome} exact />
          <Route component={Error} />
        </Switch>
        <Footer ref={footerRef} />
      </section>

      <ModalConnect connectToWallet={connectToWallet} />
      <ModalAccount disConnectToWallet={disConnectToWallet} />
    </div>
  );
};

export default App;
