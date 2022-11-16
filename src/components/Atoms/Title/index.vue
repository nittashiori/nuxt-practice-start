<template>
  <component
    :is="as"
    :class="['title', align]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    /**
     * 何のタグとして表示するか
     */
    as: {
      type: String,
      default: "h2",
    },
    /**
     * テキスト揃え
     * @values left, center, right
     */
    align: {
      type: String,
      validator(value) {
        return ['left', 'center', 'right'].includes(value)
      },
    },
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin: 0;
  font-size: 40px;
  line-height: 1;
  letter-spacing: 0.03em;
  font-weight: 500;
  color: var(--color-primary);

  @media screen and (max-width: 767px) {
    font-size: 32px;
    left: 1.25;
  }

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
}
</style>
