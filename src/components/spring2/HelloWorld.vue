<template>
  <div style="overflow-x: hidden;">
    <knowCard />
    <lunbo />
    <div class="maincontainer" @click="play()">
      <img
        v-lazy="'https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/wegame/%E6%97%A0%E5%AD%97%E7%A2%91%E6%96%871.png'"
        class="bgc" v-if="bgcFlag" />
      <img v-lazy="'https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/%E7%A2%91%E6%96%874.png'"
        class="beiwen" v-if="bgcFlag" :class="{ rotate: rotateFlag }" />
      <img src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/person.png" alt="失败"
        class="person" />
      <div class="title" v-show="poemFlag1">春夜喜雨</div>
      <div class="author" v-show="poemFlag2">杜甫</div>
      <div class="shi one" v-show="poemFlag3">
        好雨知时节 <span>,</span>当春乃发生 <span>。</span>
      </div>
      <div class="shi two" v-show="poemFlag4">
        随风潜入夜 <span>,</span>润物细无声 <span>。</span>
      </div>
      <div class="shi three" v-show="poemFlag5">
        野径云俱黑 <span>,</span>江船火独明 <span>。</span>
      </div>
      <div class="shi four" v-show="poemFlag6">
        晓看红湿处 <span>,</span>花重锦官城 <span>。</span>
      </div>
      
      <!-- <audio id="audio" :src="url" hidden ref="aud"></audio> -->
    </div>
    <div class="last">
      <div class="item">
        <img
          src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/shouzhang/%E9%9B%A8%E6%B0%B4-01.png"
          alt="">
      </div>
      <div class="item">
        <img
          src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/shouzhang/%E9%9B%A8%E6%B0%B4-02.png"
          alt="">
      </div>
      <div class="item">
        <img
          src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/shouzhang/%E9%9B%A8%E6%B0%B4-03.png"
          alt="">
      </div>
      <div class="item">
        <img
          src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/shouzhang/%E9%9B%A8%E6%B0%B4-04.png"
          alt="">
      </div>
    </div>
  </div>
</template>

<script>
import lunbo from "./lunbo";
import knowCard from "./knowCard.vue";
export default {
  created() { },
  data() {
    return {
      flag: true,
      rotateFlag: false,
      bgcFlag: true,
      poemFlag1: false,
      poemFlag2: false,
      poemFlag3: false,
      poemFlag4: false,
      poemFlag5: false,
      poemFlag6: false,
      poemFlag7: false,
    };
  },
  components: { lunbo, knowCard },
  watch: {
    rotateFlag() {
      setTimeout(() => {
        this.poemFlag1 = true;
      }, 1000);
      setTimeout(() => {
        this.poemFlag2 = true;
      }, 3000);
      setTimeout(() => {
        this.poemFlag3 = true;
      }, 7000);
      setTimeout(() => {
        this.poemFlag4 = true;
      }, 13000);
      setTimeout(() => {
        this.poemFlag5 = true;
      }, 19000);
      setTimeout(() => {
        this.poemFlag6 = true;
      }, 25000);
      setTimeout(() => {
        this.poemFlag7 = true;
      }, 30000);
    },
  },
  methods: {
    play() {
      // if (this.flag) {
      //   this.$refs.aud.play();
      // } else {
      //   this.$refs.aud.pause();
      // }
      this.rotateFlag = true;
      this.flag = !this.flag;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes sildein {
  from {
    transform: translateX(-200px);
  }
}

@keyframes backinright {
  to {
    transform: translateX(-300px);
  }
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg) scale(1.1);
  }

  100% {
    transform: rotateZ(360deg) scale(0);
  }
}

@keyframes typing {
  from {
    height: 0px;
  }

  to {
    height: 180px;
  }
}

.maincontainer {
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  margin: 20px auto;
  overflow: hidden;
  animation: sildein 1s linear;
  // background-color: rgb(239, 244, 251);
  font-family: 华文行楷;

  .bgc {
    width: 100%;
    height: 100%;
  }

  .person {
    position: absolute;
    right: -220px;
    bottom: 20px;
    width: 13%;
    height: 60%;
    animation: backinright 1s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  .beiwen {
    position: absolute;
    top: 220px;
    left: 300px;
    width: 200px;
    height: 360px;
  }
}

.rotate {
  animation: rotate 1s linear;
  animation-fill-mode: forwards;
}

.title {
  font-size: 60px;
  width: 60px;
  overflow: hidden;
  color: rgb(176, 75, 37);
  position: absolute;
  right: 300px;
  top: 10px;
  animation: typing 1s steps(3);
}

@keyframes typing1 {
  from {
    height: 0px;
  }

  to {
    height: 76px;
  }
}

.author {
  width: 38px;
  position: absolute;
  top: 120px;
  right: 360px;
  font-size: 38px;
  animation: typing1 1s steps(2);
  overflow: hidden;
}

@keyframes typing2 {
  from {
    height: 0px;
  }

  to {
    height: 540px;
  }
}

.shi {
  position: absolute;
  font-size: 48px;
  width: 40px;
  right: 420px;
  top: 10px;
  color: rgb(204, 119, 35);
  animation: typing2 4s linear;
  overflow: hidden;

  span {
    position: relative;
    left: 20px;
    bottom: 20px;
  }
}

.last {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 20px auto;

  .item {
    flex-basis: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.one {}

.two {
  right: 490px;
}

.three {
  right: 565px;
}

.four {
  right: 640px;
}

@keyframes fadeout {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.english {
  height: 500px;
  position: absolute;
  right: 460px;
  top: 10px;
  animation: fadeout 1.5s linear;
}
</style>
