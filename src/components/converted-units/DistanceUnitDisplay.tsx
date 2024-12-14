import React, { useState } from "react";
import { IconButton } from "@mui/material";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CloseIcon from "@mui/icons-material/Close";
import {
  convertDistanceUnits,
  getDistanceAdornment,
  stringToNbr,
  truncateDecimals,
} from "../../utils";
import { DistanceUnit } from "../../types";

type DistanceUnitDisplayProps = {
  initialValue: string;
};

const styles = {
  span: {
    marginRight: "1rem",
  },
};

const DistanceUnitDisplay: React.FC<DistanceUnitDisplayProps> = ({
  initialValue,
}) => {
  const [isShown, setIsShown] = useState(false);

  const convertedValues = Object.keys(DistanceUnit).map((key) => (
    <span key={key} style={styles.span}>
      {truncateDecimals(
        convertDistanceUnits(
          stringToNbr(initialValue),
          DistanceUnit.FEET,
          key as DistanceUnit,
        ) ?? 0,
      )}
      {getDistanceAdornment(key as DistanceUnit)}
    </span>
  ));

  return (
    <React.Fragment>
      {isShown ? convertedValues : initialValue}
      <IconButton
        size="small"
        aria-label="Convert"
        color="secondary"
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? <CloseIcon /> : <SquareFootIcon />}
      </IconButton>
    </React.Fragment>
  );
};

export default DistanceUnitDisplay;
