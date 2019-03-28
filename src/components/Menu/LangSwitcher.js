import React from "react";
import Item from "./Item";
import { Location } from "@reach/router";

export default function LangSwitcher({ theme }) {
  return (
    <Location>
      {({ location }) => {
        let to = "/404";

        if (location.pathname.startsWith("/fr")) {
          to = location.pathname.replace(/^\/fr/, "/en");
        } else if (location.pathname.startsWith("/en")) {
          to = location.pathname.replace(/^\/en/, "/fr");
        }
        return <Item item={{ to, label: "switch-lang" }} theme={theme} noLocalize />;
      }}
    </Location>
  );
}
