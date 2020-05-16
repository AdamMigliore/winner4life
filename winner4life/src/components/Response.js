import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const Div = styled.div``;

function Response({ response }) {
  return (
    <Div>
      <Typography variant="h5" style={{ color: "#6670cc" }}>
{ response.response ? `${response.response} of ${Math.round(response.presentValue)}$!` : null }
      </Typography>
    </Div>
  );
}

export default Response;
