import getPhotoUrl from 'get-photo-url';
import { useEffect, useState } from 'react';
import profileIcon from '../assets/profileIcon.svg';
import { db } from '../dexie';

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Ebenezer Don',
    about:
      ' Building Newdev.io - Learn to code and connect with the best minds',
  });
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileIcon);

  useEffect(() => {
    const setDataFromDb = async () => {
      const userDetailsFromDb = await db.bio.get('info');
      const profilePhotoFromDb = await db.bio.get('profilePhoto');
      userDetailsFromDb && setUserDetails(userDetailsFromDb);
      profilePhotoFromDb && setProfilePhoto(profilePhotoFromDb);
    };

    setDataFromDb();
  }, []);

  const updateUserDetails = async (event) => {
    const objectData = {
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    };
    event.preventDefault();
    setUserDetails(objectData);
    await db.bio.put(objectData, 'info');
    setEditFormIsOpen(false);
  };

  const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl('#profilePhotoInput');
    setProfilePhoto(newProfilePhoto);
    await db.bio.put(newProfilePhoto, 'profilePhoto');
  };

  const editForm = (
    <form className='edit-bio-form' onSubmit={(e) => updateUserDetails(e)}>
      <input
        type='text'
        id=''
        defaultValue={userDetails?.name}
        name='nameOfUser'
        placeholder='Your name'
      />
      <input
        type='text'
        id=''
        defaultValue={userDetails.about}
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
      <input type='file' accept='image/*' name='photo' id='profilePhotoInput' />
      <label htmlFor='profilePhotoInput' onClick={updateProfilePhoto}>
        <div
          className='profile-photo'
          role='button'
          title='Click to edit photo'
        >
          <img src={profilePhoto} alt='profile' />
        </div>
      </label>
      <div className='profile-info'>
        <p className='name'>{userDetails.name}</p>
        <p className='about'>{userDetails.about}</p>

        {editFormIsOpen ? editForm : editButton}
      </div>
    </section>
  );
};

export default Bio;
