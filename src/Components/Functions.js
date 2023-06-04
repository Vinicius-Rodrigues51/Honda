import ReactGA from "react-ga";

// const clickTel = () => {
//   ReactGA.event({
//     category: "Botão",
//     action: "Clique",
//     label: "0800 Click",
//   });

//   console.log("0800 event");
// };

// const clickWpp = () => {
//   ReactGA.event({
//     category: "Botão",
//     action: "Clique",
//     label: "Wpp Click",
//   });

//   console.log("Wpp event");
// };

// const assembleiaClick = () => {
//   ReactGA.event({
//     category: "Botão",
//     action: "Clique",
//     label: "Assembleia Click",
//   });

//   console.log("Assembleia event");
// };

const handleClick = (buttonLabel) => {
  ReactGA.event({
    category: "Botão",
    action: "Clique",
    label: buttonLabel,
  });

  console.log("working");
};

// export { clickTel, clickWpp, assembleiaClick };
export { handleClick };
