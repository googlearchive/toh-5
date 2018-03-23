define(['dart_sdk', 'packages/angular_tour_of_heroes/src/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__mock_heroes = Object.create(_root);
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(src__hero.Hero)))();
  dart.defineLazy(src__mock_heroes, {
    /*src__mock_heroes.mockHeroes*/get mockHeroes() {
      return JSArrayOfHero().of([new src__hero.Hero.new(11, 'Mr. Nice'), new src__hero.Hero.new(12, 'Narco'), new src__hero.Hero.new(13, 'Bombasto'), new src__hero.Hero.new(14, 'Celeritas'), new src__hero.Hero.new(15, 'Magneta'), new src__hero.Hero.new(16, 'RubberMan'), new src__hero.Hero.new(17, 'Dynama'), new src__hero.Hero.new(18, 'Dr IQ'), new src__hero.Hero.new(19, 'Magma'), new src__hero.Hero.new(20, 'Tornado')]);
    }
  });
  dart.trackLibraries("packages/angular_tour_of_heroes/src/mock_heroes.ddc", {
    "package:angular_tour_of_heroes/src/mock_heroes.dart": src__mock_heroes
  }, '{"version":3,"sourceRoot":"","sources":["mock_heroes.dart"],"names":[],"mappings":";;;;;;;;;;;MAEiB,2BAAU;YAAG,qBAC5B,IAAI,kBAAI,CAAC,IAAI,aACb,IAAI,kBAAI,CAAC,IAAI,UACb,IAAI,kBAAI,CAAC,IAAI,aACb,IAAI,kBAAI,CAAC,IAAI,cACb,IAAI,kBAAI,CAAC,IAAI,YACb,IAAI,kBAAI,CAAC,IAAI,cACb,IAAI,kBAAI,CAAC,IAAI,WACb,IAAI,kBAAI,CAAC,IAAI,UACb,IAAI,kBAAI,CAAC,IAAI,UACb,IAAI,kBAAI,CAAC,IAAI","file":"mock_heroes.ddc.js"}');
  // Exports:
  return {
    src__mock_heroes: src__mock_heroes
  };
});

//# sourceMappingURL=mock_heroes.ddc.js.map
