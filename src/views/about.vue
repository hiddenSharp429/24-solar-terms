<template>
  <div class="con">
    <!-- <div class="bg"></div> -->
    <div class=" content">
      <div class="logo">
        <img src="../assets/主页/logo.png" alt="" style="height: 80px; width:180px">

      </div>
      <div class=" title">四时之景 “创”意无穷 团队介绍</div>

      <div class="swiper">
        <swiper :options="swiperOptions">
          <swiper-slide>
            <div class="img1">
              <img src="../assets/主页/荷花1.png" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img1">
              <img src="../assets/主页/荷花2.png" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img1">
              <img src="../assets/主页/荷花3.png" alt="">
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="subtitle">--------------------------------------往期活动--------------------------------------</div>
      <div class="lastimg">
        <div class="left">
          <img src="../assets/about/活动1.jpg" alt="">
        </div>
        <div class="right">
          <div>Time:2023.03.24 15:00</div><samp></samp>
          <div>Location: SLC.106</div>
          <div>Participate in the offline access</div>
          <div>experience link, will be donated</div>
          <div>to relevant cultural and creative</div>
          <div>products</div>
          <br><br><br>
          <div>参与线下访问体验环节</div>
          <div>将赠予相关文创产品。</div>
          <div>更多活动请期待</div>
        </div>
      </div>
      <!-- <div class="lastimg1">
        <div class="left1">
          <img src="../assets/about/活动1.jpg" alt="">
        </div>
        <div class="right1">
          <div>Time:2023.03.24 15:00</div><samp></samp>
          <div>Location: SLC.106</div>
          <div>Participate in the offline access</div>
          <div>experience link, will be donated</div>
          <div>to relevant cultural and creative</div>
          <div>products</div>
          <div>参与线下访问体验环节</div>
          <div>将赠予相关文创产品。</div>
          <div>更多活动请期待</div>
        </div>
      </div> -->
    </div>
    <div style="height: 200px;"></div>
    <div class="last">Consulting phone/wechat: 15815039287</div>
  </div>
</div></template>

<script>
import 'swiper/css/swiper.css';
// import 'swiper/css/pagination';
// import { Pagination } from 'vue-awesome-swiper';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      flag: false,
      swiperOptions: {
        autoplay: true,
        loop: true,
      },
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 200%;
  position: absolute;
  left: 0px;
  top: 0px;
  background: url('../assets/主页/背景虚化.jpg');
  background-repeat: repeat-y;
  background-size: cover;
  filter: blur(10px);
}

.content {
  z-index: 10;
}

.logo {
  position: absolute;
  margin-left: 10%;
}

.title {
  width: fit-content;
  padding-top: 50px;
  padding-right: 30%;
  float: right;
  font-size: 25px;
  color: rgb(225, 235, 226);
  vertical-align: center;
  z-index: 5;
  background-color: aquamarine;
}
.subtitle{
  position: absolute;
  left: 50%;
  font-size: 26px;
  padding: 50px;
  width: fit-content;
  background-color: rgb(15, 10, 5);
}
.swiper {
  height: 200px;
  padding: 80px;
  margin-bottom: 200px;
}

.img1 {
  position: relative;
  margin: 10px auto;
  width: 90%;
  padding-top: 30%;
  overflow: hidden;
  border-radius: 20px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.lastimg {
  width: 100%;
  display: flex;
  margin-top: 20px;

  .right {
    width: 400px;
    padding-top:5%;
    line-height: 25px;
    position: relative;
    margin-left: 30px;
    margin-right: 100px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.lastimg1 {
  .right1 {
    width: 300px;
    padding-top: 30%;
    position: relative;
    margin-left: 300px;
    margin-right: 100px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .left1 {
    width: 500px;
    padding-top: 120px;
    position: relative;
    top: -100px;

    img {
      width: 100%;
      height: 100%;
    }

    div {
      width: 100%;
      height: 50px;
      font-size: 30px;
      font-weight: bold;
      position: relative;
      left: 20px;
    }
  }
}

.left {
  width: 700px;
  height: 400px;
  padding-top: 120px;
  margin-left: 10%;
  position: relative;
  top: -100px;

  img {
    width: 100%;
    height: 100%;
  }
}


.last {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
}</style>