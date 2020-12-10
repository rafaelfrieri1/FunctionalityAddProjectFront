<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/trending" :name="$t('sidebar.trendingSkills')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/recruiters" :name="$t('sidebar.recruiters')" icon="tim-icons icon-zoom-split"/>
        <sidebar-link to="/unpopular" :name="$t('sidebar.unpopular')" icon="tim-icons icon-alert-circle-exc"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
