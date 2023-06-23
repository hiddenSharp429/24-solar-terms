<template>
  <div style="overflow-x: hidden">
    <knowCard />
    <lunbo />
    <div class="maincontainer" @click="play()">
      <img src="../../assets/img/noinscription.png" class="bgc" v-if="bgcFlag" />
      <img src="../../assets/img/碑文3.png" class="beiwen" v-if="bgcFlag" :class="{ rotate: rotateFlag }" />
      <img src="../../assets/img/person.png" alt="失败" class="person" />
      <div class="title" v-show="poemFlag1">立春</div>
      <div class="author" v-show="poemFlag2">杜甫</div>
      <div class="shi one" v-show="poemFlag3">
        春日春盘细生菜 <span>,</span>
      </div>
      <div class="shi two" v-show="poemFlag4">
        忽忆两京梅发时 <span>。</span>
      </div>
      <div class="shi three" v-show="poemFlag5">
        盘出高门行白玉 <span>,</span>
      </div>
      <div class="shi four" v-show="poemFlag6">
        菜传纤手送青丝 <span>。</span>
      </div>
      <div class="shi" style="right: 655px" v-show="poemFlag8">
        巫峡寒江那对眼 <span>,</span>
      </div>
      <div class="shi two" style="right: 715px" v-show="poemFlag9">
        杜陵远客不胜悲 <span>。</span>
      </div>
      <div class="shi three" style="right: 775px" v-show="poemFlag10">
        此身未知归定处 <span>,</span>
      </div>
      <div class="shi four" style="right: 835px" v-show="poemFlag11">
        呼儿觅纸一题诗 <span>。</span>
      </div>
      <audio id="audio" src="../../assets/southSpring.mp3" hidden ref="aud"></audio>
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
      url: require("../../assets/southSpring.mp3"),
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
      poemFlag8: false,
      poemFlag9: false,
      poemFlag10: false,
      poemFlag11: false,
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
      }, 60000);
      setTimeout(() => {
        this.poemFlag8 = true;
      }, 34000);
      setTimeout(() => {
        this.poemFlag9 = true;
      }, 40000);
      setTimeout(() => {
        this.poemFlag10 = true;
      }, 48000);
      setTimeout(() => {
        this.poemFlag11 = true;
      }, 54000);
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
    position: relative;
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
    height: 260px;
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
    height: 400px;
  }
}

.shi {
  position: absolute;
  font-size: 48px;
  width: 40px;
  right: 420px;
  top: 50px;
  color: rgb(204, 119, 35);
  animation: typing2 4s linear;
  overflow: hidden;

  span {
    position: relative;
    left: 20px;
    bottom: 20px;
  }
}

.one {}

.two {
  right: 480px;
}

.three {
  right: 535px;
}

.four {
  right: 595px;
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
  top: 50px;
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
