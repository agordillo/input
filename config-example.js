//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "STANDARD", //skin can be "STANDARD", "RETRO" or "FUTURISTIC".
  // backgroundImg: "NONE", //background can be "NONE" or a URL.
  message: "introduce el valor correcto",
  errorMessage: "el valor es incorrecto",
  placeholder: "Custom placeholder...",
  autoWidth: false,
  width: 800,
  fontSize: 20,
  fontColor: "#000",

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [8],
    rtc: false,
  },
};
