import React, { useRef } from "react";
import {
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ExpandMore } from "@mui/icons-material";

export default function AddLead({ setLeads }) {
  const leadNameRef = useRef();
  const leadEmailRef = useRef();
  const leadPhoneRef = useRef();

  const theme = useTheme()

  function handleAddLead() {
    const name = leadNameRef.current.value;
    const email = leadEmailRef.current.value;
    const phone = leadPhoneRef.current.value;

    setLeads(prevLeads => [
      ...prevLeads,
      { id: uuidv4(), name: name, email: email, phone: phone },
    ]);
    leadNameRef.current.value = "";
    leadEmailRef.current.value = "";
    leadPhoneRef.current.value = "";
  }

  return (
    <Accordion>
      <AccordionSummary
      expandIcon={<ExpandMore />}>
        <Typography>Add Lead</Typography>
      </AccordionSummary>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(2),
          margin: theme.spacing(2),
          marginTop: 0,
        }}
      >
        <TextField
          variant="outlined"
          label="Name"
          inputRef={leadNameRef}
          type="text"
        />
        
        <Box sx={{
            display: 'flex',
            gap: theme.spacing(2),
            justifyContent: 'space-between'
        }}>
            <TextField
                sx={{
                    flexGrow: 1,
                }}
              variant="outlined"
              label="Email"
              inputRef={leadEmailRef}
            />
            <TextField
                sx={{
                    flexGrow: 1,
                }}
              variant="outlined"
              label="Phone"
              inputRef={leadPhoneRef}
            />
        </Box>
        <Button onClick={handleAddLead}>Add Lead</Button>
      </Box>
    </Accordion>
  );
}
