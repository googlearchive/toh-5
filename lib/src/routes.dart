import 'package:angular_router/angular_router.dart';

import 'route_paths.dart' as paths;
import 'dashboard_component.template.dart' as dct;
import 'hero_component.template.dart' as hct;
import 'hero_list_component.template.dart' as hlct;

class Routes {
  RoutePath get heroes => paths.heroes;
  RoutePath get dashboard => paths.dashboard;
  RoutePath get hero => paths.hero;

  final List<RouteDefinition> all = [
    RouteDefinition.redirect(path: '', redirectTo: paths.dashboard.toUrl()),
    RouteDefinition(
      path: paths.dashboard.path,
      component: dct.DashboardComponentNgFactory,
    ),
    RouteDefinition(
      path: paths.hero.path,
      component: hct.HeroComponentNgFactory,
    ),
    RouteDefinition(
      path: paths.heroes.path,
      component: hlct.HeroListComponentNgFactory,
    ),
  ];
}
