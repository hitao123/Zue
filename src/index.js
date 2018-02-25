/**
 * Created by huahaitao on 18/1/24.
 *
 */
import _init from './instance/init';
import { _compile, _compileElement, _compileText, _compileNode } from './instance/compile';
import $mount from './api/lifecycle';

function Zue(options) {
  this._init(options);
}

Zue.prototype = {
  constructor: Zue,
  _init,
  _compile,
  _compileElement,
  _compileText,
  _compileNode,
  $mount
};

module.exports = window.Zue = Zue;
