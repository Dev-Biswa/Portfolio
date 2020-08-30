import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import * as primeng from "primeng";
import { FormsModule } from "@angular/forms";
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    // primeng
    primeng.TooltipModule,
    primeng.CarouselModule,
    primeng.ButtonModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
