let validateArr = [
    {
        href : "https://validator.w3.org/check?uri=",
        img : "w3c-html.png",
        alt: "html validator"
    },

    {
        href : "http://jigsaw.w3.org/css-validator/validator?uri=",
        img : "w3c-css.png",
        alt: "CSS validator"
    },

    {
        href : "http://jigsaw.w3.org/css-validator/validator?uri=",
        img : "w3c-css.png",
        alt: "CSS validator"
    },
]

function renderValidate(relPath, limit = 2) {
    let currentUrl = window.location.href;
    let content = "";
    for(let i = 0 ; i < validateArr.length ; i++) {
        if(i <= limit) {
            content += `<a href="${validateArr[i].href}${currentUrl}" target="_blank">
            <img src="${relPath}\${validateArr[i].img}" alt="${validateArr[i].alt}"></a><br/>`;
        }
    }
    return content;
}