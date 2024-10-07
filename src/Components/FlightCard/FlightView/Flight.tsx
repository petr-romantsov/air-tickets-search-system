import { FC } from 'react';
import './Flight.css';
import {
  getFlightDuration,
  getFormattedDate,
  getTime,
  pluralizeConnections,
} from '../../../utils/Utils';

export type Direction = Record<string, any>;

interface FlightViewProps {
  direction: Direction;
}

export const FlightView: FC<FlightViewProps> = ({ direction }) => {
  const flightData = {
    departureCity: direction.segments[0].departureCity.caption,
    departureAirport: {
      uid: direction.segments[0].departureAirport.uid,
      caption: direction.segments[0].departureAirport.caption,
    },
    arrivalCity:
      direction.segments.length > 1
        ? direction.segments[1].arrivalCity.caption
        : direction.segments[0].arrivalCity.caption,
    arrivalAirport: {
      uid:
        direction.segments.length > 1
          ? direction.segments[1].arrivalAirport.uid
          : direction.segments[0].arrivalAirport.uid,
      caption:
        direction.segments.length > 1
          ? direction.segments[1].arrivalAirport.caption
          : direction.segments[0].arrivalAirport.caption,
    },
    departureDate: direction.segments[0].departureDate,
    arrivalDate:
      direction.segments.length > 1
        ? direction.segments[1].arrivalDate
        : direction.segments[0].arrivalDate,
    flightDuration: direction.duration,
    airCompany: direction.segments[0].airline.caption,
    operatingAirline:
      direction.segments.length > 1
        ? direction.segments[1].operatingAirline
        : direction.segments[0].operatingAirline,
  };

  const operatingCompany = flightData.operatingAirline
    ? flightData.operatingAirline.caption
    : flightData.airCompany;

  return (
    <div className="flight">
      <div className="flight__cities">
        <span className="flight__dep-city">
          {`${flightData.departureCity}, ${flightData.departureAirport.caption}`}
          <span className="flight__uid">{` (${flightData.departureAirport.uid})`}</span>
        </span>
        {`${flightData.arrivalCity}, ${flightData.arrivalAirport.caption}`}
        <span className="flight__uid">{` (${flightData.arrivalAirport.uid})`}</span>
      </div>
      <div className="flight__time-wrapper">
        <span className="flight__departure-time">
          <span className="flight__time flight__time--departure">
            {getTime(flightData.departureDate)}
          </span>
          <span className="flight__date">
            {getFormattedDate(flightData.departureDate)}
          </span>
        </span>
        <span className="flight__duration">
          {getFlightDuration(flightData.flightDuration)}
        </span>
        <span className="flight__arrival-time">
          <span className="flight__date flight__date--arrival">
            {getFormattedDate(flightData.arrivalDate)}
          </span>
          <span className="flight__time">
            {getTime(flightData.arrivalDate)}
          </span>
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
