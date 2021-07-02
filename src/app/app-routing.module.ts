import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HistoryComponent} from "./history/history.component";
import {ReadingListComponent} from "./reading-list/reading-list.component";

const routes: Routes = [{
  path: "history",
  component: HistoryComponent
},
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"list",
    component:ReadingListComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
