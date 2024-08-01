let profile = function (){
    let profilePageEvent = () => {
        $(document).on('click', '.detail-tab', function (e){
            let detailSelectedTab = e.target;

            if(!detailSelectedTab.classList.contains("detail-tab-selected")){
                let detailTabParent = e.target.closest('.main-profile-details-section-1');
                for (let detailTab of detailTabParent.children) {
                    detailTab.classList.remove('detail-tab-selected');
                    document.getElementById('detail-' + detailTab.dataset.key).classList.add('display-none');
                }
                detailSelectedTab.classList.add('detail-tab-selected');
                document.getElementById('detail-' + detailSelectedTab.dataset.key).classList.remove('display-none');
            }
        });

        let certificateData = [
            { label : 'ITQ 액셀', value : 2014.12 },
            { label : '컴퓨터 활용능력 2급', value : 2015.07 },
            { label : 'ITQ 액세스', value : 2015.10 },
            { label : '정보처리기능사', value : 2019.05 }
        ];

        let certificateChartData = chartUtils.makeChartData('자격증 취득일', certificateData);
        chartUtils.chartDrawing("certificateChart", "line", "자격증", certificateChartData);
        certificateTableDrawing(certificateData);

        let gpaData = [
            {label : '1학년 1학기', value : 3.83 },
            {label : '1학년 2학기', value : 3.92 },
            {label : '2학년 1학기', value : 4.5 },
            {label : '2학년 2학기', value : 4.5 },
            {label : '3학년 1학기', value : 4.21 },
            {label : '3학년 2학기', value : 3.3 }
        ];
        let gpaChartData = chartUtils.makeChartData('학점', gpaData);

        chartUtils.chartDrawing("careerChart", "line", "학점", gpaChartData);
    }

    function certificateTableDrawing(datasets) {
        let tableHtml = '';
        let count = 1;
        for(let data of datasets){
            tableHtml += `<tr>
                            <td>${count++}</td>
                            <td>${data.label}</td>
                            <td>${utils.formatDate(data.value.toString())}</td>
                          </tr>`;
        }
        $('#detailTable').append(tableHtml);
    }

    return {
        init : function (){
            profilePageEvent()
        },
    }
}();

$(function (){
    profile.init();
});