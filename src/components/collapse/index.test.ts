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

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

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

        const item1 = screen.getByText('Item 1')
        const item2 = screen.getByText('Item 2')

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

        expect(screen.getByText('Test Title')).toBeInTheDocument()
      })
    })

    describe('truyền slot', () => {
      it('nội dung truyền vào slot default được hiển thị', async () => {
        render(HnCollapse, {
          slots: {
            default: () => h(HnCollapseItem, { title: 'Item' }, { default: () => 'Test Content' })
          }
        })

        await userEvent.click(screen.getByText('Item'))
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

        expect(screen.getByText('Custom Title')).toBeInTheDocument()
      })
    })
  })

  describe('thao tác', () => {
    it('click vào collapse item thì mở/đóng nội dung', async () => {
      render(HnCollapse, {
        slots: {
          default: () => h(HnCollapseItem, { title: 'Item' }, { default: () => 'Content' })
        }
      })

      const trigger = screen.getByText('Item')
      const itemContainer = screen.getByText('Content').closest('.hn-collapse--item')

      // Nội dung ban đầu ẩn
      expect(itemContainer).toHaveAttribute('data-open', 'false')

      // Click để mở
      await userEvent.click(trigger)
      expect(itemContainer).toHaveAttribute('data-open', 'true')

      // Click lần nữa để đóng
      await userEvent.click(trigger)
      expect(itemContainer).toHaveAttribute('data-open', 'false')
    })

    it('emit update:modelValue khi click vào collapse item', async () => {
      const { emitted } = render(HnCollapse, {
        slots: {
          default: () => h(HnCollapseItem, { title: 'Item' }, { default: () => 'Content' })
        }
      })

      await userEvent.click(screen.getByText('Item'))
      expect(emitted()['update:modelValue']).toBeTruthy()
      expect(emitted()['update:modelValue'][0]).toStrictEqual([[0]])
    })

    it('trong chế độ accordion, click vào item khác sẽ đóng item hiện tại', async () => {
      render(HnCollapse, {
        props: { accordion: true },
        slots: {
          default: () => [
            h(HnCollapseItem, { title: 'Item 1' }, { default: () => 'Content 1' }),
            h(HnCollapseItem, { title: 'Item 2' }, { default: () => 'Content 2' })
          ]
        }
      })

      // Mở item 1
      await userEvent.click(screen.getByText('Item 1'))
      expect(screen.getByText('Content 1')).toBeInTheDocument()

      // Mở item 2
      await userEvent.click(screen.getByText('Item 2'))
      const item1Container = screen.getByText('Content 1').closest('.hn-collapse--item')
      const item2Container = screen.getByText('Content 2').closest('.hn-collapse--item')
      expect(item1Container).toHaveAttribute('data-open', 'false')
      expect(item2Container).toHaveAttribute('data-open', 'true')

      // Click lại item 2 để đóng
      await userEvent.click(screen.getByText('Item 2'))
      expect(item2Container).toHaveAttribute('data-open', 'false')
    })

    it('trong chế độ bình thường, có thể mở nhiều items cùng lúc', async () => {
      render(HnCollapse, {
        slots: {
          default: () => [
            h(HnCollapseItem, { title: 'Item 1' }, { default: () => 'Content 1' }),
            h(HnCollapseItem, { title: 'Item 2' }, { default: () => 'Content 2' }),
            h(HnCollapseItem, { title: 'Item 3' }, { default: () => 'Content 3' })
          ]
        }
      })

      // Mở tất cả items
      await userEvent.click(screen.getByText('Item 1'))
      await userEvent.click(screen.getByText('Item 2'))
      await userEvent.click(screen.getByText('Item 3'))

      const item1Container = screen.getByText('Content 1').closest('.hn-collapse--item')
      const item2Container = screen.getByText('Content 2').closest('.hn-collapse--item')
      const item3Container = screen.getByText('Content 3').closest('.hn-collapse--item')
      expect(item1Container).toHaveAttribute('data-open', 'true')
      expect(item2Container).toHaveAttribute('data-open', 'true')
      expect(item3Container).toHaveAttribute('data-open', 'true')
    })
  })
})
