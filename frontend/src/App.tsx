import React, { useState } from "react";
import { Grommet, Stack } from "grommet";
import Theme from "./theme";

import Banner from "./components/Banner";
import HomepageSidebar from "./components/HomepageSidebar";
import MainPage from "./components/MainPage";

function App(): React.ReactElement {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="App">
      <Grommet theme={Theme} full={true}>
        <Banner showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Stack anchor="top-left">
          <MainPage />
          {showSidebar && <HomepageSidebar />}
        </Stack>
      </Grommet>
    </div>
  );
}

export default App;
