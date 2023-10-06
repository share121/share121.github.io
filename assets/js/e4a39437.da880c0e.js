"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[5766],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),c=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},p=function(n){var e=c(n.components);return r.createElement(l.Provider,{value:e},n.children)},s="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),s=c(t),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(f,u(u({ref:e},p),{},{components:t})):r.createElement(f,u({ref:e},p))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,u=new Array(a);u[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i[s]="string"==typeof n?n:o,u[1]=i;for(var c=2;c<a;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31817:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),u=["components"],i={},l=void 0,c={unversionedId:"codeing/dart/\u7ebf\u7a0b\u7ba1\u7406",id:"codeing/dart/\u7ebf\u7a0b\u7ba1\u7406",title:"\u7ebf\u7a0b\u7ba1\u7406",description:"",source:"@site/docs/09-codeing/07-dart/01.\u7ebf\u7a0b\u7ba1\u7406.md",sourceDirName:"09-codeing/07-dart",slug:"/codeing/dart/\u7ebf\u7a0b\u7ba1\u7406",permalink:"/codeing/dart/\u7ebf\u7a0b\u7ba1\u7406",draft:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09-codeing/07-dart/01.\u7ebf\u7a0b\u7ba1\u7406.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1696563653,formattedLastUpdatedAt:"2023\u5e7410\u67086\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenCV",permalink:"/codeing/Python/OpenCV"},next:{title:"\u5355\u6587\u4ef6\u5236\u4f5c",permalink:"/technology/\u5355\u6587\u4ef6\u5236\u4f5c/"}},p={},s=[],d={toc:s},m="wrapper";function f(n){var e=n.components,t=(0,o.Z)(n,u);return(0,a.kt)(m,(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="task_management.dart"',title:'"task_management.dart"'},"import 'dart:async';\n\nclass TaskManagement<T> {\n  int _parallelCount;\n\n  /// \u6700\u5927\u7ebf\u7a0b\u6570\n  int get parallelCount => _parallelCount;\n  set parallelCount(int value) {\n    if (value <= 0) {\n      throw Exception('parallelCount must be greater than 0');\n    }\n    _parallelCount = value;\n    _run();\n  }\n\n  int _runningCount = 0;\n\n  /// \u5f53\u524d\u7ebf\u7a0b\u6570\n  int get runningCount => _runningCount;\n\n  final List<(Completer<T>, Future<T> Function())> _tasks = [];\n\n  bool _isRun = true;\n\n  /// \u662f\u5426\u8fd0\u884c\n  bool get isRun => _isRun;\n\n  Completer<void>? _stopCompleter;\n\n  TaskManagement(this._parallelCount);\n\n  /// \u6dfb\u52a0\u4efb\u52a1\n  Future<T> add(Future<T> Function() task) {\n    final completer = Completer<T>();\n    _tasks.add((completer, task));\n    _run();\n    return completer.future;\n  }\n\n  /// \u6682\u505c\u6240\u6709\u4efb\u52a1\n  Future<void> stop() {\n    if (_isRun == false) return Future(() => null);\n    _isRun = false;\n    if (_runningCount == 0) {\n      return Future(() => null);\n    }\n    _stopCompleter = Completer<void>();\n    return _stopCompleter!.future;\n  }\n\n  /// \u542f\u52a8\u6240\u6709\u4efb\u52a1\n  void start() {\n    if (_isRun == true) return;\n    _isRun = true;\n    _run();\n  }\n\n  void _run() {\n    while (_isRun && _runningCount < _parallelCount && _tasks.isNotEmpty) {\n      final (completer, task) = _tasks.removeAt(0);\n      _runningCount++;\n      task().then(completer.complete).onError(completer.completeError);\n      completer.future.then((_) {\n        Future.microtask(() {\n          _runningCount--;\n          _run();\n        });\n      });\n    }\n    if (_runningCount == 0) {\n      _stopCompleter?.complete();\n      _stopCompleter = null;\n    }\n  }\n}\n")))}f.isMDXComponent=!0}}]);