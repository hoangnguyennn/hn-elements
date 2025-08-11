import { expect, test } from '@playwright/test'

// Story ids: HnRadio -> 'hnradio--cover'

test('chọn radio', async ({ page }) => {
  await page.goto('/iframe.html?id=hnradio--cover')

  const radio = page.getByRole('radio', { name: 'Label' })
  await radio.check()
  await expect(radio).toBeChecked()
})

test('radio disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=hnradio--disabled')

  const radio = page.getByRole('radio', { name: 'Label' })
  await expect(radio).toBeDisabled()
})
