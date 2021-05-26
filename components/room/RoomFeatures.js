import React from 'react';

const RoomFeatures = ({
  guestCapacity,
  numOfBeds,
  breakfast,
  internet,
  airConditioned,
  petsAllowed,
  roomCleaning,
}) => {
  return (
    <div className='features mt-5'>
      <h3 className='mb-4'>Features:</h3>
      <div className='room-feature'>
        <i className='fa fa-cog fa-fw fa-users' aria-hidden='true'></i>
        <p>{guestCapacity} Guests</p>
      </div>

      <div className='room-feature'>
        <i className='fa fa-cog fa-fw fa-bed' aria-hidden='true'></i>
        <p>{numOfBeds} Beds</p>
      </div>

      <div className='room-feature'>
        <i
          className={
            breakfast ? 'fa fa-check text-success' : 'fa fa-times text-danger'
          }
          aria-hidden='true'
        ></i>
        <p>Breakfast</p>
      </div>

      <div className='room-feature'>
        <i
          className={
            internet ? 'fa fa-check text-success' : 'fa fa-times text-danger'
          }
          aria-hidden='true'
        ></i>
        <p>Internet</p>
      </div>

      <div className='room-feature'>
        <i
          className={
            airConditioned
              ? 'fa fa-check text-success'
              : 'fa fa-times text-danger'
          }
          aria-hidden='true'
        ></i>
        <p>Air Conditioned</p>
      </div>

      <div className='room-feature'>
        <i
          className={
            petsAllowed ? 'fa fa-check text-success' : 'fa fa-times text-danger'
          }
          aria-hidden='true'
        ></i>
        <p>Pets Allowed</p>
      </div>

      <div className='room-feature'>
        <i
          className={
            roomCleaning
              ? 'fa fa-check text-success'
              : 'fa fa-times text-danger'
          }
          aria-hidden='true'
        ></i>
        <p>Room Cleaning</p>
      </div>
    </div>
  );
};

export default RoomFeatures;
