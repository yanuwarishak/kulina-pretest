import React, { useState } from "react";

import { TabContainer, TabButton } from "./lunchdinner.styles";

const types = ["Lunch", "Dinner"];
const LunchDinnerContainer = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <TabContainer>
      {types.map((type) => (
        <TabButton
          key={type}
          type={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default LunchDinnerContainer;
