import { FC } from 'react';
import { AirCompanies } from '../AirCompanies/AirCompanies';
import { Filtration } from '../Filtration/Filtration';
import { PriceFilter } from '../Price/Price';
import { Sorting } from '../Sorting/Sorting';
import { OptionsWrapperProps } from './OptionsWrapper.types';
import './OptionsWrapper.css';

export const OptionsWrapper: FC<OptionsWrapperProps> = ({
  flights,
  handleSorting,
  handleMinPriceChange,
  handleMaxPriceChange,
  handleLayoverChange,
  handleDirectChange,
  showLayovers,
  showDirectFlights,
  airlines,
  selectedAirlines,
  handleAirlineCheckboxChange,
  minPrices,
}) => {
  return (
    <div className="options-wrapper">
      <Sorting handleSorting={handleSorting} />

      <Filtration
        handleDirectChange={handleDirectChange}
        handleLayoversChange={handleLayoverChange}
        showLayovers={showLayovers}
        showDirectFlights={showDirectFlights}
      />

      <PriceFilter
        handleMinPriceChange={handleMinPriceChange}
        handleMaxPriceChange={handleMaxPriceChange}
      />
      <AirCompanies
        airlines={airlines}
        selectedAirlines={selectedAirlines}
        handleAirlineCheckboxChange={handleAirlineCheckboxChange}
        minPrices={minPrices}
      />
    </div>
  );
};
