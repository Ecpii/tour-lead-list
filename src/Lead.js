import React from "react";
import {
  IconButton,
  ListItem,
  ListItemText,
  useTheme,
  Typography,
  Box
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import ClickableChip from "./ClickableChip";

export default function Lead({ lead, removeLead }) {
  const theme = useTheme();

  return (
    <ListItem>
      <IconButton
        onClick={() => removeLead(lead.id)}
        sx={{
          margin: theme.spacing(2),
        }}
      >
        <Delete />
      </IconButton>
      <ListItemText
        primary={
          <Typography variant="h3">{lead.name}</Typography>
        }
        secondary={
          <Box sx={{
            marginTop: theme.spacing(1),
            display: "flex"
          }}>
            <ClickableChip type="email" lead={lead} />
            <ClickableChip type="phone" lead={lead} />
          </Box>
        }
      />
    </ListItem>
  );
}
