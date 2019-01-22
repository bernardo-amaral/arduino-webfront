<template>
  <div class="content">
    <div class="md-layout">

      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="green" data-alignment="right">
          <template slot="header">
            <md-icon>toys</md-icon>
          </template>

          <template slot="content">
            <p class="category">Fan status</p>
            <h3 class="title">Activated</h3>
          </template>

          <template slot="footer">
            <div class="stats">
                <md-icon>wb_cloudy</md-icon>
                14ºc
            </div>
          </template>
        </stats-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-200 md-size-50"></div>

      <div class="md-layout-item md-medium-size-200 md-xsmall-size-200 md-size-100">
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Status:</span>
            <md-tabs md-sync-route class="md-success" md-alignment="left">

              <md-tab id="tab-home" md-label="All" md-icon="cloud">
                <nav-logs-table></nav-logs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Success" md-icon="code">
                <nav-logs-table></nav-logs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="Errors" md-icon="bug_report">
                <nav-logs-table></nav-logs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>


    </div>
  </div>
</template>

<script>
import { StatsCard, NavTabsCard, NavLogsTable } from "@/components";

export default {
    components: {
        StatsCard,
        NavTabsCard,
        NavLogsTable
    },
    data() {
        return {};
    }
};
</script>
