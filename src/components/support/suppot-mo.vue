<template>
<div>
  <div v-for="(item,index) in mainTittleList" :key="index" class="FAQ-box">
    <div class="tittle-box">
      {{item.tittle}}
    </div>
    <div v-for="(secItem,secIndex) in answerTittleList[index]" :key="secIndex" class="answer-box">
      <h3>{{answerTittleList[index][secIndex].tittle}}</h3>
      <ul>
        <li v-for="(answerItem,answerIndex) in answerList[index]" :key="answerIndex"
            v-if="answerItem.show == 1">
          {{answerItem.msg}}
        </li>
        <li v-for="(answerItem,answerIndex) in answerList" :key="answerIndex"
            v-if="answerItem.show == 2">
          {{answerItem.msg}}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['answerTittleList', 'mainTittleList', 'answerList']
}
</script>

<style>
.FAQ-box {
  margin-top: 3rem;
  padding-bottom: 1rem;
  text-align: left;
  background-color: #fafafa;
  border-bottom: dashed #FFF .5rem;
}

.tittle-box {
  padding: .5rem 1rem .5rem 3rem;
  border: 1px solid #353535;
  border-radius: 20px;
  font-size: 14px;
}

.answer-box h3 {
  margin: 1.5rem 0 .5rem 0;
  font-size: 14px;
  font-weight: bold;
}

.answer-box ul {
  padding: 0 0 0 1.3rem;
}

.answer-box li {
  line-height: 3rem;
}

.answer-box,
.tittle-box {
  margin: 0 auto;
  padding-left: 3rem;
  width: 40vw;
}

@media (max-width: 979px) {
  .answer-box,
  .tittle-box {
    width: 60vw;
  }
}

@media (max-width: 666px) {
  .answer-box,
  .tittle-box {
    width: 80vw;
  }
}
</style>
