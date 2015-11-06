define([
    "utils",
    "classes/Provider",
    "eventMgr",
], function(utils, Provider, eventMgr, sshHelper) {

    var sshProvider = new Provider("gitpage", "GitPage-Hexo");
    sshProvider.publishPreferencesInputIds = [
        "ssh-host",
        "ssh-port",
        "ssh-username",
        "ssh-password"
    ];

    sshProvider.publish = function(publishAttributes, frontMatter, title, content, callback) {
        debugger;
    };

    sshProvider.newPublishAttributes = function(event) {
        return {};
    };

    return sshProvider;
});