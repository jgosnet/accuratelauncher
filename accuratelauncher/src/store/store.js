import {createStore} from 'vuex'

import configuration from "@/store/modules/configuration";
import videoDetails from "@/store/modules/videoDetails";
import audioDetails from "@/store/modules/audioDetails";
import captionDetails from "@/store/modules/captionDetails";
import tbmdDetails from "@/store/modules/tbmdDetails";
import spritemapDetails from "@/store/modules/spritemapDetails";
import generalDetails from "@/store/modules/generalDetails";
import metadata from "@/store/modules/metadata";
import snackbar from "@/store/modules/snackbar";
import woPreset from "@/store/modules/woPreset";

export const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    snackbar,
    configuration,
    videoDetails,
    audioDetails,
    captionDetails,
    tbmdDetails,
    spritemapDetails,
    generalDetails,
    metadata,
    woPreset,
  }
})
