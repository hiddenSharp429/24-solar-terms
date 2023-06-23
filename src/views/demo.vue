<template>
  <div class="con">
    <!-- 最底层 -->
    <div class="lowestLevelPage"></div>
    <!-- 中间层 -->
    <div class="midLevelPage"></div>
    <!-- 最上层(内容层) -->
    <div class="faceLevelPage">
      <!-- 左侧内容 -->
      <div
        class="leftContent"
        :style="{
          'background-image':
            'url(' + backgroundImages[currentBackgroundIndex] + ')',
        }"
      >
        <!-- 弹幕 -->
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
        <!-- 音频 -->
        <div class="audioBox">
          <audio ref="audioPlayer" :src="audioSource"></audio>
          <div class="audioControls">
            <button @click="togglePlayback">
              <img v-if="isPlaying" src="../assets/img/play.png" alt="Pause" />
              <img v-else src="../assets/img/pasue.png" alt="Play" />
            </button>
            <div class="audioProgress">
              <div
                class="audioProgressBar"
                :style="{ width: progressPercentage + '%' }"
              ></div>
            </div>
            <div class="audioTime">{{ currentTime }} / {{ duration }}</div>
            <button @click="soundPlay">
              <img
                v-if="sound"
                src="../assets/img/soundClose.png"
                alt="Pause"
              />
              <img v-else src="../assets/img/soundOpen.png" alt="Play" />
            </button>
          </div>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="rightContent">
        <div class="titleContent">
          <div v-html="title" class="title"></div>
        </div>
        <div v-html="introduction" class="insideContent"></div>
        <div class="buttonDiv">
          <div class="button" @click="$router.push('/demo')">Learn More</div>
          <img class="right" src="../assets/img/rightArrow.png" alt="" />
        </div>
      </div>
    </div>
    <div class="button" @click="changeBackgroundImage">Change Background</div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      introduction:
        "The “great heat” represents the hottest days in the year.<br /><br />It arrives on July 23 or 24 when the sun reaches <br />the celestial longitude of 120 degrees.<br /><br /> It's a season with the highest temperature, wherethe crops grow fastest and the most frequent time for drought.",
      title: "Great Heat",
      currentBackgroundIndex: 0, // 用于记录当前背景图片的索引
      backgroundImages: [
        require("@/assets/solarIntroductionBCG/GreatHeat.png"),
        require("@/assets/solarIntroductionBCG/BeginningOfSummer.png"),
        require("@/assets/solarIntroductionBCG/GrainRain.png"),
        require("@/assets/solarIntroductionBCG/MajorHeat.png"),
        require("@/assets/solarIntroductionBCG/PureBrightness.png"),
        require("@/assets/solarIntroductionBCG/SpringEquinox.png"),
        // 添加更多背景图片路径...
      ],
      Barrages: [
        {
          text: "更多请关注公众号",
          image: require("@/assets/demoBarrageImg/star.png"),
          top: 100,
          left: 500,
          delay: 0,
        },
        {
          text: "更多请关注公众号",
          image: require("@/assets/demoBarrageImg/watermelon.png"),
          top: 300,
          left: 370,
          delay: 1,
        },
        {
          text: "更多请关注公众号",
          image: require("@/assets/demoBarrageImg/tea.png"),
          top: 150,
          left: 200,
          delay: 2,
        },
        // 添加更多弹幕...
      ],
      audioSource: require("@/assets/solarIntroductionMP3/chinese.mp3"),
      isPlaying: false,
      sound: true,
      currentTime: "0:00",
      duration: "0:00",
      progressPercentage: 0,
    };
  },
  mounted() {
    const audioPlayer = this.$refs.audioPlayer;
    console.log(audioPlayer); // 检查 audioPlayer 是否为正确的对象引用
    audioPlayer.addEventListener("timeupdate", this.updateCurrentTime);
    audioPlayer.addEventListener("durationchange", this.updateDuration);
    audioPlayer.addEventListener("ended", this.handleAudioEnd);
  },
  methods: {
    changeBackgroundImage() {
      // 更改背景图片
      this.currentBackgroundIndex =
        (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
      // 更改introduction的值
      const introductions = [
        'The "great heat" represents the hottest days in the year.<br /><br />It arrives on July 23 or 24 when the sun reaches <br />the celestial longitude of 120 degrees.<br /><br /> It\'s a season with the highest temperature, wherethe crops grow fastest and the most frequent time for drought.',
        "It is the first solar term in summer, when the sun reaches 45 degrees longitude. Beginning of summer means the change of seasons——spring is over and summer is coming. People are used to thinking that the temperature will rise after the Beginning of Summer, the summer heat will come, and thunderstorms will increase. At this time, the average temperature in most areas of China is about 18-20 ℃. The crops enter the growing season, and the sophora flower are blooming in many places.",
        'Grain Rain is the last solar term in spring when the sun reaches 30 ° of the Yellow longitude.Grain Rain comes from the meaning of "Rain produces hundreds of grain". The main feature of Grain Rain is the continuous spring rain, which is conducive to grain growth.',
        'Major Heat is the twelfth of the twenty-four solar terms and the last solar term in summer. It coincides with the "Dog days" (the most humid and sultry days in a year), when the sunshine time is the longest and the temperature is the highest in a year, people should do a good job of heat prevention and cooling.',
        'According to the "Yanjing suishiji" written during the reign of Guangxu, "when everything grows, it is clean and pure. Therefore, it is called Pure Brightness." This is the origin of the solar term "Pure Brightness". From the solar term "Pure Brightness", an important folk traditional festival in China——Qingming Festival is derived.One big difference between Qingming Festival and other traditional festivals is that it not only contains "festival customs", but also integrates "solar terms". It is the synthesis and sublimation of almost all spring festivals.',
        "The significance of “Spring Equinox”, one is that day and night is equal, each for 12 hours; the second is that in ancient time, spring is from “start of spring” to “the beginning of summer”, It has 3 months and equal to the spring. After “Spring Equinox”, it is mild, rainy and with bright sunshine. ",
      ]; // 添加更多文字内容
      const titles = [
        "Great Heat",
        "Beginning of Summer",
        "Grain Rain",
        "Major Heat",
        "Pure Brightness",
        "Spring Equinox",
      ]; // 添加更多标题
      const currentIndex = this.currentBackgroundIndex % introductions.length;
      this.introduction = introductions[currentIndex]; // 更改introduction的值
      this.title = titles[currentIndex]; // 更改title的值
    },
    togglePlayback() {
      const audioPlayer = this.$refs.audioPlayer;
      this.isPlaying = !this.isPlaying;

      if (this.isPlaying) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    },
    soundPlay() {
      const audioPlayer = this.$refs.audioPlayer;
      if (this.sound) {
        audioPlayer.muted = true; // 静音
        this.sound = false;
      } else {
        audioPlayer.muted = false; // 取消静音
        this.sound = true;
      }
    },
    updateCurrentTime() {
      const audioPlayer = this.$refs.audioPlayer;
      const currentTime = Math.floor(audioPlayer.currentTime);
      const minutes = Math.floor(currentTime / 60);
      const seconds = currentTime % 60;

      this.currentTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      const duration = Math.floor(audioPlayer.duration);
      this.progressPercentage = (currentTime / duration) * 100;
    },
    updateDuration() {
      const audioPlayer = this.$refs.audioPlayer;
      const duration = Math.floor(audioPlayer.duration);
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;

      this.duration = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    },
    handleAudioEnd() {
      this.isPlaying = false;
      this.currentTime = "0:00";
      this.progressPercentage = 0;
    },
  },
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
  background-size: cover;
  .audioControls {
    width: fit-content;
    height: fit-content;
    position: absolute;
    bottom: 60px;
    right: 60px;
    display: flex;
    align-items: center;
    flex-direction: row;
    background: rgba(229, 198, 207, 0.2);
    border-radius: 40px;
    font-size: 10px;
    padding: 10px;
    backdrop-filter: blur(6px);
    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
    img {
      width: 20px;
      height: 20px;
    }
    .audioTime {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  .Barrage-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    font-size: 16px;
    color: black;
    background: rgba(255, 255, 255, 0.5);
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
