import {
  Box,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useState } from "react";

const FAQItem = ({ panel, title, content, expanded, handleChange, color }) => (
  <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={color} variant="h5">
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{content}</Typography>
    </AccordionDetails>
  </Accordion>
);

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      panel: "panel1",
      title: "An Important Question",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      panel: "panel2",
      title: "Another Important Question",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      panel: "panel3",
      title: "Your Favorite Question",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      panel: "panel4",
      title: "Some Random Question",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      panel: "panel5",
      title: "The Final Question",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {faqData.map((item) => (
        <FAQItem
          key={item.panel}
          panel={item.panel}
          title={item.title}
          content={item.content}
          expanded={expanded}
          handleChange={handleChange}
          color={colors.greenAccent[500]}
        />
      ))}
    </Box>
  );
}
