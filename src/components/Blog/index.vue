<template>
  <div class="home fullX">
    <short-about class="box-center5"></short-about>
    <separate></separate>
    <section class="box-center5" role="region">
      <main class="fullX" role="main">
        <item-post v-for="post in postsByPage" :post="post"></item-post>
        <div class=" fullX tac no-posts" v-if="(!this.getPosts.length)">
          ESTOU CONTRUINDO UNS ARTIGOS LEGAIS
        </div>
      </main>
      <div class="fullX">
        <div class="paginate">
          <a role="button" class="btn-paginate prev fr fade-fast" v-if="news" v-link="{ name: 'paginate', params: { page: this.paginate.page - 1 } }">
            <span class="txt fl">NOVOS POSTS</span>
            <span class="icon">&#xe90b;</span>
          </a>
          <a role="button" class="btn-paginate next fl fade-fast" v-if="older" v-link="{ name: 'paginate', params: { page: this.paginate.page + 1 } }">
            <span class="txt fr">POSTS ANTIGOS</span>
            <span class="icon">&#xe908;</span>
          </a>
        </div>         
      </div>
    </section>
  </div>   
</template>

<script>
  import ShortAbout from './ShortAbout'
  import ItemPost from './ItemPost'
  import Separate from '../Common/Separate'
  import { getPosts, getLang } from '../../vuex/getters'
  import { setPosts } from '../../vuex/actions'

  export default {
    data () {
      return {
        paginate: {
          page: 1,
          perPage: 8,
          totalPages: 0,
          total: 0
        }
      }
    },
    computed: {
      postsByPage () {
        if (!this.getPosts.length) return
        let posts = this.getPosts
        this.paginate.page = Number(this.$route.params.page) || 1
        this.paginate.total = posts.length
        this.paginate.totalPages = Math.ceil(this.paginate.total / this.paginate.perPage)
        if (this.paginate.page > this.paginate.totalPages) window.location.href = '/blog'
        return posts.slice((this.paginate.page - 1) * this.paginate.perPage, this.paginate.page * this.paginate.perPage)
      },
      news () {
        return this.paginate.page !== 1 && (this.getPosts.length)
      },
      older () {
        return this.paginate.page !== this.paginate.totalPages && (this.getPosts.length)
      }
    },
    vuex: {
      getters: {
        getPosts,
        getLang
      },
      actions: {
        setPosts
      }
    },
    route: {
      data (transition) {
        // Check if have posts in store
        if (this.getPosts.length) {
          transition.next()
          return
        }
        // In another way get posts by ajax
        this.$http.get(`static/articles/${this.getLang}/_data.json`).then((response) => {
          this.setPosts(response.data.reverse())
          transition.next()
        }).catch((response) => {
          transition.redirect('/404')
        })
      },
      canReuse: false,
      waitForData: true
    },
    components: {
      ShortAbout,
      ItemPost,
      Separate
    }
  }

</script>

<style lang="postcss" scoped>

  :root {
    --color-default: #4ac6b7;
    --color-second: #ed7196;
  }

  .home {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .no-posts { margin-top: 30px; }

  .paginate {
    margin-top: 20px;
    margin-left: -2px;
    padding-top: 20px;

    & > .btn-paginate {
      padding: 10px 12px;
      margin-right: 12px;
      font-size: 12px;
      font-weight: bold;
      background: var(--color-default);
      color: #fff;
      border-radius: 20px;

      & > .icon {
        font-size: 11px;
        margin-top: 2px;
        color: #fff;
      }

      &.prev > .icon {
        float: left;
        margin-left: 5px;
      }

      &.next > .icon {
        float: right;
        margin-right: 5px;
      }

      &.-hide {
        display: none;
      }

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        background: var(--color-second);
      }
    }
  }
</style>