import { FC } from 'react';
import { Flight, FlightCard } from '../../FlightCard/FlightCard';
import './FlightsList.css';

interface FlightsListProps {
  flights: Flight[];
}

export const FlightsList: FC<FlightsListProps> = ({ flights }) => {
  return (
    <ul className="flights-list">
      {flights.map(flight => (
        <FlightCard key={flight.flightToken} flight={flight} />
      ))}
    </ul>
  );
};
