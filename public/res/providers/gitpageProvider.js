define([
  "utils",
  "classes/Provider",
  "helpers/gitpageHelper"
], function(utils, Provider, gitpageHelper) {

  var sshProvider = new Provider("gitpage", "GitPage-Hexo");
  
  sshProvider.publish = function(publishAttributes, frontMatter, title, content, callback) {
  };

  sshProvider.hexoDeploy = function(callback){
    $('#textarea-publish-status').val('Send `hexo-deploy` command to koa Server.....\n');
    gitpageHelper.hexoDeploy(function(msg){
      $('#textarea-publish-status').val($('#textarea-publish-status').val() + msg);
      $('#textarea-publish-status').scrollTop($('#textarea-publish-status')[0].scrollHeight);
    });
  }

  sshProvider.newPublishAttributes = function(event) {
    return {};
  };

  return sshProvider;
});