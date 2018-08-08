<template>
    <div id="artist-list">
        <div id="art">
            <h3>艺术家</h3>
            <span>观看影片&nbsp;&nbsp;
            <img src="../../assets/videoicon.png"></span>
        </div>
        </div>
</template>
<style scoped>
#art{
    background-size: 100% 100%;
    background-image: url(../../assets/art.jpg);
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom:2%;
}
h3{
    color:#ffffff;
}
span{
    color:#ffffff;
    font-size:6px;
    margin-top:1.5%;
}
img{
    width:20%;
    height:20%;
}
@media (max-width: 992px) {
 #art {
    height:60vh;
  }
}
@media (max-width: 767px) {
  #art {
    height:30vh;
  }
}
</style>
