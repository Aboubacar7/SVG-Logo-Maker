module.exports = (shape) => {

    return `<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="./style.css">
</head>
<body>
    <svg height="300" width="200">
        ${shape[0].render()}
        ${shape[0].renderText()}
    </svg>
</body>
</html>
    `
}