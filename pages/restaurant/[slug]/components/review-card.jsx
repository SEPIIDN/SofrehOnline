import React from 'react';
import Star from '../../../../components/restaurants/restaurant-star';

export default function ReviewCard({ review }) {
  return (
    <div className='rtl border-b pb-7 mb-7'>
      <div className='flex'>
        <div className='w-1/6 flex flex-col items-center'>
          <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center'>
            <h2 className='text-white text-2xl uppercase'>
              {review.first_name[0]}
              {review.last_name[0]}
            </h2>
          </div>
          <p className='text-center'>
            {review.first_name} {review.last_name}
          </p>
        </div>
        <div className='ml-10 w-5/6'>
          <div className='flex items-center'>
            <div className='flex mr-1'>
              <Star
                reviews={[]}
                rating={review.rating}
              />
            </div>
          </div>
          <div className='mt-5 mr-10'>
            <p className='text-lg font-light'>
              {review.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
