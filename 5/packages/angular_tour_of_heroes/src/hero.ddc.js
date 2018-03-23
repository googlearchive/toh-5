define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hero = Object.create(_root);
  src__hero.Hero = class Hero extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
  };
  (src__hero.Hero.new = function(id, name) {
    this[id$] = id;
    this[name$] = name;
  }).prototype = src__hero.Hero.prototype;
  dart.addTypeTests(src__hero.Hero);
  const id$ = Symbol("Hero.id");
  const name$ = Symbol("Hero.name");
  dart.setFieldSignature(src__hero.Hero, () => ({
    __proto__: dart.getFields(src__hero.Hero.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero.ddc", {
    "package:angular_tour_of_heroes/src/hero.dart": src__hero
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart"],"names":[],"mappings":";;;;;;;;IACY;;;;;;IACH;;;;;;;iCAEF,EAAO,EAAE,IAAS;IAAb,SAAE,GAAF,EAAE;IAAO,WAAI,GAAJ,IAAI;EAAC","file":"hero.ddc.js"}');
  // Exports:
  return {
    src__hero: src__hero
  };
});

//# sourceMappingURL=hero.ddc.js.map
