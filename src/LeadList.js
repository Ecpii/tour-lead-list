import React from "react";
import Lead from "./Lead";
import { Collapse, List } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

export default function LeadList({ leads, removeLead }) {
  return (
    <List>
      <TransitionGroup>
        {leads.map(lead => (
          <Collapse key={lead.id}>
            <Lead lead={lead} removeLead={removeLead}/>
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  );
}
