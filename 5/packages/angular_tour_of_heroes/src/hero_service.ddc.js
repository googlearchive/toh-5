define(['dart_sdk', 'packages/angular_tour_of_heroes/src/mock_heroes', 'packages/angular_tour_of_heroes/src/hero'], function(dart_sdk, mock_heroes, hero) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__mock_heroes = mock_heroes.src__mock_heroes;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__hero_service = Object.create(_root);
  const $firstWhere = dartx.firstWhere;
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  let HeroTobool = () => (HeroTobool = dart.constFn(dart.fnType(core.bool, [src__hero.Hero])))();
  src__hero_service.HeroService = class HeroService extends core.Object {
    getAll() {
      return async.async(ListOfHero(), function* getAll() {
        return src__mock_heroes.mockHeroes;
      });
    }
    get(id) {
      return async.async(src__hero.Hero, (function* get() {
        return (yield this.getAll())[$firstWhere](dart.fn(hero => hero.id == id, HeroTobool()));
      }).bind(this));
    }
  };
  (src__hero_service.HeroService.new = function() {
  }).prototype = src__hero_service.HeroService.prototype;
  dart.addTypeTests(src__hero_service.HeroService);
  dart.setMethodSignature(src__hero_service.HeroService, () => ({
    __proto__: dart.getMethods(src__hero_service.HeroService.__proto__),
    getAll: dart.fnType(async.Future$(core.List$(src__hero.Hero)), []),
    get: dart.fnType(async.Future$(src__hero.Hero), [core.int])
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_service.ddc", {
    "package:angular_tour_of_heroes/src/hero_service.dart": src__hero_service
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAS8B;cAAS,4BAAU;;;QAE9B,EAAM;AAAE;cACrB,EAAC,MAAM,WAAM,gBAAc,CAAC,QAAC,IAAI,IAAK,IAAI,GAAG,IAAI,EAAE;MAAC;;;;EAC1D","file":"hero_service.ddc.js"}');
  // Exports:
  return {
    src__hero_service: src__hero_service
  };
});

//# sourceMappingURL=hero_service.ddc.js.map
