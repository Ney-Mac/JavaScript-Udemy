const fs = require('fs').promises;//File System
const path = require('path');

//Todas as funcoes do fs tem duas versoes, a normal (que e assincrona) e im Sync(sincrona)

/*fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e));
*/

async function readDir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);//retorna um obj com todo o estado do fileFullPath
        
        if(/node_modules/g.test(fileFullPath))  continue;

        if(stats.isDirectory()){
            readDir(fileFullPath);
            continue;
        }
        if(!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue;
        
        console.log(fileFullPath);
    }
}

readDir('/home/mac/Documentos/javaScript-Udemy');