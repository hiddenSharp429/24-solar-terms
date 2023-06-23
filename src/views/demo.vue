<template>
  <div class="con">
    <!-- 最底层 -->
    <div class="lowestLevelPage"></div>
    <!-- 中间层 -->
    <div class="midLevelPage"></div>
    <!-- 最上层(内容层) -->
    <div class="faceLevelPage">
      <div class="leftContent">
        <div
          v-for="(Barrage, index) in Barrages"
          :key="index"
          class="Barrage-item"
          :style="{
            top: Barrage.top + 'px',
            left: Barrage.left + 'px',
            animationDelay: Barrage.delay + 's',
          }"
        >
          <img :src="Barrage.image" alt="弹幕图片" class="Barrage-image" />
          {{ Barrage.text }}
        </div>
      </div>
      <div class="rightContent">
        <div class="titleContent">
          <div class="title">GREAT HEAT</div>
        </div>
        <div class="insideContent">
          The "great heat” represents the hottest days in the year.<br /><br />It
          arrives on July 23 or 24 when the sun reaches <br />the celestial
          longitude of 120 degrees.<br /><br />
          It's a season with the highest temperature, wherethe crops grow
          fastest and the most frequent time for drought.
        </div>
        <div class="buttonDiv">
          <div class="button" @click="$router.push('/demo')">Learn More</div>
          <img class="right" src="../assets/img/rightArrow.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      Barrages: [
        {
          text: "弹幕1",
          image: require("@/assets/demoBarrageImg/star.png"),
          top: 100,
          left: 500,
          delay: 0,
        },
        {
          text: "弹幕2",
          image: require("@/assets/demoBarrageImg/watermelon.png"),
          top: 300,
          left: 370,
          delay: 1,
        },
        {
          text: "弹幕3",
          image: require("@/assets/demoBarrageImg/tea.png"),
          top: 150,
          left: 200,
          delay: 2,
        },
        // 添加更多弹幕...
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.con {
  position: relative;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
}
.lowestLevelPage {
  position: absolute;
  margin-top: 5vh;
  width: 80%;
  height: 80%;
  border-radius: 5% 5% 0 0;
  background-color: rgb(213, 181, 192);
  z-index: 1;
}
.midLevelPage {
  position: absolute;
  margin-top: 8vh;
  width: 84%;
  height: 80%;
  border-radius: 5% 5% 0 0;
  background-color: rgb(229, 198, 207);
  z-index: 2;
}
.faceLevelPage {
  display: flex;
  flex-direction: row;
  position: absolute;
  margin-top: 11vh;
  width: 88%;
  height: 88%;
  border-radius: 4%;
  background-color: rgb(244, 242, 229);
  z-index: 3;
}
.leftContent {
  position: relative;
  width: 50%;
  height: 100%;
  background-image: url(../assets/img/demoBackground.png);
  background-size: cover;
  .Barrage-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    font-size: 16px;
    color: black;
    background: rgba(255, 255, 255, .5);
    border: 2px solid white;
    backdrop-filter: blur(6px);
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    animation: Barrage-animation 5s linear infinite;
    .Barrage-image {
      width: 30px;
      height: 30px;
      margin-right: 15px;
    }
  }

  @keyframes Barrage-animation {
    0% {
      top: 200px;
    } /* 初始位置在容器的底部 */
    100% {
      top: -30px;
    } /* 动画结束后移到容器上方之外 */
  }
}
.rightContent {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  height: 100%;
  .titleContent {
    position: absolute;
    padding-top: 5px;
    top: 20%;
    right: 40px;
    width: fit-content;
    font-size: 40px;
    height: fit-content;
    z-index: 4;
    border-top: 5px solid rgb(229, 198, 207);
  }
  .insideContent {
    position: absolute;
    top: 40%;
    right: 40px;
    width: fit-content;
    text-align: right;
    height: fit-content;
    font-size: 20px;
    z-index: 4;
  }
  .buttonDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    padding-left: 30px;
    top: 70%;
    right: 40px;
    width: fit-content;
    height: fit-content;
    font-size: 20px;
    background-color: rgb(229, 198, 207);
    border-radius: 50px;
    z-index: 4;
    .right {
      width: 40px;
      height: 40px;
      margin-left: 10px;
    }
  }
}
</style>
