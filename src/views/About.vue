<template>
  <div class="about">
    <h1>current team:{{team}}</h1>
    <button @click="counter">counter</button>
    <p>{{$store.state.count}}</p>
    <p>Last team name clicked:{{$store.state.clickName}}</p>
    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "About",
    data() {
    return {
      team:this.$route.query.team,
    }
    },
  methods:{
    counter(){
      this.$store.commit('incrementMutation',this.team);
    }
  }
}
</script>

<style>
 .about{
   /* width: 100%; */
   height: 100vh;
   border: none;
   margin: 0px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 }
</style>
