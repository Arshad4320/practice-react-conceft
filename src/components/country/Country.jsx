const Country = ({ country }) => {
  console.log(country);

  return (
    <div>
      <div>Name : {country.name.common}</div>
    </div>
  );
};

export default Country;
