<template>
  <div class="con">
    <img src="../../assets/knowCard/head.png" alt="" class="head" />
    <div class="card">
      <div class="card-side front">
        <img
          src="../../assets/知识卡片之十二个（枝头不变）/冬3个/2小雪/小雪正面.webp"
          alt=""
        />
      </div>
      <div class="card-side back">
        <img
          src="../../assets/知识卡片之十二个（枝头不变）/冬3个/2小雪/小雪反面1.webp"
          alt=""
        />
      </div>
    </div>
    <div class="card" style="position: absolute; top: 130px; left: 980px">
      <div class="card-side front">
        <img
          src="../../assets/知识卡片之十二个（枝头不变）/冬3个/2小雪/小雪正面.webp"
          alt=""
        />
      </div>
      <div class="card-side back">
        <img
          src="../../assets/知识卡片之十二个（枝头不变）/冬3个/2小雪/小雪反面2.webp"
          alt=""
        />
      </div>
    </div>
    <div class="left">
      <div @click="$router.push('/show/winter/1')" class="left-item">
        <div></div>
        <p>立冬</p>
      </div>
      <div class="left-item" @click="$router.push('/show/winter/2')">
        <div class="green"></div>
        <p>小雪</p>
      </div>
      <div @click="$router.push('/show/winter/3')" class="left-item">
        <div></div>
        <p>大雪</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headSrc:
        "https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/head_webp.webp",
      springSrc1:
        "https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/%E5%B0%8F%E9%9B%AA%E6%AD%A3%E9%9D%A2.webp",
      springSrc11:
        "https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/%E5%B0%8F%E9%9B%AA%E5%8F%8D%E9%9D%A21.webp",
      springSrc2:
        "https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/%E5%B0%8F%E9%9B%AA%E6%AD%A3%E9%9D%A2.webp",
      springSrc22:
        "https://chuanasirenzu207804-1317470869.cos.ap-guangzhou.myqcloud.com/19403/%E5%B0%8F%E9%9B%AA%E5%8F%8D%E9%9D%A22.webp",
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.con {
  max-width: 100vw;
  height: 500px;
  margin-bottom: 100px;
  margin-top: -10px;
  position: relative;
}

.head {
  width: 100%;
  height: 200px;
}

.card {
  position: relative;
  top: -75px;
  left: 180px;
  height: calc(560 * 2) px;
  width: calc(360 * 2) px;
  perspective: 4000px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-side {
  height: 600px;
  border-radius: 15%;
  width: 400px;
  padding: 10px;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  transition: all 0.5s linear;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card-side.front {
  img {
    width: 100%;
    height: 100%;
  }
}

.card-side.back {
  transform: rotateY(180deg);

  img {
    width: 100%;
    height: 100%;
  }
}

.card:hover .card-side.front {
  transform: rotateY(180deg);
}

.card:hover .card-side.back {
  transform: rotateY(360deg);
}

.left {
  top: 0;
  height: 1000px;
  width: 200px;
  margin-left: 40px;
  border-left: 0.5px solid blue;
  border-top: 0.1px solid #eee;
  color: blue;
  position: absolute;
  z-index: 10;

  .left-item {
    height: 20px;
    margin-top: 100px;
    position: relative;
    cursor: pointer;

    div {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid black;
      position: absolute;
      left: -10px;
    }

    p {
      padding-left: 20px;
    }
  }

  > div:first-child {
    margin-top: 200px;
  }

  > div:hover div {
    background-color: blue;
  }
}

.green {
  background-color: blue;
}
</style>
