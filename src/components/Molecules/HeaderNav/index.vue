<template>
  <nav class="header-nav">
    <ul class="header-nav__list">
      <li
        class="header-nav__item"
        v-for="nav in navs"
        :key="nav.index"
      >
        <nuxt-link :to=nav.href>{{ nav.label }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navs } from "~/utils/navs.js"

export default {
  data() {
    return {
      navs
    }
  }
}
</script>

<style lang="scss" scoped>
.header-nav {
  font-size: 16px;

  &__list {
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;

    & > * + * {
      margin-left: 30px;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-text);
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
