import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    age: '',
    work: '', 
    description: '',
  });

  const InputValueChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log('in', formData);

  return (
    <div className='row px-4'>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <form>
          <div className='row mt-4'>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
              <label for='exampleInputEmail1' className='form-label'>
                Name
              </label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                name='name'
                value={formData.name}
                onChange={InputValueChange}
              />
              <div id='emailHelp' className='form-text'></div>
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
              <label for='exampleInputPassword1' className='form-label'>
                Email
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                name='email'
                value={formData.email}
                onChange={InputValueChange}
              />
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
              <label for='exampleInputPassword1' className='form-label'>
                Age
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                name='age'
                value={formData.age}
                onChange={InputValueChange}
              />
            </div>{' '}
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
              <label for='exampleInputPassword1' className='form-label'>
                Mobile
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                name='phone'
                value={formData.phone}
                onChange={InputValueChange}
              />
            </div>{' '}
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
              <label for='exampleInputPassword1' className='form-label'>
                Work
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                name='work'
                value={formData.work}
                onChange={InputValueChange}
              />
            </div>{' '}
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
              <label for='exampleInputPassword1' className='form-label'>
                Address
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                name='address'
                value={formData.address}
                onChange={InputValueChange}
              />
            </div>
            <div class='mb-3'>
              <label for='exampleFormControlTextarea1' class='form-label'>
                description
              </label>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                name='description'
                value={formData.description}
                onChange={InputValueChange}></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
