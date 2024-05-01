import { useContext, useState } from "react";
import { WillingContext } from "../context/willing-context";
import { useNavigate } from "react-router-dom";

function AllPage() {
  const { willing, city, setWilling } = useContext(WillingContext);
  const navigate = useNavigate();
  const [selectedByIndex, setSelectedByIndex] = useState({});

  return (
    <div>
      {willing.map((element, i) =>
        element.location === city ? (
          <Willing
            onClick={() =>
              setSelectedByIndex({
                ...selectedByIndex,
                [i]: !selectedByIndex[i],
              })
            }
            key={i}
            {...element}
            selected={selectedByIndex[i] === true}
          />
        ) : null
      )}
      <span
        onClick={() => {
          setWilling(willing.filter((element, i) => !(selectedByIndex[i] === true)));
          navigate("/");
        }}
      >
        אישור
      </span>
    </div>
  );
}

function Willing(params) {
  return (
    <div
      onClick={params.onClick}
      style={{ backgroundColor: params.selected ? "#00ff00" : "transparent" }}
    >
      <span>{params.title}</span>
      {params.selected ? <span>{params.description}</span> : null}
    </div>
  );

}
export default AllPage;
