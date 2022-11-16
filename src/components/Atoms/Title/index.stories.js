import Title from '.'

export default {
  title: 'Atoms/Title',
  component: Title
}

export const $default = () => ({
  components: { Title },
  template: `<Title>タイトル</Title>`
})

export const Center = () => ({
  components: { Title },
  template: `<Title align="center">タイトル</Title>`
})

export const Right = () => ({
  components: { Title },
  template: `<Title align="right">タイトル</Title>`
})
