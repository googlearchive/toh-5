import 'package:angular2/core.dart';
import 'package:angular2/router.dart';

import 'hero.dart';
import 'hero_service.dart';

@Component(
    selector: 'my-dashboard',
    templateUrl: 'dashboard_component.html',
    styleUrls: const ['dashboard_component.css'])
class DashboardComponent implements OnInit {
  List<Hero> heroes;
  final Router _router;
  final HeroService _heroService;

  DashboardComponent(this._heroService, this._router);

  ngOnInit() async =>
      heroes = (await _heroService.getHeroes()).getRange(1, 5).toList();

  gotoDetail(Hero hero) {
    var link = [
      'HeroDetail',
      {'id': hero.id.toString()}
    ];
    _router.navigate(link);
  }
}
