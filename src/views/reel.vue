<template>
  <div class="container" @click.once="start()">
    <div
      class="item-wrap item-wrap1"
      @click="changeCurindex(1)"
      :class="{ anima5: flag5, anima6: flag8, anima7: flag11 }"
    >
      <div class="item" :class="{ anima: !flag, anima2: flag2(1) }">
        <img
          src="../assets/juanzhou/春轴.png"
          alt=""
          class="spring"
          :class="{ anima: !flag }"
        />
      </div>
      <img
        src="../assets/juanzhou/春轴底.png"
        alt=""
        class="item2"
        :class="{ anima1: !flag, anima3: flag2(1) }"
      />
    </div>
    <div
      class="item-wrap item-wrap2"
      @click="changeCurindex(2)"
      :class="{ anima4: flag1, leftt: flag6, anima6: flag8, anima7: flag11 }"
    >
      <div class="item" :class="{ anima: !flag, anima2: flag2(2) }">
        <img
          src="../assets/juanzhou/夏轴.png"
          alt=""
          class="spring"
          :class="{ anima: !flag }"
        />
      </div>
      <img
        src="../assets/juanzhou/夏轴底.png"
        alt=""
        class="item2"
        :class="{ anima1: !flag, anima3: flag2(2) }"
      />
    </div>
    <div
      class="item-wrap item-wrap3"
      @click="changeCurindex(3)"
      :class="{ anima4: flag1, anima5: flag5, leftt: flag9, anima7: flag11 }"
    >
      <div class="item" :class="{ anima: !flag || flag14, anima2: flag2(3) }">
        <img
          src="../assets/juanzhou/秋轴.png"
          alt=""
          class="spring"
          :class="{ anima: !flag }"
        />
      </div>
      <img
        src="../assets/juanzhou/秋轴底.png"
        alt=""
        class="item2"
        :class="{ anima1: !flag, anima3: flag2(3) }"
      />
    </div>
    <div
      class="item-wrap item-wrap4"
      @click="changeCurindex(4)"
      :class="{ anima4: flag1, anima5: flag5, anima6: flag8, leftt: flag12 }"
    >
      <div class="item" :class="{ anima: !flag, anima2: flag2(4) }">
        <img
          src="../assets/juanzhou/冬轴.png"
          alt=""
          class="spring"
          :class="{ anima: !flag }"
        />
      </div>
      <img
        src="../assets/juanzhou/冬轴底.png"
        alt=""
        class="item2"
        :class="{ anima1: !flag, anima3: flag2(4) }"
      />
    </div>
    <div
      class="pop-up"
      :class="{
        'pop-up1': flag3 || flag7 || flag10 || flag13,
        'pop-up2': flag4,
      }"
      @click="chuan()"
    >
      <img src="../assets/juanzhou/最后弹出1.webp" alt="加载中" v-show="imgFlag1" />
      <img src="../assets/juanzhou/最后弹出2.webp" alt="加载中" v-show="imgFlag2" />
      <img src="../assets/juanzhou/最后弹出3.webp" alt="加载中" v-show="imgFlag3" />
      <img src="../assets/juanzhou/最后弹出4.webp" alt="加载中" v-show="imgFlag4" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      curindex: 0,
      flag1: false,
      flag3: false,
      flag4: false,
      flag5: false,
      flag6: false,
      flag7: false,
      flag8: false,
      flag9: false,
      flag10: false,
      flag11: false,
      flag12: false,
      flag13: false,
      flag14: false,
      img: "",
      // imgLink1:
      //   "https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/%E6%9C%80%E5%90%8E%E5%BC%B9%E5%87%BA1.webp",
      // imgLink2:
      //   "https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/%E6%9C%80%E5%90%8E%E5%BC%B9%E5%87%BA2.webp",
      // imgLink3:
      //   "https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/%E6%9C%80%E5%90%8E%E5%BC%B9%E5%87%BA3.webp",
      // imgLink4:
      //   "https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/%E6%9C%80%E5%90%8E%E5%BC%B9%E5%87%BA4.webp",
      imgFlag1: false,
      imgFlag2: false,
      imgFlag3: false,
      imgFlag4: false,
    };
  },
  methods: {
    start() {
      this.flag = false;
    },
    flag2(index) {
      return index !== this.curindex && this.curindex !== 0;
    },
    changeCurindex(index) {
      if (!this.flag) {
        this.curindex = index;
      }
      if (this.curindex === 1) {
        setTimeout(() => {
          this.flag1 = true;
        }, 2000);
        setTimeout(() => {
          this.flag3 = true;
          this.imgFlag1 = true;
          this.imgFlag2 = false;
          this.imgFlag3 = false;
          this.imgFlag4 = false;
        }, 4000);
      }
      if (this.curindex === 2) {
        setTimeout(() => {
          this.flag5 = true;
        }, 2000);
        setTimeout(() => {
          this.flag6 = true;
        }, 4000);
        setTimeout(() => {
          this.flag7 = true;
          this.imgFlag2 = true;
          this.imgFlag1 = false;
          this.imgFlag3 = false;
          this.imgFlag4 = false;
        }, 6000);
      }
      if (this.curindex === 3) {
        setTimeout(() => {
          this.flag8 = true;
        }, 2000);
        setTimeout(() => {
          this.flag9 = true;
        }, 4000);
        setTimeout(() => {
          this.flag10 = true;
          this.imgFlag3 = true;
          this.imgFlag2 = false;
          this.imgFlag1 = false;
          this.imgFlag4 = false;
        }, 6000);
      }
      if (this.curindex === 4) {
        setTimeout(() => {
          this.flag11 = true;
        }, 2000);
        setTimeout(() => {
          this.flag12 = true;
        }, 4000);
        setTimeout(() => {
          this.flag13 = true;
          this.imgFlag4 = true;
          this.imgFlag2 = false;
          this.imgFlag3 = false;
          this.imgFlag1 = false;
        }, 6000);
      }
    },
    chuan() {
      this.flag4 = true;
      setTimeout(() => {
        this.flagFalse();
        this.flag14 = true;
      }, 2000);
      setTimeout(() => {
        this.curindex = 0;
      }, 4000);
    },
    flagFalse() {
      this.flag1 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.flag5 = false;
      this.flag6 = false;
      this.flag7 = false;
      this.flag8 = false;
      this.flag9 = false;
      this.flag10 = false;
      this.flag11 = false;
      this.flag12 = false;
      this.flag13 = false;
      this.flag14 = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  padding: 0 100px;
  background: url("https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/shouzhang/%E8%83%8C%E6%99%AF%E5%9B%BE.png");
  position: relative;

  .item-wrap {
    position: absolute;

    .item {
      position: relative;
      margin-top: 30px;
      user-select: none;
      overflow: hidden;
      height: 20px;
      transition: all 2s linear;

      .spring {
        height: 700px;
      }
    }

    .item2 {
      position: absolute;
      width: 300px;
      height: 20px;
      top: 50px;
      transition: all 2s linear;
    }

    .anima {
      height: 700px;
    }

    .anima2 {
      height: 40px !important;
    }

    .anima1 {
      top: 710px;
    }

    .anima3 {
      top: 60px;
    }
  }

  .item-wrap1 {
    left: 5%;
    transition: all 1s linear;
  }

  .item-wrap2 {
    left: 30%;
    transition: all 1s linear;
  }

  .item-wrap3 {
    left: 55%;
    transition: all 1s linear;
  }

  .item-wrap4 {
    left: 80%;
    transition: all 1s linear;
  }

  .anima4 {
    left: 5%;
    opacity: 0;
  }

  .anima5 {
    left: 30%;
    opacity: 0;
    z-index: 0;
  }

  .anima6 {
    left: 55%;
    opacity: 0;
    z-index: 0;
  }

  .anima7 {
    left: 80%;
    opacity: 0;
    z-index: 0;
  }

  .anima8 {
    left: 5%;
    opacity: 1;
  }

  .anima9 {
    left: 30%;
    opacity: 1;
  }

  .anima10 {
    left: 55%;
    opacity: 1;
  }

  .anima11 {
    left: 80%;
    opacity: 1;
  }

  .leftt {
    left: 5%;
  }

  .pop-up {
    position: absolute;
    width: 0;
    height: 495px;
    left: 335px;
    top: 140px;
    overflow: hidden;
    transition: all 2s linear;

    img {
      width: 846px;
      height: 100%;
    }
  }

  .pop-up1 {
    width: 846px;
  }

  .pop-up2 {
    width: 0;
  }
}
</style>
