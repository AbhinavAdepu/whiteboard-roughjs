import React, { useEffect } from "react";
import "./App.scss";
import { MOCKSERVICE_API } from "./services/MOCKSERVICE_API";
import NoResults from "./components/InternalServorError";
import Header from "./components/Header";
import BoxContentWithBG from "./components/BoxContentWithBG";
import { COMMON_CONSTANTS } from "./constants/constants";
import PromoComponentBG from "./components/PromoComponentBG";
import MockAPIComponent from "./components/MockAPIComponent";
import Spinner from "./components/Loader";
import APIDataComponent from './components/APIDataComponent';

const App = () => {
  const [mainData, setMainaData] = React.useState([]);
  const [exception, setException] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      loadArticles(7);
    }
    fetchData();
  }, []);
  const loadArticles = async param => {
    try {
      const res = await MOCKSERVICE_API.getMostpopularArticles(param);
      setMainaData(res.results);
      setIsLoaded(true);
    } catch (err) {
      setException(true);
    }
  };

  return (
    <>
      {isLoaded ? (
        <div className="App">
          <Header />
          <BoxContentWithBG
            upperText="Phasellus gravida magna ac sapien convallis gravida."
            lowerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <PromoComponentBG
            upperText={COMMON_CONSTANTS.upperText}
            lowerText={COMMON_CONSTANTS.lowerText}
          />
          {mainData.length !== 0 && (
            <MockAPIComponent apiData={mainData} exception={exception} />
          )}

          <PromoComponentBG
            upperText={COMMON_CONSTANTS.upperText}
            lowerText={COMMON_CONSTANTS.lowerText}
          />
          {mainData.length !== 0 && (
            <APIDataComponent apiData={mainData} exception={exception} />
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default React.memo(App);
