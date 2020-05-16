import React, { useState } from "react";
import { Box, Typography, Link } from "@material-ui/core";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Form from "./Form";
import Response from "./Response";

function Dashboard() {
  const [response, setResponse] = useState({ response: "", presentValue: 0 });

  const computeResponse = (response) => {
    setResponse({
      response: response.response,
      presentValue: response.presentValue,
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      boxShadow={3}
    >
      <Box style={{ padding: 50 }} boxShadow={3} bgcolor="#efefefef">
        <Typography
          variant="h1"
          style={{ paddingBottom: 10, color: "#CCC166" }}
        >
          Winner for life calculator!
        </Typography>
        <Form computeResponse={computeResponse} />
        <Response response={response} />
      </Box>
      <Typography style={{ margin: 10 }}>Made by Adam Di Re.</Typography>
      <div display="flex">
        <Link href="https://www.linkedin.com/in/adamdire/">
          <AiFillLinkedin color="#000" size={32} style={{ marginRight: 10 }} />
        </Link>
        <Link href="https://github.com/AdamMigliore">
          <AiFillGithub color="#000" size={32} />
        </Link>
      </div>
    </Box>
  );
}

export default Dashboard;
