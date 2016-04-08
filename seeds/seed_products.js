
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('products').del(),

    // Inserts seed entries
    knex('products').insert({
      id: 1,
      title: 'X-Men Comics',
      image: 'http://vignette1.wikia.nocookie.net/marveldatabase/images/d/d4/X-Men_Vol_2_1_Variant_B.jpg/revision/latest?cb=20091219024111',
      price: 5,
      stock: true,
      rating: 3,
      category: 'Awesome',
      info: 'Team of mutants that are born with their powers'
    }),
    knex('products').insert({
      id: 2,
      title: 'Guardians of the Galaxy Comics',
      image: 'http://vignette1.wikia.nocookie.net/marveldatabase/images/2/2a/Free_Comic_Book_Day_Vol_2014_Guardians_of_the_Galaxy.jpg/revision/latest?cb=20140505191214',
      price: 6,
      stock: true,
      rating: 5,
      category: 'Galaxy',
      info: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.'
    }),
    knex('products').insert({
      id: 3,
      title: 'Ironman Comics',
      image: 'http://imgc.allpostersimages.com/images/P-473-488-90/92/9235/N4E3500Z/posters/marvel-comics-retro-the-invincible-iron-man-comic-book-cover-no-47-breaking-through-chains-aged.jpg',
      price: 4,
      stock: true,
      rating: 2,
      category: 'Awesome',
      info: 'After being held captive in an Afghan cave, an engineer creates a unique weaponized suit of armor to fight evil.'
    }),
    knex('products').insert({
      id: 4,
      title: 'Batman Comics',
      image: 'http://goodcomics.comicbookresources.com/wp-content/uploads/2014/03/batcover3.jpg',
      price: 2,
      stock: true,
      rating: 1,
      category: 'Worst',
      info: 'Rich guy gets bored and becomes Batman to save his fake city of Gotham'
    }),
    knex('products').insert({
      id: 5,
      title: 'The Avengers Comics',
      image: 'http://3.bp.blogspot.com/-mRdk-dkCfq4/TyiR1KJgMWI/AAAAAAAAOK4/P7qB0HyeD7I/s1600/Avengers100_01.jpg',
      price: 3,
      stock: true,
      rating: 3,
      category: 'Team',
      info: 'Earths mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.'
    })
  );
};
