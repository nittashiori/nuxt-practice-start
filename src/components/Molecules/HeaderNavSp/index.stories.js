import HeaderNavSp from '.'

export default {
  title: 'Molecules/HeaderNavSp',
  component: HeaderNavSp
}

export const $default = () => ({
  components: { HeaderNavSp },
  template: `<HeaderNavSp />`
})

export const Active = () => ({
  components: { HeaderNavSp },
  template: `<HeaderNavSp active />`
})
