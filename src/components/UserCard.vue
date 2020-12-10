<template>
  <card type="user">
    <p class="card-text">
    </p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <a href="#">
        <img v-if="user.picture != null" class="avatar" :src="user.picture" alt="...">
        <img v-else src="../assets/images/profile.jpg" class="avatar" alt="...">
        <h5 class="title">{{user.name}}</h5>
      </a>
      <p class="description">
        Score: {{user.score}}
      </p>
    </div>
    <p></p>
    <p class="card-description">
      Link to Bio: <a :href="getLink(user.username)">{{user.username}}</a>
    </p>
  </card>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    methods: {
      getLink(username) {
        return "https://bio.torre.co/en/"+username
      }
    }
  }
</script>
<style>
</style>
