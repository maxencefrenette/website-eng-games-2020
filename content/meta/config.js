module.exports = {
  siteTitle: "Jeux de Génie du Québec 2020", // <title>
  shortSiteTitle: "JdG 2020", // <title> ending for posts and pages
  siteDescription:
    "Les premiers Jeux de génie du Québec ont eu lieu à l’Université Laval en 1990.  Depuis maintenant 29 ans, cette compétition interuniversitaire donne l’occasion aux étudiants des facultés et des écoles de génie du Québec de fraterniser dans un esprit de franche camaraderie.",
  siteUrl: "https://jeuxdegenie.qc.ca",
  pathPrefix: process.env.NODE_ENV === "development" ? undefined : "/jdg/2020",
  siteImage: "preview.jpg",
  siteLanguage: "en",

  /* author */
  authorName: "Maxence Frenette",

  /* manifest.json */
  manifestName: "Jeux de Génie du Québec 2020",
  manifestShortName: "JdG 2020", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: "white",
  manifestThemeColor: "#666",
  manifestDisplay: "standalone"
};
