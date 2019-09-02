getChassisInfo = () => {
    $('#showValue').click(() => {
        $.ajax('http://localhost:9999/getChassisInfo', {
            type: 'POST',
            dataType: 'json',
            timeOut: 1,
            success: (data) => {
                $('#brandName').removeClass('hidden');
                $('#chassisNumber').append(`<h1>${data.chassisNo}</h1>`);
            }
        })
    })
}

$('document').ready(() => {
    getChassisInfo();
})