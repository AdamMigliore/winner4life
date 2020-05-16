import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import styled from "styled-components";
import AttachMoney from "@material-ui/icons/AttachMoney";

import { computePeriod, computeSPV } from "../api/npv.js";

const InputDiv = styled.div`
  padding-right: 10px;
`;

function Form({ computeResponse }) {
  const [inputs, setInputs] = useState({
    redeemableAmount: 0,
    periodHeld: 0,
    annuity: 0,
    inflationRate: 0,
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const periodsForEquivalency = computePeriod(
      inputs.redeemableAmount,
      inputs.annuity,
      inputs.inflationRate
    );

    let response = {
      response: `You should take the present redeemable amount`,
      presentValue: inputs.redeemableAmount,
    };

    if (periodsForEquivalency <= inputs.periodHeld) {
      const presentValue = computeSPV(
        inputs.annuity,
        inputs.inflationRate,
        inputs.periodHeld
      );

      response = {
        response: `You should take the annuity and have a present value`,
        presentValue: presentValue,
      };

    }
    computeResponse(response);

    setInputs({
      redeemableAmount: 0,
      periodHeld: 0,
      annuity: 0,
      inflationRate: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex">
        <InputDiv>
          <TextField
            required
            id="redeemableAmount"
            label="Redeemable Amount"
            variant="outlined"
            onChange={handleChange}
            value={inputs.redeemableAmount}
          />
        </InputDiv>

        <InputDiv>
          <TextField
            required
            id="annuity"
            label="Annuity"
            variant="outlined"
            onChange={handleChange}
            value={inputs.annuity}
          />
        </InputDiv>

        <InputDiv>
          <TextField
            required
            id="periodHeld"
            label="Period Held"
            variant="outlined"
            onChange={handleChange}
            value={inputs.periodHeld}
          />
        </InputDiv>

        <InputDiv>
          <TextField
            id="inflationRate"
            label="Inflation Rate"
            variant="outlined"
            onChange={handleChange}
            value={inputs.inflationRate}
          />
        </InputDiv>
      </Box>
      <Button
        variant="contained"
        style={{
          color: "#fff",
          backgroundColor: "#70cc66",
          margin: 15,
        }}
        type="submit"
      >
        <AttachMoney />
        <AttachMoney />
        <AttachMoney />
      </Button>
    </form>
  );
}

export default Form;
