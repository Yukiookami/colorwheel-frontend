<template>
 <div id="home">
   <banner></banner>
   <news></news>
   <artistlist></artistlist>
   <artist-mo :content = 'artistList' :layoutClassName = 'layoutClassName'></artist-mo>
   <more></more>
   <storepic></storepic>
</div>
</template>

<script>
import banner from './colorwheel-home/banner'
import news from './colorwheel-home/news'
import artistlist from './colorwheel-home/artistlist'
import artistMo from '../components/artist/arist-mo'
import more from '../components/colorwheel-home/more'
import storepic from '../components/colorwheel-home/storepic'
export default {
  name: 'home',
  data () {
    return {
      layoutClassName: 'arti col-lg-4 col-md-6 col-xs-12',
      artistList: [
        {
          production: require('../assets/art1.png'),
          spell: '孙意超/ Mr. Sun Yichao',
          name:
            '2016年 沈阳1905创意园个展;2016年 上海青年艺术博览会;2016年 波士顿艺术周;2015年 辽宁青年美术家展;2015年 798悦美术馆 际当代艺术展;2015年 国防艺术区当代艺术展;2014年 无国界中国当代艺术跨国展;2013年 辽宁青年美术家展;2013年 迎全运树新风美术联展'
        },
        {
          production: require('../assets/art1.png'),
          spell: '孙意超/ Mr. Sun Yichao',
          name:
            '2016年 沈阳1905创意园个展;2016年 上海青年艺术博览会;2016年 波士顿艺术周;2015年 辽宁青年美术家展;2015年 798悦美术馆 际当代艺术展;2015年 国防艺术区当代艺术展;2014年 无国界中国当代艺术跨国展;2013年 辽宁青年美术家展;2013年 迎全运树新风美术联展'
        },
        {
          production: require('../assets/art1.png'),
          spell: '孙意超/ Mr. Sun Yichao',
          name:
            '2016年 沈阳1905创意园个展;2016年 上海青年艺术博览会;2016年 波士顿艺术周;2015年 辽宁青年美术家展;2015年 798悦美术馆 际当代艺术展;2015年 国防艺术区当代艺术展;2014年 无国界中国当代艺术跨国展;2013年 辽宁青年美术家展;2013年 迎全运树新风美术联展'
        },
        {
          production: require('../assets/art1.png'),
          spell: '孙意超/ Mr. Sun Yichao',
          name:
            '2016年 沈阳1905创意园个展;2016年 上海青年艺术博览会;2016年 波士顿艺术周;2015年 辽宁青年美术家展;2015年 798悦美术馆 际当代艺术展;2015年 国防艺术区当代艺术展;2014年 无国界中国当代艺术跨国展;2013年 辽宁青年美术家展;2013年 迎全运树新风美术联展'
        },
        {
          production: require('../assets/art1.png'),
          spell: '孙意超/ Mr. Sun Yichao"',
          name:
            '2016年 沈阳1905创意园个展;2016年 上海青年艺术博览会;2016年 波士顿艺术周;2015年 辽宁青年美术家展;2015年 798悦美术馆 际当代艺术展;2015年 国防艺术区当代艺术展;2014年 无国界中国当代艺术跨国展;2013年 辽宁青年美术家展;2013年 迎全运树新风美术联展'
        },
        {
          production: require('../assets/art1.png'),
          spell: '孙意超/ Mr. Sun Yichao',
          name:
            '2016年 沈阳1905创意园个展;2016年 上海青年艺术博览会;2016年 波士顿艺术周;2015年 辽宁青年美术家展;2015年 798悦美术馆 际当代艺术展;2015年 国防艺术区当代艺术展;2014年 无国界中国当代艺术跨国展;2013年 辽宁青年美术家展;2013年 迎全运树新风美术联展'
        }
      ]
    }
  },
  components: {
    banner,
    news,
    artistlist,
    artistMo,
    more,
    storepic
  }
}
</script>
<style>
.navbar {
  margin-bottom: 0;
}
.spell {
  font-size: 12px;
  color: #353535;
  margin-top: 1.5rem;
}
.name {
  font-size: 14px;
  color: #353535;
  margin-top: 1.5rem;
}
.arti {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
}
#artistMo {
  background-color: #f8f8f8;
}
</style>
