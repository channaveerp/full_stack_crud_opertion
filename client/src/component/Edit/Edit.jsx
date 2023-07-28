import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading';
import { editUser } from '../../redux/action';

const Edit = () => {
  const { usersData } = useSelector((state) => state.Reducer);
  const [loading, setLoading] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const [editUsers, setUsers] = useState(null);
  console.log('editUsers:', editUsers?.name);

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

  useEffect(() => {
    const EditData = usersData?.data?.find((user) => user._id === id);
    if (EditData) {
      setUsers(EditData);
      setFormData({
        name: EditData?.name,
        email: EditData?.email,
        phone: EditData?.phone,
        address: EditData?.address,
        age: EditData?.age,
        work: EditData?.work,
        description: EditData?.description,
      });
    }
  }, [id, editUsers]);

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);
    if (
      !formData.name ||
      !formData.email ||
      !formData.work ||
      !formData.phone ||
      !formData.address ||
      !formData.age
    ) {
      alert('Please fill data');
      return;
    }
    setLoading(true);
    try {
      const res = await dispatch(editUser({ id, formData }));
      console.log('res:', res);

      if (res.payload) {
        alert('user successfully registered');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          age: '',
          work: '',
          description: '',
        });
        setLoading(false);
        return;
      } else {
        alert('something went wrong please check your form data');
        setLoading(false);

        return;
      }
    } catch (err) {
      console.log('err:', err);
      alert('Error registering');
      setSuccessAlert(false);
      setLoading(false);
    }
  };

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
                type='text'
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
                type='text'
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
                type='text'
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
                type='text'
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
                type='text'
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
                type='text'
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
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                name='description'
                value={formData.description}
                onChange={InputValueChange}></textarea>
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={formSubmit}>
              {loading ? <Loading /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
