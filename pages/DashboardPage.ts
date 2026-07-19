import { Page, expect } from '@playwright/test';

export class DashboardPage {

    constructor(private page: Page) {}

    async openAILearning() {

    await this.page
        .getByRole('button', { name: 'Manage' })
        .waitFor({
            state: 'visible',
            timeout: 120000
        });

    await this.page
        .getByRole('button', { name: 'Manage' })
        .click();

    await this.page
        .getByRole('button', {
            name: 'AI',
            exact: true
        })
        .click();

    await this.page
        .getByRole('link', {
            name: 'Document Automation'
        })
        .click();
    
    await this.page
        .getByRole('link', {
            name: 'Create New'
        })
        .click();

    await this.page
        .locator('iframe')
        .first()
        .waitFor({
            state: 'visible',
            timeout: 120000
        });
}
  
}