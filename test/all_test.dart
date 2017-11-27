@Tags(const ['aot'])
@TestOn('browser')
library heroes_test;

import 'package:angular/angular.dart';
import 'package:test/test.dart';

import 'app.dart' as app;
import 'dashboard.dart' as dashboard;
import 'heroes.dart' as heroes;
import 'hero_detail.dart' as hero_detail;

@AngularEntrypoint()
void main() {
  group('app:', app.main);
  group('dashboard:', dashboard.main);
  group('heroes:', heroes.main);
  group('heroes_detail:', hero_detail.main);
}
