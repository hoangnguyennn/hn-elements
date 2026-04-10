import { expect, test } from '@playwright/test'

// Story ids: HnSwitch -> 'hnswitch--cover'

test('toggle switch', async ({ page }) => {
  await page.goto('/iframe.html?id=hnswitch--cover')

  const sw = page.getByRole('switch')
  await expect(sw).not.toBeChecked()

  await sw.click()
  await expect(sw).toBeChecked()

  await sw.click()
  await expect(sw).not.toBeChecked()
})

test('switch disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=hnswitch--disabled')
  const sw = page.getByRole('switch')
  await expect(sw).toBeDisabled()
})

test('label thay đổi khi toggle', async ({ page }) => {
  await page.goto('/iframe.html?id=hnswitch--custom-label')

  const sw = page.getByRole('switch')
  await expect(page.getByText('Tắt')).toBeVisible()
  await sw.click()
  await expect(page.getByText('Bật')).toBeVisible()
})
