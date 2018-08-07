<template>
<div id="newspro">
<h4>NEW<br/>
<span>新品</span>
</h4>
<ul class="news-list">
    <li v-for="(item,index) in items" :key="index" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <img :src="item.Img" />
    </li>
</ul>
</div>

</template>
<script>
export default{
   data () {
        return {
            items:[
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')},
                {Img:require('assets/NB-101.jpg')}
                
            ]
        }
    }
}
</script>
<style scoped>
h4{
    font-size:19px;
}
span{
    font-size:12px;
}

.news-list {
    padding: 0;
    list-style: none;
    width: 70vw;
    margin: 0 auto;
}

.news-list:after {
    display: block;
    content: '';
    clear: both;
}

.news-list li {
    margin: 10px 0;
}

</style>

