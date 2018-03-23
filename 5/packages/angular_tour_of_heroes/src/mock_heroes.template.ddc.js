define(['dart_sdk', 'packages/angular_tour_of_heroes/src/hero.template'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero$46template = hero.src__hero$46template;
  const _root = Object.create(null);
  const src__mock_heroes$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__mock_heroes$46template, {
    /*src__mock_heroes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__mock_heroes$46template.initReflector = function() {
    if (dart.test(src__mock_heroes$46template._visited)) {
      return;
    }
    src__mock_heroes$46template._visited = true;
    src__hero$46template.initReflector();
  };
  dart.fn(src__mock_heroes$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/src/mock_heroes.template.ddc", {
    "package:angular_tour_of_heroes/src/mock_heroes.template.dart": src__mock_heroes$46template
  }, '{"version":3,"sourceRoot":"","sources":["mock_heroes.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,oCAAQ;YAAG;;;;;AAEb,kBAAI,oCAAQ,GAAE;AACZ;;AAEF,2CAAW;AAEX,IAAM,kCAAa;EACrB","file":"mock_heroes.template.ddc.js"}');
  // Exports:
  return {
    src__mock_heroes$46template: src__mock_heroes$46template
  };
});

//# sourceMappingURL=mock_heroes.template.ddc.js.map
