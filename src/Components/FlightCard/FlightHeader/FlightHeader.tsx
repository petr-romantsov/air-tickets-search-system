import { FC } from 'react';
import './FlightHeader.css';

interface FlightHeaderProps {
  airCompany: string;
  price: number;
}

export const FlightHeader: FC<FlightHeaderProps> = ({ airCompany, price }) => {
  return (
    <div className="header">
      <h2 className="aircompany">{airCompany}</h2>
      <div className="price-wrapper">
        <span className="price">{price} &#8381;</span>
        <p className="price-text">Стоимость для одного взрослого пассажира</p>
      </div>
    </div>
  );
};
