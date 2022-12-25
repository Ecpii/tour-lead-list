import React, { useState, useEffect } from "react";
import LeadList from "./LeadList";
import AddLead from "./AddLead"

import {Container, Typography} from '@mui/material'

import "@fontsource/poppins";
import { createTheme, ThemeProvider } from "@mui/material";

const LOCAL_STORAGE_KEY = "leadListApp.leads";

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    h2: {
      color: "#333",
      fontSize: "35px",
      fontWeight: 600
    },
    h3: {
      fontSize: "33px",
      fontWeight: 600,
    }
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          margin: '0 10px 0 0'
        }
      }
    }
  }
});

function App() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const storedLeads = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedLeads && storedLeads.length) setLeads(storedLeads);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(leads));
  }, [leads]);


  function removeLead(id) {
    setLeads(leads.filter(lead => lead.id !== id));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h2" sx={{
          textAlign: 'center',
          marginTop: theme.spacing(4)
        }}>
          Leads
        </Typography>
        <LeadList leads={leads} removeLead={removeLead} />

        <AddLead setLeads={setLeads}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
