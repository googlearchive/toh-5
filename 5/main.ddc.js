define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/angular_tour_of_heroes/app_component.template', 'packages/angular/src/platform/bootstrap', 'packages/angular_tour_of_heroes/app_component', 'packages/angular_router/src/constants'], function(dart_sdk, angular, angular_router, app_component, bootstrap, app_component$, constants) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const app_component$46template = app_component.app_component$46template;
  const src__platform__bootstrap = bootstrap.src__platform__bootstrap;
  const app_component$0 = app_component$.app_component;
  const src__constants = constants.src__constants;
  const _root = Object.create(null);
  const main$46template = Object.create(_root);
  const main = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(main$46template, {
    /*main$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  main$46template.initReflector = function() {
    if (dart.test(main$46template._visited)) {
      return;
    }
    main$46template._visited = true;
    main$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    app_component$46template.initReflector();
  };
  dart.fn(main$46template.initReflector, VoidTovoid());
  main.main = function() {
    src__platform__bootstrap.bootstrapStatic(dart.dynamic, dart.wrapType(app_component$0.AppComponent), [src__constants.routerProvidersHash], main$46template.initReflector);
  };
  dart.fn(main.main, VoidTovoid());
  main$46template.main = main.main;
  dart.trackLibraries("web/main.ddc", {
    "main.template.dart": main$46template,
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart","main.template.dart"],"names":[],"mappings":";;;;;;;;;;;;QAYM,eAAE;;;kBAAF,eAAE;MAAF,ACIF,eDJI,SCII;YAAG;;;;EDJT,eAAE;ACMN,kBDNI,ACMA,eDNE,SCMM,GAAE;AACZ;;AAEF,IDTI,eAAE,YCSK;AAEX,IDXI,ACWE,eDXA,cCWa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,sCAAa;EACrB;UDfM,eAAE;;AALN,4CAAe,eACX,2CAAY,EACZ,CACE,kCAAmB,GAErB,AAAG,eAAD,cAAc;EACtB;;EADM,eAAE;;0BAAF,eAAE;;;;;qBAAF,eAAE","file":"main.ddc.js"}');
  // Exports:
  return {
    main$46template: main$46template,
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
