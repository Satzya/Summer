const servAjax = () => {
    $('#signUp').click((event) => {
        event.preventDefault()
        let formData = $('#signUpFormData').serialize();
        console.log($('#signUpFormData'))
        $.ajax({
            type: 'POST',
            data: formData,
            url: '/signup',
            success: (result) => {
                $('#signUpDiv').hide();
                $('#homeScreenDiv').show();
            },
            error: (e) => {
                console.log(e)
            }
        })
    })
}

$(document).ready(() => {
    $('#homeScreenDiv').hide();
    servAjax();
})