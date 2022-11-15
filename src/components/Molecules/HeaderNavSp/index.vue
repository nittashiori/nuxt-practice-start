<template>
  <nav class="header-nav-sp">
    <ul class="header-nav-sp__list">
      <li
        class="header-nav-sp__item"
        v-for="nav in navs"
        :key="nav.index"
      >
        <a :href="nav.href">{{ nav.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navs } from "~/utils/header.js"

export default {
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
  background: var(--color-primary);

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
