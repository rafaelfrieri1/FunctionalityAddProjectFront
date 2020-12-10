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

    <div class="col-12 card" v-show="searchCompleted">
      <div class="card-header">
        <h5 class="title">Search results</h5>
      </div>
      <p>
        For the {{ job.name }} position the most suitable users based on their
        skills are:
      </p>
      <ul>
        <li v-for="item in job.candidates">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobid: '',
      numProfiles: 20,
      searchCompleted: false,
      job: {
        name: '',
        candidates: []
      }
    }
  },
  methods: {
    search() {
      // TODO: make request
      console.log(this.jobid, this.numProfiles)
      this.name = 'Torre'
      for (let i = 0; i < this.numProfiles; i++) {
        this.job.candidates.push(i)
      }
      this.searchCompleted = true
    }
  }
};
</script>
<style>
</style>
