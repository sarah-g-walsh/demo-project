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
  sidebarurl
}): React.ReactElement => {
    return (
      <Box pad="xsmall">
        <Button
          gap="small"
          size="small"
          alignSelf="start"
          icon={icon}
          label={label}
          onClick={() => window.open(sidebarurl, "_self")}
        >
          <Box>
          </Box>
        </Button>
      </Box>
    );
  };
  
  export default SidebarButton;