const logout1 = () => {
    $('#logoutButton').click(() => {
        $.ajax({
            type: 'POST',
            url: '/logout',
            success: () => {
                $('#signUpDiv').show();
                $('#homeScreenDiv').hide();
            },
            error: (e) => {
                console.log(e)
            }
        })
    })
}



$(document).ready(() => {
    logout1()
})