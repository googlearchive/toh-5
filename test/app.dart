import 'dart:html';
@Tags(const ['aot'])
@TestOn('browser')
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/app_component.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

import 'app_po.dart';

NgTestFixture<AppCompWrapper> fixture;
AppPO appPO;
Router router;

final mockPlatformLocation = new MockPlatformLocation();

class MockPlatformLocation extends Mock implements PlatformLocation {}

// Some tests fail on occasion, so there must be some lingering timing issues.
void main() {
  final testBed = new NgTestBed<AppCompWrapper>().addProviders([
    provide(APP_BASE_HREF, useValue: '/'),
    routerProviders,
    provide(PlatformLocation, useValue: new FakePlatformLocation()),
  ]);

  setUp(() async {
    fixture = await testBed.create();
    await fixture.update((component) => router = component.router);
    await router.navigate('/');
    await fixture.update((c) {});
    appPO = await fixture.resolvePageObject(AppPO);
  });

  tearDown(disposeAnyRunningTest);

  group('Basics:', basicTests);
  group('Defaults:', dashboardTests);

  group('Select Heroes:', () {
    setUp(() async {
      await appPO.selectTab(1);
      await fixture.update((c) {});
      appPO = await fixture.resolvePageObject(AppPO);
      // print(fixture.rootElement.innerHtml);
    });

    test('route', () async {
      expect(router.current.path, '/heroes');
    });

    test('tab is showing', () {
      expect(appPO.heroesTabIsActive, isTrue);
    });
  });

  group('Select Dashboard:', () {
    setUp(() async {
      await appPO.selectTab(1);
      await appPO.selectTab(0);
      appPO = await fixture.resolvePageObject(AppPO);
    });

    dashboardTests();
  });

  group('Deep linking:', () {
    test('navigate to hero details', () async {
      await router.navigate('/detail/11');
      await fixture.update((c) {});
      expect(fixture.rootElement.querySelector('hero-detail'), isNotNull);
    });

    test('navigate to heroes', () async {
      await router.navigate('/heroes');
      await fixture.update((c) {});
      expect(fixture.rootElement.querySelector('my-heroes'), isNotNull);
    });
  });
}

void basicTests() {
  test('page title', () async {
    expect(await appPO.pageTitle, 'Tour of Heroes');
  });

  test('tab titles', () async {
    final expectTitles = ['Dashboard', 'Heroes'];
    expect(await appPO.tabTitles, expectTitles);
  });
}

void dashboardTests() {
  test('route', () async {
    expect(router.current.path, '/dashboard');
  });

  test('tab is showing', () {
    expect(appPO.dashboardTabIsActive, isTrue);
    // print(fixture.rootElement.innerHtml);
  });
}

@Component(
  selector: 'test-router',
  directives: const [AppComponent],
  template: '<my-app></my-app>',
)
class AppCompWrapper {
  Router router;
  AppCompWrapper(this.router);
}

// No more than what we need for this test
class FakePlatformLocation extends PlatformLocation {
  String _url;

  @override
  String get hash => '';

  @override
  String get pathname => _url ?? '';

  @override
  void pushState(state, String title, String url) {
    // print('pushState: ... $url');
    _url = url;
  }

  @override
  String get search => '';

  @override
  noSuchMethod(i) => null;
}
