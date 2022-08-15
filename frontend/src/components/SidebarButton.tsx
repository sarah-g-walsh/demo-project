// component for the button in the sidebar menu

import React from "react";
import { Box, Button } from "grommet";

interface SidebarButtonProps {
  icon: React.ReactElement;
  label: string;
  sidebarurl: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  label,
  sidebarurl,
}): React.ReactElement => {
  // args:
  //    icon [React.ReactElement]: grommet icon
  //    label [string]: label for the button
  //    sidebarurl [string]: url that the user is directed to when button is clicked
  return (
    <Box pad="xsmall">
      <Button
        gap="small"
        size="small"
        alignSelf="start"
        icon={icon}
        label={label}
        onClick={(): Window => window.open(sidebarurl, "_self") as Window}
        plain
        hoverIndicator
      >
        <Box></Box>
      </Button>
    </Box>
  );
};

export default SidebarButton;
