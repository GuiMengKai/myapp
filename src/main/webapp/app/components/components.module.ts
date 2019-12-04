import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MyappSharedLibsModule } from 'app/shared/shared-libs.module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppLayoutComponent,
        data: {
          authorities: ['ROLE_USER']
        },
        canActivate: [UserRouteAccessService]
      }
    ]),
    MyappSharedLibsModule
  ],
  declarations: [AppLayoutComponent]
})
export class ComponentsModule {}
