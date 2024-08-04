let chartUtils = function (){
    let chartDrawing = (id, chartType, type, data) => {
        const chart = document.getElementById(id);

        let options = {
            responsive: false,
            plugins: {
                legend: {
                    onClick: null // 범례 클릭 이벤트 비활성화
                }
            }
        };

        if (type === '자격증') {
            options = {
                responsive : false,
                plugins: {
                    legend: {
                        onClick: null // 범례 클릭 이벤트 비활성화
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label;
                                let value = utils.formatDate(context.raw.toString());
                                return `${label}: ${value}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                // 문자열로 변환하여 천 단위 구분 기호를 제거
                                return value.toString().replace(/,/g, '');
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