<template lang="pug">
fieldset.pa-1
  //legend.left-align.pl-2.font-weight-bold(@click="isExpanded = !isExpanded")
  legend.left-align.pl-2.font-weight-bold
    span Metadata
    //v-tooltip(text="123" )
    //  template(v-slot:activator="{ props }")
    //    v-icon(v-bind="props").pl-2 fa-solid fa-circle-info
  //div(id="expand")
  //  v-icon(:icon="expansionIcon" size="x-large"
  //    @click="isExpanded = !isExpanded")
  //div(v-show="!isExpanded").py-1
  //div(v-show="isExpanded" )
    //span(v-show="Object.keys(metadata).length === 0" ) No Metadata specified
    //v-row
    //  v-col(cols="12")
    //    MetadataDetailsItem(v-for='item in metadata'
    //        :key='item.index'
    //        :item="item" )
    //v-row
    //  v-col(cols="12")
    //    v-btn(prepend-icon="fa-solid fa-plus"
    //    @click="addItem" elevation="2" variant="outlined" ) Add Metadata field
  div()
    | Metadata fields must be added in the `Preset builder` page.
</template>

<script>
import MetadataDetailsItem from "@/components/DPD/MetadataSection/metadataDetailsItem";

export default {
  name: "metadataDetails",
  components: {MetadataDetailsItem},
  computed: {
    expansionIcon(){
      if (this.isExpanded === false){
        return "fa-solid fa-caret-down"
      } else{
        return "fa-solid fa-caret-right"
      }
    },
    metadata: {
      get() {
        return this.$store.getters["metadata/metadata"]
      },
      set(value) {
        this.$store.dispatch('metadata/updateMetadata', value)
      }
    },
  },
  methods: {
    addItem(){
      this.$store.dispatch("metadata/addNewItem")
    },
  },
  data: function(){
    return {
      isExpanded: true,
    }
  }
}
</script>

<style scoped>

</style>