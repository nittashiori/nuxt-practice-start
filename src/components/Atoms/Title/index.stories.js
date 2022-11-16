import Title from '.'

export default {
  title: 'Atoms/Title',
  component: Title
}

export const $default = ({ align }) => ({
  components: { Title },
  computed: {
    align: () => align,
  },
  template: `<Title>タイトル</Title>`
})

export const Center = ({ align }) => ({
  components: { Title },
  computed: {
    align: () => align,
  },
  template: `<Title align="center">タイトル</Title>`
})

export const Right = ({ align }) => ({
  components: { Title },
  computed: {
    align: () => align,
  },
  template: `<Title align="right">タイトル</Title>`
})
