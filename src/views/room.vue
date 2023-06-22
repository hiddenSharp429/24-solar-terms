<!-- 动画播放房间 -->
<template>
  <div class="con">
    <div class="mp4">
      <video src="../../src/assets/totalAnimation.mp4" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.con {
  position: relative;
  height: 100vh;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mp4 {
  position: relative;
  width: 80%;
  padding-top: 45%; /* 4:3 比例，用于设置视频容器高度 */
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
