import { expect, test } from '@playwright/test'

// Story ids: HnCollapse -> 'hncollapse--cover', 'hncollapse--accordion'

test('click vào collapse item thì mở/đóng nội dung', async ({ page }) => {
  await page.goto('/iframe.html?id=hncollapse--cover')

  const itemBtn = page.getByRole('button', { name: 'Title 1' })

  await expect(itemBtn).toHaveAttribute('aria-expanded', 'false')
  await itemBtn.click()
  await expect(itemBtn).toHaveAttribute('aria-expanded', 'true')
  await itemBtn.click()
  await expect(itemBtn).toHaveAttribute('aria-expanded', 'false')
})

test('accordion: mở item mới sẽ đóng item hiện tại', async ({ page }) => {
  await page.goto('/iframe.html?id=hncollapse--accordion')

  const item1Btn = page.getByRole('button', { name: 'Title 1' })
  const item2Btn = page.getByRole('button', { name: 'Title 2' })

  await item1Btn.click()
  await expect(item1Btn).toHaveAttribute('aria-expanded', 'true')

  await item2Btn.click()
  await expect(item1Btn).toHaveAttribute('aria-expanded', 'false')
  await expect(item2Btn).toHaveAttribute('aria-expanded', 'true')
})
