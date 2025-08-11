import { expect, test } from '@playwright/test'

// Test story: title 'HnSlider', story 'Cover' => id: 'hnslider--cover'

test('click track cập nhật đúng giá trị', async ({ page }) => {
  await page.goto('/iframe.html?id=hnslider--cover')

  const track = page.locator('.hn-slider--wrapper')
  const slider = page.getByRole('slider', { name: 'Thanh trượt' })

  const box = await track.boundingBox()
  if (!box) throw new Error('Không lấy được bounding box của track')

  // Click 25% chiều rộng track
  await page.mouse.click(box.x + box.width * 0.25, box.y + box.height / 2)

  await expect(slider).toHaveAttribute('aria-valuenow', '25')
  await expect(slider).toHaveAttribute('aria-valuetext', '25%')
})

test('tăng giá trị bằng phím mũi tên phải', async ({ page }) => {
  await page.goto('/iframe.html?id=hnslider--cover')

  const slider = page.getByRole('slider', { name: 'Thanh trượt' })
  await expect(slider).toHaveAttribute('aria-valuenow', '50') // default từ story args

  await slider.focus()
  await page.keyboard.press('ArrowRight')

  // Do <input type="range"> của browser xử lý phím, giá trị tăng theo step=1
  await expect(slider).toHaveAttribute('aria-valuenow', '51')
  await expect(slider).toHaveAttribute('aria-valuetext', '51%')
})

test('giảm giá trị bằng phím mũi tên trái', async ({ page }) => {
  await page.goto('/iframe.html?id=hnslider--cover')

  const slider = page.getByRole('slider', { name: 'Thanh trượt' })
  await expect(slider).toHaveAttribute('aria-valuenow', '50')

  await slider.focus()
  await page.keyboard.press('ArrowLeft')

  await expect(slider).toHaveAttribute('aria-valuenow', '49')
  await expect(slider).toHaveAttribute('aria-valuetext', '49%')
})

test('aria-valuetext cập nhật khi thay đổi giá trị', async ({ page }) => {
  await page.goto('/iframe.html?id=hnslider--cover')

  const slider = page.getByRole('slider', { name: 'Thanh trượt' })
  await expect(slider).toHaveAttribute('aria-valuenow', '50')
  await expect(slider).toHaveAttribute('aria-valuetext', '50%')

  // Tăng 10 lần => 60
  await slider.focus()
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press('ArrowRight')
  }

  await expect(slider).toHaveAttribute('aria-valuenow', '60')
  await expect(slider).toHaveAttribute('aria-valuetext', '60%')
})

test('không thay đổi khi disabled', async ({ page }) => {
  // Tạo URL story với args disabled=true (Storybook 8: &args=prop:value)
  await page.goto('/iframe.html?id=hnslider--cover&args=disabled:true')

  const slider = page.getByRole('slider', { name: 'Thanh trượt' })
  await expect(slider).toBeDisabled()

  await slider.focus()
  await page.keyboard.press('ArrowRight')
  await expect(slider).toHaveAttribute('aria-valuenow', '50')
})

test('clamp 0% và 100% khi click ở mép trong của track', async ({ page }) => {
  await page.goto('/iframe.html?id=hnslider--cover')
  const track = page.locator('.hn-slider--wrapper')
  const slider = page.getByRole('slider', { name: 'Thanh trượt' })

  const box = await track.boundingBox()
  if (!box) throw new Error('Không lấy được bounding box của track')

  // Click tại mép trái bên trong track
  await page.mouse.click(box.x + 1, box.y + box.height / 2)
  await expect(slider).toHaveAttribute('aria-valuenow', '0')

  // Click tại mép phải bên trong track
  await page.mouse.click(box.x + box.width - 1, box.y + box.height / 2)
  await expect(slider).toHaveAttribute('aria-valuenow', '100')
})
