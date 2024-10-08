import { ComponentProps, FC } from 'react';
import { Flight } from '../FlightCard/FlightCard';
import { ShowMoreButton } from './ShowMoreButton/ShowMoreButton';
import { FlightsList } from './FlightsList/FlightsList';
import './FlightsWrapper.css';

interface FlightsWrapperProps {
  flights: Flight[];
  visibleCount: number;
  handleShowMoreFlights: ComponentProps<'button'>['onClick'];
}

export const FlightsWrapper: FC<FlightsWrapperProps> = ({
  flights,
  visibleCount,
  handleShowMoreFlights,
}) => {
  const visibleFlights = flights.slice(0, visibleCount);

  return (
    <div className="flights-wrapper">
      <FlightsList flights={visibleFlights} />
      {visibleCount < flights.length && (
        <ShowMoreButton handleShowMoreFlights={handleShowMoreFlights} />
      )}
    </div>
  );
};
