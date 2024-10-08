import { ComponentProps } from 'react';
import { Flight } from '../../FlightCard/FlightCard';

export type InputEvent = ComponentProps<'input'>['onChange'];

export interface OptionsWrapperProps {
  flights: Flight[];
  handleSorting: InputEvent;
  handleMinPriceChange: InputEvent;
  handleMaxPriceChange: InputEvent;
  handleLayoverChange: InputEvent;
  handleDirectChange: InputEvent;
  showLayovers: boolean;
  showDirectFlights: boolean;
  airlines: string[];
  selectedAirlines: string[];
  handleAirlineCheckboxChange: (airline: string) => void;
  minPrices: Record<string, number>;
}
