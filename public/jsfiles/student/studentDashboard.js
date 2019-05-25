
$(document).ready(() => {
    $('#here').html('abc');
    $('#subjectDetails').hide();
    $('#personalDetails').hide();
    // $('#subjectDetails').hidden = false;
});

$('#toggle').click(() => {
    // $('#here').hide();
    $('#here').addClass('added');
})

$('#subjectDetailsButton').click(() => {
    $('#studentDashboard').hide();
    $('#subjectDetails').show();
    $('#personalDetails').show();
})
