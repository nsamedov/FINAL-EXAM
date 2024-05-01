import { useContext, useState } from "react";
import { WillingContext } from "../context/willing-context";
import { useNavigate } from "react-router-dom";

function FindPage() {
  const { willing, setCity } = useContext(WillingContext);

  const [name, setName] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="name"
      />
      <select
        value={selectedCity}
        onChange={(event) => setSelectedCity(event.target.value)}
      >
        <option value="" disabled={true} selected={true}>
          choose city
        </option>
        {[...new Set(willing.map((element) => element.location))].map(
          (location, i) => (
            <option key={i} value={location}>
              {location}
            </option>
          )
        )}
      </select>
      <span
        onClick={() => {
          if (!(name.length > 2)) {
            return alert("INVALID NAME");
          }
          if (selectedCity.length === 0) {
            return alert("INVALID CITY");
          }
          setCity(selectedCity);
          navigate("/all");
        }}
      >
        find
      </span>
    </div>
  );
}

export default FindPage;
