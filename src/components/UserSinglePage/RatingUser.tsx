import { Rating } from '@material-tailwind/react';
import React from 'react';

export const RatingUser = () => {
  const [rated, setRated] = React.useState(0);
  return (
    <>
      <span className="tracking-wide mr-2 text-[24px]">{rated},0</span>
      <Rating
        unratedColor="blue"
        ratedColor="blue"
        value={0}
        onChange={(value) => setRated(value)}
      />
    </>
  );
};
