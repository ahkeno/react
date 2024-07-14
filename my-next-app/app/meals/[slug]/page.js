import classes from './page.module.css'
import { getMeal} from '@/lib/meals';
import Image from 'next/image'
import { notFound } from 'next/navigation';
// auto generate meta data and function name should give 'generateMetadata'
export async function generateMetadata({params}){
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}
  
export default function MealDetail({params}){
  const meal = getMeal(params.slug);
  if(!meal){
    notFound()
   }
    return(
      <>
      <header className={classes.header}>
        <div className={classes.image}>
         adss <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
      </>
    )
}