import 'package:angular2/core.dart';
import 'package:angular2/router.dart'; // for testing only

import 'hero_service.dart';
import 'heroes_component.dart';

@Component(
    selector: 'my-app',
    template: '''
      <h1>{{title}}</h1>
      <my-heroes></my-heroes>''',
    directives: const [HeroesComponent],
    providers: const [ROUTER_PROVIDERS, HeroService])
class AppComponent {
  String title = 'Tour of Heroes';
}
