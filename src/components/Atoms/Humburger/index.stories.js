import Humburger from '.'

export default {
  title: 'Atoms/Humburger',
  component: Humburger
}

export const $default = () => ({
  components: { Humburger },
  template: `<Humburger />`
})

export const Active = () => ({
  components: { Humburger },
  template: `
    <Humburger active />
  `,
})
