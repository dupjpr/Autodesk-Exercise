import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getDataAction } from '../../redux/axiosActions'
import './home.style.scss';
import Header from "../UI Library/header/Header";
import Footer from "../UI Library/footer/Footer";

const Home = () => {
  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(storeData);
  return (
    <section className='sectionHome-container'>
      <Header />
      this is the body of the app
      <Footer/>
    </section>
  );
}

export default Home;

