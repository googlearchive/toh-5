define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_tour_of_heroes/src/hero_service', 'packages/angular_tour_of_heroes/src/hero.template', 'packages/angular_tour_of_heroes/src/mock_heroes.template', 'packages/angular/angular.template'], function(dart_sdk, reflector, hero_service, hero, mock_heroes, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero_service = hero_service.src__hero_service;
  const src__hero$46template = hero.src__hero$46template;
  const src__mock_heroes$46template = mock_heroes.src__mock_heroes$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_service$46template = Object.create(_root);
  let VoidToHeroService = () => (VoidToHeroService = dart.constFn(dart.fnType(src__hero_service.HeroService, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_service$46template, {
    /*src__hero_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_service$46template.initReflector = function() {
    if (dart.test(src__hero_service$46template._visited)) {
      return;
    }
    src__hero_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__hero_service.HeroService), dart.fn(() => new src__hero_service.HeroService.new(), VoidToHeroService()));
    src__hero$46template.initReflector();
    src__mock_heroes$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__hero_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_service.template.ddc", {
    "package:angular_tour_of_heroes/src/hero_service.template.dart": src__hero_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAgBI,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAO,kCAAe,CAAC,4CAAW,EAAE,cAAM,IAAI,iCAAW;AACzD,IAAM,kCAAa;AACnB,IAAM,yCAAa;AACnB,IAAM,gCAAa;EACrB","file":"hero_service.template.ddc.js"}');
  // Exports:
  return {
    src__hero_service$46template: src__hero_service$46template
  };
});

//# sourceMappingURL=hero_service.template.ddc.js.map
