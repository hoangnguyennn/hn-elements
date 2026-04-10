import { expect, test } from '@playwright/test'

// Story ids: HnCheckbox -> 'hncheckbox--cover'

test('click checkbox thay đổi trạng thái', async ({ page }) => {
  await page.goto('/iframe.html?id=hncheckbox--cover')

  const checkbox = page.getByRole('checkbox', { name: 'Label' })
  await page.getByText('Label').click()
  await expect(checkbox).toBeChecked()

  await page.getByText('Label').click()
  await expect(checkbox).not.toBeChecked()
})

test('checkbox disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=hncheckbox--disabled')
  const checkbox = page.getByRole('checkbox', { name: 'Label' })
  await expect(checkbox).toBeDisabled()
})
