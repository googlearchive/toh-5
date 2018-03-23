define(['dart_sdk', 'packages/angular_tour_of_heroes/src/hero_list_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/common/directives/ng_if', 'packages/angular/src/common/pipes/uppercase_pipe', 'packages/angular_tour_of_heroes/src/hero_list_component', 'packages/angular_tour_of_heroes/src/hero', 'packages/angular_tour_of_heroes/src/hero_service', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular/src/di/reflector', 'packages/angular_tour_of_heroes/src/hero.template', 'packages/angular_tour_of_heroes/src/hero_service.template', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/angular_tour_of_heroes/src/route_paths.template'], function(dart_sdk, hero_list_component$46css, view_type, constants, view, app_view_utils, app_view, ng_for, ng_if, uppercase_pipe, hero_list_component, hero, hero_service, router_outlet_directive, reflector, hero$, hero_service$, angular, angular_router, route_paths) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero_list_component$46css$46shim = hero_list_component$46css.src__hero_list_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__common__pipes__uppercase_pipe = uppercase_pipe.src__common__pipes__uppercase_pipe;
  const src__hero_list_component = hero_list_component.src__hero_list_component;
  const src__hero = hero.src__hero;
  const src__hero_service = hero_service.src__hero_service;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero$.src__hero$46template;
  const src__hero_service$46template = hero_service$.src__hero_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__route_paths$46template = route_paths.src__route_paths$46template;
  const _root = Object.create(null);
  const src__hero_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroListComponent = () => (AppViewOfHeroListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppViewOfHeroListComponent = () => (AppViewAndintToAppViewOfHeroListComponent = dart.constFn(dart.fnType(AppViewOfHeroListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ComponentRefOfHeroListComponent = () => (ComponentRefOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroListComponent = () => (ComponentFactoryOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_list_component.HeroListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.styles$HeroListComponent*/get styles$HeroListComponent() {
      return dart.constList([src__hero_list_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _expr_0 = Symbol('_expr_0');
  const _pipe_uppercase_0 = Symbol('_pipe_uppercase_0');
  let const$;
  src__hero_list_component$46template.ViewHeroListComponent0 = class ViewHeroListComponent0 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('My Heroes');
      this[_el_0][$append](_text_1);
      this[_el_2] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      this[_el_2].className = 'heroes';
      this.addShimC(this[_el_2]);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], src__hero_list_component$46template.viewFactory_HeroListComponent1);
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      let _anchor_4 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], src__hero_list_component$46template.viewFactory_HeroListComponent2);
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      this[_pipe_uppercase_0] = new src__common__pipes__uppercase_pipe.UpperCasePipe.new();
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.heroes;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_3_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_3_9].ngDoCheck();
      this[_NgIf_4_9].ngIf = _ctx.selectedHero != null;
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_4];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (src__hero_list_component$46template.ViewHeroListComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0] = null;
    this[_pipe_uppercase_0] = null;
    src__hero_list_component$46template.ViewHeroListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-heroes'));
    let t = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
    t == null ? src__hero_list_component$46template.ViewHeroListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__hero_list_component$46template.styles$HeroListComponent) : t;
    this.setupComponentType(src__hero_list_component$46template.ViewHeroListComponent0._renderType);
  }).prototype = src__hero_list_component$46template.ViewHeroListComponent0.prototype;
  dart.addTypeTests(src__hero_list_component$46template.ViewHeroListComponent0);
  dart.setMethodSignature(src__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.UListElement),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_pipe_uppercase_0]: dart.fieldType(src__common__pipes__uppercase_pipe.UpperCasePipe)
  }));
  dart.defineLazy(src__hero_list_component$46template.ViewHeroListComponent0, {
    /*src__hero_list_component$46template.ViewHeroListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_list_component$46template.viewFactory_HeroListComponent0 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template.ViewHeroListComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent0, AppViewAndintToAppViewOfHeroListComponent());
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _text_4 = Symbol('_text_4');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  src__hero_list_component$46template._ViewHeroListComponent1 = class _ViewHeroListComponent1 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'badge';
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(' ');
      this[_el_0][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_0][$append](this[_text_4]);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_hero = src__hero.Hero._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_hero == _ctx.selectedHero;
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'selected', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_hero.id);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_4][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    [_handle_click_0_0]($event) {
      let local_hero = src__hero.Hero._check(this.locals[$_get]('$implicit'));
      this.ctx.onSelect(local_hero);
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__hero_list_component$46template._ViewHeroListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__hero_list_component$46template._ViewHeroListComponent1.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponent1);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponent1 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent1, AppViewAndintToAppViewOfHeroListComponent());
  const _el_4 = Symbol('_el_4');
  const _pipe_uppercase_0_0 = Symbol('_pipe_uppercase_0_0');
  src__hero_list_component$46template._ViewHeroListComponent2 = class _ViewHeroListComponent2 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(' is my hero');
      this[_el_1][$append](_text_3);
      this[_el_4] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_4]);
      let _text_5 = html.Text.new('View Details');
      this[_el_4][$append](_text_5);
      this[_el_4][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'gotoDetail')));
      this[_pipe_uppercase_0_0] = src__core__linker__app_view_utils.pureProxy1(core.String, core.String, dart.bind(src__hero_list_component$46template.ViewHeroListComponent0.as(this.parentView)[_pipe_uppercase_0], 'transform'));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(this[_pipe_uppercase_0_0](_ctx.selectedHero.name));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_4] = null;
    this[_expr_0] = null;
    this[_pipe_uppercase_0_0] = null;
    src__hero_list_component$46template._ViewHeroListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__hero_list_component$46template._ViewHeroListComponent2.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponent2);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponent2, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponent2, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.ButtonElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_pipe_uppercase_0_0]: dart.fieldType(StringToString())
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponent2 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent2, AppViewAndintToAppViewOfHeroListComponent());
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.styles$HeroListComponentHost*/get styles$HeroListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroListComponent_0_5 = Symbol('_HeroListComponent_0_5');
  src__hero_list_component$46template._ViewHeroListComponentHost0 = class _ViewHeroListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroListComponent_0_5] = new src__hero_list_component.HeroListComponent.new(src__hero_service.HeroService._check(this.injectorGet(dart.wrapType(src__hero_service.HeroService), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_compView_0].create(this[_HeroListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroListComponent()).new(0, this, this.rootEl, this[_HeroListComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_HeroListComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroListComponent_0_5] = null;
    src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_list_component$46template._ViewHeroListComponentHost0.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponentHost0);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroListComponent_0_5]: dart.fieldType(src__hero_list_component.HeroListComponent)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.HeroListComponentNgFactory*/get HeroListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroListComponent()).new('my-heroes', src__hero_list_component$46template.viewFactory_HeroListComponentHost0, src__hero_list_component$46template._HeroListComponentMetadata));
    },
    /*src__hero_list_component$46template._HeroListComponentMetadata*/get _HeroListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_list_component$46template.initReflector = function() {
    if (dart.test(src__hero_list_component$46template._visited)) {
      return;
    }
    src__hero_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_list_component.HeroListComponent), src__hero_list_component$46template.HeroListComponentNgFactory);
    src__hero$46template.initReflector();
    src__hero_service$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__route_paths$46template.initReflector();
  };
  dart.fn(src__hero_list_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_list_component.template.ddc", {
    "package:angular_tour_of_heroes/src/hero_list_component.template.dart": src__hero_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.template.dart"],"names":[],"mappings":"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","file":"hero_list_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_list_component$46template: src__hero_list_component$46template
  };
});

//# sourceMappingURL=hero_list_component.template.ddc.js.map
