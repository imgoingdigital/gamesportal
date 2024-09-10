import { version } from "os";

const servers = [
  {
    name: "Forge SMP",
    address: "mc.callejon.online",
    version: "1.19.4",
    mods: [
      {
        name: "minecraft",
        link: "sourceforge"
      }
    ],
    isHidden: true,
    links:[
      {
        name: "Modpack: Libs",
        ref: "/downloads/mc/Libs.zip"
      },
      {
        name: "Modpack: Mobs",
        ref: "/downloads/mc/Mobs.zip"
      },
      {
        name: "Modpack: World",
        ref: "/downloads/mc/World.zip"
      }
    ]

  },
  {
    name: "Forge Test",
    address: "mc2.callejon.online",
    version: "1.21.1",
    description: "Vanilla-ish Server",
    mods: [
      {
        name: "minecraft",
        link: "sourceforge"
      }
    ],

  },

]

export {servers}