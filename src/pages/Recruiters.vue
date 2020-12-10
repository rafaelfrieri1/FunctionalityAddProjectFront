<template>
  <div class="row">
    <div class="col-12 card">
      <div class="card-header">
        <h5 class="title">Skilled Based Search for Recruiters</h5>
      </div>
      <div class="card-body">
        <form @submit="search">
          <div class="form-row">
            <base-input class="col-md-6" label="Job ID" placeholder="Job ID" v-model="jobid" required/>
            <base-input class="col-md-4" label="Profiles" >
              <select
                id="inputProfiles"
                class="form-control"
                v-model="numProfiles"
              >
                <option selected :key="20" :value="20">20</option>
                <option :key="50" :value="50">50</option>
                <option :key="100" :value="50">100</option>
              </select>
            </base-input>
          </div>
          <base-button type="primary" native-type="Submit">Search</base-button>
        </form>
      </div>
    </div>

    <div class="col-12 card" v-show="searchStarted">
      <div class="card-header">
        <h5 class="title">Search results</h5>
      </div>
      <v-progress-circular
        :size="70"
        :width="7"
        color="green"
        indeterminate
        v-show="!searchCompleted"
      ></v-progress-circular>
      <div v-show="searchCompleted">
        <p>
          For the {{ job.name }} position the most suitable users based on their
          skills are:
        </p>
        <div class="row">
          <div class="col-md-4" v-for="user in job.candidates" :key="user.username">
            <user-card :user="user"></user-card>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
import { BASE_API } from '@/constants'

export default {
  components: {
    UserCard
  },
  data() {
    return {
      jobid: '',
      numProfiles: 20,
      searchCompleted: false,
      searchStarted: false,
      job: {
        name: '',
        candidates: []
      }
    }
  },
  methods: {
    search() {
      this.searchStarted = true
      this.$http.get(BASE_API+'/strength-based-search/?job-id='+encodeURIComponent(this.jobid)+'&size='+encodeURIComponent(this.numProfiles)).then( response => {
        if(response.status == "200") {
          let data = JSON.parse( JSON.stringify( response.body ) )
          this.job.name = data.jobName
          this.job.candidates = data.employees
          this.searchCompleted = true
        }
      })
      .catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;
        }
      });
    }
  }
};
</script>
<style>
</style>
