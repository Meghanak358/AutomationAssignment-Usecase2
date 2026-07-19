import { Page, expect } from '@playwright/test';

export class ValidationPage {

    constructor(private page: Page) {}

    // -------------------------------
    // Open Learning Instance Request
    // -------------------------------

    async openLearningInstance(instanceName: string) {

        await this.page.waitForLoadState('domcontentloaded');

        await this.page.getByRole('link', {
            name: instanceName
        }).click();
    }

    // -------------------------------
    // Open Extraction
    // -------------------------------

    async openExtraction() {

        await this.page.getByRole('button', {
            name: /Extraction/
        }).click();
    }

    // -------------------------------
    // Validate Documents
    // -------------------------------

    async openValidation(): Promise<Page> {

        const popupPromise = this.page.waitForEvent('popup');

        await this.page.getByRole('button', {
            name: /Validate documents/
        }).click();

        const validationPage = await popupPromise;

        await validationPage.waitForLoadState();

        return validationPage;
    }

    // -------------------------------
    // Switch to Table View
    // -------------------------------

    async switchToTableView() {

        await this.page.getByRole('radio', {
            name: 'Table view'
        }).check();
    }

    // -------------------------------
    // Verify Validation Screen
    // -------------------------------

    async verifyValidation() {

        await expect(
            this.page.getByRole('radio', {
                name: 'Table view'
            })
        ).toBeVisible();
    }

    // -------------------------------
    // Delete Learning Instance
    // -------------------------------

    async deleteLearningInstance() {

        await this.page.getByRole('button', {
            name: 'Delete'
        }).click();

        await this.page.getByRole('button', {
            name: 'Delete'
        }).click();
    }

}