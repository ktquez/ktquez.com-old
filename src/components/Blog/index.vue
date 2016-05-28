<template>
  <div class="home fullX">
    <short-about class="box-center5"></short-about>
    <separate></separate>
    <section class="box-center5">
      <main class="fullX" role="main">
        <item-post v-for="post in postsByPage" :post="post"></item-post>
      </main>
      <div class="fullX">
        <div class="paginate">
          <a role="button" class="btn-paginate prev fl fade-fast" v-if="news" v-link="{ name: 'paginate', params: { page: this.paginate.page - 1 } }">
            <span class="icon">&#xe907;</span>
            <span class="txt"></span>NOVOS POSTS
          </a>
          <a role="button" class="btn-paginate next fr fade-fast" v-if="older" v-link="{ name: 'paginate', params: { page: this.paginate.page + 1 } }">
            <span class="icon">&#xe90a;</span>
            <span class="txt">POSTS ANTIGOS</span>
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
  import { getPosts } from '../../vuex/getters'
  import { setPosts } from '../../vuex/actions'

  export default {
    data () {
      return {
        paginate: {
          page: 1,
          perPage: 2,
          totalPages: 0,
          total: 0
        }
      }
    },
    computed: {
      postsByPage () {
        const vm = this
        if (!vm.getPosts.length) return
        let posts = vm.getPosts
        vm.paginate.page = Number(vm.$route.params.page) || 1
        vm.paginate.total = posts.length
        vm.paginate.totalPages = Math.round((vm.paginate.total / vm.paginate.perPage) + 0.49)
        if (vm.paginate.page > vm.paginate.totalPages) window.location.href = '/blog'
        return posts.slice((vm.paginate.page - 1) * vm.paginate.perPage, vm.paginate.page * vm.paginate.perPage)
      },
      news () {
        return this.paginate.page !== 1
      },
      older () {
        return this.paginate.page !== this.paginate.totalPages
      }
    },
    vuex: {
      getters: {
        getPosts
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
        this.$http.get('static/articles/_data.json').then((response) => {
          this.setPosts(response.data)
          transition.next()
        })
      },
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
  .home {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .paginate {
    margin-top: 20px;
    margin-left: -2px;
    padding-top: 20px;

    & > .btn-paginate {
      padding: 10px 12px;
      margin-right: 12px;
      font-size: 12px;
      font-weight: bold;
      background: #4ac6b7;
      color: #fff;
      border-radius: 20px;

      & > .icon {
        font-size: 11px;
        margin-top: 2px;
        color: #fff;
      }

      &.prev > .icon {
        float: left;
        margin-right: 5px;
      }

      &.next > .icon {
        float: right;
        margin-left: 5px;
      }

      &.-hide {
        display: none;
      }

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        background: #ff7070;
      }
    }
  }
</style>