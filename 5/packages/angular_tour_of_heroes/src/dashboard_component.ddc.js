define(['dart_sdk', 'packages/angular_tour_of_heroes/src/route_paths', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_tour_of_heroes/src/hero', 'packages/angular_tour_of_heroes/src/hero_service'], function(dart_sdk, route_paths, lifecycle_hooks, hero, hero_service) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_paths = route_paths.src__route_paths;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__hero = hero.src__hero;
  const src__hero_service = hero_service.src__hero_service;
  const _root = Object.create(null);
  const src__dashboard_component = Object.create(_root);
  const $toString = dartx.toString;
  const $toList = dartx.toList;
  const $take = dartx.take;
  const $skip = dartx.skip;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  const _heroService = Symbol('_heroService');
  src__dashboard_component.DashboardComponent = class DashboardComponent extends core.Object {
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    heroUrl(id) {
      return src__route_paths.hero.toUrl({parameters: new (IdentityMapOfString$String()).from(["id", dart.toString(id)])});
    }
    ngOnInit() {
      return async.async(dart.void, (function* ngOnInit() {
        this.heroes = (yield this[_heroService].getAll())[$skip](1)[$take](4)[$toList]();
      }).bind(this));
    }
  };
  (src__dashboard_component.DashboardComponent.new = function(heroService) {
    this[heroes] = null;
    this[_heroService] = heroService;
  }).prototype = src__dashboard_component.DashboardComponent.prototype;
  dart.addTypeTests(src__dashboard_component.DashboardComponent);
  const heroes = Symbol("DashboardComponent.heroes");
  src__dashboard_component.DashboardComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__dashboard_component.DashboardComponent, () => ({
    __proto__: dart.getMethods(src__dashboard_component.DashboardComponent.__proto__),
    heroUrl: dart.fnType(core.String, [core.int]),
    ngOnInit: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setFieldSignature(src__dashboard_component.DashboardComponent, () => ({
    __proto__: dart.getFields(src__dashboard_component.DashboardComponent.__proto__),
    heroes: dart.fieldType(ListOfHero()),
    [_heroService]: dart.finalFieldType(src__hero_service.HeroService)
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/src/dashboard_component.ddc", {
    "package:angular_tour_of_heroes/src/dashboard_component.dart": src__dashboard_component
  }, '{"version":3,"sourceRoot":"","sources":["dashboard_component.dart"],"names":[],"mappings":";;;;;;;QAuBM,gBAAK;;;;;;;;;;;;;;IAPE;;;;;;YAMI,EAAM;YACjB,AAAA,AAAM,iBAAD,KAAK,MAAM,cAAa,yCAAO,IAAO,gBAAE,EAAE;IAAa;;AAExC;AACtB,mBAAM,GAAG,CAAC,MAAM,kBAAY,OAAO,UAAQ,CAAC,SAAO,CAAC,WAAS;MAC/D;;;8DAPwB,WAAY;IAJzB,YAAM;IAIO,kBAAY,GAAZ,WAAY;EAAC","file":"dashboard_component.ddc.js"}');
  // Exports:
  return {
    src__dashboard_component: src__dashboard_component
  };
});

//# sourceMappingURL=dashboard_component.ddc.js.map
