@TestOn('browser')

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/src/dashboard_component.dart';
import 'package:angular_tour_of_heroes/src/hero_service.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

import 'dashboard_po.dart';
import 'matchers.dart';

NgTestFixture<DashboardComponent> fixture;
DashboardPO po;

final mockRouter = new MockRouter();

class MockRouter extends Mock implements Router {}

void main() {
  final testBed = new NgTestBed<DashboardComponent>().addProviders([
    provide(APP_BASE_HREF, useValue: '/'),
    HeroService,
    routerProviders,
    provide(Router, useValue: mockRouter),
  ]);

  // FIXME(docs): we don't need setUpAll() anymore

  setUp(() async {
    fixture = await testBed.create();
    po = await new DashboardPO().resolve(fixture);
  });

  tearDown(disposeAnyRunningTest);

  test('title', () async {
    expect(await po.title, 'Top Heroes');
  });

  test('show top heroes', () async {
    final expectedNames = ['Narco', 'Bombasto', 'Celeritas', 'Magneta'];
    expect(await po.heroNames, expectedNames);
  });

  test('select hero and navigate to detail', () async {
    clearInteractions(mockRouter);
    await po.selectHero(3);
    var c = verify(mockRouter.navigate(typed(captureAny), typed(captureAny)));
    expect(c.captured[0], '/detail/15');
    expect(c.captured[1], new IsNavParams());
    expect(c.captured.length, 2);
  });
}
