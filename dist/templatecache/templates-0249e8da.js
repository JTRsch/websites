angular.module("websites").run(["$templateCache", function($templateCache) {$templateCache.put("views/communities.html","<div ng-controller=\"CtrlCommunities\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"community in communities | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{community.link}}\" target=\"_blank\">\n        <i class=\"fa\" ng-class=\"community.icon\"></i> {{community.name}}</a>\n    </h3>\n    <p>{{community.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/home.html","<div class=\"home-container\">\n  <img class=\"hero-shadow img-rounded\"\n       src=\"/websites/img/webstuffyoushouldknow.jpg\"\n       title=\"Web Sites you should know as a web developer\"\n       alt=\"Web Sites you should know as a web developer\">\n</div>\n");
$templateCache.put("views/navbar.html","<md-toolbar class=\"main-nav background-regal l-pinned-top l-layer-5 md-default-theme\" ng-controller=\"CtrlNavbar\">\n  <nav>\n    <h1>\n      <a class=\"md-button md-default-theme\" ng-transclude=\"\" href=\"#\" md-button=\"\">\n        <span class=\"ng-scope\">WebSites </span>\n      </a>\n    </h1>\n    <button class=\"main-nav-button main-nav-mobile-trigger l-right md-button md-default-theme\" ng-transclude=\"\"\n            aria-label=\"View Menu\" ng-click=\"toggleMainMenu($event)\" md-button=\"md-button\" tabindex=\"0\">\n      <span class=\"ng-scope\">Site Menu </span>\n      <span style=\"position: absolute;top: -3px;right: 15px;\"><i class=\"fa fa-sort-desc\"></i></span>\n      <!--<span class=\"icon icon-arrow-drop-down ng-scope\"><i class=\"fa fa-sort-desc\"></i></span>-->\n    </button>\n    <ul ng-class=\"showMainNav ? \'is-visible\' : \'\'\">\n      <li class=\"l-left\">\n        <a class=\"main-nav-button md-button md-default-theme\" ng-transclude=\"\" ng-click=\"toggleMainMenu($event)\"\n           href=\"#/practices/frameworks\" md-button=\"\">\n          <span class=\"ng-scope\">Practices</span>\n        </a>\n      </li>\n      <li class=\"l-left\">\n        <a class=\"main-nav-button md-button md-default-theme\" ng-transclude=\"\" ng-click=\"toggleMainMenu($event)\"\n           href=\"#/users\" md-button=\"\">\n          <span class=\"ng-scope\">Users</span>\n        </a>\n      </li>\n      <li class=\"l-left\">\n        <a class=\"main-nav-button md-button md-default-theme\" ng-transclude=\"\" ng-click=\"toggleMainMenu($event)\"\n           href=\"#/portals\" md-button=\"\">\n          <span class=\"ng-scope\">Portals</span>\n        </a>\n      </li>\n      <li class=\"l-left\">\n        <a class=\"main-nav-button md-button md-default-theme\" ng-transclude=\"\" ng-click=\"toggleMainMenu($event)\"\n           href=\"#/communities\" md-button=\"\">\n          <span class=\"ng-scope\">Communities</span>\n        </a>\n      </li>\n      <!--<li class=\"l-left\">-->\n      <!--<a class=\"main-nav-button md-button md-default-theme\" ng-transclude=\"\" href=\"#/frameworks\" md-button=\"\">-->\n      <!--<span class=\"ng-scope\">Frameworks</span>-->\n      <!--</a>-->\n      <!--</li>-->\n      <li class=\"l-left\">\n        <a class=\"main-nav-button md-button md-default-theme\" ng-transclude=\"\" ng-click=\"toggleMainMenu($event)\"\n           href=\"#/reading/guides\" md-button=\"\">\n          <span class=\"ng-scope\">Reading</span>\n        </a>\n      </li>\n      <li class=\"l-right\">\n        <a class=\"main-nav-button has-icon md-button md-default-theme\" ng-transclude=\"\"\n           href=\"https://github.com/GYF1/websites\" md-button=\"\">\n          <span class=\"icon icon-cloud-download ng-scope\"></span>\n          <span class=\"ng-scope\">Fork on GitHub</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</md-toolbar>\n");
$templateCache.put("views/portals.html","<div ng-controller=\"CtrlPortals\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"portal in portals | orderBy : \'title\'\" style=\"margin-bottom: 30px;\">\n\n    <h3 class=\"md-display-2\"><a style=\"color: #445A64;\" ng-href=\"{{portal.link}}\" target=\"_blank\">{{portal.title}}</a></h3>\n    <p>{{portal.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/practices.html","<nav class=\"side-nav l-pinned-left l-layer-4 l-offset-nav\"  ng-controller=\"CtrlPractices\">\n  <header class=\"side-nav-search st-input-wrapper\">\n    <button class=\"mobile-trigger button md-button md-default-theme\" ng-transclude=\"\" aria-label=\"View Docs Menu\"\n            ng-click=\"toggleDocsMenu($event)\" md-button=\"md-button\" tabindex=\"0\"><span\n      class=\"ng-scope\">Guides </span>\n\n      <span style=\"  position: absolute;top: 3px;right: 15px;\"><i class=\"fa fa-sort-desc\"></i></span>\n      <!--<span class=\"icon icon-arrow-drop-down ng-scope\"></span>-->\n\n      <div class=\"md-ripple-container\"></div>\n    </button>\n  </header>\n\n  <ul ng-class=\"showDocsNav ? \'is-visible\' : \'\'\" class=\"side-nav-primary\">\n    <li ng-class=\"{\'is-selected\': isActive(\'/practices/frameworks\')}\" class=\"\">\n      <a class=\"md-button md-default-theme\" ng-transclude=\"\" href=\"#/practices/frameworks\" md-button=\"\">\n        <span class=\"side-nav-icon icon-home ng-scope\"></span>\n        <span class=\"ng-scope\"> Frameworks</span>\n        <div class=\"md-ripple-container\"></div>\n      </a>\n    </li>\n    <li ng-class=\"{\'is-selected\': isActive(\'/practices/libs\')}\" class=\"\">\n      <a class=\"md-button md-default-theme\" ng-transclude=\"\" href=\"#/practices/libs\" md-button=\"\">\n        <span class=\"side-nav-icon icon-home ng-scope\"></span>\n        <span class=\"ng-scope\"> Libs</span>\n        <div class=\"md-ripple-container\"></div>\n      </a>\n    </li>\n    <li ng-class=\"{\'is-selected\': isActive(\'/practices/resource\')}\" class=\"\">\n      <a class=\"md-button md-default-theme\" ng-transclude=\"\" href=\"#/practices/resource\" md-button=\"\">\n        <span class=\"side-nav-icon icon-home ng-scope\"></span>\n        <span class=\"ng-scope\"> Resource</span>\n        <div class=\"md-ripple-container\"></div>\n      </a>\n    </li>\n    <li ng-class=\"{\'is-selected\': isActive(\'/practices/coding\')}\">\n      <a class=\"md-button md-default-theme\" ng-transclude=\"\" href=\"#/practices/coding\" md-button=\"\">\n        <span\n          class=\"side-nav-icon icon-query-builder ng-scope\"></span>\n        <span class=\"ng-scope\"> Coding</span>\n      </a>\n    </li>\n    <li ng-class=\"{\'is-selected\': isActive(\'/practices/tools\')}\">\n      <a class=\"md-button md-default-theme\" ng-transclude=\"\" href=\"#/practices/tools\" md-button=\"\">\n        <span\n          class=\"side-nav-icon icon-query-builder ng-scope\"></span>\n        <span class=\"ng-scope\"> Tools</span>\n      </a>\n    </li>\n    <li ng-class=\"{\'is-selected\': isActive(\'/practices/platforms\')}\">\n      <a class=\"md-button md-default-theme\" ng-transclude=\"\" href=\"#/practices/platforms\" md-button=\"\">\n        <span\n          class=\"side-nav-icon icon-query-builder ng-scope\"></span>\n        <span class=\"ng-scope\"> Platforms</span>\n      </a>\n    </li>\n    <li ng-class=\"{\'is-selected\': isActive(\'/practices/themes\')}\">\n      <a class=\"md-button md-default-theme\" ng-transclude=\"\" href=\"#/practices/themes\" md-button=\"\">\n        <span\n          class=\"side-nav-icon icon-query-builder ng-scope\"></span>\n        <span class=\"ng-scope\"> Themes</span>\n      </a>\n    </li>\n    <li ng-class=\"{\'is-selected\': isActive(\'/practices/game\')}\">\n      <a class=\"md-button md-default-theme\" ng-transclude=\"\" href=\"#/practices/game\" md-button=\"\">\n        <span\n          class=\"side-nav-icon icon-query-builder ng-scope\"></span>\n        <span class=\"ng-scope\"> Game</span>\n      </a>\n    </li>\n    <li ng-class=\"{\'is-selected\': isActive(\'/practices/jobs\')}\">\n      <a class=\"md-button md-default-theme\" ng-transclude=\"\" href=\"#/practices/jobs\" md-button=\"\">\n        <span\n          class=\"side-nav-icon icon-query-builder ng-scope\"></span>\n        <span class=\"ng-scope\"> Jobs</span>\n      </a>\n    </li>\n    <li ng-class=\"{\'is-selected\': isActive(\'/practices/services\')}\"><a class=\"md-button md-default-theme\"\n                                                                      ng-transclude=\"\" href=\"#/practices/services\"\n                                                                      md-button=\"\"><span\n      class=\"side-nav-icon icon-list ng-scope\"></span><span class=\"ng-scope\"> Service</span></a></li>\n  </ul>\n</nav>\n<div id=\"practices-content\" ui-view></div>\n");
$templateCache.put("views/reading.html","<div ng-controller=\"CtrlReading\">\n  <md-content class=\"md-padding\">\n    <md-tabs md-dynamic-height md-border-bottom>\n      <md-tab label=\"Guides\">\n        <md-content class=\"md-padding\">\n          <div data-ng-include=\"\'views/reading/guides.html\'\"></div>\n        </md-content>\n      </md-tab>\n      <md-tab label=\"Articles\">\n        <md-content class=\"md-padding\">\n          <div data-ng-include=\"\'views/reading/articles.html\'\"></div>\n        </md-content>\n      </md-tab>\n      <md-tab label=\"Tutorials\">\n        <md-content class=\"md-padding\">\n          <div data-ng-include=\"\'views/reading/tutorials.html\'\"></div>\n        </md-content>\n      </md-tab>\n      <md-tab label=\"News\">\n        <md-content class=\"md-padding\">\n          <div data-ng-include=\"\'views/reading/news.html\'\"></div>\n        </md-content>\n      </md-tab>\n    </md-tabs>\n  </md-content>\n</div>\n");
$templateCache.put("views/selfbookmarks.html","<div ng-controller=\"CtrlSelfBookMarks\">\n  <table class=\"table table-hover\">\n    <tr ng-repeat=\"bookmark in bookmarks\">\n      <td><a ng-href=\"{{bookmark.link}}\">{{bookmark.title}}</a></td>\n      <td><span class=\"label label-info\">{{bookmark.type}}</span></td>\n    </tr>\n  </table>\n</div>\n");
$templateCache.put("views/users.html","<div ng-controller=\"CtrlUsers\" id=\"users-container\" >\n  <ul class=\"polaroids\">\n    <li ng-repeat=\"user in users | orderBy: \'name\'\">\n      <a ng-href=\"{{user.github}}\" title=\"{{user.name}}\" target=\"_blank\">\n        <img alt=\"{{user.name}}\" ng-src=\"/websites/img/avatar/{{user.avatar}}\">\n      </a>\n    </li>\n  </ul>\n</div>\n");
$templateCache.put("views/practices/coding.html","<div ng-controller=\"CtrlCoding\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"coding in codings | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{coding.link}}\" target=\"_blank\">{{coding.name}}</a>\n    </h3>\n\n    <p>{{coding.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/practices/frameworks.html","<div ng-controller=\"CtrlFrameworks\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"framework in frameworks | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{framework.link}}\" target=\"_blank\">{{framework.name}}</a>\n    </h3>\n\n    <p>{{framework.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/practices/game.html","<div ng-controller=\"CtrlGame\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"game in games | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{game.link}}\" target=\"_blank\">{{game.name}}</a>\n    </h3>\n\n    <p>{{game.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/practices/jobs.html","<div ng-controller=\"CtrlJobs\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"job in jobs | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{job.link}}\" target=\"_blank\">{{job.name}}</a>\n    </h3>\n\n    <p>{{job.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/practices/libs.html","<div ng-controller=\"CtrlLibs\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"lib in libs | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{lib.link}}\" target=\"_blank\">{{lib.name}}</a>\n    </h3>\n\n    <p>{{lib.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/practices/platforms.html","<div ng-controller=\"CtrlPlatforms\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"platform in platforms | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{platform.link}}\" target=\"_blank\">{{platform.name}}</a>\n    </h3>\n\n    <p>{{platform.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/practices/resource.html","<div ng-controller=\"CtrlResource\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"resource in resources | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{resource.link}}\" target=\"_blank\">{{resource.name}}</a>\n    </h3>\n\n    <p>{{resource.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/practices/services.html","<div ng-controller=\"CtrlServices\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"service in services | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{service.link}}\" target=\"_blank\">{{service.name}}</a>\n    </h3>\n\n    <p>{{service.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/practices/themes.html","<div ng-controller=\"CtrlThemes\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"theme in themes | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{theme.link}}\" target=\"_blank\">{{theme.name}}</a>\n    </h3>\n\n    <p>{{theme.description}}</p>\n\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/practices/tools.html","<div ng-controller=\"CtrlTools\" style=\"margin: 0 30px;\">\n  <div ng-repeat=\"tool in tools | orderBy : \'name\'\" style=\"margin-bottom: 30px;\">\n    <h3 class=\"md-display-2\">\n      <a style=\"color: #445A64;\" ng-href=\"{{tool.link}}\" target=\"_blank\">{{tool.name}}</a>\n    </h3>\n    <p>{{tool.description}}</p>\n    <md-divider ng-if=\"!$last\"></md-divider>\n  </div>\n</div>\n");
$templateCache.put("views/reading/articles.html","<div ng-controller=\"CtrlArticles\">\n  <div ng-repeat=\"article in articles | orderBy : \'title\'\">\n    <h3 class=\"md-display-2\"><a style=\"color: #445A64;\" ng-href=\"{{article.link}}\" target=\"_blank\">{{article.title}}</a></h3>\n  </div>\n</div>\n");
$templateCache.put("views/reading/guides.html","<div ng-controller=\"CtrlGuides\">\n  <!--<div class=\"media\" ng-repeat=\"guide in guides\">-->\n    <!--<div class=\"media-body\">-->\n      <!--<h4 class=\"media-heading\"><a ng-href=\"{{guide.link}}\" target=\"_blank\">{{guide.title}}</a></h4>-->\n      <!--{{guide.description}}-->\n    <!--</div>-->\n  <!--</div>-->\n\n  <div ng-repeat=\"guide in guides | orderBy : \'title\'\">\n\n    <h3 class=\"md-display-2\"><a style=\"color: #445A64;\" ng-href=\"{{guide.link}}\" target=\"_blank\">{{guide.title}}</a></h3>\n    <p>{{guide.description}}</p>\n\n  </div>\n</div>\n");
$templateCache.put("views/reading/news.html","<div ng-controller=\"CtrlNews\">\n  <div ng-repeat=\"news in newss | orderBy : \'name\'\">\n    <h3 class=\"md-display-2\"><a style=\"color: #445A64;\" ng-href=\"{{news.link}}\" target=\"_blank\">{{news.name}}</a></h3>\n    <p>{{news.description}}</p>\n  </div>\n</div>\n");
$templateCache.put("views/reading/tutorials.html","<div ng-controller=\"CtrlTutorials\">\n  <div ng-repeat=\"tutorial in tutorials\">\n    <h3 class=\"md-display-2\"><a style=\"color: #445A64;\" ng-href=\"{{tutorial.link}}\" target=\"_blank\">{{tutorial.title}}</a></h3>\n  </div>\n</div>\n");}]);