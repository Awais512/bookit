import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { clearErrors } from '../../redux/actions/roomAction';
import { toast } from 'react-toastify';
import Head from 'next/head';
import { Carousel } from 'react-bootstrap';
import RoomFeatures from './RoomFeatures';

const RoomDetails = () => {
  const dispatch = useDispatch();
  const { room, error } = useSelector((state) => state.roomDetails);
  console.log(room);
  const {
    name,
    address,
    pricePerNight,
    internet,
    airConditioned,
    breakfast,
    category,
    description,
    guestCapacity,
    images,
    numOfBeds,
    numOfReviews,
    petsAllowed,
    ratings,
    reviews,
    roomCleaning,
  } = room;
  useEffect(() => {
    toast.error(error);
    dispatch(clearErrors());
  }, []);
  return (
    <>
      <Head>
        <title>{name} - BookIT</title>
      </Head>
      <div className='container container-fluid'>
        <h2 className='mt-5'>{name}.(one)</h2>
        <p>{address}</p>

        <div className='ratings mt-auto mb-3'>
          <div className='rating-outer'>
            <div
              className='rating-inner'
              style={{ width: `${(ratings / 5) * 100}%` }}
            ></div>
          </div>
          <span id='no_of_reviews'>({numOfReviews} Reviews)</span>
        </div>

        <Carousel hover='pause'>
          {images &&
            images.map((image) => (
              <Carousel.Item key={image.public_id}>
                <div style={{ width: '100%', height: '440px' }}>
                  <Image
                    className='d-block m-auto'
                    src={image.url}
                    alt={name}
                    layout='fill'
                  />
                </div>
              </Carousel.Item>
            ))}
        </Carousel>

        <div className='row my-5'>
          <div className='col-12 col-md-6 col-lg-8'>
            <h3>Description</h3>
            <p>{description}</p>

            <RoomFeatures
              guestCapacity={guestCapacity}
              numOfBeds={numOfBeds}
              breakfast={breakfast}
              internet={internet}
              airConditioned={airConditioned}
              petsAllowed={petsAllowed}
              roomCleaning={roomCleaning}
            />
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='booking-card shadow-lg p-4'>
              <p className='price-per-night'>
                <b>${pricePerNight}</b> / night
              </p>

              <button className='btn btn-block py-3 booking-btn'>Pay</button>
            </div>
          </div>
        </div>

        <div className='reviews w-75'>
          <h3>Reviews:</h3>
          <hr />
          <div className='review-card my-3'>
            <div className='rating-outer'>
              <div className='rating-inner'></div>
            </div>
            <p className='review_user'>by John</p>
            <p className='review_comment'>Good Quality</p>

            <hr />
          </div>

          <div className='review-card my-3'>
            <div className='rating-outer'>
              <div className='rating-inner'></div>
            </div>
            <p className='review_user'>by John</p>
            <p className='review_comment'>Good Quality</p>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
