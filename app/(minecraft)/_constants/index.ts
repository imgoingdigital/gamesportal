import { version } from "os";

const servers = [
  {
    name: "Live Server",
    address: "mc.callejon.online",
    version: "1.19.4",
    mods: [
      {
        name: "minecraft",
        link: "sourceforge"
      }
    ],
    isHidden: true

  },
  {
    name: "Test Server",
    address: "mc2.callejon.online",
    version: "1.21.1",
    description: "Vanilla Server",
    mods: [
      {
        name: "minecraft",
        link: "sourceforge"
      }
    ],

  },

]

export {servers}