<template>
  <table>
    <tbody>
      <div class="tableEntry" v-for="article in articles" :key="article.id">
        <tr>
          <!-- article title -->
          {{ article.rank }}. <a :href="article.fullUrl" target="_blank" class="originalUrl">{{ article.title }}</a> <a :href="article.baseUrl" target="_blank" class="subtext">({{ article.baseUrl }})</a>
        </tr>
        <tr>
            <td class="subtext"><span class="indent">___</span>{{ article.points }} by {{ article.author }} {{ article.time }} | {{ article.num_comments }} comments</td>    
        </tr>
        <tr style="height: 3px"></tr>
      </div>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    urlShort(url) {
      let shortenedUrl = "";
      this.$nextTick(() => {
        // This code will execute after the component has been mounted
        console.log("Component has been mounted");
        shortenedUrl = url.split("/")[0];
        return shortenedUrl;
      });
    },
    formatTimeAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffMs / 86400000);
        const diffHours = Math.floor(diffMs / 3600000);
        
        if (diffHours < 24) {
            if (diffHours === 0) {
            return "just now";
            } else if (diffHours === 1) {
            return "1 hour ago";
            } else {
            return `${diffHours} hours ago`;
            }
        } else if (diffDays === 1) {
            return "1 day ago";
        } else {
            return `${diffDays} days ago`;
        }
}
  },
  created() {
    fetch(
      "https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=points%3E90"
    )
      .then((response) => response.json())
      .then((data) => {

        for (let i = 0; i < data.hits.length; i++) {
        //   console.log(data.hits[i]);
          let articleEntry = data.hits[i];
          let urlArticle = articleEntry.url;
          if (urlArticle === null) {
            urlArticle = "No url, sry";
          } else {
            let pathArray = urlArticle.split('/');
            urlArticle = pathArray[0] + '//' + pathArray[2];
          }
          const article = {
            rank: i+1,
            id: articleEntry.objectID,
            title: articleEntry.title,
            baseUrl: urlArticle,
            fullUrl: articleEntry.url,
            points: articleEntry.points,
            author: articleEntry.author,
            time: this.formatTimeAgo(articleEntry.created_at),
            num_comments: articleEntry.num_comments
          }
          this.articles.push(article);
        }
        // console.log(data.hits.length);
      });
    //   .catch(error => {
    //     console.error(error);
    //   });
  },
};
</script>

<style scoped>

.subtext {
  font-size: 12px;
  color: #828282;
  margin-top: 5px;
  text-decoration: none;
}
 .indent {
    color: transparent;
 }

.originalUrl {
    color: black;
    text-decoration: none;
    margin-right: 5px;
}

table {
  background-color: #f6f6ef;
  width: 100%;
}

tr {
  text-align: left;
}
</style>
