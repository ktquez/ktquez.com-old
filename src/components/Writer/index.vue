<template>
  <div class="fullX box-writer">
    <div class="c-m12 c-t6 cpl">
      <div class="writer">
        <button type="button" class="link-see-info fullX link" @click="setShow('info')">
          <span class="txt fl">PREENCHER INFORMAÇÕES</span>
          <span class="icon" :class="{ '-up': show.info }">&#xe90b;</span>
        </button>
        <div class="see-info fade-fast" :class="{'-open': show.info }">
          <div class="box-field">
            <input type="text" name="title" class="input" v-model="title" placeholder="DIGITE O TÍTULO">
          </div>
          <div class="box-field">
            <input type="text" name="tags" class="input" v-model="tags" placeholder="DIGITE AS TAGS">
          </div>
          <div class="box-field">
            <input type="text" name="imgPath" class="input" v-model="imgPath" placeholder="PATH DA IMAGEM">
          </div>
          <div class="box-field">
            <input type="text" name="caption" class="input" v-model="caption" placeholder="CAPTION DA IMAGEM">
          </div>
          <div class="box-field">
            <textarea name="description" class="input" rows="3" v-model="description" placeholder="DIGITE A DESCRIÇÃO DA POSTAGEM"></textarea>
          </div>          
        </div>
        <button type="button" class="link-see-info fullX link" @click="setShow('json')">
          <span class="txt fl">VER JSON INFORMAÇÕES</span>
          <span class="icon" :class="{ '-up': show.json }">&#xe90b;</span>
        </button>
        <div class="see-info fade-fast" :class="{'-open': show.json }">
          <pre class="fullX">
            <code class="fullX">
    {
      "title": "{{ title }}",
      "slug": "{{ title | slug }}",
      "picture": {
        "img": "{{ imgPath }}",
        "caption": "{{ caption }}"
      },
      "date": "{{ new Date() }}",
      "tags": "{{ tags }}",
      "description": "{{ description }}"
    }
            </code>
          </pre>
          
        </div>
        
        <div class="box-field box-body">
          <textarea name="body" class="input" rows="30" v-model="body" placeholder="CORPO DO ARTIGO"></textarea>
        </div>
      </div>
    </div>
    <div class="c-m12 c-t6 cpl">
      <div class="preview">
        <span class="legend-preview">PREVIEW</span>
        <post :post="body"></post>        
      </div>
    </div>
  </div>
</template>

<script>
  import Post from '../Article/Post'
  export default {
    data () {
      return {
        title: '',
        description: '',
        imgPath: '',
        tags: '',
        body: '',
        show: {
          info: false,
          json: false
        }
      }
    },
    ready () {
      // Hide footer
      document.querySelector('.footer').style.display = 'none'
    },
    methods: {
      setShow (type) {
        this.show[type] = !this.show[type]
      }
    },
    components: {
      Post
    },
    filters: {
      slug (value) {
        let mapLetters = {
          a: /(á|ã|â|à)/g,
          e: /(é|ê)/g,
          i: /(í)/g,
          o: /(ó|ô|õ)/g,
          u: /(ú)/g,
          c: /(ç)/g,
          n: /(ñ)/g
        }
        for (let letter in mapLetters) {
          let rexp = mapLetters[letter]
          value = value.toLowerCase()
                      .replace(rexp, letter)
                      .replace(/(\s|\.)/g, '-')
        }

        return value
      }
    }
  }
</script>

<style lang="postcss" scoped>

  .writer,
  .preview {
    padding: 20px;
    width: calc(100% - 40px);
    float:left;
    height: 82vh;
    overflow: auto;
  }

  .link-see-info {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ededed;

    & > .txt {
      font-size: 12px;
    }

    & > .icon {
      font-size: 14px;
      margin-left: 10px;
      margin-top: 1px;
      transform: rotate(90deg);

      &.-up {
        margin-top: -1px;
        transform: rotate(270deg);
      }
    }
  }

  .see-info {
    opacity: 0;
    visibility: hidden;
    display: none;

    &.-open {
      opacity: 1;
      visibility: visible;
      display: block;
    }
  }

  .writer {
    background-color: #fff;
    overflow-y: auto;
  }

  .box-field {
    margin-bottom: 20px;
  }

  .input {
    font-size: 14px;
    font-family: monospace;    
  }

  .legend-preview {
    position: absolute;
    left: 10px;
    top: 10px;
    font-weight: bold;
    color: #666;
    font-size: 12px;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word; 
  }

</style>