import { FC } from 'react';
import './Flight.css';
import {
  getFlightDuration,
  getFormattedDate,
  getTime,
  pluralizeConnections,
} from '../../../api/Utils';
import { useFlightData } from '../../../api/useFlightData';

export type Direction = Record<string, any>;

export interface FlightViewProps {
  direction: Direction;
}

export const FlightView: FC<FlightViewProps> = ({ direction }) => {
  const {
    departureCity,
    departureAirport,
    arrivalCity,
    arrivalAirport,
    departureDate,
    arrivalDate,
    flightDuration,
    operatingCompany,
  } = useFlightData(direction);

  return (
    <div className="flight">
      <div className="flight__cities">
        <span className="flight__dep-city">
          {`${departureCity}, ${departureAirport.caption}`}
          <span className="flight__uid">{` (${departureAirport.uid})`}</span>
        </span>
        {`${arrivalCity}, ${arrivalAirport.caption}`}
        <span className="flight__uid">{` (${arrivalAirport.uid})`}</span>
      </div>
      <div className="flight__time-wrapper">
        <span className="flight__departure-time">
          <span className="flight__time flight__time--departure">
            {getTime(departureDate)}
          </span>
          <span className="flight__date">
            {getFormattedDate(departureDate)}
          </span>
        </span>
        <span className="flight__duration">
          {getFlightDuration(flightDuration)}
        </span>
        <span className="flight__arrival-time">
          <span className="flight__date flight__date--arrival">
            {getFormattedDate(arrivalDate)}
          </span>
          <span className="flight__time">{getTime(arrivalDate)}</span>
        </span>
      </div>
      <div className="flight__connection-wrapper">
        <span className="flight__connection">
          {pluralizeConnections(direction.segments.length)}
        </span>
      </div>
      <p className="flight__operating-company">
        Рейс выполняет: {operatingCompany}
      </p>
    </div>
  );
};
