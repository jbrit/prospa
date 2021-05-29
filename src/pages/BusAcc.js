import { Typography } from "@material-ui/core";
import { useState } from "react";
import SelectablePaper from "../components/SelectablePaper";

const cards = [
  {
    header: "I have a registered business / charity with CAC",
    perks: [
      "As a registered business you’ll get:",
      "Account in your business name",
      "Send to and receive transfers from all Nigerian banks",
      "Tools for business management",
    ],
  },
  {
    header: "My business is not yet registered, I would like to register",
    perks: [
      "Everything you need to start your business:",
      "Registered business name with the CAC",
      "Tax identification number",
      "Your account will be automatically opened on completion",
    ],
  },
  {
    header: "I’m a freelancer I do business in my personal name",
  },
];

const BusAcc = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Typography variant="h5">Open a new business account</Typography>
      <Typography
        style={{ marginBottom: "2rem", color: "#8397AB" }}
        component="p"
      >
        A short description comes here
      </Typography>

      {cards.map(({ header, perks }, idx) => (
        <SelectablePaper
          key={idx}
          header={header}
          perks={perks}
          selected={selected === idx}
          onClick={() => {
            setSelected(idx);
          }}
        />
      ))}
    </>
  );
};

export default BusAcc;
