import { FC } from 'react';
import './AirCompaniesList.css';

interface AirCompaniesListProps {
  airlines: string[];
  minPrices: Record<string, number>;
  selectedAirlines: string[];
  handleAirlineCheckboxChange: (airline: string) => void;
}

export const AirCompaniesList: FC<AirCompaniesListProps> = ({
  airlines,
  minPrices,
  selectedAirlines,
  handleAirlineCheckboxChange,
}) => {
  return (
    <ul className="aircompanies__list">
      {airlines.map(airline => (
        <li key={airline}>
          <label className="aircompanies__label">
            <input
              type="checkbox"
              checked={selectedAirlines.includes(airline)}
              onChange={() => handleAirlineCheckboxChange(airline)}
            />
            <span className="aircompanies__airline">{`- ${airline}`}</span>
            <span>{` от ${minPrices[airline]} руб.`}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
