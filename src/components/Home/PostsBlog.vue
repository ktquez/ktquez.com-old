<template>
  <div class="fullX">
    <ul class="fl grid">
      <li class="item c-m12 c-t4 c-gg3 cpl" v-for="post in posts">
        <item-post :post="post"></item-post>                        
      </li>
    </ul>
  </div>
</template>

<script>
  import ItemPost from './ItemPost'
  export default {
    data () {
      return {
        posts: [
          {
            title: 'Título de post número 1 restante do t´tulo Título de post número 1 restante do t´tulo',
            img: 'https://images.unsplash.com/photo-1440610049442-a5101a2204ba?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop'
          },
          {
            title: 'Título de post número 2',
            img: 'https://images.unsplash.com/photo-1461088778056-88bf6d3cefcd?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop'
          },
          {
            title: 'Título de post número 3',
            img: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?format=auto&auto=compress&dpr=1&crop=entropy&fit=resize&w=1000&h=600&q=80'
          },
          {
            title: 'Título de post número 4',
            img: 'https://images.unsplash.com/photo-1461088778056-88bf6d3cefcd?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop'
          },
          {
            title: 'Título de post número 5',
            img: 'https://images.unsplash.com/photo-1440610049442-a5101a2204ba?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop'
          },
          {
            title: 'Título de post número 6',
            img: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?format=auto&auto=compress&dpr=1&crop=entropy&fit=resize&w=1000&h=600&q=80'
          },
          {
            title: 'Título de post número 7',
            img: 'https://images.unsplash.com/photo-1440610049442-a5101a2204ba?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop'
          },
          {
            title: 'Título de post número 8',
            img: 'https://images.unsplash.com/photo-1461088778056-88bf6d3cefcd?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop'
          },
          {
            title: 'Título de post número 9',
            img: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?format=auto&auto=compress&dpr=1&crop=entropy&fit=resize&w=1000&h=600&q=80'
          },
          {
            title: 'Título de post número 10',
            img: 'https://images.unsplash.com/photo-1461088778056-88bf6d3cefcd?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop'
          }
        ]
      }
    },

    ready () {
      // Waterfall
      const grid = document.querySelector('.grid')
      setTimeout(() => {
        window.waterfall(grid)

        window.addEventListener('resize', () => {
          window.waterfall(grid)
        }, false)
      }, 1000)
    },

    components: {
      ItemPost
    }
  }
</script>

<style lang="postcss" scoped>
  .grid {
    margin: 40px 8px 0 8px;
    width: calc(100% - 16px);

    & > .item {
      margin-bottom: 20px;
    }
  }
</style>