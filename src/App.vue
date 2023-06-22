<template>
  <div id="app" class="app">
    <router-view />
    <div
      class="nav-container"
      @mouseenter="enterFlag = true"
      :class="{ enter: enterFlag }"
    >
      <!-- 首页左边的那个点 -->
      <div class="circle"></div>
    </div>
    <div class="nav-list" v-if="enterFlag">
      <div class="nav-item" @click="$router.push('/')">Home</div>
      <div class="nav-item line" @click="$router.push('/room')">
        Animation Room
      </div>
      <div class="nav-item line" @click="$router.push('/reel')">
        Living Room
      </div>
      <div class="nav-item line" @mouseenter="enterFlag1 = true">Bed Room</div>
      <div class="nav-item line" @click="$router.push('/fust')">Guest Room</div>
      <div class="nav-item line" @click="$router.push('/demo')">DEMO</div>
      <div class="nav-item" @click="open()">Balcony</div>
      <div class="seasons" v-if="enterFlag1" @mouseleave="enterFlag1 = false">
        <div class="seasons-item" @click="$router.push('/show/spring/1')">
          SPRING
        </div>
        <div class="seasons-item" @click="$router.push('/show/summer/1')">
          SUMMER
        </div>
        <div class="seasons-item" @click="$router.push('/show/autumn/1')">
          AUTUMN
        </div>
        <div class="seasons-item" @click="$router.push('/show/winter/1')">
          WINTER
        </div>
      </div>
    </div>
    <div class="tip" v-if="flag">
      <div class="first">Try more, scroll more, click more</div>
      <div class="first">多尝试滚动与点击,导航在左边</div>
      <div class="close" @click="flag = false">×</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
    if (this.$route.fullPath === "/") {
      this.flag = true;
    }
    setTimeout(() => {
      this.flag = false;
    }, 5000);
  },
  data() {
    return {
      enterFlag: false,
      enterFlag1: false,
      flag: false,
    };
  },
  methods: {
    open() {
      window.open("https://book.yunzhan365.com/pftiq/ecqw/mobile/index.html");
    },
  },
};
</script>

<style lang="scss" scoped>
/* 鼠标移到某个元素上时，显示自定义鼠标样式 */
.app:hover {
  cursor: none; /* 隐藏默认光标 */
}

/* 鼠标移动时，自定义鼠标跟随鼠标移动 */
.app:hover {
  cursor: url("https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/shouzhang/10x10%E9%BE%99%E5%A4%B4_%E7%94%BB%E6%9D%BF%201.png"),
    auto;
}
.app:active {
  cursor: url("https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/shouzhang/%E7%82%B9%E5%87%BB10x10_%E7%94%BB%E6%9D%BF%201.png"),
    auto;
}
#app {
  margin: 0;
  padding: 0;
  max-width: 100vw;
  position: relative;
}
.tip {
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 800px;
  height: 200px;
  background-color: rgba(126, 126, 126, 0.6);
  border-radius: 20px;
  color: #fff;
  text-align: center;
  font-size: 40px;
  .first {
    margin-top: 40px;
  }
  .close {
    font-size: 60px;
    position: absolute;
    top: 0;
    right: 20px;
    cursor: pointer;
  }
}
.nav-container {
  z-index: 10;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 100px;
  background-color: #fff;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  cursor: pointer;
  transition: all 0.5s linear; //圆形完成缩进的时间

  .circle {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #000;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4px;
  }
}

.enter {
  left: -50px;
}

.nav-list {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 480px;
  width: 100px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s linear;

  .nav-item {
    height: 20%;
    background-color: grey;
    border-radius: 40%;
    text-align: center;
    line-height: 80px;
    font-weight: bold;
    font-size: 18px;
    word-wrap: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .line {
    line-height: 30px;
  }
}

.seasons {
  position: absolute;
  width: 400px;
  height: 80px;
  display: flex;
  top: 240px;
  left: 100px;

  .seasons-item {
    width: 100px;
    height: 100%;
    background: grey;
    border-radius: 40%;
    line-height: 80px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
