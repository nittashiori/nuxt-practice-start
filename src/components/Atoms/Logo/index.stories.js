import Logo from '.'

export default {
  title: 'Atoms/Logo',
  component: Logo
}

export const $default = () => ({
  components: { Logo },
  template: `<Logo />`
})
