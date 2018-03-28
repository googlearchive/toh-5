@TestOn('browser')

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/src/route_paths.dart' show idParam;
import 'package:angular_tour_of_heroes/src/hero_list_component.dart';
import 'package:angular_tour_of_heroes/src/hero_service.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

import 'heroes_po.dart';
import 'utils.dart';

NgTestFixture<HeroListComponent> fixture;
HeroesPO po;

void main() {
  final injector = new InjectorProbe();
  final testBed = new NgTestBed<HeroListComponent>().addProviders([
    const ClassProvider(HeroService),
    const ClassProvider(Router, useClass: MockRouter),
  ]).addInjector(injector.init);

  setUp(() async {
    fixture = await testBed.create();
    po = await new HeroesPO().resolve(fixture);
  });

  tearDown(disposeAnyRunningTest);

  group('Basics:', basicTests);
  group('Selected hero:', () => selectedHeroTests(injector));
}

void basicTests() {
  test('title', () async {
    expect(await po.title, 'My Heroes');
  });

  test('hero count', () async {
    expect(po.heroes.length, 10);
  });

  test('no selected hero', () async {
    expect(await po.selected, null);
  });
}

void selectedHeroTests(InjectorProbe injector) {
  const targetHero = {idParam: 15, 'name': 'Magneta'};

  setUp(() async {
    await po.selectHero(4);
    po = await new HeroesPO().resolve(fixture);
  });

  test('is selected', () async {
    expect(await po.selected, targetHero);
  });

  test('show mini-detail', () async {
    expect(
        await po.myHeroNameInUppercase, equalsIgnoringCase(targetHero['name']));
  });

  test('go to detail', () async {
    await po.gotoDetail();
    final mockRouter = injector.get<MockRouter>(Router);
    final c = verify(mockRouter.navigate(typed(captureAny)));
    expect(c.captured.single, '/heroes/${targetHero[idParam]}');
  });

  test('select another hero', () async {
    await po.selectHero(0);
    po = await new HeroesPO().resolve(fixture);
    final heroData = {idParam: 11, 'name': 'Mr. Nice'};
    expect(await po.selected, heroData);
  });
}
