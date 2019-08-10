$('#clickOne').click(() => {
    let xhr = new XMLHttpRequest();
    // xhr.open('GET', '/public/jsfiles/pp.json', true);
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = () => {
        if (xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
            var hh = JSON.parse(xhr.responseText);
            for (let p of hh) {
                console.log(p);
                let output = '<div>' + JSON.stringify(p.login) + '';
                output += '<img src = "' + p.avatar_url + '" width = "77" height = "77">';
                output += '</div>';
                $('#data').append(output);
            }
        }
    }
    xhr.send();
});


$('#clickTwo').click(() => {
    $.ajax('https://api.github.com/users', {
        type: 'GET',
        dataType: 'json',
        timeOut: 1,
        success: data => console.log(data)
    })
})

$('#clickThree').click(() => {
    $.ajax('http://localhost:9999/jsonRes', {
        type: 'GET',
        dataType: 'html',
        timeOut: 1,
        success: data => $('#localApi').html(data)
    })
})

$('#nameClick').click(() => {
    let value = {
        'name': $('#name').val()
    }
    $.ajax('http://localhost:9999/name', {
        type: 'POST',
        dataType: 'text',
        data: value,
        success: data => $('#pasteInDiv').html(data)
    })
})


$('#clickTwo').hover(e => {
    console.log(e.target.id);
})

$(document).ready(() => {
    let i = 1;
    for (; i < 6;) {
        // $('div').append('<h1>PP</h1>');
        i += 1;
        // console.log(i);
    }
})
