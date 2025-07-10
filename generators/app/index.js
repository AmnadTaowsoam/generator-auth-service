// generators/app/index.js
const Generator = require('yeoman-generator').default;

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Service name (จะสร้างโฟลเดอร์ชื่อนี้):',
        default: 'auth-service'
      },
      {
        type: 'input',
        name: 'port',
        message: 'Port to run on:',
        default: '3000'
      }
    ]);
  }

  writing() {
    const { name, port } = this.answers;

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(name),
      { name, port },
      null,
      {
        globOptions: {
          dot: true,
          ignore: ['**/node_modules/**', '**/*.lock']
        }
      }
    );
  }

  install() {
    this.log(`Installing dependencies in ${this.answers.name} …`);
    this.spawnCommandSync('npm', ['install'], { cwd: this.answers.name });
  }
};

