import { Page, expect } from '@playwright/test';
import { APP } from '../utils/constants';
export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto(
            APP.URL
        );
    }

    async login(email: string, password: string) {

        await this.page.getByRole('textbox', { name: 'Username' }).fill(email);

        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);

        await this.page.getByRole('button', { name: 'Log in' }).click();

        await this.page.waitForURL(/home/, { timeout: 120000 });
    }

    async verifyLogin() {
        await expect(
            this.page.getByRole('link', { name: 'AI', exact: true })
        ).toBeVisible({ timeout: 60000 });
    }
}