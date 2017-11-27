import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_tour_of_heroes/app_component.dart';

void main() {
  bootstrap(AppComponent, [
    routerProvidersHash // You can use routerProviders in production
  ]);
}
