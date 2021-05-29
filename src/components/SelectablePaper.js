import { Paper, Radio } from "@material-ui/core";

const SelectablePaper = ({ selected, header, perks, ...props }) => {
  return (
    <Paper
      style={{
        marginBottom: "1.5rem",
        padding: "18px",
        border: "transparent 1px solid",
        borderColor: selected ? "#FA4A84" : "transparent",
      }}
      {...props}
    >
      <div style={{ display: "flex" }}>
        <Radio checked={selected} /> {header}
      </div>
      <ul style={{ paddingLeft: "42px" }}>
        {selected &&
          perks &&
          perks.map((perk, idx) => (
            <li
              key={idx}
              style={{ fontSize: "14px", marginBottom: "6px", color: "gray" }}
            >
              {perk}
            </li>
          ))}
      </ul>
    </Paper>
  );
};

export default SelectablePaper;
