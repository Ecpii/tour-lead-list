import React from "react";
import Lead from "./Lead";
import { List } from "@mui/material";

export default function LeadList({ leads, removeLead }) {
  return (
    <List>
      {leads.map(lead => (
        <Lead lead={lead} removeLead={removeLead} key={lead.id} />
      ))}
    </List>
  );
}
