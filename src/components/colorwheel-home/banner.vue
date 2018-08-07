<template>
<div id="bannerall">
    <div id="tit">
<h2>THE &nbsp;&nbsp;&nbsp;COLOR&nbsp;&nbsp;&nbsp; WHEEL&nbsp; &nbsp;&nbsp;GALLERY&nbsp;&nbsp;&nbsp;</h2>
<h5>专&nbsp;&nbsp;注&nbsp;&nbsp;于&nbsp;&nbsp;消&nbsp;&nbsp;费&nbsp;&nbsp;级&nbsp;&nbsp;艺&nbsp;&nbsp;术&nbsp;&nbsp;品&nbsp;&nbsp;</h5>
    </div>
    <div class="more">
      <span>MORE></span>
    </div>
</div>
</template>
<style>
#bannerall {
  background-size: 100% 100%;
  height: 90vh;
  background-image: url(../../assets/banner.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  flex-direction: column;
}
.more{
    border:1px solid #ffffff;
    border-radius: 10px;
    color:#ffffff;
    margin-top:4%;
}
span{
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:6px;
}
h2{
    font-size:34px;
}
h5{
    font-size:16px;
}
@media (max-width: 767px) {
  #bannerall {
    height: 40vh;
    background-size: 100% 100%;
  }
  h2 {
    font-size: 24px;
  }
  h5{
      font-size:12px;
  }
  .more{
    font-size:4px;
}
}
</style>

