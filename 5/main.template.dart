// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'main.dart';
export 'main.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_tour_of_heroes/app_component.template.dart' as ng;
import 'main.template.dart' as self;
import 'main.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_router/angular_router.template.dart' as _ref2;
import 'package:angular_tour_of_heroes/app_component.template.dart' as _ref3;
import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/di/injector/hierarchical.dart' as _i2;
import 'package:angular_router/src/location/hash_location_strategy.dart' as _i3;
import 'package:angular_router/src/location/browser_platform_location.dart' as _i4;
import 'package:angular_router/src/location/location.dart' as _i5;
import 'package:angular_router/src/router/router_impl.dart' as _i6;
import 'package:angular_router/src/location/platform_location.dart' as _i7;
import 'package:angular/src/core/di/opaque_token.dart' as _i8;
import 'package:angular_router/src/location/location_strategy.dart' as _i9;
import 'package:angular_router/src/router_hook.dart' as _i10;
import 'package:angular_router/src/router/router.dart' as _i11;

_i1.Injector injector$Injector([_i1.Injector parent]) => new _Injector$injector._(parent);

class _Injector$injector extends _i2.HierarchicalInjector {
  _Injector$injector._([_i1.Injector parent]) : super(parent);

  _i3.HashLocationStrategy _field0;

  _i4.BrowserPlatformLocation _field1;

  _i5.Location _field2;

  _i6.RouterImpl _field3;

  _i3.HashLocationStrategy _getHashLocationStrategy$0() => _field0 ??= new _i3.HashLocationStrategy(inject(_i7.PlatformLocation), injectOptional(const _i8.OpaqueToken<String>('appBaseHref'), null));
  _i4.BrowserPlatformLocation _getBrowserPlatformLocation$1() => _field1 ??= new _i4.BrowserPlatformLocation();
  _i5.Location _getLocation$2() => _field2 ??= new _i5.Location(inject(_i9.LocationStrategy));
  _i6.RouterImpl _getRouterImpl$3() => _field3 ??= new _i6.RouterImpl(inject(_i5.Location), injectOptional(_i10.RouterHook, null));
  _i1.Injector _getInjector$4() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, _i9.LocationStrategy)) {
      return _getHashLocationStrategy$0();
    }
    if (identical(token, _i7.PlatformLocation)) {
      return _getBrowserPlatformLocation$1();
    }
    if (identical(token, _i5.Location)) {
      return _getLocation$2();
    }
    if (identical(token, _i11.Router)) {
      return _getRouterImpl$3();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$4();
    }
    return orElse;
  }
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
