<script>
import {
    Doughnut
} from "vue-chartjs";

export default {
    extends: Doughnut,
    mounted() {
        this.renderChart({
            labels: ["Desktops", "Tablets"],
            datasets: [{
                data: [300, 210],
                backgroundColor: ["#5b73e8", "#ebeff2"],
                hoverBackgroundColor: ["#5b73e8", "#ebeff2"],
                hoverBorderColor: "#fff",
                borderWidth: 0,
                radius: "90%",
                innerRadius: "75%"
            }]
        }, {
            maintainAspectRatio: true
        });
    }
};
</script>
