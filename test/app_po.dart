import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class AppPO {
  @ByTagName('h1')
  PageLoaderElement _h1;

  @ByCss('nav a')
  List<PageLoaderElement> _tabLinks;

  @ByTagName('my-dashboard')
  @optional
  PageLoaderElement _myDashboard;

  @ByTagName('my-heroes')
  @optional
  PageLoaderElement _myHeroes;

  Future<String> get pageTitle => _h1.visibleText;

  Future<List<String>> get tabTitles =>
      inIndexOrder(_tabLinks.map((el) => el.visibleText)).toList();

  Future selectTab(int index) => _tabLinks[index].click();

  bool get dashboardTabIsActive => _myDashboard != null;

  bool get heroesTabIsActive => _myHeroes != null;
}
