import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LearningInstancePage } from '../pages/LearningInstancePage';
import { ProcessPage } from '../pages/ProcessPage';
import { ValidationPage } from '../pages/ValidationPage';

dotenv.config();

test.describe('Document Automation - Learning Instance', () => {

    test('Create, Process and Validate Learning Instance', async ({ page }) => {

        // --------------------------
        // Page Objects
        // --------------------------

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        const learningPage = new LearningInstancePage(page);
        const processPage = new ProcessPage(page);

        // --------------------------
        // Login
        // --------------------------

        await loginPage.goto();

        await loginPage.login(
            process.env.EMAIL!,
            process.env.PASSWORD!
        );

        // --------------------------
        // Dashboard
        // --------------------------

        await dashboardPage.openAILearning();

        // --------------------------
        // Create Learning Instance
        // --------------------------

        await learningPage.create();

        

        await learningPage.addFormFields();

        await learningPage.addTableFields();

        await learningPage.addRule();

        await learningPage.save();

        await learningPage.verify();

        // --------------------------
        // Process Document
        // --------------------------

        await processPage.verifyLearningInstance();

        await processPage.clickProcess();

        await processPage.uploadDocument(
            './testdata/sample_invoice.pdf'
        );

        await processPage.enterDownloadFolder(
            'Downloads'
        );

        await processPage.processDocument();

        await processPage.waitForProcessing();

        // --------------------------
        // Status Popup
        // --------------------------

        const statusPage = await processPage.openStatus();

        const validationPage = new ValidationPage(
            statusPage
        );

        await validationPage.openLearningInstance(
            'InvoiceLearningInstance'
        );

        await validationPage.openExtraction();

        // --------------------------
        // Validation Popup
        // --------------------------

        const validationPopup =
            await validationPage.openValidation();

        const validator =
            new ValidationPage(validationPopup);

        await validator.switchToTableView();

        await validator.verifyValidation();

    });

});