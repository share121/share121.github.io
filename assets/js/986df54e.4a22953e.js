"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[7773],{86088:function(n,t,e){e.r(t),e.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return l}});var r=e(85893),o=e(11151);const u={last_update:{date:1697248379944}},a=void 0,i={id:"codeing/dart/\u7ebf\u7a0b\u7ba1\u7406",title:"\u7ebf\u7a0b\u7ba1\u7406",description:"",source:"@site/docs/09-codeing/07-dart/01-\u7ebf\u7a0b\u7ba1\u7406.md",sourceDirName:"09-codeing/07-dart",slug:"/codeing/dart/\u7ebf\u7a0b\u7ba1\u7406",permalink:"/codeing/dart/\u7ebf\u7a0b\u7ba1\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09-codeing/07-dart/01-\u7ebf\u7a0b\u7ba1\u7406.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1697248379.944,formattedLastUpdatedAt:"2023\u5e7410\u670814\u65e5",sidebarPosition:1,frontMatter:{last_update:{date:1697248379944}},sidebar:"tutorialSidebar",previous:{title:"OpenCV",permalink:"/codeing/python/OpenCV"},next:{title:"\u5b57\u7b26\u5206\u5272",permalink:"/codeing/dart/\u5b57\u7b26\u5206\u5272"}},s={},l=[];function c(n){const t={code:"code",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",metastring:'title="task_management.dart"',children:"import 'dart:async';\n\nclass TaskManagement<T> {\n  int _parallelCount;\n\n  /// \u6700\u5927\u7ebf\u7a0b\u6570\n  int get parallelCount => _parallelCount;\n  set parallelCount(int value) {\n    if (value <= 0) throw Exception('parallelCount must be greater than 0');\n    _parallelCount = value;\n    _run();\n  }\n\n  int _runningCount = 0;\n\n  /// \u5f53\u524d\u7ebf\u7a0b\u6570\n  int get runningCount => _runningCount;\n\n  final _tasks = <(Completer<T>, Future<T> Function())>[];\n\n  var _isRunning = true;\n\n  /// \u662f\u5426\u8fd0\u884c\n  bool get isRunning => _isRunning;\n\n  Completer<void>? _stopCompleter;\n\n  TaskManagement(this._parallelCount);\n\n  /// \u6dfb\u52a0\u4efb\u52a1\n  Future<T> add(Future<T> Function() task) {\n    final completer = Completer<T>();\n    _tasks.add((completer, task));\n    _run();\n    return completer.future;\n  }\n\n  /// \u6682\u505c\u6240\u6709\u4efb\u52a1\n  Future<void> stop() {\n    if (!_isRunning) return Future.value();\n    _isRunning = false;\n    if (_runningCount == 0) return Future.value();\n    _stopCompleter = Completer<void>();\n    return _stopCompleter!.future;\n  }\n\n  /// \u542f\u52a8\u6240\u6709\u4efb\u52a1\n  void start() {\n    if (_isRunning) return;\n    _isRunning = true;\n    _run();\n  }\n\n  void _run() {\n    while (_isRunning && _runningCount < _parallelCount && _tasks.isNotEmpty) {\n      final (completer, task) = _tasks.removeAt(0);\n      _runningCount++;\n      task()\n          .then(completer.complete)\n          .onError(completer.completeError)\n          .then((_) {\n        Future.microtask(() {\n          _runningCount--;\n          _run();\n        });\n      });\n    }\n    if (_runningCount == 0) {\n      _stopCompleter?.complete();\n      _stopCompleter = null;\n    }\n  }\n}\n"})})}function d(n={}){const{wrapper:t}={...(0,o.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},11151:function(n,t,e){e.d(t,{Z:function(){return i},a:function(){return a}});var r=e(67294);const o={},u=r.createContext(o);function a(n){const t=r.useContext(u);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),r.createElement(u.Provider,{value:t},n.children)}}}]);