// banner component for the application
// contains a menu button and a link to github

import React from "react";
import { Anchor, Header, Box, Button } from "grommet";
import { Github, Menu } from "grommet-icons";
import { GITHUB_URL } from "../constants/urls";

interface BannerProps {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const Banner: React.FC<BannerProps> = ({
  setShowSidebar,
  showSidebar,
}): React.ReactElement => {
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
        <Button
          onClick={(): void => setShowSidebar(!showSidebar)}
          icon={<Menu color="white" />}
        />
      </Box>
      <Anchor
        label="GitHub"
        href={GITHUB_URL}
        color="text-strong"
        icon={<Github />}
      />
    </Header>
  );
};

export default Banner;
