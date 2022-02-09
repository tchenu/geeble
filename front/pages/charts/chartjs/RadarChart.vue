<script>
import {
    Radar
} from "vue-chartjs";

export default {
    extends: Radar,
    mounted() {
        this.renderChart({
            labels: [
                "Eating",
                "Drinking",
                "Sleeping",
                "Designing",
                "Coding",
                "Cycling",
                "Running"
            ],
            datasets: [{
                    label: "Desktops",
                    backgroundColor: "rgba(241, 180, 76 , 0.2)",
                    borderColor: "#f1b44c",
                    pointBackgroundColor: "#f1b44c",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#f1b44c",
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: "Tablets",
                    backgroundColor: "rgba(91, 140, 232, 0.2)",
                    borderColor: "#5b73e8",
                    pointBackgroundColor: "#5b73e8",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#5b73e8",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        }, {
            maintainAspectRatio: true,
            legend: {
                position: "top"
            }
        });
    }
};
</script>
