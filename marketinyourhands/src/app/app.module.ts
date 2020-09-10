import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import * as primeng from "primeng";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as component from "./index";
import { UserService } from "./services/user.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    component.LayoutComponent,
    component.HeaderComponent,
    component.FooterComponent,
    component.SideBarComponent,
    component.HomeComponent,
    component.ProductSlideComponent,
    component.SignUpDialogComponent,
    component.SingleProductComponent,
    component.CheckOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // primeng
    primeng.TooltipModule,
    primeng.CarouselModule,
    primeng.ButtonModule,
    primeng.DialogModule,
    primeng.TabViewModule,
    primeng.BreadcrumbModule,
    primeng.GalleriaModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
