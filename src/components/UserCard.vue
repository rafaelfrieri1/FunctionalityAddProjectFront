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
        <img class="avatar" :src="user.picture" onerror="this.onerror=null; this.src='src/assets/images/profile.png'" alt="...">
        <h5 class="title">{{user.name}}</h5>
      </a>
      <p class="description">
        Score: {{user.score}}
      </p>
    </div>
    <p></p>
    <p class="card-description">
      <a>https://bio.torre.co/en/{{user.username}}</a>
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
    }
  }
</script>
<style>
</style>
