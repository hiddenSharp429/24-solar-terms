<template>
  <div class="skw-pages" @mousewheel="debounceInput">
    <div class="page1">
      <img src="../assets/Seasons/all.webp" alt="">
    </div>
    
    <div class="skw-page skw-page-1" :class="{ inactive: curPage !== 1, active: curPage === 1 }">
      <div class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
          <div class="skw-page__content"></div>
        </div>
      </div>
      <div class="skw-page__half skw-page__half--right">
        <div class="skw-page__skewed">
          <div class="skw-page__content">
            <h2 class="skw-page__heading">Spring</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="skw-page skw-page-2" :class="{ inactive: curPage !== 2, active: curPage === 2 }">
      <div class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
          <div class="skw-page__content">
            <h2 class="skw-page__heading">Summer</h2>
          </div>
        </div>
      </div>
      <div class="skw-page__half skw-page__half--right">
        <div class="skw-page__skewed">
          <div class="skw-page__content"></div>
        </div>
      </div>
    </div>

    <div class="skw-page skw-page-3" :class="{ inactive: curPage !== 3, active: curPage === 3 }">
      <div class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
          <div class="skw-page__content"></div>
        </div>
      </div>
      <div class="skw-page__half skw-page__half--right">
        <div class="skw-page__skewed">
          <div class="skw-page__content">
            <h2 class="skw-page__heading">Autumn</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="skw-page skw-page-4" :class="{ inactive: curPage !== 4, active: curPage === 4 }">
      <div class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
          <div class="skw-page__content">
            <h2 class="skw-page__heading">Winter</h2>
          </div>
        </div>
      </div>
      <div class="skw-page__half skw-page__half--right">
        <div class="skw-page__skewed">
          <div class="skw-page__content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.debounceInput = this.debounce(this.showOut, 500, false)
  },
  data() {
    return {
      curPage: 0,
      numOfPages: 4,
      animTime: 1000,
      scrolling: false,
      pgPrefix: ".skw-page-",
    };
  },
  methods: {
    showOut(e) {
      if (this.scrolling) return;
      // if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      //   this.navigateUp();
      // } else {
      //   this.navigateDown();
      // }

      if (e.deltaY > 0) {
        this.navigateDown();
      } else {
        this.navigateUp();
      }
    },
    pagination(param) {
      this.curPage += param;
    },
    navigateUp() {
      if (this.curPage === 0) return;
      this.pagination(-1);
    },
    navigateDown() {
      if (this.curPage === this.numOfPages) return;
      this.pagination(1);
    },
    debounce(func, delay = 1000, immediate = false) {
      //闭包
      let timer = null;
      //不能用箭头函数
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        if (immediate && !timer) {
          func.apply(this, arguments);
        }
        timer = setTimeout(() => {
          func.apply(this, arguments);
        }, delay);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: '苏新诗柳楷简'; // 自定义字体名称
  src: url('../assets/font/Handwritten.ttf') format('truetype'),
}
.tip {
  z-index: 11;
  width: 200px;
  height: 100px;
  background: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.page1 {
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}

li {
  list-style: none;
}

#wrap {
  z-index: 999;
  position: fixed;
  width: 100%;
}

#wrap>ul {
  border-top: 1px solid rgb(243, 131, 131);
  border-bottom: 1px solid rgb(243, 131, 131);
  border-radius: 50px;
  border-width: 5px;
  width: 1080px;
  height: 74px;
  margin: 0px auto;
}

#wrap>ul>li {
  position: relative;
  z-index: 99;
  float: left;
  width: 150px;
  height: 65px;
  font-size: 14px;
  font-family: "微软雅黑";
  text-align: center;
  padding-top: 20px;
  /* cursor: pointer; */
  user-select: none;
  border: 2px;
}

#wrap>ul>li>a {
  color: #000;
  text-decoration: none;
  width: 500px;
}

#wrap span {
  display: block;
  color: #534343;
  font-size: 12px;
}

#wrap>ul>li.on>a {
  color: #000;
}

#wrap>ul>li.on>a>span {
  color: #000;
}

#wrap>ul>li:not(:first-of-type):hover {
  background: #b80909;
}

#wrap>ul>li>span:not(:first-of-type):hover {
  background: #b80909;
}

#wrap>ul>li:not(:first-of-type):hover>a {
  color: #fff;
}

#wrap>ul>li:not(:first-of-type):hover>a>span {
  color: #fff;
}

#wrap>ul>li.on>a>span {
  color: #000;
}

#wrap>ul>li:not(:first-of-type):hover {
  background: #b80909;
}

#wrap>ul>li>span:not(:first-of-type):hover {
  background: #b80909;
}

#wrap>ul>li:not(:first-of-type):hover>a {
  color: #fff;
}

#wrap>ul>li:not(:first-of-type):hover>a>span {
  color: #fff;
}

#wrap>ul>li>#title {
  background: #fff;
  border-radius: 20px;
}

#wrap>ul>li>#title>div>a {
  color: rgb(102, 88, 226);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #15181a;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

a:link {
  text-decoration: none;
  font-size: 18px;
  /* border: 1px solid black; */
  padding: 5px;
  margin-left: 10px;
  color: rgb(243, 237, 237);
}

/* :visited{
color: #FFA0A0;
} */
.skw-pages {
  overflow: hidden;
  position: relative;
  height: 100vh;
}

.skw-page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.skw-page__half {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100vh;
  -webkit-transition: -webkit-transform 1s;
  transition: transform 1s;
}

.skw-page__half--left {
  left: 0;
  -webkit-transform: translate3d(-32.4vh, 100%, 0);
  transform: translate3d(-32.4vh, 100%, 0);
}

.skw-page__half--right {
  left: 50%;
  -webkit-transform: translate3d(32.4vh, -100%, 0);
  transform: translate3d(32.4vh, -100%, 0);
}

.skw-page.active .skw-page__half {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.skw-page__skewed {
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 140%;
  height: 100%;
  -webkit-transform: skewX(-18deg);
  -ms-transform: skewX(-18deg);
  transform: skewX(-18deg);
  background: #000;
}

.skw-page__half--left .skw-page__skewed {
  left: -40%;
}

.skw-page__half--right .skw-page__skewed {
  right: -40%;
}

.skw-page__content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-flex-flow: column wrap;
  -ms-flex-flow: column wrap;
  flex-flow: column wrap;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 30%;
  color: #fff;
  -webkit-transform: skewX(18deg);
  -ms-transform: skewX(18deg);
  transform: skewX(18deg);
  -webkit-transition: -webkit-transform 1s, opacity 1s;
  transition: transform 1s, opacity 1s;
  background-size: cover;
}

.skw-page__half--left .skw-page__content {
  padding-left: 30%;
  padding-right: 30%;
  -webkit-transform-origin: 100% 0;
  -ms-transform-origin: 100% 0;
  transform-origin: 100% 0;
}

.skw-page__half--right .skw-page__content {
  padding-left: 30%;
  padding-right: 30%;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
}

.skw-page.inactive .skw-page__content {
  opacity: 0.5;
  -webkit-transform: skewX(18deg) scale(0.95);
  -ms-transform: skewX(18deg) scale(0.95);
  transform: skewX(18deg) scale(0.95);
}

.skw-page__heading {
  margin-bottom: 15px;
  text-transform: uppercase;
  text-align: center;
  font-family: '苏新诗柳楷简';
  font-size: 200px;
  /* list-style-image: url(../img/); */
}

.skw-page__description {
  padding: 5px;
  font-size: 18px;
  text-align: left;
  color: beige;
  border: #000 dashed 1px;
}

.skw-page__link {
  color: #ffa0a0;
}

.skw-page-1 .skw-page__half--left .skw-page__content {
  background-image: url("../assets/Seasons/123456-01.png");
  background-position-x: 150px;
  background-size: cover;
}

.skw-page-1 .skw-page__half--right .skw-page__content {
  background: #50c979;
}

.skw-page-2 .skw-page__half--left .skw-page__content {
  background: #ee5050;
}

.skw-page-2 .skw-page__half--right .skw-page__content {
  background-image: url("../assets/Seasons/123456-02.png");
  background-position-x: -620px;
  background-size: cover;
}

.skw-page-3 .skw-page__half--left .skw-page__content {
  background-image: url("../assets/Seasons/123456-03.png");
  background-position-x: 150px;
  background-size: cover;
}

.skw-page-3 .skw-page__half--right .skw-page__content {
  background: #f7c049;
}

.skw-page-4 .skw-page__half--left .skw-page__content {
  background: #5d78f0;
}

.skw-page-4 .skw-page__half--right .skw-page__content {
  background-image: url("../assets/Seasons/123456-04.png");
  background-position-x: -620px;
  background-size: cover;
}

/* .skw-page-5 .skw-page__half--left .skw-page__content {
  background-image: url("../images/1.png");
  background-position-x: 150px;
  background-size: cover;
}
.skw-page-5 .skw-page__half--right .skw-page__content {
  background: #f7c049;
} */
</style>
