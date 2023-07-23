import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Details = () => {
  return (
    <div className='m-4'>
      <h3>Welcome channu</h3>
      <Card sx={{ maxWidth: 700 }}>
        <div
          style={{
            textAlign: 'right',
            display: 'flex',
            gap: '10px',
            justifyContent: 'flex-end',
          }}>
          <button className='btn btn-primary'>
            <CreateIcon />
          </button>
          <button className='btn btn-danger'>
            <DeleteOutlineIcon />
          </button>
        </div>
        <CardContent>
          <div className='row'>
            <div className='leftCont col-lg-6 col-md-6 col-12 p-3'>
              <div>
                <AccountCircleIcon style={{ fontSize: '40px' }} />
              </div>
              <p className='pro'>
                Name: <span>Chann</span>
              </p>
              <p className='pro'>
                Age: <span>21</span>
              </p>{' '}
              <p className='pro'>
                <MailIcon /> email: <span>Chann@gmail.com</span>
              </p>{' '}
              <p className='pro'>
                email: <span>Chann@gmail.com</span>
              </p>
            </div>
            <div className='LeftCont col-lg-6 col-md-6 col-12 p-3'>
              <p className='mt-3 pro'>
                <WorkIcon /> Occupation: <span>Chann@dg dfgd.com</span>
              </p>
              <p className='pro'>
                <PhoneAndroidIcon /> Phone: <span>Chann@gmail.com</span>
              </p>{' '}
              <p className='pro'>
                <LocationOnIcon /> Location: <span>Chann@gmail.com</span>
              </p>{' '}
              <p className='pro'>
                Description: <span>Chann@gmail.com Lo Loe</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
