<template>
  <nav class="header-nav">
    <ul class="header-nav__list">
      <li
        class="header-nav__item"
        v-for="list in lists"
        :key="list.index"
      >
        <a :href=list.href>{{ list.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          label: "ホーム",
          href: "/",
        },
        {
          label: "メッセージ",
          href: "/message",
        },
        {
          label: "会社概要",
          href: "/company"
        }
      ]
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
