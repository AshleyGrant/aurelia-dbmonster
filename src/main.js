export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
  aurelia.use.plugin('aurelia-ui-virtualization');
  aurelia.start().then(a => a.setRoot());
}
