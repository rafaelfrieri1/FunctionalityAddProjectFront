<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <h3 class="card-title">
                <i class="tim-icons icon-chart-bar-32 text-primary "></i>Jobs vs Skills
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
            >
            </bar-chart>
          </div>
        </card>
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

export default {
  components: {
    BarChart,
    DataList,
  },
  data() {
    return {
      numBars: 6,
      list: [],
      jobsSkillsChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels:[],
          datasets: [
            {
              label: "Jobs vs Skills",
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
    };
  },
  computed: {},
  methods: {
    initChart() {
      // TODO: change to init bar chart with numBars for request
      this.$http.get('http://localhost:12345/popular-skills?size='+this.numBars).then( response => {
        if(response.status == "200") {
          let data = JSON.parse( JSON.stringify( response.body ) )

          this.jobsSkillsChart.chartData.labels = data.value
          this.jobsSkillsChart.chartData.datasets[0].data = data.total

          for(let i = 0; i < data.percentage_jobs.length; i++) {
            this.list.push(data.percentage_jobs[i]+'% of job opportunities require '+ data.value[i]+' skills')
          }
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
