import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class HeroDetailPO extends PageObjectBase {
  @FirstByCss('div h2')
  PageLoaderElement get _title => q('div h2'); // e.g. 'Mr Freeze details!'

  @FirstByCss('div div')
  PageLoaderElement get _id => q('div div');

  @ByTagName('input')
  PageLoaderElement get _input => q('input');

  @ByTagName('button')
  PageLoaderElement get _button => q('button');

  Future<Map> get heroFromDetails async {
    if (_id == null) return null;
    final idAsString = (await _id.visibleText).split(':')[1];
    final text = await _title.visibleText;
    final matches = new RegExp((r'^(.*) details!$')).firstMatch(text);
    return heroData(idAsString, matches[1]);
  }

  Future clear() => _input.clear();
  Future type(String s) => _input.type(s);

  Future back() => _button.click();
}
