import React from "react";
import Item from "./Item";
import { Location } from "@reach/router";
import config from "../../../content/meta/config";

export default function LangSwitcher({ theme, fixed }) {
  return (
    <Location>
      {({ location }) => {
        let to = "/404";

        const path = config.pathPrefix
          ? location.pathname.replace(config.pathPrefix, "")
          : location.pathname;

        if (path.startsWith("/en")) {
          to = path.replace(/^\/en/, "/");
        } else {
          to = `/en/${path}`;
        }

        return <Item item={{ to, label: "switch-lang" }} theme={theme} fixed={fixed} noLocalize />;
      }}
    </Location>
  );
}
