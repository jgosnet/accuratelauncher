export default {
  updateProviderData(state, value){
    state.providerData = value
  },
  addOutputStatus(state){
    state.outputStatuses[state.statusIndex] = {
      key: "New",
      color: "var(--AP-SUCCESS)",
      index: state.statusIndex
    };
    state.statusIndex += 1;
  },
  deleteOutputStatus(state, item){
    console.log(`trying to delete: ${item.index}`)
    console.log(item)
    delete state.outputStatuses[item.index];
    for (const index in state.outputStatuses){
      console.log(state.outputStatuses[index])
    }
  },
  addMetadataField(state){
    state.metadataFields[state.metadataIndex] = {
      key: 'new',
      index: state.metadataIndex,
      source: 'metadata'
    };
    state.metadataIndex += 1;
  },
  deleteMetadataField(state, item){
    console.log(`trying to delete: ${item.index}`)
    console.log(item)
    delete state.metadataFields[item.index];
    for (const index in state.metadataFields){
      console.log(state.metadataFields[index])
    }
  },
  addOutputSpec(state){
    state.outputSpecs[state.outputSpecsIndex] = {
      index: state.outputSpecsIndex,
      regexp: "",
      label: "",
      location: "",
      name: "<assetName>"
    };
    state.outputSpecsIndex += 1;
  },
  deleteOutputSpec(state, item){
    console.log(`trying to delete: ${item.index}`)
    console.log(item)
    delete state.outputSpecs[item.index];
    for (const index in state.outputSpecs){
      console.log(state.outputSpecs[index])
    }
  },
  resetOutputSpecs(state){
    state.outputSpecs = {...state.defaultOutputSpecs};
    state.outputSpecsIndex = 0;
  },
}