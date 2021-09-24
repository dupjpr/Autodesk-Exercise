import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getDataAction } from '../../redux/axiosActions'
import './home.style.scss';
import Header from "../UI Library/header/Header";
import Footer from "../UI Library/footer/Footer";
import TabsButtons from "./tabsSectionButtons/TabsButtons";
import TabOne from "./displayTabOne/TabOne";
import TabTwo from "./displayTabTwo/TabTwo";

const Home = () => {
  
  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { statusTabs: { tabOne, tabTwo } } = storeData;

  useEffect(() => {
    dispatch(getDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(storeData);
  return (
    <>
      <Header />
      <main className='sectionHome-container'>
        <TabsButtons />
        {tabOne && <TabOne />}
        {tabTwo && <TabTwo />}
      </main>
      <Footer />
    </>
  );
}

export default Home;

