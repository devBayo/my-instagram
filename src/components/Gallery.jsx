import trashIcon from "../assets/trash.svg";
import { useLiveQuery } from "dexie-react-hooks";
import getPhotoUrl from "get-photo-url";
import { useState } from "react";
import { db } from "../dexie";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);

  const allPhotos = useLiveQuery(() => db.gallery.reverse().toArray(), []);

  const addPhoto = async () => {
    db.gallery.add({
      url: await getPhotoUrl("#addPhotoInput"),
    });
  };

  const removePhoto = async (id) => {
    await db.gallery.delete(id);
  };

  const loader = (
    <>
      <div id="loader"></div>
      <div className="overlay"></div>
    </>
  );

  const trash = (
    <img
      src={trashIcon}
      alt="Trash icon"
      className="clear-button"
      onClick={() => {
        setShowModal(true);
      }}
    />
  );

  const modal = (
    <>
      <div class="modal">
        <p>Are you sure you want to clear your gallery?</p>

        <div className="btns">
          <button
            className="btn-no"
            onClick={() => {
              setShowModal(false);
            }}
          >
            No
          </button>
          <button
            className="btn-yes"
            onClick={() => {
              db.gallery.clear();
              setShowModal(false);
            }}
          >
            Yes
          </button>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <p className="add-photo-button">+</p>
      </label>

      {allPhotos?.length > 0 && trash}
      {showModal && modal}

      <section className="gallery">
        {!allPhotos && loader}
        {allPhotos?.length === 0 && (
          <h1 className="empty-gallery">Your gallery is empty.</h1>
        )}
        {allPhotos?.map((photo) => (
          <div className="item" key={photo.id}>
            <img src={photo.url} className="item-image" alt="Gallery item" />
            <button
              className="delete-button"
              onClick={() => {
                removePhoto(photo.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallery;
