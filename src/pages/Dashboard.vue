<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <card type="chart">
          <template slot="header">
            <h3 class="card-title"><i class="tim-icons text-info "></i>Jobs vs Skills</h3>
          </template>
          <div class="chart-area">
            <bar-chart style="height: 100%"
                       chart-id="blue-bar-chart"
                       :chart-data="blueBarChart.chartData"
                       :gradient-stops="blueBarChart.gradientStops"
                       :extra-options="blueBarChart.extraOptions">
            </bar-chart>
          </div>
        </card>
      </div>

      <div class="col-lg-6 col-md2">
        <card type="tasks">
          <template slot="header">
            <h6 class="title d-inline">{{$t('dashboard.percentage')}}</h6>
            <p class="card-category d-inline">{{$t('dashboard.today')}}</p>
          </template>
          <div class="table-full-width table-responsive">
            <data-list></data-list>
          </div>
        </card>
      </div>
    </div>

    <base-dropdown menu-classes="dropdown-black"
                  title-classes="btn btn-secondary"
                  title="Bars">
      <h6 class="dropdown-header">Dropdown header</h6>
      <a class="dropdown-item" href="#" v-for="i in 9">{{i}}</a>
    </base-dropdown>
  </div>
</template>

<script>
  import BarChart from '@/components/Charts/BarChart';
  import * as chartConfigs from '@/components/Charts/config';
  import DataList from './Dashboard/DataList';
  import config from '@/config';

  export default {
    components: {
      BarChart,
      DataList
    },
    data() {
      return {
        blueBarChart: {
          extraOptions: chartConfigs.barChartOptions,
          chartData: {
            labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
            datasets: [{
              label: "Countries",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 20, 10, 80, 100, 45],
            }]
          },
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.4, 0],
        }
      }
    },
    computed: {
    },
    methods: {
      initChart(index) { // TODO: change to init bar chart
        
      }
    },
    mounted() {
      this.i18n = this.$i18n;
      this.initChart(0);
    },
    beforeDestroy() {
    }
  };
</script>
<style>
</style>
