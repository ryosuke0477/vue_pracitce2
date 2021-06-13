<template>
  <div class="home">
    <h1>チーム一覧</h1>
    <div class="nav" v-for="team in teams" :key="team.id">
      <router-link :to="{path: '/about', query: {team: team.name}}">{{team.name}}</router-link>
      <!-- <router-link to="/about">Team_B</router-link>
      <router-link to="/about">Team_C</router-link> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    data() {
    return {
      teams: [
        {
          id: "c36136ef-552f-4dc9-84b6-65ecb8574e81",
          name: "Team_A",
        },
        {
          id: "ed0459f5-716d-4ef4-99ba-5dc750dfe0d0",
          name: "Team_B",
        },
        {
          id: "60d0d5d5-8ce9-41d9-a65b-13a090c10ae1",
          name: "Team_C",
        },
      ],
    };
  }
}
</script>

<style>
 .home{
   /* width: 100%; */
   height: 100vh;
   /* border: none; */
   margin: 0px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 }
 .nav{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 }

</style>
