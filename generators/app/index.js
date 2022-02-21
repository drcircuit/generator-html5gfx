'use strict';
const _extend = require("lodash/extend");
const Generator = require("yeoman-generator");
_extend(Generator.prototype, require("yeoman-generator/lib/actions/install"));

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.option('babel');
    }
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname
        },
        {
            type: 'input',
            name: 'title',
            message: 'Your project title',
            default: this.appname
        },
        {
            type: 'input',
            name: 'author',
            message: 'Who are you?',
            default: 'The Working Class Hacker <workingclasshacker@gmail.com>'
        },
        {
            type: 'input',
            name: 'bgColor',
            message: 'Which background color do you want?',
            default: 'black'
        },
        {
            type: 'input',
            name: 'width',
            message: 'How wide should the canvas be?',
            default: 'window.innerWidth'
        },
        {
            type: 'input',
            name: 'height',
            message: 'How high should the canvas be?',
            default: 'window.innerHeight'
        }]).then((answers) => {          
            this.answers = answers;
        });
    }
    writing() {
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('index.html'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('css/style.css'),
            this.destinationPath('styles/' + this.answers.name + '.css'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('js/script.js'),
            this.destinationPath('scripts/' + this.answers.name + '.js'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('packagefile.json'),
            this.destinationPath('package.json'),
            this.answers
        );
    }
    install(){
        this.npmInstall();
    }

};