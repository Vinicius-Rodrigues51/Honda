import ReactGA from "react-ga";

const clickTel = () => {
  ReactGA.event({
    category: "0800",
    action: "Click",
    label: "0800 Click",
  });

  console.log("0800 event");
};

const clickWpp = () => {
  ReactGA.event({
    category: "Wpp",
    action: "Click",
    label: "Wpp Click",
  });

  console.log("Wpp event");
};

const assembleiaClick = () => {
  ReactGA.event({
    category: "Assembleia",
    action: "Click",
    label: "Assembleia Click",
  });

  console.log("Assembleia event");
};

export { clickTel, clickWpp, assembleiaClick };
