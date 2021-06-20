import "./Grid.css";

function Grid({ data: { header = [], values = [], actions = [] } }) {
  return (
    <table className="gridTable">
      <thead>
        <tr>
          {header.map((colName) => (
            <th key={colName}>{colName}</th>
          ))}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => (
              <td key={colName}>{row[colName]}</td>
            ))}
            {!!actions.length && (
              <td className="gridActions">
                {actions.map(({ label, name, action }) => {
                  if (
                    name !== "details" &&
                    row[name] &&
                    row[name].length !== 0
                  ) {
                    return (
                      <button key={label} onClick={() => action(row)}>
                        {label}
                      </button>
                    );
                  } else if (name === "details") {
                    return (
                      <button key={label} onClick={() => action(row)}>
                        {label}
                      </button>
                    );
                  } else {
                    return;
                  }
                })}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
