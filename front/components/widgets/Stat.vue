<script>
import countTo from "vue-count-to";
import { statService } from "../../helpers/stat.service"

export default {
    components: {
        countTo
    },
    data() {
        return {
            total: 0,
            series: [{
                data: []
            }],
            chartOptions: {
                fill: {
                    colors: ["#5b73e8"]
                },
                chart: {
                    type: "bar",
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%"
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7],
                xaxis: {
                    crosshairs: {
                        width: 1
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return "";
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },
            growthChartOptions: {
                fill: {
                    colors: ["#f1b44c"]
                },
                chart: {
                    type: "bar",
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%"
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                xaxis: {
                    crosshairs: {
                        width: 1
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return "";
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },
            orderseries: [70],
            orderRadial: {
                fill: {
                    colors: ["#34c38f"]
                },
                chart: {
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "60%"
                        },
                        track: {
                            margin: 0
                        },
                        dataLabels: {
                            show: false
                        }
                    }
                }
            },
            customerseries: [55],
            customerRadial: {
                fill: {
                    colors: ["#5b73e8"]
                },
                chart: {
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "60%"
                        },
                        track: {
                            margin: 0
                        },
                        dataLabels: {
                            show: false
                        }
                    }
                }
            }
        };
    },
    async fetch() {
        const earn = await statService.adminEarn();

        this.total = earn.total
        this.series = [{ data: earn.detail.map(day => day['price'])}]
    }
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
    <div class="col-md-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="float-end mt-2">
                    <apexchart class="apex-charts" type="radialBar" dir="ltr" width="45" height="45" :options="orderRadial" :series="orderseries"></apexchart>
                </div>
                <div>
                    <h4 class="mb-1 mt-1">
                        <span data-plugin="counterup">
                            <countTo :startVal="100" :endVal="5643" :duration="2000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">Orders</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-danger me-1">
                        <i class="mdi mdi-arrow-down-bold me-1"></i>0.82%
                    </span>
                    since last week
                </p>
            </div>
        </div>
    </div>
    <!-- end col-->

    <div class="col-md-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="float-end mt-2">
                    <apexchart class="apex-charts" type="radialBar" dir="ltr" width="45" height="45" :options="customerRadial" :series="customerseries"></apexchart>
                </div>
                <div>
                    <h4 class="mb-1 mt-1">
                        <span data-plugin="counterup">
                            <countTo :startVal="1000" :endVal="45254" :duration="2000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">Customers</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-danger me-1">
                        <i class="mdi mdi-arrow-down-bold me-1"></i>6.24%
                    </span>
                    since last week
                </p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="float-end mt-2">
                    <apexchart class="apex-charts" dir="ltr" width="70" height="40" :options="growthChartOptions" :series="series"></apexchart>
                </div>
                <div>
                    <h4 class="mb-1 mt-1">
                        +
                        <span data-plugin="counterup">12.58</span>%
                    </h4>
                    <p class="text-muted mb-0">Growth</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-success me-1">
                        <i class="mdi mdi-arrow-up-bold me-1"></i>10.51%
                    </span>
                    since last week
                </p>
            </div>
        </div>
    </div>
    <!-- end col-->
</div>
<!-- end row-->
</template>
