<template>
  <div class="container">
    <img src="../../assets/lunbo/bottom.png" alt="" class="bottom" />
    <img :src="src" alt="" class="pic" />
    <img src="../../assets/lunbo/arrow-left.png" alt="" class="left" @click="changePic(-1)" />
    <img src="../../assets/lunbo/arrow-right.png" alt="" class="right" @click="changePic(1)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: '',
      picArr: [],
      index: 0,
    };
  },
  created() {
    this.picArr = ['../../assets/导出12节气（5张）/小雪/46.webp',
      '../../assets/导出12节气（5张）/小雪/47.webp',
      '../../assets/导出12节气（5张）/小雪/48.webp',
      '../../assets/导出12节气（5张）/小雪/49.webp',
      '../../assets/导出12节气（5张）/小雪/50.webp'];
    this.src = this.picArr[0]
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
