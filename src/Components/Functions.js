import ReactGA from "react-ga";

const clickEvent = () => {
  ReactGA.event({
    category: "0800",
    action: "Click",
    label: "0800 Click",
  });

  console.log("0800 event");
};

export { clickEvent };
