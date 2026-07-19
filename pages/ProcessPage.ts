import { Page, FrameLocator, expect } from '@playwright/test';
import path from 'path';
import { APP } from '../utils/constants';
export class ProcessPage {

    readonly frame: FrameLocator;

    constructor(private page: Page) {
        this.frame = page.frameLocator('iframe').first();
    }

    // Verify Process button is available
    async verifyLearningInstance() {

        await expect(
            this.frame.getByRole('button', {
                name: 'Process'
            }).first()
        ).toBeVisible({
            timeout: 60000
        });
    }

    // Click Process
    async clickProcess() {

        await this.frame
            .getByRole('button', {
                name: 'Process'
            })
            .first()
            .click();
    }

    // Upload Invoice PDF
    async uploadDocument(fileName: string) {

        const filePath = path.resolve(fileName);

        await this.frame
            .locator('input[type="file"]')
            .setInputFiles(filePath);
    }

    // Download Folder
    async enterDownloadFolder(folder: string) {

        await this.frame
            .getByRole('textbox', {
                name: 'Download data to'
            })
            .fill(folder);
    }

    // Process Document
    async processDocument() {

        await this.frame
            .getByRole('button', {
                name: 'Process Documents'
            })
            .click();
    }

    // Wait until processing starts
    async waitForProcessing() {

        await this.page.waitForTimeout(5000);
    }

    // Open Status Popup
    async openStatus(): Promise<Page> {

        const popupPromise = this.page.waitForEvent('popup');

        await this.frame
            .getByRole('button', {
                name: 'View status'
            })
            .first()
            .click();

        const popup = await popupPromise;

        await popup.waitForLoadState();

        return popup;
    }

}