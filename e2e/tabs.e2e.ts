import { expect, test } from '@playwright/test'

// Story ids: HnTabs -> 'hntabs--cover'

test('click vào tab để chọn và cập nhật aria-selected', async ({ page }) => {
  await page.goto('/iframe.html?id=hntabs--cover')

  const tab1 = page.getByRole('tab', { name: 'Tab 1' })
  const tab2 = page.getByRole('tab', { name: 'Tab 2' })

  await tab2.click()
  await expect(tab2).toHaveAttribute('aria-selected', 'true')

  await tab1.click()
  await expect(tab1).toHaveAttribute('aria-selected', 'true')
})

test('tabindex thay đổi khi tab được chọn', async ({ page }) => {
  await page.goto('/iframe.html?id=hntabs--cover')

  const tab1 = page.getByRole('tab', { name: 'Tab 1' })
  const tab2 = page.getByRole('tab', { name: 'Tab 2' })

  await tab1.click()
  await expect(tab1).toHaveAttribute('tabindex', '-1')
  await expect(tab2).toHaveAttribute('tabindex', '0')

  await tab2.click()
  await expect(tab1).toHaveAttribute('tabindex', '0')
  await expect(tab2).toHaveAttribute('tabindex', '-1')
})

test('mặc định không tab nào được chọn', async ({ page }) => {
  await page.goto('/iframe.html?id=hntabs--cover')

  const tab1 = page.getByRole('tab', { name: 'Tab 1' })
  const tab2 = page.getByRole('tab', { name: 'Tab 2' })

  await expect(tab1).toHaveAttribute('aria-selected', 'false')
  await expect(tab2).toHaveAttribute('aria-selected', 'false')
})

test('chọn tab theo modelValue', async ({ page }) => {
  await page.goto('/iframe.html?id=hntabs--selected-tab')

  const tab1 = page.getByRole('tab', { name: 'Tab 1' })
  const tab2 = page.getByRole('tab', { name: 'Tab 2' })

  await expect(tab1).toHaveAttribute('aria-selected', 'false')
  await expect(tab2).toHaveAttribute('aria-selected', 'true')
})
