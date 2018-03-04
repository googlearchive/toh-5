// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_service.dart';
export 'hero_service.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'hero.dart';
import 'mock_heroes.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'mock_heroes.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(HeroService, () => new HeroService());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
