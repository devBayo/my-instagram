import { useState } from 'react';
import profileIcon from '../assets/profileIcon.svg';

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Ebenezer Don',
    about:
      ' Building Newdev.io - Learn to code and connect with the best minds',
  });

  const updateUserDetails = (event) => {
    event.preventDefault();
    setUserDetails({
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    });
    setEditFormIsOpen(false);
  };

  const [editFormIsOpen, setEditFormIsOpen] = useState(false);

  const editForm = (
    <form className='edit-bio-form' onSubmit={(e) => updateUserDetails(e)}>
      <input
        type='text'
        id=''
        required
        name='nameOfUser'
        placeholder='Your name'
      />
      <input
        type='text'
        id=''
        required
        name='aboutUser'
        placeholder='About you'
      />
      <br />
      <button
        type='button'
        className='cancel-button'
        onClick={() => setEditFormIsOpen(false)}
      >
        Cancel
      </button>
      <button type='submit'>Save</button>
    </form>
  );

  const editButton = (
    <button onClick={() => setEditFormIsOpen(true)}>Edit</button>
  );

  return (
    <section className='bio'>
      <div className='profile-photo' role='button' title='Click to edit photo'>
        <img src={profileIcon} alt='profile' />
      </div>
      <div className='profile-info'>
        <p className='name'>{userDetails.name}</p>
        <p className='about'>{userDetails.about}</p>

        {editFormIsOpen ? editForm : editButton}
      </div>
    </section>
  );
};

export default Bio;
