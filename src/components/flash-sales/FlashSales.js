
import FlashSale from "./flash-sale/FlashSale.vue";
import util from "../../utils.js";
export default {
  data() {
    return {
      flashSales: [],
      cols: [],
      skuNames: "",
      oldPrices: "",
      newPrices: "",
      units: "",
      saleTimes: "",
      images: "",
      soldOut: "",
      containerId: ""
    };
  },
  components: {
    "flash-sale": FlashSale
  },
  mounted() {
    this.cols = document.querySelectorAll(".flash-sale");
    window.cols = this.cols;
    this.cols.forEach(function(col) {
      col.addEventListener("dragstart", util.handleDragStart, false);
      col.addEventListener("dragenter", util.handleDragEnter, false);
      col.addEventListener("dragover", util.handleDragOver, false);
      col.addEventListener("dragleave", util.handleDragLeave, false);
      col.addEventListener("drop", util.handleDrop, false);
      col.addEventListener("dragend", util.handleDragEnd, false);
    });
  },
  methods: {
    processFSInputs: function() {
      console.log("sku names are", this.skuNames.split(util.codeRegEx).length);
      console.log("old prices are", this.skuNames.split(util.codeRegEx).length);
      console.log("new prices are", this.skuNames.split(util.codeRegEx).length);
      console.log("units are", this.skuNames.split(util.codeRegEx).length);
      console.log("sale times are", this.skuNames.split(util.codeRegEx).length);
      console.log("images are", this.skuNames.split(util.codeRegEx).length);

      var skuNamesArray = this.skuNames.split(util.codeRegEx);
      var oldPricesArray = this.oldPrices.split(util.codeRegEx);
      var newPricesArray = this.newPrices.split(util.codeRegEx);
      var unitsArray = this.units.split(util.codeRegEx);
      var saleTimesArray = this.saleTimes.split(util.codeRegEx);
      var imagesArray = this.images.split(util.codeRegEx);
      var soldOutArray = this.soldOut.split(util.codeRegEx);
      var containerIdArray = this.containerId.split(util.codeRegEx);

      if (
        skuNamesArray.length === oldPricesArray.length &&
        skuNamesArray.length === newPricesArray.length &&
        skuNamesArray.length === unitsArray.length &&
        skuNamesArray.length === saleTimesArray.length &&
        skuNamesArray.length === imagesArray.length &&
        skuNamesArray.length === soldOutArray.length &&
        skuNamesArray.length === containerIdArray.length
      ) {
        for (var i = 0; i < skuNamesArray.length; i++) {
          var flashSale = {
            skuName: skuNamesArray[i],
            oldPrice: oldPricesArray[i],
            newPrice: newPricesArray[i],
            units: unitsArray[i],
            saleTime: saleTimesArray[i],
            image: imagesArray[i],
            soldOut: soldOutArray[i],
            containerId: containerIdArray[i]
          };

          this.flashSales.push(flashSale);
        }
        window.flashSales = this.flashSales;
        localStorage.setItem("flashSales", JSON.stringify(this.flashSales));
      } else {
        alert("copied inputs are not same length");
      }
    }
  }
};