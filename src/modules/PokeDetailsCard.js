import React from "react";

const PokeDetailsCard = ({ details }) => {
  return (
    <div>
      <div>{details.name}</div>
      <div>
        {Object.entries(details.sprites).map(([key, value]) => {
          if (value && typeof value === "string") {
            return <img key={value + key} src={value} alt={key} />;
          }
        })}
      </div>
      <div>
        {details.stats.map((detail, index) => (
          <h6 key={detail.stat.name + index}>
            {detail.stat.name}: {detail.base_stat}
          </h6>
        ))}
      </div>
      <div>
        {details.types.map((detail, index) => (
          <h6 key={detail.type.name + index}>{detail.type.name}</h6>
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default PokeDetailsCard;
