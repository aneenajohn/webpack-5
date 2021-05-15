import App from "./App";
import Logo from "./logo.svg";

const root = document.getElementById("root");
root.innerHTML = `
<h1> learning web tooling today </h1>
<img src="${Logo}" alt="build icon" />
<h1> learning web tooling today </h1>
${App({ name: "Aneena" })}
`;