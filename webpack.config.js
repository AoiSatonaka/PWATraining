const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const entPath = path.resolve(__dirname,'src/js');
const outPath = path.resolve(__dirname,'public');

const dirNames = fs.readdirSync(entPath);
    
const entrys = {}
dirNames.forEach(dir => {
    const entry = {[dir]: `${entPath}/${dir}`};
    Object.assign(entrys,entry);
});

module.exports = {
    mode: 'development',
    entry: entrys,
    output: {
        path: outPath,
        filename: data => {
            switch(data.chunk.name){
                case 'sw':
                    return 'sw.js';
                case 'index.ts':
                    return  'js/index.bundle.js';
                default:
                    return 'js/[name].bundle.js';
            }  
        }
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                exclude: /node_modeles/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    }
};