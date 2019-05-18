$('#clickOne').click(() => {
    let xhr = new XMLHttpRequest();
    // xhr.open('GET', '/public/jsfiles/pp.json', true);
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = () => {
        if (xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
            var hh = JSON.parse(xhr.responseText);
            for (p of hh) {
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