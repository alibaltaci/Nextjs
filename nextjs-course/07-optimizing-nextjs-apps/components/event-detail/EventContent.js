import classes from './EventContent.module.css';

function EventContent( props ) {

  console.log(props);

  const { description } = props;

  return (
    <section className={classes.content}>
      <p>{ description }</p>
    </section>
  );
}

export default EventContent;
