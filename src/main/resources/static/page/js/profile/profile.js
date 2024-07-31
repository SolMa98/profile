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

        chartUtils.chartDrawing("certificateChart", "line", "자격증", {
            labels: ['ITQ 엑셀', '컴퓨터 활용능력 2급', 'ITQ 액세스', '정보처리기능사'],
            datasets: [{
                label: '자격증 취득일',
                data: [2014.12, 2015.07, 2015.10, 2019.05],
                borderWidth: 1
            }]
        });
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