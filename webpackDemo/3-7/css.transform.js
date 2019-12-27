module.exports = function (css) {
    if (window.innerWidth >= 768) {
        return css.replace('red', 'blue');
    } else {
        return css.replace('red', 'orange');
    }
}