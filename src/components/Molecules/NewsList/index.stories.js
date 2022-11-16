import NewsList from '.'

export default {
  title: 'Molecules/NewsList',
  component: NewsList
}

export const $default = () => ({
  components: { NewsList },
  template: `<NewsList />`
})
