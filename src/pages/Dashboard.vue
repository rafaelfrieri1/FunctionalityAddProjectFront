<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <h3 class="card-title">
                <i class="tim-icons icon-chart-bar-32 text-primary "></i># of Jobs vs. Popular Skills
              </h3>
              <base-input class="dropdown-black col-md-4 ml-auto" label="Bars">
                <select
                  id="bars"
                  class="form-control"
                  v-model="numBars"
                >
                  <option v-for="i in 9" :key="i" :value="i">{{i}}</option>
                </select>
              </base-input>
            </div>
          </template>
          
          <div class="chart-area">
            <bar-chart
              style="height: 100%"
              chart-id="blue-bar-chart"
              :chart-data="jobsSkillsChart.chartData"
              :gradient-stops="jobsSkillsChart.gradientStops"
              :extra-options="jobsSkillsChart.extraOptions"
              :key = "chartKey"
            >
            </bar-chart>
          </div>
        </card>
        <v-progress-circular
          :size="70"
          :width="7"
          color="green"
          indeterminate
          v-show="!searchCompleted"
        ></v-progress-circular>
      </div>

      <div class="col-lg-6 col-md2">
        <card type="tasks">
          <template slot="header">
            <h6 class="title d-inline">{{ $t("dashboard.percentage") }}</h6>
          </template>
          <div class="table-full-width table-responsive">
            <data-list
              :data="list"
            >
            </data-list>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/Charts/BarChart";
import * as chartConfigs from "@/components/Charts/config";
import DataList from "./Dashboard/DataList";
import config from "@/config";
import { BASE_API } from '@/constants'

export default {
  components: {
    BarChart,
    DataList,
  },
  data() {
    return {
      numBars: 5,
      list: [],
      chartKey : 0,
      searchCompleted : false,
      jobsSkillsChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData:{
          labels:[],
          datasets: [
            {
              label: "# of Jobs vs. Popular Skills",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
    }
  },
  watch: {
    numBars(val) {
      this.initChart()
    }
  },
  methods: {
    initChart() {
      this.searchCompleted = false
      this.list = []
      this.$http.get(BASE_API+'/popular-skills/?size='+encodeURIComponent(this.numBars)).then( response => {
        if(response.status == "200") {
          let data = JSON.parse( JSON.stringify( response.body ) )

          this.jobsSkillsChart.chartData.labels = data.value
          this.jobsSkillsChart.chartData.datasets[0].data = data.total

          for(let i = 0; i < data.percentage_jobs.length; i++) {
            this.list.push(data.percentage_jobs[i]+'% of job opportunities require '+ data.value[i]+' skills.')
          }
          this.chartKey += 1
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
    },
  },
  mounted() {
    this.i18n = this.$i18n;
    this.initChart();
  },
  beforeDestroy() {},
};
</script>
<style>
</style>
