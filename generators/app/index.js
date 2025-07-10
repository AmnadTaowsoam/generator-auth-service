// generators/app/index.js
const Generator = require('yeoman-generator').default;

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      { type: 'input', name: 'name', message: 'Service name:', default: 'auth-service' },
      { type: 'input', name: 'port', message: 'Port to run on:', default: '3000' },

      // database
      { type: 'input', name: 'dbHost', message: 'DB_HOST:', default: 'localhost' },
      { type: 'input', name: 'dbPort', message: 'DB_PORT:', default: '5432' },
      { type: 'input', name: 'dbName', message: 'DB_NAME:', default: 'authen_db' },
      { type: 'input', name: 'dbUser', message: 'DB_USER:', default: 'postgres' },
      { type: 'password', name: 'dbPass', message: 'DB_PASSWORD:', default: 'password' },

      // additional
      { type: 'input', name: 'apiKey', message: 'API_KEY:', default: '' },
      { type: 'input', name: 'jwtSecret', message: 'JWT_SECRET_KEY:', default: 'your_jwt_secret' },
      { type: 'input', name: 'secretKey', message: 'SECRET_KEY:', default: 'your_secret_key' },
      { type: 'input', name: 'tokenExpiration', message: 'TOKEN_EXPIRATION_MINUTES:', default: '60' },
      { type: 'input', name: 'connectTimeout', message: 'CONNECTION_TIMEOUT (ms):', default: '5000' },
      { type: 'input', name: 'readTimeout', message: 'READ_TIMEOUT (ms):', default: '5000' },
      { type: 'input', name: 'algorithm', message: 'ALGORITHM:', default: 'HS256' },
      { type: 'list', name: 'logLevel', message: 'LOG_LEVEL:', choices: ['debug', 'info', 'warn', 'error'], default: 'info' }
    ]);
  }

  writing() {
    // ส่ง this.answers ให้ copyTpl ทำการ inject ทุกตัวแปรใน template
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(this.answers.name),
      this.answers,
      null,
      {
        globOptions: {
          dot: true,
          ignore: ['**/node_modules/**', '**/*.lock']
        }
      }
    );
    // 2) คัดลอก .env.example ไปเป็น .env ให้โดยอัตโนมัติ
    this.fs.copy(
      this.destinationPath(name, '.env.example'),
      this.destinationPath(name, '.env')
    );
  }

  install() {
    this.log(`Installing dependencies in ${this.answers.name}…`);
    this.spawnCommandSync('npm', ['install'], { cwd: this.answers.name });
  }
};