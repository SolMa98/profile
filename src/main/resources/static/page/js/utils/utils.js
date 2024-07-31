let utils = function (){
    function formatDate(input) {
        const [year, month] = input.split('.');
        return `${year}년 ${month.padStart(2, '0')}월`;
    }

    return {
        init : function (){
        },
        formatDate
    }
}();

$(function (){
    utils.init();
});