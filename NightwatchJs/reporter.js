const { PostFactumReporter } = require('@reportportal/agent-js-nightwatch');
const config = require('./rp.json');
const reporter = new PostFactumReporter(config);

module.exports = {
    write : (results, options, done) => {
      return reporter.startReporting(results, done);
    }
};