<template>
  <div class="con">
    <!-- <div class="bg"></div> -->
    <div class=" content">
      <div class="logo">
        <img src="../assets/主页/logo.png" alt="" style="height: 80px; width:180px">

      </div>
      <div class=" title">四时之景 “创”意无穷———— 团队介绍</div>

      <div class="swiper">
        <swiper :options="swiperOptions">
          <swiper-slide>
            <div class="img1">
              <img src="../assets/about/lunbo2.jpg" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img1">
              <img src="../assets/about/lunbo3.jpg" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img1">
              <img src="../assets/about/lunbo4.jpg" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img1">
              <img src="../assets/about/lunbo1.jpg" alt="">
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="subtitle">
        ------------------------------------------------往期活动------------------------------------------------</div>
      <div class="lastimg">
        <div class="left">
          <img src="../assets/about/活动1.jpg" alt="">
        </div>
        <div class="right">
          <div>时间:2023.03.24 15:00</div><samp></samp>
          <div>地点: SLC.106</div>
          <div>参加我们的免费节气网站体验活动</div>
          <div>赠送相应的24节气文创产品</div>
          <div>收集用户体验反馈，对网站做进一步的修改</div>
          <br><br><br>
          <img src="../assets/about/panda1.png" alt="" style="width: 80%;height:80%;position: absolute;top:20%">
          <div class="pandatext" style="position: absolute; top:50%;left: 80%;"> 了解更多请关注小红书 <br> <br>“廿四的秘密花园”</div>
          <div class="pandatext"></div>
        </div>
      </div>
      <div class="subtitle">
        ------------------------------------------------最近活动------------------------------------------------</div>

      <div class="lastimg">
        <div class="left">
          <img src="../assets/about/活动2.jpg" alt="">
        </div>
        <div class="right">
          <div>时间:2023.06.20 17:00</div><samp></samp>
          <div>地点: 汕头大学附属幼儿园</div>
          <div>团队成员对目前的双语24节气读物的市场进行调研</div>
          <div>调研过程：</div>
          <div>1.采访幼儿园的小朋友，得知读物对小朋友的吸引程度</div>
          <div>2.采访小朋友的家长，得知对儿童读物的购买意愿</div>
          <br><br><br>
          <img src="../assets/about/panda2.png" alt="" style="width: 50%;height:80%;position: absolute;top:20%">
          <div class="pandatext" style="position: absolute;left:60%;top:50%;">
            更多资讯请关注公众号<br><br><span>"廿四节气多模态英译网站"</span></div>

        </div>
      </div>

      <div class="last">Consulting phone/wechat: 15815039287</div>
    </div>
  </div>
</template>

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
@font-face {
  font-family: 'zhongqi';
  src: url('../assets/font/zhongqi.ttf');
}

.bg{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  background: url('../assets/主页/背景虚化.jpg');
  background-repeat: repeat-y;
  z-index: 0;
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
  font-family: 'zhongqi';
  font-size: 50px;
  padding-top: 20px;
  padding-right: 20%;
  float: right;
  z-index: 5;
}

.subtitle {
  position: absolute;
  left: 20%;
  margin-bottom: 20px;
  font-size: 20px;
  padding: 20px;
  width: fit-content;
  color: rgb(32, 39, 234);
}

.swiper {
  height: 540px;
  padding-top: 80px;
  padding-left: 100px;
  padding-right: 100px;
  margin-bottom: 100px;
}

.pandatext {
  font-family: 'zhongqi';
  font-size: 26px;
  width: fit-content;
  position: absolute;
  left: 60%;
  border: 2px solid;
  border-radius: 25px;
  box-shadow: 10px 10px 5px #f5b105;
  border-image: url(../assets/about/蜜蜂.png) 30 30 round;
  display: block;
  color: rgb(240, 119, 44);
}

.img1 {
  position: relative;
  margin: 10px auto;
  width: 80%;
  padding-top: 40%;
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
  margin-left: 10%;
  background-color: bisque;
  border: 2px solid;
  border-radius: 25px;
  display: flex;
  margin-bottom: 5%;
  width: 80%;
  z-index: 10;

  .left {
    width: 600px;
    height: 400px;
    //  background-color: #888888;
    padding-top: 20px;
    margin-top: 2%;
    margin-left: 5%;
    position: relative;
    padding-bottom: 2%;
    border-radius: 15px 50px 30px;
    line-height: 20px;

    img {
      width: 100%;
      height: 100%;
      border: #888888;
      border-radius: 20px;
    }
  }

  .right {
    left: 5%;
    margin-top: 5%;
    position: relative;
    // background-color: #888888;
    display: inline;
    float: right;
    width: fit-content;
    line-height: 20px;


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

.last {
  height: 100px;
  line-height: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}</style>