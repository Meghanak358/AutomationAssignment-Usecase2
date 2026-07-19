import { Page } from '@playwright/test';

export class Helper {

    static async wait(page: Page, seconds: number) {

        await page.waitForTimeout(seconds * 1000);

    }

    static async waitForLoader(page: Page) {

        await page.waitForLoadState('networkidle');

    }

    static async scrollBottom(page: Page) {

        await page.evaluate(() => {

            window.scrollTo(
                0,
                document.body.scrollHeight
            );

        });

    }

}