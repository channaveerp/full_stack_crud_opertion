import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/action';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('state:', state);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getData(state));
    }, 200);
  }, []);
  return (
    <div className='mt-5'>
      <div className='container'>
        <div className='Addbtn mt-2'>
          <Link to='/register'>
            <button className='btn btn-primary'>Add-Users</button>
          </Link>
        </div>
        {/* table */}
        <table className='table mt-4'>
          <thead>
            <tr className='table-dark '>
              <th scope='col'>Id</th>
              <th scope='col'>UserName</th>
              <th scope='col'>Email</th>
              <th scope='col'>Job</th>
              <th scope='col'>Number</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>1</td>
              <td>sham</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td className='d-flex justify-content-between g-2'>
                <Link to='/view/:1'>
                  <button className='btn btn-success'>
                    <RemoveRedEyeIcon />;
                  </button>
                </Link>

                <Link to='/edit/1'>
                  <button className='btn btn-primary'>
                    <CreateIcon />
                  </button>
                </Link>
                <button className='btn btn-danger'>
                  <DeleteOutlineIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
