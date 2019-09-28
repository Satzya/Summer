
$(document).ready(() => {
    $('#here').html('abc');
    $('#subjectDetails').hide();
    $('#personalDetails').hide();
    // $('#subjectDetails').hidden = false;
    buttonDisplay();
});

const buttonDisplay = () => {
    $('#studentDashboard').append(
        `<button id="dynamicButton">Dynamic Button</button>`
    )
    buttonClick();
}

const buttonClick = () => {
    $('#dynamicButton').click((k) => {
        $('#showDetails').html(`<h1>Clicked</h1>`);
    })
}

$('#toggle').click(() => {
    // $('#here').hide();
    $('#here').addClass('added');
})

$('#subjectDetailsButton').click(() => {
    $('#studentDashboard').hide();
    $('#subjectDetails').show();
    $('#personalDetails').show();
})
