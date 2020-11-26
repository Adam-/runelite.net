(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[110],{688:function(e,n){e.exports={title:"1.6.0 Release",description:"RuneLite Plugin Hub",author:"Adam",body:'<p>We\'ve added support for external plugins to RuneLite. External plugins are\nplugins which are maintained by community members and other developers that are not\nofficially affiliated with the project.</p>\n<p>The external plugins are verified by us for safety, to ensure they are not\nmalicious, and are also not breaking <a href="https://secure.runescape.com/m=news/another-message-about-unofficial-clients?oldschool=1" native="">Jagex\'s\nrules</a>,\nwhich we have agreed to as a project.</p>\n<p>We are providing the platform for the external plugins; developers submit their\nplugins to the <a href="https://github.com/runelite/plugin-hub" native="">plugin hub repository</a>\nfor inclusion. External plugins are not tied to specific RuneLite releases;\nplugins can be created, modified, or removed from the plugin hub without\nrequiring us make a new RuneLite release.</p>\n<p>The plugin hub can be browsed in the client by scrolling to the bottom of the\nconfiguration panel.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix the Kourend Library plugin incorrectly resetting when searching empty bookcases</li>\n<li>Add support for ignore list notes to the friend notes plugin</li>\n<li>The fog at the scene corners now curves around it slightly</li>\n<li>Fix the tithe farm overlay to be movable again</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<pre><code>Aaron Goff (1):\n      Change avantoe and avantoe seed item id medium name\n\nAdam (1):\n      api: modify RemoveFriend to accept a nameable\n\nHydrox6 (1):\n      kourendlibrary: fix layout resetting unintentionally\n\nMax Weber (10):\n      devtools: Add Notifier button\n      runelite-client: Add custom notification sounds\n      config: Refactor config panel into separate panels for each logical view\n      runelite-client: Remove IconButton Most of this class is defaults, which can just be a normal method and a listener for hover support, which is part of the base class anyway.\n      ImageUtil: Rename methods to luminance, and work with non ARGB images\n      DynamicGridLayout: Take the container\'s insets into account\n      SplashScreen: Ceiling download total\n      SplashScreen: Allow use after our L&amp;F has been installed\n      runelite-client: Add External Plugin support\n      objectindicators: Correctly match template plane\n\nOwain van Brakel (1):\n      FPS: Add range to the fps target config items\n\nRami (1):\n      friend notes: support notes on ignore list players\n\ndekvall (1):\n      widgetinfo: fix tithe farm score\n\nln (1):\n      GPU: smooth out fog corners\n</code></pre>\n'}}}]);
//# sourceMappingURL=110.60e18dee.chunk.js.map