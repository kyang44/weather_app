import React from 'react'
import "./descriptions.css";
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";


const Descriptions = ({ data }) => {
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: data.main.temp_min.toFixed(),
      unit: "°F",
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: data.main.temp_max.toFixed(),
      unit: "°F",
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: data.main.feels_like.toFixed(),
      unit: "°F",
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: data.main.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: data.main.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: data.wind.speed.toFixed(),
      unit: "mph",
    },
  ];
  return (
    <div className="section section_descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description_card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Descriptions