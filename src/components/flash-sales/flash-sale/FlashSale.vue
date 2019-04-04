<template>
  <div :class="classes.item" draggable="true">
    <div :class="classes.itemBoxGlow"></div>
    <div :class="classes.itemBoxMax"></div>
    <div :class="classes.content">
      <a :href="link" target="_blank">
        <p>sold</p>
        <p>out</p>
      </a>
      <p>{{skuName}} - {{saleId}}</p>
      <img :src="image" :alt="skuName" />
    </div>
    <ul :class="classes.priceBox">
      <li>{{newPrice}}</li>
      <li>{{oldPrice}}</li>
      <li>{{units}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["saleId"],
  data() {
    return {
      classes: {
        priceBox: "-fs_price-box",
        itemBoxGlow: "-item-box_glow",
        itemBoxMax: "-item-box_mask",
        content: "-fs_content -centered",
        item: "flash-sale -fs_item-box"
      },
      oldPrice: "Old Price",
      newPrice: "New Price",
      image: "",
      skuName: "Sku Name",
      discount: "",
      units: "# units",
      link: "https://www.jumia.com.ng/mobile-apps/"
    };
  }
};
</script>

<style scoped>
[draggable] {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -khtml-user-drag: element;
  -webkit-user-drag: element;
}

.flash-sale {
  height: 245px;
  width: 188px;
  float: left;
  border: 2px solid #666;
  background-color: #ccc;
  margin-right: 5px;
  -webkit-border-radius: 5px;
  -ms-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 3px #000;
  -ms-box-shadow: inset 0 0 3px #000;
  box-shadow: inset 0 0 3px #000;
  text-align: center;
  cursor: move;
}

.-fs_item-box .-fs_content p {
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -1px;
  -webkit-margin-before: 4px;
  -moz-margin-start: 4px;
  margin-top: 4px;
  -webkit-margin-after: 2px;
  -moz-margin-end: 2px;
  margin-bottom: 2px;
  color: black;
}

.-fs_item-box .-fs_content a {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px;
  z-index: 10;
  pointer-events: none;
}

.-fs_item-box .-fs_content img {
  width: 160px;
  height: auto;
  border-radius: 20px;
  background-color: aqua;
}

.-fs_ctnr.-scroll [class^='-col-'] .-fs_item-box .-fs_price-box {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 0;
    margin: 0;
    list-style: none;
}

.-fs_item-box a > p {
  display: none;
}

.flash-sale.over {
  border: 2px dashed #000;
}
</style>
