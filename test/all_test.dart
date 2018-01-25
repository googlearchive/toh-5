@TestOn('browser')
library heroes_test;

import 'package:test/test.dart';

import 'all_test.template.dart' as ng;
import 'app.dart' as app;
import 'dashboard.dart' as dashboard;
import 'heroes.dart' as heroes;
import 'hero_detail.dart' as hero_detail;

void main() {
  ng.initReflector();
  group('app:', app.main);
  group('dashboard:', dashboard.main);
  group('heroes:', heroes.main);
  group('heroes_detail:', hero_detail.main);
}
