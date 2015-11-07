/*global gitpage */
define([
  "jquery",
  "underscore",
  "socket.io",
  "visionmedia-debug"
], function($, _, io, debug) {
  var gitpageHelper = {};

  // debug 模块
  localStorage.debug = 'socket-client';
  var socketClientA = debug('socket-client');

  // socket 模块
  var socketMsgType = [
    'shell-input', // 命令输入
    'shell-stdout'
  ];

  var socket = io('http://127.0.0.1:3000/');
  var ScopeCallback = function(){};
  // 监听一次
  socket.on(socketMsgType[1],function(msg){
    socketClientA(msg);
    ScopeCallback(msg);
  });

  
  gitpageHelper.hexoDeploy = function(callback){
    // 发送部署命令
    socket.emit(socketMsgType[0],'hexo-deploy');
    ScopeCallback = callback;
  }

  return gitpageHelper;
});