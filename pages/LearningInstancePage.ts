import { Page, FrameLocator, expect } from '@playwright/test';
import { invoiceData } from '../testdata/invoiceData';
export class LearningInstancePage {

    readonly frame: FrameLocator;

    constructor(private page: Page) {
        // Document Automation loads inside the first iframe
        this.frame = page.frameLocator('iframe').first();
    }

    // ---------------------------------------------------
    // Create Learning Instance
    // ---------------------------------------------------

    async create() {

    // Wait until the Learning Instances page is loaded
    await expect(
        this.frame.getByText('Learning Instances')
    ).toBeVisible({
        timeout: 60000
    });

    // Click Create new
    await this.frame
        .getByRole('button', {
            name: /Create new/i
        })
        

    // Wait until popup appears
    await expect(
        this.frame.getByRole('heading', {
            name: 'Create Learning Instance'
        })
    ).toBeVisible();

    // Fill Name
    await this.frame
        .getByRole('textbox', {
            name: 'Name'
        })
        .fill('InvoiceLearningInstance');

    // Provider dropdown
    await this.frame
        .locator('text=Automation Anywhere (Pre-trained)')
        .click();

    // Select User-defined
    await this.frame
        .getByText('User-defined')
        .click();

    // Click Next
    await this.frame
        .getByRole('button', {
            name: 'Next'
        })
        .click();
}
    // ---------------------------------------------------
    // User Defined Model
 
  

    // ---------------------------------------------------
    // Form Fields
    // ---------------------------------------------------

    async addFormFields() {

    // ---------- Invoice Number ----------

    await this.frame
        .locator('button')
        .filter({ hasText: 'Add a field' })
        .click();

    await this.frame
        .getByRole('textbox', { name: 'Field name' })
        .fill('Invoice_number');

    await this.frame
        .getByRole('textbox', { name: 'Field label' })
        .fill('Invoice Number');

    await this.frame
        .locator('.rio-select-input')
        .first()
        .click();

    await this.frame
        .getByText('Text', { exact: true })
        .click();

    await this.frame
        .getByRole('button', { name: 'Submit' })
        .click();

    // ---------- Invoice Date ----------

    await this.frame
        .locator('button')
        .filter({ hasText: 'Add a field' })
        .click();

    await this.frame
        .getByRole('textbox', { name: 'Field name' })
        .fill('Invoice_date');

    await this.frame
        .getByRole('textbox', { name: 'Field label' })
        .fill('Invoice Date');

    await this.frame
        .locator('.rio-select-input')
        .first()
        .click();

    await this.frame
        .getByText('Date', { exact: true })
        .click();

    await this.frame
        .getByRole('button', { name: 'Submit' })
        .click();
}

    // ---------------------------------------------------
    // Table Fields
    // ---------------------------------------------------

    async addTableFields() {

    // Open Table Fields tab
    await this.frame
        .getByRole('tab', { name: 'Table fields' })
        .click();

    // ==========================
    // Unit Price
    // ==========================

    await this.frame
        .locator('button')
        .filter({ hasText: 'Add a field' })
        .click();

    await this.frame
        .getByRole('textbox', { name: 'Field name' })
        .fill('Unit_price');

    await this.frame
        .getByRole('textbox', { name: 'Field label' })
        .fill('Unit price');

    await this.frame
        .locator('.rio-select-input')
        .first()
        .click();

    await this.frame
        .getByText('Number', { exact: true })
        .click();

    await this.frame
        .getByRole('button', { name: 'Submit' })
        .click();

    // ==========================
    // Quantity
    // ==========================

    await this.frame
        .locator('button')
        .filter({ hasText: 'Add a field' })
        .click();

    await this.frame
        .getByRole('textbox', { name: 'Field name' })
        .fill('Quantity');

    await this.frame
        .getByRole('textbox', { name: 'Field label' })
        .fill('Quantity');

    await this.frame
        .locator('.rio-select-input')
        .first()
        .click();

    await this.frame
        .getByText('Number', { exact: true })
        .click();

    await this.frame
        .getByRole('button', { name: 'Submit' })
        .click();
}

    // ---------------------------------------------------
    // Field Rules
    // ---------------------------------------------------

    async addRule() {

        await this.frame
            .getByRole('tab', {
                name: 'Field Rules'
            })
            .click();

        await this.frame
            .getByRole('button', {
                name: 'Add Rule'
            })
            .click();

        await this.frame
            .getByRole('button', {
                name: /Field Rule/
            })
            .click();

        await this.frame
            .getByRole('textbox', {
                name: 'Starts with'
            })
            .fill('100');

        await this.frame
            .locator('div')
            .filter({
                hasText: /^show error$/
            })
            .click();

        await this.frame
            .getByRole('textbox', {
                name: 'Action Value'
            })
            .fill('Invalid error');

        await this.frame
            .getByRole('button', {
                name: 'Add action'
            })
            .click();

        await this.frame
            .getByRole('textbox', {
                name: 'Select Action Type'
            })
            .click();

        await this.frame
            .locator('div')
            .filter({
                hasText: /^set value$/
            })
            .click();

        await this.frame
            .locator(
                'input[name="data[0].actions[1].value"]'
            )
            .fill('Verified');
    }

    // ---------------------------------------------------
    // Save
    // ---------------------------------------------------

    async save() {

        await this.frame
            .getByRole('button', {
                name: 'Create'
            })
            .click();

        await expect(
            this.frame.getByText(
                'InvoiceLearningInstance'
            )
        ).toBeVisible({
            timeout: 60000
        });
    }

    // ---------------------------------------------------
    // Verify
    // ---------------------------------------------------

    async verify() {

        await expect(
            this.frame.getByText(
                'InvoiceLearningInstance'
            )
        ).toBeVisible();
    }

    // ---------------------------------------------------
    // Helper
    // ---------------------------------------------------

    private async addField(
        fieldName: string,
        fieldLabel: string,
        dataType: string
    ) {

        await this.frame
            .locator('button')
            .filter({
                hasText: 'Add a field'
            })
            .click();

        await this.frame
            .getByRole('textbox', {
                name: 'Field name'
            })
            .fill(fieldName);

        await this.frame
            .getByRole('textbox', {
                name: 'Field label'
            })
            .fill(fieldLabel);

        await this.frame
            .locator('.rio-select-input')
            .first()
            .click();

        await this.frame
            .locator('div')
            .filter({
                hasText: new RegExp(`^${dataType}$`)
            })
            .click();

        await this.frame
            .getByRole('button', {
                name: 'Submit'
            })
            .click();
    }

}