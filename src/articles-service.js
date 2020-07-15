const ArticlesService = {
  getAllArticles(knex) {
    // return 'all the articles!!';
    // return Promise.resolve('all the articles!!')
    return knex.select('*').from('blogful_articles');
  }
};

module.exports = ArticlesService;