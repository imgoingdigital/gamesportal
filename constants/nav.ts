
const navLinksMu = [
  {
    id: "home",
    title: "Home",
    ref: "/",
    image: "",
    isHidden: "false"

  },
  {
    id: "shop",
    title: "Shop",
    ref: "/shop"
  },
  {
    id: "info",
    title: "Info",
    ref: "/info"
  },
  {
    id: "games",
    title: "Games",
    ref: "/downloads",
    sub: 
    [
      {
        id: "mu",
        title: "MuOnline",
        ref:"/mu",
        description:"You are the hero destined to end the tyranny of Kundun"

      },
      {
        id: "minecraft",
        title: "Minecraft",
        ref: "/mc",
        description:"A Block Building Game"
      },


    ]
  },
  {
    id: "downloads",
    title: "Downloads",
    ref: "./downloads",
    isHidden: true,
    sub: 
    [
      {
        id: "dlmu",
        title: "MuOnline",
        ref:"#"

      },
      {
        id: "dlminecraft",
        title: "Minecraft",
        ref: "#", 
        isHidden: false
      },


    ]
  },

  {
    id: "donation",
    title: "Get Credits",
    ref: "/shop"
  },
  {
    id: "rankings",
    title: "Rankings",
    ref: "/mu/rankings",
    isHidden: "true"
  },
  {
    id: "admincp",
    title: "Admin",
    ref: "/admin",
    isHidden: "true"
  },

]

export {navLinksMu}