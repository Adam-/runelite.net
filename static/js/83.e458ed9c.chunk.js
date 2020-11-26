(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[83],{661:function(n,e){n.exports={title:"1.5.14 Release",description:"Web based loot tracker, Grand Exchange history, and account overview",author:"Adam",body:'<p>This weeks update is focused on improvements to the website. You can now login\non <a href="https://runelite.net" native="">https://runelite.net</a> and view details about your\nRuneLite account which includes current slayer task, a boss log, the loot\ntracker, and a new Grand Exchange history tracker which tracks completed trades\nyou have made on the GE.</p>\n<p><strong>Loot tracker:</strong></p>\n<div class="img-thumbnail mb-3">\n![loot](/img/blog/1.5.14-Release/loot.png)\n</div>\n<p><strong>Account overview:</strong></p>\n<div class="img-thumbnail mb-3 text-center">\n![account](/img/blog/1.5.14-Release/account.png)\n</div> \n<p><strong>Grand Exchange history:</strong></p>\n<div class="img-thumbnail mb-3">\n![ge](/img/blog/1.5.14-Release/ge.png)\n</div>\n<p>Both the loot tracker and Grand Exchange tracker allow easily exporting their\ndata into JSON format. Both keep up to 1 month of history.</p>\n<p>Thanks to <a href="https://github.com/deathbeam" native="">@deathbeam</a> for creating the site over\nthe last few weeks.</p>\n<p>The hitpoints plugin can now recolor the hitpoints icons based on the type of\npoison you have:</p>\n<p><img src="/img/blog/1.5.14-Release/orbs.png" alt="orbs"></p>\n<p>Local RuneLite settings can now be imported into an account\'s settings by\nclicking the Import button in the Info panel when logged in:</p>\n<p><img src="/img/blog/1.5.14-Release/import.png" alt="import"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix item prices plugin to show negative alch profits too</li>\n<li>Fix fishing overlay disappearing whenever a new map is loaded</li>\n<li>Add heal amount for castle wars bandages to item stats</li>\n<li>kourend library plugin: add config option to hide duplicate books</li>\n<li>Add support for looking up game objects with the wiki plugin</li>\n<li>Add enchanting jewelry to the idle notification plugin</li>\n<li>Add link to Wiki guide from achievement diaries</li>\n<li>Allow bank tag tabs to be renamed</li>\n<li>Add new farming crops to skill calculator</li>\n<li>Add Twisted bow spawn near farming guild</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 15 contributors this release!</p>\n<pre><code>Adam (12):\n      http service: disable spring jmx\n      item prices: show negative high alch profits too\n      xptracker service: only update last_updated after hiscores are saved\n      xptracker: up xp threshold to 10k\n      api: add RS Enum API\n      client: fix indenting of getItemCompositionCache javadoc\n      Revert &quot;Clear stored npcs in fishing/pc/rc plugins&quot;\n      Clear stored npcs in fishing/pc/rc plugins\n      Revert &quot;Clear Cerberus ghost on LOADING game state&quot;\n      cerb plugin: clear ghosts on connection lost too\n      http service: remove ws service\n      mixins: inject Client constructor for initialization of enumCache\n\nGio (1):\n      Add heal amount for castle wars bandages (#7878)\n\nHydrox6 (1):\n      Add account prompt to the OAuth URL\n\nKoekkruimels (3):\n      Add color to the library customer based on player inventory (#7951)\n      kourend library plugin: add config option to hide duplicate books\n      Refactor changes of #7951 to use doesPlayerContainBook\n\nMagic fTail (1):\n      Split synchronizing and uploading loot data into separate configs\n\nMax Weber (3):\n      WikiPlugin: Strip tags from names given to RSLookup\n      WikiPlugin: Allow lookup of Objects\n      WikiPlugin: Eschew URLEncoder in favor of HttpUrl\n\nRon Young (2):\n      TabInterface: remove deprecated widget calls\n      TabInterface: move icon search into method TabManager: add remove/set icon\n\nRoyce Mathews (1):\n      Add enchanting jewelry to the idle notification plugin. (#7977)\n\nRyBo (1):\n      Highlight more efficient ledge in the Falador Agility course (#7938)\n\nShaun Dreclin (1):\n      wiki plugin: Add support for achievement diaries\n\nTanner Chauncy (1):\n      banktags: add tag tab renaming\n\nTheStonedTurtle (1):\n      Add dynamic hitpoints orb icon to poison plugin (#6517)\n\nTomas Slusny (11):\n      Do not try to draw infobox caption if text is null or empty\n      Remove emptyOrNull text check from InfoboxOverlay\n      Add button to sync local config with remote\n      Backup RuneLite account settings before overwriting them\n      Log config property changes only if they really change\n      Properly split config properties loaded from config client\n      Catch JVM incompatible library JNA error when initializing Discord\n      Move slayer weakness overlay 1 layer up above\n      Limit access levels for InfoBox fields\n      Fix infobox impl access levels and remove unused values\n      Convert item stats mapping to use item ids instead of names\n\nWill Thomas (1):\n      skills calc: add new farmable crops and trees\n\nchestnut1693 (1):\n      Add home tag to Default World plugin\n</code></pre>\n'}}}]);
//# sourceMappingURL=83.e458ed9c.chunk.js.map