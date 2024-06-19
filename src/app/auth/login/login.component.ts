import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_service/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup;
    formSubmitted = false;
    tapOnLoginLabel = 0;
    constructor(
        private toastr: ToastrService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private auth: AuthService
    ) {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            key: new FormControl(''),
        });
    }

    activateSuperAdminLogin() {
        this.tapOnLoginLabel++;
        if (this.tapOnLoginLabel >= 5) {
            this.loginForm.controls.key.setValidators(Validators.required);
        }
    }

    get ctrl() {
        return this.loginForm.controls;
    }

    async submit(): Promise<void | null> {
        this.formSubmitted = true;
        const { returnUrl } = this.activatedRoute.snapshot.queryParams;
        console.log(this.loginForm.invalid);
        
        if (this.loginForm.invalid) return null;
        const value = { ...this.loginForm.value };
        this.router.navigate([returnUrl || '/page']);
        // if (!value.key) {
        //     await this.auth.getPublicKey();
        //     value.password = encryptPassword(value.password);
        // }
        // const resp = await this.auth.login(value);
        // if (resp && !resp.error) {
        //     this.toastr.success('Welcome', `Hi ${resp.company || 'Admin'}`);
        //     setTimeout(() => this.router.navigate([returnUrl || '/page']), 100);
        // }
    }
}
