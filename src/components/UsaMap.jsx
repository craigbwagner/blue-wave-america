import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const highlightedStates = {
  Virginia: "#0285c7"
}

export default function UsaMap() {
  return (
    <ComposableMap projection="geoAlbersUsa" className="max-w-4xl mx-auto">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const stateName = geo.properties.name;
            const fillColor = highlightedStates[stateName] || "#D6D6DA";
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => alert(`Clicked on ${stateName}`)}
                style={{
                  default: {
                    fill: fillColor,
                    outline: "none",
                  },
                  hover: {
                    fill: "#87878a",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#87878a",
                    outline: "none",
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
