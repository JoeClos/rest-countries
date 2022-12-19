const SelectedCountry = ({ selectedCountry }) => {
  return (
    <div>
      {Object.values(selectedCountry || []).map((c, index) => (
        <div key={index}>
          <img src={c.flags[1]} alt="flag" />
          <h1>{c.name.common}</h1>
          <h4>{c.capital}</h4>
          <p>
            The country belongs to <span className="blue">{c.region}</span> region and <span className="blue">{c.subregion}</span>{" "}
            sub-region. Located at the <span className="blue">{c.latlng[0]}</span> latitude and <span className="blue">{c.latlng[1]}</span> longitude, this country has population
            of <span className="blue">{c.population}</span>.
          </p>
        </div>
      ))}
    </div>
  );
};

export default SelectedCountry;
