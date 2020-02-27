const getSelectedValue = () => {
    return {
        countries: [
            'India',
            'Africa',
            'Russia'
        ]
    }
}

const displaySelectedValue = () => {
    let value = getSelectedValue();
    let htmls = '';
    value.countries.forEach((val) => {
        htmls += `<option value="${val}" >
                    ${val}
                  </option>`
    })
    $('#optionsManupulation').html(htmls);
}


const onValueSelected = () => {
    $('#optionsManupulation').change((e) => {
        // https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
    })
}

$(document).ready(() => {
    displaySelectedValue();
    onValueSelected();
})