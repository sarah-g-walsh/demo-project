import React from "react";
import { Sidebar, Box, Spinner } from "grommet";
import { Home, CaretNext } from "grommet-icons";

import SidebarButton from "./SidebarButton";
import { DUCK_URL } from "../constants/urls";

const HomepageSidebar: React.FC = (): React.ReactElement => {
  const [items, setItems] = React.useState([{RecordId: "", "Name": "", "URL": ""}]);
  const [load, setLoad] = React.useState(true);

  const PROJECT_ENDPOINT = "https://qis6el6yah.execute-api.eu-west-1.amazonaws.com/"

  React.useEffect(() => {
    let request = new XMLHttpRequest();
    request.onerror = function () {
      setItems(
        [
          {RecordId: "", URL: "", Name: "Error fetching items"}
        ]
      );
      setLoad(false);
    };
    request.ontimeout = function () {
      setItems(
        [
          {RecordId: "", URL: "", Name: "Error fetching items"}
        ]
      );
      setLoad(false);
    };
    request.onload = function () {
      console.log(request.response.items)
      setItems(request.response.items);
      setLoad(false);
    };
    request.timeout = 10000;
    request.responseType = "json";
    // request.open("GET", process.env.PROJECT_ENDPOINT);
    request.open("GET", PROJECT_ENDPOINT);
    request.send();
  }, []);
  

  return (
    <Box direction="row" fill="vertical" >
      <Sidebar
        background="darkbackground"
        overflow="auto"
        gap="large"
        direction="row"
        pad={{left: "medium", right: "xlarge", vertical: "medium"}}
        elevation="small"
        round="xxsmall"
      >
        <SidebarButton
          icon={ <Home color="darkbrand" /> }
          label="Home"
          sidebarurl={DUCK_URL}
        />
        {load ? (
          <Spinner />
        ) : (
          items.map((item) => {return(
            <SidebarButton
              icon={ <CaretNext color="darkbrand" /> }
              label={item.Name}
              sidebarurl={item.URL}
            />
          )})
        )}
        {/* 
          <SidebarButton
            icon={ <Gamepad color="darkbrand"/> }
            label="Noughts and Crosses"
            sidebarurl={DUCK_URL}
          />
          <SidebarButton
            icon={ <CheckboxSelected color="darkbrand"/> }
            label="To-Do List"
            sidebarurl={DUCK_URL}
          />
          <SidebarButton
            icon={ <Calculator color="darkbrand"/> }
            label="Calculator"
            sidebarurl={DUCK_URL}
          /> */}
      </Sidebar>
    </Box>
  );
};

export default HomepageSidebar;