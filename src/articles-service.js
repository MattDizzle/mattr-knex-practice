const ArticlesService = {
  getAllArticles(knex) {
    console.log('running knex.select=', knex.select);
    return knex
      .select('*').from('blogful_articles');
  }
};

module.exports = ArticlesService;