// import "./tab.js"
import { tab } from "./tab.js";
import { vue } from "./vue.js";
tab();
vue();
import "./style/index.css";
import "./style/index.less";
// 引入图片-使用
import gifSrc from "./assets/1.gif";
import pngSrc from "./assets/logo_small.png";
// 引入字体图标
import "./assets/fonts/iconfont.css";

const gif = document.createElement("img");
const png = document.createElement("img");
gif.src = gifSrc;
png.src = pngSrc;
document.body.appendChild(gif);
document.body.appendChild(png);

const fn = () => {
  console.log("你好");
};
console.log(fn);

import App from "./app.vue";
