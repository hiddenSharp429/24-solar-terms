<template>
  <div class="con">
    <div class="logo">
          <img src="../assets/主页/logo.png" alt="" style="height: 100px; width:200px">
    </div>
   
    <div class="swiper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide>
          <div class="img1">
            <img src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/wegame/%E4%B8%8A%E5%9B%BE1.png"
              alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img1">
            <img src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/wegame/%E4%B8%8A%E5%9B%BE2.png"
              alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img1">
            <img src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/wegame/%E4%B8%8A%E5%9B%BE3.png"
              alt="">
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="close">Close appreciation</div>
    <div class="btn">
      <button>more</button>
    </div>

    <div class="lastimg">
      <div class="left">
        <img src="https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/wegame/%E4%B8%8B%E5%9B%BE.png"
          alt="">
      </div>
      <div class="right">
        <div>Time:2023.03.24 15:00</div>
        <div>Location: SLC.106</div>
        <div>Participate in the offline access</div>
        <div>experience link, will be donated</div>
        <div>to relevant cultural and creative</div>
        <div>products</div>
        <div>参与线下访问体验环节</div>
        <div>将赠予相关文创产品。</div>
      </div>
    </div>
    <div style="height: 200px;"></div>
    <div class="last">Consulting phone/wechat: 15815039287</div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css';
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
  font-family: '苏新诗柳楷简'; // 自定义字体名称
  src: url('../assets/font/Handwritten.ttf') format('truetype'),
}

.swiper {
  height: 200px;
  margin-bottom: 200px;
}

.con {
  font-family: '苏新诗柳楷简';

  .title {
    height: 100px;
    line-height: 100px;
    margin-top: 50px;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
  }

  .menu-block {
    display: flex;
    justify-content: center;

    .menu {
      width: 40px;
      height: 100%;
      // display: flex;
      flex-direction: column;
      position: relative;
      left: 40px;
      cursor: pointer;

      div {
        border-top: 4px solid;
        transition: all .3s linear;
      }

      .one {
        position: relative;
      }

      .two {
        position: relative;
        top: 4px;
      }

      .three {
        position: relative;
        top: 8px;
      }
    }

    span {
      width: 100px;
      font-weight: bold;
      color: #00b6ad;
      font-size: 40px;
      position: relative;
      top: 0;
    }

    .First {
      transition: all .3s linear;
    }

    .Second {
      transition: all .4s linear;
    }

    .Third {
      transition: all .4s linear;
    }
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

  .close {
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    margin-top: 20px;
  }

  .btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    z-index: 10;

    button {
      cursor: pointer;
      z-index: 10;
      width: 200px;
      height: 40px;
      border: #00b6ad 2px solid;
      background-color: #fff;
      text-align: center;
      line-height: 30px;
      font-size: 40px;
      font-weight: bold;
    }

    button:hover {
      background-color: #a2cac2;
    }
  }

  .lastimg {
    width: 100%;
    display: flex;
    margin-top: 20px;

    .left {
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

    .right {
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

  .last {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }
}

.top {
  top: 8px !important;
}

.top1 {
  top: 18px !important;
}

.top2 {
  top: -2px !important;
}

.animate1 {
  top: 20px !important;
  opacity: 0;
}
.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background: url('../assets/主页/背景虚化.jpg');
    /* background-repeat: no-repeat; */
    background-size: cover;
    filter: blur(10px);
  }
  
  .content {
    z-index: 5;
  }
  
  .router-link-active {
    text-decoration: none;
    color: rgb(10, 10, 10);
  }
  
  a {
    text-decoration: none;
    color: rgb(10, 10, 10);
  }
  
  .logo {
    position: absolute;
    left: 42%;
    height: 50px;
  }
  
  #nav {
    /* position: absolute; */
    right: 0;
    margin-top: 10px;
    margin-left: 250px;
    font-size: 25px;
    color: black;
    vertical-align: center;
    float: right;
  }
  
  /* #nav ul {
    list-style-type: circle;
    margin-left: 50px;
  } */
  
  #nav li {
    padding: 60px;
    display: inline;
  }
  
  .lunbo {
    left: 0;
    top: 0;
    margin-top: 130px;
    position: absolute;
    width: 100%;
  }
  
  .describe {
    float: right;
  }
</style>