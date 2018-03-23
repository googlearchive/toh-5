import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:mockito/mockito.dart';

const /* List<Provider|List<Provider>> */ routerProvidersForTesting = const [
  const ValueProvider.forToken(appBaseHref, '/'),
  routerProviders,
  // Mock platform location even with real router, otherwise sometimes tests hang.
  const ClassProvider(PlatformLocation, useClass: MockPlatformLocation),
];

//-----------------------------------------------------------------------------

class InjectorProbe {
  Injector injector;

  // Signature must match the argument type of `NgTestBed.addInjector()`.
  Injector init([Injector injector]) {
    this.injector = injector;
    return injector;
  }

  T get<T>(dynamic token) => injector?.get(token);
}

//-----------------------------------------------------------------------------

@Injectable()
class MockRouter extends Mock implements Router {}

@Injectable()
class MockPlatformLocation extends Mock implements PlatformLocation {
  String _url;

  String get hash => '';
  String get pathname => _url ?? '';
  String get search => '';

  void pushState(state, String title, String url) => _url = url;
}

//-----------------------------------------------------------------------------
// Misc helper functions

Map<String, dynamic> heroData(String idAsString, String name) =>
    {'id': int.parse(idAsString, onError: (_) => -1), 'name': name};

Stream<T> inIndexOrder<T>(Iterable<Future<T>> futures) async* {
  for (var x in futures) yield await x;
}
