
<template>
  <div class="live">
    <div ref="twitchExample"></div>
  </div>
















</template>
 
 








<style scoped>
.live {
  margin-top: 150px;
}
</style>







<script>
export default {
  data() {
    return {


    }
  },

  mounted() {
    const twitchRef = this.$refs.twitchExample;
    let script = document.createElement('script');
    script.setAttribute('src', 'https://player.twitch.tv/js/embed/v1.js');
    script.addEventListener('load', () => {
      const options = {
        width: "620",
        height: "378",
        channel: "wl2m_nirawiris",
        layout: "video"
      };
      new window.Twitch.Embed(twitchRef, options);
    }, { once: true });
    document.body.appendChild(script);
  },
}
</script>

