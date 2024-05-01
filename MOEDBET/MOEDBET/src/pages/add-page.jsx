import { useContext, useState } from "react";
import { WillingContext } from "../context/willing-context";
import { useNavigate } from "react-router-dom";

function AddPage() {
    const { willing, setWilling } = useContext(WillingContext);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="title"
      />
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="location"
      />

      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="description"
      />
      <span
        onClick={() => {
          if (!(title.length <= 20 && title.length > 0)) {
            return alert("INVALID TITLE")
          }
          if (location.split("").some((tav) => {return !(tav >= 'a' && tav <= 'z')})) {
            return alert("INVALID LOCATION")
          }
          if (!(description.length <= 200 && description.length > 0)) {
            return alert("INVALID TITLE")
          }
          setWilling([...willing, {title, location, description}])
          navigate("/")
        }}
      >
        add
      </span>
    </div>
  );
}

export default AddPage;
