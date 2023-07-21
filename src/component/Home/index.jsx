import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('state:', state);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getData(state));
    }, 200);
  }, []);
  return <div>index</div>;
};

export default Home;
