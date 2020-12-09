<template>
  <div class="card">
    <div class="card-header">
      <h5 class="title">Skilled Based Search for Recruiters</h5>
    </div>
    <div class="card-body ">
      <form>
        <div class="form-row">
            <base-input class="col-md-6" label="Job ID" placeholder="Job ID"/>
            <base-input class="col-md-4" label="Profiles">
                  <select id="inputProfiles" class="form-control">
                    <option selected>Choose...</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
            </base-input>
        </div>
        <base-button type="primary" native-type="Submit">Search</base-button>
      </form>
      <div>
        <p>For the {{name}} position the most suitable users based on their skills are:</p>
        <ul>
          <li v-for="item in 10">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>
