<script>
import {
    PolarArea
} from "vue-chartjs";

export default {
    extends: PolarArea,
    mounted() {
        this.renderChart({
            labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
            datasets: [{
                data: [11, 16, 7, 18],
                backgroundColor: ["#50a5f1", "#34c38f", "#f1b44c", "#5b73e8"],
                label: "My dataset", // for legend
                hoverBorderColor: "#fff"
            }]
        }, {
            maintainAspectRatio: true,
            legend: {
                position: "top"
            }
        });
    }
};
</script>
