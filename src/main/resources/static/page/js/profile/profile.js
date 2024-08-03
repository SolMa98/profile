let profile = function (){
    let profilePageEvent = () => {
        // 탭 선택 이벤트
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

        // 자기소개서
        let coverLatterData = `자기소개서\n안녕하세요. 저는 **[이름]**입니다. 제 경로와 경험을 통해, 변화와 도전에 대한 열린 마음과 문제 해결 능력을 키우게 되었습니다. 이 자기소개서를 통해 제 자신을 좀 더 자세히 소개하고, 제가 귀사에서 어떻게 기여할 수 있을지 설명드리고자 합니다.\n저는 **[대학교/전문대학]**에서 **[전공명]**을 전공하며, **[학위/수료증]**을 취득했습니다. 학업 기간 동안 다양한 프로젝트에 참여하며 팀워크와 리더십을 배울 수 있었습니다. 특히, **[특정 프로젝트]**에서는 팀원으로서의 역할을 수행하며 문제 해결 능력과 협업 능력을 키울 수 있었습니다. 이 경험은 제게 새로운 기술에 대한 빠른 적응력과 팀원 간의 원활한 소통의 중요성을 일깨워주었습니다.\n그 이후, **[회사명]**에서 **[직무]**로 일하면서 **[구체적인 업무/프로젝트]**를 담당하였습니다. 이 과정에서 **[업무와 관련된 구체적인 성과]**를 달성하며, 실제 업무에서의 실력과 경험을 쌓을 수 있었습니다. 예를 들어, **[특정 성과나 프로젝트의 성과]**를 통해 **[성과를 통한 구체적인 변화/향상]**을 이루어냈습니다. 이러한 경험들은 저의 문제 해결 능력과 업무에 대한 책임감을 더욱 확고히 하는 계기가 되었습니다.\n저의 강점 중 하나는 **[강점/특징]**입니다. 이 강점은 **[강점을 발휘한 사례]**를 통해 개발되었으며, 이를 통해 **[강점을 통해 얻은 결과]**를 경험할 수 있었습니다. 또한, **[기술/지식]**에 대한 깊은 이해와 끊임없는 자기 개발은 제 업무에 큰 도움이 되었으며, 이를 통해 **[업무에서의 구체적인 기여]**를 할 수 있었습니다.\n제가 귀사에 지원한 이유는 **[귀사에 대한 관심/특정 이유]**입니다. 귀사의 **[특정 프로젝트/비전/문화]**에 깊은 인상을 받았으며, 제 경력과 경험이 귀사의 목표와 잘 맞아떨어진다고 생각합니다. 저는 **[귀사에서 맡고 싶은 역할/기여하고 싶은 분야]**에 적극적으로 참여하여 귀사의 **[구체적인 목표/프로젝트]**에 기여하고자 합니다.\n끝으로, 제 경력과 경험을 바탕으로 귀사에서 새로운 도전과 기회를 맞이하며, 함께 성장해 나가길 희망합니다. 제 자기소개서를 읽어주셔서 감사드리며, 면접을 통해 더 자세히 뵙기를 기대합니다.\n감사합니다.`;
        $('#coverLetter').text(coverLatterData);

        // 자격증
        let certificateData = [
            { label : 'ITQ 액셀', value : 2014.12 },
            { label : '컴퓨터 활용능력 2급', value : 2015.07 },
            { label : 'ITQ 액세스', value : 2015.10 },
            { label : '정보처리기능사', value : 2019.05 }
        ];
        let certificateChartData = chartUtils.makeChartData('자격증 취득일', certificateData);
        chartUtils.chartDrawing("certificateChart", "line", "자격증", certificateChartData);
        tableDrawing(certificateData, 'certTable');

        // 학교
        let schoolData = [
            {label : 'XX고등학교', value : '2014-02-01 ~ 2017-02-01'},
            {label : 'XXX대학교', value : '2017-03-01 ~ 2021-02-01'}
        ]
        tableDrawing(schoolData, 'detailSchool');

        // 학점
        let gpaData = [
            {label : '1학년 1학기', value : 3.83 },
            {label : '1학년 2학기', value : 3.92 },
            {label : '2학년 1학기', value : 4.5 },
            {label : '2학년 2학기', value : 4.5 },
            {label : '3학년 1학기', value : 4.21 },
            {label : '3학년 2학기', value : 3.3 }
        ];
        let gpaChartData = chartUtils.makeChartData('학점', gpaData);
        chartUtils.chartDrawing("schoolChart", "line", "학점", gpaChartData);

        // 경력
        let careerData = [
            {'소속' : 'XXX소프트'},
            {'근무 기간' : '2021-06-21 ~ 2023-10-28'},
            {'담당 업무' : 'XX개발'},
            {'담당 업무' : 'XX개발'},
            {'담당 업무' : 'XXX 유지보수'}
        ];
        careerTableDrawing(careerData);
    }

    function tableDrawing(datasets, tableId) {
        let tableHtml = '';
        let count = 1;
        for(let data of datasets){
            tableHtml += `<tr>
                            <td>${count++}</td>
                            <td>${data.label}</td>
                            <td>${tableId !== 'certTable' ? data.value : utils.formatDate(data.value.toString())}</td>
                          </tr>`;
        }
        $('#' + tableId).append(tableHtml);
    }

    function careerTableDrawing(datasets) {
        let prevKey = '';
        let tableHtml = '';
        for(let data of datasets){
            let currentKey = Object.keys(data)[0];
            tableHtml += `<tr>
                            <td class="career-attribute">${currentKey !== prevKey ? currentKey : ''}</td>
                            <td>${data[currentKey]}</td>
                          </tr>`;

            prevKey = currentKey;
        }
        $('#detailCareer').append(tableHtml);
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