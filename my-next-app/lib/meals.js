import sql from 'better-sqlite3'
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs'
const db = sql('meals.db');

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve,1000));
    // throw new Error('Loading meal Failed')
    return db.prepare('SELECT * FROM meals').all();
}
export  function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug=?').get(slug);
}
export async function saveMeal(meal){
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const stream = fs.createWriteStream(`public/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
          throw new Error('Saving image failed!');
        }
      });
    meal.image = `/${fileName}`;
    db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}