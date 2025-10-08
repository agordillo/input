//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "STANDARD", //skin can be "STANDARD", "RETRO" or "FUTURISTIC".
  // backgroundImg: "NONE", //background can be "NONE" or a URL.
  //message: "Custom message",

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [5],
    rtc: false,
  },
};
