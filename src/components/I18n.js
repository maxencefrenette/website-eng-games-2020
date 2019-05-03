import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";

// Locale data
import enData from "react-intl/locale-data/en";
import frData from "react-intl/locale-data/fr";

// Messages
import fr from "../i18n/fr.yaml";
import en from "../i18n/en.yaml";

const messages = { en, fr };

addLocaleData([...enData, ...frData]);

const I18n = ({ locale, children }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    <React.Fragment>{children}</React.Fragment>
  </IntlProvider>
);

export default I18n;
