module.exports = (shape) => {

    return `
    <svg height="200" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${shape[0].render()}
        ${shape[0].renderText()}
    </svg>

    `
}