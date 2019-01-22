<template>
  <div>
    <md-table v-model="logHistory" @md-selected="onSelect">
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-auto-select>
        <md-table-cell>{{ item.datehour }}</md-table-cell>
        <md-table-cell>{{ item.text }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
    name: "nav-logs-table",
    data() {
        return {
            selected: [],
            logHistory: [
                {
                    datehour: "22-01-2019 12:00:02",
                    text: "Fan started"
                },
                {
                    datehour: "22-01-2019 12:00:02",
                    text: "Fan speed decreased to 30%"
                },
                {
                    datehour: "22-01-2019 12:00:02",
                    text: "Fan speed increased to 80%"
                },
                {
                    datehour: "22-01-2019 12:00:02",
                    text: "Fan stopped"
                },
                {
                    datehour: "22-01-2019 12:00:02",
                    text: "Fail on fan starting, not response"
                }
            ]
        };
    },
    methods: {
        onSelect: function(items) {
            this.selected = items;
        }
    }
};
</script>
