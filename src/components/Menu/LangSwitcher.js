import React from "react";
import Item from "./Item";

export default function LangSwitcher({ theme }) {
  let to = "/404";

  if (window.location.pathname.startsWith("/fr")) {
    to = window.location.pathname.replace(/^\/fr/, "/en");
  } else if (window.location.pathname.startsWith("/en")) {
    to = window.location.pathname.replace(/^\/en/, "/fr");
  }

  return <Item item={{to, label: "switch-lang"}} theme={theme} noLocalize />;
}
