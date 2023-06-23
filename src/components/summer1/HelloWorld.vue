<template>
  <div style="overflow-x: hidden;">
    <knowCard />
    <lunbo />
    <div class="maincontainer" @click="play()">
      <img src="../../assets/img/noinscription.png" class="bgc" v-if="bgcFlag" />
      <img src="./碑文6.png" class="beiwen" v-if="bgcFlag" :class="{ rotate: rotateFlag }" />
      <img src="../../assets/img/person.png" alt="失败" class="person" />
        <div class="title" v-show="poemFlag1">小池</div>
      <div class="author" v-show="poemFlag2">杨万里</div>
      <div class="shi one" v-show="poemFlag3">
        泉眼无声惜细流 <span>,</span>
      </div>
      <div class="shi two" v-show="poemFlag4">
        树荫照水爱晴柔 <span>。</span>
      </div>
      <div class="shi three" v-show="poemFlag5">
        小荷才露尖尖角 <span>,</span>
      </div>
      <div class="shi four" v-show="poemFlag6">
        早有蜻蜓立上头 <span>。</span>
      </div>
      
      <!-- <audio id="audio" src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/shouzhang/%E5%B0%8F%E6%B1%A0%20%E6%9D%A8%E4%B8%87%E9%87%8C.m4a" hidden ref="aud"></audio>
    </div>
    <div class="last">
          <div class="item">
            <img src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/wegame/%E7%AB%8B%E5%A4%8F-01.png"
              alt="">
          </div>
          <div class="item">
            <img src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/wegame/%E7%AB%8B%E5%A4%8F-02.png"
              alt="">
          </div>
          <div class="item">
            <img src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/wegame/%E7%AB%8B%E5%A4%8F-03.png"
              alt="">
          </div>
          <div class="item">
            <img src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/wegame/%E7%AB%8B%E5%A4%8F-04.png"
              alt="">
          </div>
          <div class="item">
              <img src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/wegame/%E7%AB%8B%E5%A4%8F-05.png"
                alt="">
            </div>-->
        </div> 
  </div>
</template>

<script>
import lunbo from "./lunbo";
import knowCard from "./knowCard.vue";
export default {
  created() {},
  data() {
    return {
      // url: require("../../assets/southSpring.mp3"),
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
      }, 8000);
      setTimeout(() => {
        this.poemFlag4 = true;
      }, 14000);
      setTimeout(() => {
        this.poemFlag5 = true;
      }, 20000);
      setTimeout(() => {
        this.poemFlag6 = true;
      }, 26000);
      setTimeout(() => {
        this.poemFlag7 = true;
      }, 31000);
    },
  },
  methods: {
    play() {
      if (this.flag) {
        this.$refs.aud.play();
      } else {
        this.$refs.aud.pause();
      }
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
    left: 310px;
    width: 180px;
    height: 340px;
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
  top: 60px;
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
    height: 400px;
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

.two {
  right: 490px;
}
.three {
  right: 555px;
}
.four {
  right: 625px;
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
  height: 360px;
  position: absolute;
  right: 460px;
  top: 10px;
  animation: fadeout 1.5s linear;
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
</style>
