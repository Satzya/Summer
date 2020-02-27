const getFormData = () => {
    $('#finalSubmit').click(() => {
        let formData = $('#formData').serialize();
        $.ajax({
            type: 'POST',
            data: formData,
            url: '/student/formData',
            success: (formData) => {
                alert(formData)
            },
            error: (err) => {
                console.log(err);
            }
        })
    })
}

$(document).ready(() => {
    $.ajax({
        type: 'get',
        url: '/dataTable/content',
        success: (dataSet) => {
            $('#tableData').dataTable({
                data: dataSet.value,
                columns: [
                    { title: "Name" },
                    { title: "Position" },
                    { title: "Office" },
                    { title: "Extn." },
                    { title: "Start date" },
                    { title: "Salary" }
                ]
            });
        },
        error: (err) => {
            console.log(err);
        }
    })
    getFormData();
})

