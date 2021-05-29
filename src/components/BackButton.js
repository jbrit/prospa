import { Button } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const BackButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      style={{ padding: "1px", minWidth: 0 }}
    >
      <ChevronLeftIcon />
    </Button>
  );
};

export default BackButton;
