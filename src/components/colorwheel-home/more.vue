<template>
<div id="more">
<div class="more">
      <span>MORE></span>
    </div>
</div>
</template>
<style scoped>
#more{
  display: flex;
  justify-content: center;
  margin-bottom:2%;
}
.more {
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  }
span {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6px;
}
@media (max-width: 767px) {
.more{
  font-size:4px;
}
}
</style>
