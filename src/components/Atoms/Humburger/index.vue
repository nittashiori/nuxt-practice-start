<template>
  <div
    :class="['humburger', { isActive: active }]"
    @click="$emit('click', $event)"
  >
    <div class="humburger__inner">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * トリガーがアクティブか
     */
    active: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.humburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  background: var(--color-primary);
  cursor: pointer;

  &__inner {
    width: 43%;
    height: 30%;
    position: relative;
  }

  .line {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background: var(--color-white);
    position: absolute;
    left: 0;
    transition: all 0.3s ease;

    &:nth-of-type(1) {
      top: 0;
    }

    &:nth-of-type(2) {
      top: 50%;
      bottom: 50%;
      translate: 0 -50%;
    }

    &:nth-of-type(3) {
      bottom: 0;
    }
  }

  &.isActive {
    .line {
      &:nth-of-type(1) {
        top: 50%;
        translate: 0 -50%;
        rotate: 45deg;
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:nth-of-type(3) {
        top: 50%;
        bottom: initial;
        translate: 0 -50%;
        rotate: -45deg;
      }
    }
  }
}
</style>
