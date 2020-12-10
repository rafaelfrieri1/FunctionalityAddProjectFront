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
            <data-list></data-list>
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
      jobsSkillsChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
          datasets: [
            {
              label: "Countries",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 20, 10, 80, 100, 45],
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
