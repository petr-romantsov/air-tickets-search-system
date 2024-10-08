import { Direction } from '../Components/FlightCard/FlightView/Flight';

export const useFlightData = (direction: Direction) => {
  const departureCity = direction.segments[0].departureCity.caption;
  const departureAirport = {
    uid: direction.segments[0].departureAirport.uid,
    caption: direction.segments[0].departureAirport.caption,
  };
  const arrivalCity =
    direction.segments.length > 1
      ? direction.segments[1].arrivalCity.caption
      : direction.segments[0].arrivalCity.caption;
  const arrivalAirport = {
    uid:
      direction.segments.length > 1
        ? direction.segments[1].arrivalAirport.uid
        : direction.segments[0].arrivalAirport.uid,
    caption:
      direction.segments.length > 1
        ? direction.segments[1].arrivalAirport.caption
        : direction.segments[0].arrivalAirport.caption,
  };
  const departureDate = direction.segments[0].departureDate;
  const arrivalDate =
    direction.segments.length > 1
      ? direction.segments[1].arrivalDate
      : direction.segments[0].arrivalDate;
  const flightDuration = direction.duration;
  const airCompany = direction.segments[0].airline.caption;
  const operatingAirline =
    direction.segments.length > 1
      ? direction.segments[1].operatingAirline
      : direction.segments[0].operatingAirline;

  const operatingCompany = operatingAirline
    ? operatingAirline.caption
    : airCompany;

  return {
    departureCity,
    departureAirport,
    arrivalCity,
    arrivalAirport,
    departureDate,
    arrivalDate,
    flightDuration,
    operatingAirline,
    operatingCompany,
  };
};
