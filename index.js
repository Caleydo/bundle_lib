/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */

Object.defineProperty(module.exports, '__publicPath', {
	set: function(value) {
		__webpack_public_path__ = value;
	},
	get: function() {
		return __webpack_public_path__;
	}
});

var parentScript = document.querySelector('script[src$="phovea_bundle_lib.js"]');
if (parentScript) {
  var src = parentScript.src.substring(0, parentScript.src.length - 'phovea_bundle_lib.js'.length);
  if (src !== '.') {
    __webpack_public_path__ = src;
  }
}

//request index to avoid using the pre build version
exports.core = require('phovea_core/index');
exports.d3 = require('phovea_d3/index');
exports.vis = require('phovea_vis/index');
exports.vis_lineup = require('phovea_vis_lineup/index');
