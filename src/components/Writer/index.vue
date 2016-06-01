<template>
  <div class="fullX box-writer">
    <div class="c-m12 c-t6 cpl">
      <div class="writer">
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
          <textarea name="description" class="input" rows="3" v-model="description" placeholder="DIGITE A DESCRIÇÃO DA POSTAGEM"></textarea>
        </div>
        <pre class="fullX">
          <code class="fullX">
    {
      "title": "{{ title }}",
      "slug": "{{ title | slug }}",
      "picture": "{{ imgPath }}",
      "date": "{{ new Date() }}",
      "tags": "{{ tags }}",
      "description": "{{ description }}"
    }
          </code>
        </pre>
        
        <div class="box-field box-body">
          <textarea name="body" class="input" rows="25" v-model="body" placeholder="CORPO DO ARTIGO"></textarea>
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
        body: ''
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
                      .replace(/\s/g, '-')
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
    height: 84vh;
  }

  .writer {
    background-color: #fff;
    overflow-y: auto;
  }

  .txt-info {

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