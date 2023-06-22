<template>
  <div class="con">
    <img src="../../assets/knowCard/head.png" alt="" class="head" />
    <div class="card">
      <div class="card-side front">
        <img src="../../assets/knowCard/pure-brightenss/front.webp" alt="" />
      </div>
      <div class="card-side back">
        <img src="../../assets/knowCard/pure-brightenss/reverseV1.webp" alt="" />
      </div>
    </div>
    <div class="card" style="position: absolute; top: 130px; left: 980px;">
      <div class="card-side front">
        <img src="../../assets/knowCard/rain-water/front.webp" alt="" />
      </div>
      <div class="card-side back">
        <img src="../../assets/knowCard/pure-brightenss/reverseV2.webp" alt="" />
      </div>
    </div>
    <div class="left">
      <div @click="$router.push('/show/spring/1')" class="left-item">
        <div></div>
        <p>立春</p>
      </div>
      <div class="left-item" @click="$router.push('/show/spring/2')">
        <div ></div>
        <p>雨水</p>
      </div>
      <div @click="$router.push('/show/spring/3')" class="left-item">
        <div class="green"></div>
        <p>清明</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
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
  color: green;
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

  >div:first-child {
    margin-top: 200px;
  }


  >div:hover div {
    background-color: green;
  }
}

.green {
  background-color: green;
}
</style>
