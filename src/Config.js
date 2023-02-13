

import about1 from "./images/maya1.jpeg";
import about2 from "./images/maya2.png";
import about3 from "./images/maya2.png";

import {RiMagicFill,RiShieldCheckFill,RiQrCodeLine} from "react-icons/ri";


import appicon from "./logo.png";
import app from "./App.json";

app.icon=appicon;


app.about[0].image=about1;
app.about[1].image=about2;
app.about[2].image=about3;


app.about[0].icon=<RiQrCodeLine size={90}/>;
app.about[1].icon=<RiMagicFill size={90}/>;
app.about[2].icon=<RiShieldCheckFill size={90}/>;

export default app;
