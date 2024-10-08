import { FC } from 'react';
import './AirCompanies.css';
import { AirCompaniesList } from './AirCompaniesList/AirCompaniesList';

interface AirCompaniesProps {
  airlines: string[];
  minPrices: Record<string, number>;
  selectedAirlines: string[];
  handleAirlineCheckboxChange: (airline: string) => void;
}

export const AirCompanies: FC<AirCompaniesProps> = ({
  airlines,
  minPrices,
  selectedAirlines,
  handleAirlineCheckboxChange,
}) => {
  return (
    <div className="aircompanies">
      <h3 className="aircompanies__title">Авиакомпании</h3>
      <AirCompaniesList
        airlines={airlines}
        minPrices={minPrices}
        selectedAirlines={selectedAirlines}
        handleAirlineCheckboxChange={handleAirlineCheckboxChange}
      />
    </div>
  );
};
