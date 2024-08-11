'use client';
import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionData = [
    {
      panel: 'panel1',
      title: 'HOW ARE WE DIFFERENT FROM GPT?',
      content: `Our tools are designed specifically for medical professionals. It uses medical jargon, understands medical abbreviations, and is programmed to provide more in-depth explanations for topics.
      It will only use credible medical resources for information. It will also explain medical topics in a format ideal for education and will include (pathophysiology, clinical features, diagnosis, treatment, etc).`
    },
    {
      panel: 'panel2',
      title: 'HOW DOES IT WORK?',
      content: `Our learning tools are programmed especially for doctors and medical students. You can prompt it to provide you with practice questions for the USMLE exams, and it will also provide in-depth explanations. 
      Additionally, you can learn about medications and medical topics. Ultimately, it functions as the ideal medical study aid.`
    },
    {
      panel: 'panel3',
      title: 'IS THIS INFORMATION CREDIBLE?',
      content: `Our tools will only use credible medical sources to provide explanations.
      It will also provide references.`
    },
  ];

  return (
    <>
      <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mt-8 mb-4">
        ✺FREQUENTLY ASKED✺ <br /> QUESTIONS
      </p>
      {accordionData.map(({ panel, title, content }) => (
        <Accordion
          key={panel}
          sx={{ 
            marginTop: '2rem',
            width: '300px', 
            backgroundColor: 'black',
            color: 'white', 
            margin: '0 auto', 
            textAlign: 'center',
            borderTop: '1px solid white',
            borderBottom: '1px solid white',
            '&:hover': {
              backgroundColor: 'grey',
            },
          }}
          expanded={expanded === panel}
          onChange={(event, isExpanded) => handleChange(isExpanded, panel)}
        >
          <AccordionSummary 
            sx={{ width: '300px' }}
            aria-controls={`${panel}-content`}
            id={`${panel}-header`}
            expandIcon={<ExpandMoreIcon style={{ color: 'white', justifyContent: 'end' }} />}
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails 
            sx={{ width: '320px', textAlign: 'left' }}
          >
            <Typography>
              {content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default MuiAccordion;
