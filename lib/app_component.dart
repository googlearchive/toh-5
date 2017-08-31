import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'src/dashboard_component.dart';
import 'src/hero_detail_component.dart';
import 'src/hero_service.dart';
import 'src/heroes_component.dart';

@Component(
    selector: 'my-app',
    template: '''
      <h1>{{title}}</h1>
      <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Heroes']">Heroes</a>
      </nav>
      <router-outlet></router-outlet>''',
    styleUrls: const ['app_component.css'],
    directives: const [ROUTER_DIRECTIVES],
    providers: const [HeroService, ROUTER_PROVIDERS])
@RouteConfig(const [
  const Route(
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
      useAsDefault: true),
  const Route(
      path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent),
  const Route(path: '/heroes', name: 'Heroes', component: HeroesComponent)
])
class AppComponent {
  String title = 'Tour of Heroes';
}
