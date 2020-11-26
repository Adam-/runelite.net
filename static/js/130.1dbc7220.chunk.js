(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[130],{708:function(e,n){e.exports={title:"1.6.28 Release",description:"Multiple infobox groups, birdhouse loot tracking, and tile labels",author:"Adam",body:'<p>Infoboxes can now be split into multiple groups, and independently positioned\nand rotated. Shift right click an infobox and select <code>Detach</code> to move an infobox\nto its own group, and <code>Flip</code> to change the group orientation between vertical\nand horizontal. The groups can be dragged as normal overlays via the usual\nmethod of holding alt. To remove a group, and move all infoboxes in it back to\nthe default group, select the <code>Delete</code> option.</p>\n<p><img src="/img/blog/1.6.28-Release/infobox.gif" alt="infoboxes"></p>\n<p>The loot tracker now tracks loot from birdhouses</p>\n<p><img src="/img/blog/1.6.28-Release/birdhouse.png" alt="birdhouses"></p>\n<p>The tile marker plugin now optionally allows assocating labels to marked tiles</p>\n<p><img src="/img/blog/1.6.28-Release/tilelabel.gif" alt="tilelabel"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The cannon plugin now shows the world your cannon was placed on in the\ninfobox tooltip.</li>\n<li>Some graphical anomalies related to drawing models which are very close to\nor partially behind the camera with GPU on has been fixed. This has also\nreduced the complexity of the GL pipeline, particularly with the\n<code>Compute shaders</code> option off, so you may find this works for you now if you\nhave buggy drivers.</li>\n<li>The <a href="https://oldschool.runescape.wiki/w/RuneScape:Crowdsourcing" native="">OSRS Wiki Crowdsourcing plugin</a>\nis now included and enabled by default. This collects anonymous skilling data\nto help improve the <a href="https://oldschool.runescape.wiki" native="">OSRS Wiki</a>.</li>\n<li>The loot tracker now correctly tracks the Grubby chest.</li>\n<li>An option has been added to outline infobox text, which can improve readability.</li>\n<li>The item charges plugin now correctly tracks destroying dodgy necklaces, rings of\nforging, and amulets of chemistry.</li>\n<li>A bug causing the farming tracker to incorrectly track the Catherby patches\nhas been fixed.</li>\n<li>Examining large stacks of items now shows digit group separators.</li>\n<li>The inventory viewer now has a configurable hotkey to toggle the overlay.</li>\n<li>A <code>Use</code> swap has been added for grimy herbs.</li>\n<li>The chat filter plugin can now additionally filter game and spam messages.</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<p>We had 12 contributors this release!</p>\n<pre><code>Adam (16):\n      containable frame: assume jdk 12/13/14 do not have fix for JDK-8231564\n      overlay renderer: use isKeyPressed instead of tracking shift key state\n      raid plugin: simplify timer infobox logic by overriding render\n      gpu: don\'t interpolate texture ids\n      overlay renderer: don\'t allow moving dynamic or tooltip overlays\n      infobox: add support for multiple infobox groups\n      loot tracker: fix tracking grubby chest\n      slayer plugin: simplify a few regex patterns\n      gpu: use noperspective for hsl interpolation\n      loottracker: submit loot when not logged in\n      config: Add infobox component outline option\n      key manager: move key event logging to trace level\n      item charges: fix resetting dodgy necklace, ring of forging, and amulet of chemistry\n      examine plugin: format quantity of large item stacks\n      gpu: dispose of graphics objects\n      ground markers: add tile labels\n\nEric Pratt (1):\n      devtools: add movement flags\n\nJack Hodkinson (1):\n      Sort plugin search results with closer test matches higher (#12432)\n\nJacob Mischka (1):\n      Fix screenshot with hidpi scaling with GPU plugin\n\nJordan Atwood (4):\n      banktags: Don\'t lose scroll position when hiding separators\n      Move Experience tests to proper test class\n      KeyManager: Add debug logging\n      util: Remove unused and unneeded methods\n\nMatthew C (5):\n      cannon: sort spots alphabetically\n      cannon: update mammoth cannon spot\n      timers: add world placed to cannon timer tooltip\n      inventoryviewer: Add a keybind toggle to hide the overlay.\n      runecraft: cleanup, refactor AbyssRifts, updateRifts()\n\nMax Weber (1):\n      timetracking: correctly bound Catherby patches\n\nMichal Zielinski (1):\n      menu entry swapper: add clean swap\n\nRunemoro (1):\n      gpu: replace toScreen function with a projection matrix\n\nSean Patiag (1):\n      chatfilter: Add option to filter game chat\n\nSirGirion (1):\n      loot tracker: add bird houses\n\nleejt (1):\n      Add crowdsourcing plugin\n</code></pre>\n'}}}]);
//# sourceMappingURL=130.1dbc7220.chunk.js.map