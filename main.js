import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGaming";

const $root =  document.querySelector("#root");
const $htmlCardGaming = CardGame ()

$root.insertAdjacentHTML("beforeend", $htmlCardGaming);