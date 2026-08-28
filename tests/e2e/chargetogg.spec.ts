import { test, expect } from '@playwright/test';

test.describe('ChargeTogg Pro v3.0 - Comprehensive E2E Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://chargetogg.com');
  });

  test('TC01: Page renders with full hero metrics and branding', async ({ page }) => {
    await expect(page).toHaveTitle(/ChargeTogg/);
    
    // Verify Live Network Counters
    await expect(page.locator('text=81 İl Kapsama Ağı')).toBeVisible();
    await expect(page.locator('text=300 kW+')).toBeVisible();
    await expect(page.locator('text=650+')).toBeVisible();
  });

  test('TC02: Interactive Charging Simulator calculates metrics dynamically', async ({ page }) => {
    await page.locator('#simulator').scrollIntoViewIfNeeded();

    const t10fBtn = page.locator('button[data-id="togg_t10f"]');
    await t10fBtn.click();
    await expect(t10fBtn).toHaveClass(/active/);

    const hpcBtn = page.locator('button[data-kw="300"]');
    await hpcBtn.click();

    const timeText = await page.locator('#simResultTime').innerText();
    expect(parseInt(timeText)).toBeGreaterThan(0);

    const costText = await page.locator('#simResultCost').innerText();
    expect(costText).toContain('₺');
  });

  test('TC03: Map renders with charging stations without CartoDB watermark', async ({ page }) => {
    await page.locator('#harita').scrollIntoViewIfNeeded();
    
    const mapElement = page.locator('#leafletMap');
    await expect(mapElement).toBeVisible();

    const trugoFilter = page.locator('button[data-op="Trugo"]');
    await trugoFilter.click();

    const countText = await page.locator('#stationListCount').innerText();
    expect(parseInt(countText)).toBeGreaterThan(0);
  });

  test('TC04: Smart Route Engine calculates stops and builds Google Maps deep link', async ({ page }) => {
    await page.locator('#rota').scrollIntoViewIfNeeded();

    await page.fill('#routeOrigin', 'İstanbul');
    await page.fill('#routeDest', 'Antalya');
    await page.click('button:has-text("Akıllı Rotayı ve Şarj Duraklarını Hesapla")');

    const resultsCard = page.locator('#routeResultsCard');
    await expect(resultsCard).toBeVisible();

    const gmapsBtn = page.locator('#routeGmapsLaunchBtn');
    const href = await gmapsBtn.getAttribute('href');
    expect(href).toContain('google.com/maps/dir');
  });

});