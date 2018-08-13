<template>
  <div class="exhibition-detail">
    <div class="crumbs">
      <router-link to="./artist">{{exhibition}}</router-link>
      <span>> {{meetingname}}</span>
    </div>
    <exmeeting></exmeeting>
    <eximglist></eximglist>
    <exaddress></exaddress>
  </div>
</template>

<script>
import exmeeting from '../components/exhibition/exmeeting'
import eximglist from '../components/exhibition/eximglist'
import exaddress from '../components/exhibition/exaddress'
export default {
  data () {
    return {
      exhibition: '展览信息',
      meetingname: '第41届中国(广州)国际家居博览会'
    }
  },
  methods: {},
  components: {
    exmeeting,
    eximglist,
    exaddress
  }
}
</script>
<style scoped>
.exhibition-detail {
  margin: 0 auto;
  width: 80vw;
}

.crumbs {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px rgba(0, 0, 0, 0.3) solid;
}
</style>
