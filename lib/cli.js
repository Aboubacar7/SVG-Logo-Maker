

// class CLI {
//     constructor(){
//         this.logo = '';
       

//         this.shapes = [];
//     }
//     run(){
//         return 
//         .then(({ text, textcolor }) => {
//     this.logoText = `${text}`;
//     if(text.length > 3){
//         throw new Error('LogoText cannnot be no more than 3 characters long.');
//     }
//     this.textcolor = `${textcolor}`;
//     this.logo.push({text, textcolor })
//     return this.addshape();
//         })

//         .then(() => {
//             return writeFile( join(__dirname, '..','output', 'logo.svg'),
//             createDocument(this.logo, this.shapes)
//             );
//         })
//         .then(() => console.log('Created svg file'))
//         .catch((err) => {
//             console.log(err);
//             console.log('Something went wrong.');
//         });
//     }

//     addshape(){
//         return inquirer
//         .prompt([
           
//         ])
//         .then(({shape, shapecolor}) => {
//             this.shapes.push({shape,shapecolor});
//             if(shape.choices === 'circle'){
//               return  `<circle x="10" y="10" r="20" stroke="red" fill="transparent" stroke-width="5"/>`
//             }else if(shape.choices === 'triangle'){
//                 return `<polygon x="10" y="10" points="50 15, 100 100, 0 100" fill="red" stroke="#000"/>`
//             }else if(shape.choices === 'square'){
//                 return  `<rect x="10" y="10" width="100%" height="100%" fill="red" />`
//             }
//         })
//     }
// }

// module.exports = CLI