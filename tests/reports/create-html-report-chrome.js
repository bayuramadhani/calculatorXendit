const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './reports/',
  reportPath: './tests/reports/chrome/',
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '80',
    },
    device: 'Docker Hub',
    platform: {
      name: 'Mac OSX',
      version: 'Catalina',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Xendit Online Calculator Online' },
      { label: 'Written by', value: 'Dhony Imam Saputra' },
    ],
  },
});
