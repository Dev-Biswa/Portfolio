import {
  ViewEncapsulation,
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./signup-dialog.component.html",
  styleUrls: ["./signup-dialog.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpDialogComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

  @Input() displayDialog: boolean;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  signinForm: FormGroup;
  signupForm: FormGroup;

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.signinForm = this.fb.group({
      email: ["", Validators.required],
      password: [""],
    });
    this.signupForm = this.fb.group({
      fullname: ["", Validators.required],
      email: ["", Validators.required],
      password: [""],
      confirmpassword: [""],
    });
  }

  onHide(event: boolean) {
    this.close.emit(false);
  }
}
