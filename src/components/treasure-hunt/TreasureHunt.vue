<template>
  <div id="treasure-hunt">
    <div> 
      <label for="skuNames">Sku Names</label>
      <textarea
      name="skuNames"
      id="skuNames"
      cols="30"
      rows="10"
      v-model="skuNames"></textarea>
    </div>
    <div>
      <label for="oldPrices">Old Prices</label>
      <textarea
      name="oldPrices"
      id="oldPrices"
      cols="30"
      rows="10"
      v-model="oldPrices"></textarea>
    </div>
    <div>
      <label for="newPrices">New Prices</label>
      <textarea
      name="newPrices"
      id="newPrices"
      cols="30"
      rows="10"
      v-model="newPrices"></textarea>
    </div>
    <div>
      <label for="units">Units</label>
      <textarea
      name="units"
      id="units"
      cols="30"
      rows="10"
      v-model="units"></textarea>
    </div>
    <div>
      <label for="huntTimes">Hunt Times</label>
      <textarea
      name="huntTimes"
      id="huntTimes"
      cols="30"
      rows="10"
      v-model="huntTimes"></textarea>
    </div>
    <div>
      <label for="images">Images</label>
      <textarea
      name="images"
      id="images"
      cols="30"
      rows="10"
      v-model="images"></textarea>
    </div>
    <div>
      <label for="gone">Gone</label>
      <textarea
      name="gone"
      id="gone"
      cols="30"
      rows="10"
      v-model="gone"></textarea>
    </div>
    <div>
      <label for="catHidden">Category Hidden</label>
      <textarea
      name="catHidden"
      id="catHidden"
      cols="30"
      rows="10"
      v-model="catHidden"></textarea>
    </div>
    <div>
      <label for="catHiddenLink">Category Hidden Link</label>
      <textarea
      name="catHiddenLink"
      id="catHiddenLink"
      cols="30"
      rows="10"
      v-model="catHiddenLink"></textarea>
    </div>
    <div>
      <label for="containerId">Container ID</label>
      <textarea
      name="containerId"
      id="containerId"
      cols="30"
      rows="10"
      v-model="containerId"></textarea>
    </div>
    <button @click="processFSInputs">Submit</button>
  </div>
</template>

<script>
import util from "../../utils.js";
export default {
  data() {
    return {
      treasureHunts: [],
      cols: [],
      skuNames: "",
      oldPrices: "",
      newPrices: "",
      units: "",
      huntTimes: "",
      images: "",
      gone: "",
      containerId: "",
      catHidden: "",
      catHiddenLink: ""
    };
  },
  methods: {
    processFSInputs: function() {

      var skuNamesArray = this.skuNames.split(util.codeRegEx);
      var oldPricesArray = this.oldPrices.split(util.codeRegEx);
      var newPricesArray = this.newPrices.split(util.codeRegEx);
      var unitsArray = this.units.split(util.codeRegEx);
      var huntTimesArray = this.huntTimes.split(util.codeRegEx);
      var imagesArray = this.images.split(util.codeRegEx);
      var goneArray = this.gone.split(util.codeRegEx);
      var containerIdArray = this.containerId.split(util.codeRegEx);
      var catHiddenArray = this.catHidden.split(util.codeRegEx);
      var catHiddenLinkArray = this.catHiddenLink.split(util.codeRegEx);

      if (
        skuNamesArray.length === oldPricesArray.length &&
        skuNamesArray.length === newPricesArray.length &&
        skuNamesArray.length === unitsArray.length &&
        skuNamesArray.length === huntTimesArray.length &&
        skuNamesArray.length === imagesArray.length &&
        skuNamesArray.length === goneArray.length &&
        skuNamesArray.length === containerIdArray.length &&
        skuNamesArray.length === catHiddenArray.length &&
        skuNamesArray.length === catHiddenLinkArray.length
      ) {
        for (var i = 0; i < skuNamesArray.length; i++) {
          var treasureHunt = {
            skuName: skuNamesArray[i],
            oldPrice: oldPricesArray[i],
            newPrice: newPricesArray[i],
            units: unitsArray[i],
            huntTime: huntTimesArray[i],
            image: imagesArray[i],
            gone: goneArray[i],
            containerId: containerIdArray[i],
            catHidden: catHiddenArray[i],
            catHiddenLink: catHiddenLinkArray[i]
          };

          this.treasureHunts.push(treasureHunt);
        }
        // window.flashSales = this.flashSales;
        localStorage.setItem("treasureHunts", JSON.stringify(this.treasureHunts));
      } else {
        alert("copied inputs are not same length");
      }
    }
  }
};
</script>

<style scoped>
label,
textarea {
  display: inline-block;
  vertical-align: middle;
}

</style>
