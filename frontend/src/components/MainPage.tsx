// component containing a grid of project cards that link to projects

import React from "react";
import { Box, Grid } from "grommet";
import { GRID_AREAS, GRID_COLUMNS, GRID_ROWS } from "./MainPage.styles";

import ProjectCard from "./ProjectCard";

import { DUCK_PIC, DUCK_URL } from "../constants/urls";

const MainPage: React.FC = (): React.ReactElement => {
  return (
    <Box
      responsive={true}
      pad="medium"
      justify="center"
      gap="xxsmall"
      alignContent="center"
      align="center"
      alignSelf="center"
    >
      <Grid
        responsive={true}
        rows={GRID_ROWS}
        columns={GRID_COLUMNS}
        areas={GRID_AREAS}
        gap="small"
      >
        <Box
          gridArea="projectone"
          gap="small"
          pad="xsmall"
          direction="row"
          alignContent="center"
          justify="center"
        >
          <ProjectCard
            image={DUCK_PIC}
            label="Noughts and Crosses Project"
            url={DUCK_URL}
          />
        </Box>
        <Box
          gridArea="projecttwo"
          gap="small"
          pad="xsmall"
          direction="row"
          alignContent="center"
          justify="center"
        >
          <ProjectCard
            image={DUCK_PIC}
            label="To-Do List Project"
            url={DUCK_URL}
          />
        </Box>
        <Box
          gridArea="projectthree"
          gap="small"
          pad="xsmall"
          direction="row"
          alignContent="center"
          justify="center"
        >
          <ProjectCard
            image={DUCK_PIC}
            label="Calculator Project"
            url={DUCK_URL}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default MainPage;
