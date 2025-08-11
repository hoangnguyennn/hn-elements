import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { h, nextTick } from 'vue'
import { HnCollapse, HnCollapseItem } from '.'

describe('collapse', () => {
  it('component render thành công', () => {
    const { container } = render(HnCollapse)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('hn-collapse')
  })

  describe('truyền props', () => {
    describe('accordion', () => {
      it('collapse hoạt động ở chế độ bình thường khi không truyền accordion', async () => {
        render(HnCollapse, {
          slots: {
            default: () => [
              h(HnCollapseItem, { title: 'Item 1' }, { default: () => 'Content 1' }),
              h(HnCollapseItem, { title: 'Item 2' }, { default: () => 'Content 2' })
            ]
          }
        })

        const item1 = screen.getByRole('button', { name: 'Item 1' })
        const item2 = screen.getByRole('button', { name: 'Item 2' })

        // Mở cả 2 items
        await userEvent.click(item1)
        await userEvent.click(item2)

        expect(screen.getByText('Content 1')).toBeInTheDocument()
        expect(screen.getByText('Content 2')).toBeInTheDocument()
      })

      it('collapse hoạt động ở chế độ accordion khi truyền accordion là true', async () => {
        render(HnCollapse, {
          props: { accordion: true },
          slots: {
            default: () => [
              h(HnCollapseItem, { title: 'Item 1' }, { default: () => 'Content 1' }),
              h(HnCollapseItem, { title: 'Item 2' }, { default: () => 'Content 2' })
            ]
          }
        })

        const item1 = screen.getByRole('button', { name: 'Item 1' })
        const item2 = screen.getByRole('button', { name: 'Item 2' })

        // Mở item 1
        await userEvent.click(item1)
        expect(screen.getByText('Content 1')).toBeInTheDocument()

        // Mở item 2 - item 1 sẽ đóng
        await userEvent.click(item2)
        const item1Container = screen.getByText('Content 1').closest('.hn-collapse--item')
        const item2Container = screen.getByText('Content 2').closest('.hn-collapse--item')
        expect(item1Container).toHaveAttribute('data-open', 'false')
        expect(item2Container).toHaveAttribute('data-open', 'true')
      })
    })

    describe('modelValue', () => {
      it('hiển thị collapse item đã mở khi truyền modelValue', async () => {
        render(HnCollapse, {
          props: { modelValue: [0] },
          slots: {
            default: () => [
              h(HnCollapseItem, { title: 'Item 1' }, { default: () => 'Content 1' }),
              h(HnCollapseItem, { title: 'Item 2' }, { default: () => 'Content 2' })
            ]
          }
        })

        await nextTick()

        const item1Container = screen.getByText('Content 1').closest('.hn-collapse--item')
        const item2Container = screen.getByText('Content 2').closest('.hn-collapse--item')
        expect(item1Container).toHaveAttribute('data-open', 'true')
        expect(item2Container).toHaveAttribute('data-open', 'false')
      })

      it('hiển thị nhiều collapse items đã mở khi truyền modelValue với nhiều index', async () => {
        render(HnCollapse, {
          props: { modelValue: [0, 2] },
          slots: {
            default: () => [
              h(HnCollapseItem, { title: 'Item 1' }, { default: () => 'Content 1' }),
              h(HnCollapseItem, { title: 'Item 2' }, { default: () => 'Content 2' }),
              h(HnCollapseItem, { title: 'Item 3' }, { default: () => 'Content 3' })
            ]
          }
        })

        await nextTick()

        const item1Container = screen.getByText('Content 1').closest('.hn-collapse--item')
        const item2Container = screen.getByText('Content 2').closest('.hn-collapse--item')
        const item3Container = screen.getByText('Content 3').closest('.hn-collapse--item')
        expect(item1Container).toHaveAttribute('data-open', 'true')
        expect(item2Container).toHaveAttribute('data-open', 'false')
        expect(item3Container).toHaveAttribute('data-open', 'true')
      })

      it('hoạt động đúng với accordion mode khi truyền modelValue', async () => {
        render(HnCollapse, {
          props: { accordion: true, modelValue: [1] },
          slots: {
            default: () => [
              h(HnCollapseItem, { title: 'Item 1' }, { default: () => 'Content 1' }),
              h(HnCollapseItem, { title: 'Item 2' }, { default: () => 'Content 2' }),
              h(HnCollapseItem, { title: 'Item 3' }, { default: () => 'Content 3' })
            ]
          }
        })

        await nextTick()

        const item1Container = screen.getByText('Content 1').closest('.hn-collapse--item')
        const item2Container = screen.getByText('Content 2').closest('.hn-collapse--item')
        const item3Container = screen.getByText('Content 3').closest('.hn-collapse--item')
        expect(item1Container).toHaveAttribute('data-open', 'false')
        expect(item2Container).toHaveAttribute('data-open', 'true')
        expect(item3Container).toHaveAttribute('data-open', 'false')
      })
    })
  })

  describe('collapse item', () => {
    describe('truyền props', () => {
      it('hiển thị title khi truyền prop title', () => {
        render(HnCollapse, {
          slots: {
            default: () => h(HnCollapseItem, { title: 'Test Title' }, { default: () => 'Content' })
          }
        })

        expect(screen.getByRole('button', { name: 'Test Title' })).toBeInTheDocument()
      })
    })

    describe('truyền slot', () => {
      it('nội dung truyền vào slot default được hiển thị', async () => {
        render(HnCollapse, {
          slots: {
            default: () => h(HnCollapseItem, { title: 'Item' }, { default: () => 'Test Content' })
          }
        })

        await userEvent.click(screen.getByRole('button', { name: 'Item' }))
        expect(screen.getByText('Test Content')).toBeInTheDocument()
      })

      it('nội dung truyền vào slot title được hiển thị', () => {
        render(HnCollapse, {
          slots: {
            default: () =>
              h(
                HnCollapseItem,
                {},
                {
                  title: () => 'Custom Title',
                  default: () => 'Content'
                }
              )
          }
        })

        expect(screen.getByRole('button', { name: 'Custom Title' })).toBeInTheDocument()
      })
    })
  })
})
