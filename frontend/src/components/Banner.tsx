// banner component for the application
// contains a title and a link to github

import React from "react";
import { Header, Anchor, Heading, Box, Button } from "grommet";
import { Github, Menu } from "grommet-icons";


interface BannerProps {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const Banner: React.FC<BannerProps> = ({setShowSidebar, showSidebar}): React.ReactElement  => {
  return (
    <Header
      elevation="small"
      background="brand"
      pad="medium"
      height="xsmall"
      animation="fadeIn"
      direction="row"
    >
      <Box direction="row" align="center">
        <Heading level="2" color="text-strong">
        </Heading>
        <Button onClick={() => setShowSidebar(!showSidebar)} icon={<Menu color="white"/>}></Button>
      </Box>
      <Anchor
        label="GitHub"
        href="https://github.com/sarah-g-walsh/noughts-and-crosses"
        color="text-strong"
        icon={<Github />}
      />
    </Header>
  );
};

export default Banner;
