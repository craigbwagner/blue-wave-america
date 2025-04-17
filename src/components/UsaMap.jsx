import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const highlightedStates = {
  Virginia: "#0285c7"
}

const allStates = [
  {name: "Virginia",},
]

export default function UsaMap() {

  return (
    <>
      <ComposableMap projection="geoAlbersUsa" className="max-w-4xl mx-auto">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.name;
              let stateUrl = "#";
              const fillColor = highlightedStates[stateName] || "#D6D6DA";

              if (stateName in highlightedStates) {
                stateUrl = `/states/#${stateName}`;
              }

              return (
                <a href={stateUrl}
                  id={stateName}>
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
                        fill: fillColor,
                        outline: "none",
                      },
                      pressed: {
                        fill: fillColor,
                        outline: "none",
                      },
                    }}
                  />
                </a>
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {allStates.map((state) => (
        <Tooltip
          anchorSelect={`#${state.name}`}
          id={state.name}
          key={state.name}
          place="top"
          className="bg-blue-500 text-white p-2 rounded"
        >
          <div className="flex flex-col text-center">
            <span>{state.name}</span>
          </div>
        </Tooltip>
      ))}
    </>
  );
}
