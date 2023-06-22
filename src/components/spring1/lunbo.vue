<template>
  <div class="container">
    <img v-lazy="'https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/bottom.png'" alt="" class="bottom" />
      <img :src="src" alt="" class="pic" />
    <img
      v-lazy="'https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/arrow-left.png'"
        alt=""
      class="left"
      @click="changePic(-1)"
    />
    <img
      v-lazy="'https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/arrow-right.png'"
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
      src: '',
      picArr: [],
      index: 0,
    };
  },
  created() {
    this.picArr = ['https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/pic1.png',
      'https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/pic2.png',
      'https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/pic3.webp',
      'https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/pic4.webp',
      'https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/pic5.png'];
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
