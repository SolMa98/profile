let chartUtils = function (){
    let chartDrawing = (id, chartType, type, data) => {
        const chart = document.getElementById(id);

        let options = {};
        if (type === '자격증') {
            options = {
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

    return {
        init : function (){
        },
        chartDrawing
    }
}();

$(function (){
    chartUtils.init();
});