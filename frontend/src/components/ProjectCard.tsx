import React from "react";
import { Box, Card, CardBody, CardFooter, Text, Image } from "grommet";


interface ProjectCardProps {
  image: string;
  label: string;
  url: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({image, label, url}): React.ReactElement => {
  return (
    <Box pad="medium">
      <Card
        onClick={() => window.open(url, "_self")}
        height="medium"
        width="medium"
        background="white"
        elevation="medium"
        hoverIndicator={{ elevation: "large" }}
      >
        <CardBody pad="medium">
          <Image
            fill={true}
            src={image}
          />
        </CardBody>
        <CardFooter
          pad={{ horizontal: "medium", vertical: "small" }}
          background="lightbackground"
        >
            <Text size="medium">
                {label}
            </Text>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ProjectCard;
