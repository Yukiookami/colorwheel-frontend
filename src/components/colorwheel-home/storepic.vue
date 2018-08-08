<template>
<div id="store">
    <img class="store1" src="../../assets/store1.jpg">
    <img class="store2" src="../../assets/store2.jpg">
</div>
</template>

<style scoped>
#store {
    display: flex;
}
.store1 {
    display:flex;
    justify-content: flex-start;
    flex-direction: row;
    flex:1;
    height:60vh;
}
.store2 {
    display:flex;
    justify-content: flex-end;
    flex-direction: row;
    flex:1;
    height:60vh;
}
@media (max-width: 1024px) {
 .store1 {
    display:flex;
    width:50%;
    flex-direction: row;
    flex:1;
    height:60vh;
}
.store2 {
    display:flex;
    flex-direction: row;
    flex:1;
    height:60vh;
}
}
@media (max-width: 992px) {
 .store1 {
    display:flex;
    flex-direction: row;
    flex:1;
    height:50vh;
}
.store2 {
    display:flex;
    flex-direction: row;
    flex:1;
    height:50vh;
}
}
@media (max-width: 767px) {
  .store1 {
    display:flex;
    justify-content: flex-start;
    flex-direction: row;
    flex:1;
    height:30vh;
}
.store2 {
    display:flex;
    justify-content: flex-end;
    flex-direction: row;
    flex:1;
    height:30vh;
}
}
/* .clearfloat:after {
    display:block;
    clear:both;
    content:"";
    visibility:hidden;
    height:0
} */
</style>
