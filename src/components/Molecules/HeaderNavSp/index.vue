<template>
  <nav
    :class="['header-nav-sp', { isActive: active }]"
  >
    <ul class="header-nav-sp__list">
      <li
        class="header-nav-sp__item"
        v-for="nav in navs"
        :key="nav.index"
      >
        <nuxt-link
          :to="nav.href"
          @click="$emit('click', $event)"
        >
          {{ nav.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navs } from "~/utils/header.js"

export default {
  props: {
    /**
     * トリガーがアクティブか
     */
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      navs
    }
  }
}
</script>

<style lang="scss" scoped>
.header-nav-sp {
  width: 200px;
  height: 100vh;
  padding: 84px 40px 0;
  box-sizing: border-box;
  background: var(--color-primary);
  transition: translate 0.3s ease;
  translate: 200px 0;

  &.isActive {
    translate: 0;
  }

  &__list {
    list-style-type: none;
    padding: 0;
  }

  &__item {
    a {
      display: block;
      padding: 16px 0;
      color: var(--color-white);
      text-decoration: none;
    }
  }
}
</style>
