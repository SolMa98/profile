let chartUtils = function (){
    let chartDrawing = (id, chartType, type, data) => {
        const chart = document.getElementById(id);

        let options = {
            responsive: false
        };

        if (type === '자격증') {
            options = {
                responsive : false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label;
                                let value = utils.formatDate(context.raw.toString());
                                return `${label}: ${value}`;
                            }
                        }
                    }
                }
            };
        }

        new Chart(chart, {
            type: chartType,
            data: data,
            options : options
        });
    }

    let makeChartData = (label, datasets) => {
        let resultData = {
            labels : [],
            datasets: [{
                label : label,
                data : [],
                borderWidth : 1
            }]
        }

        for(let data of datasets){
            resultData.labels.push(data.label);
            resultData.datasets[0].data.push(data.value);
        }

        return resultData;
    }

    return {
        init : function (){
        },
        chartDrawing,
        makeChartData
    }
}();

$(function (){
    chartUtils.init();
});