<script>
import countTo from "vue-count-to";

export default {
    components: {
        countTo
    },
    props: ['total', 'series'],
    data() {
        return {
            chartOptions: {
                fill: { colors: ["#5b73e8"] },
                chart: {
                    type: "bar",
                    sparkline: { enabled: true }
                },
                plotOptions: {
                    bar: { columnWidth: "50%" }
                },
                labels: [1, 2, 3, 4, 5, 6, 7],
                xaxis: {
                    crosshairs: { width: 1 }
                },
                tooltip: {
                    fixed: { enabled: false },
                    x: { show: false },
                    y: {
                        title: { formatter: function (seriesName) { return ""; }}
                    },
                    marker: { show: false }
                }
            },
        };
    },
};
</script>

<template>
<div class="row">
    <div class="col-md-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="float-end mt-2">
                    <apexchart class="apex-charts" dir="ltr" width="70" height="40" :options="chartOptions" :series="series"></apexchart>
                </div>
                <div>
                    <h4 class="mb-1 mt-1">
                        $
                        <span data-plugin="counterup">
                            <countTo :startVal="0" :endVal="total" :duration="2000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">Total spend since last week</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
