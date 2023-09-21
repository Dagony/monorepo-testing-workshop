import {test} from "playwright/test";
import {expect} from "@playwright/test";



test('Iets met contact page', async ({ page }) => {
    await page.goto("/contact");
    expect(await page.getByTestId("contact-button").textContent()).toBe('Click me');
});
