
const fs = require('node:fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {

        let salida  = '';
        let consola = '';

        for ( i = 1; i <= hasta; i++) {
            let resultado = base * i;
            salida  += (`${base} x ${i} = ${resultado}\n`);
            consola += (`${colors.cyan(base)} ${'x'.green} ${colors.cyan(i)} ${'='.green} ${colors.magenta(resultado)}\n`);
        }

        if(listar == true) {
            console.log('------------------------------'.green);
            console.log('  TABLA DE MULTIPLICAR DEL'.green, colors.blue(base));
            console.log('------------------------------'.green);
        
            console.log(consola);
        
            // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
            //     if (err) throw err;
        
            //     console.log(`tabla-${base}.txt creada correctamente`);
            // } )
        }
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
        
        
    } catch (err) {
        throw err;
    }

   

    // return new Promise( (resolve, reject) => {
    //     console.log('------------------------------');
    //     console.log('- TABLA DE MULTIPLICAR DEL',base,'-');
    //     console.log('------------------------------');

    //     let salida = '';

    //     for (i=1; i<=10; i++) {
    //         let resultado = base * i;
    //         salida += (`${base} x ${i} = ${resultado}\n`);
    //     }

    //     console.log(salida);

    //     // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    //     //     if (err) throw err;

    //     //     console.log(`tabla-${base}.txt creada correctamente`);
    //     // } )

    //   ``  fs.writeFileSync( `tabla-${base}.txt`, salida);

    //     resolve(`tabla-${base}.txt`);
    // });
    
};



module.exports = {
    crearArchivo
}