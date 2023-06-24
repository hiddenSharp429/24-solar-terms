<!--
 * @Author: hiddenSharp429 z404878860@163.com
 * @Date: 2023-06-24 02:28:44
 * @LastEditors: hiddenSharp429 z404878860@163.com
 * @LastEditTime: 2023-06-24 16:45:08
 * @FilePath: \codee:\vue\24-solar-terms\src\components\summer2\lunbo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <img src="../../assets/lunbo/bottom.png" alt="" class="bottom" />
    <img :src="src" alt="" class="pic" />
    <img
      src="../../assets/lunbo/arrow-left.png"
      alt=""
      class="left"
      @click="changePic(-1)"
    />
    <img
      src="../../assets/lunbo/arrow-right.png"
      alt=""
      class="right"
      @click="changePic(1)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      picArr: [],
      index: 0,
    };
  },
  created() {
    this.picArr = [
      require("@/assets/lunbo/summerSolstice/pic1.webp"),
      require("@/assets/lunbo/summerSolstice/pic2.webp"),
      require("@/assets/lunbo/summerSolstice/pic3.webp"),
      require("@/assets/lunbo/summerSolstice/pic4.webp"),
      require("@/assets/lunbo/summerSolstice/pic5.webp"),
    ];
    this.src = this.picArr[0];
  },
  methods: {
    changePic(num) {
      if (this.index === 0 && num === -1) {
        this.index = 5;
      }
      if (this.index === 4 && num === 1) {
        this.index = -1;
      }
      this.index += num;
      this.src = this.picArr[this.index];
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 100vw;
  height: 800px;
  margin-top: 250px;
  position: relative;
}
.bottom {
  position: absolute;
  width: 400px;
  height: 320px;
  left: 600px;
  bottom: 140px;
}
.pic {
  position: absolute;
  width: calc(460px * 0.8);
  height: calc(570px * 0.8);
  top: 40px;
  left: 618px;
}
.left {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 100px;
  top: 250px;
  cursor: pointer;
}
.right {
  width: 200px;
  height: 200px;
  position: absolute;
  right: 50px;
  top: 250px;
  cursor: pointer;
}
</style>
